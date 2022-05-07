import React from "react";

const Contact = () => {
    const img ="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1651945968~exp=1651946568~hmac=f33151054eb25c7d65cdd01bcff594bf4acfcec6576526c8bec3e1e27370c500&w=740"
  return (
    <div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-coolGray-800 dark:text-coolGray-100">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Let's talk!
            </h2>
            <div className="dark:text-coolGray-400">
              If you has any query please Let us know.
            </div>
          </div>
          <img
            src={img}
            alt="Contact our customer support"
            className="p-6 w-3/4"
          />
        </div>
        <form
          novalidate=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label htmlFor="name" className="text-lg">
              Full name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded dark:bg-coolGray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded dark:bg-coolGray-800"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-lg">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              placeholder="Your message"
              className="w-full p-3 rounded dark:bg-coolGray-800"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-blue-400 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
