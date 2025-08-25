function aClick(ahref) { window.location.href = ahref; };
function adjustPosition() {
     locateBox('id-header', 'id-languages');
     locateBox('id-header', 'id-languages1');
     locateBox('id-header', 'id-versions1');
     locateBox('id-header', 'id-versions');
     locateBox('id-header', 'id-books');
     locateBox('id-header', 'id-chapters');
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
function closeBoxes() {
     document.getElementById('id-versions').style.display = 'none';
     document.getElementById('id-versions1').style.display = 'none';
     document.getElementById('id-books').style.display = 'none';
     document.getElementById('id-chapters').style.display = 'none';
     document.getElementById('id-openLngs').textContent = '♥';
     document.getElementById('id-languages').style.display = 'none';
     document.getElementById('id-languages1').style.display = 'none';
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
function closeLanguageA(e = null) {

     if (e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
     };
     document.getElementById('id-languages1').style.display = 'none';
     document.getElementById('id-versions1').style.display = 'block';
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
function JesusQuote(aVerse, vNum) {

     if (redLetterDefault) {
          aVerse = aVerse.replace('`', '<span class="cs-emphasis">');
          aVerse = aVerse.replace('´', '</span>');
     } else {
          aVerse = aVerse.replace('`', '');
          aVerse = aVerse.replace('´', '');
     };
     return `<span class="cs-verseNumber">${vNum}</span>${aVerse}`;
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

     if (ID === 'id-headerTitle' || ID === 'id-header' || ID === 'id-pageContainer' || ID === '' || ID === 'id-headline' || ID === '' || ID.includes("pid") || ID.includes("id-versNumber")) { closeBoxes(); return; };
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
               id = 'id-versions1';
               locateBox('id-header', id);
               document.getElementById(id).style.display = 'block';
               document.getElementById(activeVersionID).scrollIntoView({ block: 'center' });
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
          case "id-openLngs1":
               id = 'id-languages1';
               locateBox('id-header', id);
               document.getElementById('id-versions1').style.display = 'none';
               document.getElementById(id).style.display = 'block';
               selected(`id-langA${activeLanguageID}`, id);
               document.getElementById(`id-langA${activeLanguageID}`).scrollIntoView({ block: 'center' });
               boxesAreOpen = false;
               break;
          default:
               break;
     };
     if (boxesAreOpen) { closeBoxes(); } else { boxesAreOpen = true; };
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
     //document.body.classList.toggle("dark-mode");
     let theme = document.getElementById("id-theme");
     theme.classList.toggle("cs-darkTheme");
     theme.textContent = theme.classList.contains("cs-darkTheme") ? "🌙" : "☀️";
};
