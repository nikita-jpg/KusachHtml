let noveltyPage = document.querySelector('#noveltyPage');
fillNoveltyWindow();


function fillNoveltyWindow(){
    noveltyPage.appendChild(getMainHeader());
    noveltyPage.appendChild(getFilmBlock());

    //Заполняем фильмы
    let films = document.querySelectorAll('.film');
    for(let i=0; i < films.length; i++){
        films[i].style.backgroundImage = "url('images/novelty/"+i+".jfif')";
        films[i].childNodes[1].textContent = noveltyList[i].name;
        films[i].addEventListener('click', function(e){     
            trailer_open();
        });
    }
}

function trailer_open()
{
    document.body.style.overflow = "hidden";
    myBackground = getBlurBack();
    myWindow = getWindow();
    myWindow.querySelector(".dialog_title").querySelector("p").textContent="Трейлер";
    myWindow.querySelector('img').src = "svg/close.svg";
    myWindow.querySelector(".dialog_title").querySelector("img").addEventListener('click', function(e){     
        trailer_close();
    });

    let noveltyContainer = document.createElement('iframe');
    noveltyContainer.id = "noveltyContainer";
    noveltyContainer.src = "https://www.youtube.com/embed/3jT_q7dt-cM";
    

    myWindow.appendChild(noveltyContainer);
    myBackground.appendChild(myWindow);
    document.body.append(myBackground);
}

function trailer_close()
{
    qurSouvNum = 0;
    document.body.style.overflow = "auto";
    document.body.removeChild(myBackground);
}