import './Homepage.css';
import { Atm,Bank,Choose,Compontent, Customer, Finance, Footer, Navbar, Playstore } from "./Component";

export function Homepage(){
    return(
        <div className="container-fluid main  mx-0">
          <Navbar />
          <Compontent
            class={'row tech mx-0 px-0'}
            className1={'col-md-5 space my-5'}
            h1={"Elevating the change in"}
            h4={"Finance Technology Space"}
            p={"Quickly go live with PayPe and experience the future of payments with the simplest integration, totally online onboarding, feature-rich checkout, and best-in-class speed. The future of digital payment is here!"}
            a={"Login"}
            a1={"Contact Us"}
            className={"col-md-7 my-5"}
            img={"https://www.india-briefing.com/news/wp-content/uploads/2021/12/What-Trends-are-Leading-Indias-Fintech-Revolution.jpg"}            
         />
         <div className='ikede my-5'>
            <h1 className="text-center  iket my-5">Service</h1>
            <h1 className="text-center  ike my-5">PayPe Business Segments</h1>
         </div>
         <div className='row justify-content-evenly atm mx-0 px-0 text-center my-5'>
                <Atm 
                className='col-md-5 my-3 aeps'
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Bills_Cards-06-1536x768.png"}
                h1={"mATM"}
                p={"PayPe Pvt. Ltd is a leading service provider of micro ATM. We offer micro ATM service with software and mobile application."}
                a={"Learn more"}
                />
                <Atm 
                className='col-md-5 my-3 aeps'
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Bills_Cards-07-1536x768.png"}
                h1={"AEPS"}
                p={"PayPe Pvt. Offers Aadhar Enabled Payment software & AEPS API integration services for all your business needs all over India, our AEPS system offers many Feature: Balance Enquiry, Cash .."}
                a={"Learn more"}
                />
                <button className='load p-2 col-3 my-3'><i className="fa-solid fa-arrow-right"></i> Load more</button> 
         </div>
         <Finance 
         className={"col-md-5"}
         img={"https://media.istockphoto.com/id/182792679/photo/full-length-of-business-colleagues-standing-together-against-white.jpg?s=612x612&w=0&k=20&c=Ca0tului1ZxkAjHY-qWPNN25fmQWMWFsdZlDPZmDGUs="}
         className1={"col-md-7 welcome my-5"}
         h1={"About"}
         h3={"Welcome to Finance Tech: PayPe"}
         p={"Since its inception, PayPe Pvt. Ltd has been at the frontline of the payments revolution, an attitude that has helped it become a major worldwide leader in payments technology and transaction processing."}
         li={"Founded in 2019, with dedicated team of professionals"}
         li1={"Our team works with an energy and excitement that stems from emotional involvement with the organization, which makes work enjoyable and motivates everyone to do their best."}
         h11={"150K"}
         p1={"Transaction"}
         h12={"11K"}
         p12={"Quality Customers"}
         h13={'35'}
         p13={"Trusted Partners"}
         />
            <h1 className='fw-bold text-center choose'>Why Choose Us</h1>
            <div className='row justify-content-space-between icon mx-0 my-4'>
            <Choose 
            class={'col-md-4 item'}
            in={'fa fa-computer p-3 col-3'}
            h5={"Easy to Use "}
            p={"Create a banking or payments platform that works with both traditional and new channels. PayPe provides the most extensive set of payment methods, with banking facilities available through UPI, mobile wallets, Debit cards & Credit cards."}
            />
            <Choose 
            class={'col-md-4 item'}
            in={'fa fa-desktop p-3  col-3'}
            h5={"Dashboard "}
            p={"PayPe provide An effective and easy business dashboard is a type of business intelligence tool. A dashboard is a type of graphical representation of the KPIs or metrics that impact whether you achieve your business strategy’s goals. "}
            />
            <Choose 
            class={'col-md-4 item'}
            in={'fa fa-handshake p-3 col-3'}
            h5={"Designed for Developers "}
            p={"APIs, plugins, and libraries that are robust, clean, and developer friendly for all major languages and platforms, allowing you to focus on creating exceptional things, because for PayPe your safe payment is our top most priority.  "}
            />
            <Choose 
            class={'col-md-4 item'}
            in={'fa fa-file p-3 col-3'}
            h5={" Report"}
            p={"PayPe provide daily, weekly, monthly and yearly reports like daily Financial transaction, payment details, your order details and many more "}
            />
            <Choose 
            class={'col-md-4 item'}
            in={'fa fa-certificate p-3  col-3'}
            h5={"24*7 Support"}
            p={"24/7 support services are here to ensure our customers' success and business productivity – whether for on-site assistance, technical, or remote support. "}
            />
            <Choose 
            class={'col-md-4 item'}
            in={'fa fa-indian-rupee-sign p-3 col-3'}
            h5={"Secure Payment"}
            p={"PCI DSS Level 1 compliance, as well as regular third-party audits and a dedicated internal security team, ensure that your data is always secure.  "}
            />
            </div>
            <div className='row customer  mx-0'>
                <Customer
                className={"col-md-3 number"} 
                h1={"11K"}
                p={"Customer"} />
                <Customer 
                className={"col-md-3 number"}
                h1={"150K"}
                p={"Transaction"} />
                <Customer 
                className={"col-md-3 number"}
                h1={"7Cr"}
                p={"Commission Distribute"} />
                <Customer 
                className={"col-md-3 number"}
                h1={"28"}
                p={"States Cover"} />
            </div>
            <div className='row my-5 play mx-0'>
                <Playstore 
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Website_Phone.png"}
                h1={'Download Our App!'}
                h6={"Download our pocket friendly Mobile App for all essential services"}
                img1={"https://www.ikedapl.com/wp-content/uploads/2021/10/Playstore-Button.png"} />
             </div>
         <h1 className='fw-bold'>Take a look at our partners</h1>
          <div className='row justify-content-around'>
            <Bank 
            class={'col-md-2'}
            img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Partners-Logos_0006_BBPS_Logo-1536x864.png"}
            />
            <Bank 
            class={'col-md-2'}
            img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Partners-Logos_0005_Redbus-1536x864.png"}
            />
            <Bank 
            class={'col-md-2'}
            img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Partners-Logos_0004_Pay-U-1536x864.png"}
            />
            <Bank 
            class={'col-md-2'}
            img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Partners-Logos_0003_SBI-1536x864.png"}
            />
            <Bank 
            class={'col-md-2'}
            img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Partners-Logos_0000_airtel-bank-1536x864.png"}
            />
          </div>
          <div className='ikede my-5'>
            <h1 className="text-center fw-bold  iket my-5">Review</h1>
            <h1 className="text-center fw-bold ike my-5">Clients' Testimonials</h1>
         </div>
          <div className='d-flex my-3 py-3 testimonial '>
            <Bank 
            class={"col-10"}
            p={"“Services in PayPe is really good and the best part of PayPe is support service is best.”"}
            img={'https://www.ikedapl.com/wp-content/uploads/2021/09/user.jpg'}
            h5={"Jay shah"}
            p1={"self employed,Gurat"}
            />
            <Bank 
            class={"col-10"}
            p={"“Services in PayPe is really good and the best part of PayPe is support service is best.”"}
            img={'https://www.ikedapl.com/wp-content/uploads/2021/09/user.jpg'}
            h5={"Jay shah"}
            p1={"self employed,Gurat"}
            />
            <Bank 
            class={"col-10"}
            p={"“Services in PayPe is really good and the best part of PayPe is support service is best.”"}
            img={'https://www.ikedapl.com/wp-content/uploads/2021/09/user.jpg'}
            h5={"Jay shah"}
            p1={"self employed,Gurat"}
            />
            
           </div>
           <Footer />
         </div>
    )
}