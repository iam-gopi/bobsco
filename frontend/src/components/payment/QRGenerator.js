import { QRCode } from "react-qrcode-logo";

const QRGenerator = ({ money, desc }) => {
  return (
    <QRCode
      value={`upi://pay?pa={}&pn=EStore&tn=${desc}&am=${money}`}
      size="300"
      logoImage="./images/logo.png"
      logoWidth="80"
      logoHeight="100"
      logoOpacity="0.8"
    />
  );
};

export default QRGenerator;
