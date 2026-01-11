# 🎨 Colour My World

A smart, interactive web application that allows users to change the background color of their environment. The app features high-level accessibility logic to ensure text remains readable regardless of the chosen color.

---

## 🌟 Features

* **140+ Predefined Colors:** Uses an HTML5 `<datalist>` to provide a searchable dropdown of every named CSS color.
* **Smooth Animations:** Implements a 1-second CSS transition for a "fading" effect when colors change.
* **Dynamic Accessibility (Smart Contrast):** Uses JavaScript to detect when a transition finishes.
    * Calculates the **Relative Luminance** of the background using the formula:
        $$L = (0.2126 \times R) + (0.7152 \times G) + (0.0722 \times B)$$
    * Automatically flips the heading text to **White** for dark backgrounds and **Black** for light backgrounds.

---

## 🛠️ Technical Breakdown

### HTML
* **Datalist:** Provides the UI for the color search filter.
* **Favicon:** Integrated `artist-palatte.png` for a professional browser tab look.
* **Defer Script:** Uses the `defer` attribute to ensure the DOM is loaded before the JavaScript runs.

### CSS
* **Flexbox Layout:** Centers the UI perfectly in the middle of the screen using `align-items` and `justify-content`.
* **Pseudo-classes:** The "Colour Screen" button features a `:hover` state that inverts colors for better interactivity.
* **Transitions:** Managed via `transition: background-color 1s ease;` on the `body`.

### JavaScript
* **Event Handling:** Uses `event.preventDefault()` to handle form submission without refreshing the page.
* **Computed Styles:** Utilizes `window.getComputedStyle` to read the actual RGB values from the browser after CSS processing.
* **Regex Parsing:** Uses `/\d+/g` to extract numeric values from the `rgb(r, g, b)` string.
* **Transition Listeners:** Uses the `transitionend` event to wait for the animation to finish before calculating text contrast.

---

## 🚀 How to Run

1.  Save the `index.html`, `style.css`, `script.js`, and `artist-palatte.png` files in the same folder.
2.  Open `index.html` in any modern web browser.