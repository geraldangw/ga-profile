var test = true;

  // declaring variables for DOM elements.

  var $profilebtn = $('#myprofilebutton');
  var $projectbtn = $('#myprojectbutton');
  var $profileoutput = $('#profileoutput');
  var $projectoutput = $('#projectoutput');
  var $loader  = $('.loader');

 $profilebtn.on('click', function(e) {
   e.preventDefault();
   $.ajax({
     url: "https://api.mongolab.com/api/1/databases/heroku_zkzdp50c/collections/details?apiKey=scyqL5JlcAWXm_xREuuB-GVM77U7Q8Wm",
     type: 'GET',
     datatype: 'json',
     beforeSend: function() {
       $loader.show();
     },
   }).done(function(data) {
     $loader.hide();
     $("<img src=\"" + data[0].image + "\">" + "<h4>" + data[0].name + "</h4> <p> Age: " + data[0].age + "</p><p> " + data[0].email + "</p>" + "<br><a href=\"" + data[0].facebook + "\"> My Facebook</a>" + "<br><a href=\"" + data[0].linkedin + "\"> Linked In</a>" + "<br><a href=\"" + data.emailme + "\"> Email Me</a>").appendTo($profileoutput);
     $profileoutput.css('display', 'block');
     $.ajax({
      //  url: "https://polar-retreat-73705.herokuapp.com/projects",
       url: "https://api.mongolab.com/api/1/databases/heroku_zkzdp50c/collections/portfolios?apiKey=scyqL5JlcAWXm_xREuuB-GVM77U7Q8Wm",
       type: 'GET',
        datatype: 'json',
       beforeSend: function() {
         $loader.show();
       },
     }).done(function(data) {
       $loader.hide();
       $("<h4> Projects </h4>").appendTo($projectoutput);
      for(var i = 0; i < data.length; i++) {
          $("<p> " + data[i].name + "<br> Category: " + data[i].category + "<br><a href=\"" + data[i].link + "\"> LINK </a>" ).appendTo($projectoutput);
        }
        $projectoutput.css('display', 'block');
     })
     .fail(function(request, textStatus, errorThrown) {
       $loader.hide();
       $projectoutput.html("Sorry! An error occured when processing your phrase. Request " + request.status + " " + textStatus + " " + errorThrown);
     });
   })
   .fail(function(request, textStatus, errorThrown) {
     $loader.hide();
     $profileoutput.html("Sorry! An error occured when processing your phrase. Request " + request.status + " " + textStatus + " " + errorThrown);
   });
 });
