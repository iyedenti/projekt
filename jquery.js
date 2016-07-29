$(".rem").click(function(){
  $(".zadaca").remove();
});


$(".add").click(function(){
  $(".zadaca").css("background-color" , "blue");
});


$(".plus").click(function(){
$("table").append("<tr>"+"<td>" + $("textarea").val() + "</td>"+"<td>" + "X" + "</td>"+"</td>"+"<td>" + "Yes" + "</td>"+"</td>"+"<td>" + "Edit" + "</td>"+"</tr>");
});

$(".edit").click(function(){
						$(".zadaca").empty();
  						$(".zadaca").append( $("textarea").val() );
});




