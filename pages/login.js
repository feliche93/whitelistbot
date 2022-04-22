import Image from 'next/image';
import Link from 'next/link';
import { useMoralis } from 'react-moralis';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const router = useRouter();
  const {
    user,
    isAuthenticated,
    isAuthenticating,
    authenticate,
    login,
    hasAuthError,
  } = useMoralis();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleMetamaskConnect = async () => {
    authenticate({ signingMessage: 'Log in to Whitelistbot' });
  };

  const onSubmit = async ({email, password}) => {

    await login(email, password);
  };

  useEffect(() => {
    if (user) {
      router.replace('/whitelist');
    }
  }, [user]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <div className='min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
            alt="Workflow"
          /> */}
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in to your account
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Or{' '}
            <Link href='/register'>
              <a className='font-medium text-blue-600 hover:text-blue-500'>
                sign up for an acccount
              </a>
            </Link>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email',
                      },
                    })}
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
                  {errors.email && (
                    <p className='mt-2 text-sm text-red-600'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700'
                >
                  Password
                </label>
                <div className='mt-1'>
                  <input
                    {...register('password', {
                      required: 'Please enter your password',
                      // minLength: {
                      //   value: 6,
                      //   message: 'Password must be at least 6 characters long',
                      // },
                    })}
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
                  {errors.password && (
                    <p className='mt-2 text-sm text-red-600'>
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div> */}

              <div>
                <button
                  // onClick={handleSignIn}
                  type='submit'
                  className={classNames(
                    false ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700',
                    'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  )}
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className='mt-6'>
              <div className='relative'>
                <div className='absolute inset-0 flex items-center'>
                  <div className='w-full border-t border-gray-300' />
                </div>
                <div className='relative flex justify-center text-sm'>
                  <span className='px-2 bg-white text-gray-500'>
                    Or continue with
                  </span>
                </div>
              </div>
              {/* Metamask Connect Button */}
              {/* TODO: Add error handling */}
              <div className='mt-6 grid grid-cols-1'>
                <div>
                  <button
                    onClick={handleMetamaskConnect}
                    className='w-full h-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                  >
                    {isAuthenticating ? (
                      <LoadingSpinner size='8' />
                    ) : (
                      <>
                        <Image
                          src='/metamassk-fox.webp'
                          width={30}
                          height={30}
                        />
                        <span className='pl-4 uppercase'>Metamask Wallet</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
