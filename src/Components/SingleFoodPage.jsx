

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2"; // Import Swal library
import { AuthContext } from "../Firebase/AuthProvider";
import { motion } from 'framer-motion';


const SingleFoodPage = () => {
    const { user : loginUser } = useContext(AuthContext);
    console.log(loginUser.email);
    
    const items = useLoaderData();
    const {_id, name, image, category, price, details, origin, quantity, user,email } = items || {};
    console.log(email);
    const handleOrderButtonClick = () => {
        if (quantity === 0) {
            Swal.fire({
              icon: "warning",
              title: "Sorry",
              text: "You cannot order this food because it is no available now.",
              confirmButtonText: "OK",
            });
          } else if (email === loginUser.email) {
            Swal.fire({
              icon: "warning",
              title: "Order Restriction",
              text: "You cannot order your own added food.",
              confirmButtonText: "OK",
            });
          } else {
            window.location.href = `/singleordering/${_id}`;
          }

      }

  ;

    return (
        <div>
            <Helmet>
                <title>KFC | Single Food Page</title>
            </Helmet>
            <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="card my-20 mx-auto w-[700px] h-[800px] bg-red-50">
            <figure><img  src={image} alt="Shoes" /></figure>

<h1 className="bg-red-500 absolute text-center p-2 w-36 text-black rounded-r-xl text-xl font-bold">{category}</h1>

<h2 className="text-center text-2xl font-semibold rounded-xl rounded-t-none text-black bg-amber-400 p-2 w-full">{name}</h2>
<p className='text-lg text-black/70 mt-8 px-6 text-center'>{details}</p>
<div className="card-body flex flex-row mx-auto text-center gap-x-[50px] justify-center items-center">
  <p className='text-2xl text-red-600 font-bold'>Price: <span className="text-black/70">{price} USD</span> </p>
  <p className='text-2xl text-red-600 font-bold'>Origin: <span className="text-black/70">{origin}</span></p>
  <p className='text-2xl text-red-600 font-bold'>Quantity: <span className="text-black/70">{quantity}</span></p>
</div>
                
                    <button
                        className="btn w-1/2 my-4 mx-44 bg-red-500 text-black"
                        onClick={handleOrderButtonClick} // Add onClick event handler
                    >
                        Order Food
                    </button>
               
                <p className="bg-red-400 p-3 text-center font-bold text-xl">Made By: {user}</p>
            </motion.div>
        </div>
    );
};

export default SingleFoodPage;
