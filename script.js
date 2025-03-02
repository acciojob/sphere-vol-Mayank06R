function volume_sphere() {
    //Write your code here
	document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    volume_sphere();
});

function volume_sphere() {
    // Retrieve the radius value entered by the user from the input field
    let radius = document.getElementById("radius").value;

    // Validate the input, ensuring the radius is a non-negative number
    if (radius < 0 || isNaN(radius)) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    // Calculate the volume of the sphere using the formula: V = (4/3)πr^3
    let volume = (4/3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the designated output field, rounded to four decimal places
    document.getElementById("volume").value = volume.toFixed(4);
}

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
