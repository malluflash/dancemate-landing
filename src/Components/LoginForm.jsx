import PropTypes from 'prop-types';

const LoginForm = ({ show, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4 ${show ? 'block' : 'hidden'}`}>
      <div className="relative bg-gray-900 bg-opacity-90 p-8 rounded-lg w-full max-w-md">
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-xl">&times;</button>
        <h2 className="text-3xl text-white text-center mb-6 mt-6">LOGIN</h2>
        <form>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="email" 
              className="w-full p-3 text-gray-700 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="password" 
              className="w-full p-3 text-gray-700 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-white">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-gray-400 hover:text-gray-200">Forgot password?</a>
          </div>
          <button className="w-full bg-white text-black p-3 rounded-lg font-semibold hover:bg-gray-200">Login</button>
        </form>
        <div className="mt-6 text-center text-white">
          New to Dance Mate?
          <a href="#" className="text-blue-400 hover:text-blue-600"> Register</a>
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginForm;
