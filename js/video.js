let video = document.querySelector('#player1');
let playbutton = document.querySelector('#play');
let pausebutton = document.querySelector('#pause');
let slow = document.querySelector('#slower');
let speed= document.querySelector('#faster');
let skipbutton = document.querySelector('#skip');
let mutebutton = document.querySelector('#mute');
let volumeslider = document.querySelector('#slider');
let oldschoolbutton =  document.querySelector('#vintage');
let original = document.querySelector('#orig');

//Initialize the video element and turn off autoplay and turn off looping.

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.load();
	video.autoplay = false;
	video.loop = false;

});

//Play the video and update the volume information.  
playbutton.addEventListener("click", function() {
	console.log("play video")
	video.play(); 
});

//Pause the video.
pausebutton.addEventListener("click", function() {
	console.log("pause video")
	video.pause(); 
});

//Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
slow.addEventListener("click", function() {
	console.log("slow video")
	video.playbackRate = 0.9 * video.playbackRate;
	console.log("current speed is", video.playbackRate)
});

//Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
speed.addEventListener("click", function() {
	console.log("speed video")
	video.playbackRate = video.playbackRate / 0.9;
	console.log("current speed is", video.playbackRate)

});

//Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
skipbutton.addEventListener("click", function() {
	console.log("skip ahead")
	video.currentTime = video.currentTime + 10;
	console.log("current location is", video.currentTime)
	// if()
});
//Mute/unmute the video and update the text in the button.
mutebutton.addEventListener("click", function() {
	console.log("mute")
	if(video.muted == true) {
		video.muted = false;
		mutebutton.innerHTML = 'Mute'
	  }
	  else {
		video.muted = true;
		mutebutton.innerHTML = 'Unmute';
	  }
});
//Change the volume based on the slider and update the volume information.

volumeslider.addEventListener("click", function() {
	console.log("volume slider")
	const vol = volumeslider.value;
	video.volume = vol/100;
	console.log("the current volume is", video.volume)
	let num = document.querySelector('#volume');
	num.innerHTML = vol + "%";

});
//Utilize the existing oldSchool class on the video element
oldschoolbutton.addEventListener("click", function() {
	console.log("old school")
	video.classList.add("oldSchool");
});

//Remove the oldSchool class from the video.
original.addEventListener("click", function() {
	console.log("original")
	video.classList.remove("oldSchool");
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

