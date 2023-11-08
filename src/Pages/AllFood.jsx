
import { Helmet } from "react-helmet-async";
import AllFoodCard from "./AllFoodCard";
import { useEffect, useRef, useState } from "react";


const AllFood = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
const searchRef = useRef(null);
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  useEffect(() => {
    fetch(
      `https://a11-ph-server.vercel.app/allFoods?search=${search}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [search]);

    // const AllFood= useLoaderData();
    // console.log(AllFood);
    return (
        <div>
           <Helmet>
    <title>KFC | All Food</title>
  </Helmet>
               <div className=" my-20 ">





        <h1 className="text-center text-6xl font-bold my-16"> <span className="text-red-500">All Available</span> Foods</h1>



        <div className="flex justify-center items-center gap-1 my-10">

        <input ref={searchRef} type="text" placeholder="type food name" className="input input-bordered input-error w-full max-w-xs" />
        <button onClick={handleSearch} className="btn btn-error">Search</button>
        </div>
     <div className="grid lg:grid-cols-3  grid-cols-1 mx-auto container gap-36">
        { data?.map((items) => (
          <AllFoodCard key={items._id} items={items}></AllFoodCard>
        ))}
      </div>
     </div>
        </div>
    );
};

export default AllFood;