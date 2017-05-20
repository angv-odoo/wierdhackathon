function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function onReport() {
	
	//open popup with thank you
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function categoryClick(id) {
	var elmnts =  document.getElementsByClassName(id);
	for (var i = 0; i < elmnts.length; i++) {
		elmnts[i].classList.toggle("show");
	}
}
function problemClick(id) {
	var elmnts =  document.getElementsByClassName(id);
	for (var i = 0; i < elmnts.length; i++) {
		elmnts[i].classList.toggle("show");
		elmnts[i].parentNode.classList.toggle("big");
	}
}