import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import AddedFood from "./AddedFood";

const MyaddedFood = () => {
    const { user} = useContext(AuthContext);
    const MyAddFood = useLoaderData()
    // console.log(MyAddFood);
const userFood = MyAddFood.filter(food =>food?.email === user.email) ;
console.log(userFood);
if(userFood?.length==0){
    return <div>
       <section className="bg-white dark:bg-gray-900 ">
    <div className="container flex items-center h-[554px] px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Opps! 204 No Food</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Currently You Are Not Add Any Food.</p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
<Link to="/addfood">
                <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-red-500 rounded-lg shrink-0 sm:w-auto hover:bg-red-600 dark:hover:bg-red-500 dark:bg-red-600">
                    Please Add Food
                </button>
                </Link>
            </div>
        </div>
    </div>
</section>
    </div>
}

    return (
        <div>
 <div className="grid lg:grid-cols-2  grid-cols-1 lg:mx-96 md:mx-48 mx-14 gap-28 my-20">
        {userFood?.map((food) => (
          <AddedFood key={food._id} food={food}></AddedFood>
        ))}
      </div>
        </div>
    );
};

export default MyaddedFood;