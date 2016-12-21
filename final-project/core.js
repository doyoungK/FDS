// login popup
var login = document.querySelector("#logincontainer");
var logBtn = document.querySelector(".loginPopBtn");
var menuLoginBtn = document.querySelector(".menuLoginBtn");
var logClose = document.querySelector(".login-close");
var join = document.querySelector("#joincontainer");
var joinBtn = document.querySelector(".joinPopBtn");
var menuJoinBtn = document.querySelector(".menuJoinBtn");
var joinClose = document.querySelector(".join-close");
var joinLoginBtn = document.querySelector(".joinLoginBtn");

logBtn.onclick = function() {
  login.style.display = "block";
}

menuLoginBtn.onclick = function() {
  login.style.display = "block";
}

logClose.onclick = function() {
  login.style.display = "none";
}

login.onclick = function(event) {
  if (event.target === login) {
    login.style.display = "none";
  }
}

joinBtn.onclick = function() {
  login.style.display = "none";
  join.style.display = "block";
}

menuJoinBtn.onclick = function() {
  join.style.display = "block";
}

joinClose.onclick = function() {
  join.style.display = "none";
}

joinLoginBtn.onclick = function() {
  if (window.getComputedStyle(join).display === "block") {
    join.style.display = "none";
    login.style.display = "block";
  }
}

join.onclick = function(event) {
  if (event.target === join) {
    join.style.display = "none";
  }
}

function select_box() {
  var year = document.querySelector("#year");
  console.log(year);
  for (var i = 1990 ; i < 2018; i++) {
    var option = "<option value='"+i+"'>"+i+"</option>";
    $("#year").append(option);
  }
};
select_box();

kcyear.addEventListener("change", validate_date);
