import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis'
import { XCircleIcon } from '@heroicons/react/solid'


const SignUp = () => {

  const router = useRouter();

  const { signup, user, authError, hasAuthError } = useMoralis()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });


  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    await signup(email, password);

    if (hasAuthError) {
      setMessage({ type: 'error', content: authError.message });
    }
    setLoading(false);
  };



  useEffect(() => {
    if (user) {
      router.replace('/whitelist');
    }
  }, [user]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
                        className="mx-auto h-12 w-auto"
                        src="/share.png"
                        alt="Workflow"
                    /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for Web3 Uni</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Signed up already?{' '}
            <Link href="/login">
              <a className="font-medium text-blue-600 hover:text-blue-500">
                Sign in here.
              </a>
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={loading || !email.length || !password.length}
                  type="submit"
                  className={classNames(
                    !email.length || !password.length ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700',
                    "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  )}
                >
                  Sign up
                </button>
              </div>
            </form>
            {message.type === 'error' &&
              <div className='flex space-x-1 py-4 justify-start items-center'>
                <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                <p className='text-red-500 text-sm'>{message.content}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;