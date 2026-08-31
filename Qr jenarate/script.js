// script.js
function generateQRCode() {
    const qrText = document.getElementById("qrInput").value;
    const qrcodeContainer = document.getElementById("qrcode");

    // Clear any previous QR code
    qrcodeContainer.innerHTML = "";

    if (qrText.trim()) {
        // Generate the QR code
        new QRCode(qrcodeContainer, {
            text: qrText,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
        });
    } else {
        alert("Please enter some text or a URL to generate the QR code.");
    }
}
