const div = document.getElementsByClassName("container");

// Replace inner content
div[0].innerHTML = "<h2 style='color:cyan'>Hii, I am using DOM</h2>";

// Create and add new <h2>
const h2 = document.createElement("h2");
h2.innerText = "CS-B student";
h2.style.backgroundColor = "cadetblue";
div[0].appendChild(h2);

// Button & loading section
const button = document.getElementById("btn");
const loading = document.getElementById("disp");

// Function to simulate data loading
function displayData() {
  loading.innerHTML = "<h2>Data is loading...</h2>";

  setTimeout(() => {
    // Clear loading message
    loading.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.innerText = "CS b student";
    div[0].appendChild(h2);

    const img = document.createElement("img");
    img.src = "light-bulb.png"; // make sure this image exists in your folder
    img.setAttribute("height", 50);
    img.setAttribute("width", 50);
    div[0].appendChild(img);
  }, 2000);
}

// Add event listener
button.addEventListener("click", displayData);
