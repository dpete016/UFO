$.get("/api/all", function(data) {
    
    if (data.length !== 0) {    
        for (var i = 0; i < data.length; i++) {
            
            
            var newRow = $("<tr>");
            newRow.addClass("ufo");
                    
            newRow.append("<td>" + data[i].datetime + "</td>");
            newRow.append("<td>" + data[i].city + "</td>");
            newRow.append("<td>" + data[i].state + "</td>");
            newRow.append("<td>" + data[i].country + "</td>");
            newRow.append("<td>" + data[i].shape + "</td>");
            newRow.append("<td>" + data[i].durationMinutes + "</td>");
            newRow.append("<td>" + data[i].comments + "</td>");

            // newRow.append($("<td>").text(Date));
            // newRow.append($("<td>").text(City));
            // newRow.append($("<td>").text(State));
            // newRow.append($("<td>").text(Country));
            // newRow.append($("<td>").text(Shape));
            // newRow.append($("<td>").text(Duration));
            // newRow.append($("<td>").text(Comments));
                   
            $("#ufo-table").prepend(newRow);
            
            
        }
    }

})

// Filter Date


$(document).ready(function(){  
    $('#Date').keyup(function(){  
         search_table($(this).val());  
    });  
    function search_table(value){  
         $('#ufo-table tr').each(function(){  
              var found = 'false';  
              $(this).each(function(){  
                   if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                   {  
                        found = 'true';  
                   }  
              });  
              if(found == 'true')  
              {  
                   $(this).show();  
              }  
              else  
              {  
                   $(this).hide();  
              }  
         });  
    }  
});  
  


