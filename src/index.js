// Imports
import logo from './assets/images/logo.svg';
import printLogo from './assets/images/web_logo.svg';
import QRCodeStyling from "qr-code-styling";
import {library, icon} from '@fortawesome/fontawesome-svg-core';
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import options from './assets/config/options.json';

// Add Font Awesome icon to library
library.add(faDownload);

// Setup Icon with dark-teal color, initially hidden
const downloadButton = document.querySelector("#downloadButton");
const iconContainer = document.createElement('span');
iconContainer.innerHTML = icon({prefix: 'fas', iconName: 'download'}).html;
iconContainer.classList.add("dark-teal-icon", "hidden"); // Initially hidden
downloadButton.appendChild(iconContainer);

let qrCode; // Define QRCodeStyling instance to access it globally

// Download Button Event Listener to download QR code
downloadButton.addEventListener('click', async () => {
    if (!qrCode) return; // Exit if QR code has not been generated yet
    // Generate QR code blob
    const qrBlob = await qrCode.getRawData("png");
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(qrBlob);
    downloadLink.download = 'qr-code.png';
    downloadLink.click();

    // Clean up the object URL to free memory
    URL.revokeObjectURL(downloadLink.href);
});

// Form Submission Event Listener
const form = document.querySelector('#form');
const qrContainer = document.getElementById("canvas-container");
const checkbox = form.querySelector('input[type="checkbox"]');


// Initially hide the canvas container
qrContainer.classList.add("hidden");
const generateQRCode = (url, print=false) => {
    // Clear previous QR code (if any)
    qrContainer.innerHTML = '';
    console.log(print)
    // Set up QR code options with dynamic data and logo
    const qrOptions = {...options, data: url, image: !print ? logo : printLogo};
    qrCode = new QRCodeStyling(qrOptions); // Assign to qrCode variable

    // Append the QR code to the container
    qrCode.append(qrContainer);

    // Remove the 'hidden' class from the canvas container to make it visible
    qrContainer.classList.remove("hidden");

    // Remove the 'hidden' class from the download icon to make it visible
    iconContainer.classList.remove("hidden");
}

const getValidURL = (input) => {
    try {
        // If the input is already a valid URL, the URL constructor will handle it
        return new URL(input);
    } catch {
        // If it fails, prefix with https:// and try again
        return new URL(`https://${input}`);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Extract URL data from form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    let url = getValidURL(data.url);

    if (url) {
        console.log(url)
        generateQRCode(url, print=checkbox.checked)
    }
});