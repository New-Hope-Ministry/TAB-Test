// Start textSpeech Tester 225 seconds 670 words
// End textSpeech Tester 225 seconds 670 words

const updateInterval = 100;

let estimatedDuration = 0;
let i = 0;
let interval;
let isPaused = false;
let playerOpen = false;
let playPause = true;
let progress = 0;
let progressBar;
let synth = null;
let textSpeech = ``;
let utter;
let voices;

window.addEventListener("load", async () => {

     let rec = false;
     rec = await getDefaults();
     if (rec) { rec = false; rec = await loadLanguages(); };
     if (rec) { rec = false; rec = await loadVersions(); };
     if (rec) { rec = false; rec = await loadBooks(); };
     if (rec) { rec = false; rec = await loadChapters(); allLoaded = true; };
     if (rec) { rec = false; rec = await getVersion(); };

     if (rec && allLoaded) {
          locateBox('id-header1', 'id-synth', -5);
          document.getElementById('id-synth').style.position = 'fixed';
          locateBox('id-synth', 'id-mainPage', -10);
          setTimeout(() => {
               document.getElementById("id-loader").style.display = 'none';
               bookWidth();
          }, 130);
     };
     if (rec) {
          if (setTheme === '1') {
               darkTheme();
               toggleTheme();
               rotateTheme = false;
          };
          startUp();
     };
     window.addEventListener("resize", adjustPosition);
     if ('speechSynthesis' in window) {
          progressBar = document.getElementById("id-progressBar");
          synth = window.speechSynthesis;
          if (speechSynthesis.onvoiceschanged !== undefined) {
               // Some browsers may load voices asynchronously, so you need to wait for the voiceschanged event to fire.
               speechSynthesis.onvoiceschanged = listVoices;
          } else {
               listVoices();
          };
     };
});

// Wait for the voices to be loaded
//let localVoices = [];
function listVoices() {

     let avoice;
     voices = speechSynthesis.getVoices();
     if (voices) {
          voices.forEach((voice, index) => {
               if (voice) {
                    avoice = {
                         idx: index,
                         name: voice.name,
                         lang: voice.lang,
                         default: voice.default
                    };
                    localVoices.push(avoice);
                    index++;
               };
          });
     };
};

function checkVoices() {

     let langElement = document.getElementById('id-languages');
     localVoices.forEach((voice) => {
          if (voice.lang) {
               for (let ii = 1; ii < langElement.children.length - 1; ii++) {
                    if (langElement.children[ii].dataset.lngc === voice.lang) {
                         langElement.children[ii].dataset.keep = 1;
                         break;
                    };
               };
          };
     });
     for (let ii = langElement.children.length - 2; ii >= 1; ii--) {
          if (!langElement.children[ii].dataset.keep) {
               langElement.removeChild(langElement.children[ii]);
          };
     };

};

window.onbeforeunload = (event) => {
     if (synth) {
          synth.cancel();
          clearInterval(interval);
     };
};

function countWords(str) {
     const matches = str.match(/\b\w+\b/g);
     return matches ? matches.length : 0;
};
// console.log(`Word Count: ${countWords(textSpeech.trim())}`);

function estimateDuration(txt, rate = 1) {
     const words = countWords(txt);
     //alert(words);
     if (words > 2400) { rate = rate * .92 };
     if (words > 1000) { rate = rate * .94 };
     if (words > 800) { rate = rate * .96 };
     if (words < 500) { rate = rate * .98 };
     if (words < 400) { rate = rate * .95 };
     if (words < 200) { rate = rate * .90 };
     if (words < 100) { rate = rate * .86 };
     const wpm = 178 * rate; // Adjust based on rate
     return (words / wpm) * 60 * 1000;
};

function updateBar() {
     interval = setInterval(() => {
          progress += updateInterval;
          const percent = Math.min((progress / estimatedDuration) * 100, 100);
          progressBar.style.width = percent + "%";
          if (progress >= estimatedDuration) { clearInterval(interval) };
     }, updateInterval);
};

function startSpeech() {

     if (isPaused) {
          synth.resume();
          updateBar();
          document.getElementById('id-pauseSpeech').style.display = 'block';
          document.getElementById('id-startSpeech').style.display = 'none';
          document.getElementById('id-stopSpeech').style.display = 'block';
          playPause = false;
          isPaused = false;
          return;
     };

     if (synth.speaking) return;

     document.getElementById('id-pauseSpeech').style.display = 'block';
     document.getElementById('id-startSpeech').style.display = 'none';
     document.getElementById('id-stopSpeech').style.display = 'block';
     playPause = false;
     isPaused = false;

     let i = Number(document.getElementById(activeVersionID).dataset.index);
     let lid = versions[i].lid;
     let x = languages.findIndex(rec => rec.lid === lid);
     speechSynthesis.cancel();
     setTimeout(() => {

          utter = new SpeechSynthesisUtterance();
          utter.text = textSpeech;
          utter.lang = languages[x].lngc;
          utter.voice = voices.find(v => v.lang === languages[x].lngc);
          utter.rate = 1;
          progress = 0;
          estimatedDuration = estimateDuration(textSpeech.trim(), utter.rate);
          progressBar.style.width = "0%";

          utter.onstart = () => { updateBar(); };
          utter.onend = () => {
               progressBar.style.width = "100%";
               stopSpeech();
               if (document.getElementById('id-playCheckBox').checked) {
                    nextChapter();
                    setTimeout(() => {
                         startChapter();
                    }, 100);
               };
          };
          synth.speak(utter);
     }, 300);
};

function startChapter() {

     if (isPaused) {
          synth.resume();
          updateBar();
          document.getElementById('id-pauseSpeech').style.display = 'block';
          document.getElementById('id-startSpeech').style.display = 'none';
          document.getElementById('id-stopSpeech').style.display = 'block';
          playPause = false;
          isPaused = false;
          return;
     };

     if (synth.speaking) return;

     document.getElementById('id-pauseSpeech').style.display = 'block';
     document.getElementById('id-startSpeech').style.display = 'none';
     document.getElementById('id-stopSpeech').style.display = 'block';
     playPause = false;
     isPaused = false;

     let aVersion = document.getElementById(activeVersionID);
     let i = Number(aVersion.dataset.index);
     let lid = versions[i].lid;
     let x = languages.findIndex(rec => rec.lid === lid);
     speechSynthesis.cancel();
     setTimeout(() => {

          utter = new SpeechSynthesisUtterance();
          utter.text = textSpeech.replace(`${versions[i].t}: `, "");
          utter.lang = languages[x].lngc;
          utter.voice = voices.find(v => v.lang === languages[x].lngc);
          utter.rate = 1;
          progress = 0;
          estimatedDuration = estimateDuration(textSpeech.trim(), utter.rate);
          progressBar.style.width = "0%";

          utter.onstart = () => { updateBar(); };
          utter.onend = () => {
               progressBar.style.width = "100%";
               stopSpeech();
               if (document.getElementById('id-playCheckBox').checked) {
                    nextChapter();
                    let newText = textSpeech;
                    textSpeech = '';
                    textSpeech = newText.replace("Twenty-First Century Version: ", "");
                    setTimeout(() => {
                         startChapter();
                    }, 100);
               };
          };
          synth.speak(utter);
     }, 300);
};

async function nextChapter() {

     setTimeout(async () => {

          let i = 0;
          let books = [];
          let bid = Number(document.getElementById(activeBookID).dataset.bid);
          if (bid < 40) {
               i = oldBooks.findIndex(rec => rec.id === bid);
               books = oldBooks;
          } else {
               i = newBooks.findIndex(rec => rec.id === bid);
               books = newBooks;
          };
          let chapters = books[i].c;
          let chapter = Number(document.getElementById(activeChapterID).textContent) + 1;
          if (chapter > chapters) { bid++; chapter = 1; };
          activeBookID = `id-book${bid}`;
          activeChapterID = `id-chapter${chapter}`;
          if (bid < 40) {
               i = oldBooks.findIndex(rec => rec.id === bid);
               books = oldBooks;
          } else {
               i = newBooks.findIndex(rec => rec.id === bid);
               books = newBooks;
          };
          chapterCount = books[i].c;
          getChapter();
          loadChapters();
          document.getElementById('top').scrollIntoView({ block: 'start' });
     }, 300);
     return true;
};

function pauseSpeech() {

     if (synth.speaking) {
          synth.pause();
          isPaused = true;
          clearInterval(interval);
          if (playPause) {
               document.getElementById('id-stopSpeech').style.display = 'none';
               document.getElementById('id-startSpeech').style.display = 'none';
               document.getElementById('id-pauseSpeech').style.display = 'block';
               playPause = false;
          } else {
               document.getElementById('id-stopSpeech').style.display = 'none';
               document.getElementById('id-pauseSpeech').style.display = 'none';
               document.getElementById('id-startSpeech').style.display = 'block';
               playPause = true;
          };
     };
};

function stopSpeech() {

     if (synth.paused) { synth.resume(); };
     synth.cancel();
     clearInterval(interval);
     document.getElementById('id-pauseSpeech').style.display = 'none';
     document.getElementById('id-stopSpeech').style.display = 'none';
     document.getElementById('id-startSpeech').style.display = 'block';
     utter = null;
     playPause = true;
     isPaused = false;
     progress = 0;
     progressBar.style.width = "0%";
};

async function getChapter() {

     let activeBook = Number(activeBookID.slice("id-book".length));
     let activeChapter = Number(activeChapterID.slice("id-chapter".length));
     let i = verses.findIndex(rec => rec.bid === activeBook && rec.cn === activeChapter);

     removeElements('id-page');
     let h2 = document.createElement('h2');
     let page = document.getElementById('id-page');
     document.getElementById('id-SynthBtn2').textContent = document.getElementById(activeBookID).textContent;
     h2.textContent = `${document.getElementById(activeBookID).textContent} ${activeChapter}`;
     document.getElementById('id-bottomTitleLine').textContent = h2.textContent;
     if (isTWF) {
          let sp2 = document.createElement('span');
          sp2.classList.add('cs-edited');
          sp2.textContent = ` TWF - Last Edited: ${dateEdited}`
          h2.appendChild(sp2);
     };
     page.appendChild(h2);

     let p;
     let pn;
     let sp;
     let spa;
     let vt;
     let vNum;
     let book;

     let idx = Number(document.getElementById(activeVersionID).dataset.index);
     let ndx = verses.findIndex(rec => rec.bid === activeBook);
     let bid = Number(verses[ndx].bid) - 1;
     if (bid < 39) { book = oldBooks[bid].t; } else { bid = bid - 39; book = newBooks[bid].t; };

     textSpeech = `${versions[idx].t}: ${book}: Chapter ${activeChapter}: `;

     verseCount = 0;

     while (i < verses.length && verses[i].cn === activeChapter && verses[i].bid === activeBook) {
          p = document.createElement('p');
          p.id = `pid${verses[i].vid}`;
          pn = verses[i].pn;
          textSpeech += `Verse ${verses[i].vn}.... ${verses[i].vt} `;
          if (pn > 0 && paragraphLayoutDefault) {
               while (verses[i].pn === pn) {
                    sp = document.createElement('span');
                    sp.id = `id-versNumber${verses[i].vn}`;
                    if (verses[i].vn === 1) {
                         vNum = `${verses[i].vn} `;
                    } else { vNum = ` ${verses[i].vn} `; };
                    let aVerse = verses[i].vt;

                    if (verses[i].jq === 1) {
                         sp.innerHTML = JesusQuote(aVerse, vNum);
                    } else {
                         spa = document.createElement('span');
                         spa.classList.add("cs-verseNumber");
                         spa.textContent = vNum;
                         vt = document.createTextNode(aVerse);
                         sp.appendChild(spa);
                         sp.appendChild(vt);
                    };
                    p.appendChild(sp);
                    i++;
                    verseCount++;
               };
          } else {
               sp = document.createElement('span');
               sp.id = `id-versNumber${verses[i].vn}`;
               vNum = `${verses[i].vn} `;
               let aVerse = verses[i].vt;
               if (verses[i].jq === 1) {
                    sp.innerHTML = JesusQuote(aVerse, vNum);
               } else {
                    spa = document.createElement('span');
                    spa.classList.add("cs-verseNumber");
                    spa.textContent = vNum;
                    vt = document.createTextNode(aVerse);
                    sp.appendChild(spa);
                    sp.appendChild(vt);
               };
               p.classList.add("cs-singleVerse");
               p.appendChild(sp);
               i++;
               verseCount++;
          };
          page.appendChild(p);
     };
     setFontSize();
     document.getElementById('id-SynthBtn3').textContent = `${document.getElementById(activeChapterID).textContent}:`;
     return true;
};

async function getDefaults() {

     //  The default activeVersionID is 'id-version21', which is the Twenty-First Century Version.
     //  The default activeBookID is 'id-book1', which is Genesis.
     //  The default activeChapterID is 'id-chapter1', which is the first chapter from the book of the activeBookID.
     //  The default setTheme is '0', which is the light theme.
     //  The default activeFontSize is 1.06

     //testRemover();
     const params = new URLSearchParams(window.location.search);

     let ltr = localStorage.getItem('redLetter');
     if (ltr) { redLetterDefault = ltr; };

     let verid = params.get('verid');
     if (verid) { activeVersionID = `id-version${verid}`; };
     if (!activeVersionID) { activeVersionID = defaultVersionID };

     let id = Number(activeVersionID.slice("id-version".length));
     let i = versions.findIndex(rec => rec.id === id);
     activeLanguageID = versions[i].lid;

     let bid = params.get('bid');
     if (bid) { activeBookID = `id-book${bid}`; };
     if (!activeBookID) { activeBookID = defaultBookID; };

     let cn = params.get('cn');
     if (cn) { activeChapterID = `id-chapter${cn}`; };
     if (!activeChapterID) { activeChapterID = defaultChapterID; };

     setTheme = localStorage.getItem("setTheme");
     activeFontSize = localStorage.getItem("activeFontSize");
     if (!activeFontSize) { activeFontSize = 1.06; } else { activeFontSize = Number(activeFontSize); };
     activeFontSizeCount = localStorage.getItem("activeFontSizeCount");
     if (!activeFontSizeCount) { activeFontSizeCount = 0; } else { activeFontSizeCount = Number(activeFontSizeCount); };

     return true;
};

async function getVersion(e = null) {

     let id = null;
     if (e) { id = e.target.id; };
     if (!id || id === 'id-resetDefaults') { id = activeVersionID };
     let aVersion = document.getElementById(id);
     let idx = Number(aVersion.dataset.index);
     let url = `data/${versions[idx].ar}/${versions[idx].ar}Verses.json`;
     if (versions[idx].ar === 'TWF') { isTWF = true } else { isTWF = false };
     try {
          const res = await fetch(url);
          if (!res.ok) { throw new Error(res.status); };
          verses = await res.json();
          activeVersionID = aVersion.id;
          await getChapter();
          document.getElementById('id-SynthBtn1').textContent = versions[idx].ar;
          document.getElementById('id-headline').textContent = versions[idx].t;
          activeVersionAbreviation = versions[idx].ar;
          searchIndex = null;
     } catch (error) {
          let err = error.message;
          switch (error.message) {
               case '500':
                    err = 'Network fetch error: 500A!';
                    break;
               case '503':
                    err = 'No internet connection error: 503A!';
                    break;
          }
          alert(err);
     };
     closeBoxes();

     boxesAreOpen = false;
     return true;
};
