let myBackground;
let myWindow;

let elementWidth = 1;
let elementHeight = 1;
let quanityRow = 1;
let quanityElInRow = 1;


function fillWindow(){
    myWindow.querySelector(".dialog_title").querySelector("p").textContent="Сувениры";
    myWindow.querySelector(".dialog_title").querySelector("img").addEventListener('click', function(e){     
        souvenirs_close();
      });
    for(let i=0;i<quanityRow;i++)
        myWindow.append(getLine());
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
    img.style.backgroundImage = 'url("souvenirs/1.png")';
    img.style.width = "160px";
    img.style.height = "160px";
    img.classList.add("souvenirs_img");
    element.append(img);

    //Блок информации об товаре
    let info = document.createElement('div');
    info.style.width = "100%";
    info.style.height = "130px";
    info.classList.add("souvenirs_info");

    //Цена товара
    let infoPrice = document.createElement("p");
    infoPrice.style.width = "100%";
    infoPrice.style.height = "20px";
    infoPrice.textContent = "4500 ₽";
    infoPrice.classList.add("souvenirs_info_price","souvenirs_p");
    info.append(infoPrice);

    //Описание товара
    let infoText = document.createElement("p");
    infoText.style.width = "100%";
    infoText.style.height = "40px";
    infoText.textContent = "ТекстеТекстеТексте\nТекстеТекстеТексте";
    infoText.classList.add("souvenirs_info_text","souvenirs_p");
    info.append(infoText);

    //Кнопка купить
    let infoBuy = document.createElement("Button");
    infoBuy.style.width = "90%";
    infoBuy.style.height = "30px";
    infoBuy.textContent = "Купить";
    infoBuy.classList.add("souvenirs_info_buy");
    info.append(infoBuy);
    info.addEventListener('click', function(e){     
        buy();
      });

    element.append(info);

    return element;
}

function openBasket()
{
    document.body.style.overflow = "hidden";
    myBackground = getBlurBack();
    myWindow = getWindow();
    myWindow.id = "souvenirs_window";
    fillWindow();
    myBackground.appendChild(myWindow);
    document.body.append(myBackground);
}

function souvenirs_close()
{
    document.body.style.overflow = "auto";
    document.body.removeChild(myBackground);
}