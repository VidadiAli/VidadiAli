let film_section = document.getElementsByClassName('film-section')[0];

const callFilms = (listOfFilm) => {
    for (let i = 0; i < listOfFilm.length; i++) {
        const film_s_child = document.createElement('div');
        film_s_child.setAttribute('id', listOfFilm[i].NewsName);
        const film_cover = document.createElement('img');
        film_cover.setAttribute('src', listOfFilm[i].NewsCover);
        const film_name = document.createElement('h2');
        film_name.textContent = listOfFilm[i].NewsName;
        const film_writer = document.createElement('h4');
        film_writer.textContent = listOfFilm[i].NewsWriter;
        const icon_div = document.createElement('div');
        icon_div.className = "icon-div";
        const icon_div_c1 = document.createElement('i');
        icon_div_c1.className = "bx bx-chevron-down";
        const icon_div_c2 = document.createElement('i');
        icon_div_c2.className = "bx bx-chevron-up";
        icon_div.appendChild(icon_div_c1);
        icon_div.appendChild(icon_div_c2);
        const film_phrase = document.createElement('p');
        film_phrase.innerHTML = listOfFilm[i].NewsParagraf;

        const moreElement = document.createElement('a');
        moreElement.setAttribute('href', `news.html#${listOfFilm[i].NewsName}`);
        moreElement.textContent = "Ətraflı";
        film_s_child.append(film_cover, film_name, film_writer, icon_div, film_phrase, moreElement);

        film_section.appendChild(film_s_child);
    }
}

callFilms(listOfFilm);

let count1 = 0, search_div = document.getElementsByClassName('search-div')[0], film_s_child1;

search_input.onkeydown = function () {

    search_div.innerHTML = "";
    film_section.innerHTML = "";

    listOfFilm = [];
    listOfBaza.forEach((e) => {
        if (e.tema === 'film') {
            listOfFilm.push(e);
        }
    });

    callFilms(listOfFilm);

    listOfFilm.forEach(function (filmofname) {
        if (filmofname.NewsName.toLocaleUpperCase().includes(search_input.value.toLocaleUpperCase())) {
            document.getElementById('search_close').style.paddingBottom = "15px"
            document.getElementsByClassName('search-div-1')[0].style.top = "4rem";
            if (innerWidth < 650) {
                document.getElementsByClassName('search-div-1')[0].style.top = "2.6rem";
            }
            film_s_child1 = document.createElement('a');
            film_s_child1.setAttribute('href', `#${listOfFilm[listOfFilm.indexOf(filmofname)].NewsName}`)
            const film_cover = document.createElement('img');
            film_cover.setAttribute('src', listOfFilm[listOfFilm.indexOf(filmofname)].NewsCover);
            const film_name = document.createElement('h2');
            film_name.textContent = listOfFilm[listOfFilm.indexOf(filmofname)].NewsName;
            const film_writer = document.createElement('h4');
            film_writer.textContent = listOfFilm[listOfFilm.indexOf(filmofname)].NewsWriter;

            film_s_child1.append(film_cover, film_name, film_writer);

            film_s_child1.addEventListener('click', () => {
                listOfFilm = [];
                listOfBaza.forEach((e) => {
                    if (e.tema === 'film') {
                        if (e.NewsName === film_name.textContent) {
                            listOfFilm.push(e);
                        }
                    }
                })
                film_section.innerHTML = "";
                search_div.innerHTML = "";
                document.getElementById('search_close').style.paddingBottom = "0px"
                callFilms(listOfFilm);
            })

            search_div.appendChild(film_s_child1);
            count1 = 0;
        }
        else {
            count1++;
        }
    });

    if (count1 >= listOfFilm.length) {
        search_div.innerHTML = "Film tapılmadı. Başqa bir ad yoxlayın";
        search_div.style.color = "red";
        search_div.style.fontWeight = "600";
        search_div.style.fontSize = "1.5rem";
    }

}

search_close.onclick = function () {
    search_div.innerHTML = "";
    film_section.innerHTML = "";
    document.getElementById('search_close').style.paddingBottom = "0px"
    document.getElementsByClassName('search-div-1')[0].style.top = "0rem";
    listOfFilm = [];
    listOfBaza.forEach((e) => {
        if (e.tema === 'film') {
            listOfFilm.push(e);
        }
    });

    callFilms(listOfFilm);
}

let icon_div_js = document.getElementsByClassName('film-section')[0];

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