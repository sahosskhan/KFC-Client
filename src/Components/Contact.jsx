

const Contact = () => {
    return (
        <div>
<section className=" ">
    <div className="container flex flex-col  px-6 py-12 mx-auto">
        <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
            <div className="text-black lg:w-1/2 lg:mx-6">
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Ask Any Questions</h1>

        

                <div className="mt-6 space-y-8 md:mt-8">
                    <p className="flex items-start -mx-2">
                    <i className="text-xl fa-solid fa-map-location-dot"></i>

                        <span className="mx-2 mt-1 text-black w-72">
                        Kushtia-7000, Khulna, Bangladesh. 
                        </span>
                    </p>

                    <p className="flex items-start -mx-2">
                    <i className="text-xl fa-solid fa-headset"></i>

                        <span className="mx-2 mt-1 text-black w-72">+09613666888</span>
                    </p>

                    <p className="flex items-start -mx-2">
                    <i className="text-xl  fa-solid fa-envelope-open-text"></i>

                        <span className="mx-2 mt-1 text-black  w-72">kfcgulshan@tfl.transcombd.com</span>
                    </p>
                </div>

            </div>

            <div className="mt-8 lg:w-1/2 lg:mx-6">
                <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-red-50  rounded-xl dark:bg-gray-900 lg:max-w-xl">
                    <h1 className="text-xl font-medium text-gray-700 dark:text-gray-200">Contact form</h1>

                    <form className="mt-4">
                        <div className="flex-1">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                            <input type="text" placeholder="John Doe" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="flex-1 mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                            <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring" />
                        </div>

                        <div className="w-full mt-6">
                            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                        </div>

                        <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50">
                            get in touch
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Contact;