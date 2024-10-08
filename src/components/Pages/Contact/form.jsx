import React, { useRef } from "react";
import ReactTyped from "react-typed";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Forms = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_onajonim1971",
          "template_k32rykm",
          form.current,
          "zgby6PiUEsCe9oQQ2"
        )
        .then(
          (result) => {
            console.log(result.text);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Email sent!! 🎉🎉🎉",
              showConfirmButton: false,
              timer: 1500,
            });
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section>
      <div className="max-h-screen py-6 flex flex-col justify-center sm:py-12 wrap">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-lightOrange to-lime-600 shadow-lg transform -skew-y-6 hover:-skew-y-0 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl bg-red-300 hover:rotate-0 "></div>
          <div className="relative px-10 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 transform hover:origin-center">
            <form
              onSubmit={sendEmail}
              ref={form}
              className="max-w-md mx-auto"
              action="https://formspree.io/f/xbjvkywl"
              method="post"
            >
              <div className="w-[300px]">
                <ReactTyped
                  strings={["Let's get in touch!"]}
                  typeSpeed={100}
                  loop
                  backSpeed={30}
                  cursorChar="|"
                  showCursor={true}
                  className={`text-3xl text-[green] font-medium`}
                />
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="block px-2 pb-2 pt-2 w-full text-[16px] text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 dark:text-lime-600 dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                      name="user_name"
                      required
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-[16px] text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="floating_outlined"
                      className="block px-2 pb-2 pt-2 w-full text-[16px] text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 dark:text-orange dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                      name="user_email"
                      required
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-[16px] text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Email
                    </label>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      type="message"
                      id="floating_outlined"
                      className="block px-2 pb-2 pt-2 w-full text-[16px] text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 dark:text-orange dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-[16px] text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Message
                    </label>
                  </div>

                  <div className="relative">
                    <button
                      htmltype="submit"
                      className="border-2 border-lime-600 text-lime-600 rounded-md px-4 py-1 hover:bg-[green] hover:text-white active:scale-95"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
