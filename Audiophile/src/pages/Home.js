import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Previews from "../components/Previews";

const Home = ({cartProduct, isLoggedIn}) => {

    return (
        <div>
            <Hero cartProduct={cartProduct} isLoggedIn={isLoggedIn}/>
            <Categories />
            <Previews />
            <About />
            <Footer />
        </div>
    );
}

export default Home;