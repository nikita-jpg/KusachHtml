let filmsInRow = 0;
let qurId = 0;
let filmsInBlock = 7;
fillHeroesWindow();


function fillHeroesWindow(){
  let width = screen.width;
  if(width<768){
    filmsInRow = 1;
  }else if (width<1280){
    filmsInRow = 3;
  }else{
    filmsInRow = 7;
  }
  document.body.appendChild(makeSubHeader(0));
  addFilmBlock();
  document.body.appendChild(makeSubHeader(1));
  quHer = 14;
  addFilmBlock();

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
  row.classList.add('filmRow');
  let j = 0;
  for(let i=0;i<filmsInBlock;i++){
    row.append(getFilm(false));
    j++;

    if(j%filmsInRow == 0){
      document.body.appendChild(row);
      row = document.createElement('div');
      row.classList.add("filmRow");
    }
  }
  if(j%filmsInRow!=0)
  {
    for(let i=0;i< filmsInRow - j%filmsInRow;i++)
        row.append(getFilm(true));
        document.body.appendChild(row);  
  }
}

function getFilm(isFull){

  let film = document.createElement('div');

  if(isFull)
  {
    film.style.width = "calc(100% - 20px)";
    film.style.height = "300px";
    return film;
  }
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


