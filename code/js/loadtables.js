async function loadBooks() {

     let i = 0;
     let ii = 0;

     removeElements('id-books');

     let menuBooks = document.getElementById('id-books');
     let div = document.createElement('div');
     div.id = 'id-bookHeader';
     div.classList.add('cs-bookHeader');

     let spa = document.createElement('span');
     spa.textContent = 'Books';
     div.appendChild(spa);

     let div1 = document.createElement("div");
     div1.id = 'id-closeBook';
     div1.classList.add("cs-closeBook");
     div1.addEventListener("click", (e) => {
          sortBooks(e);
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
     });
     if (bookSort) { div1.title = 'Sort Biblically';
     } else { div1.title = 'Sort Alphabetically'; };

     spa = document.createElement('span');
     spa.id = 'id-heart';
     spa.classList.add('cs-heart');
     spa.textContent = '♥';

     div1.appendChild(spa);
     div.appendChild(div1);
     menuBooks.appendChild(div);

     while (i < 39) {
          div = document.createElement('div');
          div.classList.add('cs-bookLine');
          div1 = document.createElement('div');
          div1.addEventListener("click", (e) => {
               changeBook(e);
               e.preventDefault();
               e.stopPropagation();
               e.stopImmediatePropagation();
          });
          div1.id = `id-book${oldBooks[i].id}`;
          div1.classList.add('cs-book');
          div1.classList.add('cs-bookRight');
          div1.dataset.bid = oldBooks[i].id;
          div1.dataset.chapters = oldBooks[i].c;
          div1.textContent = oldBooks[i].t;
          if (activeBookID === div1.id) { chapterCount = Number(div1.dataset.chapters) };
          div1.setAttribute("translate", "no");
          div.appendChild(div1);

          if (ii < 27) {
               div1 = document.createElement('div');
               div1.addEventListener("click", (e) => {
                    changeBook(e);
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
               });
               div1.id = `id-book${newBooks[ii].id}`;
               div1.classList.add('cs-book');
               div1.dataset.bid = newBooks[ii].id;
               div1.dataset.chapters = newBooks[ii].c;
               div1.textContent = newBooks[ii].t;
          } else {
               div1 = document.createElement('div');
               div1.classList.add('cs-endBook');
          };
          if (activeBookID === div1.id) { chapterCount = Number(div1.dataset.chapters) };
          div.setAttribute("translate", "no");
          div.appendChild(div1);
          menuBooks.appendChild(div);
          i++;
          ii++;
     };
     div = document.createElement('div');
     div.id = 'id-lastBookLine';
     div.classList.add('cs-lastLine');
     div.insertAdjacentHTML('beforeend', `...`);
     menuBooks.appendChild(div);
     return true;
};

async function loadChapters() {

     let menuChapters = document.getElementById('id-chapters');
     let div = document.createElement('div');
     let div1;
     let x = 0;

     removeElements('id-chapters');
     div.classList.add('cs-chapterHeader');
     div.textContent = 'Chapters';
     menuChapters.appendChild(div);
     chapterCount++;

     for (let i = 1; i < chapterCount; i++) {

          div = document.createElement('div');
          div.classList.add('cs-chapterLine');
          while (x < 5 && i < chapterCount) {
               div1 = document.createElement('div');
               div1.addEventListener("click", (e) => {
                    changeChapter(e);
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
               });
               div1.id = `id-chapter${i}`;
               div1.classList.add('cs-chapter');
               div1.textContent = i;
               div1.setAttribute("translate", "no");
               div.appendChild(div1);
               i++
               x++;
          };
          i = i - 1;
          x = 0;
          div.setAttribute("translate", "no");
          menuChapters.appendChild(div);
     };
     div = document.createElement('div');
     div.id = 'id-lastChapterLine';
     div.classList.add('cs-lastLine');
     div.textContent = '...';
     menuChapters.appendChild(div);
     return true;
};

async function loadLanguages() {

     let i = 0;
     let menuLanguages = document.getElementById("id-languages");
     let ii = languages.findIndex(rec => rec.lid === activeLanguageID);

     removeElements('id-languages');

     let div = document.createElement("div");
     div.id = 'id-languageHeader';
     div.classList.add('cs-languageHeader');

     let div1 = document.createElement("div");
     div1.classList.add('cs-languageFlag');
     let div2;
     let x = 0;
     while (x < 3) {
          div2 = document.createElement("div");
          div2.textContent = '★';
          div1.appendChild(div2);
          x++;
     };
     div.appendChild(div1);

     let spa = document.createElement("spa");
     spa.id = 'id-changeLanguage';
     spa.classList.add('cs-changeLanguage');
     spa.textContent = 'Change Language';
     div.appendChild(spa);


     div1 = document.createElement("div");
     div1.id = 'id-closeChangeLng';
     div1.classList.add("cs-openLngs");
     div1.textContent = '✕';
     div1.addEventListener("click", (e) => {
          closeLanguage(e);
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
     });
     div.appendChild(div1);

     div1 = document.createElement("div");
     div1.id = 'id-language';
     div1.classList.add("cs-versionHeaderLanguage");
     div1.classList.add('cs-changeLanguage');
     div1.textContent = `Language: ${languages[ii].lng}`;
     div.appendChild(div1);
     menuLanguages.appendChild(div);
     for (const lang of languages) {

          div = document.createElement("div");
          div.addEventListener("click", (e) => {
               changeLanguage(e);
               e.preventDefault();
               e.stopPropagation();
               e.stopImmediatePropagation();
          });
          div.id = `id-lang${lang.lid}`;
          div.dataset.index = i;
          div.textContent = lang.lng;
          div.classList.add("cs-language");
          div.setAttribute("translate", "no");
          menuLanguages.appendChild(div);
          i++;
     };
     div = document.createElement("div");
     div.classList.add("cs-lastLine");
     div.textContent = '...';
     div.setAttribute("translate", "no");
     menuLanguages.appendChild(div);
     return true;
};

async function loadVerses() {

     let menuVerses = document.getElementById('id-verses');
     let div = document.createElement('div');
     let div1;
     let x = 0;
     let y = 1;

     removeElements('id-verses');
     div.classList.add('cs-verseHeader');
     div.textContent = 'Verses';
     menuVerses.setAttribute("translate", "no");
     menuVerses.appendChild(div);
     verseCount++;

     for (let i = 1; i < verseCount; i++) {

          div = document.createElement('div');
          div.id = `id-verseLine${y}`;
          y++;
          div.classList.add('cs-verseLine');
          while (x < 5 && i < verseCount) {
               div1 = document.createElement('div');
               div1.addEventListener("click", (e) => {
                    findVerse(e);
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
               });
               div1.id = `id-verse${i}`;
               div1.classList.add('cs-verse');
               div1.textContent = i;
               div1.setAttribute("translate", "no");
               div.appendChild(div1);
               i++
               x++;
          };
          i = i - 1;
          x = 0;
          menuVerses.appendChild(div);
     };
     div.id = 'id-lastVerseLine';
     div = document.createElement('div');
     div.classList.add('cs-lastLine');
     div.textContent = '...';
     menuVerses.appendChild(div);
     return true;
};

async function loadVersions() {

     let menuVersions = document.getElementById("id-versions");
     let menuVersion = document.getElementById("id-MenuBtn1");
     let pageHeadline = document.getElementById("id-headline");
     let i = versions.findIndex(rec => rec.lid === activeLanguageID);
     let ii = languages.findIndex(rec => rec.lid === activeLanguageID);

     removeElements('id-versions');

     let div = document.createElement("div");
     div.id = 'id-versionHeader';
     div.classList.add('cs-versionHeader');
     let spa = document.createElement("spa");
     spa.textContent = 'Versions';
     div.appendChild(spa);

     let div1 = document.createElement("div");
     div1.id = 'id-openLngs';
     div1.classList.add("cs-openLngs");
     div1.textContent = '♥';
     div1.addEventListener("click", (e) => {
          openBoxes(e);
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
     });
     div.appendChild(div1);

     div1 = document.createElement("div");
     div1.id = 'id-versionHeaderlanguage';
     div1.classList.add("cs-versionHeaderLanguage");
     div1.textContent = `Language: ${languages[ii].lng}`;
     div.appendChild(div1);
     menuVersions.appendChild(div);

     while (i < versions.length && versions[i].lid === Number(activeLanguageID)) {

          div = document.createElement("div");
          div.addEventListener("click", (e) => {
               changeVersion(e);
               e.preventDefault();
               e.stopPropagation();
               e.stopImmediatePropagation();
          });
          div.id = `id-version${versions[i].id}`;
          if (activeVersionID === div.id) {
               menuVersion.textContent = versions[i].ar;
               pageHeadline.textContent = versions[i].t;
          };
          div.dataset.index = i;
          div.textContent = `${versions[i].t} - ${versions[i].ar}`;
          div.classList.add("cs-version");
          div.setAttribute("translate", "no");
          menuVersions.appendChild(div);
          i++;
     };
     div = document.createElement("div");
     div.classList.add("cs-lastLine");
     div.textContent = '...';
     div.setAttribute("translate", "no");
     menuVersions.appendChild(div);
     return true;
};
