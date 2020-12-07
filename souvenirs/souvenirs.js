let myBackground;
let myWindow;

let elementWidth = "190px";
let elementHeight = "300px";
let quanityRow = 1;
let maxQuanityInRow = 1;

qurSouvNum = 0;
quanElem = 14;


function fillSouvWindow(persId){
    myWindow.querySelector(".dialog_title").querySelector("p").textContent="Сувениры";
    myWindow.querySelector(".dialog_title").querySelector("img").addEventListener('click', function(e){     
        souvenirs_close();
    });

    let width = screen.width;
    if(width<768){
        maxQuanityInRow = 1;
    }else if (width<1280){
        maxQuanityInRow = 5;
    }else{
        maxQuanityInRow = 5;
    }

    let myLine = document.createElement('div');
    myLine.classList.add("souvenirs_row");
    let j = 0;
    for(let i=0;i<quanElem;i++){
        myLine.append(getElement(persId));
        j++;
        if(j%maxQuanityInRow == 0){
            myWindow.appendChild(myLine);
            myLine = document.createElement('div');
            myLine.classList.add("souvenirs_row");
        }
    }
    alert(j);
    if(j%maxQuanityInRow!=0)
    {
    for(let i=0;i< maxQuanityInRow - j%maxQuanityInRow;i++)
        myLine.append(getElement(persId));
    myWindow.appendChild(myLine);  
    }
 
}

function getElement(souvId)
{
    let element = document.createElement('div');
    element.style.width = elementWidth;
    element.style.height = elementHeight;
    element.classList.add('souvenirs_elem')

    if(quanElem<=qurSouvNum){
        element.style.backgroundColor = "transparent";
        element.style.cursor = "default";
        return element;
    }

    let numInList = -1;
    for(let i=0;i<souvenirsList.length;i++){
        if(souvenirsList[i].id == souvId)
            numInList = i;
    }

    //Картинка товара
    let img = document.createElement('div');
    img.style.backgroundImage = souvenirsList[numInList].array[qurSouvNum].img;
    qurSouvNum++
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
    infoBuy.addEventListener('click', function(e){     
        buy();});
    info.append(infoBuy);

    element.append(info);
    return element;
}

function openBasket(persId)
{
    document.body.style.overflow = "hidden";
    myBackground = getBlurBack();
    myWindow = getWindow();
    fillSouvWindow(persId);
    myBackground.appendChild(myWindow);
    document.body.append(myBackground);
}

function souvenirs_close()
{
    qurSouvNum = 0;
    document.body.style.overflow = "auto";
    document.body.removeChild(myBackground);
}