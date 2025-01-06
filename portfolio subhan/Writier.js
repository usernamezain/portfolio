const words = ["Welcome!", "I'm Subhan Hassan", "I'm Passionate", "Graphic Designer", "Explore My Portfolio", "Let's Build Trust", "A Clean Work!"];
const outputDiv = document.getElementById("output");
let wordIndex = 0;
let charIndex = 0;
let isRemoving = false;

function typeAndRemove() {
  if (isRemoving) {
    // Remove a character one by one
    if (charIndex > 0) {
      charIndex--;
      outputDiv.textContent = words[wordIndex].substring(0, charIndex);
      setTimeout(typeAndRemove, 50); // Slow down removal
    } else {
      // Once the word is removed, move to the next word
      isRemoving = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeAndRemove, 500); // Pause before typing next word
    }
  } else {
    // Type a character one by one
    if (charIndex < words[wordIndex].length) {
      charIndex++;
      outputDiv.textContent = words[wordIndex].substring(0, charIndex);
      setTimeout(typeAndRemove, 100); // Slow down typing
    } else {
      // Once a word is fully typed, start removing it
      isRemoving = true;
      setTimeout(typeAndRemove, 1000); // Pause before removal
    }
  }
}

// Start the typing and removing process
typeAndRemove();
