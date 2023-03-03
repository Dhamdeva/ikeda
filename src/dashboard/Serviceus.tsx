import { Atm, Customer, Footer, Navbar, Playstore } from "./Component";

export function Serviceus(){
    return(
        <div className="container-fluid main">
            <Navbar />
            <Customer
            className={'col-md-12 utility text-center my-2'}
            h1={"Our Services"}
            p={"Home > Our Services"}
            />
            <div className="row justify-content-around mx-0 service-atm">
                <Atm className={"col-md-5 micro my-5"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Bills_Cards-06-1536x768.png"}
                h4={"Micro ATM (mATM)"}
                p={"When we run out of cash and need to make a payment, we frequently can’t find an ATM nearby. Ikeda provides a cash withdrawal option through its retail locations to address this issue. Whether it’s making a payment for products or services you’ve purchased or withdrawing"} 
                a={'Read More'}
                />
                <Atm className={"col-md-5 my-5 micro"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Bills_Cards-07-1536x768.png"}
                h4={"Aadhaar Enabled Payment System (Aeps)"}
                p={"AePS is a bank led model which allows online interoperable financial inclusion transaction at PoS (MicroATM) through the Business correspondent of any bank using the Aadhaar authentication.AePS allows you to do six types of transactions."} 
                a={'Read More'}
                />
            </div>
            <div className="row justify-content-around  mx-0 service-atm">
                <Atm
                className={"col-md-4 my-3 micro"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/iKeda-Mobile-Recharge-Banner-October-12.png"}
                h4={"Mobile Recharge"}
                p={"Ikedapl.com is a leading pre-paid mobile recharge website in INDIA- On Ikedapl.com B2B Retailers and users can recharge prepaid mobile online. Ikedapl.com is the safest way to prepaid recharge for all Indian providers."}
                a={'Read More'} />
                <Atm
                className={"col-md-4 my-3 micro"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/iKeda-Mobile-DTH-October-12.png"}
                h4={"DTH Recharge"}
                p={"Recharge facilitates recharging of prepaid DTH account for operators like Dish TV, Big TV, Sun Direct, Videocon D2H and Tata Sky. Ikedapl in makes for a very convenient way to recharge all DTH in INDIA. website also allows you to manage your B2B wallet."} 
                a={'Read More'}/>
                <Atm
                className={"col-md-4 my-3 micro"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/iKeda-Services_Electricity-October-12.jpg"}
                h4={"Utility Bill Payment"}
                p={"We are a one stop solution for all your utility related payments. Pay safe and easily from our portal to have hassle-free transactions. We ensure greater reliability with direct interactions across banks, cards, and wallets."} 
                a={'Read More'}/>
            </div>
            <div className='row my-5 play mx-0 '>
                <Playstore 
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/Website_Phone.png"}
                h1={'Download Our App!'}
                h6={"Download our pocket friendly Mobile App for all essential services"}
                img1={"https://www.ikedapl.com/wp-content/uploads/2021/10/Playstore-Button.png"} />
             </div>
             <h1 className="fw-bold text-center">Our Upcoming Services</h1>
             <div className="row justify-content-around mx-0 service-atm">
             <Atm
                className={"col-md-4 my-3 micro"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/iKeda-Services-Banner-October-11_0002_Bus-Booking.png"}
                h4={"Bus Booking"}
                p={"Coming Soon"}
                a={'Read More'} />
                <Atm
                className={"col-md-4 my-3 micro"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/iKeda-Services-Banner-October-11_0001_Flight-Booking.png"}
                h4={"Flight Booking"}
                p={"Coming Soon"}
                a={'Read More'} />
                <Atm
                className={"col-md-4 my-3 micro"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/iKeda-Services-Banner-October-11_0000_Hotel-Booking.png"}
                h4={"Hotel Booking"}
                p={"Coming Soon"}
                a={'Read More'} />
                <Atm
                className={"col-md-4 my-3 micro"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/iKeda-Services_Insurance-October-12.jpg"}
                h4={"Insurance"}
                p={"Coming Soon"}
                a={'Read More'} />
                <Atm
                className={"col-md-4 my-3 micro"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/iKeda-Services_Mutual-Funds-October-12.jpg"}
                h4={"Mutual Fund"}
                p={"Coming Soon"}
                a={'Read More'} />
                <Atm
                className={"col-md-4 my-3 micro"}
                img={"https://www.ikedapl.com/wp-content/uploads/2021/10/iKeda-Services_Loan-Payment-October-12.jpg"}
                h4={"Loan Re-Payment"}
                p={"Coming Soon"} 
                a={'Read More'}/>
             </div>
             <Footer />
        </div>
    )
}