let noveltyPage = document.querySelector('#noveltyPage');
fillNoveltyWindow();


function fillNoveltyWindow(){
    noveltyPage.appendChild(getMainHeader());
    noveltyPage.appendChild(getFilmBlock());

    //Заполняем фильмы
    let films = document.querySelectorAll('.film');
    for(let i=0; i < films.length; i++){
        films[i].style.backgroundImage = "url('images/novelty/"+i+".jfif')";
        films[i].childNodes[1].textContent = noveltyList[i];
        films[i].addEventListener('click', function(e){     
            let id = e.currentTarget.id; 
            localStorage.setItem("id",id);
            document.location.href='hero/hero.html';
        });
    }
}