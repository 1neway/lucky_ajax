$(document).ready(function () {
  $('form').on('submit', function(event) {
    event.preventDefault();
    // alert('click!');

    var url = $(this).attr('action');
    //console.log(url);
    //var value = { value: 4 }
    
    $.post(url, function(response) {
    //console.log(response);
    $('#die').html(response);
    });
  });

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  // $('form').on('submit', function(event) {
  //   event.preventDefault();

  //   // create a random num called random_num

    

  //   $('#die').html('<img src="/' + random_num + '.png" title="<%= @roll.value %>" alt="the roll">');

  // });


});
