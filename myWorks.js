const mainWorks = document.getElementsByClassName('main1')[0];
const mainWorksHead = document.createElement('h1');
mainWorksHead.textContent = "Ən son işlərim";

const mainWorksBody = document.createElement('div');

listOfWorks.forEach((e) => {
    const mainWorksBodyElement = document.createElement('div');
    mainWorksBodyElement.setAttribute('class', 'works-box');
    const boxOfInform = document.createElement('div')
    const linkOfSite = document.createElement('a');
    linkOfSite.setAttribute('href', e.linkOfWorks);
    linkOfSite.setAttribute('target', "_blank");
    linkOfSite.textContent = 'Sayta göz at';

    const nameOfSite = document.createElement('span');
    nameOfSite.textContent = e.nameOfWorks;

    const mainWorksBodyElementIframe = document.createElement('iframe');
    mainWorksBodyElementIframe.setAttribute('src', e.linkOfWorks);

    boxOfInform.append(linkOfSite, nameOfSite);
    mainWorksBodyElement.append(boxOfInform, mainWorksBodyElementIframe);
    mainWorksBody.append(mainWorksBodyElement);
});

mainWorks.append(mainWorksHead, mainWorksBody);
const worksBox = document.getElementsByClassName('works-box')
for (let i = 0; i < listOfWorks.length; i++) {
    worksBox[i].style.height = worksBox[i].offsetWidth - 40 + "px";
}
if (innerWidth < 1300) {
    for (let i = 0; i < listOfWorks.length; i++) {
        worksBox[i].style.height = worksBox[i].offsetWidth + 250 + "px";
    }
}