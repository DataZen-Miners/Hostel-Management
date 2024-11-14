import { Link } from "react-router-dom";
import Login from "../Components/Login";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center px-8 py-12">
      {/* Complaint Form (Closer to Center) */}
      <div className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-lg flex-1 ml-12">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Welcome Back!</h2>
          <p className="text-gray-600">
            Login to your account.
          </p>
        </div>
        <div className="mb-6 border-t border-gray-200"></div>
        <div className="text-center mt-4">
          <Login/>
            <p className="text-sm text-gray-600">
              Dont Have an Account?{" "}
              <Link to="/sign-up" className="text-blue-500 hover:underline">
                Create one now!
              </Link>
            </p>
          </div>
      </div>
    </div>
  )
}

export default LoginPage
