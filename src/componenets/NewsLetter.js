import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";


const Contact = ({ status, onValidate }) => {
  const [email, setEmail] = useState("");

  // Form validation state
  const [errors, setErrors] = useState({});

  // Setting button text on form submission
  const [buttonText, setButtonText] = useState("Join the waitlist");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    setErrors({ ...tempErrors });
    return isValid;
  };

  // Handling form submit
  const handleSubmit = (e) => {
    //  Stops the page from refreshing when the form submits and thereby preserving the state.
    e.preventDefault();

    let isValidForm = handleValidation();
    console.log(isValidForm);

    if (isValidForm) {
      setButtonText("Sending");
      onValidate({
        EMAIL: email,

      });

      if (status !== "success") {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Join the waitlist");
        toast.error("Message sending failed.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      } else {
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send Message");
        toast.success("Thank you! Your Message has been delivered.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });


        setEmail("");

        setShowSuccessMessage("");
        return;
      }
    }
  };

  return (
    <div className="container bg-[#201A26] m-0">
        <div className="pl-10 lg:pl-14 shadow-none bg-[#201A26] ">
          <div className="">
          <h2 className="mt-16 md:mt-28 text-slate-100 text-20px">
            Learn at your behest
          </h2>
          <h2 className="text-64px md:mt-4 -mt-5 -mb-8 md:mb-0 font-bold text-slate-100 dark:text-teal-400">
            Learn from
          </h2>
          <h2 className="text-64px p-0 mb-20  font-bold bg-gradient-to-l from-purple-900 to-pink-500 text-transparent bg-clip-text dark:text-teal-400 inline-block">
            anywhere
          </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            autoComplete="off"
            className=" rounded-lg flex flex-col text-gray-50 mb-8  dark:bg-blue-500"
          >
            <p className=" block md:hidden text-gray-100 gap-0 mt-6 mb-2 font-normal text-16px  dark:text-gray-50">
                Enter your email address
              </p>
            <div className="md:flex md:flex-wrap-reverse md:gap-0 md:flex-row md:items-center md:pt-0 md:mt-0 md:justify-start">
              <input
                type="email"
                name="email"
                autoComplete="off"
                autoCorrect="off"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="w-2/3 md:w-1/2 bg-transparent py-2 focus:outline-none focus:rounded-md focus:ring-1 ring-1 rounded-md  ring-purple-500 font-light text-white"
              />
              <div className="flex flex-row items-center md:ml-3 md:pt-2 mt-4 md:mt-0 pb-1 justify-start ">
                <button
                  type="submit"
                  className="text-white text-sm px-5 py-2.5 text-center mr-2 mb-2 bg-gradient-to-l from-purple-900 to-pink-500 hover:bg-gradient-to-l hover:ring-2 focus:outline-none  hover:ring-black-500 md:text-16px rounded-lg "
                >
                  {buttonText}
                </button>
              </div>

              <p className="hidden md:block text-gray-100 flex-none gap-0 mt-6 font-normal text-16px  dark:text-gray-50">
                Enter your email address
              </p>
            </div>
            {errors?.email && (
              <p className="text-red-500">Email cannot be empty.</p>
            )}
          </form>
          {showSuccessMessage}
        {showFailureMessage}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          progress={undefined}
          theme="dark"
        />
        </div>
    </div>
  );
};

function SubmitForm() {
  const postUrl =
    "https://gmail.us21.list-manage.com/subscribe/post?u=f5562457c5ed1c7f22b3a571c&id=68519ba748";
  // const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.MAILCHIMP_U}&id=${process.env.MAILCHIMP_ID}`;

  return React.createElement(MailchimpSubscribe, {
    url: postUrl,
    render: ({ subscribe, status }) => {
      return React.createElement(Contact, {
        status: status,
        onValidate: (formData) => subscribe(formData),
      });
    },
  });
}

export default SubmitForm;