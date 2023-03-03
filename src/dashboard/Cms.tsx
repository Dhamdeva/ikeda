import { Compontent, Footer, Navbar } from "./Component";

export function Cms(){
    return(
        <div className="container-fluid   main">
            <Navbar />
            <Compontent
            class={"row recharge-text px-5 py-5 p-sm-md-0 my-4"}
            className1={"col-md-8 mt-5 text-right"}
            h4={"Cash Management Services (CMS)"}
            p={"IKEDA Cash Management Services (CMS) is leveraging on this opportunity by bringing the benefits of this digital integration to its corporate and customers."}
            p1={'Home > Service > CMS'}
            className={"col-md-4"}
            img={"https://www.ikedapl.com/wp-content/uploads/2021/12/rupee-white-300x300.png"}
            />
            <div className="row m-4">
                <div className="col-md-7">
                    <p>The Digital India is a great initiative to revolutionize conventional methods and integrate digital technology. It is enabling banks to provide solutions to corporate, which is triggering cashless mode of transaction.</p>
                    <p>This has provided an unprecedented opportunity for corporate to digitizing their financial transaction and benchmark treasury management with the best-in-class practices.</p>
                    <p>IKEDA Cash Management Services (CMS) is leveraging on this opportunity by bringing the benefits of this digital integration to its corporate and customers.</p>
                    <p>The product aims at creating a digital eco-system for the customers through a seamlessly connectivity with their customers, suppliers, employees, and revenue departments for the exchange of financial information and transaction.</p>
                    <p>The Cash Management System (CMS) coupled with IKEDA unmatched branch network will enable the corporates to accelerate their receivables, enhance control over their payments and enable just in time funding.</p>
                    <p>The cash management services enable faster realization of fund and thus giving the ability to sell more while lowering need for working capital and knowing which invoices have got paid.</p>
                    <p>CMS is now available at IKEDA web Portal, currently allow IKEDA Retailers and distributer, Channel Partner to accept payments of various billers.</p>
                    <p>Now accept your customer’s loan EMIs and get instant credit in their respective biller account.</p>
                    <p>IKEDA is proving attractive Instant Commissions on CMS service.</p>
                    <p>Cash Management System benefits the agent network in rural and semi urban area to keep requisite cash within their outlets for cash out services.</p>
                    <p>CMS Services</p>
                    <p>The system allow 70+ cash collecting service like Zomato and Swiggy, Home Credit, Bundl technologies, DMI Finance, Hero Finco, And many more.</p>
                    <p>Become a Retailer and earn upto RS 1 lac per month.</p>
                </div>
                <div className="col-md-5">
                    <img className="img-fluid" src="https://www.ikedapl.com/wp-content/uploads/2021/12/Untitled-design-28-1024x1024.png" alt="." />
                </div>
            </div>
            <img className="img-fluid" src="https://www.ikedapl.com/wp-content/uploads/2021/12/CMS-Website_Dec-20_Banner-1536x432.jpg" alt="." />
            <Footer />
        </div>
    )
}