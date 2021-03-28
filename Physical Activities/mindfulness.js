// Changes the embedded video to one of the specified length
function ChangeLink() {
	var element = document.getElementById("dropdown");
	var time = element.value;	// Which option was selected from the dropdown menu

	var videoLink = document.getElementById("video");

	// Lists of videos
	var oneMin = ["https://www.youtube.com/embed/c1Ndym-IsQg", 
	"https://www.youtube.com/embed/F7PxEy5IyV4",
	"https://www.youtube.com/embed/kI4bDaZ83g4",
	"https://www.youtube.com/embed/Z9i2QHlKzUI",
	"https://www.youtube.com/embed/0fcdv0kFVMs"];

	var fiveMins = ["https://www.youtube.com/embed/ssss7V1_eyA", 
	"https://www.youtube.com/embed/inpok4MKVLM", 
	"https://www.youtube.com/embed/nmFUDkj1Aq0",
	"https://www.youtube.com/embed/dEzbdLn2bJc",
	"https://www.youtube.com/embed/OCorElLKFQE",
	"https://www.youtube.com/embed/zUOGeHJjkU8",
	"https://www.youtube.com/embed/8Xdwr4cRTVA",
	"https://www.youtube.com/embed/MR57rug8NsM",
	"https://www.youtube.com/embed/TXNECaIJPDI"];

	var tenMins = ["https://www.youtube.com/embed/ZToicYcHIOU", 
	"https://www.youtube.com/embed/Xl_B45DpMLU", 
	"https://www.youtube.com/embed/lVx3mFxML80",
	"https://www.youtube.com/embed/F8EIbBR43Q0",
	"https://www.youtube.com/embed/EpVFSti0Ydg",
	"https://www.youtube.com/embed/ez3GgRqhNvA",
	"https://www.youtube.com/embed/j7d5Plai03g",
	"https://www.youtube.com/embed/O-6f5wQXSu8",
	"https://www.youtube.com/embed/U9YKY7fdwyg",
	"https://www.youtube.com/embed/b7RJKZNYtO4",
	"https://www.youtube.com/embed/sG7DBA-mgFY",
	"https://www.youtube.com/embed/Cp7pnHCY94U",
	"https://www.youtube.com/embed/0Y3HnUpHnNY"];

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
}


