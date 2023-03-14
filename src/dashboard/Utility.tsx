import { Atmlist, Customer, Footer, Navbar } from "./Component";

export function Utility(){
    return(
        <div className="=container-fluid mx-0 px-3 main">
            <Navbar />
            <Customer
            className={'col-md-12 utility text-center'}
            h1={"Utility Bill Payment"}
            p={"Service > Utility Bill Payment"}
            />
            <div className="row my-5">
                <div className="col-md-8 ">
                    <p>We are a one stop solution for your all utility bills. Pay safe and easily from our portal to have hassle-free transactions. We ensure greater reliability with direct interactions across banks, cards, and wallets.</p>
                    <h6>Hassle free payment</h6>
                    <h6>Secure and verified payment portal</h6>
                    <h6>Pay all your utility bills within a minute</h6>
                <Atmlist 
                className={"col-md-10 my-4"}
                h3={"Service Provider Category"}
                li={'Electricity'}
                li1={'Gas / LPG'}
                li2={'Insurance premium'}
                li3={'Landline'}
                li4={'Mobile Postpaid'}
                li5={'Municipal Tax'}
                li6={'Broadband'}
                />
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={require("../assets/images/utility.png")} alt="." />
                </div>
            </div>
            <Footer />
        </div>
    )
}