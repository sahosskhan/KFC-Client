import { Link, useLoaderData } from "react-router-dom";
import Accordion from "../Components/Accordion";
import HomeBanner from "../Components/HomeBanner";
import Featurefood from "../Components/Featurefood";
import Download from "../Components/Download";
import { Helmet } from "react-helmet-async";
import Team from "../Components/Team";


const Home = () => {
    const FoodLimitedData = useLoaderData();

    console.log(FoodLimitedData.length);
    return (
        <div>
  <Helmet>
    <title>KFC | Home</title>
  </Helmet>
         <HomeBanner></HomeBanner>
     <div className=" my-20 ">
        <h1 className="text-center text-6xl font-bold my-16"> <span className="text-red-500">Top-Selling</span> Foods</h1>
     <div className="grid xl:grid-cols-3 lg:grid-cols-2  grid-cols-1 xl:mx-auto lg:mx-5  md:mx-52 mx-5  container gap-36">
        {FoodLimitedData?.map((items) => (
          <Featurefood key={items._id} items={items}></Featurefood>
        ))}
      </div>

<div className="flex justify-center items-center mt-14">
    <Link to="/allfooditems">
<button className="btn bg-red-500  text-black">See More</button>
</Link>
</div>
     </div>
        <Accordion></Accordion>
    <Download/>
    <Team/>
        </div>
    );
};

export default Home;