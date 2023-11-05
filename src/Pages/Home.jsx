import { useLoaderData } from "react-router-dom";
import Accordion from "../Components/Accordion";
import Contact from "../Components/Contact";
import HomeBanner from "../Components/HomeBanner";
import Featurefood from "../Components/Featurefood";


const Home = () => {
    const FoodLimitedData = useLoaderData();

    console.log(FoodLimitedData.length);
    return (
        <div>
  
         <HomeBanner></HomeBanner>
     <div className=" my-20 ">
        <h1 className="text-center text-6xl font-bold my-16"> <span className="text-red-500">Top-Selling</span> Foods</h1>
     <div className="grid lg:grid-cols-3  grid-cols-1 mx-auto container gap-36">
        {FoodLimitedData?.map((items) => (
          <Featurefood key={items._id} items={items}></Featurefood>
        ))}
      </div>

<div className="flex justify-center items-center mt-14">
<button className="btn bg-red-500  text-black">See More</button>
</div>
     </div>
        <Accordion></Accordion>
        <Contact></Contact>
        </div>
    );
};

export default Home;