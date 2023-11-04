import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
                      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="flex  justify-center mx-auto">
        <img className="w-auto h-14 " src="https://i.ibb.co/LdKJdhB/logo.png" alt=""/>
      
    </div>

<div className="flex  justify-center mx-auto mt-2">
<h1 className="text-2xl font-bold">Welcome, Registration here!!</h1>
</div>
    <form className="mt-6">
    <div>
            <label  className="block text-sm text-gray-800 dark:text-gray-200">Name</label>
            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <label  className="block text-sm text-gray-800 dark:text-gray-200">Photo URL</label>
            <input type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <label  className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
            <input type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label  className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
            </div>

            <input type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-6">
            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
            </button>
        </div>
    </form>



<Link to ="/login">
    <p className="mt-4 text-lg text-center font-light  text-gray-600"> Already have an account? <a href="#" className="font-medium text-red-400 hover:underline">Login</a>
    </p>
    </Link>
</div>  
        </div>
    );
};

export default Register;