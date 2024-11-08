// Imports
import logo from './assets/images/logo.svg';
import QRCodeStyling from "qr-code-styling";
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import options from './assets/config/options.json';

// Add Font Awesome icon to library
library.add(faDownload);

// Setup Icon with dark-teal color, initially hidden
const downloadButton = document.querySelector("#downloadButton");
const iconContainer = document.createElement('span');
iconContainer.innerHTML = icon({ prefix: 'fas', iconName: 'download' }).html;
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

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Extract URL data from form
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    let url = data.url;

    // Validate and prefix URL if needed
    if (url && !/^https?:\/\//i.test(url)) {
        url = `https://${url}`;
        console.log(url)
    }

    // Clear previous QR code (if any)
    qrContainer.innerHTML = '';

    // Set up QR code options with dynamic data and logo
    const qrOptions = { ...options, data: url, image: logo };
    qrCode = new QRCodeStyling(qrOptions); // Assign to qrCode variable

    // Append the QR code to the container
    qrCode.append(qrContainer);

    // Remove the 'hidden' class from the download icon to make it visible
    iconContainer.classList.remove("hidden");
});