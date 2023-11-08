

const Download = () => {
    return (
        <div>
            <div className="lg:mx-0 md:mx-0 mx-10">
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
          <div className="flex justify-center xl:w-1/2">
            <img
              className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0  "
              src="https://i.ibb.co/R026GmH/banner-q-75-w-1024.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
              Download Our Official Application
            </h2>

            <p className="block lg:max-w-2xl  my-4 text-gray-500 dark:text-gray-300">
            Introducing the KFC App  Your Gateway to Finger Licking Goodness Get ready to savor the legendary taste of KFC iconic fried chicken and delectable offerings. With our app, you can effortlessly browse our mouthwatering menu, place orders for pickup or delivery, and enjoy exclusive deals and promotions. Download the KFC App now and bring the Colonels secret recipe to your doorstep, whenever and wherever you crave it
            </p>

            <div className="grid lg:grid-cols-3 md:grid-cols-3  grid-cols-2 gap-5">
              <button className="btn border-none bg-red-300 lg:text-lg hover:bg-red-300">
                <i className="fa-brands fa-android"></i> Android
              </button>
              <button className="btn border-none bg-red-300 lg:text-lg hover:bg-red-300">
                <i className="fa-brands fa-app-store-ios"></i> IOS
              </button>

              <button className="btn border-none bg-red-300 lg:text-lg hover:bg-red-300">
                <i className="fa-brands fa-windows"></i> Windows
              </button>
              
            </div>
          </div>
        </div>
      </section>
    </div>    
        </div>
    );
};

export default Download;