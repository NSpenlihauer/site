$(document).ready(function() {
    var ProjetsClass =
    {
      load: function()
      {
        if (basePage)
        {
          this.main = basePage.createBasePage('projets');
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
    ProjetsClass.load();
});
