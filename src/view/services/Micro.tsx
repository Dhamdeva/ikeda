import {
  Atmlist,
  Headslide,
  Footer,
  Frequently,
  MicroATM,
  Navbar,
} from "../../component/Component";

export function Micro() {
  return (
    <div className="container-fluid main p-0">
      <Navbar />
      <div className="micro-atm ">
      <Headslide
        h4={"Micro/Mini ATM (mATM)"}
        p={"Home > Service > matm"}
        img={require("../../assets/images/micro.png")}
      />
      </div>
      <div className="micro-page col-lg-10 mx-auto">
      <MicroATM
        class={"row py-3 m-2 micro-content "}
        className={"col-md-8"}
        h3={"About Micro ATM"}
        h6={
          "Became an ATM & allow anybody to withdraw money through swiping debit card"
        }
        p={
          "When we run out of cash and need to make a payment, we frequently can’t find an ATM nearby. PayPe provides a cash withdrawal option through its retail locations to address this issue. Whether it’s making a payment for products or services you’ve purchased or withdrawing cash from a retail establishment, PayPe’s mPOS/MICRO ATM Device makes it all possible with remarkable ease. By swiping any bank’s Debit/ATM card, you may withdraw up to Rs.10, 000 from this gadget."
        }
        h4={"What transactions can be done by mATM"}
        li={"Cash Withdrawal (cash out from bank account)"}
        li1={"Balance Check/Enquiry"}
        li2={"Mini Statement"}
        className1={"col-md-4"}
        img={require('../../assets/images/microatm.png')}
      />
      <img
        className="img-fluid "
        src={require('../../assets/images/microatms.png')}
        alt="."
      />
      <div className="row justify-content-around atm-list mx-0 my-5">
        <Atmlist
          className={"col-md-5 my-4"}
          h3={"Micro ATM for Everyone!"}
          li={"Available at retail stores across the country"}
          li1={"No long distance traveling to find an ATM"}
          li2={"Safe and secure transactions ensured"}
          li3={"Instant cash withdrawal at your disposal"}
          li4={"Supports local stores to grow and expand"}
          li5={"No longer wait in ATM/Bank lines"}
          li6={"Find out your account balance instantly"}
        />
        <Atmlist
          className={"col-md-5 my-4"}
          h3={"Micro ATM for Retailers!"}
          li={"Portable and convenient"}
          li1={"Easy to use with no complicated set-up"}
          li2={"Attract more customers to your store"}
          li3={"Efficient management of cash-flow"}
          li4={"Earn commissions on each transaction"}
          li5={"Acts as a POS machine to accept card payments"}
          li6={"Instant settlement for all transactions"}
        />
      </div>
      <h2 className="mt-3">Frequently Asked Questions (FAQs)</h2>
      <div>
        <Frequently
          button={"What is mATM?"}
          cardbody={
            "Micro ATM is a mini atm machine which works like an atm machine, you can withdraw rupees."
          }
        />
        <Frequently
          button={"How do I become an mATM agent?"}
          cardbody={
            "PayPe provide mATM Machine and free registration, you can join."
          }
        />
        <Frequently
          button={
            "What is the maximum amount that can be withdrawn through mATM?"
          }
          cardbody={"₹ 10,000 can be withdrawn through mATM."}
        />
      </div>
      </div>

      <Footer />
    </div>
  );
}
