import React, { useEffect, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidate }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleSubmit = async (e) => {
    //  Stops the page from refreshing when the form submits and thereby preserving the state.
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidate({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  return (
    
    
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<div className="my-auto">
<h4 className="text-md mx-8 m-1 font-bold text-slate-100  md:text-sm">
          Learn at Your Behest
        </h4>
        <h2 className="text-xl mx-8 my-4 font-bold text-slate-100 md:text-4xl">
          Learn from <p className="lg:text-xl text-l font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text md:text-4xl"> anywhere </p>
        </h2>
      
    


        {/* <form onSubmit={(e) => handleSubmit(e)}>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <button type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Subscribe
  </span>
</button>
</form> */}


      <form className="mc_form" onSubmit={(e) => handleSubmit(e)}>
        
        <h3 className="mc__title"></h3>
      
        {status === "success" && (
          <div dangerouslySetInnerHTML={{ __html: message }}></div>
        )}
        {/* Error and sending status messages */}
       
        {status !== "success" ? (
          <div className="mc__field-container">
            {/* <div class="mb-6">
            <label for="fName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
            <input
              type="text"
              name="fName"
              id="fName"
              value={firstName}
              placeholder="John"
              onChange={(event) => setFirstName(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            </div>

            
            <div class="mb-6">
            <label for="lName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
            <input
              type="text"
              name="lName"
              id="lName"
              value={lastName}
              placeholder="Doe"
              onChange={(event) => setLastName(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            </div> */}

<div class="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="johndoe@gmail.com"
              onChange={(event) => setEmail(event.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            </div>
            <button type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-r from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Subscribe
  </span>
</button>
          </div>
        ) : null}

        {status === "sending" && <div>Sending...</div>}
        {status === "error" && (
          <div dangerouslySetInnerHTML={{ __html: message }}></div>
        )}
      </form>
    </div>
    </div>
  );
};


function SubscribeForm() {
  const postUrl =
    "https://gmail.us21.list-manage.com/subscribe/post?u=f5562457c5ed1c7f22b3a571c&id=68519ba748";
  // const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.MAILCHIMP_U}&id=${process.env.MAILCHIMP_ID}`;

  return React.createElement(MailchimpSubscribe, {
    url: postUrl,
    render: ({ subscribe, status, message }) => {
      return React.createElement(CustomForm, {
        status: status,
        message: message,
        onValidate: (formData) => subscribe(formData),
      });
    },
  });
}

export default SubscribeForm;
