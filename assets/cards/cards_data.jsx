import arcane from "./Arcane.jpg";
import arcane_banner from "./banners/Arcane-banner.webp";
import arcane_logo from "./logos/Arcane-logo.webp" ;  
import badboys from "./badboys.jpeg";
import badboys_banner from "./banners/badboys-banner.jpg";
import badboys_logo from "./logos/badboys-logo.webp";
import dandadan from "./dan-da-dan.png";
import dandandan_banner from "./banners/dandandan-banner.webp";
import dandandan_logo from "./logos/DanDanDanlogo.webp";
import emilyinparis from "./emily-in-paris.png";
import emilyinparis_banner from "./banners/emily-in-paris-banner.webp";
import emilyinparis_logo from "./logos/emily-in-paris-logo.webp";
import flash from "./Flash.jpg";
import flash_banner from "./banners/flash-banner.webp";
import flash_logo from "./logos/flash-logo.webp";
import lovenextdoor from "./love-next-door.jpg";
import lovenextdoor_banner from "./banners/love-next-door-banner.webp";
import lovenextdoor_logo from "./logos/love-next-door-logo.webp";
import spellbound from "./spellbound.jpg";
import spellbound_banner from "./banners/spell-bound-banner.webp";
import spellbound_logo from "./logos/spell-bound-logo.webp";
import madagescarescape2africa from "./madagascar-escape-2-africa.jpg";
import madagescarescape2africa_banner from "./banners/madagescarescape2africa-banner.webp";
import madagescarescape2africa_logo from "./logos/madagescarescape2africa-logo.webp";
import minionstheriseofgru from "./minions-the-rise-of-gru.avif";
import minionstheriseofgru_banner from "./banners/minionstheriseofgru-banner.webp";
import minionstheriseofgru_logo from "./logos/minionstheriseofgru-logo.webp";
import ourlittlesecret from "./our-little-secret.jpg";
import ourlittlesecret_banner from "./banners/ourlittlesecret-banner.webp";
import ourlittlesecret_logo from "./logos/ourlittlesecret-logo.webp";
import strangerthings from "./strangerthings.jpg";
import strangerthings_banner from "./banners/strangerthings-banner.webp";
import strangerthings_logo from "./logos/stranger-things-logo.png";
import avengersendgame from "./avengers-end-game.webp";
import avengersendgame_banner from "./banners/avengersendgame-banner.png";
import avengersendgame_logo from "./logos/avengersendgame-logo.png";
import breakingbad from "./breaking-bad.png";
import breakingbad_banner from "./banners/breakingbad-banner.webp";
import breakingbad_logo from "./logos/breakingbad-logo.webp";
import thewitcher from "./thw-witcher.jpg";
import thewitcher_banner from "./banners/thewitcher-banner.webp";
import thewitcher_logo from "./logos/thewitcher-logo.webp";
import blackpanther from "./black-panther.avif";
import blackpanther_banner from "./banners/black-panther-banner.jpg";
import blackpanther_logo from "./logos/black-panther-logo.png";
import bridgerton from "./Bridgerton.jpg";
import bridgerton_banner from "./banners/bridgerton-banner.webp";
import bridgerton_logo from "./logos/bridgerton-logo.webp";
import inception from "./Inception.webp";
import inception_banner from "./banners/inception-banner.jpg";
import inception_logo from "./logos/inception-logo.webp";
import avatar from "./avatar-the-way-of-water.jpg";
import avatar_banner from "./banners/avatar-banner.jpg";
import avatar_logo from "./logos/avatar-logo.png";
import johnwick4 from "./John-Wick-Chapter-4.webp";
import johnwick4_banner from "./banners/johnwick4-banner.jpeg";
import johnwick4_logo from "./logos/johnwick4-logo.webp";
import spidermanacrossthespiderverse from "./spiderman-across-the-spider-verse.jpg";
import spidermanacrossthespiderverse_banner from "./banners/spidermanacrossthespiderverse-banner.webp";
import spidermanacrossthespiderverse_logo from "./logos/spidermanacrossthespiderverse-logo.webp";
import spidermanfarfromhome from "./spiderman-far-from-home.webp";
import spidermanfarfromhome_banner from "./banners/spidermanfarfromhome-banner.webp";
import spidermanfarfromhome_logo from "./logos/spidermanfarfromhome-logo.webp";

const cards_data = [
    {
        id: 1,
        image: flash,
        name: "Flash",
        type: "Movie",
        banner: flash_banner,
        logo: flash_logo,
        released_year: '2023',
        age_restriction: '13+',
        popularity: "high",
        about: "When the Flash uses his unique powers to alter a tragedy in his past, he causes a time paradox that could devastate the present — and the future.",
        starring: "Ezra Miller, Michael Keaton, Sasha Calle",
        genre: "Action, Adventure, Sci-Fi",
        url: "https://www.youtube.com/embed/hebWYacbdvc?si=gqiWrx3YKZTPoklJ",
    },
    {
        id: 2,
        image:badboys,
        name:"Bad Boys",
        type: "Movie",
        banner: badboys_banner,
        logo: badboys_logo,
        released_year: '2024',
        age_restriction: '18+',
        popularity: "high",
        about: "When a mysterious enemy frames their late captain for corruption, Miami cops Mike and Marcus go rogue to expose a conspiracy — and clear their own names.",
        starring: "Will Smith, Martin Lawrence",
        genre: "Action, Comedy, Crime",
        url: "https://www.youtube.com/embed/ZTQyMmz-cQE?si=zfF08CqvdtTQDrDf",
    },
    {
        id: 3,
        image: dandadan,
        name: "Dan Da Dan",
        type: "TV-Series",
        banner: dandandan_banner,
        logo: dandandan_logo,
        released_year: '2024',
        age_restriction: '18+',
        popularity: "high",
        about: "In a bet to prove whether ghosts or aliens exist, two high schoolers face terrifying paranormal threats, gain superpowers and maybe even fall in love?!",
        starring: "Yuko Natsuyoshi, Taku Yashiro",
        genre: "Anime, Comedy, Supernatural",
        url: "https://www.youtube.com/embed/0XJxfbN36Uw?si=KWozlhsxgw0lk2vj",
    },
    {
        id: 4,
        image: emilyinparis,
        name: "Emily In Paris",
        type: "TV-Series",
        banner: emilyinparis_banner,
        logo: emilyinparis_logo,
        released_year: '2020 - 2024',
        age_restriction: '16+',
        popularity: "high",
        about: "New passions. New fashions. New Emily? A plucky American marketing whiz spreads her wings in life and love after landing her dream job in Paris.",
        starring: "Lily Collins, Ashley Park",
        genre: "Comedy, Drama, Romance",
        url: "https://www.youtube.com/embed/lptctjAT-Mk?si=ShqSeT7rHdX0Cswo",
    },
    {
        id: 5,
        image:arcane,
        name:"Arcane",
        type: "TV-Series",
        banner: arcane_banner,
        logo: arcane_logo,
        released_year: '2021 - 2024',
        age_restriction: '13+',
        popularity: "high",
        about: "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
        starring: "Hailee Steinfeld, Ella Purnell",
        genre: "Animation, Action, Fantasy",
        url: "https://www.youtube.com/embed/hsffPST-x1k?si=h_eU0Kv5gmqGKUkZ",
    },
    {
        id: 6,
        image: lovenextdoor,
        name: "love next door",
        type: "TV-Series",
        banner: lovenextdoor_banner,
        logo: lovenextdoor_logo,
        released_year: '2024',
        age_restriction: '13+',
        popularity: "high",
        about: "A woman attempting to reboot her life returns to Korea and becomes entangled with her childhood friend — with whom she shares a complicated history.",
        starring: "Kim Go-eun, Lee Min-ho",
        genre: "Romance, Drama",
        url: "https://www.youtube.com/embed/C3TpiZndAOo?si=6nGizsXkGBlIWwLt",
    },
    {
        id: 7,
        image: spellbound,
        name: "Spell Bound",
        type: "Movie",
        banner: spellbound_banner,
        logo: spellbound_logo,
        released_year: '2024',
        age_restriction: '7+',
        popularity: "high",
        about: "When a powerful spell turns her parents into giant monsters, a teenage princess must journey into the wild to reverse the curse before it's too late.",
        starring: "Chloë Grace Moretz, Tom Holland",
        genre: "Fantasy, Adventure, Family",
        url: "https://www.youtube.com/embed/jGQiq1ZuCW8?si=f-6US7EQY1grQlCF",
    },
    {
        id: 8,
        image: madagescarescape2africa,
        name: "Madagescar: Escape 2 Africa",
        type: "Movie",
        banner: madagescarescape2africa_banner,
        logo: madagescarescape2africa_logo,
        released_year: '2008',
        age_restriction: '7+',
        popularity: "moderate",
        about: "A botched rescue strands Alex the lion and his companions in Africa. Sadly, Alex discovers he has little in common with the locals.",
        starring: "Ben Stiller, Chris Rock, Jada Pinkett Smith",
        genre: "Animation, Adventure, Comedy",
        url: "https://www.youtube.com/embed/MUAbupPbGbQ?si=G3bwxh_e-HqX_ssj",
    },
    {
        id: 9,
        image: minionstheriseofgru,
        name: "Minions: The rise of Gru",
        type: "TV-Series",
        banner: minionstheriseofgru_banner,
        logo: minionstheriseofgru_logo,
        released_year: '2022',
        age_restriction: '7+',
        popularity: "moderate",
        about: "Rejected by his supervillain idols, 12-year-old Gru sets out to prove his despicable nature with the help of his bumbling team of Minions.",
        starring: "Steve Carell, Pierre Coffin",
        genre: "Animation, Adventure, Comedy",
        url: "https://www.youtube.com/embed/6DxjJzmYsXo?si=K_kw3kaPup06HKsg",
    },
    {
        id: 10,
        image: ourlittlesecret,
        name: "Our Little Secret",
        type: "Movie",
        banner: ourlittlesecret_banner,
        logo: ourlittlesecret_logo,
        released_year: '2024',
        age_restriction: '13+',
        popularity: "high",
        about: "After discovering their significant others are siblings, two resentful exes must spend Christmas under one roof — while hiding their romantic history.",
        starring: "Emma Stone, Andrew Garfield",
        genre: "Romantic Comedy, Drama",
        url: "https://www.youtube.com/embed/fcc9G9PXTEE?si=5XGaNUPaHqGMwtl0",
    },
    {
        id: 11,
        image: strangerthings,
        name: "Stranger Things",
        type: "TV-Series",
        banner: strangerthings_banner,
        logo: strangerthings_logo,
        released_year: "2016 - 2024",
        age_restriction: "16+",
        popularity: "high",
        about: "In a small town, young friends discover a secret government lab, strange experiments, and a doorway to another dimension called the Upside Down.",
        starring: "Millie Bobby Brown, Finn Wolfhard",
        genre: "Sci-Fi, Horror, Drama",
        url: "https://www.youtube.com/embed/sBEvEcpnG7k?si=i0aiGfKSqi9164Rn",
    },
    {
        id: 12,
        image: avengersendgame,
        name: "Avengers: Endgame",
        type: "Movie",
        banner: avengersendgame_banner,
        logo: avengersendgame_logo,
        released_year: "2019",
        age_restriction: "13+",
        popularity: "high",
        about: "After Thanos' snap, the remaining Avengers assemble once more to undo the damage and restore balance to the universe.",
        starring: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
        genre: "Action, Sci-Fi, Superhero",
        url: "https://www.youtube.com/embed/hA6hldpSTF8?si=37lFkaVzVE8qHBJw",
    },
    {
        id: 13,
        image: breakingbad,
        name: "Breaking Bad",
        type: "TV-Series",
        banner: breakingbad_banner,
        logo: breakingbad_logo,
        released_year: "2008 - 2013",
        age_restriction: "18+",
        popularity: "high",
        about: "A struggling chemistry teacher turns to cooking methamphetamine to secure his family's future after being diagnosed with terminal cancer.",
        starring: "Bryan Cranston, Aaron Paul, Anna Gunn",
        genre: "Drama, Thriller",
        url: "https://www.youtube.com/embed/1JLUn2DFW4w?si=E-k2FrDcEkJTAO31",
    },
    {
        id: 14,
        image: thewitcher,
        name: "The Witcher",
        type: "TV-Series",
        banner: thewitcher_banner,
        logo: thewitcher_logo,
        released_year: "2019 - 2024",
        age_restriction: "18+",
        popularity: "moderate",
        about: "Geralt of Rivia, a monster hunter, journeys through a dark world filled with danger and intrigue, crossing paths with destiny and chaos.",
        starring: "Henry Cavill, Anya Chalotra, Freya Allan",
        genre: "Fantasy",
        url: "https://www.youtube.com/embed/ndl1W4ltcmg?si=qXFIGd-NgHorLoIJ",
    },
    {
        id: 15,
        image: blackpanther,
        name: "Black Panther",
        type: "Movie",
        banner: blackpanther_banner,
        logo: blackpanther_logo,
        released_year: "2018",
        age_restriction: "13+",
        popularity: "moderate",
        about: "T'Challa, the king of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider.",
        starring: "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o",
        genre: "Action, Superhero, Sci-Fi",
        url: "https://www.youtube.com/embed/xjDjIWPwcPU?si=3KgypXG1ONtH1peN",
    },
    {
        id: 16,
        image: bridgerton,
        name: "Bridgerton",
        type: "TV-Series",
        banner: bridgerton_banner,
        logo: bridgerton_logo,
        released_year: "2020 - 2024",
        age_restriction: "16+",
        popularity: "moderate",
        about: "Romance, scandal, and intrigue are at the forefront of London's high society as the Bridgerton family navigates love and life.",
        starring: "Adjoa Andoh, Julie Andrews, Lorraine Ashbourne",
        genre: "Drama, Romance",
        url: "https://www.youtube.com/embed/gpv7ayf_tyE?si=I1KUewYl01L1OOh0",
    },
    {
        id: 17,
        image: inception,
        name: "Inception",
        type: "Movie",
        banner: inception_banner,
        logo: inception_logo,
        released_year: "2010",
        age_restriction: "13+",
        popularity: "moderate",
        about: "A skilled thief, who steals corporate secrets through dream-sharing technology, is given the chance to have his criminal history erased as payment for implanting another person's idea into a target's subconscious.",
        starring: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
        genre: "Sci-Fi, Thriller",
        url: "https://www.youtube.com/embed/YoHD9XEInc0?si=dtQoJKjKKUashedh",
    },
    {
        id: 18,
        image: avatar,
        name: "Avatar",
        type: "Movie",
        banner: avatar_banner,
        logo: avatar_logo,
        released_year: "2009",
        age_restriction: "13+",
        popularity: "moderate",
        about: "On the lush alien world of Pandora, a paraplegic Marine becomes torn between following his orders and protecting the home of the indigenous people he has grown to love.",
        starring: "Sam Worthington, Zoe Saldana, Sigourney Weaver",
        genre: "Action, Adventure",
        url: "https://www.youtube.com/embed/5PSNL1qE6VY?si=kkCfpy8exk0PuyPb",
    },
    {
        id: 19,
        image: johnwick4,
        name: "John Wick 4",
        type: "Movie",
        banner: johnwick4_banner,
        logo: johnwick4_logo,
        released_year: "2023",
        age_restriction: "18+",
        popularity: "moderate",
        about: "John Wick uncovers a path to defeating the High Table, but before he can earn his freedom, he must face a new enemy with powerful alliances.",
        starring: "Keanu Reeves, Laurence Fishburne, George Georgiou",
        genre: "Action, Thriller",
        url: "https://www.youtube.com/embed/qEVUtrk8_B4?si=GMIq9j6Gm7hhObIc",
    },
    {
        id: 20,
        image: spidermanacrossthespiderverse,
        name: "Spider-Man: Across the Spider-Verse",
        type: "Movie",
        banner: spidermanacrossthespiderverse_banner,
        logo: spidermanacrossthespiderverse_logo,
        released_year: '2023',
        age_restriction: '7+',
        popularity: "moderate",
        about: "After reuniting with Gwen Stacy, Miles Morales plunges into the multiverse and faces off against other Spider-People while trying to protect his loved ones.",
        starring: " Shameik Moore, Hailee Steinfeld, Brian Tyree Henry",
        genre: "Animation, Action",
        url: "https://www.youtube.com/embed/cqGjhVJWtEg?si=VG5HRrzgqEX8LAYG",
    },
    {
        id: 21,
        image: spidermanfarfromhome,
        name: "Spider-Man: Far From Home",
        type: "Movie",
        banner: spidermanfarfromhome_banner,
        logo: spidermanfarfromhome_logo,
        released_year: '2019',
        age_restriction: '13+',
        popularity: "high",
        about: "After the events of Endgame, Peter Parker goes on a school trip to Europe, but his plans are interrupted when Nick Fury recruits him to face a new threat.",
        starring: "Tom Holland, Zendaya, Samuel L. Jackson",
        genre: "Action, Superhero",
        url: "https://www.youtube.com/embed/DYYtuKyMtY8?si=y58yGge4NKNspGVg",
    }
]

export default cards_data;