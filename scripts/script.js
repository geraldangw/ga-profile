var test = true;

  // declaring variables for DOM elements.

  var $profilebtn = $('#myprofilebutton');
  var $projectbtn = $('#myprojectbutton');
  var $profileoutput = $('#profileoutput');
  var $projectoutput1 = $('#projectoutput1');
  var $projectoutput2 = $('#projectoutput2');
  var $projectoutput3 = $('#projectoutput3');
  var $projectoutput4 = $('#projectoutput4');
  var $projectoutput5 = $('#projectoutput5');
  var $loader  = $('.loader');

 $profilebtn.on('click', function(e) {
   e.preventDefault();
   $.ajax({
     url: "https://polar-retreat-73705.herokuapp.com/information",
     type: 'GET',
     beforeSend: function() {
       $loader.show();
     },
   }).done(function(data) {
     $loader.hide();
     $profileoutput.html(
       "<p> Full Name: " + data.name + "</p> <p> Age: " + data.age + "</p><p> " + data.email + "</p> <img src=\"" + data.image + "\">" + "<br><a href=\"" + data.facebook + "\"> My Facebook</a>" + "<br><a href=\"" + data.linkedin + "\"> Linked In</a>" + "<br><a href=\"" + data.emailme + "\"> Email Me</a>"
     );
   })
   .fail(function(request, textStatus, errorThrown) {
     $loader.hide();
     $profileoutput.html("Sorry! An error occured when processing your phrase. Request " + request.status + " " + textStatus + " " + errorThrown);
   });
 });

 $projectbtn.on('click', function(e) {
   e.preventDefault();
   $.ajax({
     url: "https://polar-retreat-73705.herokuapp.com/projects",
     type: 'GET',
     beforeSend: function() {
       $loader.show();
     },
   }).done(function(data) {
     $loader.hide();
    $projectoutput1.html(
    "<p> Project Name: " + data[0].name + "</p><p> Category: " + data[0].category + "</p><a href=\"" + data[0].link + "\"> LINK </a> <img src=\"" + data[0].image + "\">"
   );
    $projectoutput2.html(
    "<p> Project Name: " + data[1].name + "</p><p> Category: " + data[1].category + "</p><a href=\"" + data[1].link + "\"> LINK </a> <img src=\"" + data[1].image + "\">"
  );
    $projectoutput3.html(
    "<p> Project Name: " + data[2].name + "</p><p> Category: " + data[2].category + "</p><a href=\"" + data[2].link + "\"> LINK </a> <img src=\"" + data[2].image + "\">"
  );
    $projectoutput4.html(
    "<p> Project Name: " + data[3].name + "</p><p> Category: " + data[3].category + "</p><a href=\"" + data[3].link + "\"> LINK </a> <img src=\"" + data[3].image + "\">"
  );
    $projectoutput5.html(
    "<p> Project Name: " + data[4].name + "</p><p> Category: " + data[4].category + "</p><a href=\"" + data[4].link + "\"> LINK </a> <img src=\"" + data[4].image + "\">"
) ;
   })
   .fail(function(request, textStatus, errorThrown) {
     $loader.hide();
     $projectoutput.html("Sorry! An error occured when processing your phrase. Request " + request.status + " " + textStatus + " " + errorThrown);
   });
 });
