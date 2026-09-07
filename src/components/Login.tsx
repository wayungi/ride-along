import { Link } from "react-router";
import { useState, type SubmitEvent  } from "react";
import { useNavigate } from "react-router";
import useAuth from "../context/useAuth";


const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async ( e: SubmitEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message) 
      } else {
        setError("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="h-full bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">

        <div className="text-center mb-6">
          <p className="mt-2 text-gray-500">Sign in to your Ride Along account</p>
        </div>

        <div className="border border-gray-200 rounded-xl p-6 shadow-sm">

          <form onSubmit={handleSubmit} className="space-y-5">

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
                  focus:ring-blue-600"
              />
            </div>


            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700" >Password </label>

                <button type="button" className="text-sm text-blue-600 hover:text-blue-700 hover:underline" >
                  Forgot password?
                </button>
              </div>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
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

            {error && (<p className="text-red-500">{error}</p> )}

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
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-700 hover:underline">Create an account</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;