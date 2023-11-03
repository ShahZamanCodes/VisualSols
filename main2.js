$(document).ready(function () {
  //Getting form values

  // $("#send-message").click(function () {
  //     var formValues = {};
  //     $('form').find('input, textarea').each(function () {
  //         formValues[this.name] = $(this).val();
  //         console.log(formValues);
  //     });

  // //method #2

  //     // var data = $('#form-data');
  //     // // alert(data)
  //     // console.log(data.serialize());
  // });

  // Form Validation

  $("#send-message").click(function () {
    $("#form-data").validate();
    var data = $("#form-data");
    console.log(data.serialize());
  });

  // Getting Values, Validating and showing below form

  // $("form").submit(function(event){
  //     event.preventDefault();
  //     $("#form-data-disp").empty();
  //     $("input, textarea").each(function(){
  //       var inputValue = $(this).val();
  //       $("#form-data").append("<p>" + inputValue + "</p>");
  //     });
  //   });

  $("form").submit(function (event) {
    event.preventDefault();
    $("#form-data-disp").empty();
    var data = {};
    $("input, textarea").each(function () {
      data = $(this).val();
      $("#form-data").append("<p>" + data + "</p>");
    });
  });

  //   Showing below form w.r.t Getting form values

  // $('#send-message').click(function(event){
  //     event.preventDefault();
  //     $("#form-data-disp").empty();
  //     var data = {};
  //     $('input, textarea').each(function () {
  //         data = $(this).val();
  //         $("form").append("<p>" + data + "</p>");
  //     });
  //   });
});
