// global.js

// Function to create the header
function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1>Playstation - For gamers</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="products.html">Products</a>
        <a href="contact.html">Contact</a>
      </nav>
    `;
    document.body.prepend(header);
  }
  
  // Function to create the footer
  function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
      <p>&copy; ${new Date().getFullYear()} All content, games titles, trade names and/or trade dress, trademarks, artwork and associated imagery are trademarks and/or copyright material of their respective owners. All rights reserved. More info</p>
    `;
    document.body.appendChild(footer);
  }
  
  // Call the functions to create the header and footer
  createHeader();
  createFooter();