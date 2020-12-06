let buyWindow;
let buyBack;



function fillBuyWIndow(){
    buyWindow.querySelector(".dialog_title").querySelector("p").textContent="Покупка";
    buyWindow.querySelector(".dialog_title").querySelector("img").addEventListener('click', function(e){     
        buy_close();
      });

}
function make(){
    let purchase = document.createElement('div');
}


function buy(){

    buyWindow = getWindow();
    fillBuyWIndow();
    let a = document.createElement('div');
    a.style.height = "40px";
    buyWindow.appendChild(a);
    
    buyBack = getBlurBack();
    buyBack.appendChild(buyWindow);


    document.body.append(buyBack);
}

function buy_close(){
    document.body.removeChild(buyBack)
}
