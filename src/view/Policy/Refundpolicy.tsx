import { Customer, Footer, Navbar } from "../../component/Component";

export function Refundpolicy() {
  return (
    <div className="container-fluid main">
      <Navbar />
      <Customer
        className={"col-md-12 refund-policy text-center"}
        h1={"Refund policy"}
        p={"Home > Refund policy"}
      />
      <div className="col-lg-10 mx-auto">
        <p>All sales/services are final and there will be no refund or exchange permitted. Please be advised that You are responsible for the purchase and all charges that result from those purchases.</p>
        <p>However, in a case where a transaction has been completed by you on the Site, and money has been charged to your card or bank account but has not been delivered within 15 days of your completion of the transaction then you may inform us by sending us an email on help@ikedapl.com or posting us a message on the contact us page. In such a scenario you will be entitled to a full refund. We request you to include in the email the following details -Transaction date and Order Number. IKEDA shall investigate the incident and if it is found that money was indeed charged to your card or bank account without delivery then you will be refunded the money within 7 working days from the date of the receipt of your email.</p>
        <h4>Refund Policy of Gift Card</h4>
        <p>Gift cards once purchased cannot be canceled or returned due to regulatory restrictions.</p>
      </div>
      <Footer />
    </div>
  );
}
