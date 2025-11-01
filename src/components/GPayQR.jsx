import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import styling from '../css/cart.module.css'

const GPayQR = ({ amount }) => {
  // Your fixed UPI details
  const upiId = "lokesh0212004@oksbi";
  const name = "Lokesh";

  // Create dynamic UPI payment link
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;


  return (
    <div className=" text-center m-5" id={styling.gpayqr}>
      <h4>Pay ₹{amount} using GPay / UPI</h4>
      <div className="d-flex justify-content-center">
        <QRCodeCanvas value={upiLink} size={100} includeMargin={true} />
      </div>
    </div>
  );
};

export default GPayQR;
