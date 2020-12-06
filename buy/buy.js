let buyWindow;

function fillBuyWIndow(){
    buyWindow = getWindow(screen.width);
    buyWindow.textContent = "Покупка";
    buyWindow.id="buyWindow";
    buyWindow.querySelector("#souvenirs_title").addEventListener('click', function(e){     
        closeBuy();
      });
}

function closeBuy(){
    alert("Work");
}

function buy(){
    buyWindow = getWindow();
    let a = document.createElement('div');
    a.style.height = "40px";
    buyWindow.appendChild(a);
    //alert(buyWindow);
    document.querySelector("#souvenirs_background").appendChild(buyWindow);
}