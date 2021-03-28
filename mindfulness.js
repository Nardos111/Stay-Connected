// Changes the embedded video to one of the specified length
function ChangeLink() {
	var element = document.getElementById("dropdown");
	var time = element.value;	// Which option was selected from the dropdown menu

	var videoLink = document.getElementById("video");

	// Lists of videos
	var oneMin = ["https://www.youtube.com/embed/c1Ndym-IsQg", 
	"https://www.youtube.com/embed/F7PxEy5IyV4"];

	var fiveMins = ["https://www.youtube.com/embed/ssss7V1_eyA", 
	"https://www.youtube.com/embed/inpok4MKVLM", 
	"https://www.youtube.com/embed/nmFUDkj1Aq0"];

	var tenMins = ["https://www.youtube.com/embed/ZToicYcHIOU", 
	"https://www.youtube.com/embed/Xl_B45DpMLU", 
	"https://www.youtube.com/embed/lVx3mFxML80"];

	if (time == "1 minute") {
		const randomVideo = oneMin[Math.floor(Math.random() * oneMin.length)];	// Select a random video
		videoLink.src = randomVideo;	// Change the random video to the randomly selected one
	}

	else if (time == "5 minutes") {
		const randomVideo = fiveMins[Math.floor(Math.random() * fiveMins.length)];
		videoLink.src = randomVideo;
	}

	else if (time == "10 minutes") {
		const randomVideo = tenMins[Math.floor(Math.random() * tenMins.length)];
		videoLink.src = randomVideo;
	}

	var videoLink = document.getElementById("video");
}


