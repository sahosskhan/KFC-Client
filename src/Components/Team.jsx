
import { motion } from 'framer-motion';

const Team = () => {
    return (
        <div>
<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-5xl dark:text-white">Our Executive Member</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-red-600 dark:border-gray-700 dark:hover:border-transparent">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://i.ibb.co/mqgrkYp/colonel-harland-sanders-gettyimages-72431338.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Colonel Harland</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Founder & Head Chief</p>


            </motion.div>

            <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-red-600 dark:border-gray-700 dark:hover:border-transparent">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://i.ibb.co/QnTTHN5/sahoss.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Sahoss Khan</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Branch Manager</p>


            </motion.div>

            <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-red-600 dark:border-gray-700 dark:hover:border-transparent">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://i.ibb.co/9ZR40Yh/taj.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Taj Dadu</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Chief In Charge</p>


            </motion.div>

            <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }} className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-red-600 dark:border-gray-700 dark:hover:border-transparent">
                <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://i.ibb.co/1mGRkgQ/shifat.jpg" alt=""/>

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Shifat Ahamed</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Advisor</p>


            </motion.div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Team;