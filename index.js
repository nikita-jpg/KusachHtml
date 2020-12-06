
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
