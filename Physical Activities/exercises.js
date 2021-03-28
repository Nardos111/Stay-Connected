// Changes the embedded video to one of the specified length
function ChangeLink() {
	var element = document.getElementById("dropdown");
	var time = element.value;	// Which option was selected from the dropdown menu

	var cardio = false;	// used to determing which type of exercise is selected
	var stretching = false;

	if (document.getElementById("cardio").checked) {
		cardio = true;
	}

	else if (document.getElementById("stretching").checked) {
		stretching = true;
	}

	var videoLink = document.getElementById("video");

	// Lists of videos
	var fiveCardio = ["https://www.youtube.com/embed/q2NZyW5EP5A", 
	"https://www.youtube.com/embed/QKV-KhMjOWA",
	"https://www.youtube.com/embed/EDD4GxHVess",
	"https://www.youtube.com/embed/q2NZyW5EP5A",
	"https://www.youtube.com/embed/BR0jT6JxH-o"];

	var fiveStretching = ["https://www.youtube.com/embed/BdfTuxdfIE8", 
	"https://www.youtube.com/embed/0L3W0pcHU50", 
	"https://www.youtube.com/embed/KBaSGF6kYqw",
	"https://www.youtube.com/embed/2L2lnxIcNmo",
	"https://www.youtube.com/embed/TMDX7hdQKSY"];

	var tenCardio = ["https://www.youtube.com/embed/tYyNM9pmOlA", 
	"https://www.youtube.com/embed/gUWFmn8f3H4", 
	"https://www.youtube.com/embed/gFeEUq2624Q",
	"https://www.youtube.com/embed/MCvE258aPv0",
	"https://www.youtube.com/embed/AuyiM86sKf8"];

	var tenStretching = ["https://www.youtube.com/embed/UAA3E5MLqrM", 
	"https://www.youtube.com/embed/mj2RGYpknzA", 
	"https://www.youtube.com/embed/4pKly2JojMw",
	"https://www.youtube.com/embed/BKfGWNTssCY",
	"https://www.youtube.com/embed/tQTS_gGZxro"];

	if (time == "5 minutes" && cardio) {
		const randomVideo = fiveCardio[Math.floor(Math.random() * fiveCardio.length)];
		videoLink.src = randomVideo;
	}

	else if (time == "5 minutes" && stretching) {
		const randomVideo = fiveStretching[Math.floor(Math.random() * fiveStretching.length)];
		videoLink.src = randomVideo;
	}

	else if (time == "10 minutes" && cardio) {
		const randomVideo = tenCardio[Math.floor(Math.random() * tenCardio.length)];
		videoLink.src = randomVideo;
	}

	else if (time == "10 minutes" && stretching) {
		const randomVideo = tenStretching[Math.floor(Math.random() * tenStretching.length)];
		videoLink.src = randomVideo;
	}

	else {
		videoLink.src = "https://www.youtube.com/embed/ku16PsxpZGU";
	}
}


