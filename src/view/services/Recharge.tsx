import { Headslide, Customer, Footer, Navbar } from "../../component/Component";

export function Recharge() {
  return (
    <div className="=container-fluid mx-0 main">
      <Navbar />
      <div className="recharge-bill">
      <Headslide
        class={"row recharge-text px-5 py-5 p-sm-md-0"}
        className1={"col-md-8 mt-5 text-right"}
        h4={"Utility Bills (Recharge)"}
        p={"Home > Service > recharge"}
        className={"col-md-4"}
        img={require("../../assets/images/mobilerecharge.png")}
      />
      </div>
      <div className="col-lg-10 mx-auto recharge-page">
      <Headslide
        class={"row my-4 mx-2"}
        className1={"col-md-7"}
        h4={"Mobile Recharge"}
        p={
          "PayPe.com is a leading pre-paid mobile recharge website in INDIA- On PayPe.com B2B Retailers and users can recharge prepaid mobile online. PayPe.com is the safest way to prepaid recharge for all Indian providers. Apart from GSM phone recharge, Online recharge is also available for CDMA prepaid mobile phones. PayPe.com has tied up with all major telecom service providers to bring convenience to you. We offer recharge for Airtel, Vodafone Idea, Reliance-Jio, Telenor, MTNL, BSNL and more. Why use PayPe.com B2b Wallet for Online Mobile Recharges? PayPe.com retailer Wallet gives you the ultimate freedom to be able to do your prepaid mobile recharge anytime and from anywhere. Whether you are travelling, on a holiday or at work, recharge as and when you wish."
        }
        className={"col-md-5"}
        img={require('../../assets/images/multirecharge.png')}
      />
      <div className="row justify-content-around">
        <Customer
          className={"col-md-5"}
          h4={"DTH Recharge"}
          p={
            "PayPe.com Recharge makes the recharge of prepaid DTH account quick and comfortable. You do not have to visit the retail outlets for getting your online DTH account recharged. Online DTH Recharge through PayPe.com Recharge facilitates recharging of prepaid DTH account for operators like Dish TV, Big TV, Sun Direct, Videocon D2H and Tata Sky. PayPe.com in makes for a very convenient way to recharge all DTH in INDIA. DTH allows consumers to stay directly connected with the broadcaster. PayPe.com is simple and easy offer its exciting range of DTH recharge services for various DTH Services. Through our website users can recharge their digital TV anytime and from anywhere in the world. What’s more, the website also allows you to manage your B2B wallet."
          }
        />
        <Customer
          className={"col-md-5"}
          h4={"DATA Recharge"}
          p={
            "Data card recharging service is another amenity that furthers in the list of the services provided by us. Through our data card recharge service, you can recharge prepaid data card connection easily and instantly for Aircel Data Card, BSNL Data Card, Idea Data Card, Reliance Net connect, Reliance Net connect. You can now recharge the prepaid data card using our online recharging facility. So, the customers can now enjoy the benefit of anytime and anywhere connectivity via Internet wirelessly. PayPe.com is a leading provider of online b2b mobile recharge offers brings to users an online platform for mobile phone recharge. We provide online data card recharge plans for different providers including Airtel, Idea, Aircel, Vodafone, Reliance and more. Retailers can recharge data card for any of the network provider."
          }
        />
      </div>
      <Customer
        className={"col-md-12 my-4 mx-2"}
        h4={"Landline Bill Payment"}
        p={
          "Your landline bill payment is just a click away with PayPe.com Trusted by over 27 million users, Free Charge is your one-stop shop for online recharge! Paying bills every month can be a real problem at times, especially when you are running short of time or have urgent meetings. Sometimes you might even have to pay a late fee due to a missed deadline and now that you know, you are on the edge; you simply can’t pay it as the bill payment office is closed. So, what is the solution? Online bill payments come as a big relief! And landline bill payment is not an exception. PayPe.com greatly reduces your troubles in such extreme situations. We offer landline bill payment for major service providers including Airtel landline, Tata landline, and MTNL landline."
        }
      />
      <img
        className="img-fluid"
        src={require("../../assets/images/rec.png")}
        alt="."
      />
      </div>
      <Footer />
    </div>
  );
}
