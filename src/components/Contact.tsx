import React from 'react'
import Image from 'next/image'
import phone from "../assets/phone.png"
import mail from "../assets/mail.png"


const Contact = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto flex flex-col lg:flex-row justify-center items-center text-white/70 p-8 space-y-8 lg:space-y-0 lg:space-x-8"
      id="contact"
      style={{ background: "linear-gradient(to bottom, #000, #2B1942 35%, #3A3A3A 60%, #4B4B4B 80%)" }}
    >
      {/* Contact Info */}
      <div className="flex justify-center items-center">
        <ul className="space-y-4">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">+92 340 5196214</p>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="mail" className="h-[110px] w-auto mr-6" />
            <p className="text-xl">amnakhan200427@gmail.com</p>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="bg-white/10 p-6 rounded-xl max-w-[550px] w-full">
        <h2 className="text-5xl font-bold text-orange-400 mb-4 text-center">
          Let's Connect
        </h2>
        <p className="text-white/70 mb-6 text-center">Send me a message or let's schedule a call</p>
        
        <form className="space-y-4" action="https://getform.io/f/bjjekoqb" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
             type='text' name='name' className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              placeholder="First Name"
            />
            <input
             type='text' name='name' className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              placeholder="Last Name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type='email' name='emmail' className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              placeholder="Email"
            />
            <input
             type='phone' name='phone' className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              placeholder="Phone"
            />
          </div>
          <textarea  className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
              placeholder="Your Message"/>
              <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
