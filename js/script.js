document.addEventListener("DOMContentLoaded", () => {
  const keys = document.querySelectorAll(".mkey");

  // Add click event to each key
  keys.forEach((key) => {
    key.addEventListener("click", () => {
      const keyValue = key.getAttribute("data-key");
      const secondaryKeyValue = key.getAttribute("data-secondary");
    //   console.log(`Primary: ${keyValue}, Secondary: ${secondaryKeyValue}`);
      activateKey(keyValue);
    });
  });

  // Listen for keyboard events
  document.addEventListener("keydown", (event) => {
    const isShiftPressed = event.shiftKey;
    const key = event.key;
    // console.log(key);

    // Match primary or secondary key based on Shift
    const matchingKey = Array.from(keys).find((keyElement) => {
      return isShiftPressed
        ? keyElement.dataset.secondary === key
        : keyElement.dataset.key === key;
    });

    if (matchingKey) {
      activateKey(matchingKey.dataset.key);
    }

    // Check for Caps Lock state
    if (event.getModifierState("CapsLock")) {
      toggleCapsLockIndicator(true);
    } else {
      toggleCapsLockIndicator(false);
    }
  });

  document.addEventListener("keyup", (event) => {
    // Check for Caps Lock state on key release
    if (event.getModifierState("CapsLock")) {
      toggleCapsLockIndicator(true);
    } else {
      toggleCapsLockIndicator(false);
    }
  });

  // Function to activate a key
  function activateKey(key) {
    // Remove active class from all keys
    keys.forEach((keyElement) =>
      keyElement.classList.remove("shadow-inner-mac")
    );

    // Find the matching key and add the active class
    const matchingKey = document.querySelector(`.mkey[data-key="${key}"]`);
    console.log("matching key: ", matchingKey);
    if (matchingKey) {
        matchingKey.classList.add("shadow-inner-mac");
        // No scaling effect for the space key
        matchingKey.dataset.key !== " " ?
            matchingKey.classList.add("scale-[0.97]") :
            matchingKey.classList.remove("scale-[0.98]");



      setTimeout(() => {
        matchingKey.classList.remove("shadow-inner-mac", "scale-[0.97]", "scale-[0.98]");
      }, 500);
    }
  }

  // Function to toggle Caps Lock indicator
  function toggleCapsLockIndicator(isCapsLockOn) {
    const capsLockKey = document.querySelector(`#caps`);
    if (capsLockKey) {
      if (isCapsLockOn) {
        capsLockKey.classList.add("text-green-500");
      } else {
        capsLockKey.classList.remove("text-green-500");
      }
    }
  }
});
