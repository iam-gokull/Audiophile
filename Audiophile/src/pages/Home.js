import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Previews from "../components/Previews";

const Home = () => {

    return (
        <div>
            <Hero />
            <Categories />
            <Previews />
            <About />
            <Footer />
        </div>
    );
}

export default Home;