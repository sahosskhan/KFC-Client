
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const AddCart = ({items, handleDelete}) => {
    // eslint-disable-next-line react/prop-types
    const {_id, name, image,category,price,buyDate, buyName  } = items;

    return (
        <div>
             <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="flex rounded-xl flex-col items-center justify-center w-full max-w-sm mx-auto">
        <div
          className="w-full h-[500px]  bg-gray-300 bg-center bg-cover rounded-xl shadow-md"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <h3 className="font-bold px-6 py-3 bg-opacity-5 bg-white backdrop-blur-3xl border-none filter drop-shadow-md  w-auto uppercase text-white">
            {name}
          </h3>
        </div>

        <div className="w-56 -mt-10 overflow-hidden bg-opacity-5 bg-white backdrop-blur-3xl border-none filter drop-shadow-md   p-6 rounded-lg   shadow-lg md:w-64 ">
          <div className="flex justify-between mb-3 items-center gap-5">
            <span className="text-base font-semibold dark:text-white">
              {category}
            </span>
            <span className="text-base font-semibold dark:text-white">
              {price} <i className="fa-solid fa-dollar-sign"></i>
            </span>
          </div>
<h1 className="text-base text-center text-black font-bold my-2  ">Order Date: {buyDate}</h1>
          <button
           onClick={() => handleDelete(_id)}
            className="btn btn-sm btn-block border-none bg-red-400 hover:bg-red-300"
          >
            Remove
          </button>
          
        </div>
        <h1 className="text-base text-black font-bold   text-center my-2 bg-red-400 rounded-xl p-2 ">Order Owner: {buyName}</h1>
      </motion.div>   
        </div>
    );
};

export default AddCart;