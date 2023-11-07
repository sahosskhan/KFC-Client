import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const AddedFood = ({food}) => {
    const {_id, name, image, price } = food || {};
    return (
        <div>
    <div className="flex rounded-xl flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className="w-full h-[500px]  bg-gray-300 bg-center bg-cover rounded-xl shadow-md"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <h3 className="font-bold px-6 py-3 bg-opacity-5 bg-white backdrop-blur-3xl border-none filter drop-shadow-md  w-auto uppercase text-black">
            {name}
          </h3>
        </div>

        <div className="w- -mt-10 overflow-hidden bg-red-50  p-3 rounded-lg   shadow-lg md:w-64 ">
          <div className="flex justify-center mb-3 items-center ">
            <span className="text-lg font-semibold dark:text-white">
            <i className="fa-solid fa-dollar-sign"></i> {price}
            </span>
         
          </div>

<Link to={`/myupdatefood/${_id}`}>
          <button
           
            className="btn btn-sm btn-block border-none bg-red-400 hover:bg-red-300"
          >
            <i className="fa-solid fa-pen-to-square"></i>
            Update
          </button>
          </Link>
        </div>
      </div>
        </div>
    );
};

export default AddedFood;