function changeBook(e = null) {

     if (e) { activeBookID = e.target.id; };
     let activeBook = Number(activeBookID.slice("id-book".length));
     activeChapterID = 'id-chapter1';
     chapterCount = Number(document.getElementById(activeBookID).dataset.chapters);
     document.getElementById('id-MenuBtn3').textContent = '1:';
     getChapter();
     getChapter1();
     loadChapters();
     closeBoxes();
     selected(activeBookID, 'id-books');
     selected(activeChapterID, 'id-chapters');
     setQuerystring('bid', activeBook);
     setQuerystring('cn', 1);
     removeQueryParam('vh');
     document.getElementById('top').scrollIntoView({ block: 'start' });
     boxOpen = 0;
};
function changeChapter(e = null) {

     if (e) { activeChapterID = e.target.id; };
     let activeChapter = Number(activeChapterID.slice("id-chapter".length));
     chapterCount = Number(document.getElementById(activeBookID).dataset.chapters);
     getChapter();
     getChapter1();
     loadChapters();
     closeBoxes();
     selected(activeChapterID, 'id-chapters');
     setQuerystring('cn', activeChapter);
     document.getElementById('top').scrollIntoView({ block: 'start' });
     boxOpen = 0;
};
async function changeLanguage(e = null) {

     let id;
     if (e) { id = e.target.id; };
     let idx = Number(document.getElementById(id).dataset.index);
     activeBookID = defaultBookID;
     activeChapterID = defaultChapterID;
     activeLanguageID = languages[idx].lid;
     loadVersions();
     document.getElementById('id-language').textContent = `Language: ${languages[idx].lng}`;
     closeLanguage();
     let parentElement = document.getElementById('id-versions');
     let selectedVersion = parentElement.children[1];
     activeVersionID = selectedVersion.id;
     selectedVersion.click();

     setQuerystring('bid', 1);
     setQuerystring('cn', 1);
     setQuerystring('verid', activeVersionID);
     localStorage.setItem('activeBookID', activeBookID);
     localStorage.setItem('activeChapterID', activeChapterID);
     localStorage.setItem('activeVersionID', activeVersionID);

     selected(id, 'id-languages');
     selected(activeVersionID, 'id-versions');
     selected(activeBookID, 'id-books');
     selected(activeChapterID, 'id-chapters');

     document.getElementById('top').scrollIntoView({ block: 'start' });
};

async function changeLanguageA(e = null) {

     let id;
     if (e) { id = e.target.id; };
     let idx = Number(document.getElementById(id).dataset.index);
     activeBookID = defaultBookID;
     activeChapterID = defaultChapterID;
     activeLanguage1ID = languages[idx].lid;
     loadVersions1();
     document.getElementById('id-languageA').textContent = `Language: ${languages[idx].lng}`;
     closeLanguageA();
     let parentElement = document.getElementById('id-versions1');
     let selectedVersion = parentElement.children[1];
     activeVersion1ID = selectedVersion.id;
     selectedVersion.click();

     setQuerystring('verid1', activeVersion1ID);
     localStorage.setItem('activeVersion1ID', activeVersion1ID);

     selected(id, 'id-languages1');
     selected(activeVersionID, 'id-versions1');

     document.getElementById('top').scrollIntoView({ block: 'start' });
};

async function changeVersion(e = null) {

     let rec = false;
     rec = await getVersion(e);
     if (rec) { locateBox('id-header', 'id-mainPage', -10); };
     let activeVersion = Number(activeVersionID.slice("id-version".length));
     selected(activeVersionID, 'id-versions');
     setQuerystring('cn', 1);
     setQuerystring('verid', activeVersion);
     return true;
};
async function changeVersionA(e = null) {

     let rec = false;
     rec = await getVersion1(e);
     if (rec) { locateBox('id-header', 'id-mainPage', -10); };
     let activeVersion = Number(activeVersion1ID.slice("id-versionA".length));
     selected(activeVersion1ID, 'id-versions1');
     //setQuerystring('cn1', 1);
     setQuerystring('verid1', activeVersion);
     return true;
};