var runningTotal = 0.0;

function addItem()
{
  var newItem = document.getElementById("price").value;
  if(isNaN(newItem) === true) {
    alert("Enter price as a number");
  }
  else {
  runningTotal = runningTotal + Number(newItem);
  var dollars = asCurrency(runningTotal);
  document.getElementById("subtotal").innerHTML = dollars;
  document.getElementById("price").value = "";
  setCookie("preTax",runningTotal,30);
  }
  // update a cookie called "preTax" with the value of runningTotal
}

function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function calculateReceipt() {
  var receiptSubtotal = Number(getCookie("preTax"));
  var receiptTax = receiptSubtotal * 0.075;
  var receiptTotal = receiptSubtotal + receiptTax;
  document.getElementById("sub").innerHTML = asCurrency(receiptSubtotal);
  document.getElementById("tax").innerHTML = asCurrency(receiptTax);
  document.getElementById("tot").innerHTML = asCurrency(receiptTotal);
}