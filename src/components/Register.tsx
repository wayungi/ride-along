
import { Link } from "react-router";
import { useState, type SubmitEvent  } from "react";
import useAuth from "../context/useAuth";
import { useNavigate } from "react-router";
import { ApiError } from "../types/api";

const Register = () => {
  const { register} =  useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async(e: SubmitEvent)=> {
    e.preventDefault();
    setError("")
    setLoading(true)

    try {
      await register (email, password, fname, lname);
      navigate("/login");
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error.message) 
      } else {
        setError("Registration failed. Please try again later");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">

        <div className="text-center mb-6">
          <p className="mt-2 text-gray-500">Create your Ride Along account </p>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="fname" className="block text-sm font-medium text-gray-700 mb-2">First name </label>
                <input
                  id="fname"
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="John"
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-lg
                    border border-gray-300
                    text-gray-900
                    placeholder-gray-400
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:ring-1
                    focus:ring-blue-600
                  "
                />
              </div>

              <div>
                <label htmlFor="lname" className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                <input
                  id="lname"
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Doe"
                  required
                  className="
                    w-full
                    px-4 py-3
                    rounded-lg
                    border border-gray-300
                    text-gray-900
                    placeholder-gray-400
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:ring-1
                    focus:ring-blue-600
                  "
                />
              </div>
            </div>


            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="
                  w-full
                  px-4 py-3
                  rounded-lg
                  border border-gray-300
                  text-gray-900
                  placeholder-gray-400
                  outline-none
                  transition
                  focus:border-blue-600
                  focus:ring-1
                  focus:ring-blue-600
                "
              />
            </div>


            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                required
                className="
                  w-full
                  px-4 py-3
                  rounded-lg
                  border border-gray-300
                  text-gray-900
                  placeholder-gray-400
                  outline-none
                  transition
                  focus:border-blue-600
                  focus:ring-1
                  focus:ring-blue-600
                "
              />
            </div>

            {error && (
              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>
            )}


            <button
              type="submit"
              className="
                w-full
                bg-blue-600
                text-white
                py-3
                rounded-lg
                font-medium
                transition
                hover:bg-blue-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-600
                focus:ring-offset-2
              "
            >Create account</button>

            <p text-sm text-green-600>{loading ? "Registration in progress" : ""}</p>

          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-700 hover:underline">Sign in</Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Register;

