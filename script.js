const square = document.getElementById("square");

function handleTagScan(tag) {
  if (tag.serialNumber === "04:4E:71:CA:D8:11:91") {
    square.classList.remove("blue");
    square.classList.add("red");
  } else if (tag.serialNumber === "87654321") {
    square.classList.remove("red");
    square.classList.add("blue");
  }
}

nfc.addTagDiscoveredListener(handleTagScan, ["tag1", "tag2"]);
