import React from "react";
import { Routes, Route } from "react-router-dom";
import { Aboutus } from "../view/about/Aboutus";
import { Contact } from "../view/contact/Contact";
import { Homepage } from "../view/home/Homepage";
import { Privacypolicy } from "../view/Policy/Privacypolicy";
import { Refundpolicy } from "../view/Policy/Refundpolicy";
import { Terms } from "../view/Policy/Terms";
import { Aeps } from "../view/services/Aeps";
import { Bus } from "../view/services/Bus";
import { Cms } from "../view/services/Cms";
import { Creditpay } from "../view/services/Creditpay";
import { Flight } from "../view/services/Flight";
import { Hotel } from "../view/services/Hotel";
import { Micro } from "../view/services/Micro";
import { Mutual } from "../view/services/Mutual";
import { Recharge } from "../view/services/Recharge";
import { Serviceus } from "../view/services/Serviceus";
import { Utility } from "../view/services/Utility";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/service" element={<Serviceus />} />
        <Route path="/micro" element={<Micro />} />
        <Route path="/aeps" element={<Aeps />} />
        <Route path="/recharge" element={<Recharge />} />
        <Route path="/utility" element={<Utility />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/cms" element={<Cms />} />
        <Route path="/creditpay" element={<Creditpay />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bus" element={<Bus />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/mutual" element={<Mutual />} />
        <Route path="/privacy" element={<Privacypolicy />} />
        <Route path="/refund" element={<Refundpolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;
