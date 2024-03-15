import "./App.css";

export const App = () => {
  return (
    <div>
      <section className="h-screen bg-green-400 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" name="username" className="mt-1 p-2 border rounded-md w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 p-2 border rounded-md w-full" />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Login</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
