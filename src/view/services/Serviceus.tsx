import {
  Atm,
  Customer,
  Footer,
  Navbar,
  Playstore,
} from "../../component/Component";

export function Serviceus() {
  return (
    <div className="container-fluid main">
      <Navbar />
      
      <Customer
        className={"col-md-12 service text-center my-2"}
        h1={"Our Services"}
        p={"Home > Our Services"}
      />
      <div className="service-page col-lg-10 mx-auto">
      <div className="row justify-content-around mx-0 service-atm">
        <Atm
          className={"col-md-5 micro  "}
          img={require("../../assets/images/matm.png")}
          h4={"Micro ATM (mATM)"}
          p={
            "When we run out of cash and need to make a payment, we frequently can’t find an ATM nearby. PayPe provides a cash withdrawal option through its retail locations to address this issue. Whether it’s making a payment for products or services you’ve purchased or withdrawing"
          }
          a={"Read More"}
        />
        <Atm
          className={"col-md-5 micro  "}
          img={require("../../assets/images/aeps.png")}
          h4={"Aadhaar Enabled Payment System (Aeps)"}
          p={
            "AePS is a bank led model which allows online interoperable financial inclusion transaction at PoS (MicroATM) through the Business correspondent of any bank using the Aadhaar authentication.AePS allows you to do six types of transactions."
          }
          a={"Read More"}
        />
      </div>
      <div className="row justify-content-around  mx-0 service-atm">
        <Atm
          className={"col-md-4  micro"}
          img={require("../../assets/images/mobilerecharge.png")}
          h4={"Mobile Recharge"}
          p={
            "PayPe.com is a leading pre-paid mobile recharge website in INDIA- On PayPe.com B2B Retailers and users can recharge prepaid mobile online. PayPe.com is the safest way to prepaid recharge for all Indian providers."
          }
          a={"Read More"}
        />
        <Atm
          className={"col-md-4  micro"}
          img={require("../../assets/images/dth.png")}
          h4={"DTH Recharge"}
          p={
            "Recharge facilitates recharging of prepaid DTH account for operators like Dish TV, Big TV, Sun Direct, Videocon D2H and Tata Sky. PayPe in makes for a very convenient way to recharge all DTH in INDIA. website also allows you to manage your B2B wallet."
          }
          a={"Read More"}
        />
        <Atm
          className={"col-md-4  micro mt-4"}
          img={require('../../assets/images/utility.png')}
          h4={"Utility Bill Payment"}
          p={
            "We are a one stop solution for all your utility related payments. Pay safe and easily from our portal to have hassle-free transactions. We ensure greater reliability with direct interactions across banks, cards, and wallets."
          }
          a={"Read More"}
        />
      </div>
      <div className="d-flex flex-wrap  mx-0">
          <Playstore
            img={require('../../assets/images/mobile.png')}
            h1={"Download Our App!"}
            h6={
              "Download our pocket friendly Mobile App for all essential services"
            }
            img1={require('../../assets/images/Playstore.png')}
          />
        </div>
      <h1 className="fw-bold text-center">Our Upcoming Services</h1>
      <div className="row justify-content-around mx-0 service-atm">
        <Atm
          className={"col-md-4 bus"}
          img={require("../../assets/images/bus.png")}
          h4={"Bus Booking"}
          p={"Coming Soon"}
          a={"Read More"}
        />
        <Atm
          className={"col-md-4  bus"}
          img={require("../../assets/images/flight.png")}
          h4={"Flight Booking"}
          p={"Coming Soon"}
          a={"Read More"}
        />
        <Atm
          className={"col-md-4 bus "}
          img={require('../../assets/images/hotel.png')}
          h4={"Hotel Booking"}
          p={"Coming Soon"}
          a={"Read More"}
        />
        <Atm
          className={"col-md-4 bus"}
          img={require('../../assets/images/insurance.png')}
          h4={"Insurance"}
          p={"Coming Soon"}
          a={"Read More"}
        />
        <Atm
          className={"col-md-4 bus  "}
          img={require('../../assets/images/mutual.png')}
          h4={"Mutual Fund"}
          p={"Coming Soon"}
          a={"Read More"}
        />
        <Atm
          className={"col-md-4  loan bus"}
          img={require('../../assets/images/loan.png')}
          h4={"Loan Re-Payment"}
          p={"Coming Soon"}
          a={"Read More"}
        />
        </div>
      </div>
      <Footer />
    </div>
  );
}
