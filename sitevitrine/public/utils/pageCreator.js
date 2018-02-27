
var header = {
  createHeader: function(dest, from)
  {
    if (dest && from)
    {
      var header = document.createElement('div');
      header.setAttribute('id', 'header');
      header.setAttribute('class', 'header');

      var linkImg = document.createElement('a');
      if (from !== 'index')
      {
        linkImg.setAttribute('href', '../index.html');
      }
      var img = document.createElement('img');
      var pathImg = '../images/jackalsFactory.png';
      if (from == 'index')
      {
        pathImg = 'images/jackalsFactory.png';
      }
      img.setAttribute('src', pathImg);
      img.setAttribute('style', 'width: 157px; height: 78px;');
      linkImg.appendChild(img);
      header.appendChild(linkImg);

      dest.appendChild(header);
    }
    else {
      alert("Pas de dest || from  dans createHeader");
    }
  }
};
var sidebar = {
  createSideBarAndOpenBtn: function(from)
  {
    if (from === undefined)
    {
      from = 'index';
    }
    var self = this;
    var sideBar = document.createElement('div');
    sideBar.setAttribute('id', 'mySidenav');
    sideBar.setAttribute('class', 'sidenav');

    var closeBtn = document.createElement('a');
    closeBtn.setAttribute('href', 'javascript:void(0)');
    closeBtn.setAttribute('class', 'closebtn');
    closeBtn.onclick = function() {self.closeNav()};
    closeBtn.appendChild(document.createTextNode('X'));

    var indexLink = document.createElement('a');
    if (from === 'index')
    {
      indexLink.setAttribute('href', 'index.html');
    }
    else
    {
      indexLink.setAttribute('href', '../index.html');
    }
    indexLink.appendChild(document.createTextNode('Home'));

    var articlesLink = document.createElement('a');
    if (from === 'articles')
    {
      articlesLink.setAttribute('href', 'articles.html');
    }
    else
    {
      articlesLink.setAttribute('href', '../articles/articles.html');
    }
    articlesLink.appendChild(document.createTextNode('Articles'));

    var CVLink = document.createElement('a');
    if (from === 'CV')
    {
      CVLink.setAttribute('href', 'CV.html');
    }
    else
    {
      CVLink.setAttribute('href', '../CV/CV.html');
    }
    CVLink.appendChild(document.createTextNode('CV'));

    var projetsLink = document.createElement('a');
    if (from === 'projets')
    {
      projetsLink.setAttribute('href', 'projets.html');
    }
    else
    {
      projetsLink.setAttribute('href', '../projets/projets.html');
    }
    projetsLink.appendChild(document.createTextNode('Projets'));


    var openBtn = document.createElement('i');
    openBtn.onclick = function() { self.openNav();};
    openBtn.setAttribute('class', 'fa fa-chevron-right chevron-right-side-bar');




    sideBar.appendChild(closeBtn);
    sideBar.appendChild(indexLink);
    sideBar.appendChild(articlesLink);
    sideBar.appendChild(CVLink);
    sideBar.appendChild(projetsLink);
    document.body.appendChild(sideBar);
    document.body.appendChild(openBtn);
  },
  openNav: function() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
  },
  closeNav: function() {
    document.getElementById("mySidenav").style.width = "20px";
    document.getElementById("main").style.marginLeft = "5%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
};

var basePage = {
  createBasePage: function(from)
  {
    if (from === undefined)
    {
      from = 'index';
    }
    if (header && sidebar)
    {
      var main = document.createElement('div');
      sidebar.createSideBarAndOpenBtn(from);
      main.setAttribute('id', 'main');
      document.body.appendChild(main);
      header.createHeader(main, from);
      return main;
    }
    else {
      alert("Pas de header && sidebar");
    }
  }
};
