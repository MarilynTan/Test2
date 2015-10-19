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
var year=2015;      /* -->Enter the count down target date YEAR */
var month=10;       /* -->Enter the count down target date MONTH */
var day=20;         /* -->Enter the count down target date DAY */
var hour=18;         /* -->Enter the count down target date HOUR (24 hour clock) */
var minute=32;      /* -->Enter the count down target date MINUTE */
var tz=+8;          /* -->Offset for your timezone in hours from UTC (see 
			  http://wwp.greenwichmeantime.com/index.htm to find 
			  the timezone offset for your location) */

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

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");

function countdown(yr,m,d,hr,min){
	theyear=yr;themonth=m;theday=d;thehour=hr;theminute=min;
	var today=new Date();
	var todayy=today.getYear();
	if (todayy < 1000) {todayy+=1900;}
	var todaym=today.getMonth();
	var todayd=today.getDate();
	var todayh=today.getHours();
	var todaymin=today.getMinutes();
	var todaysec=today.getSeconds();
	var todaystring1=montharray[todaym]+" "+todayd+", "+todayy+" "+todayh+":"+todaymin+":"+todaysec;
	var todaystring=Date.parse(todaystring1)+(tz*1000*60*60);
	var futurestring1=(montharray[m-1]+" "+d+", "+yr+" "+hr+":"+min);
	var futurestring=Date.parse(futurestring1)-(today.getTimezoneOffset()*(1000*60));
	var dd=futurestring-todaystring;
	var dday=Math.floor(dd/(60*60*1000*24)*1);
	var dhour=Math.floor((dd%(60*60*1000*24))/(60*60*1000)*1);
	var dmin=Math.floor(((dd%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
	var dsec=Math.floor((((dd%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);
	if(dday<=0&&dhour<=0&&dmin<=0&&dsec<=0){
		document.getElementById('note').innerHTML=note;
		document.getElementById('note').style.display="block";
		document.getElementById('countdown').style.display="none";
		clearTimeout(startTimer);
		return;
	}
	else {
		document.getElementById('note').style.display="none";
		document.getElementById('timer').style.display="block";
		startTimer = setTimeout("countdown(theyear,themonth,theday,thehour,theminute)",500);
	}
	convert(dday,dhour,dmin,dsec);
}

function convert(d,h,m,s) {
	if (!document.images) return;
	if (d <= 9) {
		document.images.day1.src = bkgd.src;
		document.images.day2.src = bkgd.src;
		document.images.day3.src = eval("d"+d+".src");
	}
	else if (d <= 99) {
		document.images.day1.src = bkgd.src;
		document.images.day2.src = eval("d"+Math.floor(d/10)+".src");
		document.images.day3.src = eval("d"+(d%10)+".src");
	}
	else {
		document.images.day1.src = eval("d"+Math.floor(d/100)+".src");
		var day = d.toString();
		day = day.substr(1,1);
		day = parseInt(day);
		document.images.day2.src = eval("d"+day+".src");
		document.images.day3.src = eval("d"+(d%10)+".src");
	}
	if (h <= 9) {
		document.images.h1.src = d0.src;
		document.images.h2.src = eval("d"+h+".src");
	}
	else {
		document.images.h1.src = eval("d"+Math.floor(h/10)+".src");
		document.images.h2.src = eval("d"+(h%10)+".src");
	}
	if (m <= 9) {
		document.images.m1.src = d0.src;
		document.images.m2.src = eval("d"+m+".src");
	}
	else {
		document.images.m1.src = eval("d"+Math.floor(m/10)+".src");
		document.images.m2.src = eval("d"+(m%10)+".src");
	}
	if (s <= 9) {
		document.images.s1.src = d0.src;
		document.images.s2.src = eval("d"+s+".src");
	}
	else {
		document.images.s1.src = eval("d"+Math.floor(s/10)+".src");
		document.images.s2.src = eval("d"+(s%10)+".src");
	}
}
	