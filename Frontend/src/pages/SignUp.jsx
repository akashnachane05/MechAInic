import { Link,useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import Input from '../Components/Input';
import LoginScreen from './LoginScreen';
import { Cog, Lock, Mail, User } from 'lucide-react';


export default function SignUp() {
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    // Add your signup logic here
    // After successful signup
    navigate('/pages/LoginScreen'); // Navigate to login after signup
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
            <h2 className="text-3xl font-bold text-blue-400">Create your account</h2>
            <p className="mt-2 text-gray-400">
              Already have an account?{' '}
              <Link to="/pages/LoginScreen" className="font-medium text-blue-400 hover:text-blue-300">Sign in</Link>
            </p>
          </div>
          <form onSubmit={handleSignUp} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300" htmlFor="name">
                Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  id="name"
                  type="text"
                  required
                  className="w-full pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>
            </div>
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
                  className="w-full pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="agree-terms"
                  name="agree-terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-blue-400"
                  required
                />
                <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-300">
                  I agree to the{' '}
                  <Link to="#" className="text-blue-400 hover:text-blue-300">terms and conditions</Link>
                </label>
              </div>
            </div>
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200">
              Sign up
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
