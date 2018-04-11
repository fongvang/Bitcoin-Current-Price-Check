var btn = document.querySelector("button");
var priceDisplay = document.querySelector("#price");

btn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
//ReadyStateFunction
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      var data = JSON.parse(XHR.responseText);
      var price = data.bpi.USD.rate;
      priceDisplay.innerText = price + " USD";
    }
  }
  
  var url = "https://api.coindesk.com/v1/bpi/currentprice.json"
  XHR.open("GET", url);
  XHR.send();
});