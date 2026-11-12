# Claude in Chrome: collect the Nov 14 guest artists' links

Paste everything below the line into Claude in Chrome.

---

I'm building the event page for **Stuff the Artist**, a show on Saturday, November 14,
2026 at Columbus Bar in Columbus, Indiana. The headliner is **Yxung Lxve**
(https://open.spotify.com/artist/6g91eYiklNIugok5b35mdZ). I need the Spotify artist
page for each special guest so visitors can play their music. Only read pages and
copy URLs. Don't follow, like, post or log in to anything.

**Guests:**
1. $uicybin (might be spelled Suicybin)
2. Nezio
3. Amier Lane
4. Teqz
5. Lil Bars
6. StickNasty The Coldhearted Kid (he's featured on Yxung Lxve's album *Gumdrop Sunset*, on the track "A New Greeting")
7. David Cameron (common name, so be careful)
8. Baby Gawdey
9. Anxiety Jay

**For each guest:**
1. Search Spotify at https://open.spotify.com/search for the name. Click the **Artists** tab.
2. Find the right artist. Good signs:
   - They're a small, independent hip-hop, rap or alt artist.
   - They're from Indiana or Ohio, especially the Columbus, Indianapolis or Bloomington area.
   - They're connected to Yxung Lxve: a feature together, the same playlists, "Fans also like", or follows on Instagram.
   - Their Instagram or another profile mentions the Nov 14 Columbus Bar show or the flyer designer @redfoxindy.
3. If a guest has no Spotify, check SoundCloud, then YouTube, and give that link instead.
4. Also grab their Instagram if it's easy to find and clearly them.
5. If you're not sure you have the right artist, mark the entry **UNSURE** and say why. Don't guess.

**Clean the URLs:** remove anything after `?` (for example `?si=...`).

**Return exactly this format:**

```
## Guest links
| Artist | Spotify | Other (SoundCloud/YouTube) | Instagram | Confidence |
|---|---|---|---|---|
| $uicybin | https://open.spotify.com/artist/... | | | sure / UNSURE (why) |
| Nezio | | | | |
| Amier Lane | | | | |
| Teqz | | | | |
| Lil Bars | | | | |
| StickNasty The Coldhearted Kid | | | | |
| David Cameron | | | | |
| Baby Gawdey | | | | |
| Anxiety Jay | | | | |
```
