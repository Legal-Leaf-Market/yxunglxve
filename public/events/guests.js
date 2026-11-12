// Trading cards for Stuff the Artist (Nov 14, Columbus Bar).
//
// HOW TO EDIT (on GitHub: open this file, click the pencil, edit, then "Commit changes" to main):
//   bio        = the text on the back of the card. Swap in each artist's own words whenever you get them.
//   spotify    = the code after /artist/ in their Spotify link
//                e.g. https://open.spotify.com/artist/1iKI0Yayiwm91Tlu6BGhH0  ->  "1iKI0Yayiwm91Tlu6BGhH0"
//   soundcloud = their full SoundCloud link, e.g. "https://soundcloud.com/babygawdey"
//   image      = a photo link for the front of the card (Spotify photos are filled in where they exist)
//   track      = a song to name on the card (optional)
//   youtube / instagram / facebook / bandlab = full links, shown on the back of the card
//   bandlabTrack = a BandLab track to play first (the track ID, not the post ID; ask Claude to look it up from a post link)
//   first        = which Play button goes on top when there are two ("SoundCloud", "Spotify" or "BandLab")
//   spotifyTrack = a single Spotify song to link (code after /track/) when there's no Spotify artist page
// Leave a field as "" if you don't have it. The player uses BandLab first, then Spotify, then SoundCloud.
// Players never auto-play; visitors tap to listen.

window.HEADLINER = {
  name: "Yxung Lxve",
  role: "Headliner",
  bio: "Columbus boy under the weather but not so highly clever. Two albums deep this year with Room Library and Gumdrop Sunset, a steady run of singles all the way up to Dr.Robotnic, and Saturday he closes it out at home.",
  spotify: "6g91eYiklNIugok5b35mdZ",
  soundcloud: "",
  image: "/images/profile.jpg",
  track: "Dr.Robotnic",
  youtube: "https://www.youtube.com/@YxungLxve1996",
  instagram: "https://www.instagram.com/yxung_lxve96/",
  facebook: ""
};

window.GUESTS = [
  {
    name: "$uicybin",
    bio: "One of nine special guests stuffing the Columbus Bar stage. Pull up Saturday and hear it live first.",
    spotify: "", soundcloud: "", image: "", track: "",
    youtube: "", instagram: "", facebook: ""
  },
  {
    name: "Nezio",
    bio: "Nezio steps in with \"gangster\" loaded. Saturday it hits the Columbus Bar speakers, and you'll want to be in the room when it does.",
    spotify: "1iKI0Yayiwm91Tlu6BGhH0", soundcloud: "",
    image: "https://i.scdn.co/image/ab6761610000e5eb4024883101f126860b8a119a", track: "gangster",
    youtube: "", instagram: "https://www.instagram.com/_iamnezio/", facebook: ""
  },
  {
    name: "Amier Lane",
    bio: "A deep catalog, from \"Black Hearts\" to \"What Did I Miss?\" to \"Do My Own Thing.\" Amier Lane brings a real following through the door Saturday. Run the catalog back before the show.",
    spotify: "26QW9N1LXqnBJ6je3ByhmF", soundcloud: "https://soundcloud.com/amier-lane",
    image: "https://i.scdn.co/image/ab6761610000e5ebfccf8fde25cca50183208d4f", track: "Black Hearts",
    youtube: "", instagram: "https://www.instagram.com/amierlanemusic/", facebook: ""
  },
  {
    name: "Teqz",
    bio: "\"Mayh3m.\" \"Shroomie HyperDrive.\" \"The Void.\" Teqz names songs like levels in a game, and Saturday the boss fight is at Columbus Bar.",
    spotify: "336r8w1OOOUlL9h1CfmcAY", soundcloud: "",
    image: "https://i.scdn.co/image/ab6761610000e5eb42c9327f5118444dcebf81b4", track: "Mayh3m",
    youtube: "", instagram: "https://www.instagram.com/teqz812/", facebook: ""
  },
  {
    name: "Lil Bars",
    bio: "One of nine special guests stuffing the Columbus Bar stage. The name says what to expect. Hear it live Saturday.",
    spotify: "", soundcloud: "", image: "", track: "",
    youtube: "", instagram: "", facebook: ""
  },
  {
    name: "StickNasty The Coldhearted Kid",
    bio: "\"I am the man behind the mask.\" Columbus, IN rapper raised on MF Doom, Aesop Rock and Wu-Tang. He's on Yxung Lxve's Gumdrop Sunset with \"A New Greeting,\" and on BandLab with fellow guest David Cameron on \"Get Outta Town.\"",
    spotify: "", spotifyTrack: "7Mmi5Q1mUz2lNrbkdBWgmi", soundcloud: "",
    bandlab: "https://www.bandlab.com/sticknasty9", bandlabTrack: "288da5fe-fdf2-457c-a975-e1bfa08c5737",
    image: "https://bl-prod-images.azureedge.net/v1.0/users/8acf06db-3bd8-4c14-9e70-a156a2f7221f/640x640", track: "Get Outta Town",
    youtube: "", instagram: "", facebook: ""
  },
  {
    name: "David Cameron",
    bio: "Coming in straight off SoundCloud. Hit play on the back of this card, then catch David Cameron live at Columbus Bar on Saturday.",
    spotify: "", soundcloud: "https://soundcloud.com/david-cameron-509882173", image: "https://i1.sndcdn.com/avatars-pRvrMwfgMLhyTltQ-nFPyVQ-t500x500.jpg", track: "",
    bandlabTrack: "288da5fe-fdf2-457c-a975-e1bfa08c5737", first: "SoundCloud",
    youtube: "", instagram: "", facebook: ""
  },
  {
    name: "Baby Gawdey",
    bio: "Straight from the SoundCloud underground to the Columbus Bar stage. Get familiar now so you know the words Saturday.",
    spotify: "", soundcloud: "https://soundcloud.com/babygawdey", image: "https://i1.sndcdn.com/avatars-000587123565-fzsea5-t500x500.jpg", track: "",
    youtube: "", instagram: "https://www.instagram.com/chadwants2die/", facebook: "https://www.facebook.com/CrazyCTheProdigy"
  },
  {
    name: "Anxiety Jay",
    bio: "Fresh on Spotify and closing out the special guest list. Anxiety Jay is one to say you saw early. Saturday, Columbus Bar.",
    spotify: "5aEq1lsbCBzTQjQtIPVdeb", soundcloud: "", image: "", track: "",
    youtube: "", instagram: "https://www.instagram.com/anxiety.wav/", facebook: ""
  }
];
