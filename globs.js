var siteloc = "http://localhost";
var scriptloc = "/activity/"

function calculate()
{
  $.ajax({
      url: siteloc + scriptloc + "calculate.py",
      data: {number:$("#number").val(),
             raiseTo:$("#raiseTo").val()},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
                  if(res != 0)
                  {
			answer = '<div class="table-responsive"">';
			answer += '<table class"table table-condensed">';
			answer += '<thead>'+'<tr>'+'<th>Answer</th></tr></thead>' + '<tbody>'+'<tr>'+'<th>'+res+'</th>'+'</tr>'+'</tbody>';
			answer += '</table>'+'</div>';
					  $("#target").html(answer); 
				  } // end if
              }
    });
}

