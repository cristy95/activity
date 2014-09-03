var siteloc = "http:localhost";
var scriptloc = "/activity/"

function calculate()
{
  $.ajax({
      url: siteloc + scriptloc + "activity.py",
      data: {number:$("#number").val(),
             raiseTo:$("#raiseTo").val()},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res[0][0] != "None")
                  {
			answer = "<div>";
			answer = "<p>Answer = " + res[0][0] + "</p>" 
			answer += "</div>";
					  $("#target").html(answer); 
				  } // end if
              }
    });
}
