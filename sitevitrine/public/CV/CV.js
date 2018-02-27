$(document).ready(function() {
    var CVClass =
    {
      load: function()
      {
        if (basePage)
        {
          this.main = basePage.createBasePage('CV');
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
    CVClass.load();
});
