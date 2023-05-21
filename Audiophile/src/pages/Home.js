import About from "../components/About";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Previews from "../components/Previews";

const Home = ({cartProduct, isLoggedIn, fullname, email, handleLogout, screenSize}) => {

    return (
        <div>
            <Hero cartProduct={cartProduct} isLoggedIn={isLoggedIn} fullname={fullname} email={email} handleLogout={handleLogout} screenSize={screenSize}/>
            <Categories />
            <Previews screenSize={screenSize}/>
            <About screenSize={screenSize}/>
            <Footer />
        </div>
    );
}

export default Home;