import {
  Headslide,
  Footer,
  Frequently,
  Navbar,
} from "../../component/Component";

export function Aeps() {
  return (
    <div className="container-fluid main">
      <Navbar />
      <div className="aeps-system  ">
      <Headslide
        class={"row recharge-text"}
        className1={"col-md-7 my-5 px-5"}
        h4={"AADHAAR ENABLED PAYMENT SYSTEM (Aeps)"}
        p={
          "PayPe AEPS service enables our customers for hassle free, secure and biometric authenticated cash withdraw, balance enquiry and mini statement from their UIDAI linked bank account"
        }
        p1={"Home > Service > Aeps"}
        className={"col-md-5"}
        img={require("../../assets/images/aeps.png")}
      />
      </div>
      <div className="aeps-page col-lg-10  mx-auto">
      <div className="row m-3">
        <div className="col-md-7 about-aeps">
          <h3>About AePS</h3>
          <p>Cardless Secure Cash Withdrawal!</p>
          <p>
            <strong>Aadhaar enabled Payment System</strong> (Aeps) is a safe,
            secure payment method provided by the <strong>NPCI</strong> that
            allows customers to withdraw cash and avail other basic banking
            benefits such as balance enquiry.
          </p>
          <ul>
            <li>
              AePS is a bank led model which allows online interoperable
              financial inclusion transaction at PoS (MicroATM) through the
              Business correspondent of any bank using the Aadhaar
              authentication.AePS allows you to do six types of transactions.
            </li>
            <li>
              The only inputs required for a customer to do a transaction under
              this scenario are:-
            </li>
            <ol>
              <li>Bank Name</li>
              <li>Aadhaar Number</li>
              <li>Fingerprint captured during enrollment.</li>
            </ol>
          </ul>
          <p>
            PayPe is <strong>Aeps service provider company</strong> with a
            robust platform for Aadhaar Payment System, which allows online
            interoperable financial transactions at PoS (Point of Sale). PayPe{" "}
            <strong> AePS Cash Withdrawal</strong> is often paired with an
            Aadhaar biometric device which is used to authenticate the
            transaction.
          </p>
          <p>
            Aadhaar Fingerprint Scanner and Aadhar Iris Scanner are most used to
            authenticate the biometric information of a person.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="img-fliud"
            src={require('../../assets/images/aadhar.png')}
            alt="."
            width={"100%"}
          />
        </div>
      </div>
      <img
        className="img-fluid"
        src={require('../../assets/images/aepss.png')}
        alt="."
      />
      <div className="row justify-content-around bank-service my-5">
        <div className="col-md-5">
          <h3>Banking Services Offered by AePS</h3>
          <p>
            Cash Deposit
            <br />
            Cash Withdrawal
            <br />
            Balance Enquiry
            <br />
            Mini Statement
            <br />
            Aadhaar to Aadhaar Fund Transfer
            <br />
            Authentication
          </p>
        </div>
        <div className="col-md-5">
          <h3>Other Services offered by AePS:</h3>
          <p>
            eKYC
            <br />
            Best Finger detection
            <br />
            Tokenization
            <br />
            Aadhaar Seeding Status
          </p>
        </div>
      </div>
      <h3>Frequently Asked Questions (FAQs)</h3>
      <Frequently
        button={"What is AEPS?"}
        cardbody={
          "AePs means Aadhaar Enabled Payment System, a new payment service offered by the NPCI to banks and financial institutions using ‘Aadhaar’.Aadhaar is a unique identification number issued by the UIDAI.In banking AEPS means empowerment where the provider allows a bank customer to use Aadhaar as his/her identity to access his/ her respective Aadhaar enabled bank account and perform basic intrernat banking, like Balance Enquiry, Cash Deposit, Cash Withdrawal.For all transactions, retailers ask for customers Aadhaar number and scan customer’s fingerprint using a biometric scanner attached to PayPe Portal AEPS Software. A transaction will be successful only when the Aadhaar authentication is successful."
        }
      />
      <Frequently button={"Is there any charges for Aeps?"} cardbody={"NO"} />
      <Frequently
        button={
          "What is the maximum amount that can be withdrawn through AEPS?"
        }
        cardbody={"₹ 10,000 can be withdrawn through AEPS."}
      />
      <Frequently
        button={"Who can avail Aeps?"}
        cardbody={
          "All Indians who have Aadhar card and are Aadhar number linked with bank account."
        }
      />
      <Frequently
        button={"Which Aeps service best?"}
        cardbody={"PayPe's AePS service is best in whole India."}
      />
      <Frequently
        button={"How do I become an AEPS agent?"}
        cardbody={"PayPe provide free AePS registration, you can join."}
      />
      </div>
      <Footer />
    </div>
  );
}
