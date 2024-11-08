const qrcode = require();
const form = document.querySelector("#form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    // for (let [name, value] of formData.entries()) {
    //     console.log(`${name}: ${value}`);
    // }
    // If you want an object with key-value pairs of form data
    const data = Object.fromEntries(formData.entries());
    const url = data.url;
    console.log(url);
});

//# sourceMappingURL=index.579125c3.js.map
