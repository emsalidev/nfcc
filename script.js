// Get reference to the square element
const square = document.querySelector(".square");

// Define the expected data for each tag
const tagData = {
  red: "change to red",
  blue: "change to blue",
};

// Function to handle NFC tag scans
function handleTagScan(event) {
  // Read the data from the scanned tag
  const tagData = event.data.records[0].data;

  // Check if the tag data matches the expected values
  if (tagData === "change to red") {
    // Change the color of the square to red
    square.style.backgroundColor = "red";
  } else if (tagData === "change to blue") {
    // Change the color of the square to blue
    square.style.backgroundColor = "blue";
  }
}

// Set up the NFC event listener
nfc.addEventListenr("tag", handleTagScan);
