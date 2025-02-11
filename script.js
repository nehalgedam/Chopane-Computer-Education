// Function to generate QR Code
function generateQRCode(id, url) {
    new QRCode(document.getElementById(id), {
        text: url,
        width: 100,
        height: 100
    });
}

// Course Links
generateQRCode("qrcode-mscit", "https://chopanecourse.com/mscit");
generateQRCode("qrcode-tally", "https://chopanecourse.com/tally");
generateQRCode("qrcode-dataentry", "https://chopanecourse.com/dataentry");
generateQRCode("qrcode-photoshop", "https://chopanecourse.com/photoshop");
generateQRCode("qrcode-spokenenglish", "https://chopanecourse.com/spokenenglish");
generateQRCode("qrcode-cpp", "https://chopanecourse.com/cpp");
generateQRCode("qrcode-sarthi", "https://chopanecourse.com/sarthi");