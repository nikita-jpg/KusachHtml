let elementWidth = 1;
let elementHeight = 1;
let quanityRow = 1;
let quanityElInRow = 1;

let myBackground = getBackground();
let myWindow = getWindow(screen.width);
myBackground.appendChild(myWindow);


document.body.append(myBackground);

function getBackground(){
    let local_background = document.createElement('div');
    local_background.id = "souvenirs_background";
    return local_background;
}




function getWindow(width){
    let localWindow = document.createElement('div');
    if(width<768){
        quanityRow = 25;
        quanityElInRow = 1;
        elementWidth = "190px";
        elementHeight = "300px";

        localWindow.style.width = width*0.90+"px";
    }else if (width<1280){
        quanityRow = 1;
        quanityElInRow = 1;
        elementWidth = "190px";
        elementHeight = "300px";
        localWindow.style.width = width*0.70+"px";
    }else{
        quanityRow = 5;
        quanityElInRow = 5;
        elementWidth = "190px";
        elementHeight = "300px";
        localWindow.style.width = "1000px";
    }

    //Создаём заголовок окна
    let windowTitle = document.createElement('div');

    let windowTitleText = document.createElement('p');
    windowTitleText.textContent = "Сувениры";

    let windowTitleClose = document.createElement('img');
    windowTitleClose.src = "../svg/close.svg";

    windowTitleClose.addEventListener('click', function(e){     
        close();
      });

    let windowTitlePlug = document.createElement('div');
    windowTitlePlug.style.width = "24px";

    windowTitle.append(windowTitlePlug);
    windowTitle.append(windowTitleText);
    windowTitle.append(windowTitleClose);
    windowTitle.id = "souvenirs_title";


    localWindow.append(windowTitle);
    localWindow.id = "souvenirs_window";

    for(let i=0;i<quanityRow;i++)
        localWindow.append(getLine());

    return localWindow;
}
function getLine(){
    let myLine = document.createElement('div');
    myLine.classList.add("souvenirs_row");

    for(let i=0;i<quanityElInRow;i++)
        myLine.append(getElement());

    return myLine;
}
function getElement()
{
    let element = document.createElement('div');
    element.style.width = elementWidth;
    element.style.height = elementHeight;
    element.classList.add('souvenirs_elem');

    //Картинка товара
    let img = document.createElement('div');
    img.style.width = "160px";
    img.style.height = "160px";
    img.style.backgroundColor = "white";
    element.append(img);

    //Блок информации об товаре
    let info = document.createElement('div');
    info.style.width = "100%";
    info.style.height = "110px";
    info.classList.add("souvenirs_info");

    //Цена товара
    let infoPrice = document.createElement("p");
    infoPrice.style.width = "100%";
    infoPrice.style.height = "20px";
    infoPrice.textContent = "4500 ₽";
    infoPrice.classList.add("souvenirs_info_price");
    info.append(infoPrice);

    //Описание товара
    let infoText = document.createElement("p");
    infoText.style.width = "100%";
    infoText.style.height = "40px";
    infoText.textContent = "ТекстеТекстеТексте\nТекстеТекстеТексте";
    infoText.classList.add("souvenirs_info_text");
    info.append(infoText);

    //Кнопка купить
    let infoBuy = document.createElement("Button");
    infoBuy.style.width = "90%";
    infoBuy.style.height = "20px";
    infoBuy.textContent = "Купить";
    infoBuy.classList.add("souvenirs_info_buy");
    info.append(infoBuy);








    element.append(info);

    return element;
}


function close()
{
    //alert("close");
}