// Get visitors out of in-app browsers (Messenger, Facebook, Instagram, TikTok, Snapchat...)
// and into their real browser, where Cash App, texting and saved carts work properly.
// Runs on every page load.
//  - Android: jumps straight to the default browser.
//  - iPhone: tries to open Safari, and shows a bar with an "Open in Safari" button
//    (some iOS versions only allow that on a tap).
(function () {
  var ua = navigator.userAgent || "";
  var inApp = /FBAN|FBAV|FB_IAB|FBIOS|FB4A|Messenger|Orca-Android|Instagram|musical_ly|Bytedance|TikTok|Snapchat|Twitter|LinkedInApp|Line\//i.test(ua);

  // Clean up hand-off markers: ?_h= carries a #hash through Android, ?_ext=1 means
  // the hand-off already failed once on this load (so don't loop).
  var cameBack = false;
  try {
    var u = new URL(location.href);
    var h = u.searchParams.get("_h");
    cameBack = u.searchParams.get("_ext") === "1";
    if (h || cameBack) {
      u.searchParams.delete("_h");
      u.searchParams.delete("_ext");
      history.replaceState(null, "", u.pathname + (u.search || "") + (h ? "#" + h : location.hash));
    }
  } catch (e) {}

  if (!inApp) return;

  var isAndroid = /Android/i.test(ua);
  var isIOS = /iPhone|iPad|iPod/i.test(ua);

  function androidUrl() {
    var u = new URL(location.href);
    if (u.hash) { u.searchParams.set("_h", u.hash.slice(1)); u.hash = ""; }
    var plain = u.toString();
    var back = new URL(plain); back.searchParams.set("_ext", "1");
    return "intent://" + plain.replace(/^https?:\/\//, "") +
      "#Intent;scheme=https;action=android.intent.action.VIEW;S.browser_fallback_url=" +
      encodeURIComponent(back.toString()) + ";end";
  }
  function iosUrl() { return "x-safari-" + location.href; }
  function openOutside() { location.href = isAndroid ? androidUrl() : iosUrl(); }

  // Every load inside the app: try right away (unless this load is the Android fallback).
  if (!cameBack && (isAndroid || isIOS)) {
    setTimeout(openOutside, 60);
  }

  // Fallback bar (shows if we're still here).
  function bar() {
    if (document.getElementById("yl-ext")) return;
    var css = document.createElement("style");
    css.textContent =
      "#yl-ext{position:fixed;left:0;right:0;top:0;z-index:9999;display:flex;align-items:center;gap:10px;" +
      "padding:10px 12px;background:#e6c27a;color:#0b0d1f;font:600 14px/1.3 Inter,system-ui,sans-serif;" +
      "box-shadow:0 6px 24px rgba(0,0,0,.4)}" +
      "#yl-ext span{flex:1}#yl-ext small{display:block;font-weight:500;font-size:12px;opacity:.8}" +
      "#yl-ext button{font:700 13px Inter,system-ui,sans-serif;border:0;border-radius:999px;padding:9px 14px;" +
      "background:#0b0d1f;color:#e6c27a;white-space:nowrap}" +
      "#yl-ext .x{background:none;color:#0b0d1f;padding:6px;font-size:18px;line-height:1}" +
      "body.yl-ext-on{padding-top:64px}";
    document.head.appendChild(css);
    var b = document.createElement("div");
    b.id = "yl-ext";
    b.setAttribute("role", "region");
    b.setAttribute("aria-label", "Open in your browser");
    var name = isIOS ? "Safari" : "your browser";
    b.innerHTML = '<span>Open in ' + name + ' so checkout works<small>Or tap ••• → Open in ' + (isIOS ? "external browser" : "browser") + '</small></span>' +
      '<button type="button" class="go">Open</button><button type="button" class="x" aria-label="Dismiss">✕</button>';
    b.querySelector(".go").onclick = openOutside;
    b.querySelector(".x").onclick = function () { b.remove(); document.body.classList.remove("yl-ext-on"); };
    document.body.appendChild(b);
    document.body.classList.add("yl-ext-on");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { setTimeout(bar, 700); });
  else setTimeout(bar, 700);
})();
