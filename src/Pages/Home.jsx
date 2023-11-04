import Accordion from "../Components/Accordion";
import Contact from "../Components/Contact";
import HomeBanner from "../Components/HomeBanner";


const Home = () => {
    return (
        <div>
         <HomeBanner></HomeBanner>
        <Accordion></Accordion>
        <Contact></Contact>
        </div>
    );
};

export default Home;