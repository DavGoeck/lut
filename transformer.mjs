import fs from 'fs'

const content = fs.readFileSync("./luther.json", { encoding: "utf8" })
const luther = JSON.parse(content)

const lines = []

const book_mapping = {
    "1 Mose": [ "Genesis", "Gen" ],
    "2 Mose": [ "Exodus", "Ex" ],
    "3 Mose": [ "Levitikus", "Lev" ],
    "4 Mose": [ "Numeri", "Num" ],
    "5 Mose": [ "Deuteronomium", "Deut" ],
    "Josua": [ "Josua", "Jos" ],
    "Richter": [ "Richter", "Ri" ],
    "Rut": [ "Ruth", "Rut" ],
    "1 Samuel": [ "1 Samuel", "1Sam" ],
    "2 Samuel": [ "2 Samuel", "2Sam" ],
    "1 Koenige": [ "1 Könige", "1Kon" ],
    "2 Koenige": [ "2 Könige", "2Kon" ],
    "1 Chronik": [ "1 Chronik", "1Chr" ],
    "2 Chronik": [ "2 Chronik", "2Chr" ],
    "Esra": [ "Esra", "Esra" ],
    "Nehemia": [ "Nehemias", "Neh" ],
    "Ester": [ "Ester", "Est" ],
    "Job": [ "Job", "Job" ],
    "Psalm": [ "Psalmen", "Ps" ],
    "Sprueche": [ "Sprichwörter", "Spr" ],
    "Prediger": [ "Prediger", "Prd" ],
    "Hohelied": [ "Hohelied", "Hld" ],
    "Jesaja": [ "Jesaja", "Jes" ],
    "Jeremia": [ "Jeremia", "Jer" ],
    "Klagelieder": [ "Klagelieder", "Klgl" ],
    "Hesekiel": [ "Ezechiel", "Ez" ],
    "Daniel": [ "Daniel", "Dan" ],
    "Hosea": [ "Hosea", "Hos" ],
    "Joel": [ "Joel", "Joel" ],
    "Amos": [ "Amos", "Am" ],
    "Obadja": [ "Obadja", "Obd" ],
    "Jona": [ "Jona", "Jona" ],
    "Mica": [ "Mica", "Mi" ],
    "Nahum": [ "Nahum", "Nah" ],
    "Habakuk": [ "Habakuk", "Hab" ],
    "Zephanja": [ "Zefanja", "Zef" ],
    "Haggai": [ "Haggai", "Hag" ],
    "Sacharja": [ "Sacharja", "Sach" ],
    "Maleachi": [ "Maleachi", "Mal" ],
    "Matthaeus": [ "Matthaeus", "Mt" ],
    "Markus": [ "Markus", "Mk" ],
    "Lukas": [ "Lukas", "Lk" ],
    "Johannes": [ "Johannes", "Joh" ],
    "Apostelgeschichte": [ "Apostelgeschichte", "Apg" ],
    "Roemers": [ "Römer", "Rom" ],
    "1 Korinther": [ "1 Korinther", "1Kor" ],
    "2 Korinther": [ "2 Korinther", "2Kor" ],
    "Galater": [ "Galater", "Gal" ],
    "Epheser": [ "Epheser", "Eph" ],
    "Philipper": [ "Philipper", "Phil" ],
    "Kolosser": [ "Kolosser", "Kol" ],
    "1 Thessalonicher": [ "1 Thessalonicher", "1Thess" ],
    "2 Thessalonicher": [ "2 Thessalonicher", "2Thess" ],
    "1 Timotheus": [ "1 Timotheus", "1Tim" ],
    "2 Timotheus": [ "2 Timotheus", "2Tim" ],
    "Titus": [ "Titus", "Tit" ],
    "Philemon": [ "Philemon", "Phlm" ],
    "Hebraeer": [ "Hebräer", "Hebr" ],
    "Jakobus": [ "Jakobus", "Jak "],
    "1 Petrus": [ "1 Petrus", "1Petr" ],
    "2 Petrus": [ "2 Petrus", "2Petr" ],
    "1 Johannes": [ "1 Johannes", "1Joh" ],
    "2 Johannes": [ "2 Johannes", "2Joh" ],
    "3 Johannes": [ "3 Johannes", "3Joh" ],
    "Judas": [ "Judas", "Jud" ],
    "Offenbarung": [ "Offenbarung", "Offb" ]
}

luther.verses.forEach(verse => {
    const { book_name, book, chapter, verse: verseNum, text } = verse
    const [ bookname, bookshort ] = book_mapping[book_name]
    const line = [ bookname, bookshort, book, chapter, verseNum, text ].join("\t")
    lines.push(line)
});

const total = lines.join("\n")
fs.writeFileSync("./lut.tsv", total, { encoding: "utf8"})
