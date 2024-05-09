import React from 'react';

const UserRegister = () => {
  return (
    <div className=' bg-slate-900'>
      <div className='flex justify-center items-center mb-4 mt-4'>
        <h1 className='bg-black text-white text-center text-3xl py-3 px-6 rounded-lg shadow-lg'>User Registration</h1>
      </div>
      <div className='flex justify-center items-center'>
        <form className='w-full max-w-md px-4 py-8 bg-green-900 rounded-lg shadow-md'>
          <p className='text-white text-center mb-4'>
            Register as a Doctor <span className='text-green-500'>here</span>
          </p>
          <div className='mb-4'>
            <label className='block text-white mb-2'>Name:</label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              type='text'
              placeholder='Enter your name'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-white mb-2'>Email:</label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              type='email'
              placeholder='Enter your email'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-white mb-2'>Password:</label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
              type='password'
              placeholder='Enter your password'
            />
          </div>
          <p className='text-white text-center mb-4'>
            Already have an account? <button className='text-green-500'>Login Here</button>
          </p>
          <div className='flex justify-center'>
            <button className='px-4 py-2 bg-green-800 text-white rounded hover:bg-green-700 focus:outline-none focus:bg-green-700'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
