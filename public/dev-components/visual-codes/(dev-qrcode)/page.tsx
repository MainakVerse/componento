'use client'
import React from "react";
import DevQrCode from "./dev-qrcode";

const DevQrCodeUsage = () => {
  return (
    <DevQrCode
      value={process.env.NEXT_PUBLIC_BASE_URL as string}
      onValueChange={(value) => console.log(value)}
    />
  );
};

export default DevQrCodeUsage;
