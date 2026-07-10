import Hero from "../components/Home/Hero";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Destinations from "../components/Home/Destinations";
import Hotels from "../components/Home/Hotels";
import Flights from "../components/Home/Flights";
import FlightOffers from "../components/Home/FlightOffers";
import Packages from "../components/Home/Packages";
import Testimonials from "../components/Home/Testimonials";
import Reviews from "../components/Reviews"
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Layout/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Destinations/>
      <Hotels/>
      <Flights/>
      <FlightOffers/>
      <Packages/>
      <Testimonials/>
      <Reviews/>
      <Newsletter/>
      <Footer/>
      
    </>
  );
}