import { useContext, useEffect, useState } from "react";
import AddCart from "./AddCart";
import { AuthContext } from "../Firebase/AuthProvider";
import Swal from "sweetalert2";


const MyCart = () => {
    const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/addCarts?email=${user.email}`;
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
          `http://localhost:5000/addCarts/${id}`,
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
               <div className="">
      <h1 className="text-red-600 text-center font-black text-5xl">
        Welcome! To Cart
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