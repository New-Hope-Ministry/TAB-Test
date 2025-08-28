function aClick(ahref) { window.location.href = ahref; };

function changeBook(e = null) {

     if (e) { activeBookID = e.target.id; };
     let activeBook = Number(activeBookID.slice("id-book".length));
     activeChapterID = 'id-chapter1';
     chapterCount = Number(document.getElementById(activeBookID).dataset.chapters);
     document.getElementById('id-MenuBtn3').textContent = '1:';
     document.getElementById('id-MenuBtn4').textContent = '1:';
     getChapter();
     loadChapters();
     closeBoxes();
     selected(activeBookID, 'id-books');
     selected(activeChapterID, 'id-chapters');
     setQuerystring('bid', activeBook);
     setQuerystring('cn', 1);
     removeQueryParam('vh');
     unHighlight();
     document.getElementById('top').scrollIntoView({ block: 'start' });
     boxOpen = 0;
};

function changeChapter(e = null) {

     if (e) { activeChapterID = e.target.id; };
     let activeChapter = Number(activeChapterID.slice("id-chapter".length));
     chapterCount = Number(document.getElementById(activeBookID).dataset.chapters);
     getChapter();
     loadChapters();
     closeBoxes();
     selected(activeChapterID, 'id-chapters');
     setQuerystring('cn', activeChapter);
     document.getElementById('id-MenuBtn4').textContent = '1';
     unHighlight();
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
     let i = localVoices.findIndex(rec => rec.lang === languages[idx].lngc);
     if (i > -1) {
          document.getElementById('id-listen').style.display = 'flex';
          document.getElementById('id-brListen').style.display = 'block';
     } else {
          document.getElementById('id-listen').style.display = 'none';
          document.getElementById('id-brListen').style.display = 'none';
     };
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
     unHighlight();

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

function findVerse(e = null) {

     let id;
     if (e) { id = e.target.id; };
     let save = Number(id.slice("id-verse".length));
     verseHighlight(id);
     setQuerystring('vh', save);
     selected(id, 'id-verses');
};

function lastChapter() {

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

     let chapter = Number(document.getElementById(activeChapterID).textContent) - 1;
     if (chapter < 1) { bid--; chapter = books[i - 1].c; chapterCount = books[i - 1].c; };
     activeBookID = `id-book${bid}`;
     activeChapterID = `id-chapter${chapter}`;
     loadChapters();
     getChapter();
     removeQueryParam('vh');
     document.getElementById('id-MenuBtn4').textContent = '1:';
     unHighlight();
     document.getElementById('top').scrollIntoView({ block: 'start' });
};

function nextChapter() {

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
     removeQueryParam('vh');
     document.getElementById('id-MenuBtn4').textContent = '1:';
     unHighlight();
     document.getElementById('top').scrollIntoView({ block: 'start' });
};

function synthVoice() {
     const params = new URLSearchParams(window.location.search);
     const verid = params.get('verid');
     const bid = params.get('bid');
     const cn = params.get('cn');

     const readParams = new URLSearchParams();

     if (verid !== null && verid !== 'null') readParams.set('verid', verid);
     if (bid !== null && bid !== 'null') readParams.set('bid', bid);
     if (cn !== null && cn !== 'null') readParams.set('cn', cn);

     const readhref = `synth.html?${readParams.toString()}`;
     window.location.href = readhref;
};

function readChronological() {

     const params = new URLSearchParams(window.location.search);
     const verid = params.get('verid');
     const readhref = `chron.html?verid=${verid}`;
     window.location.href = readhref;
     console.log('test');
};

function readRandomChapter() {

     let min = 30640;
     let i = Math.floor(Math.random() * (0 - min + 1)) + min;
     let bid = verses[i].bid;
     let cn = verses[i].cn;

     activeBookID = `id-book${bid}`;
     activeChapterID = `id-chapter${cn}`;
     getChapter();
     document.getElementById('top').scrollIntoView({ block: 'start' });
     closeBoxes();
};




// Searcher.js simple full text search engine

const stopwords = new Set(["a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"]);

const stemmer = word => word.toLowerCase();

function setCursorToEnd(contentEditableElement) {
     const range = document.createRange();
     const selection = window.getSelection();
     range.selectNodeContents(contentEditableElement);
     range.collapse(false);
     selection.removeAllRanges();
     selection.addRange(range);
     contentEditableElement.focus();
};
function searchFocus() {
     let srchBox = document.getElementById('id-searchBox');
     const e = new KeyboardEvent('keypress', { key: ' ' });
     srchBox.dispatchEvent(e);
     setCursorToEnd(srchBox);
};

function searchKeyDown() {
     if (this.event.key === 'Enter') {
          this.event.preventDefault();
          searcher();
     };
};


function openSearch(e = null) {

     if (e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
     };
     closeBoxes();
     if (searchOpen) {
          document.getElementById('id-searchContainer').style.display = 'none';
          document.getElementById('id-mainPage').style.display = 'block';
          document.getElementById('id-readRandom').style.display = 'block';
          document.getElementById('id-menu').style.display = 'block';
          searchOpen = false;
          return;
     } else {
          document.getElementById('id-mainPage').style.display = 'none';
          document.getElementById('id-readRandom').style.display = 'none';
          document.getElementById('id-searchContainer').style.display = 'block';
          document.getElementById('id-menu').style.display = 'none';
          document.getElementById('id-searchBox').focus();
          document.getElementById("id-searchVersion").textContent = document.getElementById(activeVersionID).textContent;
          document.getElementById('id-searchTop').scrollIntoView({ block: 'center' });
          let url = new URL(window.location);
          window.history.pushState({}, '', url);
          searchOpen = true;
          return;
     };
};

// Create Inverted Index without stopwords stopwords can be added if wanted
function createIndex(data) {
     const invertedIndex = {};
     data.forEach(doc => {
          const docId = doc.vid;
          const text = doc.vt;
          const words = text.split(/\W+/);
          words.forEach(word => {
               const stemmedWord = stemmer(word);
               if (!invertedIndex[stemmedWord]) {
                    invertedIndex[stemmedWord] = [];
               };
               invertedIndex[stemmedWord].push(docId);
          });
     });
     return invertedIndex;
};

// Update an existing index with stop words, still needs work
function updateInvertedIndex(invertedIndex, newData) {
     newData.forEach(doc => {
          const docId = doc.vid;
          const text = doc.vt;
          const words = text.split(/\W+/);
          words.forEach(word => {
               if (!stopwords.has(word.toLowerCase())) {
                    const stemmedWord = stemmer(word);
                    if (!invertedIndex[stemmedWord]) {
                         invertedIndex[stemmedWord] = [];
                    }
                    if (!invertedIndex[stemmedWord].includes(docId)) {
                         invertedIndex[stemmedWord].push(docId);
                    };
               };
          });
     });
};

function searchPhrase(invertedIndex, phrase) {

     const lowerCasePhrase = phrase.toLowerCase();
     const words = lowerCasePhrase.split(/\W+/);
     const stemmedWords = words.map(word => stemmer(word));
     const docIdSets = stemmedWords.map(word => new Set(invertedIndex[word] || []));
     const commonDocIds = docIdSets.reduce((acc, set) => {
          return new Set([...acc].filter(docId => set.has(docId)));
     });
     const commonDocIdsArray = Array.from(commonDocIds);

     // Find case-sensitive exact phrase matches
     const caseSensitiveExactPhraseDocIds = commonDocIdsArray.filter(docId => {
          const text = verses.find(doc => doc.vid === docId).vt;
          return text.includes(phrase);
     });

     // Find case-insensitive exact phrase matches
     const caseInsensitiveExactPhraseDocIds = commonDocIdsArray.filter(docId => {
          const text = verses.find(doc => doc.vid === docId).vt.toLowerCase();
          return text.includes(lowerCasePhrase);
     });

     // Find documents containing all words in the phrase
     const partialPhraseDocIds = commonDocIdsArray.filter(docId => {
          const text = verses.find(doc => doc.vid === docId).vt.toLowerCase();
          return words.every(word => text.includes(word));
     });

     // Find documents containing all words in the phrase
     const allWordsDocIds = verses.filter(doc => {
          const text = doc.vt.toLowerCase();
          return words.every(word => text.includes(word));
     }).map(doc => doc.vid);

     // Combine results, ensuring no duplicates
     const combinedDocIds = [
          ...new Set([
               ...caseSensitiveExactPhraseDocIds,
               ...caseInsensitiveExactPhraseDocIds,
               ...partialPhraseDocIds,
               ...allWordsDocIds
          ])
     ];
     return combinedDocIds;
};

function setSearchChapter(idx) {

     let i;
     let books;
     let bid = verses[idx].bid;
     let cn = verses[idx].cn;
     let vn = verses[idx].vn;

     if (bid < 40) {
          i = oldBooks.findIndex(rec => rec.id === bid);
          books = oldBooks;
     } else {
          i = newBooks.findIndex(rec => rec.id === bid);
          books = newBooks;
     };
     return `${books[i].t} ${cn}:${vn}`;
};

function getSearchVerses(result = searchResults) {

     let a;
     let p;
     let hr;
     let vt;
     let br;
     let nt;
     let idx = 0;
     let i = searchResultIndex + 30;

     let aSearch = document.getElementById('id-searchResults');
     if (result.length - searchResultIndex < 30) {
          i = result.length;
     };
     while (searchResultIndex < i && i <= result.length) {
          p = document.createElement('p');
          p.classList.add('cs-searchVerse');
          a = document.createElement('a');
          a.addEventListener("click", () => {
               getSearchChapter();
               this.event.preventDefault();
               this.event.stopPropagation();
               this.event.stopImmediatePropagation();
          });
          idx = result[searchResultIndex] - 1;
          a.id = `id-searchVerse${verses[idx].vid}`;
          a.textContent = setSearchChapter(idx);
          a.dataset.bid = verses[idx].bid;
          a.dataset.cn = verses[idx].cn;
          a.dataset.vn = verses[idx].vn;
          a.classList.add('cs-searchChapter');
          p.appendChild(a);
          br = document.createElement('br');
          p.appendChild(br);
          nt = verses[idx].vt.replace('`', '');
          //nt = nt.replace('ยด', '');
          vt = document.createTextNode(nt);
          p.appendChild(vt);
          aSearch.appendChild(p);
          searchResultIndex++;
     };
     hr = document.createElement('hr');
     aSearch.appendChild(hr);
     br = document.createElement('br');
     aSearch.appendChild(br);

     let z = result.length - searchResultIndex;
     if (z === 0) {
          p = document.createElement('p');
          p.textContent = `There are no more results.`;
     } else {
          a = document.createElement('a');
          a.addEventListener("click", () => {
               getMoreResults();
               this.event.preventDefault();
               this.event.stopPropagation();
               this.event.stopImmediatePropagation();
          });

          a.textContent = 'More Results';
          a.classList.add('cs-searchResults');
          aSearch.appendChild(a);
          br = document.createElement('br');
          aSearch.appendChild(br);
          br = document.createElement('br');
          aSearch.appendChild(br);
          p = document.createElement('p');
          p.textContent = `There are ${z} more results.`;
     };
     aSearch.appendChild(p);
     br = document.createElement('br');
     aSearch.appendChild(br);
     br = document.createElement('br');
     aSearch.appendChild(br);
};

function getMoreResults() {

     document.getElementById("id-loader").style.display = 'block';
     setTimeout(function () {
          getSearchVerses();
          document.getElementById("id-loader").style.display = 'none';
     }, 30);

};

function getSearchChapter() {

     let id = this.event.target.id;
     let bid = document.getElementById(id).dataset.bid;
     let cn = document.getElementById(id).dataset.cn;
     let vn = document.getElementById(id).dataset.vn;
     document.getElementById('id-MenuBtn4').textContent = vn;

     activeBookID = `id-book${bid}`;
     activeChapterID = `id-chapter${cn}`;
     getChapter();
     openSearch();
     selectedVerseID = `id-versNumber${vn}`;
     const spa = document.getElementById(selectedVerseID);
     const selection = window.getSelection();
     const range = document.createRange();
     range.selectNodeContents(spa);
     selection.removeAllRanges();
     selection.addRange(range);
     spa.scrollIntoView({ block: 'center' });
     setQuerystring('vh', vn);
     setQuerystring('cn', cn);
};

async function testFetcher() {

     let adjusterTester = document.getElementById('id-adjustTester');
     let adjustTesterLabel = document.getElementById('id-adjustTesterLabel');
     if (!adjusterTester.value) { return; };
     if (verses) {
          verses = null;
          adjusterTester.textContent = '';
          adjustTesterLabel.textContent = 'Test Verses Index:';
          return;
     };
     let idx = Number(adjusterTester.value);
     const res = await fetch(`data/${versions[idx].ar}/${versions[idx].ar}Verses.json`);
     verses = await res.json();
     adjustTesterLabel.textContent = `Test Verses Index: ${idx}: ${versions[idx].ar}`;
     var elements = document.getElementsByClassName('cs-activeVersion');
     if (elements.length > 0) {
          elements[0].id = versions[idx].id;
          elements[0].textContent = versions[idx].t;
     };
     activeVersionID = versions[idx].id;
};

async function searcher() {

     searchData = document.getElementById('id-searchBox').textContent;
     if (searchData === '') { return; };
     document.getElementById("id-loader").style.display = 'block';

     setTimeout(function () {
          searchResultIndex = 0;
          if (!searchIndex) { searchIndex = createIndex(verses); };
          searchResults = searchPhrase(searchIndex, searchData);
          removeElements('id-searchResults');
          getSearchVerses(searchResults);
          document.getElementById("id-loader").style.display = 'none';
     }, 30);
};
// End of Searcher.js simple full text search engine