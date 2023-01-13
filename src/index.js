// import javascriptBarcodeReader from "../node_modules/javascript-barcode-reader/dist/javascript-barcode-reader.es5.min.js";

// const { Quagga } = require("./dist/quagga.min");

// let image = new Image();
// image.crossOrigin = "Anonymous";
// image.src = "./code-93.jpg";
// image.onload = function () {
//   javascriptBarcodeReader({
//     image: image,
//     barcode: "code-93"
//     // barcodeType: "interleaved"
//   })
//     .then((result) => {
//       document.getElementById("barcode-title").innerHTML = result;
//     })
//     .catch(console.log);
// };


//=========== Quagga ============

Quagga.init({
  inputStream: {
    name: "Live",
    // type : "LiveStream",
    target: document.querySelector('#app')    // Or '#yourElement' (optional)
  },
  decoder: {
    readers: ["ean_reader"]
  },
  frequency: 10,
}, function (err) {
  if (err) {
    console.log(err);
    return
  }
  console.log("Initialization finished. Ready to start");
  Quagga.start();

});

Quagga.onDetected(function (data) {
  console.log(data)
})
// Quagga.onProcessed(function (data) {
//   console.log(data)
// })


