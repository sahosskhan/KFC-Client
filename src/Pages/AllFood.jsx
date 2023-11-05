import { useLoaderData } from "react-router-dom";
import AllFoodCard from "./AllFoodCard";


const AllFood = () => {
    const AllFood= useLoaderData();
    console.log(AllFood);
    return (
        <div>
               <div className=" my-20 ">
        <h1 className="text-center text-6xl font-bold my-16"> <span className="text-red-500">All Available</span> Foods</h1>
     <div className="grid lg:grid-cols-3  grid-cols-1 mx-auto container gap-36">
        { AllFood?.map((items) => (
          <AllFoodCard key={items._id} items={items}></AllFoodCard>
        ))}
      </div>
     </div>
        </div>
    );
};

export default AllFood;