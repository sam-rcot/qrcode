import logo from "./assets/images/logo.svg";
import printLogo from "./assets/images/web_logo.svg";
import QRCodeStyling from "qr-code-styling";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import options from "./assets/config/options.json";

library.add(faDownload);

const downloadButton = document.querySelector("#downloadButton");
const iconContainer = document.createElement("span");
iconContainer.innerHTML = icon({ prefix: "fas", iconName: "download" }).html;
iconContainer.classList.add("dark-teal-icon", "hidden");
downloadButton.appendChild(iconContainer);

let qrCode;

downloadButton.addEventListener("click", async () => {
  if (!qrCode) return;
  const qrBlob = await qrCode.getRawData("png");
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(qrBlob);
  downloadLink.download = "qr-code.png";
  downloadLink.click();
  URL.revokeObjectURL(downloadLink.href);
});

const form = document.querySelector("#form");
const qrContainer = document.getElementById("canvas-container");
const checkbox = form.querySelector('input[type="checkbox"]');
const qrTypeSelect = document.getElementById("qrType");

qrContainer.classList.add("hidden");

// Show/hide relevant fields based on QR type
qrTypeSelect.addEventListener("change", (e) => {
  const qrType = e.target.value;

  // Hide all conditional fields
  document.getElementById("urlInput").style.display = "none";
  document.getElementById("emailInput").style.display = "none";
  document.getElementById("subjectInput").style.display = "none";
  document.getElementById("nameInput").style.display = "none";
  document.getElementById("phoneInput").style.display = "none";
  document.getElementById("contactEmailInput").style.display = "none";
  document.getElementById("textInput").style.display = "none";
  document.getElementById("utmSourceInput").style.display = "none";
  document.getElementById("utmMediumInput").style.display = "none";
  document.getElementById("utmCampaignInput").style.display = "none";

  // Show relevant fields
  switch (qrType) {
    case "web":
      document.getElementById("urlInput").style.display = "block";
      document.getElementById("utmSourceInput").style.display = "block";
      document.getElementById("utmMediumInput").style.display = "block";
      document.getElementById("utmCampaignInput").style.display = "block";
      break;
    case "email":
      document.getElementById("emailInput").style.display = "block";
      document.getElementById("subjectInput").style.display = "block";
      break;
    case "contact":
      document.getElementById("nameInput").style.display = "block";
      document.getElementById("phoneInput").style.display = "block";
      document.getElementById("contactEmailInput").style.display = "block";
      break;
    case "text":
      document.getElementById("textInput").style.display = "block";
      break;
  }
});

const generateQRCode = (data, print = false) => {
  qrContainer.innerHTML = "";
  const qrOptions = { ...options, data: data, image: print ? printLogo : logo };
  qrCode = new QRCodeStyling(qrOptions);
  qrCode.append(qrContainer);
  qrContainer.classList.remove("hidden");
  iconContainer.classList.remove("hidden");
};

const getValidURL = (input) => {
  try {
    return new URL(input);
  } catch {
    return new URL(`https://${input}`);
  }
};

const addUTMParameters = (url, utmSource, utmMedium, utmCampaign) => {
  const urlObj = new URL(url);
  if (utmSource) {
    urlObj.searchParams.set("utm_source", utmSource);
  }
  if (utmMedium) {
    urlObj.searchParams.set("utm_medium", utmMedium);
  }
  if (utmCampaign) {
    urlObj.searchParams.set("utm_campaign", utmCampaign);
  }
  return urlObj.href;
};

const generateEmailData = (email, subject) => {
  let emailData = `mailto:${email}`;
  if (subject) {
    emailData += `?subject=${encodeURIComponent(subject)}`;
  }
  return emailData;
};

const generateContactData = (name, phone, email) => {
  // vCard format
  let vcard = "BEGIN:VCARD\nVERSION:3.0\n";
  if (name) vcard += `FN:${name}\n`;
  if (phone) vcard += `TEL:${phone}\n`;
  if (email) vcard += `EMAIL:${email}\n`;
  vcard += "END:VCARD";
  return vcard;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  let qrData = "";

  switch (data.qrType) {
    case "web":
      let url = getValidURL(data.url);
      qrData = addUTMParameters(
        url.href,
        data.utmSource,
        data.utmMedium,
        data.utmCampaign,
      );
      break;
    case "email":
      qrData = generateEmailData(data.email, data.subject);
      break;
    case "contact":
      qrData = generateContactData(data.name, data.phone, data.contactEmail);
      break;
    case "text":
      qrData = data.text;
      break;
  }

  if (qrData) {
    console.log(qrData);
    generateQRCode(qrData, checkbox.checked);
  }
});

