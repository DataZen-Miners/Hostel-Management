import Register from "../Components/Register";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center px-8 py-12">
      {/* Complaint Form (Closer to Center) */}
      <div className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-lg flex-1 ml-12">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Get Started</h2>
          <p className="text-gray-600">
            Create your account now!
          </p>
        </div>
        <div className="mb-6 border-t border-gray-200"></div>
        <Register/>
        <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-blue-500 hover:underline">
                Login Here
              </Link>
            </p>
          </div>
      </div>
    </div>
  )
}

export default RegistrationPage
