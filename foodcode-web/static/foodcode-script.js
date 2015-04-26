$(document).ready(function () {
  var cookie_enabled = (navigator.cookieEnabled) ? true : false;
  if(typeof navigator.cookieEnabled == "undefined" && !cookie_enabled) {
    document.cookie = "justasamplecookie";
    cookieEnabled = (document.cookie.indexOf("justasamplecookie") != -1) ? true : false;
  }
  if(!cookie_enabled) {
    alert("Please enable cookies to try the demo!");
  }
});

function isElementNotEmpty(e){
  return (e.length > 0 ? true : false);
}
function isElementExists(e) {
  return (e != null ? true: false);
}

/* Header */
function aOnMouseOverHeader(t) {
  t.setAttribute("class", "over");
}
function aOnMouseOutHeader(t) {
  t.setAttribute("class", "out");
}
function aOnClick(t, e) {
  e.preventDefault();
  var target = $(t).attr("href");
  $target=$(target);
  $('html,body').animate({scrollTop:$target.offset().top}, 1000, 'swing');
}

/* Footer */
function aOnMouseOverFooter(t) {
  t.setAttribute("class", "over");
  t.style.color = "#000000";
}
function aOnMouseOutFooter(t) {
  t.setAttribute("class", "out");
  t.style.color = "#FFFFFF";
}

/* Body */
function aOnMouseOver(t) {
  t.setAttribute("class", "over");
  t.style.color = "#009C00";
  t.style.opacity = "1.0";
}
function aOnMouseOut(t) {
  t.setAttribute("class", "out");
  t.style.color = "#009C00";
  t.style.opacity = "0.61";
}
function hideBlockElement(e, hide) {
  e.style.display = (hide ? 'none' : 'block');
}

/* Body: Images */
function hideImage(e, hide) {
  e.style.visibility = (hide ? 'hidden' : 'visible');
}

/*
$.post('/view_filters', {'action': 'swap', 'l': l, 't': t, 'r': r, 'b': b},
       function (response) {
         console.log(response);
         if (response.result) {
           var p_image = document.getElementById("p_image");
           p_image.setAttribute("src", response.image);
           p_image.setAttribute("alt", "Swapped Image");
         }
       }, "json");
*/


function viewboxOnKeyDown(t, e) {
  /*console.log(e.keyCode+" ; "+free_hand);*/
  if(e.keyCode == 'f' || e.keyCode == 'F') {
    free_hand = !free_hand;
    /*console.log(free_hand);*/
  }
}

function bodyOnLoad(t, e) {
  console.log("body on load");
}

