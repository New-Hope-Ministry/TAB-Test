document.addEventListener("DOMContentLoaded", function () {
     setTimeout(function () {
          document.getElementById('id-copyrighted').textContent = copyrighted;
     }, 300);
});

window.addEventListener("load", async () => {

     let rec = false;
     rec = await getDefaults();
     if (rec) { rec = false; rec = await loadBoxes(); allLoaded = true; };
     if (rec) { rec = false; rec = await getVersion(); };

     if (rec && allLoaded) {
          locateBox('id-header', 'id-mainPage', -10);
          setTimeout(() => {
               document.getElementById("id-loader").style.display = 'none';
               document.getElementById('id-readRandom').style.display = 'block';
               bookWidth();
          }, 130);

          if (setTheme === '1') {
               darkTheme();
               toggleTheme();
               rotateTheme = false;
          };
          if (savedLocal) {
               if (navigator.onLine) {
                    if ('requestIdleCallback' in window) {
                         requestIdleCallback(triggerCacheCheck);
                    } else {
                         setTimeout(() => {
                              triggerCacheCheck();
                         }, 3000);
                    };
               };
          } else {
               document.getElementById("id-end").style.display = 'block';
          };
          startUp();
     };
     window.addEventListener("resize", adjustPosition);
     if ('speechSynthesis' in window) {
          if (speechSynthesis.onvoiceschanged !== undefined) {
               speechSynthesis.onvoiceschanged = listVoices;
          } else {
               listVoices();
          };
     };
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
     loadVerses();
     if (activeBook === 1 && activeChapter === 1) { document.getElementById('id-bottomLastLine').style.visibility = 'hidden'; } else { document.getElementById('id-bottomLastLine').style.visibility = 'visible'; };

     if (activeBook === 66 && activeChapter === 22) { document.getElementById('id-bottomNextLine').style.visibility = 'hidden'; } else { document.getElementById('id-bottomNextLine').style.visibility = 'visible'; };
     setFontSize();
     document.getElementById('id-MenuBtn3').textContent = `${document.getElementById(activeChapterID).textContent}:`;
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
     if (ltr) { redLetterDefault = Number(ltr); setRedLetter = Number(ltr); };

     let vh = params.get('vh');
     if (vh) { selectedVerseID = `id-verse${vh}`; };

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

     let svd = localStorage.getItem('savedLocal');
     if (svd) { savedLocal = svd; };

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
          let holdSelectedVerseID = selectedVerseID;
          await getChapter();
          selectedVerseID = holdSelectedVerseID;
          activeVersionID = aVersion.id;
          document.getElementById('id-MenuBtn1').textContent = versions[idx].ar;
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
     if (selectedVerseID) {
          if (isNumeric(selectedVerseID)) { selectedVerseID = `id-verse${selectedVerseID}` };
          verseHighlight(selectedVerseID);
     };

     if (versions[idx].sch) {
          document.getElementById('id-search').style.display = 'block';
     } else {
          document.getElementById('id-search').style.display = 'none';
     };
     if (versions[idx].rdl) {
          document.getElementById('id-redLetter').style.display = 'block';
          if (redLetterDefault === 0) {
               document.getElementById('id-redLetter').textContent = 'Red Letter';
          } else if (redLetterDefault === 1) {
               document.getElementById('id-redLetter').textContent = 'Blue Letter';
          } else if (redLetterDefault === 2) {
               document.getElementById('id-redLetter').textContent = 'Black Letter';
          };
     } else {
          document.getElementById('id-redLetter').style.display = 'none';
     };
     if (verses[0].pn) {
          document.getElementById('id-paragraphLayout').style.display = 'block';
     } else { document.getElementById('id-paragraphLayout').style.display = 'none'; };

     removeElements('id-searchResults');
     document.getElementById('id-searchBox').textContent = '';
     searchIndex = null;
     boxesAreOpen = false;
     return true;
};

async function listVoices() {

     let avoice;
     const voices = speechSynthesis.getVoices();
     voices.forEach((voice, index) => {
          avoice = {
               idx: index,
               name: voice.name,
               lang: voice.lang,
               default: voice.default
          };
          index++;
          localVoices.push(avoice);
     });
     let i = languages.findIndex(rec => rec.lid === activeLanguageID);
     let ndx = localVoices.findIndex(rec => rec.lang === languages[i].lngc);
     if (ndx > -1) {
          document.getElementById('id-listen').style.display = 'flex';
          document.getElementById('id-brListen').style.display = 'block';
     } else {
          document.getElementById('id-listen').style.display = 'none';
          document.getElementById('id-brListen').style.display = 'none';
     };
};

async function loadBoxes() {

     loadLanguages();
     loadVersions();
     loadBooks();
     loadChapters();
     return true;
};

async function triggerCacheCheck() {
     const LAST_CHECK_KEY = 'lastCacheCheck';
     const today = new Date();
     const dayOfWeek = today.getDay();
     if (dayOfWeek === 0) { console.log(`Caches not checked it's Sunday`); return; }
     const now = Date.now();
     const sevenDays = 7 * 24 * 60 * 60 * 1000;

     const lastCheck = parseInt(localStorage.getItem(LAST_CHECK_KEY), 10);
     if (!lastCheck || now - lastCheck >= sevenDays) {
          try {
               const registration = await navigator.serviceWorker.ready;
               const activeWorker = registration.active || navigator.serviceWorker.controller;

               if (activeWorker) {
                    activeWorker.postMessage({ action: 'checkCaches' });
                    localStorage.setItem(LAST_CHECK_KEY, now.toString());
                    console.log('checkCaches triggered and timestamp updated.');
               } else {
                    console.warn('No active service worker found.');
               }
          } catch (err) {
               console.error('Failed to trigger checkVerses:', err);
          }
     } else {
          console.log('checkVerses skipped — last run was less than 7 days ago.');
     };
};
