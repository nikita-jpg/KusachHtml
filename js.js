let texts=["1983/Лицо со шрамом FFFFFFFFFFFFFFF"]
let images=["url('1.jpg')"]
let films = document.querySelectorAll('.film');

for(let i=0; i < films.length; i++){
    films[i].style.backgroundImage = images[0];
}