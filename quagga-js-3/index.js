Quagga.decodeSingle({
  // decoder: {
  //   readers: ["code_128_reader"] // List of active readers
  // },
  locate: true, // try to locate the barcode in the image
  src: './barcode128.jpg' // or 'data:image/jpg;base64,' + data
}, function (result) {
  console.log('mi result', result)
  if (result.codeResult) {
    console.log("result", result.codeResult.code);
  } else {
    console.log("not detected");
  }
});