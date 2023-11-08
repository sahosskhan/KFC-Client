import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';


const OrderingPage = () => {
  const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; 
const year = currentDate.getFullYear();

const formattedDate = `${day}/${month}/${year}`;



  const { user } = useContext(AuthContext);
    const items = useLoaderData();
    const { name, image,category,price,quantity  } = items || {};
  

    const addCartHandle = (e) => {
      e.preventDefault();
      const form = e.target;
      const buyName = form.buyName.value;
      const buyEmail = form.buyEmail.value;
      const buyDate = form.buyDate.value;
      const buyQuantity = parseInt(form.buyQuantity.value); // Parse the input as an integer
      const availableQuantity = parseInt(quantity);
    
      if (buyQuantity > availableQuantity) {
        // Show a SweetAlert if buyQuantity is greater than available quantity
        Swal.fire({
          icon: "error",
          title: "Sorry",
          text: "You Cannot order more than available quantity",
          confirmButtonText: "Ok",
        });
      } else {
        const card = {
          buyName,
          buyEmail,
          buyDate,
          name,
          image,
          category,
          price,
          quantity,
          buyQuantity,
        };
        console.log(card);
        fetch("https://a11-ph-server.vercel.app/addCarts", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(card),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                icon: "success",
                title: "Successful",
                text: "Food Order Done",
                confirmButtonText: "Ok",
              });
            }
          });
      }
    };

   




    return (
        <div>
           <Helmet>
    <title>KFC | Make Order</title>
  </Helmet>
                  <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="max-w-xl mx-auto my-10 overflow-hidden bg-red-100 rounded-lg shadow-md dark:bg-gray-800">
        <img className="h-[500px] w-full mx-auto" src={image} alt="Article" />

        <div className="p-6">
        <p className="text-center text-3xl mb-4 font-bold">{name}</p>
          <div className="flex justify-center items-center gap-5">

<p className="bg-red-500 p-2 text-xl text-black w-1/2 text-center rounded-xl">{category}</p>
<p className="bg-red-500 p-2 text-xl text-black w-1/2 text-center rounded-xl">{price} USD </p>
<p className="bg-red-500 p-2 text-xl text-black w-1/2 text-center rounded-xl">{quantity} Available </p>

          </div>

          <div>
            <form onSubmit={addCartHandle}>
            <div className="mt-4 form-control">
                <label className="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">
                Buyer Name 
                </label>
                <input
             disabled
                  id="LoggingEmailAddress"
                  name="buyName"
                  defaultValue={user.displayName}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>

              <div className="mt-4 form-control">
                <label className="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">
                Buyer Email
                </label>
                <input
                disabled
                  id="LoggingEmailAddress"
                  name="buyEmail"
                  defaultValue={user.email}
                  className="lock w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>

         <div className="flex justify-between items-center gap">
         <div className="mt-4 form-control">
                <label className="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">
                Enter Quantity To Buy
                </label>
                <input
          
                  name="buyQuantity"
                placeholder="Enter buying amount "
                  className="lock w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>

              <div className="mt-4 form-control">
                <label className="block mb-2 text-lg font-medium text-gray-600 dark:text-gray-200">
                Buying date
                </label>
                <input
                  id="LoggingEmailAddress"
                  name="buyDate"
                  defaultValue={formattedDate}
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                 
                />
              </div>
         </div>
              <div className="mt-4 ">
                <input
                
                  className="btn btn-block border-none bg-red-500"
                  type="submit"
                  value="Order Now"
                />
              </div>
            </form>
          </div>
        </div>
      </motion.div>
        </div>
    );
};

export default OrderingPage;