function adjustPosition() {
    locateBox('id-header1', 'id-chronVersions');
    locateBox('id-header1', 'id-chronDays');
    locateBox('id-header1', 'id-chronChapters');
    locateBox('id-header1', 'id-pageContainer', -15);
};

function closeBoxes() {

    document.getElementById('id-chronVersions').style.display = 'none';
    document.getElementById('id-chronDays').style.display = 'none';
    document.getElementById('id-chronChapters').style.display = 'none';
    boxesAreOpen = false;
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

function openBox(e = null) {

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    let ID = e.target.id;
    let id = null;

    if (ID === 'id-header1' || ID === 'id-pageContainer' || ID === '' || ID === 'id-headline' || ID === '' || ID.includes("p") || ID.includes("id-versNumber")) { closeBoxes(); return; };
    switch (ID) {
        case "id-ChronBtn1":
            id = 'id-chronVersions';
            document.getElementById(id).style.display = 'block';
            document.getElementById(activeChronVersion).scrollIntoView({ block: 'center' });
            locateBox('id-header1', id);
            break;
        case "id-ChronBtn2":
            id = 'id-chronDays';
            document.getElementById(id).style.display = 'block';
            document.getElementById(activeChronDayID).scrollIntoView({ block: 'center' });
            locateBox('id-header1', id);
            break;
        case "id-ChronBtn3":
            id = 'id-chronChapters';
            document.getElementById(id).style.display = 'block';
            document.getElementById(activeChronChapterID).scrollIntoView({ block: 'center' });
            locateBox('id-header1', id);
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

function selected(id, container, reset = null) {

    let unselected = null;

    switch (container) {
        case "id-chronVersions":
            unselected =  pastActiveChronVersion;
            pastActiveChronVersion = id;
            break;
        case "id-chronDays":
            unselected =  pastActiveChronDayID;
            pastActiveChronDayID = id;
            break;
        case "id-chronChapters":
            unselected = pastActiveChronChapterID;
            pastActiveChronChapterID = id;
            break;
    };
    if (id && !reset) { document.getElementById(id).classList.add('cs-bvSelected'); };
    if (unselected) { document.getElementById(unselected).classList.remove('cs-bvSelected'); };
};

async function setFontSize() {
     const allP = document.querySelectorAll('p');
     for (const ps of allP) {
          if (ps.id !== 'id-endLine') { ps.style.fontSize = `${activeFontSize}rem`; };
     };
};

function aClick(ahref) { window.location.href = ahref; };