$(document).ready(function() {
    var articlesClass =
    {
      load: function()
      {
        if (basePage)
        {
          this.main = basePage.createBasePage('articles');
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
      }
    };
    articlesClass.load();
});
