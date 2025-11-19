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

qrContainer.classList.add("hidden");

const generateQRCode = (url, print = false) => {
  qrContainer.innerHTML = "";
  const qrOptions = { ...options, data: url, image: print ? printLogo : logo };
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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  let url = getValidURL(data.url);

  if (url) {
    const finalUrl = addUTMParameters(
      url.href,
      data.utmSource,
      data.utmMedium,
      data.utmCampaign,
    );
    console.log(finalUrl);
    generateQRCode(finalUrl, checkbox.checked);
  }
});

