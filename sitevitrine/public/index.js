$(document).ready(function() {
  var indexClass =
  {
    body: document.body,
    load: function()
    {
      if (basePage)
      {
        this.main = basePage.createBasePage('index');
        this.createMain(this.main);
        sidebar.openNav();
      }
      else
      {
        alert("Pas de basePage");
      }
    },
    createMain: function(main)
    {
      if ($)
      {
        var mainDiv = document.createElement('div');
        mainDiv.setAttribute('style', 'height : 200px; width : 90%; padding-left:10%; margin-top: 3%; margin-bottom: 40%;');
        this.main.appendChild(mainDiv);

        var carouselDiv = document.createElement('div');
        carouselDiv.setAttribute('class', 'carousel slide');
        carouselDiv.setAttribute('id', 'carousel-home');
        carouselDiv.setAttribute('data-ride', 'carousel');

        var indicator = document.createElement('ol');
        indicator.setAttribute('class', 'carousel-indicators');
        for (var i = 0; i < 3 ; i++)
        {
          var indic = document.createElement('li');

          indic.setAttribute('data-target', '#carousel-home');
          indic.setAttribute('data-slide-to', i);
          if (i === 0 )
          {
            indic.setAttribute('class', 'active');
          }
          indicator.appendChild(indic);
        }


        var warpper = document.createElement('div');
        warpper.setAttribute('class', 'carousel-inner');
        warpper.setAttribute('role', 'listbox');
        for (var i = 0; i < 3; i ++)
        {
          var item = document.createElement('div');
          if (i === 0)
          {
            item.setAttribute('class', 'item active');
          }
          else
          {
            item.setAttribute('class', 'item');
          }
          var linkImg = document.createElement('a');
          var image = document.createElement('img');
          var carouselCaption;
          if (i === 2)
          {
            linkImg.setAttribute('href', 'CV/CV.html');
            image.setAttribute('src', 'images/CV.png');
            image.setAttribute('alt', 'CV');
            carouselCaption = document.createElement('div');
            carouselCaption.setAttribute('class', 'carousel-caption');
            var title = document.createElement('p');
            title.setAttribute('style', 'font-size: 300%');
            title.appendChild(document.createTextNode('Curriculum Vitae'));
            /*var para = document.createElement('p');
            para.appendChild(document.createTextNode('para'));*/
            carouselCaption.appendChild(title);
            //carouselCaption.appendChild(para);
          }
          else if (i == 1)
          {
            linkImg.setAttribute('href', 'articles/articles.html');
            image.setAttribute('src', 'images/articles.png');
            image.setAttribute('alt', 'articles');
            carouselCaption = document.createElement('div');
            carouselCaption.setAttribute('class', 'carousel-caption');
            var title = document.createElement('p');
            title.setAttribute('style', 'font-size: 300%');
            title.appendChild(document.createTextNode('Articles'));
            /*var para = document.createElement('p');
            para.appendChild(document.createTextNode('para'));*/
            carouselCaption.appendChild(title);
            //carouselCaption.appendChild(para);
          }
          else
          {
            linkImg.setAttribute('href', 'projets/projets.html');
            image.setAttribute('src', 'images/network.jpg');
            image.setAttribute('alt', 'projets');
            carouselCaption = document.createElement('div');
            carouselCaption.setAttribute('class', 'carousel-caption');
            var title = document.createElement('p');
            title.setAttribute('style', 'font-size: 300%');
            title.appendChild(document.createTextNode('Projets'));
            /*var para = document.createElement('p');
            para.appendChild(document.createTextNode('para'));*/
            carouselCaption.appendChild(title);
            //carouselCaption.appendChild(para);
          }

          linkImg.appendChild(image);
          linkImg.appendChild(carouselCaption);
          item.appendChild(linkImg);
          warpper.appendChild(item);
        }

        var controlLeft = document.createElement('a');
        controlLeft.setAttribute('class', 'left carousel-control');
        controlLeft.setAttribute('href', '#carousel-home');
        controlLeft.setAttribute('role', 'button');
        controlLeft.setAttribute('data-slide', 'prev');
        var span1 = document.createElement('span');
        span1.setAttribute('class', 'glyphicon glyphicon-chevron-left');
        span1.setAttribute('aria-hidden', 'true');

        var span2 = document.createElement('span');
        span2.setAttribute('class', 'sr-only');
        span2.appendChild(document.createTextNode('Prev'));

        controlLeft.appendChild(span1);
        controlLeft.appendChild(span2);

        carouselDiv.appendChild(indicator);
        carouselDiv.appendChild(warpper);
        carouselDiv.appendChild(controlLeft);

        var controlRight = document.createElement('a');
        controlRight.setAttribute('class', 'right carousel-control');
        controlRight.setAttribute('href', '#carousel-home');
        controlRight.setAttribute('role', 'button');
        controlRight.setAttribute('data-slide', 'next');
        var span21 = document.createElement('span');
        span21.setAttribute('class', 'glyphicon glyphicon-chevron-right');
        //span21.setAttribute('aria-hidden', 'false');

        var span22 = document.createElement('span');
        span22.setAttribute('class', 'sr-only');
        span22.appendChild(document.createTextNode('Next'));
        controlRight.appendChild(span21);
        //controlRight.appendChild(span22);


        carouselDiv.appendChild(controlRight);

        mainDiv.appendChild(carouselDiv);
      }
      else
      {
        alert("maitre simona");
      }
    }
  };
  indexClass.load();

});
