import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import Btn from "./Btn";

const Contact = () => {
  return (
    <div name='CONTACT' className="w-full h-screen bg-black text-white">
      <div className="inner md:px-12 flex flex-col items-center justify-center">
        <div className="heading px-3 py-6">
          <h1 className="uppercase text-4xl tracking-tighter font-bold">
            <span className="text-red-400">contact </span>
            us
          </h1>
        </div>
        <div className="card  grid md:grid-cols-2 gap-2 w-full px-4 md:px-12">
          <div className="map flex items-center justify-center px-[1vw] py-[1vw] ">
          <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7880939297943!2d73.82692607385742!3d18.447928071391836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953abb4751c3%3A0x5c1dd802cb7916c3!2sNarhegaon!5e0!3m2!1sen!2sin!4v1712490365932!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className="form flex flex-col gap-6 px-4 py-[6vw] bg-black ">
            <div className="heading flex justify-center">
              <h1 className="text-3xl font-bold uppercase">get in touch</h1>
            </div>

            <div className="form">
              <div className="nameInput w-full py-3">
                <form
                  className="flex flex-col px-2 gap-4 "
                  action="https://getform.io/f/zaxdwmla"
                  method="POST"
                >
                  <div className="formInner px-2 py-2 flex border-2 justify-center items-center ">
                    <div className="icon px-2">
                      <h1>
                        <FaUser className="text-xl " />
                      </h1>
                    </div>
                    <input
                      className="px-3 bg-black py-2 w-full outline-none text-white"
                      type="text"
                      placeholder="Name"
                    />
                  </div>

                  <div className="formInner-email px-2 py-2 flex border-2 justify-center items-center ">
                    <div className="icon px-2">
                      <h1>
                        <FaEnvelope className="text-xl" />
                      </h1>
                    </div>
                    <input
                      className="px-3 bg-black py-2 w-full outline-none text-white"
                      type="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="formInner-number px-2 py-2 flex border-2 justify-center items-center ">
                    <div className="icon px-2">
                      <h1>
                        <FaPhone className="text-xl" />
                      </h1>
                    </div>
                    <input
                      className="px-3 bg-black py-2 w-full outline-none text-white"
                      type="number"
                      placeholder="Name"
                    />
                  </div>
                  <div className="Btn flex items-center justify-center">
                    <Btn
                      title="contact now"
                      className="px-4 bg-orange-500 py-2"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
