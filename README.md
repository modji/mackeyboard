## Mac Keyboard Simulation

This project mimics an Macbook Air M1  keyboard. It is designed using **HTML**, **CSS (TailwindCSS)**, and **JavaScript**.
It replicates the layout and functionality of a physical Mac keyboard and provides interactive features that respond to user input.

---

### **Features**
1. **Mac Keyboard Layout**:
   - Includes functional keys (`Escape`, `Caps Lock`, `Delete`, `Tab`, etc.).
   - Contains alphanumeric keys, special characters, and modifier keys (`Shift`, `Control`, `Option`, `Command`).

2. **Interactive Keys**:
   - Keys respond to **clicks** and **keyboard input**.
   - Highlights the pressed key with a subtle animation using the `hover:shadow-inner` style.

3. **Dual-Function Keys**:
   - Keys like `8`/`*` and `Shift`/`Caps Lock` are implemented to handle dual functionality.
   - The secondary function is activated when the `Shift` key is held.

4. **Caps Lock Indicator**:
   - The `Caps Lock` key toggles a visual indicator (green dot) when activated.


## **Keyboard Input**:
   - When a user types on their physical keyboard, the corresponding key on the virtual Mac keyboard is highlighted.
   - Modifier keys like `Shift` and `Caps Lock` dynamically adjust the behavior of other keys.

---
**Subtle Animation**:
   - Due to the dark color scheme of the keys, the shadow animation may appear subtle.
   - Enhancing the brightness or shadow contrast can make the animation more pronounced.

---

### **How It Works**
1. **HTML Structure**:
   - Each key is a `<div>` element with `data-key` and optional `data-secondary` attributes representing the key's primary and secondary functions.

2. **CSS with TailwindCSS**:
   - TailwindCSS classes provide the styling, including size, layout, and the hover animations (`hover:shadow-inner`).

3. **JavaScript**:
   - Event listeners handle `click` and `keydown` events.
   - The script detects `Shift` and `Caps Lock` states to activate secondary functions and toggles.
   - The `lucide` library is used for icons on function keys.

---
