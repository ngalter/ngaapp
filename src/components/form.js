$(function() {
      
    $("#feedback_form").submit(function(e) {
      e.preventDefault();
      
      $form = $(this);
      
      $.ajax({
        type: "POST",
        url:  "https://5lapu5qeh8.execute-api.us-east-1.amazonaws.com/Testing/feedback",
        data: $form.serialize(),
        success: function(data) {
          // alert(data);
          
          var container = $("#feedback").find("div.container-fluid");
          container.empty();
          container.append("<h2>" + data + "</h2>");
        },
        dataType: 'json'
      });
    });
  });