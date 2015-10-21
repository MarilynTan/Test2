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
  
  	function init(){
	  
	  update_info(data[0].info.info);
	  update_name(data[0].name);
	  update_desc(data[0].desc);
	  
	  	var slides = data[0].steps;
	  for( j=0 ; j < slides.length; j++ ) {
	var temp = '<div>'+
			'<img id="steps'+j+'" src="'+slides[j].Pic+'" alt="Plankstep1" width="450" height="300" border="5">'+
			'<h2>'+slides[j].S_desc+'</h2>'+
			'<p style="padding-right:70px">'+slides[j].L_desc+'</p>'+
			'</div>';
      
	  }  
	}


 
  $('.selectexercise').on('afterChange', function(event, slick, currentSlide) {
      var i = currentSlide;
	  
      console.log(data[i].name);
      update_info(data[i].info.info);
	  update_name(data[i].name);
	  update_desc(data[i].desc);
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
			
			temp += '<img id="steps'+j+'" src="'+slides[j].Pic+'" alt="Plankstep1" width="450" height="300" border="5">'+
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
                  if (tabindexId == 1) {
                      $("#container").toggle("slide", {
                          direction: "right"
                      }, 1000);
                      setTimeout(function() {
                          window.location.replace("../FoodNetwork/foodnetwork.html");
                      }, 5);
                  }
                  if (tabindexId == 2) {
                      $("#container").toggle("slide", {
                          direction: "right"
                      }, 1000);
                      setTimeout(function() {
                          window.location.replace("../LegoTV/index.html");
                      }, 5);
                  }
                  if (tabindexId == 3) {
                      $("#container").toggle("slide", {
                          direction: "right"
                      }, 1000);
                      setTimeout(function() {
                          window.location.replace("../FacebookStarHub/index.html");
                      }, 5);
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
  
  
var note="Changed";	/* -->Enter what you want the script to 
				      display when the target date and time 
				      are reached, limit to 25 characters */
		var milisec = 0
        var seconds = 31
        document.getElementById("myCounter").innerHTML = '30';

		var todaysec=today.getSeconds();
//-->    DO NOT CHANGE THE CODE BELOW!    <--	
d1 = new Image(); d1.src = "digital-numbers/1.png";
d2 = new Image(); d2.src = "digital-numbers/2.png";
d3 = new Image(); d3.src = "digital-numbers/3.png";
d4 = new Image(); d4.src = "digital-numbers/4.png";
d5 = new Image(); d5.src = "digital-numbers/5.png";
d6 = new Image(); d6.src = "digital-numbers/6.png";
d7 = new Image(); d7.src = "digital-numbers/7.png";
d8 = new Image(); d8.src = "digital-numbers/8.png";
d9 = new Image(); d9.src = "digital-numbers/9.png";
d0 = new Image(); d0.src = "digital-numbers/0.png";
bkgd = new Image(); bkgd.src = "digital-numbers/bkgd.gif";

function display() {
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
            document.getElementById("myCounter").innerHTML = seconds;
            setTimeout("display()", 100)
        }
        display() 





        

	