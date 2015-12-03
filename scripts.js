$(document).ready(function () {

  $("#go").bind('click', shuffle);

  var icons = ["amazon", "internet-explorer", "users", "university", "map-pin", "chrome", "thumbs-o-up", "firefox"];
  var store = [];
  var click = 0;

  function shuffle() {
   $(".back").each(function (ind, element) {
    for (var i = 0; i < icons.length; i++) {
     $(element).removeClass("fa-" + icons[i]);
     $(".match").removeClass().addClass("front");   
        }
      });
    	var randIcons = icons.concat(icons.slice());
      _.shuffle(randIcons);
       var i = 0;
        $(".back").each(function(ind,val) {
        	$(val).addClass("fa-"+randIcons[i++]);
      });
        }

  function checkCards (e){
   click++;
   store.push($(this).children().eq(1).attr("class"));
   if(click === 2){
  	if (store[0] === store[1]){
      $("."+store[0].split(" ")[3]).siblings().attr("class","match");
  		console.log("win");  		
  	} else {
  		console.log("try again");  
  	}
    console.log(store);
    store = [];
    click = 0;
    }
  }

  $(".box-size").on('click', checkCards);
  
 

});

