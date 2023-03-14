import {  Bank,Choose, Compontent, Customer, Footer, Founders, Navbar } from "./Component";
import './Homepage.css';

export function Aboutus(){
    return(
        <div className="container-fluid main">
            <Navbar />
            <Customer
            className={'col-md-12 utility text-center my-2'}
            h1={"About us"}
            p={"Home > About us"}
            />
            <Compontent
            class={'row tech my-5'} 
            className1={"col-md-5"}
            h6={"WELCOME TO"}
            h1={"PayPe Pvt Ltd"}
            p={'Since its inception, PayPe Pvt. Ltd has been at the frontline of the payments revolution, an attitude that has helped it become a major worldwide leader in payments technology and transaction processing. We have been a genuine leader in the area, from developing next-generation payment gateways to mobile-based collections and payments systems AEPS & UPI.'}
            p1={'We assist our clients redraw the payment landscape by offering a value proposition of large-scale, social payments that are sensitive to market demand and have a lower cost of ownership. As a result, they have a well-defined strategy that will help them gain a large market share in the digital transaction ecosystem.'}
            className={"col-md-7"}
            img={require("../assets/images/thub.png")}
            />
            <div className="row justify-content-around  vision my-5 mx-0">
                <Customer 
                className={"col-md-5 mt-4 "}
                h4={"Our Vision"}
                p={"We work with a mission to provide safe and smooth omni-channel payment transactions at any time and from any location. We aim to make transactions for everyone simple and secure."}
                />
                <Customer 
                className={"col-md-5 mt-4 "}
                h4={"Our Mission"}
                p={"To be known as the premier payment and digital ecosystem partner, allowing consumers, merchants, fintechs, and banks to easily access the latest technology. We are working hard to establish ourselves as the go-to partner for digital transactions and innovations. "}
                />
            </div>
            <h1 className="fw-bold text-center my-5 ">Why Choose us</h1>
            <div className="row justify-content-around mx-0 text-center whychoose">
                <Choose 
                class={"col-md-3 account"}
                in={"fa fa-trophy p-3 col-3 "}
                h5={"Intergrity"}
                p={"We are open and honest, and we always do the right thing. For digital payment service providers, a complete business software solution is available at PayPe Pvt. Ltd."}
                />
                <Choose 
                class={"col-md-3 account"}
                in={"fa fa-universal-access p-3 col-3"}
                h5={"Accountability"}
                p={"We take ownership of outcomes and deliver on our commitments. Real time money settlement and same day onboarding of members reflects our accountability for our service users. "}
                />
                <Choose 
                class={"col-md-3 account"}
                in={"fa fa-handshake p-3 col-3"}
                h5={"Customer Centricity"}
                p={"Customers are always in ourmind whatever we do. Customer centricity is our core focus at PayPe Pvt. Ltd. We offer 24*7 support, throughout the year. "}
                />
            </div>
            <div className="text-center history my-5">
                <h1>HISTORY</h1>
                <h6>OUR HISTORY</h6>
                <h3>Years of Journey</h3>
            </div>
           <div className="vh-70 text">
            <div className="testimonial-image"></div>
            <div className="tester">
            <h1 className='fw-bold text-center mt-5'>Testimonials</h1>
            <div className='d-flex my-3 py-3 testimonial mt-5'>
            <Bank 
            class={"col-10"}
            p={"“Services in PayPe is really good and the best part of PayPe is support service is best. ”"}
            img={require("../assets/images/user.png")}
            h5={"Jay shah"}
            p1={"self employed,Gurat"}
            />
            <Bank 
            class={"col-10"}
            p={"“Services in PayPe is really good and the best part of PayPe is support service is best. ”"}
            img={require("../assets/images/user.png")}
            h5={"Jay shah"}
            p1={"self employed,Gurat"}
            />
            <Bank 
            class={"col-10"}
            p={"“Services in PayPe is really good and the best part of PayPe is support service is best. ”"}
            img={require("../assets/images/user.png")}
            h5={"Jay shah"}
            p1={"self employed,Gurat"}
            />
           </div>
           </div>
           </div>
           <div className="text-center history my-5">
                <h1>OUR<br/> FOUNDER </h1>
                <h6>TEAM MEMBERS</h6>
                <h2>Founder</h2>
            </div>
            <div className="row text-center justify-content-around mx-0 px-0 founder">
                <Founders
                className={'col-md-4 mt-5 mani'}
                img={require("../assets/images/manish.png")}
                h5={"Manish"}
                p={"Founder and MD"}
                p1={"Manish  is the MD, Founder of PayPe Private Ltd. and has a proven track record on building and leading technology product and service organization with a key focus on providing top-notch customer service and focus on client relationship management."}
                icon={"fa-brands fa-linkedin-in"} />
                <Founders
                className={'col-md-4 mt-5 poor'}
                img={require("../assets/images/pooran.png")}
                h5={"Pooran"}
                p={"Co-Founder and CEO"}
                p1={"A perfect example of leading by example, Pooran  is responsible for the management of the overall operations and our company related decisions focused on customer’s welfare. He has been recognized as one of the top businessman by several business recognizers."}
                icon={"fa-brands fa-linkedin-in"} />
                <Founders
                className={'col-md-4 mt-5 raje'}
                img={require("../assets/images/rajesh.png")}
                h5={"Rajesh"}
                p={"Co-Founder and CEO"}
                p1={"Co-Founder Rajesh perfect blend of intelligence and politeness, has a proven track record of leading and building technology related products and service organization. He has a key focus on taking company to the new heights, with the social responsibility always going hand in hand."}
                icon={"fa-brands fa-linkedin-in"} />
            </div>
            <Footer />
        </div>
    )
}