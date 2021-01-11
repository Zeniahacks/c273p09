$(document).ready(function () {
    $("#idCountry").change(function(){
        var chosen = $(this).val();
        $.ajax({
           type: "GET",
           url: "getCountryDetails.php",
           data: "id=" + chosen,
           dataType: "JSON",
           success: function(response){
               var msg = "<tbody><tr><td>" + response.population + "</td><td>" + response.obese + "</td></tr></tbody>";
               
               $("#obeseTable").html(msg);
           }
        });
        
    });

    
});