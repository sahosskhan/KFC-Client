import { Link } from "react-router-dom";
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const Featurefood = ({ items }) => {
    const {_id, name, image,category,price, order } = items || {};
    return (
        <div>
            <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}   className="card w-96 bg-red-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>

  <h1 className="bg-red-500 absolute text-center p-2 w-36 text-black rounded-r-xl text-xl font-bold">{category}</h1>
  <p className=" text-xl absolute ml-[279px] p-2 mt-[244px] rounded-l-xl border-none text-black bg-green-500"><i className="fa-solid fa-dollar-sign "></i>  {price} USD</p>
  <h2 className="text-center text-2xl font-semibold rounded-xl rounded-t-none text-black bg-amber-400 p-2 w-full">{name}</h2>
  <div className=" card-body items-center ">
    <p className=" text-xl my-2 font-bold text-center text-black">Number Of People Order: <span className="text-red-500">{order}</span> </p>
    <Link  to={`/singlefooditmes/${_id}`}>
  <button className="btn   bg-red-500 text-black">See Details</button>
    
  </Link>
  </div>
</motion.div>
        </div>
    );
};

export default Featurefood;