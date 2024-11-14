import Complain from "../Components/Complain"

const RegisterComplaint = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center px-8 py-12">
      {/* Hero Section (Closer to Center, Larger Text) */}
      <div className="max-w-lg flex-1 pr-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to the Complaint Portal
        </h1>
        <p className="text-2xl text-gray-700 mb-4">
          Your voice matters! Share any issues you’re experiencing, and we will work to improve your experience.
        </p>
        <p className="text-base text-gray-600">
          Our team is dedicated to resolving complaints promptly for a better living environment.
        </p>
      </div>

      {/* Complaint Form (Closer to Center) */}
      <div className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-lg flex-1 ml-12">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Register Your Complaint</h2>
          <p className="text-gray-600">
            Provide your details and describe the issue you are facing.
          </p>
        </div>
        <div className="mb-6 border-t border-gray-200"></div>
        <Complain />
      </div>
    </div>
  )
}

export default RegisterComplaint