
import { Helmet } from "react-helmet-async";
import AllFoodCard from "./AllFoodCard";
import { useEffect, useRef, useState } from "react";


const AllFood = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
const [page, setPage]= useState(1);

const handlePrevPage = () => {
if (page>0){
  setPage (page-1) 
}
else{
  setPage(page)
}
}
const handleNextPage = () => {
if (page >0){
  setPage (page+1)
}
else {
  setPage(page)
}
}
const searchRef = useRef(null);
  const handleSearch = () => {
    setSearch(searchRef.current.value);
  };

  useEffect(() => {
    fetch(
      `https://a11-ph-server.vercel.app/allFoods?search=${search}&page=${page}&size=${9}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [search, page, ]);
   
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
        { data.result?.map((items) => (
          <AllFoodCard key={items._id} items={items}></AllFoodCard>
        ))}
      </div>
      <div className="justify-center flex items-center mt-16">

      <div className="join ">
  <button onClick={handlePrevPage} className="join-item btn bg-red-100">prev</button>
  <button className="join-item btn bg-red-100">{page}</button>
  <button onClick={handleNextPage} className="join-item btn bg-red-100">next</button>
</div>

      </div>
     </div>
  
        </div>
    );
};

export default AllFood;