function adjustPosition() {
     locateBox('id-header', 'id-versions');
     locateBox('id-header', 'id-books');
     locateBox('id-header', 'id-chapters');
     locateBox('id-header', 'id-versions');
};

async function bookWidth() {
     let element = document.getElementById("id-books");
     element.style.display = "block";
     let width = element.offsetWidth;
     element.style.display = "none";
     width = (width + 31) + "px";
     document.documentElement.style.setProperty('--bookWidth', width);
     element.classList.remove("cs-booksW");
     element.classList.add("cs-booksW1");
     document.getElementById("id-versions").style.width = width;
};

function changeFontSize(direction) {

     if (direction === '+') {
          if (activeFontSizeCount > 8) { return; };
          activeFontSize = activeFontSize * 1.15;
          activeFontSizeCount++;
     } else if (direction === '-') {
          if (activeFontSizeCount < 1) { return; };
          activeFontSize = activeFontSize / 1.15;
          activeFontSizeCount--;
     } else if (direction === 'd') {
          activeFontSize = defaultFontSize;
          activeFontSizeCount = 0;
     };
     setFontSize();

     localStorage.setItem("activeFontSizeCount", activeFontSizeCount);
     localStorage.setItem("activeFontSize", activeFontSize);

     const bottom = document.getElementById("id-endFontScroll");
     //bottom.scrollIntoView({ behavior: "instant", block: "end" });
};

function changeTheme() {

     toggleTheme();
     if (rotateTheme) {
          darkTheme();
          rotateTheme = false;
          localStorage.setItem("setTheme", '1');
     } else {
          lightTheme();
          rotateTheme = true;
          localStorage.setItem("setTheme", '0');
     };

};

function closeBoxes() {
     document.getElementById('id-versions').style.display = 'none';
     document.getElementById('id-books').style.display = 'none';
     document.getElementById('id-chapters').style.display = 'none';
     document.getElementById('id-verses').style.display = 'none';
     document.getElementById('id-randomChapter').style.backgroundColor = 'ba0e0e';
     document.getElementById('id-openLngs').textContent = '♥';
     document.getElementById('id-languages').style.display = 'none';
     boxesAreOpen = false;
};

function closeLanguage(e = null) {

     if (e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
     };
     document.getElementById('id-languages').style.display = 'none';
     document.getElementById('id-versions').style.display = 'block';

};

function darkTheme() {
     document.documentElement.style.setProperty('--bodyBackground', '#3d3636');
     document.documentElement.style.setProperty('--bannerBackground', '#1a0303');
     document.documentElement.style.setProperty('--mainBackground', '#473e3e');
     document.documentElement.style.setProperty('--blackText', '#dcdde4');
     document.documentElement.style.setProperty('--whiteText', '#dcdde4');
     document.documentElement.style.setProperty('--lighterMaroonEmphasis', '#f3d3d3');

     document.documentElement.style.setProperty('--verseNumber', '#709cdf');
     document.documentElement.style.setProperty('--navyEmphasis', '#709cdf');
     document.documentElement.style.setProperty('--searchResults', '#fa4d4d');
     document.documentElement.style.setProperty('--gradientLight', '#5d656e');
     document.documentElement.style.setProperty('--gradientDark', '#010914');
     document.getElementById('id-endLine').style.color = '#010914';
};

async function deleteData() {

     localStorage.removeItem('savedLocal');
     document.getElementById('top').scrollIntoView({ block: 'start' });
     await unregisterServiceWorkers();
};

function isNumeric(value) { return !isNaN(value) && !isNaN(parseFloat(value)); };

function JesusQuote(aVerse, vNum) {

     if (redLetterDefault === 0) {
          aVerse = aVerse.replace('`', '');
          aVerse = aVerse.replace('´', '');
     } else if (redLetterDefault === 1) {
          aVerse = aVerse.replace('`', '<span class="cs-emphasis">');
          aVerse = aVerse.replace('´', '</span>');
     } else if (redLetterDefault === 2) {
          aVerse = aVerse.replace('`', '<span class="cs-emphasisBlue">');
          aVerse = aVerse.replace('´', '</span>');
     };
     return `<span class="cs-verseNumber">${vNum}</span>${aVerse}`;
};

function lightTheme() {
     document.documentElement.style.setProperty('--bodyBackground', '#f3f3f3');
     document.documentElement.style.setProperty('--bannerBackground', '#022a69');
     document.documentElement.style.setProperty('--mainBackground', 'white');
     document.documentElement.style.setProperty('--blackText', 'black');
     document.documentElement.style.setProperty('--whiteText', 'white');
     document.documentElement.style.setProperty('--verseNumber', '#0505da');
     document.documentElement.style.setProperty('--lighterMaroonEmphasis', '#ba0e0e');
     document.documentElement.style.setProperty('--navyEmphasis', 'navy');
     document.documentElement.style.setProperty('--searchResults', '#ba0e0e');
     document.documentElement.style.setProperty('--gradientLight', '#0064d9');
     document.documentElement.style.setProperty('--gradientDark', '#11428c');
};

function locateBox(topBox, nextBox, mrgn = 0) {
     const firstDiv = document.getElementById(topBox);
     const secondDiv = document.getElementById(nextBox);
     const contentHeight = firstDiv.clientHeight;
     const firstDivBottom = firstDiv.offsetTop + contentHeight - mrgn;
     if (mrgn) {
          secondDiv.style.position = 'relative';
          secondDiv.style.marginTop = `${firstDivBottom}px`;
          secondDiv.style.position = 'static';
     } else {
          secondDiv.style.top = `${firstDivBottom}px`;
     };
};

function openBoxes(e = null) {

     if (e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
     };

     let ID = e.target.id;
     let id = null;

     const params = new URLSearchParams(window.location.search);
     let vh = params.get('vh');
     if (vh) { selectedVerseID = `id-verse${vh}`; };

     if (ID === 'id-headerTitle' || ID === 'id-header' || ID === 'id-pageContainer' || ID === '' || ID === 'id-headline' || ID === '' || ID.includes("id-p") || ID.includes("id-versNumber")) { closeBoxes(); return; };
     switch (ID) {
          case "id-MenuBtn1":
               id = 'id-versions';
               locateBox('id-header', id);
               document.getElementById(id).style.display = 'block';
               document.getElementById(activeVersionID).scrollIntoView({ block: 'center' });
               break;
          case "id-MenuBtn2":
               id = 'id-books';
               locateBox('id-header', id);
               document.getElementById(id).style.display = 'block';
               document.getElementById(activeBookID).scrollIntoView({ block: 'center' });
               break;
          case "id-MenuBtn3":
               id = 'id-chapters';
               locateBox('id-header', id);
               document.getElementById(id).style.display = 'block';
               document.getElementById(activeChapterID).scrollIntoView({ block: 'center' });
               break;
          case "id-MenuBtn4":
               id = 'id-verses';
               locateBox('id-header', id);
               document.getElementById(id).style.display = 'block';
               if (vh) { selectedVerseID = `id-verse${vh}`; };
               if (selectedVerseID) {
                    selected(selectedVerseID, 'id-verses');
                    document.getElementById(selectedVerseID).scrollIntoView({ block: 'center' });
               } else {
                    document.getElementById('id-verseLine1').scrollIntoView({ block: 'center' });
               };
               break;
          case "id-openLngs":
               id = 'id-languages';
               locateBox('id-header', id);
               document.getElementById('id-versions').style.display = 'none';
               document.getElementById(id).style.display = 'block';
               selected(`id-lang${activeLanguageID}`, id);
               document.getElementById(`id-lang${activeLanguageID}`).scrollIntoView({ block: 'center' });
               boxesAreOpen = false;
               break;
          default:
               break;
     };
     if (boxesAreOpen) { closeBoxes(); } else { boxesAreOpen = true; };
};

function paragraphLayout() {

     if (paragraphLayoutDefault) {
          document.getElementById('id-paragraphLayout').textContent = 'Paragraph Layout';
          paragraphLayoutDefault = 0;
     } else {
          document.getElementById('id-paragraphLayout').textContent = 'Line Layout';
          paragraphLayoutDefault = 1;
     };
     getChapter();
     localStorage.setItem("paragraphLayout", paragraphLayoutDefault);
};

function redLetter() {

     setRedLetter++;
     if (setRedLetter > 2) { setRedLetter = 0 };
     redLetterDefault = setRedLetter;

     if (redLetterDefault === 0) {
          document.getElementById('id-redLetter').textContent = 'Red Letter';
     } else if (redLetterDefault === 1) {
          document.getElementById('id-redLetter').textContent = 'Blue Letter';
          redLetterDefault = 1;
     } else if (redLetterDefault === 2) {
          document.getElementById('id-redLetter').textContent = 'Black Letter';
          redLetterDefault = 2;
     };
     getChapter();
     localStorage.setItem("redLetter", redLetterDefault);
};
function removeElements(id) {

     let target = document.getElementById(id);
     while (target.firstChild) {
          target.removeChild(target.firstChild);
     };
};

function removeQueryParam(param) {
     var url = new URL(window.location.href);
     url.searchParams.delete(param);
     window.history.replaceState({}, '', url);
};

function resetDefaults() {

     let confirmed = confirm('You are about to reset all saved settings and file storage settings. Changes will take effect immediately. Click OK to continue or Cancel to abort!');
     if (!confirmed) { return; };

     let theme = document.getElementById("id-theme");

     rotateTheme = false;
     changeTheme();
     theme.textContent = "☀️";
     if (theme.classList.contains('cs-darkTheme')) {
          theme.classList.remove('cs-darkTheme');
     };
     rotateTheme = true;
     changeFontSize('d');
     localStorage.removeItem('activeFontSizeCount');
     localStorage.removeItem('activeFontSize');
     localStorage.removeItem('activeBookID');
     localStorage.removeItem('activeChapterID');
     localStorage.removeItem('activeLanguageID');
     localStorage.removeItem('activeLanguage1ID');
     localStorage.removeItem('activeVersionID');
     localStorage.removeItem('activeVersion1ID');
     localStorage.removeItem('lastCacheCheck');
     localStorage.removeItem('redLetter');
     localStorage.removeItem('setTheme');

     paragraphLayoutDefault = 0;
     redLetterDefault = 0;
     selectedVerseID = null;
     activeVersionID = defaultVersionID;
     activeBookID = defaultBookID;
     activeChapterID = defaultChapterID;
     activeLanguageID = defaultLanguageID
     let activeVersion = Number(defaultVersionID.slice("id-version".length));

     loadLanguages();
     loadVersions();
     getVersion();
     deleteData();

     selected(activeVersionID, 'id-versions');
     selected(activeBookID, 'id-books');
     selected(activeChapterID, 'id-chapters');
     selected(`id-lang${activeLanguageID}`, 'id-chapters');

     removeQueryParam('vh');
     removeQueryParam('verid1');
     setQuerystring('bid', 1);
     setQuerystring('cn', 1);
     setQuerystring('lid', activeLanguageID);
     setQuerystring('verid', activeVersion);
     document.getElementById('id-MenuBtn4').textContent = '1:';
     localStorage.removeItem('paragraphLayout');

     document.getElementById('id-paragraphLayout').textContent = 'Paragraph Layout';
     document.getElementById('id-redLetter').textContent = 'Red Letter';
     document.getElementById(defaultVersionID).classList.add('cs-bvSelected');
     document.getElementById('id-book1').classList.add('cs-bvSelected');
     document.getElementById('id-chapter1').classList.add('cs-bvSelected');

     pastSelectedLanguageID = defaultLanguageID;
     pastSelectedVersionID = defaultVersionID;
     pastSelectedBookID = defaultBookID;
     pastSelectedChapterID = defaultChapterID;
     pastSelectedVerseID = selectedVerseID;

     document.getElementById('top').scrollIntoView({ block: 'start' });
};

function selected(id, container, reset = null) {

     let unselected = null;

     switch (container) {
          case "id-versions":
               unselected = pastSelectedVersionID;
               pastSelectedVersionID = id;
               break;
          case "id-books":
               unselected = pastSelectedBookID;
               pastSelectedBookID = id;
               break;
          case "id-chapters":
               unselected = pastSelectedChapterID;
               pastSelectedChapterID = id;
               break;
          case "id-languages":
               unselected = pastSelectedLanguageID;
               pastSelectedLanguageID = id;
               break;
          case "id-verses":
               unselected = pastSelectedVerseID;
               pastSelectedVerseID = id;
               if (id === 'id-verse0') { id = null; };
               break;
     };
     let div = document.getElementById(unselected);
     if (unselected) { if (div) { div.classList.remove('cs-bvSelected'); }; };
     if (id && !reset) { document.getElementById(id).classList.add('cs-bvSelected'); };
};

async function setFontSize() {
     const allP = document.querySelectorAll('p');
     for (const ps of allP) {
          if (ps.id !== 'id-endLine') { ps.style.fontSize = `${activeFontSize}rem`; };
     };
};

function setQuerystring(key, value) {

     let url = new URL(window.location);
     let params = new URLSearchParams(url.search);

     url.searchParams.set(key, value);
     if (params.has(key)) {
          window.history.replaceState({}, '', url);
     } else {
          window.history.pushState({}, '', url);
     };
};

function sortBooks() {

     if (bookSort) {
          oldBooks.sort((a, b) => a.id - b.id);
          newBooks.sort((a, b) => a.id - b.id);
          loadBooks();
          document.getElementById('id-closeBook').title = 'Sort Alphabetically';
          document.getElementById('id-closeBook').alt = 'Sort Alphabetically';
          document.getElementById('id-heart').classList.remove("cs-rotate180");
          bookSort = false;
     } else {
          oldBooks.sort((a, b) => a.t.localeCompare(b.t));
          newBooks.sort((a, b) => a.t.localeCompare(b.t));
          loadBooks();
          document.getElementById('id-closeBook').title = 'Sort Biblically';
          document.getElementById('id-closeBook').alt = 'Sort Biblically';
          document.getElementById('id-heart').classList.add('cs-rotate180');
          bookSort = true;
     };
};

async function startUp() {

     let id = null;

     if (activeVersionID) {
          id = Number(activeVersionID.slice("id-version".length));
          setQuerystring('verid', id);
          selected(activeVersionID, 'id-versions');
     };
     if (activeBookID) {
          id = Number(activeBookID.slice("id-book".length));
          setQuerystring('bid', id);
          selected(activeBookID, 'id-books');
     };
     if (activeChapterID) {
          id = Number(activeChapterID.slice("id-chapter".length));
          setQuerystring('cn', id);
          selected(activeChapterID, 'id-chapters');
     };
     return true;
};

function toggleTheme() {
     let theme = document.getElementById("id-theme");
     theme.classList.toggle("cs-darkTheme");
     theme.textContent = theme.classList.contains("cs-darkTheme") ? "🌙" : "☀️";
};

function unHighlight() {
     selected('id-verse0', 'id-verses');
     removeQueryParam('vh');
     selectedVerseID = null;
     pastSelectedVerseID = null;
     document.getElementById('id-MenuBtn4').textContent = '1';
};

function verseHighlight(id) {

     let vh = document.getElementById(id).textContent;
     document.getElementById('id-MenuBtn4').textContent = vh;
     selectedVerseNumberID = `id-versNumber${vh}`;
     const spa = document.getElementById(selectedVerseNumberID);
     const selection = window.getSelection();
     const range = document.createRange();
     range.selectNodeContents(spa);
     selection.removeAllRanges();
     selection.addRange(range);
     spa.scrollIntoView({ block: 'center' });
     closeBoxes();
     //boxOpen = 0;
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