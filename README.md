# Collasible Sidebar

A resposive collapsible sidebar, built using vanilla HTML, CSS, and JavaScript.

## 🪶Key Features

- Toggle Functionality
- Responsive Design
- Active State

## 📂 File Descriptions

- `index.html`: The main HTML file structures the sidebar (`<aside>`), its links, user profile section, and the main header (`<header>`). It includes SVG icons for the menu items.

- `styles.css`: This CSS file controls the visual appearance and layout. Key styles include:

- `.sidebar`: Defines the base style for the sidebar, including its width, background, and transition effect.

- `.sidebar.collapsed`: Reduces the sidebar's width and hides text elements to create the collapsed state.

- `.sidebar-item`: Styles the individual menu links and handles their hover and active states.

- `.hamburger`: Styles the animated hamburger menu icon.

- `script.js`: This JavaScript file manages the dynamic behavior.

- `toggleSidebar()`: Toggles the collapsed class on the sidebar when the hamburger button is clicked.

- `handleWindowResize()`: Checks the browser's width and adds or removes the collapsed class to ensure the sidebar is collapsed on smaller screens. This function runs on page load and whenever the window is resized.

- `btnActive()`: Adds a click event listener to each sidebar item. It removes the active class from all items and then adds it to the item that was clicked.

## 🧑‍💻 Usage and Installation

To use this project, simply open the `index.html` file in a web browser. The sidebar will function immediately, allowing you to toggle its state and see the active menu item change.
