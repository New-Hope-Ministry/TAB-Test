var bookSort1 = false;
var verses1 = [];
var defaultLanguage1ID = 34; // English
var defaultVersion1ID = `id-versionA9`; // Version Defaults: AKJ = 9, TWF = 25
var activeLanguage1ID = null;
var activeVersion1ID = null;

window.addEventListener("load", async () => {

     let rec = false;
     rec = await getDefaults();

     if (rec) { rec = false; rec = await loadLanguages(); };
     if (rec) { rec = false; rec = await loadLanguages1(); };
     if (rec) { rec = false; rec = await loadVersions(); };
     if (rec) { rec = false; rec = await loadVersions1(); };
     if (rec) { rec = false; rec = await loadBooks(); };
     if (rec) { rec = false; rec = await loadChapters(); allLoaded = true; };
     if (rec) { rec = false; rec = await getVersion(); };
     if (rec) { rec = false; rec = await getVersion1(); };

     if (rec && allLoaded) {
          locateBox('id-header', 'id-mainPage', -10);
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
});

async function getChapter() {

     let activeBook = Number(activeBookID.slice("id-book".length));
     let activeChapter = Number(activeChapterID.slice("id-chapter".length));
     let i = verses.findIndex(rec => rec.bid === activeBook && rec.cn === activeChapter);

     removeElements('id-page');
     let h2 = document.createElement('h2');
     let page = document.getElementById('id-page');
     document.getElementById('id-MenuBtn2').textContent = document.getElementById(activeBookID).textContent;
     h2.textContent = `${document.getElementById(activeBookID).textContent} ${activeChapter}`;
     document.getElementById('id-bottomTitleLine').textContent = h2.textContent;
     if (isTWF) {
          let sp2 = document.createElement('span');
          sp2.classList.add('cs-edited');
          sp2.textContent =` TWF - Last Edited: ${dateEdited}`
          h2.appendChild(sp2);
     };
     page.appendChild(h2);

     let p;
     let pn;
     let sp;
     let spa;
     let vt;
     let vNum;

     verseCount = 0;
     while (i < verses.length && verses[i].cn === activeChapter && verses[i].bid === activeBook) {
          p = document.createElement('p');
          p.id = `id-p${verses[i].vid}`;
          pn = verses[i].pn;
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
     document.getElementById('id-MenuBtn3').textContent = `${document.getElementById(activeChapterID).textContent}:`;
};

async function getChapter1() {

     let activeBook = Number(activeBookID.slice("id-book".length));
     let activeChapter = Number(activeChapterID.slice("id-chapter".length));
     let i = verses1.findIndex(rec => rec.bid === activeBook && rec.cn === activeChapter);

     removeElements('id-page1');
     let h2 = document.createElement('h2');
     let page = document.getElementById('id-page1');
     h2.textContent = `${document.getElementById(activeBookID).textContent} ${activeChapter}`;
     document.getElementById('id-bottomTitleLine').textContent = h2.textContent;
     if (isTWF) {
          let sp2 = document.createElement('span');
          sp2.classList.add('cs-edited');
          sp2.textContent =` TWF - Last Edited: ${dateEdited}`
          h2.appendChild(sp2);
     };
     page.appendChild(h2);

     let p;
     let pn;
     let sp;
     let spa;
     let vt;
     let vNum;

     verseCount = 0;
     while (i < verses1.length && verses1[i].cn === activeChapter && verses1[i].bid === activeBook) {
          p = document.createElement('p');
          p.id = `id-pA${verses[i].vid}`;
          pn = verses[i].pn;
          if (pn > 0 && paragraphLayoutDefault) {
               while (verses[i].pn === pn) {
                    sp = document.createElement('span');
                    sp.id = `id-versNumberA${verses[i].vn}`;
                    if (verses[i].vn === 1) {
                         vNum = `${verses1[i].vn} `;
                    } else { vNum = ` ${verses1[i].vn} `; };
                    let aVerse = verses1[i].vt;

                    if (verses1[i].jq === 1) {
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
               sp.id = `id-versNumberA${verses[i].vn}`;
               vNum = `${verses[i].vn} `;
               let aVerse = verses1[i].vt;
               if (verses1[i].jq === 1) {
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
};

async function getDefaults() {

     //testRemover();
     const params = new URLSearchParams(window.location.search);

     let ltr = localStorage.getItem('redLetter');
     if (ltr) { redLetterDefault = ltr; };

     let verid = params.get('verid');
     if (verid) { activeVersionID = `id-version${verid}`; };
     if (!activeVersionID) { activeVersionID = localStorage.getItem("activeVersionID"); };
     if (!activeVersionID) { activeVersionID = defaultVersionID };
     let id = Number(activeVersionID.slice("id-version".length));
     let i = versions.findIndex(rec => rec.id === id);
     activeLanguageID = versions[i].lid;

     let bid = params.get('bid');
     if (bid) { activeBookID = `id-book${bid}`; };
     if (!activeBookID) { activeBookID = localStorage.getItem("activeBookID"); };
     if (!activeBookID) { activeBookID = defaultBookID; };

     let cn = params.get('cn');
     if (cn) { activeChapterID = `id-chapter${cn}`; };
     if (!activeChapterID) { activeChapterID = localStorage.getItem("activeChapterID"); };
     if (!activeChapterID) { activeChapterID = defaultChapterID; };

     setTheme = localStorage.getItem("setTheme");
     activeFontSize = localStorage.getItem("activeFontSize");
     if (!activeFontSize) { activeFontSize = 1.06; } else { activeFontSize = Number(activeFontSize); };
     activeFontSizeCount = localStorage.getItem("activeFontSizeCount");
     if (!activeFontSizeCount) { activeFontSizeCount = 0; } else { activeFontSizeCount = Number(activeFontSizeCount); };

     let verid1 = params.get('verid1');
     if (verid1) { activeVersion1ID = `id-versionA${verid1}`; };
     if (!activeVersion1ID) { activeVersion1ID = localStorage.getItem("activeVersion1ID"); };
     if (!activeVersion1ID) { activeVersion1ID = defaultVersion1ID };
     let id1 = Number(activeVersion1ID.slice("id-versionA".length));
     let idx = versions.findIndex(rec => rec.id === id1);
     activeLanguage1ID = versions[idx].lid;

     return true;
};

async function getVersion(e = null) {

     let id = null;
     if (e) { id = e.target.id; };
     if (!id || id === 'id-resetDefaults') { id = activeVersionID };
     let aVersion = document.getElementById(id);
     let idx = Number(aVersion.dataset.index);
     let url = `data/${versions[idx].ar}/${versions[idx].ar}Verses.json`;
     if (versions[idx].ar === 'TWF') {isTWF = true} else {isTWF = false};
     try {
          const res = await fetch(url);
          if (!res.ok) { throw new Error(res.status); };
          verses = await res.json();
          await getChapter();
          activeVersionID = aVersion.id;
          document.getElementById('id-MenuBtn1').textContent = versions[idx].ar;
          document.getElementById('id-headline').textContent = versions[idx].t;
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

async function getVersion1(e = null) {

     let id = null;
     if (e) { id = e.target.id; };
     if (!id) { id = activeVersion1ID };
     let aVersion = document.getElementById(id);
     let idx = Number(aVersion.dataset.index);
     let url = `data/${versions[idx].ar}/${versions[idx].ar}Verses.json`;
     if (versions[idx].ar === 'TWF') {isTWF = true} else {isTWF = false};
     try {
          const res = await fetch(url);
          if (!res.ok) { throw new Error(res.status); };
          verses1 = await res.json();
          await getChapter1();
          activeVersion1ID = aVersion.id;
          document.getElementById('id-MenuBtn4').textContent = versions[idx].ar;
          document.getElementById('id-headline1').textContent = versions[idx].t;
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

function testRemover() {
     localStorage.removeItem('activeFontSizeCount');
     localStorage.removeItem('activeFontSize');
     localStorage.removeItem('activeBookID');
     localStorage.removeItem('activeChapterID');
     localStorage.removeItem('activeLanguageID');
     localStorage.removeItem('activeLanguage1ID');
     localStorage.removeItem('activeVersionID');
     localStorage.removeItem('activeVersion1ID');
     localStorage.removeItem('redLetter');
     localStorage.removeItem('setTheme');
     removeQueryParam('vh');
     removeQueryParam('bid');
     removeQueryParam('cn');
     removeQueryParam('lid');
     removeQueryParam('verid');
     removeQueryParam('verid1');
};