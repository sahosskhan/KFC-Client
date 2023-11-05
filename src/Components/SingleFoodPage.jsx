import { useLoaderData } from "react-router-dom";

const SingleFoodPage = () => {
    const items = useLoaderData();
    const { name, image,category,price,details,origin,quantity,user } = items || {};
    console.log(items);
    return (
        <div>
                        <div className="card my-20 mx-auto w-[700px] h-[500px] bg-red-50">
  <figure><img src={image} alt="Shoes" /></figure>

  <h1 className="bg-red-500 absolute text-center p-2 w-36 text-black rounded-r-xl text-xl font-bold">{category}</h1>
  
  <h2 className="text-center text-2xl font-semibold rounded-xl rounded-t-none text-black bg-amber-400 p-2 w-full">{name}</h2>
  <p className='text-lg text-black/70 mt-8 px-6 text-center'>{details}</p>
  <div className="card-body flex flex-row mx-auto text-center gap-x-[57px] justify-center items-center">
    <p className='text-2xl text-red-600 font-bold'>Price: <span className="text-black/70">{price} USD</span> </p>
    <p className='text-2xl text-red-600 font-bold'>Origin: <span className="text-black/70">{origin}</span></p>
    <p className='text-2xl text-red-600 font-bold'>Quantity: <span className="text-black/70">{quantity}</span></p>
  </div>
  <button className="btn w-1/2 my-4 mx-auto bg-red-500 text-black">Order Food</button>
  <p className="bg-red-400 p-3 text-center font-bold text-xl">Made By: {user}</p>
</div>
        </div>
    );
};

export default SingleFoodPage;