import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const HomeBanner = () => {
    return (
        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}>
<div className="hero h-[700px]" style={{backgroundImage: 'url(https://kfcbd.com/storage/sliders/IjPaVNTczArizOo2jClLPvJxo.jpg)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-5xl">
      <h1 className="mb-5 text-5xl font-bold">Welcome To, Kentucky Fried Chicken</h1>
      <p className="mb-5 text-xl">KFC Corporation, doing business as Kentucky Fried Chicken, is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken.</p>
      <Link to="/allfooditems">
      <button className="btn bg-red-600 border-none text-white hover:bg-black">Explore Our Food</button>
      </Link>    
      </div>
  </div>
</div>
        </motion.div>
    );
};

export default HomeBanner;