import React, { useCallback, useEffect, useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";
import { ImDownload } from "react-icons/im";
const DevQrCode = ({
  value,
  onValueChange,
}: {
  value: string;
  onValueChange?: (value: string) => void;
}) => {
  const [qrValue, setQrValue] = useState(value);
  const qrRef = useRef(null);

  const handleDownload = useCallback(() => {
    if (qrRef.current) {
      toPng(qrRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = "dev-qr-code.png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [qrRef]);

  useEffect(() => {
    setQrValue(value);
  }, [value]);

  return (
    <div className="flex items-center justify-center gap-3 flex-col">
      <input
        className="bg-transparent text-center outline-0 focus:outline-ACCENT p-1 px-2 rounded-md border border-ACCENT/50 text-sm text-ACCENT/80"
        id="QrCode"
        type="text"
        value={qrValue}
        onChange={(e) => {
          setQrValue(e.target.value);
          onValueChange?.(e.target.value);
        }}
      />
      <div className="relative rounded-lg overflow-hidden group">
        <div ref={qrRef} className="dev-qr rounded-md p-2 bg-white border border-ACCENT/30 w-40 h-40">
          <QRCodeSVG
            value={qrValue}
            size={152}
            fgColor="black"
            bgColor="transparent"
            level="L"
            imageSettings={{
              src: "/assets/logo.svg",
              x: undefined,
              y: undefined,
              height: 20,
              width: 20,
              excavate: true,
            }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <button
          className="absolute text-5xl text-white grid place-items-center group-hover:opacity-100 opacity-0 inset-0 bg-ACCENT/50"
          onClick={handleDownload}
        >
          <ImDownload />
        </button>
      </div>
    </div>
  );
};

export default DevQrCode;