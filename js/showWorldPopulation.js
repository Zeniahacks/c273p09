$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "getStistics.php",
        cache: false,
        dataType: "JSON",
        success: function (response) {
            
            var data = [];
            var labels = [];
            for (i = 0; i < response.length; i++) {
                data.push(parseInt(response[i].population));
                labels.push(response[i].country);
                
            }
            
            var barChart = new Chart($("#barChart"), {
                type: 'horizontaBar'
            })
            var msg = "<tbody><tr><td>" + response.population + "</td><td>" + response.obese + "</td></tr></tbody>";

            $("#obeseTable").html(msg);
        }
    });

});

