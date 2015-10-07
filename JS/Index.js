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
	  // remove all the current slides
	  //$('.exerciseinfo').slick('unslick');
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
      //update_info(data[0].info.info);

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
                      //setTimeout(function(){window.location.replace("http://118.193.157.12/foodnetwork.html");},5);
                      //setTimeout(function(){window.location.replace("C:/Users/HYKCHAN/Documents/TV/Interactive_TV/Interactive_Panel/Code/ApplicationsSourceCode/FoodNetwork/foodnetwork.html");},5);
                      setTimeout(function() {
                          window.location.replace("../FoodNetwork/foodnetwork.html");
                      }, 5);
                  }
                  if (tabindexId == 2) {
                      $("#container").toggle("slide", {
                          direction: "right"
                      }, 1000);
                      //setTimeout(function(){window.location.replace("http://118.193.157.12:81/index.html");},5);
                      //setTimeout(function(){window.location.replace("C:/Users/HYKCHAN/Documents/TV/Interactive_TV/Interactive_Panel/Code/ApplicationsSourceCode/LegoTV/index.html");},5);
                      setTimeout(function() {
                          window.location.replace("../LegoTV/index.html");
                      }, 5);
                  }
                  if (tabindexId == 3) {
                      $("#container").toggle("slide", {
                          direction: "right"
                      }, 1000);
                      //setTimeout(function(){window.location.replace("http://118.193.157.12/FacebookStarHub/index.html");},5);
                      //setTimeout(function(){window.location.replace("C:/Users/HYKCHAN/Documents/TV/Interactive_TV/Interactive_Panel/Code/ApplicationsSourceCode/FacebookStarHub/index.html");},5);
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
                  //green
                  //                $("#container").toggle("slide", {
                  //                    direction: "right"
                  //                }, 1000);
                  setTimeout(function() {
                      $("#container").toggle("slide", {
                          direction: "right"
                      }, 1000);
                  }, 100);
                  setTimeout(function() {
                      navigate();
                  }, 1000);
                  //$("#title").toggle("slide",{direction:"right"},800);
                  break;
          }
      });
  });