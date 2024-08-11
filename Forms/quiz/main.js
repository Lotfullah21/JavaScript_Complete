function billingFunction() {
  var shippingValue = document.getElementById("shippingName").value;
  var zipValue = document.getElementById("shippingZip").value;
  if (document.getElementById("same").checked) {
    document.getElementById("billingName").value = shippingValue;
    document.getElementById("billingZip").value = zipValue;
  } else {
    document.getElementById("billingName").value = null;
    document.getElementById("billingZip").value = null;
  }
}
