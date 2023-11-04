import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Firebase/AuthProvider";
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SignUpHandle = (e) => {
    e.preventDefault();
    setPassword("");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    console.log(email, password, name);

    if (password.length < 6) {
      setPassword("Opps! Password must contain minimum 6 characters");
      return;
    } else if (!/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setPassword(
        "Opps! Password must contain special characters and capital latter"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Successfully!",
          text: "Your Registration done ",
          icon: "success",
          confirmButtonText: "Done",
        });
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
    }


    return (
        <div>
                      <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="flex  justify-center mx-auto">
        <img className="w-auto h-14 " src="https://i.ibb.co/LdKJdhB/logo.png" alt=""/>
      
    </div>

<div className="flex  justify-center mx-auto mt-2">
<h1 className="text-2xl font-bold">Welcome, Registration here!!</h1>
</div>
    <form onSubmit={SignUpHandle} className="mt-6">
    <div>
            <label  className="block text-sm text-gray-800 dark:text-gray-200">Name</label>
            <input type="text" name="name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <label  className="block text-sm text-gray-800 dark:text-gray-200">Photo URL</label>
            <input   type="text" name="photo" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <label  className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
            <input type="email"  name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>

        <div className="mt-4">
            <div className="flex items-center justify-between">
                <label  className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
            </div>

            <input type="password"   name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" />
        </div>
        {password && <p className="text-red-700 font-bold mt-5  "> <i className="fa-solid fa-triangle-exclamation"></i> {password}</p>}
        <div className="mt-6">
            <button type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
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