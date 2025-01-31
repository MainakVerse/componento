import DevQrCodeUsage from "./(dev-qrcode)/page";

const VisualCodesInfo = [
  {
    title: "Dev QrCode",
    component: DevQrCodeUsage,
    variants: {
      jsx: true,
      tsx: true,
    },
    details: {
      description:
        "A QR code generator component with real-time updates and download functionality.",
      features: [
        "Generates QR codes dynamically",
        "Real-time update of QR code value",
        "Downloadable QR code as PNG",
        "Customizable input field",
        "Responsive design",
        "Accessibility-focused",
      ],
      props: [
        {
          propName: "value",
          propExample: `"${process.env.NEXT_PUBLIC_BASE_URL}"`,
          propDetail: "Initial value for the QR code. Can be a URL or any string.",
        },
        {
          propName: "onValueChange",
          propExample: `(value) => console.log(value)`,
          propDetail: "Callback function triggered when the QR code value changes.",
        },
      ],
      doc_links: ["https://zpao.github.io/qrcode.react/"],
      packages: [
        {
          pckg_name: "qrcode.react",
          pckg_link: "https://www.npmjs.com/package/qrcode.react",
        },
        {
          pckg_name: "html-to-image",
          pckg_link: "https://www.npmjs.com/package/html-to-image",
        },
      ],
    },
  },
 
];

export default VisualCodesInfo;
