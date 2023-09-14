import React from 'react'

export default function contactForm() {
  return (
    <form className='flex justify-start items-center flex-col custom-shadow rounded-2xl w-full h-3/4'>
      <div className='font-light pt-2'>
        Contact me via Email
      </div>
      <div className='w-full my-4 px-10'>
        <input type="email" id="email" name="email" placeholder='Enter your email' className='w-full px-3 bg-slate-900 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
      </div>
      <div className='w-full px-10'>
      <textarea id="message" name="message" rows="4" className="w-full p-3 bg-slate-900 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message"></textarea>
      </div>
      <div>
      <button type='submit' className=' font-semibold px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105'>Send</button>
      </div>
    </form>
  )
}
