let qurId = 0;
let filmsInBlock = 7;
let mainPage = document.querySelector('#mainPage');
fillHeroesWindow();


function fillHeroesWindow(){
  let width = screen.width;

  mainPage.appendChild(makeSubHeader(0));
  mainPage.appendChild(addFilmBlock());
  mainPage.appendChild(makeSubHeader(1));
  mainPage.appendChild(addFilmBlock());

    //Заполняем фильмы
    let films = document.querySelectorAll('.film');
    for(let i=0; i < films.length; i++){
      films[i].style.backgroundImage = "url('images/"+i+".jpg')";
      films[i].childNodes[0].textContent = heroes[i].filmName;
      films[i].childNodes[1].textContent = heroes[i].name;
      films[i].addEventListener('click', function(e){     
          let id = e.target.id; 
          localStorage.setItem("id",id);
          document.location.href='hero.html';
        });
  }

}

function makeSubHeader(i){
  let subHeader = document.createElement('div');
  subHeader.classList.add('subHeader');
  subHeader.textContent = subTitles[i];

  return subHeader;
}

function addFilmBlock(){
  let row = document.createElement('div');
  row.classList.add('filmBlock');
  for(let i=0;i<filmsInBlock;i++){
    row.append(getFilm(false));
  }
  return row;
}

function getFilm(isFull){

  let film = document.createElement('div');
  film.classList.add('film');
  film.id = qurId;

  let infoOne = document.createElement('div');
  infoOne.classList.add('info');
  let infoTwo = document.createElement('div');
  infoTwo.classList.add('info');

  film.appendChild(infoOne);
  film.appendChild(infoTwo);

  qurId++;
  return film;
}


