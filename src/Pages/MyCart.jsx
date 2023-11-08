import { useContext, useEffect, useState } from "react";
import AddCart from "./AddCart";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const MyCart = () => {
    const { user } = useContext(AuthContext);

  const url = `https://a11-ph-server.vercel.app/addCarts?email=${user.email}`;
  const [add, setAdd] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdd(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [add]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://a11-ph-server.vercel.app/addCarts/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Ordered Food has been deleted.",
                "success"
              );
              const remaining = add.filter(() => add._id !== id);
              setAdd(remaining);
            }
          });
      }
    });
  };

    return (
        <div>
           <Helmet>
    <title>KFC | Food Cart</title>
  </Helmet>
               <div className="">
      <h1 className="text-red-600 text-center font-black text-5xl">
        Welcome! To Food Cart
      </h1>

      <div className=" lg:mb-[560px]  grid lg:grid-cols-3 grid-cols-1 gap-y-5 my-10 md:mx-40 lg:mx-64  ">
        {add?.map((items) => (
          <AddCart
            key={add._id}
            items={items}
            handleDelete={handleDelete}
          ></AddCart>
        ))}
      </div>
    </div> 
        </div>
    );
};

export default MyCart;