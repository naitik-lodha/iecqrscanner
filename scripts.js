var modal = document.getElementById("myModal");
var modalContent = document.getElementById("modal-content");
var span = document.getElementsByClassName("close")[0];

function onScanSuccess(decodedText, decodedResult) {
	//Now we can send data to our server(Flask app)
	//Code to be written .................


	//Displaying the data on the frontend
	modal.style.display = "block";
	modalContent.innerHTML = decodedText;
	console.log(`Code scanned = ${decodedText}`, decodedResult);
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
span.onclick = function() {
	modal.style.display = "none";
};
var html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", {
	fps: 10,
	qrbox: 250,
});
html5QrcodeScanner.render(onScanSuccess);