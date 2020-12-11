function getMainHeader(){
    let mainHeader = document.createElement('div');
    mainHeader.classList.add('mainHeader');


    //Кнопка "Киногерои"
    let mainHeaderTitle = document.createElement('div');
    mainHeaderTitle.classList.add('mainHeaderTitle');
    let titleText = document.createElement('a');
    titleText.href = "index.html";
    titleText.textContent = "Киногерои";
    mainHeaderTitle.appendChild(titleText);
    mainHeader.appendChild(mainHeaderTitle);

    //Кнопка "Кинопары"
    mainHeaderTitle = document.createElement('div');
    mainHeaderTitle.classList.add('mainHeaderTitle');
    titleText = document.createElement('a');
    titleText.href = "cinemaPair.html";
    titleText.textContent = "Кинопары";
    mainHeaderTitle.appendChild(titleText);
    mainHeader.appendChild(mainHeaderTitle);

    //Меню
    let mainHeaderMenu = document.createElement('div');
    mainHeaderMenu.classList.add('mainHeaderMenu');
    let burgerCheck = document.createElement('input');
    burgerCheck.type = 'checkbox';
    burgerCheck.id = "burgerCheck";

    burgetLabel = document.createElement('label');
    burgetLabel.htmlFor = 'burgerCheck';
    burgetLabel.id = 'burgerLable';
    mainHeaderMenu.appendChild(burgerCheck);
    mainHeaderMenu.appendChild(burgetLabel);
    mainHeader.appendChild(mainHeaderMenu);
    

    return mainHeader;
}