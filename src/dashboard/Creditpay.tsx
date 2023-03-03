import { Customer, Footer, Navbar } from "./Component";

export function Creditpay(){
    return(
        <div className="container-fluid main">
            <Navbar />
            <Customer
            className={'col-md-12 utility text-center my-2'}
            h1={"Credit Pay"}
            p={"Service > Credit Pay"}
            />
            <div className="row m-3 py-3">
                <div className="col-md-8">
                    <p>Now you can pay your RENT or EMI from your credit card with our Creditpay service. Walk-in to any IKEDA CSP or select merchant establishments, fill in few details and pay your RENT or EMI using Credit Card, anywhere in the country.</p>
                    <h4 className=" py-3">Key Features</h4>
                    <ul><li>Pay instantly</li>
                        <li>Simple to use, Time saving and cost effective platform</li>
                        <li>Available 24x7x365</li>
                        <li>Instant confirmation to sender via SMS</li>
                        <li>Safe and secure transaction</li>
                        <li>This service is available across all the bank branches</li>
                    </ul>
                    <h4 className=" py-3">Key Benefits</h4>
                    <ul>
                        <li>Cost effective</li>
                        <li>Safe and secure transaction</li>
                        <li>Transfer to all the PSUs and Private Banks</li>
                        <li>Free SMS alerts on every transaction</li>
                        <li>Near doorstep remittance facility</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src="https://www.ikedapl.com/wp-content/uploads/2021/10/creditpay.png" alt="." />
                </div>
            </div>
            <Footer />
        </div>
    )
}