const square = document.getElementById("square");

// Initialize the NFC reader
const reader = new NDEFReader();

// Add an event listener to the NFC reader
reader
  .scan()
  .then(() => {
    console.log("NFC reader started successfully.");
    reader.addEventListener("reading", handleTagScan);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

// Handle the tag scan event
function handleTagScan(event) {
  const tag = event.tag;
  const tagData = tag.data;
  const decoder = new TextDecoder();
  const text = decoder.decode(tagData);

  console.log(`Tag data: ${text}`);

  // Change the color of the square based on the tag data
  if (text === "change to red") {
    square.style.backgroundColor = "red";
  } else if (text === "change to blue") {
    square.style.backgroundColor = "blue";
  }
}
