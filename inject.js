// This is the code that will be injected on any page
var audio1 = new Audio();
audio1.src = chrome.extension.getURL("https://youtu.be/JYsKDaQIX54?t=62"); 

$(document).keydown(function(e){
	// this gets the keycode of the last key pressed
	// lookup at keycode.info
	
	// the '\' key to start the performance
	if(e.which == 220){
		chrome.runtime.sendMessage({toggleScript:true});
		// then we do some other code
		setTimeout(function(){
			alert("You are making a mistake. Switch to Pepsi!");
		}, 4000);


		setTimeout(function(){
			alert("You are making a mistake. Switch to Pepsi!");
		}, 7000);
	}

});


// put the changes you want to make here
changeWebContent();
setTimeout(changeWebContent, 5000);

function changeWebContent(){
	if(checkWebAddress("https://www.pepsi.com/en-us/")){
		setTimeout(function(){
			alert("What are you doing here? Pepsi is lame!");
		}, 11000);
	}

	if(checkWebAddress("https://us.coca-cola.com/")){	
		// setTimeout(function(){
		// 	audio1.play();
		// }, 32000);

		setTimeout(function(){
			alert("Pepsi loves you more");
			// audio1.stop();
		}, 20000);
		// $('#id_content_coke2016_en_home_jcr_content_pageContent_responsivecolumncont').css("background-image", chrome.runtime.getURL("google.gif"));
		// change images on page
		// $( 'body.main #id_content_coke2016_en_home_jcr_content_pageContent_responsivecolumncont' ).style( "background-image", url('https://media.giphy.com/media/CSzX56Zpq6XfRQnaQV2/giphy.gif') );
	}

	if(checkWebAddress("google.com")){
		$('#hplogo').attr('srcset',"").attr("src",chrome.runtime.getURL("pepsi.gif"));
		$('h3.LC20lb').text("Choose Coca-Cola!!!!!!");
		$('cite.iUh30').text("https://us.coca-cola.com/");

		// $(body).css("background", "url(google.gif) !important;");
		// change images on page
		// var images = document.getElementsByTagName('img');
		// var imgURL = "";
		// for (var i = 0, l = images.length; i < l; i++) {

	 	// alternatively this could come from a folder of images
	 	// imgURL = chrome.runtime.getURL("google.gif");
	 	// images[i].src = imgURL;
		// }		
	}

	if(checkWebAddress("traderjoes.com")){
		$('h1').text('Pepsi is better than Coke!!');
	}

	if(checkWebAddress("facebook.com")){
		$('._1p1t').text("Share a coke with your NewsFeed");
	}

	if(checkWebAddress("https://www.gatorade.com/")){
		setTimeout(function(){
			alert("What about Coke???");
		}, 20000);

		setTimeout(function(){
			alert("What about Pepsi???");
		}, 20000);
	}

}


function checkWebAddress(url) {
	return window.location.href.indexOf(url) >= 0;
}
	
