function generateBarcode() {
  barcodeApp.initialize();
  var  encodeString = generateRandomString();
  barcodeApp.encode(encodeString);
}

function generateRandomString() {
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var text;
  for( var i=0; i < 5; i++ )
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
