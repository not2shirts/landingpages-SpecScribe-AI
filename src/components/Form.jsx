import React from 'react'
import { Button } from '@/components/ui/button';

function Form() {
  return (
    <>
    <div className='bg-white flex flex-col items-center m-4 md:m-6 justify-center shadow-lg h-full p-4 w-full max-w-lg mx-auto'>

        <div className='w-full max-w-md'>
            <h2 className='text-2xl md:text-3xl font-semibold text-green-950 text-center'>Request Your Demo</h2>
            <p className='text-md text-gray-700 mt-2 text-center px-4'>Get a personalized walkthrough of SpecScribe AI for your team</p>
        </div>

        <form className='w-full max-w-md px-4'>
            <div className='flex flex-col space-y-4 w-full'>
                 <label for="name">Name (required):</label>
                <input type="text" id='name' name='name' required placeholder="Your Name" className='border border-gray-300 p-2 rounded' />
                 <label for="email">Email (required):</label>
                <input type="email" id='email' name='email' required placeholder="Your Email" className='border border-gray-300 p-2 rounded' />
                <label for="message">Tell us about your current documentation challenges (required):</label>
                <textarea id='message' name='message' required placeholder="Your Message" className='border border-gray-300 p-2 rounded' />
                <Button type="submit" className='bg-green-950 text-white py-2 rounded'>Request Demo</Button>
            </div>
        </form>

    </div>
    </>
  )
}

export default Form
