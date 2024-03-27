let book_section = document.getElementsByClassName('book-section')[0];

const callBooks = (listOfBook) => {
    for (let i = 0; i < listOfBook.length; i++) {
        const book_s_child = document.createElement('div');
        book_s_child.setAttribute('id', listOfBook[i].NewsName)
        const book_cover = document.createElement('img');
        book_cover.setAttribute('src', listOfBook[i].NewsCover);
        const book_name = document.createElement('h2');
        book_name.textContent = listOfBook[i].NewsName;
        const book_writer = document.createElement('h4');
        book_writer.textContent = listOfBook[i].NewsWriter;
        const icon_div = document.createElement('div');
        icon_div.className = "icon-div";
        const icon_div_c1 = document.createElement('i');
        icon_div_c1.className = "bx bx-chevron-down";
        const icon_div_c2 = document.createElement('i');
        icon_div_c2.className = "bx bx-chevron-up";
        icon_div.appendChild(icon_div_c1);
        icon_div.appendChild(icon_div_c2);
        const book_phrase = document.createElement('p');
        book_phrase.innerHTML = listOfBook[i].NewsParagraf;

        const moreElement = document.createElement('a');
        moreElement.setAttribute('href', `news.html#${listOfBook[i].NewsName}`);
        moreElement.textContent = "Ətraflı";
        book_s_child.append(book_cover, book_name, book_writer, icon_div, book_phrase, moreElement);

        book_section.appendChild(book_s_child);
    }
}

callBooks(listOfBook)


let count1 = 0, search_div = document.getElementsByClassName('search-div')[0], book_s_child1;

search_input.onkeydown = function () {

    search_div.innerHTML = "";
    book_section.innerHTML = "";

    listOfBook = [];
    listOfBaza.forEach((e) => {
        if (e.tema === 'book') {
            listOfBook.push(e);
        }
    });

    callBooks(listOfBook);

    listOfBook.forEach(function (filmofname) {
        if (filmofname.NewsName.toLocaleUpperCase().includes(search_input.value.toLocaleUpperCase())) {
            document.getElementById('search_close').style.paddingBottom = "15px"
            document.getElementsByClassName('search-div-1')[0].style.top = "4rem";
            if (innerWidth < 650) {
                document.getElementsByClassName('search-div-1')[0].style.top = "2.6rem";
            }
            book_s_child1 = document.createElement('a');
            book_s_child1.setAttribute('href', `#${listOfBook[listOfBook.indexOf(filmofname)].NewsName}`)
            const book_cover = document.createElement('img');
            book_cover.setAttribute('src', listOfBook[listOfBook.indexOf(filmofname)].NewsCover);
            const book_name = document.createElement('h2');
            book_name.textContent = listOfBook[listOfBook.indexOf(filmofname)].NewsName;
            const book_writer = document.createElement('h4');
            book_writer.textContent = listOfBook[listOfBook.indexOf(filmofname)].NewsWriter;

            book_s_child1.append(book_cover, book_name, book_writer);

            book_s_child1.addEventListener('click', () => {
                listOfBook = [];
                listOfBaza.forEach((e) => {
                    if (e.tema === 'book') {
                        if (e.NewsName === book_name.textContent) {
                            listOfBook.push(e);
                        }
                    }
                })
                book_section.innerHTML = "";
                search_div.innerHTML = "";
                document.getElementById('search_close').style.paddingBottom = "0px"
                callBooks(listOfBook);
            });
            search_div.appendChild(book_s_child1);
            count1 = 0;
        }
        else {
            count1++;
        }
    });

    if (count1 >= listOfBook.length) {
        search_div.innerHTML = "Kitab tapılmadı. Başqa bir ad yoxlayın";
        search_div.style.color = "red";
        search_div.style.fontWeight = "600";
        search_div.style.fontSize = "1.5rem";
    }
}

search_close.onclick = function () {
    search_div.innerHTML = "";
    book_section.innerHTML = "";
    document.getElementById('search_close').style.paddingBottom = "0px"
    document.getElementsByClassName('search-div-1')[0].style.top = "0rem";
    listOfBook = [];
    listOfBaza.forEach((e) => {
        if (e.tema === 'book') {
            listOfBook.push(e);
        }
    });

    callBooks(listOfBook);
}

let icon_div_js = document.getElementsByClassName('book-section')[0];

icon_div_js.onclick = function (e) {
    if (e.target.className === "bx bx-chevron-down") {
        e.target.style.display = "none";
        e.target.nextElementSibling.style.display = "block";
        e.target.parentElement.nextElementSibling.style.display = "block";
        e.target.parentElement.nextElementSibling.nextElementSibling.style.display = "block";
    }

    if (e.target.className === "bx bx-chevron-up") {
        e.target.style.display = "none";
        e.target.previousElementSibling.style.display = "block";
        e.target.parentElement.nextElementSibling.style.display = "none";
        e.target.parentElement.nextElementSibling.nextElementSibling.style.display = "none";
    }
}