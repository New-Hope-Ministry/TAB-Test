const dateEdited = '8-23-2025';
const copyrighted = '2018-2025';

var allLoaded = false;
var bookSort = false;
var boxesAreOpen = false;
var chapterCount = 0;

var defaultBookID = `id-book1`;
var defaultChapterID = `id-chapter1`;
var defaultFontSize = 1.06;
var defaultLanguageID = 34; // English
var defaultVersionID = `id-version25`; // Version Defaults: KJV = 13, TWF = 25

var activeBookID = null;
var activeChapterID = null;
var activeFontSizeCount = 0;
var activeFontSize = defaultFontSize;
var activeLanguageID = null;
var activeVersionID = null;

var isTWF = true;
var localVoices = [];
var paragraphLayoutDefault = 0;
var redLetterDefault = 0;
var rotateTheme = true;
var savedLocal = false;
var searchOpen = false;
var selectedVerseID = null;
var setRedLetter = 0;
var setTheme = '0';
var verseCount = 0;
var verses = [];

var pastSelectedVersionID = null;
var pastSelectedBookID = null;
var pastSelectedChapterID = null;
var pastSelectedLanguageID = null;
var pastSelectedVerseID = null;

var oldBooks = [
    {
        "c": 50,
        "id": 1,
        "t": "Genesis"
    },
    {
        "c": 40,
        "id": 2,
        "t": "Exodus"
    },
    {
        "c": 27,
        "id": 3,
        "t": "Leviticus"
    },
    {
        "c": 36,
        "id": 4,
        "t": "Numbers"
    },
    {
        "c": 34,
        "id": 5,
        "t": "Deuteronomy"
    },
    {
        "c": 24,
        "id": 6,
        "t": "Joshua"
    },
    {
        "c": 21,
        "id": 7,
        "t": "Judges"
    },
    {
        "c": 4,
        "id": 8,
        "t": "Ruth"
    },
    {
        "c": 31,
        "id": 9,
        "t": "1 Samuel"
    },
    {
        "c": 24,
        "id": 10,
        "t": "2 Samuel"
    },
    {
        "c": 22,
        "id": 11,
        "t": "1 Kings"
    },
    {
        "c": 25,
        "id": 12,
        "t": "2 Kings"
    },
    {
        "c": 29,
        "id": 13,
        "t": "1 Chronicles"
    },
    {
        "c": 36,
        "id": 14,
        "t": "2 Chronicles"
    },
    {
        "c": 10,
        "id": 15,
        "t": "Ezra"
    },
    {
        "c": 13,
        "id": 16,
        "t": "Nehemiah"
    },
    {
        "c": 10,
        "id": 17,
        "t": "Esther"
    },
    {
        "c": 42,
        "id": 18,
        "t": "Job"
    },
    {
        "c": 150,
        "id": 19,
        "t": "Psalms"
    },
    {
        "c": 31,
        "id": 20,
        "t": "Proverbs"
    },
    {
        "c": 12,
        "id": 21,
        "t": "Ecclesiastes"
    },
    {
        "c": 8,
        "id": 22,
        "t": "Song of Solomon"
    },
    {
        "c": 66,
        "id": 23,
        "t": "Isaiah"
    },
    {
        "c": 52,
        "id": 24,
        "t": "Jeremiah"
    },
    {
        "c": 5,
        "id": 25,
        "t": "Lamentations"
    },
    {
        "c": 48,
        "id": 26,
        "t": "Ezekiel"
    },
    {
        "c": 12,
        "id": 27,
        "t": "Daniel"
    },
    {
        "c": 14,
        "id": 28,
        "t": "Hosea"
    },
    {
        "c": 3,
        "id": 29,
        "t": "Joel"
    },
    {
        "c": 9,
        "id": 30,
        "t": "Amos"
    },
    {
        "c": 1,
        "id": 31,
        "t": "Obadiah"
    },
    {
        "c": 4,
        "id": 32,
        "t": "Jonah"
    },
    {
        "c": 7,
        "id": 33,
        "t": "Micah"
    },
    {
        "c": 3,
        "id": 34,
        "t": "Nahum"
    },
    {
        "c": 3,
        "id": 35,
        "t": "Habakkuk"
    },
    {
        "c": 3,
        "id": 36,
        "t": "Zephaniah"
    },
    {
        "c": 2,
        "id": 37,
        "t": "Haggai"
    },
    {
        "c": 14,
        "id": 38,
        "t": "Zechariah"
    },
    {
        "c": 4,
        "id": 39,
        "t": "Malachi"
    }
];

var newBooks = [
    {
        "c": 28,
        "id": 40,
        "t": "Matthew"
    },
    {
        "c": 16,
        "id": 41,
        "t": "Mark"
    },
    {
        "c": 24,
        "id": 42,
        "t": "Luke"
    },
    {
        "c": 21,
        "id": 43,
        "t": "John"
    },
    {
        "c": 28,
        "id": 44,
        "t": "Acts"
    },
    {
        "c": 16,
        "id": 45,
        "t": "Romans"
    },
    {
        "c": 16,
        "id": 46,
        "t": "1 Corinthians"
    },
    {
        "c": 13,
        "id": 47,
        "t": "2 Corinthians"
    },
    {
        "c": 6,
        "id": 48,
        "t": "Galatians"
    },
    {
        "c": 6,
        "id": 49,
        "t": "Ephesians"
    },
    {
        "c": 4,
        "id": 50,
        "t": "Philippians"
    },
    {
        "c": 4,
        "id": 51,
        "t": "Colossians"
    },
    {
        "c": 5,
        "id": 52,
        "t": "1 Thessalonians"
    },
    {
        "c": 3,
        "id": 53,
        "t": "2 Thessalonians"
    },
    {
        "c": 6,
        "id": 54,
        "t": "1 Timothy"
    },
    {
        "c": 4,
        "id": 55,
        "t": "2 Timothy"
    },
    {
        "c": 3,
        "id": 56,
        "t": "Titus"
    },
    {
        "c": 1,
        "id": 57,
        "t": "Philemon"
    },
    {
        "c": 13,
        "id": 58,
        "t": "Hebrews"
    },
    {
        "c": 5,
        "id": 59,
        "t": "James"
    },
    {
        "c": 5,
        "id": 60,
        "t": "1 Peter"
    },
    {
        "c": 3,
        "id": 61,
        "t": "2 Peter"
    },
    {
        "c": 5,
        "id": 62,
        "t": "1 John"
    },
    {
        "c": 1,
        "id": 63,
        "t": "2 John"
    },
    {
        "c": 1,
        "id": 64,
        "t": "3 John"
    },
    {
        "c": 1,
        "id": 65,
        "t": "Jude"
    },
    {
        "c": 22,
        "id": 66,
        "t": "Revelation"
    }
];

// Placeholder for TWF Version
var TWF = {
        "ar": "TWF",
        "id": 28,
        "lid": 34,
        "rdl": 1,
        "sch": 1,
        "t": "Twenty-First Century Version"
    };
var versions = [
    {
        "ar": "ALB",
        "id": 1,
        "lid": 1,
        "rdl": 0,
        "sch": 1,
        "t": "Albanian Bible - Shqip Bibla"
    },
    {
        "ar": "AVD",
        "id": 2,
        "lid": 2,
        "rdl": 0,
        "sch": 0,
        "t": "Arabic Smith Van Dyke (العربية)"
    },
    {
        "ar": "CUS",
        "id": 3,
        "lid": 7,
        "rdl": 0,
        "sch": 0,
        "t": "Chinese Union Simplified Version - 简体中文联盟"
    },
    {
        "ar": "CUSS",
        "id": 4,
        "lid": 7,
        "rdl": 0,
        "sch": 0,
        "t": "Chinese Union Simplified Version w/Strong's - 中國聯合會（簡體）Zhōngguó liánhé huì (jiǎntǐ)"
    },
    {
        "ar": "CUT",
        "id": 5,
        "lid": 11,
        "rdl": 0,
        "sch": 0,
        "t": "Chinese Union Traditional Version - 繁體中文聯會"
    },
    {
        "ar": "CUTS",
        "id": 6,
        "lid": 11,
        "rdl": 0,
        "sch": 0,
        "t": "Chinese Union Traditional Version w/Strong's - 繁体中文聯合 Fántǐ zhōngwén liánhé"
    },
    {
        "ar": "CZK",
        "id": 7,
        "lid": 18,
        "rdl": 0,
        "sch": 1,
        "t": "Czech Bible of Kralice - Czech Bible Kralická"
    },
    {
        "ar": "DSV",
        "id": 8,
        "lid": 22,
        "rdl": 0,
        "sch": 1,
        "t": "Dutch Staten Bible Translation - Dutch Staten Vertaling Statenbijbel"
    },
    {
        "ar": "AKJ",
        "id": 9,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "American King James Version"
    },
    {
        "ar": "ASV",
        "id": 10,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "American Standard Version"
    },
    {
        "ar": "ASVS",
        "id": 11,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "American Standard Version w/Strong's"
    },
    {
        "ar": "AKV",
        "id": 12,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Authorized King James Version"
    },
    {
        "ar": "BSB",
        "id": 13,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Berean Standard Bible"
    },
    {
        "ar": "BBE",
        "id": 14,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Bible in Basic English"
    },
    {
        "ar": "DBY",
        "id": 15,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Darby English Bible"
    },
    {
        "ar": "DRB",
        "id": 16,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Douay-Rheims Bible"
    },
    {
        "ar": "ERV",
        "id": 17,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "English Revised Version"
    },
    {
        "ar": "FBV",
        "id": 18,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Free Bible Version"
    },
    {
        "ar": "KJV",
        "id": 19,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "King James Version"
    },
    {
        "ar": "KJVS",
        "id": 20,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "King James Version w/Strong's"
    },
    {
        "ar": "LSV",
        "id": 21,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Literal Standard Version"
    },
    {
        "ar": "NWB",
        "id": 22,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Noah Webster's Bible"
    },
    {
        "ar": "SLT",
        "id": 23,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Smith's Literal Translation"
    },
    {
        "ar": "T4T",
        "id": 24,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Translation for Translators"
    },
    {
        "ar": "TWF",
        "id": 25,
        "lid": 34,
        "rdl": 1,
        "sch": 1,
        "t": "Twenty-First Century Version"
    },
    {
        "ar": "ULB",
        "id": 26,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Unlocked Literal Bible"
    },
    {
        "ar": "WEB",
        "id": 27,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "World English Bible"
    },
    {
        "ar": "YLT",
        "id": 28,
        "lid": 34,
        "rdl": 0,
        "sch": 1,
        "t": "Young's Literal Translation"
    },
    {
        "ar": "FIN",
        "id": 29,
        "lid": 35,
        "rdl": 0,
        "sch": 1,
        "t": "Old Finnish Bible (1776) Vuoden 1776 raamattu"
    },
    {
        "ar": "FLS",
        "id": 30,
        "lid": 38,
        "rdl": 0,
        "sch": 1,
        "t": "French Louis Segond Version (1910) - Version française de Louis Segond"
    },
    {
        "ar": "FMT",
        "id": 31,
        "lid": 38,
        "rdl": 0,
        "sch": 1,
        "t": "French Martin Version (1744) - Version Martin française"
    },
    {
        "ar": "FOS",
        "id": 32,
        "lid": 38,
        "rdl": 0,
        "sch": 1,
        "t": "French Ostervald Version (1996) - Version française d'Ostervald"
    },
    {
        "ar": "FLB",
        "id": 33,
        "lid": 38,
        "rdl": 0,
        "sch": 1,
        "t": "French New 2005 Bible - Nouvelle 2005 Bible française"
    },
    {
        "ar": "GEL",
        "id": 34,
        "lid": 42,
        "rdl": 0,
        "sch": 1,
        "t": "German Elberfelder Version (1871) - Deutsche Elberfelder Version"
    },
    {
        "ar": "GER",
        "id": 35,
        "lid": 42,
        "rdl": 0,
        "sch": 1,
        "t": "German Elberfelder Version (1905) - Deutsche Elberfelder Version"
    },
    {
        "ar": "GLB",
        "id": 36,
        "lid": 42,
        "rdl": 0,
        "sch": 1,
        "t": "German Luther Bible (1545) - Deutsche Lutherbibel"
    },
    {
        "ar": "GLU",
        "id": 37,
        "lid": 42,
        "rdl": 0,
        "sch": 1,
        "t": "German Luther Bible (1912) - Deutsche Lutherbibel"
    },
    {
        "ar": "GSH",
        "id": 38,
        "lid": 42,
        "rdl": 0,
        "sch": 1,
        "t": "German Schlachter Bible (1951) - Deutsche Schlachter-Bibel"
    },
    {
        "ar": "HIR",
        "id": 39,
        "lid": 48,
        "rdl": 0,
        "sch": 0,
        "t": "Hindi Indian Revised Version (2017/2018) - हिंदी भारतीय संशोधित संस्करण"
    },
    {
        "ar": "HKV",
        "id": 40,
        "lid": 49,
        "rdl": 0,
        "sch": 1,
        "t": "Hungarian Karoli Version - Magyar Karoli Version"
    },
    {
        "ar": "ITL",
        "id": 41,
        "lid": 52,
        "rdl": 0,
        "sch": 1,
        "t": "Indonesian Old Translation - Indonesian Terjemahan Lama"
    },
    {
        "ar": "ITB",
        "id": 42,
        "lid": 52,
        "rdl": 0,
        "sch": 1,
        "t": "New Indonesian Translation (1994) - Indonesian Terjemahan Baru"
    },
    {
        "ar": "ITV",
        "id": 43,
        "lid": 53,
        "rdl": 0,
        "sch": 1,
        "t": "Italian Giovanni Diodati Version (1649) - Versione Giovanni italiana Diodati"
    },
    {
        "ar": "JKY",
        "id": 44,
        "lid": 54,
        "rdl": 0,
        "sch": 0,
        "t": "Japanese Alternative Bible (1954/1955) - 日本語代替聖書"
    },
    {
        "ar": "JBY",
        "id": 45,
        "lid": 54,
        "rdl": 0,
        "sch": 0,
        "t": "Japanese National Literary Bible (1950/1953) - 日本語聖書"
    },
    {
        "ar": "KBQ",
        "id": 46,
        "lid": 55,
        "rdl": 0,
        "sch": 1,
        "t": "Kamano-Kafe Bible - Kamano-Kafe Baepol"
    },
    {
        "ar": "KBV",
        "id": 47,
        "lid": 58,
        "rdl": 0,
        "sch": 0,
        "t": "Korean Bible Version - 한국어 성경 번역"
    },
    {
        "ar": "MAO",
        "id": 48,
        "lid": 62,
        "rdl": 0,
        "sch": 1,
        "t": "Maori Bible Version - Te Paipera Tapu"
    },
    {
        "ar": "BBB",
        "id": 49,
        "lid": 68,
        "rdl": 0,
        "sch": 1,
        "t": "Bishop's Bible"
    },
    {
        "ar": "CBV",
        "id": 50,
        "lid": 68,
        "rdl": 0,
        "sch": 1,
        "t": "Coverdale Bible"
    },
    {
        "ar": "GNV",
        "id": 51,
        "lid": 68,
        "rdl": 0,
        "sch": 1,
        "t": "Geneva Bible"
    },
    {
        "ar": "OPT",
        "id": 52,
        "lid": 70,
        "rdl": 0,
        "sch": 0,
        "t": "Old Persian Translation (1895) - ترجمه فارسی باستان"
    },
    {
        "ar": "PBV",
        "id": 53,
        "lid": 72,
        "rdl": 0,
        "sch": 1,
        "t": "Polish Bible of Gdansk (1881) - Polska Biblia Gdanska"
    },
    {
        "ar": "PBN",
        "id": 54,
        "lid": 72,
        "rdl": 0,
        "sch": 1,
        "t": "Polish New Gdansk Bible (2012) - Polska Nowa Biblia Gdańska"
    },
    {
        "ar": "PTB",
        "id": 55,
        "lid": 73,
        "rdl": 0,
        "sch": 1,
        "t": "Portuguese Free Bible - Bíblia em Português Grátis"
    },
    {
        "ar": "PTC",
        "id": 56,
        "lid": 73,
        "rdl": 0,
        "sch": 1,
        "t": "Portuguese Translation by João Ferreira de Almeida Revised and Corrected - Tradução de João Ferreira de Almeida Revista e Corrigida"
    },
    {
        "ar": "PTA",
        "id": 57,
        "lid": 73,
        "rdl": 0,
        "sch": 1,
        "t": "Portuguese Translation by João Ferreira de Almeida Revised and Updated - Tradução de João Ferreira de Almeida Revista e Atualizada"
    },
    {
        "ar": "RCV",
        "id": 58,
        "lid": 77,
        "rdl": 0,
        "sch": 1,
        "t": "Romanian Cornilescu Version - Versiunea Cornilescu în limba română"
    },
    {
        "ar": "RSB",
        "id": 59,
        "lid": 78,
        "rdl": 0,
        "sch": 0,
        "t": "Russian Synodal Bible (1876) - Русская Синодальная Библия"
    },
    {
        "ar": "SSE",
        "id": 60,
        "lid": 84,
        "rdl": 0,
        "sch": 1,
        "t": "Spanish Holy Scriptures (1569) - Sagradas Escrituras Españolas"
    },
    {
        "ar": "SRV",
        "id": 61,
        "lid": 84,
        "rdl": 0,
        "sch": 1,
        "t": "Spanish Reina Valera (1909) - Reina Valera Española"
    },
    {
        "ar": "SRG",
        "id": 62,
        "lid": 84,
        "rdl": 0,
        "sch": 1,
        "t": "Spanish Reina Valera Gómez (2004) - Reina Valera Gómez Española"
    },
    {
        "ar": "SRZ",
        "id": 63,
        "lid": 84,
        "rdl": 0,
        "sch": 1,
        "t": "Spanish Reina Valera Gómez (2010) - Reina Valera Gómez Española"
    },
    {
        "ar": "SRVS",
        "id": 64,
        "lid": 84,
        "rdl": 0,
        "sch": 1,
        "t": "Spanish Reina Valera w/Strong's (1909) - Reina Valera Española con Strong's"
    },
    {
        "ar": "TAB",
        "id": 65,
        "lid": 91,
        "rdl": 0,
        "sch": 1,
        "t": "The Tagalog Bible (1905) -  Ang Tagalog Biblia"
    },
    {
        "ar": "TVB",
        "id": 66,
        "lid": 95,
        "rdl": 0,
        "sch": 1,
        "t": "Turkish Bible Version - Türkçe İncil Versiyonu"
    },
    {
        "ar": "VCV",
        "id": 67,
        "lid": 99,
        "rdl": 0,
        "sch": 1,
        "t": "Vietnamese Cadman Version (1934) - Phiên bản Cadman Việt Nam"
    }
];

var languages = [
    {
        "idx": 0,
        "lid": 1,
        "lng": "Albanian - Shqip",
        "lngc": "sq-AL"
    },
    {
        "idx": 1,
        "lid": 2,
        "lng": "Arabic - اَلْعَرَبِيَّةُ (al-ʿarabiyyah)",
        "lngc": "ar-SA"
    },
    {
        "idx": 2,
        "lid": 7,
        "lng": "Chinese Simplified - 简体中文 (jiǎntǐ zhōngwén)",
        "lngc": "zh-Hans"
    },
    {
        "idx": 3,
        "lid": 11,
        "lng": "Chinese Traditional - 繁體中文 (fántǐ zhōngwén)",
        "lngc": "zh-Hant"
    },
    {
        "idx": 4,
        "lid": 18,
        "lng": "Czech čeština",
        "lngc": "cs-CZ"
    },
    {
        "idx": 5,
        "lid": 22,
        "lng": "Dutch - Nederlands",
        "lngc": "nl-NL"
    },
    {
        "idx": 6,
        "lid": 34,
        "lng": "English",
        "lngc": "en-US"
    },
    {
        "idx": 7,
        "lid": 35,
        "lng": "Finnish - Suomi",
        "lngc": "fi-FI"
    },
    {
        "idx": 8,
        "lid": 38,
        "lng": "French - Français",
        "lngc": "fr-FR"
    },
    {
        "idx": 9,
        "lid": 42,
        "lng": "German - Deutsch",
        "lngc": "de-DE"
    },
    {
        "idx": 10,
        "lid": 48,
        "lng": "Hindi - हिन्दी (Hindī)",
        "lngc": "hi-IN"
    },
    {
        "idx": 11,
        "lid": 49,
        "lng": "Hungarian - magyar",
        "lngc": "hu-HU"
    },
    {
        "idx": 12,
        "lid": 52,
        "lng": "Indonesian - Bahasa Indonesia",
        "lngc": "id-ID"
    },
    {
        "idx": 13,
        "lid": 53,
        "lng": "Italian - Italiano",
        "lngc": "it-IT"
    },
    {
        "idx": 14,
        "lid": 54,
        "lng": "Japanese - 日本語",
        "lngc": "ja-JP"
    },
    {
        "idx": 15,
        "lid": 55,
        "lng": "Kamano-Kafe",
        "lngc": "kmo"
    },
    {
        "idx": 16,
        "lid": 58,
        "lng": "Korean - 한국인",
        "lngc": "ko-KR"
    },
    {
        "idx": 17,
        "lid": 62,
        "lng": "Maori - Māori",
        "lngc": "mi-NZ"
    },
    {
        "idx": 18,
        "lid": 68,
        "lng": "Olde English",
        "lngc": "en-olde"
    },
    {
        "idx": 19,
        "lid": 70,
        "lng": "Persian Farsi - دری (Dari)",
        "lngc": "fa-IR"
    },
    {
        "idx": 20,
        "lid": 72,
        "lng": "Polish - Polski",
        "lngc": "pl-PL"
    },
    {
        "idx": 21,
        "lid": 73,
        "lng": "Portuguese - Português",
        "lngc": "pt-BR"
    },
    {
        "idx": 22,
        "lid": 77,
        "lng": "Romanian - Română",
        "lngc": "ro-RO"
    },
    {
        "idx": 23,
        "lid": 78,
        "lng": "Russian - русский (russkiy)",
        "lngc": "ru-RU"
    },
    {
        "idx": 24,
        "lid": 84,
        "lng": "Spanish - Español",
        "lngc": "es-ES"
    },
    {
        "idx": 25,
        "lid": 91,
        "lng": "Tagalog",
        "lngc": "tl-PH"
    },
    {
        "idx": 26,
        "lid": 95,
        "lng": "Turkish - Türkçe",
        "lngc": "tr-TR"
    },
    {
        "idx": 27,
        "lid": 99,
        "lng": "Vietnamese - Tiếng Việt",
        "lngc": "vi-VN"
    }
]