import { useContext } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";


const AddFood = () => {
  const { user } = useContext(AuthContext);

  const HandelAddFood = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const details = from.details.value;
    const category = from.category.value;
    const quantity = from.quantity.value;
    const price = from.price.value;
    const origin = from.origin.value;
    const user = from.user.value;
    const email = from.email.value;
    const image = from.image.value;


    const SingleFoodAdd =
      { name, details, category, quantity, price, origin, user, email, image } || {};
    console.log(SingleFoodAdd);

    from.name.value = "";
    from.details.value = "";
    from.price.value = "";
    from.quantity.value = "";
    from.category.value = "";
    from.origin.value = "";
    from.image.value = "";



    fetch(
      "http://localhost:5000/allfood",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(SingleFoodAdd),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully!",
            text: "Food Add Done ",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };


    return (
        <div>
               <div className="mt-8 container mx-auto">
        <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-opacity-20 bg-white backdrop-blur-3xl border-none filter drop-shadow-md rounded-2xl p-2 lg:max-w-5xl shadow-gray-300/50 ">
          <h1 className="text-4xl font-bold text-center  text-red-700">
            Add Your Favorite Content To Enjoy More
          </h1>

          <form onSubmit={HandelAddFood} className="mt-6">
            <div className="flex gap-5">
              <div className="from-control  flex-1 ">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Food Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Content Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="from-control  flex-1">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Food Description
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter Short Description "
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="from-control flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Food Category
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Select Category"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
           
              </div>

              <div className="from-control  flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Food Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  placeholder="Select Quantity"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            
              </div>
            </div>

            <div className="flex gap-5">
              <div className="from-control  flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                 Food Price
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter Price"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-5 flex-1">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                  Food Origin
                </label>
                <input
                  type="text"
                  name="origin"
                  placeholder="Enter Origin"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="from-control  flex-1 mt-5">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                 Add By (Name)
                </label>
                <input
                  type="text"
                  name="user"
                  defaultValue={user.displayName}
                  placeholder="Enter Name Who Add"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="mt-5 flex-1">
                <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Add By (email)
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={user.email}
                  placeholder="Enter Email Address Who Add" 
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div className="from-control flex-1 mt-5">
              <label className="block mb-2 lg:text-xl font-bold text-black dark:text-gray-200">
                Food Image URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter Food Image URL"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-red-50te border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <input
              className="btn btn-block mt-5 border-none bg-red-500 text-white hover:bg-rose-500"
              type="submit"
              value="Add Food"
            />
          </form>
        </div>
      </div>   
        </div>
    );
};

export default AddFood;