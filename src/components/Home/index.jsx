import Hero from "..//Hero";
import About from "..//About";
import Footer from "..//Footer";
import Instagram from "..//Instagram";
import FeaturedProduct from "../FeaturedProduct";
import Testimonials from "../Testimonials";
import FullCatalogue from "../FullCatalogue";
import Reviews from "../Reviews";

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedProduct />
            <About />
            <Testimonials />
            <FullCatalogue />
            <Reviews />
            <Instagram />
            <Footer />
        </>
    )
}

export default Home;