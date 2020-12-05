let texts=
[
"Лицо со шрамом",
"Бригада", 
"Звёздыный войны",
"Гарри Поттер",
"Бэтмен",
"Шерлок Холмс",
"Мстители: Война бесконечности",
"Джеймс Бонд",
"Робокоп",
"Звёздыный войны",
"Гарри Поттер",
"Бэтмен",
"Шерлок Холмс",
"Мстители",
]
let names=
[
"Тони Монтана",
"Саша 'Белый'", 
"Дарт Вейдер",
"Волан-де-Морт",
"Джокер",
"Джим Мориарти",
"Танос",
"Джеймс Бонд",
"Робокоп",
"Люк Скайуокер",
"Гарри Поттер",
"Бэтмен",
"Шерлок Холмс",
"Тони Старк",
];
let films = document.querySelectorAll('.film');


for(let i=0; i < films.length; i++){
    films[i].style.backgroundImage = "url('images/"+i+".jpg')";
    films[i].childNodes[1].textContent = texts[i];
    films[i].childNodes[3].textContent = names[i];
    films[i].addEventListener('click', function(e){     
        let id = e.target.id; 
        localStorage.setItem("id",id);
        document.location.href='good_1.html';
      });
}
