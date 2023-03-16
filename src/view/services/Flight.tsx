import { Customer, Footer, Navbar } from "../../component/Component";

export function Flight() {
  return (
    <div className="container-fluid main">
      <Navbar />
      <Customer
        className={"col-md-12 flight text-center"}
        h1={"Flight Ticket"}
        p={"Service > Flight Ticket"}
      />
      <div className="row m-4">
        <div className="col-md-8 ">
          <p>
            PayPe.com is a reliable travel agent of India, which offers great
            deals on air tickets. Book flights for all destinations across India
            or world at the lowest airfares with us. As one of the leading
            travel portals of India, we constantly endeavour to make your
            vacation memorable. So, why to go anywhere else? Call us to save big
            on all kinds of travel products and services and have a memorable
            travel experience in a small budget. We believe in creating awesome
            vacations for our clients through customized holiday packages &
            tours. Enjoy great saving on flights, hotels, and holiday trip with
            PayPe.com.
          </p>
          <p>
            Cheap flights are available at PayPe.com, one of the leading travel
            portals of India. The company offers great discounts on domestic and
            international flight tickets. Being a reliable name in travel
            industry of India, we focus on providing smooth flight booking
            experience to our customers. So, book air tickets at the lowest
            airfare by planning your trip with us. You can also get all relevant
            information like how to get the boarding passes, difference between
            airline tickets and boarding pass tickets, flight status, arrival
            and departure times of the flights, web check-in and various
            information one needs to have before traveling.
          </p>
          <p>
            If you want to book your plane tickets at no convenience fee and
            looking for transparency in air ticket pricing, we are here to serve
            you with best possible offers. To reduce your flight booking cost,
            we have tied up with several banking partners. You can avail the
            best flight ticket booking deals for all major low-cost carriers of
            India and abroad with us. Last minute discounts on air ticket
            booking are also available with us. So, go for a journey of your
            preferred destinations with the best airfare discounts.
          </p>
          <Customer
            className={"col-md-12"}
            h4={"How do you find the cheapest airfare?"}
            p={
              "To find the cheapest airfare, you can visit our site or download the app and enter your departure and arrival cities and find out the cheapest days to fly with our fare calendar. In compared to full-service carriers, low-cost airlines offer cheaper fares. By considering budget airlines, you can do great savings on airline tickets."
            }
          />
          <Customer
            className={"col-md-12"}
            h4={"What is the best day of the week to buy plane tickets?"}
            p={
              "As per previous findings, the best day to book cheapest flight tickets was Tuesday, but it’s not anymore. As a greater number of business travellers has started booking their flights during the week, the best day to buy those tickets is now Sunday. To avail more savings on flight tickets, try to book on a Sunday that is more than 21 days ahead of your trip."
            }
          />
          <Customer
            className={"col-md-12"}
            h4={"Is it cheaper to book flights last minute?"}
            p={
              "There is a popular belief that if you book flights in advance, your air tickets will be cheaper. However, contrary to the popular belief, booking airline tickets late is often cheaper. As per the research, flight tickets are generally cheaper if booked three weeks before departure than tickets booked 6 months ahead. But this is not necessary. The price of flights fluctuates daily or even hourly in various cases. Many times, it changes due to the increasing demand of a particular route by the passengers. So, sometimes flights get cheaper while traveling closer to the travel date and in some cases, it gets expensive."
            }
          />
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid"
            src={require("../../assets/images/flight.png")}
            alt="."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
