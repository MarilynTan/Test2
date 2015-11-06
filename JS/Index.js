		var milisec = 00
		var seconds = 10
		var timer;

	
var is_play = false;

function update_info(info_data) 
  {
    $("#info_data").html(info_data);
  }

  function update_steps() 
  {
	
  }
  
  function update_name(name) {
	$("#exercisename").html(name);
  }
  function update_desc(desc) {
	$("#exercisedesc").html(desc);
  }
   function update_info(info) {
	$("#info_data").html(info);
  }
  
  	function init()
	{
	  
	  update_info(data[0].info.info);
	  update_name(data[0].name);
	  update_desc(data[0].desc);
	  document.getElementById("myCounter").innerHTML = (data[0].length);
	  seconds = data[0].length;
	  
	var slides = data[0].steps;
	for( j=0 ; j < slides.length; j++ ) 
		{
	var temp = '<div>'+
			'<img id="steps'+j+'" src="'+slides[j].Pic+'" alt="Crunches" width="450" height="90" >'+
			'<h2>'+slides[j].S_desc+'</h2>'+'<p style="padding-right:70px">'+slides[j].L_desc+'</p>'+
			'</div>';
      
	    }  
	}


 
  $('.selectexercise').on('afterChange', function(event, slick, currentSlide) {
      var i = currentSlide;
	  
      console.log(data[i].name);
      update_info(data[i].info.info);
	  update_name(data[i].name);
	  update_desc(data[i].desc);
	  document.getElementById("myCounter").innerHTML = (data[i].length);
	  is_play = false;
	  clearTimeout(timer);
	  seconds = data[i].length;
		$('.carousel-inner').empty();
		
		
		// add slides for carousel
		var slides = data[i].steps;
		var temp ='';
	  for( j=0 ; j < slides.length; j++ ) {
			if(j == 0) {
				temp += '<div class="item active">';
			} else {
				temp += '<div class="item">';
			}
			
			temp += '<img id="steps'+j+'" src="'+slides[j].Pic+'" alt="Crunches" width="450" height="90" >'+
			'<h2>'+slides[j].S_desc+'</h2>'+
			'<p>'+slides[j].L_desc+'</p>'+
			'</div>';
	  }
	  
	  $('.carousel-inner').html(temp);
});
  
	$(document).ready(function() {
      var slideIndex = 0;
		
		$('.selectexercise').slick({
          vertical: true,
          centerMode: true,
          centerPadding: '80px',
          slidesToShow: 3,
          arrows: false
      });
	  
		$('.exerciseinfo').carousel();
		init();

      $(window).keydown(function(event) {
          event.preventDefault();
          switch (event.keyCode) {


              case 37:
                  //key left
                  $('.exerciseinfo').carousel("prev");
                  break;

              case 39:
                  //key right
                  $('.exerciseinfo').carousel("next");
                  break;

              case 38:
                  //key up
                  $('.selectexercise').slick("slickPrev");

                  break;
              case 40:
                  //key down
                  $('.selectexercise').slick("slickNext");

                  break;
              case 13:
              case 61451:
                  //key ok
				  if(is_play) {
					is_play = false;
					$('#pause').click();

				  } else {
					is_play = true;
					$('#play').click();
				  }
                  break;
              case 8:
              case 61512:
                  //key back
                  break;
              case 61506:
                  //red
                  break;
              case 71:
              case 61507:
                  setTimeout(function() {
                      $("#container").toggle("slide", {
                          direction: "right"
                      }, 1000);
                  }, 100);
                  setTimeout(function() {
                      navigate();
                  }, 1000);
                  break;
          }
      });
  });
  

		
		function display() 
		{
	
	
			if (milisec <= 0) {
                milisec = 9
                seconds -= 1
            }
            if (seconds <= -1) {
                milisec = 0
                seconds += 1
            }
            else
                milisec -= 1
			if(seconds < 10) {
				s_seconds = '0' + seconds;
			} 
			else {
				s_seconds = '' + seconds;
				
			}
            document.getElementById("myCounter").innerHTML = s_seconds;
            timer = setTimeout("display()", 100)
        }
function play()
{
		clearTimeout(timer);
        display() 
		
		$('#play').addClass('played');
		$('#pause').removeClass('paused');
}

function pause()
{
	clearInterval(timer);
	$('#pause').addClass('paused');
	$('#play').removeClass('played');	
}

function stop()
{
	setTimeout(); 
	$('#play').removeClass('played');	
	$('#pause').removeClass('paused');	
}






        

	