import {
  Navbar,
  Atm,
  Finance,
  Choose,
  Customer,
  Playstore,
  Bank,
  Footer,
  Headslide,
} from "../../component/Component";
import "../home/Homepage.css";

export function Homepage() {
  return (
    <div className="container-fluid main p-0 bg-">
      <Navbar />
      <div className="home-page col-lg-10 mx-auto ">
        <Headslide
          h1={"Elevating the change in"}
          h4={"Finance Technology Space"}
          p={
            "Quickly go live with PayPe and experience the future of payments with the simplest integration, totally online onboarding, feature-rich checkout, and best-in-class speed. The future of digital payment is here!"
          }
          a={"Login"}
          a1={"Contact Us"}
          img={require('../../assets/images/fin.png')}
        />
        <div className="ikede">
          <h1 className="text-center  iket my-5">Service</h1>
          <h1 className="text-center  ike my-5">PayPe Business Segments</h1>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly text-center p-2">
          <Atm
            className=" col-md-5 col-xl-4 aeps"
            img={require("../../assets/images/matm.png")}
            h1={"mATM"}
            p={
              "PayPe Pvt. Ltd is a leading service provider of micro ATM. We offer micro ATM service with software and mobile application."
            }
            a={"Learn more"}
          />
          <Atm
            className=" col-md-5 col-xl-4 aeps"
            img={require("../../assets/images/aeps.png")}
            h1={"AEPS"}
            p={
              "PayPe Pvt. Offers Aadhar Enabled Payment software & AEPS API integration services for all your business needs all over India, our AEPS system offers many Feature: Balance Enquiry, Cash .."
            }
            a={"Learn more"}
          />
          <button className="load col-8">
            <i className="fa-solid fa-arrow-right"></i> Load more
          </button>
        </div>

        <div className="py-5">
          <Finance
            className={"col-md-5 d-flex align-items-center"}
            img={require('../../assets/images/profesh.png')}
            className1={"col-md-7 welcome my-5"}
            h1={"About"}
            h3={"Welcome to Finance Tech: PayPe"}
            p={
              "Since its inception, PayPe Pvt. Ltd has been at the frontline of the payments revolution, an attitude that has helped it become a major worldwide leader in payments technology and transaction processing."
            }
            li={"Founded in 2019, with dedicated team of professionals"}
            li1={
              "Our team works with an energy and excitement that stems from emotional involvement with the organization, which makes work enjoyable and motivates everyone to do their best."
            }
            h11={"150K"}
            p1={"Transaction"}
            h12={"11K"}
            p12={"Quality Customers"}
            h13={"35"}
            p13={"Trusted Partners"}
          />
        </div>
        <h1 className="fw-bold text-center choose">Why Choose Us</h1>
        <div className="d-flex flex-wrap justify-content-space-between icon mx-0 my-4 ">
          <Choose
            class={"col-md-4 item"}
            in={"fa fa-computer  col-3"}
            h5={"Easy to Use "}
            p={
              "Create a banking or payments platform that works with both traditional and new channels. PayPe provides the most extensive set of payment methods, with banking facilities available through UPI, mobile wallets, Debit cards & Credit cards."
            }
          />
          <Choose
            class={"col-md-4 item"}
            in={"fa fa-desktop   col-3"}
            h5={"Dashboard "}
            p={
              "PayPe provide An effective and easy business dashboard is a type of business intelligence tool. A dashboard is a type of graphical representation of the KPIs or metrics that impact whether you achieve your business strategy’s goals. "
            }
          />
          <Choose
            class={"col-md-4 item"}
            in={"fa fa-handshake  col-3"}
            h5={"Designed for Developers "}
            p={
              "APIs, plugins, and libraries that are robust, clean, and developer friendly for all major languages and platforms, allowing you to focus on creating exceptional things, because for PayPe your safe payment is our top most priority.  "
            }
          />
          <Choose
            class={"col-md-4 item"}
            in={"fa fa-file  col-3"}
            h5={" Report"}
            p={
              "PayPe provide daily, weekly, monthly and yearly reports like daily Financial transaction, payment details, your order details and many more "
            }
          />
          <Choose
            class={"col-md-4 item"}
            in={"fa fa-certificate   col-3"}
            h5={"24*7 Support"}
            p={
              "24/7 support services are here to ensure our customers' success and business productivity – whether for on-site assistance, technical, or remote support. "
            }
          />
          <Choose
            class={"col-md-4 item"}
            in={"fa fa-indian-rupee-sign  col-3"}
            h5={"Secure Payment"}
            p={
              "PCI DSS Level 1 compliance, as well as regular third-party audits and a dedicated internal security team, ensure that your data is always secure.  "
            }
          />
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-center customer py-5">
          <Customer
            className={"col-5 col-sm-3 number"}
            h1={"11K"}
            p={"Customer"}
          />
          <Customer
            className={"col-5 col-sm-3 number"}
            h1={"150K"}
            p={"Transaction"}
          />
          <Customer
            className={"col-5 col-sm-3 number"}
            h1={"7Cr"}
            p={"Commission Distribute"}
          />
          <Customer
            className={"col-5 col-sm-3 number"}
            h1={"28"}
            p={"States Cover"}
          />
        </div>
        <div className="d-flex flex-wrap my-5 mx-0">
          <Playstore
            img={require('../../assets/images/mobile.png')}
            h1={"Download Our App!"}
            h6={
              "Download our pocket friendly Mobile App for all essential services"
            }
            img1={require('../../assets/images/Playstore.png')}
          />
        </div>
        <h1 className="fw-bold">Take a look at our partners</h1>
        <div className="row justify-content-around">
          <Bank
            class={"col-md-2"}
            img={require("../../assets/images/bbps.png")}
          />
          <Bank
            class={"col-md-2"}
            img={require("../../assets/images/redbus.png")}
          />
          <Bank
            class={"col-md-2"}
            img={require("../../assets/images/payu.png")}
          />
          <Bank
            class={"col-md-2"}
            img={require("../../assets/images/sbi.png")}
          />
          <Bank
            class={"col-md-2"}
            img={require("../../assets/images/airtel.png")}
          />
        </div>

        <div className="ikede my-5">
          <h1 className="text-center fw-bold  iket my-5">Review</h1>
          <h1 className="text-center fw-bold ike my-5">
            Clients' Testimonials
          </h1>
        </div>
        <div className="d-flex pb-5 testimonial">
          <Bank
            class={"child-testimonial col-10"}
            p={
              "“Services in PayPe is really good and the best part of PayPe is support service is best.”"
            }
            img={require('../../assets/images/user.png')}
            h5={"Jay shah"}
            p1={"self employed,Gurat"}
          />
          <Bank
            class={"child-testimonial col-10"}
            p={
              "“Services in PayPe is really good and the best part of PayPe is support service is best.”"
            }
            img={require('../../assets/images/user.png')}
            h5={"Jay shah"}
            p1={"self employed,Gurat"}
          />
          <Bank
            class={"child-testimonial col-10"}
            p={
              "“Services in PayPe is really good and the best part of PayPe is support service is best.”"
            }
            img={require('../../assets/images/user.png')}
            h5={"Jay shah"}
            p1={"self employed,Gurat"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
