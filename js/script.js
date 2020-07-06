'use strict';

var success_toggle = document.getElementById('success-toggle');
var error_toggle = document.getElementById('error-toggle');

var overlay_content = document.getElementById('overlay-content');
var overlay = document.getElementById('overlay');




success_toggle.addEventListener('click', function(){
  overlay.style.display = 'flex';

  overlay_content.innerHTML = '<h1>Success!</h1><p> You did the thing! </p> <button id="success-btn" class=" button validation-btn">Ok</button> ';

 var success_btn = document.getElementById('success-btn');

 success_btn.addEventListener('click', function(){
     overlay.style.display = 'none';
 });

});




error_toggle.addEventListener('click', function(){
  overlay.style.display = 'flex';

  overlay_content.innerHTML = '<h1>Oops!</h1><p> There was an error, please try again </p> <button id="error-btn" class=" button validation-btn">Ok</button> ';

 var error_btn = document.getElementById('error-btn');

 error_btn.addEventListener('click', function(){
     overlay.style.display = 'none';
 });

});
