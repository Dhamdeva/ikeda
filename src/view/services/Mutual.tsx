import { Customer, Footer, Navbar } from "../../component/Component";

export function Mutual() {
  return (
    <div className="container-fluid main">
      <Navbar />
      <Customer
        className={"col-md-12 mutual text-center"}
        h1={"Mutual Fund"}
        p={"Service > Mutual Fund"}
      />
      <div className="col-lg-10 mx-auto">
      <div className="row m-4">
        <div className="col-md-8 ">
          <p>
            PayPe.com is a reliable travel agent of India, which offers great
            deals on air Funds. Book Mutuals for all destinations across India
            or world at the lowest airfares with us. As one of the leading
            travel portals of India, we constantly endeavour to make your
            vacation memorable. So, why to go anywhere else? Call us to save big
            on all kinds of travel products and services and have a memorable
            travel experience in a small budget. We believe in creating awesome
            vacations for our clients through customized holiday packages &
            tours. Enjoy great saving on Mutuals, Mutuals, and holiday trip with
            PayPe.com.
          </p>
          <p>
            Cheap Mutuals are available at PayPe.com, one of the leading travel
            portals of India. The company offers great discounts on domestic and
            international Mutual Funds. Being a reliable name in travel
            industry of India, we focus on providing smooth Mutual booking
            experience to our customers. So, book air Funds at the lowest
            airfare by planning your trip with us. You can also get all relevant
            information like how to get the boarding passes, difference between
            airline Funds and boarding pass Funds, Mutual status, arrival
            and departure times of the Mutuals, web check-in and various
            information one needs to have before traveling.
          </p>
          <p>
            If you want to book your plane Funds at no convenience fee and
            looking for transparency in air Fund pricing, we are here to serve
            you with best possible offers. To reduce your Mutual booking cost,
            we have tied up with several banking partners. You can avail the
            best Mutual Fund booking deals for all major low-cost carriers of
            India and abroad with us. Last minute discounts on air Fund
            booking are also available with us. So, go for a journey of your
            preferred destinations with the best airfare discounts.
          </p>
          <Customer
            className={"col-md-12"}
            h4={"How do you find the cheapest airfare?"}
            p={
              "To find the cheapest airfare, you can visit our site or download the app and enter your departure and arrival cities and find out the cheapest days to fly with our fare calendar. In compared to full-service carriers, low-cost airlines offer cheaper fares. By considering budget airlines, you can do great savings on airline Funds."
            }
          />
          <Customer
            className={"col-md-12"}
            h4={"What is the best day of the week to buy plane Funds?"}
            p={
              "As per previous findings, the best day to book cheapest Mutual Funds was Tuesday, but it’s not anymore. As a greater number of business travellers has started booking their Mutuals during the week, the best day to buy those Funds is now Sunday. To avail more savings on Mutual Funds, try to book on a Sunday that is more than 21 days ahead of your trip."
            }
          />
          <Customer
            className={"col-md-12"}
            h4={"Is it cheaper to book Mutuals last minute?"}
            p={
              "There is a popular belief that if you book Mutuals in advance, your air Funds will be cheaper. However, contrary to the popular belief, booking airline Funds late is often cheaper. As per the research, Mutual Funds are generally cheaper if booked three weeks before departure than Funds booked 6 months ahead. But this is not necessary. The price of Mutuals fluctuates daily or even hourly in various cases. Many times, it changes due to the increasing demand of a particular route by the passengers. So, sometimes Mutuals get cheaper while traveling closer to the travel date and in some cases, it gets expensive."
            }
          />
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid"
            src={require('../../assets/images/mutual.png')}
            alt="."
          />
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
