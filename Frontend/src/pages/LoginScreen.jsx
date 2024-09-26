import { Link,useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import Button from '../Components/Button';
import Input from '../Components/Input';
import { Cog, Lock, Mail } from 'lucide-react';

import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate(); // Moved inside the component
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add your login logic here
    // For example, you can make an API call to verify the user's credentials
    const isAuthenticated = true; // Replace with actual authentication logic

    if (isAuthenticated) {
      // Redirect to the desired route upon successful login
      navigate('/pages/Dashboard'); // Change '/dashboard' to your desired route
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" to="#">
          <Cog className="h-6 w-6 text-blue-400" />
          <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">MechAInic</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-400">Login to MechAInic</h2>
            <p className="mt-2 text-gray-400">
              Don't have an account?{' '}
              <Link to="/pages/SignUp" className="font-medium text-blue-400 hover:text-blue-300">Sign up</Link>
              
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6"> {/* Changed onSubmit to handleLogin */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="email"
                  type="email"
                  required
                  value={email} // Set value to email state
                  onChange={(e) => setEmail(e.target.value)} // Update state on change
                  className="w-full pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="password"
                  type="password"
                  required
                  value={password} // Set value to password state
                  onChange={(e) => setPassword(e.target.value)} // Update state on change
                  className="w-full pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-400"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link to="#" className="font-medium text-blue-400 hover:text-blue-300">Forgot your password?</Link>
              </div>
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200">
              Sign in
            </Button>
          </form>
        </div>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 border-t border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2024 MechAInic. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:text-blue-400 transition-colors" to="#">Terms of Service</Link>
            <Link className="text-xs hover:text-blue-400 transition-colors" to="#">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
