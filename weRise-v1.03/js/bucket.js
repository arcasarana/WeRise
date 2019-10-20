$(function () // on document.ready()
{
    if ($('body.has-owlcarousel').length > 0)
    {

      // carousel @ home.html --- START
      $(function(){
        $(".owl-carousel").owlCarousel();
      });

      $('.owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:5
              }
          }
      })
      // carousel @ home.html --- END

          }
      });

// modal @ badge.html --- START
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
// modal @ badge.html --- END

// autocomplete version 2 @ results.html --- START
$( function() {
    var availableTags = [
      "Drexel University",
      "Temple University",
      "Thomas Jefferson University",
      "University of Pennsylvania",
      "University of the Arts"
    ];
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }

    $( "#tags" )
      // don't navigate away from the field on tab when selecting an item
      .on( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      });
  } );
// autocomplete version 2 @ results.html --- END

// autocomplete @ results.html --- START
// $(function() {
//     var availableTags = [
//       "Drexel University",
//       "Temple University",
//       "Thomas Jefferson University",
//       "University of the Arts",
//       "University of Pensylvania"
//     ];
//     $( "#tags" ).autocomplete({
//       source: availableTags
//     });
//   } );
// autocomplete @ results.html --- START

// submit-share @ results.html --- START
// $("#submituniv").click(function(){
//   $("#sha-res").css("visibility", "visible");
// });
// submit-share @ results.html --- END
$(function(){
    $("#sha-res, #chartjs").hide();
    $("#submituniv").on("click", function(){
        $("#chartjs").fadeIn();
        $("#sha-res").fadeIn();
    });
});




$(function () // on document.ready()
{
    if ($('body.has-chartjs').length > 0)
    {


      // Data Chart JS @ results.html --- START
      // Our labels along the x-axis
      var years = ['drexel', 'temple', 'tju', 'uarts','upenn']
      // For drawing the lines
      var inclusivity = [40, 30, 78, 65, 25];

      // Our labels along the x-axis
      var years = ['drexel', 'temple', 'tju', 'uarts','upenn']
      // For drawing the lines
      var awareness = [30, 20, 56, 25, 11];
      var skill = [36, 39, 85, 28, 20];
      var activeness = [58, 12, 72, 33, 10];
      var advocacy = [10, 15, 33, 22, 10];

      var ctx1 = document.getElementById("myChart1");
      var myChart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: years,
          datasets: [
            {
              data: inclusivity,
              label: "inclusivity",
              borderColor: "red",
              backgroundColor: "red",
              fill: false
            },
          ]
        },
      });

      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: years,
          datasets: [
            {
              data: awareness,
              label: "awareness",
              borderColor: "orange",
              backgroundColor: "orange",
              fill: false
            },
            {
              data: skill,
              label: "skill",
              borderColor: "red",
              backgroundColor: "red",
              fill: false
            },
            {
              data: activeness,
              label: "activeness",
              borderColor: "green",
              backgroundColor: "green",
              fill: false
            },
            {
              data: advocacy,
              label: "advocacy",
              borderColor: "blue",
              backgroundColor: "blue",
              fill: false
            },
          ]
        },
      });
      // Data Chart JS @ results.html --- END


    }
});
