import { useState } from "react";
import { Alert, Divider, useMediaQuery } from "@mui/material";
import DeliveryNumber from "./components/TextBox/DeliveryNumber";
import DeliveryDetail from "./components/TextBox/DeliveryDetail";
import StatusBar from "./components/StatusBar/StatusBar";
import Left from "./assets/icons/Left.png";
import TextButton from "./components/Button/TextButton";
import AdContainer from "./components/Container/AdContainer";
import ImageTextBox from "./components/TextBox/ImageTextbox";
import Fedex from "./assets/images/Fedex-Logo.png";
import NumberTextBox from "./components/TextBox/NumberTextbox";
import copyIcon from "./assets/icons/Copy.png";
import IconButton from "./components/Button/IconButton";
import LockerIcon from "./assets/icons/Locker.png";
import "./App.scss";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const isMobile = useMediaQuery("(max-width: 992px)");

  const copyToClipboard = (textToCopy: string) => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="App">
      {isMobile ? <StatusBar /> : null}
      {showAlert && (
        <Alert severity="success" className="alert">
          Code copied to clipboard!
        </Alert>
      )}
      {isMobile && (
        <div className="icon">
          <img src={Left} width={32} height={32} alt="left-icon" />
        </div>
      )}
      <div className="flex-row">
        <DeliveryNumber deliveryNumber={487303} />
        <TextButton
          text="Pending"
          width="72px"
          height="22px"
          color="#EA5455"
          bgColor="#EA545526"
          fontWeight={700}
        />
      </div>
      <AdContainer />
      {isMobile ? <Divider className="divider" /> : null}
      <div className="deliver-details">
        <DeliveryDetail deliveredTime="2023-10-17 17:05:54" />
        <ImageTextBox
          carrierLogo={Fedex}
          carrierName="Fedex"
          address1="Bluebits Office Metrotown"
          address2="4289 Kingsway, Burnaby, BC, Canada, V6B0C8"
        />
      </div>
      <div className="code-details">
        <NumberTextBox
          title="Pick-up Code"
          number="288-234-123"
          icon={copyIcon}
          iconWidth={24}
          iconHeight={24}
          onClick={copyToClipboard}
        />
        <NumberTextBox title="Compartment" number="104" />
      </div>
      <TextButton
        text="Unlock Compartment"
        width="358px"
        height="48px"
        color="#FFFFFF"
        bgColor="#4D81E7"
        fontSize="16px"
        fontWeight={600}
      />
      {isMobile ? <Divider className="divider" /> : null}
      <div className="flex-col bottom-buttons">
        <IconButton
          title="Residential Unit Registration"
          desc="Register your unit with BlueBox to enable delivery by unit feature."
          icon={LockerIcon}
          width="100%"
          fontWeight={600}
          iconWidth="24px"
          iconHeight="25px"
        />
        <IconButton
          title="Residential Unit Registration"
          desc="Register your unit with BlueBox to enable delivery by unit feature."
          icon={LockerIcon}
          width="100%"
          fontWeight={600}
          iconWidth="24px"
          iconHeight="25px"
        />
      </div>
    </div>
  );
}

export default App;
