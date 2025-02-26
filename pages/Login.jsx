const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded-md" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded-md" />
        <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
          Sign In
        </button>
      </div>
    </div>
  );
};
export default Login;
