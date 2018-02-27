var actualDiv = "Home"; // Home, Articles, Applications, CV, SandBox
var actualNavBar = "meta"; // meta, news, contact
w3.includeHTML();
function hideActual()
{
  document.getElementById(actualDiv).style.display = "none";
}

function changeNavbar(name)
{
  document.getElementById(actualNavBar).classList.remove('active');
  actualNavBar = name;
  document.getElementById(name).classList.add('active');
  window.scrollTo(0, 0);
}

function changePage(name)
{
  alert("ici ? ");
  hideActual();
  actualDiv = name;
  if (name === "Home")
  {
    openHome();
  }
  else if (name === "Articles")
  {
    openArticles();
  }
  else if (name === "Applications")
  {
    openApplications();
  }
  else if (name === "CV")
  {
    openCV();
  }
  else if (name === "SandBox")
  {
    openSandBox();
  }
  else
  {
    alert("Erreur, invalide page");
  }
  closeNav();
  window.scrollTo(0, 0);
}

function openHome()
{
  var main = document.getElementById("Home");
  main.style.display = "";
}

function openArticles()
{
  var main = document.getElementById("Articles");
  main.style.display = "";
}

function openApplications()
{
  var main = document.getElementById("Applications");
  main.style.display = "";
}

function openCV()
{
  var main = document.getElementById("CV");
  main.style.display = "";
  main.style.backgroundColor = "#282E34";
}

function openSandBox()
{
  var truemain = document.getElementById("main");
  var main = document.getElementById("SandBox");
  main.style.display = "";
}

/*function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "1%";
    document.getElementById("main").style.marginLeft = "5%";
    document.getElementById("main").style.marginRight = "5%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}*/
