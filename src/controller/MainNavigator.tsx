import React from "react";
import { Routes, Route } from "react-router-dom";
import { Serviceus } from "../dashboard/Serviceus";
import { Aboutus } from "../dashboard/Aboutus";
import { Homepage } from "../dashboard/Homepage";
import { Micro } from "../dashboard/Micro";
import { Aeps } from "../dashboard/Aeps";
import { Recharge } from "../dashboard/Recharge";
import { Utility } from "../dashboard/Utility";
import { Cms } from "../dashboard/Cms";
import { Creditpay } from "../dashboard/Creditpay";
import { Flight } from "../dashboard/Flight";
import { Contact } from "../dashboard/Contact";



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
      </Routes>
    </div>
  );
}

export default MainNavigator;