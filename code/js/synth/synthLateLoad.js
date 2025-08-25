function changeBook(e = null) {

     stopSpeech();
     setTimeout(() => {
          if (e) { activeBookID = e.target.id; };
          activeChapterID = 'id-chapter1';
          chapterCount = Number(document.getElementById(activeBookID).dataset.chapters);
          document.getElementById('id-SynthBtn3').textContent = '1:';
          getChapter();
          loadChapters();
          closeBoxes();
          selected(activeBookID, 'id-books');
          selected(activeChapterID, 'id-chapters');
          document.getElementById('top').scrollIntoView({ block: 'start' });
          locateBox('id-synth', 'id-mainPage', -10);
          boxOpen = 0;
     }, 130);
};

function changeChapter(e = null) {

     stopSpeech();
     setTimeout(() => {
          if (e) { activeChapterID = e.target.id; };
          chapterCount = Number(document.getElementById(activeBookID).dataset.chapters);
          getChapter();
          loadChapters();
          closeBoxes();
          selected(activeChapterID, 'id-chapters');
          document.getElementById('top').scrollIntoView({ block: 'start' });
          locateBox('id-synth', 'id-mainPage', -10);
          boxOpen = 0;
     }, 130);
};

async function changeLanguage(e = null) {

     stopSpeech();
     setTimeout(() => {
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
          selected(id, 'id-languages');
          selected(activeVersionID, 'id-versions');
          selected(activeBookID, 'id-books');
          selected(activeChapterID, 'id-chapters');
          document.getElementById('top').scrollIntoView({ block: 'start' });
          locateBox('id-synth', 'id-mainPage', -10);
     }, 130);
};

async function changeVersion(e = null) {

     stopSpeech();
     setTimeout(async () => {
          let rec = false;
          rec = await getVersion(e);
          if (rec) { locateBox('id-header', 'id-mainPage', -10); };
          selected(activeVersionID, 'id-versions');
          locateBox('id-synth', 'id-mainPage', -10);
          return true;
     }, 130);
};