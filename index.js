let filmsInRow = 7;
let rows = 2;
let qurId = 0;



//Создаём строки
for( let i=0;i<rows;i++){
  document.body.appendChild(getFilmRow());
}

function getFilmRow()
{
  let row = document.createElement('div');
  row.classList.add('filmRow');
  for(let i=0;i<filmsInRow;i++)
    row.appendChild(getFilm());
  
    return row;
}

function getFilm(){
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

//Заполняем фильмы
let films = document.querySelectorAll('.film');
for(let i=0; i < films.length; i++){
    films[i].style.backgroundImage = "url('images/"+i+".jpg')";
    films[i].childNodes[1].textContent = heroes[i].filmName;
    films[i].childNodes[3].textContent = heroes[i].name;
    films[i].addEventListener('click', function(e){     
        let id = e.target.id; 
        localStorage.setItem("id",id);
        document.location.href='hero.html';
      });
}
