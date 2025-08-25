const defaultChronDayID = `id-chronDay1`;
const defaultChronChapterID = `id-chronChapter1`;
const defaultChronVersionID = 25;
const defaultChronVersion = `id-version${defaultChronVersionID}`;

var activeChronDayID = null;
var activeChronChapterID = null;
var activeChronVersion = null;
var activeChronVersionID = null;
var activeChronVersionText = null;

var pastActiveChronDayID = null;
var pastActiveChronChapterID = null;
var pastActiveChronVersion = null;
var newday = false;

const chronPlan = [
    {
        "bid": 1,
        "cid": 1,
        "cn": 1,
        "dy": 1,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 2,
        "cn": 2,
        "dy": 1,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 3,
        "cn": 3,
        "dy": 1,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 4,
        "cn": 4,
        "dy": 2,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 5,
        "cn": 5,
        "dy": 2,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 6,
        "cn": 6,
        "dy": 2,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 7,
        "cn": 7,
        "dy": 2,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 8,
        "cn": 8,
        "dy": 3,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 9,
        "cn": 9,
        "dy": 3,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 10,
        "cn": 10,
        "dy": 3,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 11,
        "cn": 11,
        "dy": 3,
        "t": "Genesis"
    },
    {
        "bid": 18,
        "cid": 12,
        "cn": 1,
        "dy": 4,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 13,
        "cn": 2,
        "dy": 4,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 14,
        "cn": 3,
        "dy": 4,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 15,
        "cn": 4,
        "dy": 4,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 16,
        "cn": 5,
        "dy": 4,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 17,
        "cn": 6,
        "dy": 5,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 18,
        "cn": 7,
        "dy": 5,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 19,
        "cn": 8,
        "dy": 5,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 20,
        "cn": 9,
        "dy": 5,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 21,
        "cn": 10,
        "dy": 6,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 22,
        "cn": 11,
        "dy": 6,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 23,
        "cn": 12,
        "dy": 6,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 24,
        "cn": 13,
        "dy": 6,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 25,
        "cn": 14,
        "dy": 7,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 26,
        "cn": 15,
        "dy": 7,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 27,
        "cn": 16,
        "dy": 7,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 28,
        "cn": 17,
        "dy": 8,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 29,
        "cn": 18,
        "dy": 8,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 30,
        "cn": 19,
        "dy": 8,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 31,
        "cn": 20,
        "dy": 8,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 32,
        "cn": 21,
        "dy": 9,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 33,
        "cn": 22,
        "dy": 9,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 34,
        "cn": 23,
        "dy": 9,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 35,
        "cn": 24,
        "dy": 10,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 36,
        "cn": 25,
        "dy": 10,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 37,
        "cn": 26,
        "dy": 10,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 38,
        "cn": 27,
        "dy": 10,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 39,
        "cn": 28,
        "dy": 10,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 40,
        "cn": 29,
        "dy": 11,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 41,
        "cn": 30,
        "dy": 11,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 42,
        "cn": 31,
        "dy": 11,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 43,
        "cn": 32,
        "dy": 12,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 44,
        "cn": 33,
        "dy": 12,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 45,
        "cn": 34,
        "dy": 12,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 46,
        "cn": 35,
        "dy": 13,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 47,
        "cn": 36,
        "dy": 13,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 48,
        "cn": 37,
        "dy": 13,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 49,
        "cn": 38,
        "dy": 14,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 50,
        "cn": 39,
        "dy": 14,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 51,
        "cn": 40,
        "dy": 15,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 52,
        "cn": 41,
        "dy": 15,
        "t": "Job"
    },
    {
        "bid": 18,
        "cid": 53,
        "cn": 42,
        "dy": 15,
        "t": "Job"
    },
    {
        "bid": 1,
        "cid": 54,
        "cn": 12,
        "dy": 16,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 55,
        "cn": 13,
        "dy": 16,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 56,
        "cn": 14,
        "dy": 16,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 57,
        "cn": 15,
        "dy": 16,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 58,
        "cn": 16,
        "dy": 17,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 59,
        "cn": 17,
        "dy": 17,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 60,
        "cn": 18,
        "dy": 17,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 61,
        "cn": 19,
        "dy": 18,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 62,
        "cn": 20,
        "dy": 18,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 63,
        "cn": 21,
        "dy": 18,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 64,
        "cn": 22,
        "dy": 19,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 65,
        "cn": 23,
        "dy": 19,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 66,
        "cn": 24,
        "dy": 19,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 67,
        "cn": 25,
        "dy": 20,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 68,
        "cn": 26,
        "dy": 20,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 69,
        "cn": 27,
        "dy": 21,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 70,
        "cn": 28,
        "dy": 21,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 71,
        "cn": 29,
        "dy": 21,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 72,
        "cn": 30,
        "dy": 22,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 73,
        "cn": 31,
        "dy": 22,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 74,
        "cn": 32,
        "dy": 23,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 75,
        "cn": 33,
        "dy": 23,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 76,
        "cn": 34,
        "dy": 23,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 77,
        "cn": 35,
        "dy": 24,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 78,
        "cn": 36,
        "dy": 24,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 79,
        "cn": 37,
        "dy": 24,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 80,
        "cn": 38,
        "dy": 25,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 81,
        "cn": 39,
        "dy": 25,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 82,
        "cn": 40,
        "dy": 25,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 83,
        "cn": 41,
        "dy": 26,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 84,
        "cn": 42,
        "dy": 26,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 85,
        "cn": 43,
        "dy": 27,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 86,
        "cn": 44,
        "dy": 27,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 87,
        "cn": 45,
        "dy": 27,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 88,
        "cn": 46,
        "dy": 28,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 89,
        "cn": 47,
        "dy": 28,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 90,
        "cn": 48,
        "dy": 29,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 91,
        "cn": 49,
        "dy": 29,
        "t": "Genesis"
    },
    {
        "bid": 1,
        "cid": 92,
        "cn": 50,
        "dy": 29,
        "t": "Genesis"
    },
    {
        "bid": 2,
        "cid": 93,
        "cn": 1,
        "dy": 30,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 94,
        "cn": 2,
        "dy": 30,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 95,
        "cn": 3,
        "dy": 30,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 96,
        "cn": 4,
        "dy": 31,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 97,
        "cn": 5,
        "dy": 31,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 98,
        "cn": 6,
        "dy": 31,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 99,
        "cn": 7,
        "dy": 32,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 100,
        "cn": 8,
        "dy": 32,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 101,
        "cn": 9,
        "dy": 32,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 102,
        "cn": 10,
        "dy": 33,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 103,
        "cn": 11,
        "dy": 33,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 104,
        "cn": 12,
        "dy": 33,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 105,
        "cn": 13,
        "dy": 34,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 106,
        "cn": 14,
        "dy": 34,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 107,
        "cn": 15,
        "dy": 34,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 108,
        "cn": 16,
        "dy": 35,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 109,
        "cn": 17,
        "dy": 35,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 110,
        "cn": 18,
        "dy": 35,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 111,
        "cn": 19,
        "dy": 36,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 112,
        "cn": 20,
        "dy": 36,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 113,
        "cn": 21,
        "dy": 36,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 114,
        "cn": 22,
        "dy": 37,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 115,
        "cn": 23,
        "dy": 37,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 116,
        "cn": 24,
        "dy": 37,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 117,
        "cn": 25,
        "dy": 38,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 118,
        "cn": 26,
        "dy": 38,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 119,
        "cn": 27,
        "dy": 38,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 120,
        "cn": 28,
        "dy": 39,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 121,
        "cn": 29,
        "dy": 39,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 122,
        "cn": 30,
        "dy": 40,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 123,
        "cn": 31,
        "dy": 40,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 124,
        "cn": 32,
        "dy": 40,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 125,
        "cn": 33,
        "dy": 41,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 126,
        "cn": 34,
        "dy": 41,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 127,
        "cn": 35,
        "dy": 41,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 128,
        "cn": 36,
        "dy": 42,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 129,
        "cn": 37,
        "dy": 42,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 130,
        "cn": 38,
        "dy": 42,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 131,
        "cn": 39,
        "dy": 43,
        "t": "Exodus"
    },
    {
        "bid": 2,
        "cid": 132,
        "cn": 40,
        "dy": 43,
        "t": "Exodus"
    },
    {
        "bid": 3,
        "cid": 133,
        "cn": 1,
        "dy": 44,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 134,
        "cn": 2,
        "dy": 44,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 135,
        "cn": 3,
        "dy": 44,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 136,
        "cn": 4,
        "dy": 44,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 137,
        "cn": 5,
        "dy": 45,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 138,
        "cn": 6,
        "dy": 45,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 139,
        "cn": 7,
        "dy": 45,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 140,
        "cn": 8,
        "dy": 46,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 141,
        "cn": 9,
        "dy": 46,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 142,
        "cn": 10,
        "dy": 46,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 143,
        "cn": 11,
        "dy": 47,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 144,
        "cn": 12,
        "dy": 47,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 145,
        "cn": 13,
        "dy": 47,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 146,
        "cn": 14,
        "dy": 48,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 147,
        "cn": 15,
        "dy": 48,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 148,
        "cn": 16,
        "dy": 49,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 149,
        "cn": 17,
        "dy": 49,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 150,
        "cn": 18,
        "dy": 49,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 151,
        "cn": 19,
        "dy": 50,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 152,
        "cn": 20,
        "dy": 50,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 153,
        "cn": 21,
        "dy": 50,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 154,
        "cn": 22,
        "dy": 51,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 155,
        "cn": 23,
        "dy": 51,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 156,
        "cn": 24,
        "dy": 52,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 157,
        "cn": 25,
        "dy": 52,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 158,
        "cn": 26,
        "dy": 53,
        "t": "Leviticus"
    },
    {
        "bid": 3,
        "cid": 159,
        "cn": 27,
        "dy": 53,
        "t": "Leviticus"
    },
    {
        "bid": 4,
        "cid": 160,
        "cn": 1,
        "dy": 54,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 161,
        "cn": 2,
        "dy": 54,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 162,
        "cn": 3,
        "dy": 55,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 163,
        "cn": 4,
        "dy": 55,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 164,
        "cn": 5,
        "dy": 56,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 165,
        "cn": 6,
        "dy": 56,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 166,
        "cn": 7,
        "dy": 57,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 167,
        "cn": 8,
        "dy": 58,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 168,
        "cn": 9,
        "dy": 58,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 169,
        "cn": 10,
        "dy": 58,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 170,
        "cn": 11,
        "dy": 59,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 171,
        "cn": 12,
        "dy": 59,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 172,
        "cn": 13,
        "dy": 59,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 173,
        "cn": 14,
        "dy": 60,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 174,
        "cn": 15,
        "dy": 60,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 175,
        "cn": 16,
        "dy": 61,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 176,
        "cn": 17,
        "dy": 61,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 177,
        "cn": 18,
        "dy": 62,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 178,
        "cn": 19,
        "dy": 62,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 179,
        "cn": 20,
        "dy": 62,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 180,
        "cn": 21,
        "dy": 63,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 181,
        "cn": 22,
        "dy": 63,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 182,
        "cn": 23,
        "dy": 64,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 183,
        "cn": 24,
        "dy": 64,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 184,
        "cn": 25,
        "dy": 64,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 185,
        "cn": 26,
        "dy": 65,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 186,
        "cn": 27,
        "dy": 65,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 187,
        "cn": 28,
        "dy": 66,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 188,
        "cn": 29,
        "dy": 66,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 189,
        "cn": 30,
        "dy": 66,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 190,
        "cn": 31,
        "dy": 67,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 191,
        "cn": 32,
        "dy": 67,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 192,
        "cn": 33,
        "dy": 68,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 193,
        "cn": 34,
        "dy": 68,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 194,
        "cn": 35,
        "dy": 69,
        "t": "Numbers"
    },
    {
        "bid": 4,
        "cid": 195,
        "cn": 36,
        "dy": 69,
        "t": "Numbers"
    },
    {
        "bid": 5,
        "cid": 196,
        "cn": 1,
        "dy": 70,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 197,
        "cn": 2,
        "dy": 70,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 198,
        "cn": 3,
        "dy": 71,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 199,
        "cn": 4,
        "dy": 71,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 200,
        "cn": 5,
        "dy": 72,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 201,
        "cn": 6,
        "dy": 72,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 202,
        "cn": 7,
        "dy": 72,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 203,
        "cn": 8,
        "dy": 73,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 204,
        "cn": 9,
        "dy": 73,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 205,
        "cn": 10,
        "dy": 73,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 206,
        "cn": 11,
        "dy": 74,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 207,
        "cn": 12,
        "dy": 74,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 208,
        "cn": 13,
        "dy": 74,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 209,
        "cn": 14,
        "dy": 75,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 210,
        "cn": 15,
        "dy": 75,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 211,
        "cn": 16,
        "dy": 75,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 212,
        "cn": 17,
        "dy": 76,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 213,
        "cn": 18,
        "dy": 76,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 214,
        "cn": 19,
        "dy": 76,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 215,
        "cn": 20,
        "dy": 76,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 216,
        "cn": 21,
        "dy": 77,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 217,
        "cn": 22,
        "dy": 77,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 218,
        "cn": 23,
        "dy": 77,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 219,
        "cn": 24,
        "dy": 78,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 220,
        "cn": 25,
        "dy": 78,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 221,
        "cn": 26,
        "dy": 78,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 222,
        "cn": 27,
        "dy": 78,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 223,
        "cn": 28,
        "dy": 79,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 224,
        "cn": 29,
        "dy": 79,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 225,
        "cn": 30,
        "dy": 80,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 226,
        "cn": 31,
        "dy": 80,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 227,
        "cn": 32,
        "dy": 81,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 228,
        "cn": 33,
        "dy": 81,
        "t": "Deuteronomy"
    },
    {
        "bid": 5,
        "cid": 229,
        "cn": 34,
        "dy": 81,
        "t": "Deuteronomy"
    },
    {
        "bid": 19,
        "cid": 230,
        "cn": 90,
        "dy": 81,
        "t": "Psalms"
    },
    {
        "bid": 6,
        "cid": 231,
        "cn": 1,
        "dy": 82,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 232,
        "cn": 2,
        "dy": 82,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 233,
        "cn": 3,
        "dy": 82,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 234,
        "cn": 4,
        "dy": 82,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 235,
        "cn": 5,
        "dy": 83,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 236,
        "cn": 6,
        "dy": 83,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 237,
        "cn": 7,
        "dy": 83,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 238,
        "cn": 8,
        "dy": 83,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 239,
        "cn": 9,
        "dy": 84,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 240,
        "cn": 10,
        "dy": 84,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 241,
        "cn": 11,
        "dy": 84,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 242,
        "cn": 12,
        "dy": 85,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 243,
        "cn": 13,
        "dy": 85,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 244,
        "cn": 14,
        "dy": 85,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 245,
        "cn": 15,
        "dy": 85,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 246,
        "cn": 16,
        "dy": 86,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 247,
        "cn": 17,
        "dy": 86,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 248,
        "cn": 18,
        "dy": 86,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 249,
        "cn": 19,
        "dy": 87,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 250,
        "cn": 20,
        "dy": 87,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 251,
        "cn": 21,
        "dy": 87,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 252,
        "cn": 22,
        "dy": 88,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 253,
        "cn": 23,
        "dy": 88,
        "t": "Joshua"
    },
    {
        "bid": 6,
        "cid": 254,
        "cn": 24,
        "dy": 88,
        "t": "Joshua"
    },
    {
        "bid": 7,
        "cid": 255,
        "cn": 1,
        "dy": 89,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 256,
        "cn": 2,
        "dy": 89,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 257,
        "cn": 3,
        "dy": 90,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 258,
        "cn": 4,
        "dy": 90,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 259,
        "cn": 5,
        "dy": 90,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 260,
        "cn": 6,
        "dy": 91,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 261,
        "cn": 7,
        "dy": 91,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 262,
        "cn": 8,
        "dy": 92,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 263,
        "cn": 9,
        "dy": 92,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 264,
        "cn": 10,
        "dy": 93,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 265,
        "cn": 11,
        "dy": 93,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 266,
        "cn": 12,
        "dy": 93,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 267,
        "cn": 13,
        "dy": 94,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 268,
        "cn": 14,
        "dy": 94,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 269,
        "cn": 15,
        "dy": 94,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 270,
        "cn": 16,
        "dy": 95,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 271,
        "cn": 17,
        "dy": 95,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 272,
        "cn": 18,
        "dy": 95,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 273,
        "cn": 19,
        "dy": 96,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 274,
        "cn": 20,
        "dy": 96,
        "t": "Judges"
    },
    {
        "bid": 7,
        "cid": 275,
        "cn": 21,
        "dy": 96,
        "t": "Judges"
    },
    {
        "bid": 8,
        "cid": 276,
        "cn": 1,
        "dy": 97,
        "t": "Ruth"
    },
    {
        "bid": 8,
        "cid": 277,
        "cn": 2,
        "dy": 97,
        "t": "Ruth"
    },
    {
        "bid": 8,
        "cid": 278,
        "cn": 3,
        "dy": 97,
        "t": "Ruth"
    },
    {
        "bid": 8,
        "cid": 279,
        "cn": 4,
        "dy": 97,
        "t": "Ruth"
    },
    {
        "bid": 9,
        "cid": 280,
        "cn": 1,
        "dy": 98,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 281,
        "cn": 2,
        "dy": 98,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 282,
        "cn": 3,
        "dy": 98,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 283,
        "cn": 4,
        "dy": 99,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 284,
        "cn": 5,
        "dy": 99,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 285,
        "cn": 6,
        "dy": 99,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 286,
        "cn": 7,
        "dy": 99,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 287,
        "cn": 8,
        "dy": 99,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 288,
        "cn": 9,
        "dy": 100,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 289,
        "cn": 10,
        "dy": 100,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 290,
        "cn": 11,
        "dy": 100,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 291,
        "cn": 12,
        "dy": 100,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 292,
        "cn": 13,
        "dy": 101,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 293,
        "cn": 14,
        "dy": 101,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 294,
        "cn": 15,
        "dy": 102,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 295,
        "cn": 16,
        "dy": 102,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 296,
        "cn": 17,
        "dy": 102,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 297,
        "cn": 18,
        "dy": 103,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 298,
        "cn": 19,
        "dy": 103,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 299,
        "cn": 20,
        "dy": 103,
        "t": "1 Samuel"
    },
    {
        "bid": 19,
        "cid": 300,
        "cn": 11,
        "dy": 103,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 301,
        "cn": 59,
        "dy": 103,
        "t": "Psalms"
    },
    {
        "bid": 9,
        "cid": 302,
        "cn": 21,
        "dy": 104,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 303,
        "cn": 22,
        "dy": 104,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 304,
        "cn": 23,
        "dy": 104,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 305,
        "cn": 24,
        "dy": 104,
        "t": "1 Samuel"
    },
    {
        "bid": 19,
        "cid": 306,
        "cn": 91,
        "dy": 104,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 307,
        "cn": 7,
        "dy": 105,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 308,
        "cn": 27,
        "dy": 105,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 309,
        "cn": 31,
        "dy": 105,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 310,
        "cn": 34,
        "dy": 105,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 311,
        "cn": 52,
        "dy": 105,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 312,
        "cn": 56,
        "dy": 106,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 313,
        "cn": 120,
        "dy": 106,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 314,
        "cn": 140,
        "dy": 106,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 315,
        "cn": 141,
        "dy": 106,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 316,
        "cn": 142,
        "dy": 106,
        "t": "Psalms"
    },
    {
        "bid": 9,
        "cid": 317,
        "cn": 25,
        "dy": 107,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 318,
        "cn": 26,
        "dy": 107,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 319,
        "cn": 27,
        "dy": 107,
        "t": "1 Samuel"
    },
    {
        "bid": 19,
        "cid": 320,
        "cn": 17,
        "dy": 108,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 321,
        "cn": 35,
        "dy": 108,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 322,
        "cn": 54,
        "dy": 108,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 323,
        "cn": 63,
        "dy": 108,
        "t": "Psalms"
    },
    {
        "bid": 9,
        "cid": 324,
        "cn": 28,
        "dy": 109,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 325,
        "cn": 29,
        "dy": 109,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 326,
        "cn": 30,
        "dy": 109,
        "t": "1 Samuel"
    },
    {
        "bid": 9,
        "cid": 327,
        "cn": 31,
        "dy": 109,
        "t": "1 Samuel"
    },
    {
        "bid": 19,
        "cid": 328,
        "cn": 18,
        "dy": 109,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 329,
        "cn": 121,
        "dy": 110,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 330,
        "cn": 123,
        "dy": 110,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 331,
        "cn": 124,
        "dy": 110,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 332,
        "cn": 125,
        "dy": 110,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 333,
        "cn": 128,
        "dy": 110,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 334,
        "cn": 129,
        "dy": 110,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 335,
        "cn": 130,
        "dy": 110,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 336,
        "cn": 1,
        "dy": 111,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 337,
        "cn": 2,
        "dy": 111,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 338,
        "cn": 3,
        "dy": 111,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 339,
        "cn": 4,
        "dy": 111,
        "t": "2 Samuel"
    },
    {
        "bid": 19,
        "cid": 340,
        "cn": 6,
        "dy": 112,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 341,
        "cn": 8,
        "dy": 112,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 342,
        "cn": 9,
        "dy": 112,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 343,
        "cn": 10,
        "dy": 112,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 344,
        "cn": 14,
        "dy": 112,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 345,
        "cn": 16,
        "dy": 112,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 346,
        "cn": 19,
        "dy": 112,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 347,
        "cn": 21,
        "dy": 112,
        "t": "Psalms"
    },
    {
        "bid": 13,
        "cid": 348,
        "cn": 1,
        "dy": 113,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 349,
        "cn": 2,
        "dy": 113,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 350,
        "cn": 43,
        "dy": 114,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 351,
        "cn": 44,
        "dy": 114,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 352,
        "cn": 45,
        "dy": 114,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 353,
        "cn": 49,
        "dy": 114,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 354,
        "cn": 84,
        "dy": 114,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 355,
        "cn": 85,
        "dy": 114,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 356,
        "cn": 87,
        "dy": 114,
        "t": "Psalms"
    },
    {
        "bid": 13,
        "cid": 357,
        "cn": 3,
        "dy": 115,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 358,
        "cn": 4,
        "dy": 115,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 359,
        "cn": 5,
        "dy": 115,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 360,
        "cn": 73,
        "dy": 116,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 361,
        "cn": 77,
        "dy": 116,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 362,
        "cn": 78,
        "dy": 116,
        "t": "Psalms"
    },
    {
        "bid": 13,
        "cid": 363,
        "cn": 6,
        "dy": 117,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 364,
        "cn": 81,
        "dy": 118,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 365,
        "cn": 88,
        "dy": 118,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 366,
        "cn": 92,
        "dy": 118,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 367,
        "cn": 93,
        "dy": 118,
        "t": "Psalms"
    },
    {
        "bid": 13,
        "cid": 368,
        "cn": 7,
        "dy": 119,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 369,
        "cn": 8,
        "dy": 119,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 370,
        "cn": 9,
        "dy": 119,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 371,
        "cn": 10,
        "dy": 119,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 372,
        "cn": 102,
        "dy": 120,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 373,
        "cn": 103,
        "dy": 120,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 374,
        "cn": 104,
        "dy": 120,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 375,
        "cn": 5,
        "dy": 121,
        "t": "2 Samuel"
    },
    {
        "bid": 13,
        "cid": 376,
        "cn": 11,
        "dy": 121,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 377,
        "cn": 12,
        "dy": 121,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 378,
        "cn": 133,
        "dy": 122,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 379,
        "cn": 106,
        "dy": 123,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 380,
        "cn": 107,
        "dy": 123,
        "t": "Psalms"
    },
    {
        "bid": 13,
        "cid": 381,
        "cn": 13,
        "dy": 124,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 382,
        "cn": 14,
        "dy": 124,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 383,
        "cn": 15,
        "dy": 124,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 384,
        "cn": 16,
        "dy": 124,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 385,
        "cn": 1,
        "dy": 125,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 386,
        "cn": 2,
        "dy": 125,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 387,
        "cn": 15,
        "dy": 125,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 388,
        "cn": 22,
        "dy": 125,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 389,
        "cn": 23,
        "dy": 125,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 390,
        "cn": 24,
        "dy": 125,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 391,
        "cn": 47,
        "dy": 125,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 392,
        "cn": 68,
        "dy": 125,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 393,
        "cn": 89,
        "dy": 126,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 394,
        "cn": 96,
        "dy": 126,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 395,
        "cn": 100,
        "dy": 126,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 396,
        "cn": 101,
        "dy": 126,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 397,
        "cn": 105,
        "dy": 126,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 398,
        "cn": 132,
        "dy": 126,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 399,
        "cn": 6,
        "dy": 127,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 400,
        "cn": 7,
        "dy": 127,
        "t": "2 Samuel"
    },
    {
        "bid": 13,
        "cid": 401,
        "cn": 17,
        "dy": 127,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 402,
        "cn": 25,
        "dy": 128,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 403,
        "cn": 29,
        "dy": 128,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 404,
        "cn": 33,
        "dy": 128,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 405,
        "cn": 36,
        "dy": 128,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 406,
        "cn": 39,
        "dy": 128,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 407,
        "cn": 8,
        "dy": 129,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 408,
        "cn": 9,
        "dy": 129,
        "t": "2 Samuel"
    },
    {
        "bid": 13,
        "cid": 409,
        "cn": 18,
        "dy": 129,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 410,
        "cn": 50,
        "dy": 130,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 411,
        "cn": 53,
        "dy": 130,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 412,
        "cn": 60,
        "dy": 130,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 413,
        "cn": 75,
        "dy": 130,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 414,
        "cn": 10,
        "dy": 131,
        "t": "2 Samuel"
    },
    {
        "bid": 13,
        "cid": 415,
        "cn": 19,
        "dy": 131,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 416,
        "cn": 20,
        "dy": 131,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 417,
        "cn": 65,
        "dy": 132,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 418,
        "cn": 66,
        "dy": 132,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 419,
        "cn": 67,
        "dy": 132,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 420,
        "cn": 69,
        "dy": 132,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 421,
        "cn": 70,
        "dy": 132,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 422,
        "cn": 11,
        "dy": 133,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 423,
        "cn": 12,
        "dy": 133,
        "t": "2 Samuel"
    },
    {
        "bid": 13,
        "cid": 424,
        "cn": 20,
        "dy": 133,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 425,
        "cn": 32,
        "dy": 134,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 426,
        "cn": 51,
        "dy": 134,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 427,
        "cn": 86,
        "dy": 134,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 428,
        "cn": 122,
        "dy": 134,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 429,
        "cn": 13,
        "dy": 135,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 430,
        "cn": 14,
        "dy": 135,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 431,
        "cn": 15,
        "dy": 135,
        "t": "2 Samuel"
    },
    {
        "bid": 19,
        "cid": 432,
        "cn": 3,
        "dy": 136,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 433,
        "cn": 4,
        "dy": 136,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 434,
        "cn": 12,
        "dy": 136,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 435,
        "cn": 13,
        "dy": 136,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 436,
        "cn": 28,
        "dy": 136,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 437,
        "cn": 55,
        "dy": 136,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 438,
        "cn": 16,
        "dy": 137,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 439,
        "cn": 17,
        "dy": 137,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 440,
        "cn": 18,
        "dy": 137,
        "t": "2 Samuel"
    },
    {
        "bid": 19,
        "cid": 441,
        "cn": 26,
        "dy": 138,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 442,
        "cn": 40,
        "dy": 138,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 443,
        "cn": 58,
        "dy": 138,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 444,
        "cn": 61,
        "dy": 138,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 445,
        "cn": 62,
        "dy": 138,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 446,
        "cn": 64,
        "dy": 138,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 447,
        "cn": 19,
        "dy": 139,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 448,
        "cn": 20,
        "dy": 139,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 449,
        "cn": 21,
        "dy": 139,
        "t": "2 Samuel"
    },
    {
        "bid": 19,
        "cid": 450,
        "cn": 5,
        "dy": 140,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 451,
        "cn": 38,
        "dy": 140,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 452,
        "cn": 41,
        "dy": 140,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 453,
        "cn": 42,
        "dy": 140,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 454,
        "cn": 22,
        "dy": 141,
        "t": "2 Samuel"
    },
    {
        "bid": 10,
        "cid": 455,
        "cn": 23,
        "dy": 141,
        "t": "2 Samuel"
    },
    {
        "bid": 19,
        "cid": 456,
        "cn": 57,
        "dy": 141,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 457,
        "cn": 95,
        "dy": 142,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 458,
        "cn": 97,
        "dy": 142,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 459,
        "cn": 98,
        "dy": 142,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 460,
        "cn": 99,
        "dy": 142,
        "t": "Psalms"
    },
    {
        "bid": 10,
        "cid": 461,
        "cn": 24,
        "dy": 143,
        "t": "2 Samuel"
    },
    {
        "bid": 13,
        "cid": 462,
        "cn": 21,
        "dy": 143,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 463,
        "cn": 22,
        "dy": 143,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 464,
        "cn": 30,
        "dy": 143,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 465,
        "cn": 108,
        "dy": 144,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 466,
        "cn": 109,
        "dy": 144,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 467,
        "cn": 110,
        "dy": 144,
        "t": "Psalms"
    },
    {
        "bid": 13,
        "cid": 468,
        "cn": 23,
        "dy": 145,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 469,
        "cn": 24,
        "dy": 145,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 470,
        "cn": 25,
        "dy": 145,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 471,
        "cn": 131,
        "dy": 146,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 472,
        "cn": 138,
        "dy": 146,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 473,
        "cn": 139,
        "dy": 146,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 474,
        "cn": 143,
        "dy": 146,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 475,
        "cn": 144,
        "dy": 146,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 476,
        "cn": 145,
        "dy": 146,
        "t": "Psalms"
    },
    {
        "bid": 13,
        "cid": 477,
        "cn": 26,
        "dy": 147,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 478,
        "cn": 27,
        "dy": 147,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 479,
        "cn": 28,
        "dy": 147,
        "t": "1 Chronicles"
    },
    {
        "bid": 13,
        "cid": 480,
        "cn": 29,
        "dy": 147,
        "t": "1 Chronicles"
    },
    {
        "bid": 19,
        "cid": 481,
        "cn": 127,
        "dy": 147,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 482,
        "cn": 111,
        "dy": 148,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 483,
        "cn": 112,
        "dy": 148,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 484,
        "cn": 113,
        "dy": 148,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 485,
        "cn": 114,
        "dy": 148,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 486,
        "cn": 115,
        "dy": 148,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 487,
        "cn": 116,
        "dy": 148,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 488,
        "cn": 117,
        "dy": 148,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 489,
        "cn": 118,
        "dy": 148,
        "t": "Psalms"
    },
    {
        "bid": 11,
        "cid": 490,
        "cn": 1,
        "dy": 149,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 491,
        "cn": 2,
        "dy": 149,
        "t": "1 Kings"
    },
    {
        "bid": 19,
        "cid": 492,
        "cn": 37,
        "dy": 149,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 493,
        "cn": 71,
        "dy": 149,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 494,
        "cn": 94,
        "dy": 149,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 495,
        "cn": 119,
        "dy": 150,
        "t": "Psalms"
    },
    {
        "bid": 11,
        "cid": 496,
        "cn": 3,
        "dy": 151,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 497,
        "cn": 4,
        "dy": 151,
        "t": "1 Kings"
    },
    {
        "bid": 14,
        "cid": 498,
        "cn": 1,
        "dy": 152,
        "t": "2 Chronicles"
    },
    {
        "bid": 19,
        "cid": 499,
        "cn": 72,
        "dy": 152,
        "t": "Psalms"
    },
    {
        "bid": 22,
        "cid": 500,
        "cn": 1,
        "dy": 153,
        "t": "Song of Solomon"
    },
    {
        "bid": 22,
        "cid": 501,
        "cn": 2,
        "dy": 153,
        "t": "Song of Solomon"
    },
    {
        "bid": 22,
        "cid": 502,
        "cn": 3,
        "dy": 153,
        "t": "Song of Solomon"
    },
    {
        "bid": 22,
        "cid": 503,
        "cn": 4,
        "dy": 153,
        "t": "Song of Solomon"
    },
    {
        "bid": 22,
        "cid": 504,
        "cn": 5,
        "dy": 153,
        "t": "Song of Solomon"
    },
    {
        "bid": 22,
        "cid": 505,
        "cn": 6,
        "dy": 153,
        "t": "Song of Solomon"
    },
    {
        "bid": 22,
        "cid": 506,
        "cn": 7,
        "dy": 153,
        "t": "Song of Solomon"
    },
    {
        "bid": 22,
        "cid": 507,
        "cn": 8,
        "dy": 153,
        "t": "Song of Solomon"
    },
    {
        "bid": 20,
        "cid": 508,
        "cn": 1,
        "dy": 154,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 509,
        "cn": 2,
        "dy": 154,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 510,
        "cn": 3,
        "dy": 154,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 511,
        "cn": 4,
        "dy": 155,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 512,
        "cn": 5,
        "dy": 155,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 513,
        "cn": 6,
        "dy": 155,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 514,
        "cn": 7,
        "dy": 156,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 515,
        "cn": 8,
        "dy": 156,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 516,
        "cn": 9,
        "dy": 156,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 517,
        "cn": 10,
        "dy": 157,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 518,
        "cn": 11,
        "dy": 157,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 519,
        "cn": 12,
        "dy": 157,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 520,
        "cn": 13,
        "dy": 158,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 521,
        "cn": 14,
        "dy": 158,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 522,
        "cn": 15,
        "dy": 158,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 523,
        "cn": 16,
        "dy": 159,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 524,
        "cn": 17,
        "dy": 159,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 525,
        "cn": 18,
        "dy": 159,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 526,
        "cn": 19,
        "dy": 160,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 527,
        "cn": 20,
        "dy": 160,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 528,
        "cn": 21,
        "dy": 160,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 529,
        "cn": 22,
        "dy": 161,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 530,
        "cn": 23,
        "dy": 161,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 531,
        "cn": 24,
        "dy": 161,
        "t": "Proverbs"
    },
    {
        "bid": 11,
        "cid": 532,
        "cn": 5,
        "dy": 162,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 533,
        "cn": 6,
        "dy": 162,
        "t": "1 Kings"
    },
    {
        "bid": 14,
        "cid": 534,
        "cn": 2,
        "dy": 162,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 535,
        "cn": 3,
        "dy": 162,
        "t": "2 Chronicles"
    },
    {
        "bid": 11,
        "cid": 536,
        "cn": 7,
        "dy": 163,
        "t": "1 Kings"
    },
    {
        "bid": 14,
        "cid": 537,
        "cn": 4,
        "dy": 163,
        "t": "2 Chronicles"
    },
    {
        "bid": 11,
        "cid": 538,
        "cn": 8,
        "dy": 164,
        "t": "1 Kings"
    },
    {
        "bid": 14,
        "cid": 539,
        "cn": 5,
        "dy": 164,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 540,
        "cn": 6,
        "dy": 165,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 541,
        "cn": 7,
        "dy": 165,
        "t": "2 Chronicles"
    },
    {
        "bid": 19,
        "cid": 542,
        "cn": 136,
        "dy": 165,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 543,
        "cn": 134,
        "dy": 166,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 544,
        "cn": 146,
        "dy": 166,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 545,
        "cn": 147,
        "dy": 166,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 546,
        "cn": 148,
        "dy": 166,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 547,
        "cn": 149,
        "dy": 166,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 548,
        "cn": 150,
        "dy": 166,
        "t": "Psalms"
    },
    {
        "bid": 11,
        "cid": 549,
        "cn": 9,
        "dy": 167,
        "t": "1 Kings"
    },
    {
        "bid": 14,
        "cid": 550,
        "cn": 8,
        "dy": 167,
        "t": "2 Chronicles"
    },
    {
        "bid": 20,
        "cid": 551,
        "cn": 25,
        "dy": 168,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 552,
        "cn": 26,
        "dy": 168,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 553,
        "cn": 27,
        "dy": 169,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 554,
        "cn": 29,
        "dy": 169,
        "t": "Proverbs"
    },
    {
        "bid": 21,
        "cid": 555,
        "cn": 1,
        "dy": 170,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 556,
        "cn": 2,
        "dy": 170,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 557,
        "cn": 3,
        "dy": 170,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 558,
        "cn": 4,
        "dy": 170,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 559,
        "cn": 5,
        "dy": 170,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 560,
        "cn": 6,
        "dy": 170,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 561,
        "cn": 7,
        "dy": 171,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 562,
        "cn": 8,
        "dy": 171,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 563,
        "cn": 9,
        "dy": 171,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 564,
        "cn": 10,
        "dy": 171,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 565,
        "cn": 11,
        "dy": 171,
        "t": "Ecclesiastes"
    },
    {
        "bid": 21,
        "cid": 566,
        "cn": 12,
        "dy": 171,
        "t": "Ecclesiastes"
    },
    {
        "bid": 11,
        "cid": 567,
        "cn": 10,
        "dy": 172,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 568,
        "cn": 11,
        "dy": 172,
        "t": "1 Kings"
    },
    {
        "bid": 14,
        "cid": 569,
        "cn": 9,
        "dy": 172,
        "t": "2 Chronicles"
    },
    {
        "bid": 20,
        "cid": 570,
        "cn": 30,
        "dy": 173,
        "t": "Proverbs"
    },
    {
        "bid": 20,
        "cid": 571,
        "cn": 31,
        "dy": 173,
        "t": "Proverbs"
    },
    {
        "bid": 11,
        "cid": 572,
        "cn": 12,
        "dy": 174,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 573,
        "cn": 13,
        "dy": 174,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 574,
        "cn": 14,
        "dy": 174,
        "t": "1 Kings"
    },
    {
        "bid": 14,
        "cid": 575,
        "cn": 10,
        "dy": 175,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 576,
        "cn": 11,
        "dy": 175,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 577,
        "cn": 12,
        "dy": 175,
        "t": "2 Chronicles"
    },
    {
        "bid": 11,
        "cid": 578,
        "cn": 15,
        "dy": 176,
        "t": "1 Kings"
    },
    {
        "bid": 14,
        "cid": 579,
        "cn": 13,
        "dy": 176,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 580,
        "cn": 14,
        "dy": 176,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 581,
        "cn": 15,
        "dy": 176,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 582,
        "cn": 16,
        "dy": 176,
        "t": "2 Chronicles"
    },
    {
        "bid": 11,
        "cid": 583,
        "cn": 16,
        "dy": 177,
        "t": "1 Kings"
    },
    {
        "bid": 14,
        "cid": 584,
        "cn": 17,
        "dy": 177,
        "t": "2 Chronicles"
    },
    {
        "bid": 11,
        "cid": 585,
        "cn": 17,
        "dy": 178,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 586,
        "cn": 18,
        "dy": 178,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 587,
        "cn": 19,
        "dy": 178,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 588,
        "cn": 20,
        "dy": 179,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 589,
        "cn": 21,
        "dy": 179,
        "t": "1 Kings"
    },
    {
        "bid": 11,
        "cid": 590,
        "cn": 22,
        "dy": 180,
        "t": "1 Kings"
    },
    {
        "bid": 14,
        "cid": 591,
        "cn": 18,
        "dy": 180,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 592,
        "cn": 19,
        "dy": 181,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 593,
        "cn": 20,
        "dy": 181,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 594,
        "cn": 21,
        "dy": 181,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 595,
        "cn": 22,
        "dy": 181,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 596,
        "cn": 23,
        "dy": 181,
        "t": "2 Chronicles"
    },
    {
        "bid": 31,
        "cid": 597,
        "cn": 1,
        "dy": 182,
        "t": "Obadiah"
    },
    {
        "bid": 19,
        "cid": 598,
        "cn": 82,
        "dy": 182,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 599,
        "cn": 83,
        "dy": 182,
        "t": "Psalms"
    },
    {
        "bid": 12,
        "cid": 600,
        "cn": 1,
        "dy": 183,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 601,
        "cn": 2,
        "dy": 183,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 602,
        "cn": 3,
        "dy": 183,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 603,
        "cn": 4,
        "dy": 183,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 604,
        "cn": 5,
        "dy": 184,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 605,
        "cn": 6,
        "dy": 184,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 606,
        "cn": 7,
        "dy": 184,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 607,
        "cn": 8,
        "dy": 184,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 608,
        "cn": 9,
        "dy": 185,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 609,
        "cn": 10,
        "dy": 185,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 610,
        "cn": 11,
        "dy": 185,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 611,
        "cn": 12,
        "dy": 186,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 612,
        "cn": 13,
        "dy": 186,
        "t": "2 Kings"
    },
    {
        "bid": 14,
        "cid": 613,
        "cn": 24,
        "dy": 186,
        "t": "2 Chronicles"
    },
    {
        "bid": 12,
        "cid": 614,
        "cn": 14,
        "dy": 187,
        "t": "2 Kings"
    },
    {
        "bid": 14,
        "cid": 615,
        "cn": 25,
        "dy": 187,
        "t": "2 Chronicles"
    },
    {
        "bid": 32,
        "cid": 616,
        "cn": 1,
        "dy": 188,
        "t": "Jonah"
    },
    {
        "bid": 32,
        "cid": 617,
        "cn": 2,
        "dy": 188,
        "t": "Jonah"
    },
    {
        "bid": 32,
        "cid": 618,
        "cn": 3,
        "dy": 188,
        "t": "Jonah"
    },
    {
        "bid": 32,
        "cid": 619,
        "cn": 4,
        "dy": 188,
        "t": "Jonah"
    },
    {
        "bid": 12,
        "cid": 620,
        "cn": 15,
        "dy": 189,
        "t": "2 Kings"
    },
    {
        "bid": 14,
        "cid": 621,
        "cn": 26,
        "dy": 189,
        "t": "2 Chronicles"
    },
    {
        "bid": 23,
        "cid": 622,
        "cn": 1,
        "dy": 190,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 623,
        "cn": 2,
        "dy": 190,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 624,
        "cn": 3,
        "dy": 190,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 625,
        "cn": 4,
        "dy": 190,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 626,
        "cn": 5,
        "dy": 191,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 627,
        "cn": 6,
        "dy": 191,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 628,
        "cn": 7,
        "dy": 191,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 629,
        "cn": 8,
        "dy": 191,
        "t": "Isaiah"
    },
    {
        "bid": 30,
        "cid": 630,
        "cn": 1,
        "dy": 192,
        "t": "Amos"
    },
    {
        "bid": 30,
        "cid": 631,
        "cn": 2,
        "dy": 192,
        "t": "Amos"
    },
    {
        "bid": 30,
        "cid": 632,
        "cn": 3,
        "dy": 192,
        "t": "Amos"
    },
    {
        "bid": 30,
        "cid": 633,
        "cn": 4,
        "dy": 192,
        "t": "Amos"
    },
    {
        "bid": 30,
        "cid": 634,
        "cn": 5,
        "dy": 192,
        "t": "Amos"
    },
    {
        "bid": 30,
        "cid": 635,
        "cn": 6,
        "dy": 193,
        "t": "Amos"
    },
    {
        "bid": 30,
        "cid": 636,
        "cn": 7,
        "dy": 193,
        "t": "Amos"
    },
    {
        "bid": 30,
        "cid": 637,
        "cn": 8,
        "dy": 193,
        "t": "Amos"
    },
    {
        "bid": 30,
        "cid": 638,
        "cn": 9,
        "dy": 193,
        "t": "Amos"
    },
    {
        "bid": 14,
        "cid": 639,
        "cn": 27,
        "dy": 194,
        "t": "2 Chronicles"
    },
    {
        "bid": 23,
        "cid": 640,
        "cn": 9,
        "dy": 194,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 641,
        "cn": 10,
        "dy": 194,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 642,
        "cn": 11,
        "dy": 194,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 643,
        "cn": 12,
        "dy": 194,
        "t": "Isaiah"
    },
    {
        "bid": 33,
        "cid": 644,
        "cn": 1,
        "dy": 195,
        "t": "Micah"
    },
    {
        "bid": 33,
        "cid": 645,
        "cn": 2,
        "dy": 195,
        "t": "Micah"
    },
    {
        "bid": 33,
        "cid": 646,
        "cn": 3,
        "dy": 195,
        "t": "Micah"
    },
    {
        "bid": 33,
        "cid": 647,
        "cn": 4,
        "dy": 195,
        "t": "Micah"
    },
    {
        "bid": 33,
        "cid": 648,
        "cn": 5,
        "dy": 195,
        "t": "Micah"
    },
    {
        "bid": 33,
        "cid": 649,
        "cn": 6,
        "dy": 195,
        "t": "Micah"
    },
    {
        "bid": 33,
        "cid": 650,
        "cn": 7,
        "dy": 195,
        "t": "Micah"
    },
    {
        "bid": 14,
        "cid": 651,
        "cn": 28,
        "dy": 196,
        "t": "2 Chronicles"
    },
    {
        "bid": 12,
        "cid": 652,
        "cn": 16,
        "dy": 196,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 653,
        "cn": 17,
        "dy": 196,
        "t": "2 Kings"
    },
    {
        "bid": 23,
        "cid": 654,
        "cn": 13,
        "dy": 197,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 655,
        "cn": 14,
        "dy": 197,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 656,
        "cn": 15,
        "dy": 197,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 657,
        "cn": 16,
        "dy": 197,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 658,
        "cn": 17,
        "dy": 197,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 659,
        "cn": 18,
        "dy": 198,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 660,
        "cn": 19,
        "dy": 198,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 661,
        "cn": 20,
        "dy": 198,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 662,
        "cn": 21,
        "dy": 198,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 663,
        "cn": 22,
        "dy": 198,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 664,
        "cn": 23,
        "dy": 199,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 665,
        "cn": 24,
        "dy": 199,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 666,
        "cn": 25,
        "dy": 199,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 667,
        "cn": 26,
        "dy": 199,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 668,
        "cn": 27,
        "dy": 199,
        "t": "Isaiah"
    },
    {
        "bid": 12,
        "cid": 669,
        "cn": 18,
        "dy": 200,
        "t": "2 Kings"
    },
    {
        "bid": 14,
        "cid": 670,
        "cn": 29,
        "dy": 200,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 671,
        "cn": 30,
        "dy": 200,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 672,
        "cn": 31,
        "dy": 200,
        "t": "2 Chronicles"
    },
    {
        "bid": 19,
        "cid": 673,
        "cn": 48,
        "dy": 200,
        "t": "Psalms"
    },
    {
        "bid": 28,
        "cid": 674,
        "cn": 1,
        "dy": 201,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 675,
        "cn": 2,
        "dy": 201,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 676,
        "cn": 3,
        "dy": 201,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 677,
        "cn": 4,
        "dy": 201,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 678,
        "cn": 5,
        "dy": 201,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 679,
        "cn": 6,
        "dy": 201,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 680,
        "cn": 7,
        "dy": 201,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 681,
        "cn": 8,
        "dy": 202,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 682,
        "cn": 9,
        "dy": 202,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 683,
        "cn": 10,
        "dy": 202,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 684,
        "cn": 11,
        "dy": 202,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 685,
        "cn": 12,
        "dy": 202,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 686,
        "cn": 13,
        "dy": 202,
        "t": "Hosea"
    },
    {
        "bid": 28,
        "cid": 687,
        "cn": 14,
        "dy": 202,
        "t": "Hosea"
    },
    {
        "bid": 23,
        "cid": 688,
        "cn": 28,
        "dy": 203,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 689,
        "cn": 29,
        "dy": 203,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 690,
        "cn": 30,
        "dy": 203,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 691,
        "cn": 31,
        "dy": 204,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 692,
        "cn": 32,
        "dy": 204,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 693,
        "cn": 33,
        "dy": 204,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 694,
        "cn": 34,
        "dy": 204,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 695,
        "cn": 35,
        "dy": 205,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 696,
        "cn": 36,
        "dy": 205,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 697,
        "cn": 37,
        "dy": 206,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 698,
        "cn": 38,
        "dy": 206,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 699,
        "cn": 39,
        "dy": 206,
        "t": "Isaiah"
    },
    {
        "bid": 19,
        "cid": 700,
        "cn": 76,
        "dy": 206,
        "t": "Psalms"
    },
    {
        "bid": 23,
        "cid": 701,
        "cn": 40,
        "dy": 207,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 702,
        "cn": 41,
        "dy": 207,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 703,
        "cn": 42,
        "dy": 207,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 704,
        "cn": 43,
        "dy": 207,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 705,
        "cn": 44,
        "dy": 208,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 706,
        "cn": 45,
        "dy": 208,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 707,
        "cn": 46,
        "dy": 208,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 708,
        "cn": 47,
        "dy": 208,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 709,
        "cn": 48,
        "dy": 208,
        "t": "Isaiah"
    },
    {
        "bid": 12,
        "cid": 710,
        "cn": 19,
        "dy": 209,
        "t": "2 Kings"
    },
    {
        "bid": 19,
        "cid": 711,
        "cn": 46,
        "dy": 209,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 712,
        "cn": 80,
        "dy": 209,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 713,
        "cn": 135,
        "dy": 209,
        "t": "Psalms"
    },
    {
        "bid": 23,
        "cid": 714,
        "cn": 49,
        "dy": 210,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 715,
        "cn": 50,
        "dy": 210,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 716,
        "cn": 51,
        "dy": 210,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 717,
        "cn": 52,
        "dy": 210,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 718,
        "cn": 53,
        "dy": 210,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 719,
        "cn": 54,
        "dy": 211,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 720,
        "cn": 55,
        "dy": 211,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 721,
        "cn": 56,
        "dy": 211,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 722,
        "cn": 57,
        "dy": 211,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 723,
        "cn": 58,
        "dy": 211,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 724,
        "cn": 59,
        "dy": 212,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 725,
        "cn": 60,
        "dy": 212,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 726,
        "cn": 61,
        "dy": 212,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 727,
        "cn": 62,
        "dy": 212,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 728,
        "cn": 63,
        "dy": 212,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 729,
        "cn": 64,
        "dy": 213,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 730,
        "cn": 65,
        "dy": 213,
        "t": "Isaiah"
    },
    {
        "bid": 23,
        "cid": 731,
        "cn": 66,
        "dy": 213,
        "t": "Isaiah"
    },
    {
        "bid": 12,
        "cid": 732,
        "cn": 20,
        "dy": 214,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 733,
        "cn": 21,
        "dy": 214,
        "t": "2 Kings"
    },
    {
        "bid": 14,
        "cid": 734,
        "cn": 32,
        "dy": 215,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 735,
        "cn": 33,
        "dy": 215,
        "t": "2 Chronicles"
    },
    {
        "bid": 34,
        "cid": 736,
        "cn": 1,
        "dy": 216,
        "t": "Nahum"
    },
    {
        "bid": 34,
        "cid": 737,
        "cn": 2,
        "dy": 216,
        "t": "Nahum"
    },
    {
        "bid": 34,
        "cid": 738,
        "cn": 3,
        "dy": 216,
        "t": "Nahum"
    },
    {
        "bid": 12,
        "cid": 739,
        "cn": 22,
        "dy": 217,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 740,
        "cn": 23,
        "dy": 217,
        "t": "2 Kings"
    },
    {
        "bid": 14,
        "cid": 741,
        "cn": 34,
        "dy": 217,
        "t": "2 Chronicles"
    },
    {
        "bid": 14,
        "cid": 742,
        "cn": 35,
        "dy": 217,
        "t": "2 Chronicles"
    },
    {
        "bid": 36,
        "cid": 743,
        "cn": 1,
        "dy": 218,
        "t": "Zephaniah"
    },
    {
        "bid": 36,
        "cid": 744,
        "cn": 2,
        "dy": 218,
        "t": "Zephaniah"
    },
    {
        "bid": 36,
        "cid": 745,
        "cn": 3,
        "dy": 218,
        "t": "Zephaniah"
    },
    {
        "bid": 24,
        "cid": 746,
        "cn": 1,
        "dy": 219,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 747,
        "cn": 2,
        "dy": 219,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 748,
        "cn": 3,
        "dy": 219,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 749,
        "cn": 4,
        "dy": 220,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 750,
        "cn": 5,
        "dy": 220,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 751,
        "cn": 6,
        "dy": 220,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 752,
        "cn": 7,
        "dy": 221,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 753,
        "cn": 8,
        "dy": 221,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 754,
        "cn": 9,
        "dy": 221,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 755,
        "cn": 10,
        "dy": 222,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 756,
        "cn": 11,
        "dy": 222,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 757,
        "cn": 12,
        "dy": 222,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 758,
        "cn": 13,
        "dy": 222,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 759,
        "cn": 14,
        "dy": 223,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 760,
        "cn": 15,
        "dy": 223,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 761,
        "cn": 16,
        "dy": 223,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 762,
        "cn": 17,
        "dy": 223,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 763,
        "cn": 18,
        "dy": 224,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 764,
        "cn": 19,
        "dy": 224,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 765,
        "cn": 20,
        "dy": 224,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 766,
        "cn": 21,
        "dy": 224,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 767,
        "cn": 22,
        "dy": 224,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 768,
        "cn": 23,
        "dy": 225,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 769,
        "cn": 24,
        "dy": 225,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 770,
        "cn": 25,
        "dy": 225,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 771,
        "cn": 26,
        "dy": 226,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 772,
        "cn": 27,
        "dy": 226,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 773,
        "cn": 28,
        "dy": 226,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 774,
        "cn": 29,
        "dy": 226,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 775,
        "cn": 30,
        "dy": 227,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 776,
        "cn": 31,
        "dy": 227,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 777,
        "cn": 32,
        "dy": 228,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 778,
        "cn": 33,
        "dy": 228,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 779,
        "cn": 34,
        "dy": 228,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 780,
        "cn": 35,
        "dy": 229,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 781,
        "cn": 36,
        "dy": 229,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 782,
        "cn": 37,
        "dy": 229,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 783,
        "cn": 38,
        "dy": 230,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 784,
        "cn": 39,
        "dy": 230,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 785,
        "cn": 40,
        "dy": 230,
        "t": "Jeremiah"
    },
    {
        "bid": 19,
        "cid": 786,
        "cn": 74,
        "dy": 230,
        "t": "Psalms"
    },
    {
        "bid": 19,
        "cid": 787,
        "cn": 79,
        "dy": 230,
        "t": "Psalms"
    },
    {
        "bid": 12,
        "cid": 788,
        "cn": 24,
        "dy": 231,
        "t": "2 Kings"
    },
    {
        "bid": 12,
        "cid": 789,
        "cn": 25,
        "dy": 231,
        "t": "2 Kings"
    },
    {
        "bid": 14,
        "cid": 790,
        "cn": 36,
        "dy": 231,
        "t": "2 Chronicles"
    },
    {
        "bid": 35,
        "cid": 791,
        "cn": 1,
        "dy": 232,
        "t": "Habakkuk"
    },
    {
        "bid": 35,
        "cid": 792,
        "cn": 2,
        "dy": 232,
        "t": "Habakkuk"
    },
    {
        "bid": 35,
        "cid": 793,
        "cn": 3,
        "dy": 232,
        "t": "Habakkuk"
    },
    {
        "bid": 24,
        "cid": 794,
        "cn": 41,
        "dy": 233,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 795,
        "cn": 42,
        "dy": 233,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 796,
        "cn": 43,
        "dy": 233,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 797,
        "cn": 44,
        "dy": 233,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 798,
        "cn": 45,
        "dy": 233,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 799,
        "cn": 46,
        "dy": 234,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 800,
        "cn": 47,
        "dy": 234,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 801,
        "cn": 48,
        "dy": 234,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 802,
        "cn": 49,
        "dy": 235,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 803,
        "cn": 50,
        "dy": 235,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 804,
        "cn": 51,
        "dy": 236,
        "t": "Jeremiah"
    },
    {
        "bid": 24,
        "cid": 805,
        "cn": 52,
        "dy": 236,
        "t": "Jeremiah"
    },
    {
        "bid": 25,
        "cid": 806,
        "cn": 1,
        "dy": 237,
        "t": "Lamentations"
    },
    {
        "bid": 25,
        "cid": 807,
        "cn": 2,
        "dy": 237,
        "t": "Lamentations"
    },
    {
        "bid": 25,
        "cid": 808,
        "cn": 3,
        "dy": 238,
        "t": "Lamentations"
    },
    {
        "bid": 25,
        "cid": 809,
        "cn": 4,
        "dy": 238,
        "t": "Lamentations"
    },
    {
        "bid": 25,
        "cid": 810,
        "cn": 5,
        "dy": 238,
        "t": "Lamentations"
    },
    {
        "bid": 26,
        "cid": 811,
        "cn": 1,
        "dy": 239,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 812,
        "cn": 2,
        "dy": 239,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 813,
        "cn": 3,
        "dy": 239,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 814,
        "cn": 4,
        "dy": 239,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 815,
        "cn": 5,
        "dy": 240,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 816,
        "cn": 6,
        "dy": 240,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 817,
        "cn": 7,
        "dy": 240,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 818,
        "cn": 8,
        "dy": 240,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 819,
        "cn": 9,
        "dy": 241,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 820,
        "cn": 10,
        "dy": 241,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 821,
        "cn": 11,
        "dy": 241,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 822,
        "cn": 12,
        "dy": 241,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 823,
        "cn": 13,
        "dy": 242,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 824,
        "cn": 14,
        "dy": 242,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 825,
        "cn": 15,
        "dy": 242,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 826,
        "cn": 16,
        "dy": 243,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 827,
        "cn": 17,
        "dy": 243,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 828,
        "cn": 18,
        "dy": 244,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 829,
        "cn": 19,
        "dy": 244,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 830,
        "cn": 20,
        "dy": 244,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 831,
        "cn": 21,
        "dy": 245,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 832,
        "cn": 22,
        "dy": 245,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 833,
        "cn": 23,
        "dy": 246,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 834,
        "cn": 24,
        "dy": 246,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 835,
        "cn": 25,
        "dy": 247,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 836,
        "cn": 26,
        "dy": 247,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 837,
        "cn": 27,
        "dy": 247,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 838,
        "cn": 28,
        "dy": 248,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 839,
        "cn": 29,
        "dy": 248,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 840,
        "cn": 30,
        "dy": 248,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 841,
        "cn": 31,
        "dy": 249,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 842,
        "cn": 32,
        "dy": 249,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 843,
        "cn": 33,
        "dy": 249,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 844,
        "cn": 34,
        "dy": 250,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 845,
        "cn": 35,
        "dy": 250,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 846,
        "cn": 36,
        "dy": 250,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 847,
        "cn": 37,
        "dy": 251,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 848,
        "cn": 38,
        "dy": 251,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 849,
        "cn": 39,
        "dy": 251,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 850,
        "cn": 40,
        "dy": 252,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 851,
        "cn": 41,
        "dy": 252,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 852,
        "cn": 42,
        "dy": 252,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 853,
        "cn": 43,
        "dy": 253,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 854,
        "cn": 44,
        "dy": 253,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 855,
        "cn": 45,
        "dy": 253,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 856,
        "cn": 46,
        "dy": 254,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 857,
        "cn": 47,
        "dy": 254,
        "t": "Ezekiel"
    },
    {
        "bid": 26,
        "cid": 858,
        "cn": 48,
        "dy": 254,
        "t": "Ezekiel"
    },
    {
        "bid": 29,
        "cid": 859,
        "cn": 1,
        "dy": 255,
        "t": "Joel"
    },
    {
        "bid": 29,
        "cid": 860,
        "cn": 2,
        "dy": 255,
        "t": "Joel"
    },
    {
        "bid": 29,
        "cid": 861,
        "cn": 3,
        "dy": 255,
        "t": "Joel"
    },
    {
        "bid": 27,
        "cid": 862,
        "cn": 1,
        "dy": 256,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 863,
        "cn": 2,
        "dy": 256,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 864,
        "cn": 3,
        "dy": 256,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 865,
        "cn": 4,
        "dy": 257,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 866,
        "cn": 5,
        "dy": 257,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 867,
        "cn": 6,
        "dy": 257,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 868,
        "cn": 7,
        "dy": 258,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 869,
        "cn": 8,
        "dy": 258,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 870,
        "cn": 9,
        "dy": 258,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 871,
        "cn": 10,
        "dy": 259,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 872,
        "cn": 11,
        "dy": 259,
        "t": "Daniel"
    },
    {
        "bid": 27,
        "cid": 873,
        "cn": 12,
        "dy": 259,
        "t": "Daniel"
    },
    {
        "bid": 15,
        "cid": 874,
        "cn": 1,
        "dy": 260,
        "t": "Ezra"
    },
    {
        "bid": 15,
        "cid": 875,
        "cn": 2,
        "dy": 260,
        "t": "Ezra"
    },
    {
        "bid": 15,
        "cid": 876,
        "cn": 3,
        "dy": 260,
        "t": "Ezra"
    },
    {
        "bid": 15,
        "cid": 877,
        "cn": 4,
        "dy": 261,
        "t": "Ezra"
    },
    {
        "bid": 15,
        "cid": 878,
        "cn": 5,
        "dy": 261,
        "t": "Ezra"
    },
    {
        "bid": 15,
        "cid": 879,
        "cn": 6,
        "dy": 261,
        "t": "Ezra"
    },
    {
        "bid": 15,
        "cid": 880,
        "cn": 6,
        "dy": 261,
        "t": "Ezra"
    },
    {
        "bid": 19,
        "cid": 881,
        "cn": 137,
        "dy": 261,
        "t": "Psalms"
    },
    {
        "bid": 37,
        "cid": 882,
        "cn": 1,
        "dy": 262,
        "t": "Haggai"
    },
    {
        "bid": 37,
        "cid": 883,
        "cn": 2,
        "dy": 262,
        "t": "Haggai"
    },
    {
        "bid": 38,
        "cid": 884,
        "cn": 1,
        "dy": 263,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 885,
        "cn": 2,
        "dy": 263,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 886,
        "cn": 3,
        "dy": 263,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 887,
        "cn": 4,
        "dy": 263,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 888,
        "cn": 5,
        "dy": 264,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 889,
        "cn": 6,
        "dy": 264,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 890,
        "cn": 7,
        "dy": 264,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 891,
        "cn": 8,
        "dy": 264,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 892,
        "cn": 9,
        "dy": 264,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 893,
        "cn": 10,
        "dy": 265,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 894,
        "cn": 11,
        "dy": 265,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 895,
        "cn": 12,
        "dy": 265,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 896,
        "cn": 13,
        "dy": 265,
        "t": "Zechariah"
    },
    {
        "bid": 38,
        "cid": 897,
        "cn": 14,
        "dy": 265,
        "t": "Zechariah"
    },
    {
        "bid": 17,
        "cid": 898,
        "cn": 1,
        "dy": 266,
        "t": "Esther"
    },
    {
        "bid": 17,
        "cid": 899,
        "cn": 2,
        "dy": 266,
        "t": "Esther"
    },
    {
        "bid": 17,
        "cid": 900,
        "cn": 3,
        "dy": 266,
        "t": "Esther"
    },
    {
        "bid": 17,
        "cid": 901,
        "cn": 4,
        "dy": 266,
        "t": "Esther"
    },
    {
        "bid": 17,
        "cid": 902,
        "cn": 5,
        "dy": 266,
        "t": "Esther"
    },
    {
        "bid": 17,
        "cid": 903,
        "cn": 6,
        "dy": 267,
        "t": "Esther"
    },
    {
        "bid": 17,
        "cid": 904,
        "cn": 7,
        "dy": 267,
        "t": "Esther"
    },
    {
        "bid": 17,
        "cid": 905,
        "cn": 8,
        "dy": 267,
        "t": "Esther"
    },
    {
        "bid": 17,
        "cid": 906,
        "cn": 9,
        "dy": 267,
        "t": "Esther"
    },
    {
        "bid": 17,
        "cid": 907,
        "cn": 10,
        "dy": 267,
        "t": "Esther"
    },
    {
        "bid": 15,
        "cid": 908,
        "cn": 7,
        "dy": 268,
        "t": "Ezra"
    },
    {
        "bid": 15,
        "cid": 909,
        "cn": 8,
        "dy": 268,
        "t": "Ezra"
    },
    {
        "bid": 15,
        "cid": 910,
        "cn": 9,
        "dy": 268,
        "t": "Ezra"
    },
    {
        "bid": 15,
        "cid": 911,
        "cn": 10,
        "dy": 268,
        "t": "Ezra"
    },
    {
        "bid": 16,
        "cid": 912,
        "cn": 1,
        "dy": 269,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 913,
        "cn": 2,
        "dy": 269,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 914,
        "cn": 3,
        "dy": 269,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 915,
        "cn": 4,
        "dy": 269,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 916,
        "cn": 5,
        "dy": 269,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 917,
        "cn": 6,
        "dy": 270,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 918,
        "cn": 7,
        "dy": 270,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 919,
        "cn": 8,
        "dy": 271,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 920,
        "cn": 9,
        "dy": 271,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 921,
        "cn": 10,
        "dy": 271,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 922,
        "cn": 11,
        "dy": 272,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 923,
        "cn": 12,
        "dy": 272,
        "t": "Nehemiah"
    },
    {
        "bid": 16,
        "cid": 924,
        "cn": 13,
        "dy": 272,
        "t": "Nehemiah"
    },
    {
        "bid": 19,
        "cid": 925,
        "cn": 126,
        "dy": 272,
        "t": "Psalms"
    },
    {
        "bid": 39,
        "cid": 926,
        "cn": 1,
        "dy": 273,
        "t": "Malachi"
    },
    {
        "bid": 39,
        "cid": 927,
        "cn": 2,
        "dy": 273,
        "t": "Malachi"
    },
    {
        "bid": 39,
        "cid": 928,
        "cn": 3,
        "dy": 273,
        "t": "Malachi"
    },
    {
        "bid": 39,
        "cid": 929,
        "cn": 4,
        "dy": 273,
        "t": "Malachi"
    },
    {
        "bid": 42,
        "cid": 930,
        "cn": 1,
        "dy": 274,
        "t": "Luke"
    },
    {
        "bid": 43,
        "cid": 931,
        "cn": 1,
        "dy": 274,
        "t": "John"
    },
    {
        "bid": 40,
        "cid": 932,
        "cn": 1,
        "dy": 275,
        "t": "Matthew"
    },
    {
        "bid": 42,
        "cid": 933,
        "cn": 2,
        "dy": 275,
        "t": "Luke"
    },
    {
        "bid": 40,
        "cid": 934,
        "cn": 2,
        "dy": 276,
        "t": "Matthew"
    },
    {
        "bid": 40,
        "cid": 935,
        "cn": 3,
        "dy": 277,
        "t": "Matthew"
    },
    {
        "bid": 41,
        "cid": 936,
        "cn": 1,
        "dy": 277,
        "t": "Mark"
    },
    {
        "bid": 42,
        "cid": 937,
        "cn": 3,
        "dy": 277,
        "t": "Luke"
    },
    {
        "bid": 40,
        "cid": 938,
        "cn": 4,
        "dy": 278,
        "t": "Matthew"
    },
    {
        "bid": 42,
        "cid": 939,
        "cn": 4,
        "dy": 278,
        "t": "Luke"
    },
    {
        "bid": 42,
        "cid": 940,
        "cn": 5,
        "dy": 278,
        "t": "Luke"
    },
    {
        "bid": 43,
        "cid": 941,
        "cn": 2,
        "dy": 279,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 942,
        "cn": 3,
        "dy": 279,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 943,
        "cn": 4,
        "dy": 279,
        "t": "John"
    },
    {
        "bid": 40,
        "cid": 944,
        "cn": 8,
        "dy": 280,
        "t": "Matthew"
    },
    {
        "bid": 41,
        "cid": 945,
        "cn": 2,
        "dy": 280,
        "t": "Mark"
    },
    {
        "bid": 43,
        "cid": 946,
        "cn": 5,
        "dy": 281,
        "t": "John"
    },
    {
        "bid": 40,
        "cid": 947,
        "cn": 12,
        "dy": 282,
        "t": "Matthew"
    },
    {
        "bid": 41,
        "cid": 948,
        "cn": 3,
        "dy": 282,
        "t": "Mark"
    },
    {
        "bid": 42,
        "cid": 949,
        "cn": 6,
        "dy": 282,
        "t": "Luke"
    },
    {
        "bid": 40,
        "cid": 950,
        "cn": 5,
        "dy": 283,
        "t": "Matthew"
    },
    {
        "bid": 40,
        "cid": 951,
        "cn": 6,
        "dy": 283,
        "t": "Matthew"
    },
    {
        "bid": 40,
        "cid": 952,
        "cn": 7,
        "dy": 283,
        "t": "Matthew"
    },
    {
        "bid": 40,
        "cid": 953,
        "cn": 9,
        "dy": 284,
        "t": "Matthew"
    },
    {
        "bid": 42,
        "cid": 954,
        "cn": 7,
        "dy": 284,
        "t": "Luke"
    },
    {
        "bid": 40,
        "cid": 955,
        "cn": 11,
        "dy": 285,
        "t": "Matthew"
    },
    {
        "bid": 42,
        "cid": 956,
        "cn": 11,
        "dy": 286,
        "t": "Luke"
    },
    {
        "bid": 40,
        "cid": 957,
        "cn": 13,
        "dy": 287,
        "t": "Matthew"
    },
    {
        "bid": 42,
        "cid": 958,
        "cn": 8,
        "dy": 287,
        "t": "Luke"
    },
    {
        "bid": 41,
        "cid": 959,
        "cn": 4,
        "dy": 288,
        "t": "Mark"
    },
    {
        "bid": 41,
        "cid": 960,
        "cn": 5,
        "dy": 288,
        "t": "Mark"
    },
    {
        "bid": 40,
        "cid": 961,
        "cn": 10,
        "dy": 289,
        "t": "Matthew"
    },
    {
        "bid": 40,
        "cid": 962,
        "cn": 14,
        "dy": 290,
        "t": "Matthew"
    },
    {
        "bid": 41,
        "cid": 963,
        "cn": 6,
        "dy": 290,
        "t": "Mark"
    },
    {
        "bid": 42,
        "cid": 964,
        "cn": 9,
        "dy": 290,
        "t": "Luke"
    },
    {
        "bid": 43,
        "cid": 965,
        "cn": 6,
        "dy": 291,
        "t": "John"
    },
    {
        "bid": 40,
        "cid": 966,
        "cn": 15,
        "dy": 292,
        "t": "Matthew"
    },
    {
        "bid": 40,
        "cid": 967,
        "cn": 7,
        "dy": 292,
        "t": "Mark"
    },
    {
        "bid": 40,
        "cid": 968,
        "cn": 16,
        "dy": 293,
        "t": "Matthew"
    },
    {
        "bid": 41,
        "cid": 969,
        "cn": 8,
        "dy": 293,
        "t": "Mark"
    },
    {
        "bid": 40,
        "cid": 970,
        "cn": 17,
        "dy": 294,
        "t": "Matthew"
    },
    {
        "bid": 41,
        "cid": 971,
        "cn": 9,
        "dy": 294,
        "t": "Mark"
    },
    {
        "bid": 40,
        "cid": 972,
        "cn": 18,
        "dy": 295,
        "t": "Matthew"
    },
    {
        "bid": 43,
        "cid": 973,
        "cn": 7,
        "dy": 296,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 974,
        "cn": 8,
        "dy": 296,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 975,
        "cn": 9,
        "dy": 297,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 976,
        "cn": 10,
        "dy": 297,
        "t": "John"
    },
    {
        "bid": 42,
        "cid": 977,
        "cn": 10,
        "dy": 298,
        "t": "Luke"
    },
    {
        "bid": 42,
        "cid": 978,
        "cn": 12,
        "dy": 299,
        "t": "Luke"
    },
    {
        "bid": 42,
        "cid": 979,
        "cn": 13,
        "dy": 299,
        "t": "Luke"
    },
    {
        "bid": 42,
        "cid": 980,
        "cn": 14,
        "dy": 300,
        "t": "Luke"
    },
    {
        "bid": 42,
        "cid": 981,
        "cn": 15,
        "dy": 300,
        "t": "Luke"
    },
    {
        "bid": 42,
        "cid": 982,
        "cn": 16,
        "dy": 301,
        "t": "Luke"
    },
    {
        "bid": 42,
        "cid": 983,
        "cn": 17,
        "dy": 301,
        "t": "Luke"
    },
    {
        "bid": 43,
        "cid": 984,
        "cn": 11,
        "dy": 302,
        "t": "John"
    },
    {
        "bid": 42,
        "cid": 985,
        "cn": 18,
        "dy": 303,
        "t": "Luke"
    },
    {
        "bid": 40,
        "cid": 986,
        "cn": 19,
        "dy": 304,
        "t": "Matthew"
    },
    {
        "bid": 41,
        "cid": 987,
        "cn": 10,
        "dy": 304,
        "t": "Mark"
    },
    {
        "bid": 40,
        "cid": 988,
        "cn": 20,
        "dy": 305,
        "t": "Matthew"
    },
    {
        "bid": 40,
        "cid": 989,
        "cn": 21,
        "dy": 305,
        "t": "Matthew"
    },
    {
        "bid": 42,
        "cid": 990,
        "cn": 19,
        "dy": 306,
        "t": "Luke"
    },
    {
        "bid": 41,
        "cid": 991,
        "cn": 11,
        "dy": 307,
        "t": "Mark"
    },
    {
        "bid": 43,
        "cid": 992,
        "cn": 12,
        "dy": 307,
        "t": "John"
    },
    {
        "bid": 40,
        "cid": 993,
        "cn": 22,
        "dy": 308,
        "t": "Matthew"
    },
    {
        "bid": 41,
        "cid": 994,
        "cn": 12,
        "dy": 308,
        "t": "Mark"
    },
    {
        "bid": 40,
        "cid": 995,
        "cn": 23,
        "dy": 309,
        "t": "Matthew"
    },
    {
        "bid": 42,
        "cid": 996,
        "cn": 20,
        "dy": 309,
        "t": "Luke"
    },
    {
        "bid": 42,
        "cid": 997,
        "cn": 21,
        "dy": 309,
        "t": "Luke"
    },
    {
        "bid": 41,
        "cid": 998,
        "cn": 13,
        "dy": 310,
        "t": "Mark"
    },
    {
        "bid": 40,
        "cid": 999,
        "cn": 24,
        "dy": 311,
        "t": "Matthew"
    },
    {
        "bid": 40,
        "cid": 1000,
        "cn": 25,
        "dy": 312,
        "t": "Matthew"
    },
    {
        "bid": 40,
        "cid": 1001,
        "cn": 26,
        "dy": 313,
        "t": "Matthew"
    },
    {
        "bid": 41,
        "cid": 1002,
        "cn": 14,
        "dy": 313,
        "t": "Mark"
    },
    {
        "bid": 42,
        "cid": 1003,
        "cn": 22,
        "dy": 314,
        "t": "Luke"
    },
    {
        "bid": 43,
        "cid": 1004,
        "cn": 13,
        "dy": 314,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 1005,
        "cn": 14,
        "dy": 315,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 1006,
        "cn": 15,
        "dy": 315,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 1007,
        "cn": 16,
        "dy": 315,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 1008,
        "cn": 17,
        "dy": 315,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 1009,
        "cn": 27,
        "dy": 316,
        "t": "Mathew"
    },
    {
        "bid": 41,
        "cid": 1010,
        "cn": 15,
        "dy": 316,
        "t": "Mark"
    },
    {
        "bid": 42,
        "cid": 1011,
        "cn": 23,
        "dy": 317,
        "t": "Luke"
    },
    {
        "bid": 43,
        "cid": 1012,
        "cn": 18,
        "dy": 317,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 1013,
        "cn": 19,
        "dy": 317,
        "t": "John"
    },
    {
        "bid": 40,
        "cid": 1014,
        "cn": 28,
        "dy": 318,
        "t": "Matthew"
    },
    {
        "bid": 41,
        "cid": 1015,
        "cn": 16,
        "dy": 318,
        "t": "Mark"
    },
    {
        "bid": 42,
        "cid": 1016,
        "cn": 24,
        "dy": 319,
        "t": "Luke"
    },
    {
        "bid": 43,
        "cid": 1017,
        "cn": 20,
        "dy": 319,
        "t": "John"
    },
    {
        "bid": 43,
        "cid": 1018,
        "cn": 21,
        "dy": 319,
        "t": "John"
    },
    {
        "bid": 44,
        "cid": 1019,
        "cn": 1,
        "dy": 320,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1020,
        "cn": 2,
        "dy": 320,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1021,
        "cn": 3,
        "dy": 320,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1022,
        "cn": 4,
        "dy": 321,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1023,
        "cn": 5,
        "dy": 321,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1024,
        "cn": 6,
        "dy": 321,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1025,
        "cn": 7,
        "dy": 322,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1026,
        "cn": 8,
        "dy": 322,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1027,
        "cn": 9,
        "dy": 323,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1028,
        "cn": 10,
        "dy": 323,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1029,
        "cn": 11,
        "dy": 324,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1030,
        "cn": 12,
        "dy": 324,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1031,
        "cn": 13,
        "dy": 325,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1032,
        "cn": 14,
        "dy": 325,
        "t": "Acts"
    },
    {
        "bid": 59,
        "cid": 1033,
        "cn": 1,
        "dy": 326,
        "t": "James"
    },
    {
        "bid": 59,
        "cid": 1034,
        "cn": 2,
        "dy": 326,
        "t": "James"
    },
    {
        "bid": 59,
        "cid": 1035,
        "cn": 3,
        "dy": 326,
        "t": "James"
    },
    {
        "bid": 59,
        "cid": 1036,
        "cn": 4,
        "dy": 326,
        "t": "James"
    },
    {
        "bid": 59,
        "cid": 1037,
        "cn": 5,
        "dy": 326,
        "t": "James"
    },
    {
        "bid": 44,
        "cid": 1038,
        "cn": 15,
        "dy": 327,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1039,
        "cn": 16,
        "dy": 327,
        "t": "Acts"
    },
    {
        "bid": 48,
        "cid": 1040,
        "cn": 1,
        "dy": 328,
        "t": "Galatians"
    },
    {
        "bid": 48,
        "cid": 1041,
        "cn": 2,
        "dy": 328,
        "t": "Galatians"
    },
    {
        "bid": 48,
        "cid": 1042,
        "cn": 3,
        "dy": 328,
        "t": "Galatians"
    },
    {
        "bid": 48,
        "cid": 1043,
        "cn": 4,
        "dy": 329,
        "t": "Galatians"
    },
    {
        "bid": 48,
        "cid": 1044,
        "cn": 5,
        "dy": 329,
        "t": "Galatians"
    },
    {
        "bid": 48,
        "cid": 1045,
        "cn": 6,
        "dy": 329,
        "t": "Galatians"
    },
    {
        "bid": 44,
        "cid": 1046,
        "cn": 17,
        "dy": 330,
        "t": "Acts"
    },
    {
        "bid": 52,
        "cid": 1047,
        "cn": 1,
        "dy": 331,
        "t": "1 Thessalonians"
    },
    {
        "bid": 52,
        "cid": 1048,
        "cn": 2,
        "dy": 331,
        "t": "1 Thessalonians"
    },
    {
        "bid": 52,
        "cid": 1049,
        "cn": 3,
        "dy": 331,
        "t": "1 Thessalonians"
    },
    {
        "bid": 52,
        "cid": 1050,
        "cn": 4,
        "dy": 331,
        "t": "1 Thessalonians"
    },
    {
        "bid": 52,
        "cid": 1051,
        "cn": 5,
        "dy": 331,
        "t": "1 Thessalonians"
    },
    {
        "bid": 53,
        "cid": 1052,
        "cn": 1,
        "dy": 331,
        "t": "2 Thessalonians"
    },
    {
        "bid": 53,
        "cid": 1053,
        "cn": 2,
        "dy": 331,
        "t": "2 Thessalonians"
    },
    {
        "bid": 53,
        "cid": 1054,
        "cn": 3,
        "dy": 331,
        "t": "2 Thessalonians"
    },
    {
        "bid": 44,
        "cid": 1055,
        "cn": 18,
        "dy": 332,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1056,
        "cn": 19,
        "dy": 332,
        "t": "Acts"
    },
    {
        "bid": 46,
        "cid": 1057,
        "cn": 1,
        "dy": 333,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1058,
        "cn": 2,
        "dy": 333,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1059,
        "cn": 3,
        "dy": 333,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1060,
        "cn": 4,
        "dy": 333,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1061,
        "cn": 5,
        "dy": 334,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1062,
        "cn": 6,
        "dy": 334,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1063,
        "cn": 7,
        "dy": 334,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1064,
        "cn": 8,
        "dy": 334,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1065,
        "cn": 9,
        "dy": 335,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1066,
        "cn": 10,
        "dy": 335,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1067,
        "cn": 11,
        "dy": 335,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1068,
        "cn": 12,
        "dy": 336,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1069,
        "cn": 13,
        "dy": 336,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1070,
        "cn": 14,
        "dy": 336,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1071,
        "cn": 15,
        "dy": 337,
        "t": "1 Corinthians"
    },
    {
        "bid": 46,
        "cid": 1072,
        "cn": 16,
        "dy": 337,
        "t": "1 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1073,
        "cn": 1,
        "dy": 338,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1074,
        "cn": 2,
        "dy": 338,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1075,
        "cn": 3,
        "dy": 338,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1076,
        "cn": 4,
        "dy": 338,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1077,
        "cn": 5,
        "dy": 339,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1078,
        "cn": 6,
        "dy": 339,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1079,
        "cn": 7,
        "dy": 339,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1080,
        "cn": 8,
        "dy": 339,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1081,
        "cn": 9,
        "dy": 339,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1082,
        "cn": 10,
        "dy": 340,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1083,
        "cn": 11,
        "dy": 340,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1084,
        "cn": 12,
        "dy": 340,
        "t": "2 Corinthians"
    },
    {
        "bid": 47,
        "cid": 1085,
        "cn": 13,
        "dy": 340,
        "t": "2 Corinthians"
    },
    {
        "bid": 45,
        "cid": 1086,
        "cn": 1,
        "dy": 341,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1087,
        "cn": 2,
        "dy": 341,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1088,
        "cn": 3,
        "dy": 341,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1089,
        "cn": 4,
        "dy": 342,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1090,
        "cn": 5,
        "dy": 342,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1091,
        "cn": 6,
        "dy": 342,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1092,
        "cn": 7,
        "dy": 342,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1093,
        "cn": 8,
        "dy": 343,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1094,
        "cn": 9,
        "dy": 343,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1095,
        "cn": 10,
        "dy": 343,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1096,
        "cn": 11,
        "dy": 344,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1097,
        "cn": 12,
        "dy": 344,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1098,
        "cn": 13,
        "dy": 344,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1099,
        "cn": 14,
        "dy": 345,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1100,
        "cn": 15,
        "dy": 345,
        "t": "Romans"
    },
    {
        "bid": 45,
        "cid": 1101,
        "cn": 16,
        "dy": 345,
        "t": "Romans"
    },
    {
        "bid": 44,
        "cid": 1102,
        "cn": 20,
        "dy": 346,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1103,
        "cn": 21,
        "dy": 346,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1104,
        "cn": 22,
        "dy": 346,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1105,
        "cn": 23,
        "dy": 346,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1106,
        "cn": 24,
        "dy": 347,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1107,
        "cn": 25,
        "dy": 347,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1108,
        "cn": 26,
        "dy": 347,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1109,
        "cn": 27,
        "dy": 348,
        "t": "Acts"
    },
    {
        "bid": 44,
        "cid": 1110,
        "cn": 28,
        "dy": 348,
        "t": "Acts"
    },
    {
        "bid": 51,
        "cid": 1111,
        "cn": 1,
        "dy": 349,
        "t": "Colossians"
    },
    {
        "bid": 51,
        "cid": 1112,
        "cn": 2,
        "dy": 349,
        "t": "Colossians"
    },
    {
        "bid": 51,
        "cid": 1113,
        "cn": 3,
        "dy": 349,
        "t": "Colossians"
    },
    {
        "bid": 51,
        "cid": 1114,
        "cn": 4,
        "dy": 349,
        "t": "Colossians"
    },
    {
        "bid": 57,
        "cid": 1115,
        "cn": 1,
        "dy": 349,
        "t": "Philemon"
    },
    {
        "bid": 49,
        "cid": 1116,
        "cn": 1,
        "dy": 350,
        "t": "Ephesians"
    },
    {
        "bid": 49,
        "cid": 1117,
        "cn": 2,
        "dy": 350,
        "t": "Ephesians"
    },
    {
        "bid": 49,
        "cid": 1118,
        "cn": 3,
        "dy": 350,
        "t": "Ephesians"
    },
    {
        "bid": 49,
        "cid": 1119,
        "cn": 4,
        "dy": 350,
        "t": "Ephesians"
    },
    {
        "bid": 49,
        "cid": 1120,
        "cn": 5,
        "dy": 350,
        "t": "Ephesians"
    },
    {
        "bid": 49,
        "cid": 1121,
        "cn": 6,
        "dy": 350,
        "t": "Ephesians"
    },
    {
        "bid": 50,
        "cid": 1122,
        "cn": 1,
        "dy": 351,
        "t": "Philippians"
    },
    {
        "bid": 50,
        "cid": 1123,
        "cn": 2,
        "dy": 351,
        "t": "Philippians"
    },
    {
        "bid": 50,
        "cid": 1124,
        "cn": 3,
        "dy": 351,
        "t": "Philippians"
    },
    {
        "bid": 50,
        "cid": 1125,
        "cn": 4,
        "dy": 351,
        "t": "Philippians"
    },
    {
        "bid": 54,
        "cid": 1126,
        "cn": 1,
        "dy": 352,
        "t": "1 Timothy"
    },
    {
        "bid": 54,
        "cid": 1127,
        "cn": 2,
        "dy": 352,
        "t": "1 Timothy"
    },
    {
        "bid": 54,
        "cid": 1128,
        "cn": 3,
        "dy": 352,
        "t": "1 Timothy"
    },
    {
        "bid": 54,
        "cid": 1129,
        "cn": 4,
        "dy": 352,
        "t": "1 Timothy"
    },
    {
        "bid": 54,
        "cid": 1130,
        "cn": 5,
        "dy": 352,
        "t": "1 Timothy"
    },
    {
        "bid": 54,
        "cid": 1131,
        "cn": 6,
        "dy": 352,
        "t": "1 Timothy"
    },
    {
        "bid": 56,
        "cid": 1132,
        "cn": 1,
        "dy": 353,
        "t": "Titus"
    },
    {
        "bid": 56,
        "cid": 1133,
        "cn": 2,
        "dy": 353,
        "t": "Titus"
    },
    {
        "bid": 56,
        "cid": 1134,
        "cn": 3,
        "dy": 353,
        "t": "Titus"
    },
    {
        "bid": 60,
        "cid": 1135,
        "cn": 1,
        "dy": 354,
        "t": "1 Peter"
    },
    {
        "bid": 60,
        "cid": 1136,
        "cn": 2,
        "dy": 354,
        "t": "1 Peter"
    },
    {
        "bid": 60,
        "cid": 1137,
        "cn": 3,
        "dy": 354,
        "t": "1 Peter"
    },
    {
        "bid": 60,
        "cid": 1138,
        "cn": 4,
        "dy": 354,
        "t": "1 Peter"
    },
    {
        "bid": 60,
        "cid": 1139,
        "cn": 5,
        "dy": 354,
        "t": "1 Peter"
    },
    {
        "bid": 58,
        "cid": 1140,
        "cn": 1,
        "dy": 355,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1141,
        "cn": 2,
        "dy": 355,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1142,
        "cn": 3,
        "dy": 355,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1143,
        "cn": 4,
        "dy": 355,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1144,
        "cn": 5,
        "dy": 355,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1145,
        "cn": 6,
        "dy": 355,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1146,
        "cn": 7,
        "dy": 356,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1147,
        "cn": 8,
        "dy": 356,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1148,
        "cn": 9,
        "dy": 356,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1149,
        "cn": 10,
        "dy": 356,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1150,
        "cn": 11,
        "dy": 357,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1151,
        "cn": 12,
        "dy": 357,
        "t": "Hebrews"
    },
    {
        "bid": 58,
        "cid": 1152,
        "cn": 13,
        "dy": 357,
        "t": "Hebrews"
    },
    {
        "bid": 55,
        "cid": 1153,
        "cn": 1,
        "dy": 358,
        "t": "2 Timothy"
    },
    {
        "bid": 55,
        "cid": 1154,
        "cn": 2,
        "dy": 358,
        "t": "2 Timothy"
    },
    {
        "bid": 55,
        "cid": 1155,
        "cn": 3,
        "dy": 358,
        "t": "2 Timothy"
    },
    {
        "bid": 55,
        "cid": 1156,
        "cn": 4,
        "dy": 358,
        "t": "2 Timothy"
    },
    {
        "bid": 61,
        "cid": 1157,
        "cn": 1,
        "dy": 359,
        "t": "2 Peter"
    },
    {
        "bid": 61,
        "cid": 1158,
        "cn": 2,
        "dy": 359,
        "t": "2 Peter"
    },
    {
        "bid": 61,
        "cid": 1159,
        "cn": 3,
        "dy": 359,
        "t": "2 Peter"
    },
    {
        "bid": 65,
        "cid": 1160,
        "cn": 1,
        "dy": 359,
        "t": "Jude"
    },
    {
        "bid": 62,
        "cid": 1161,
        "cn": 1,
        "dy": 360,
        "t": "1 John"
    },
    {
        "bid": 62,
        "cid": 1162,
        "cn": 2,
        "dy": 360,
        "t": "1 John"
    },
    {
        "bid": 62,
        "cid": 1163,
        "cn": 3,
        "dy": 360,
        "t": "1 John"
    },
    {
        "bid": 62,
        "cid": 1164,
        "cn": 4,
        "dy": 360,
        "t": "1 John"
    },
    {
        "bid": 62,
        "cid": 1165,
        "cn": 5,
        "dy": 360,
        "t": "1 John"
    },
    {
        "bid": 63,
        "cid": 1166,
        "cn": 1,
        "dy": 361,
        "t": "2 John"
    },
    {
        "bid": 64,
        "cid": 1167,
        "cn": 1,
        "dy": 361,
        "t": "3 John"
    },
    {
        "bid": 66,
        "cid": 1168,
        "cn": 1,
        "dy": 362,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1169,
        "cn": 2,
        "dy": 362,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1170,
        "cn": 3,
        "dy": 362,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1171,
        "cn": 4,
        "dy": 362,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1172,
        "cn": 5,
        "dy": 362,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1173,
        "cn": 6,
        "dy": 363,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1174,
        "cn": 7,
        "dy": 363,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1175,
        "cn": 8,
        "dy": 363,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1176,
        "cn": 9,
        "dy": 363,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1177,
        "cn": 10,
        "dy": 363,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1178,
        "cn": 11,
        "dy": 363,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1179,
        "cn": 12,
        "dy": 364,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1180,
        "cn": 13,
        "dy": 364,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1181,
        "cn": 14,
        "dy": 364,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1182,
        "cn": 15,
        "dy": 364,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1183,
        "cn": 16,
        "dy": 364,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1184,
        "cn": 17,
        "dy": 364,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1185,
        "cn": 18,
        "dy": 364,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1186,
        "cn": 19,
        "dy": 365,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1187,
        "cn": 20,
        "dy": 365,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1188,
        "cn": 21,
        "dy": 365,
        "t": "Revelation"
    },
    {
        "bid": 66,
        "cid": 1189,
        "cn": 22,
        "dy": 365,
        "t": "Revelation"
    }
];

window.addEventListener("load", async () => {

    let rec = false;
    rec = await getDefaults();
    if (rec) { rec = false; rec = await loadVersions(); pastActiveChronVersion = activeChronVersion; };
    if (rec) { rec = false; rec = await loadDays(); };
    if (rec) {
        rec = false;
        const day = Number(document.getElementById(activeChronDayID).textContent);
        rec = await loadChronChapters(day);
        pastActiveChronDayID = activeChronDayID;
    };
    if (rec) { rec = false; rec = await getVerses(); };
    if (rec) { rec = false; rec = await getChapter(); };

    if (rec) {
          initialize();
          setFontSize();
          if (setTheme === '1') {
               darkTheme();
               toggleTheme();
               rotateTheme = false;
          };
          setTimeout(() => {
               document.getElementById("id-loader").style.display = 'none';
          }, 130);
    };
    adjustPosition();
    window.addEventListener("resize", adjustPosition);
});

async function initialize() {

     document.getElementById(activeChronDayID).classList.add('cs-bvSelected');
     document.getElementById(activeChronChapterID).classList.add('cs-bvSelected');
     document.getElementById(activeChronVersion).classList.add('cs-bvSelected');
     document.getElementById('id-ChronBtn2').textContent = `Day ${document.getElementById(activeChronDayID).textContent}`;
     return true;
};

async function getDefaults() {

    const params = new URLSearchParams(window.location.search);
    const verid = params.get('verid');
    if (verid) {
        activeChronVersionID = Number(verid);
        activeChronVersion = `id-version${activeChronVersionID}`
    } else {
        activeChronVersionID = Number(localStorage.getItem('version'));
        activeChronVersion = `id-version${activeChronVersionID}`
    };
    if (!activeChronVersionID) {
        activeChronVersionID = defaultChronVersionID;
        activeChronVersion = defaultChronVersion
    };
    localStorage.setItem('version', activeChronVersionID);

    let day = localStorage.getItem('day');
    if (day) { activeChronDayID = day };
    if (!activeChronDayID) { activeChronDayID = defaultChronDayID; };
    pastActiveChronDayID = activeChronDayID;
    localStorage.setItem('day', activeChronDayID);

    let chapter = localStorage.getItem('chapter');
    if (chapter) { activeChronChapterID = chapter; };
    if (!activeChronChapterID) { activeChronChapterID = defaultChronChapterID; };
    pastActiveChronChapterID = activeChronChapterID;
    localStorage.setItem('chapter', activeChronChapterID);

    setTheme = localStorage.getItem("setTheme");
     activeFontSize = localStorage.getItem("activeFontSize");
     if (!activeFontSize) { activeFontSize = 1.06; } else { activeFontSize = Number(activeFontSize); };
     activeFontSizeCount = localStorage.getItem("activeFontSizeCount");
     if (!activeFontSizeCount) { activeFontSizeCount = 0; } else { activeFontSizeCount = Number(activeFontSizeCount); };

    return true;
};

async function restart(e = null) {

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    closeBoxes();
    localStorage.removeItem("version");
    activeChronVersion = defaultChronVersion;
    activeChronVersionID = defaultChronVersionID;
    selected(activeChronVersion, 'id-chronVersions');
    pastActiveChronVersion = defaultChronVersion;
    activeChronVersionText = null;
    let idx = Number(document.getElementById(activeChronVersion).dataset.index);
    document.getElementById('id-ChronBtn1').textContent = versions[idx].ar;
    localStorage.setItem('version', activeChronVersionID);
    await changeVersion(activeChronVersion);

    localStorage.removeItem("day");
    activeChronDayID = defaultChronDayID;
    activeChronChapterID = defaultChronChapterID;
    selected(activeChronDayID, 'id-chronDays');
    pastActiveChronDayID = defaultChronDayID;
    document.getElementById('id-ChronBtn2').textContent = `Day 1`;
    document.getElementById('id-ChronBtn3').textContent = `Genesis 1`;

    localStorage.removeItem('chapter');
    await loadChronChapters(1);
    pastActiveChronChapterID = null;
    selected('id-chronChapter1', 'id-chronChapters');
    rec = await getChapter();
    document.getElementById('top').scrollIntoView({ block: 'start' });
    initialize();
    return true;
};

async function loadDays() {

    let menuDays = document.getElementById('id-chronDays');
    let div = document.createElement('div');
    let div1;
    let x = 0;

    removeElements('id-chronDays');
    div.classList.add('cs-chronDayHeader');
    div.textContent = 'Days';
    div.setAttribute("translate", "no");
    menuDays.appendChild(div);
    let dayBox = 366;

    for (let i = 1; i < dayBox; i++) {

        div = document.createElement('div');
        div.classList.add('cs-chronDayLine');
        while (x < 7 && i < dayBox) {
            div1 = document.createElement('div');
            div1.addEventListener("click", (e) => {
                getDay(e);
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
            });
            div1.id = `id-chronDay${i}`;
            div1.classList.add('cs-chronDay');
            div1.textContent = i;
            div1.setAttribute("translate", "no");
            div.appendChild(div1);
            i++
            x++;
        };
        i = i - 1;
        x = 0;
        menuDays.appendChild(div);
    };

    div.id = 'id-lastDayLine';
    div = document.createElement('div');
    div.classList.add('cs-lastLine');
    div.textContent = '...';
    menuDays.appendChild(div);

    return true;
};

async function getDay(e = null) {

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    let id = e.target.id;
    activeChronDayID = id;
    selected(id, 'id-chronDays');
    pastActiveChronDayID = id;
    closeBoxes();
    const day = Number(document.getElementById(id).textContent);
    document.getElementById('id-ChronBtn2').textContent = `Day ${day}`;
    newday = true;
    await loadChronChapters(day);
    newday = false;
    await getChapter();
    pastActiveChronChapterID = activeChronChapterID;
    localStorage.setItem("day", activeChronDayID);
    localStorage.setItem("chapter", activeChronChapterID);
    document.getElementById(activeChronChapterID).classList.add('cs-bvSelected');
};

async function loadChronChapters(day) {

    let menuChapters = document.getElementById('id-chronChapters');
    let div = document.createElement('div');
    let i = chronPlan.findIndex(rec => rec.dy === day);
    if (newday) { activeChronChapterID = `id-chronChapter${chronPlan[i].cn}`; };
    document.getElementById('id-ChronBtn3').textContent = `${chronPlan[i].t} ${chronPlan[i].cn}`;
    removeElements('id-chronChapters');

    div.classList.add('cs-chronChapterHeader');
    div.textContent = `Day: ${day} Chapters`;
    div.setAttribute("translate", "no");
    menuChapters.appendChild(div);
    while (i < chronPlan.length && chronPlan[i].dy === day) {

        div = document.createElement('div');
        div.id = `id-chronChapter${chronPlan[i].cn}`;
        div.classList.add('cs-chronChapter');
        div.textContent = `${chronPlan[i].t} ${chronPlan[i].cn}`;
        div.dataset.index = chronPlan[i].cid;
        div.addEventListener("click", (e) => {
            changeChronChapter(e);
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        });
        div.setAttribute("translate", "no");
        menuChapters.appendChild(div);
        i++;
    };

    div = document.createElement('div');
    div.id = 'id-lastChapterLine';
    div.classList.add('cs-lastLine');
    div.textContent = '...';
    div.setAttribute("translate", "no");
    menuChapters.appendChild(div);
    //Promise.resolve(true);
    return true;
};

async function changeChronChapter(e = null) {

    let id = e.target.id;
    activeChronChapterID = id;

    selected(id, 'id-chronChapters');
    pastActiveChronChapterID = id;
    await getChapter();
    closeBoxes();
    localStorage.setItem('day', activeChronDayID);
    localStorage.setItem('chapter', id);
    document.getElementById('top').scrollIntoView({ block: 'start' });
    return true;
};

async function getChapter() {

    const cid = Number(document.getElementById(activeChronChapterID).dataset.index);
    let i = chronPlan.findIndex(rec => rec.cid === cid);
    let ii = verses.findIndex(rec => rec.bid === chronPlan[i].bid && rec.cn === chronPlan[i].cn);
    removeElements('id-page');
    let h2 = document.createElement('h2');
    let page = document.getElementById('id-page');
    document.getElementById('id-ChronBtn3').textContent = `${chronPlan[i].t} ${chronPlan[i].cn}`;
    h2.textContent = `${chronPlan[i].t} ${chronPlan[i].cn}`;
    document.getElementById('id-headline').textContent = activeChronVersionText;
    document.getElementById('id-bottomTitleLine').textContent = h2.textContent;
    page.appendChild(h2);

    let p;
    let sp;
    let spa;
    let vt;

    while (ii < verses.length && verses[ii].cn === chronPlan[i].cn && verses[ii].bid === chronPlan[i].bid) {

        p = document.createElement('p');
        p.id = `p${verses[ii].vid}`;

        sp = document.createElement('span');
        sp.id = `id-versNumber${verses[ii].vn}`;
        let aVerse = verses[ii].vt;
        spa = document.createElement('span');
        spa.classList.add("cs-verseNumber");
        spa.textContent = verses[ii].vn;
        vt = document.createTextNode(aVerse);
        sp.appendChild(spa);
        sp.appendChild(vt);
        p.classList.add("cs-singleVerse");
        p.appendChild(sp);
        page.appendChild(p);
        ii++;
    };
    //page.appendChild(p);
    //setFontSize();
    //Promise.resolve(true);
    return true;
};

async function getVerses() {

    let idx = versions.findIndex(rec => rec.id === activeChronVersionID);
    let url = `data/${versions[idx].ar}/${versions[idx].ar}Verses.json`;
    activeChronVersionText = `${versions[idx].t} ${versions[idx].ar}`;

    try {
        const res = await fetch(url);
        if (!res.ok) { throw new Error(res.status); };
        verses = await res.json();
    } catch {

    };
    return true;
};

async function loadVersions() {

    let i = 0;
    let menuVersions = document.getElementById("id-chronVersions");
    let menuVersion = document.getElementById("id-ChronBtn1");
    let pageHeadline =  document.getElementById("id-headline");

    let div = document.createElement("div");
    div.id = 'id-versionHeader';
    div.classList.add("cs-versionHeader");
    div.textContent = 'Versions';
    div.setAttribute("translate", "no");
    menuVersions.appendChild(div);
    for (const version of versions) {

        let vid;
        div = document.createElement("div");
        div.addEventListener("click", async (e) => {
            await changeVersion(vid, e);
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
        });

        div.id = `id-version${version.id}`;
        if (activeChronVersion === div.id) {
            menuVersion.textContent = version.ar;
            pageHeadline.textContent = version.t;
        };
        div.dataset.index = i;
        div.dataset.vid = version.id;
        div.textContent = `${version.t} - ${version.ar}`;
        div.classList.add("cs-version");
        div.setAttribute("translate", "no");
        menuVersions.appendChild(div);
        i++;
    };
    div = document.createElement("div");
    div.id = 'id-lastVersionLine';
    div.classList.add("cs-lastLine");
    div.textContent = '...';
    div.setAttribute("translate", "no");
    menuVersions.appendChild(div);
    return true;
};

async function changeVersion(vid, e = null) {

    let id;
    if (e) { id = e.target.id; } else { id = vid };
    activeChronVersion = id;
    activeChronVersionID = Number(document.getElementById(id).dataset.vid);
    let idx = Number(document.getElementById(id).dataset.index);

    selected(id, 'id-chronVersions');
    pastActiveChronVersion = id;
    closeBoxes();
    await getVerses();
    await getChapter();
    localStorage.setItem('version', activeChronVersionID);
    document.getElementById('id-ChronBtn1').textContent = versions[idx].ar;
    return true;
};