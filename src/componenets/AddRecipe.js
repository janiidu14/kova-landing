// import React, { useState, Image } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import landingImage1 from "../assets/landing-image-1.jpg";
// import landingImage2 from "../assets/landing-image-2.jpg";
// import landingImage3 from "../assets/landing-image-3.jpg";
// import logo from "../assets/logo.png";

// const Contact = ({ status, onValidate }) => {
//   const [email, setEmail] = useState("");
//   // const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");

//   // Form validation state
//   const [errors, setErrors] = useState({});

//   // Setting button text on form submission
//   const [buttonText, setButtonText] = useState("Join the waitlist");

//   // Setting success or failure messages states
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const [showFailureMessage, setShowFailureMessage] = useState(false);

//   // Validation check method
//   const handleValidation = () => {
//     let tempErrors = {};
//     let isValid = true;

//     // if (firstName.length <= 0) {
//     //   tempErrors["firstName"] = true;
//     //   isValid = false;
//     // }
//     // if (lastName.length <= 0) {
//     //   tempErrors["lastName"] = true;
//     //   isValid = false;
//     // }
//     if (email.length <= 0) {
//       tempErrors["email"] = true;
//       isValid = false;
//     }
//     setErrors({ ...tempErrors });
//     return isValid;
//   };

//   // Handling form submit
//   const handleSubmit = (e) => {
//     //  Stops the page from refreshing when the form submits and thereby preserving the state.
//     e.preventDefault();

//     let isValidForm = handleValidation();
//     console.log(isValidForm);

//     if (isValidForm) {
//       setButtonText("Sending");
//       onValidate({
//         EMAIL: email,

//       });

//       if (status !== "success") {
//         setShowSuccessMessage(false);
//         setShowFailureMessage(true);
//         setButtonText("Join the waitlist");
//         toast.error("Message sending failed.", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });
//         return;
//       } else {
//         setShowSuccessMessage(true);
//         setShowFailureMessage(false);
//         setButtonText("Send Message");
//         toast.success("Thank you! Your Message has been delivered.", {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//         });


//         setEmail("");

//         setShowSuccessMessage("");
//         return;
//       }
//     }
//   };

//   return (
//     <div className="container bg-[#201A26] m-0">
//       {/* <nav class=" p-4">
//         <div class="container mx-auto">
//           <div class="flex items-center justify-between">
//             <div class="text-white pl-8 ml-8">
//               <img src={logo} alt="" width={75} />
//             </div>

//           </div>
//         </div>
//       </nav> */}
//       {/* // <div className=" lg:p-8 lg:pt-0 lg:grid lg:grid-cols-2"> */}


//         <div className="p-8 pt-0 shadow-none bg-[#201A26] ">
//           <h2 className="text-xl mx-8 ml-8 mt-32   text-slate-100  md:text-20px">
//             Learn at your behest
//           </h2>
//           <h2 className="text-xl m-8 mr-4 ml-7 my-4 font-bold text-slate-100 dark:text-teal-400 md:text-64px">
//             Learn from
//           </h2>
//           <h1 class="text-xl pt-3 pb-6 mt-2 mb-10 ml-7 font-bold bg-gradient-to-l pl-0 from-purple-900 to-pink-500 text-transparent bg-clip-text dark:text-teal-400 md:text-64px inline-block">
//             anywhere
//           </h1>

//           <form
//             onSubmit={handleSubmit}
//             autoComplete="off"
//             className="rounded-lg flex flex-col px-8 text-gray-50   dark:bg-blue-500"
//           >

//             <div className="flex flex-wrap-reverse gap-0 flex-col md:flex-row items-center pt-0 mt-0 justify-start">
//               <input
//                 type="email"
//                 name="email"
//                 autoComplete="off"
//                 autoCorrect="off"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//                 className=" w-1/2 bg-transparent  py-2 pl-2  mt-0 mb-1 focus:outline-none focus:rounded-md focus:ring-1 ring-1 rounded-md  ring-purple-500 font-light text-white"
//               />
//               <div className="flex flex-row items-center m-6 ml-3 justify-start my-1">
//                 <button
//                   type="submit"
//                   className="text-white bg-gradient-to-l from-purple-900 to-pink-500 hover:bg-gradient-to-l hover:ring-2 focus:outline-none  hover:ring-black-500 md:text-16px rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
//                 >
//                   {buttonText}
//                 </button>
//               </div>

//               <p className=" block text-gray-100 flex-none gap-0 mb-0 pb-0 font-normal text-16px mt-6 dark:text-gray-50">
//                 Enter your email address
//               </p>
//             </div>
//             {errors?.email && (
//               <p className="text-red-500">Email cannot be empty.</p>
//             )}
//           </form>
//           {showSuccessMessage}
//         {showFailureMessage}
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           closeOnClick
//           pauseOnHover
//           draggable
//           progress={undefined}
//           theme="dark"
//         />
//         </div>

//         {/* <div class="grid-container pt-0">
//           <div class="grid grid-cols-2 gap-4">
//             <div class=" p-4 my-auto">
//               <img
//                 src={landingImage1}
//                 alt="Image 1"
//                 className="rounded-lg"
//                 width={331}
//               />
//             </div>
//             <div class=" p-4">
//               <img
//                 src={landingImage2}
//                 alt="Image 2"
//                 className="rounded-lg"
//                 width={318}
//               />
//             </div>
//             <div class="col-span-2  p-4">
//               <img
//                 src={landingImage3}
//                 className="rounded-lg"
//                 alt="Image 3"
//                 width={701}
//               />
//             </div>
//           </div>
//         </div> */}

        
//       {/* </div> */}
//     </div>
//   );
// };

// function SubmitForm() {
//   const postUrl =
//     "https://gmail.us21.list-manage.com/subscribe/post?u=f5562457c5ed1c7f22b3a571c&id=68519ba748";
//   // const postUrl = `https://gmail.us21.list-manage.com/subscribe/post?u=${process.env.MAILCHIMP_U}&id=${process.env.MAILCHIMP_ID}`;

//   return React.createElement(MailchimpSubscribe, {
//     url: postUrl,
//     render: ({ subscribe, status }) => {
//       return React.createElement(Contact, {
//         status: status,
//         onValidate: (formData) => subscribe(formData),
//       });
//     },
//   });
// }

// export default SubmitForm;


//             {/* <h1 className="text-sm pt-6 font-bold dark:text-gray-50">Enter your email address</h1> */}

//             {/* <label
//           htmlFor="firstName"
//           className="text-gray-500 font-light mt-8 dark:text-gray-50"
//         >
//           First Name
//           <span className="text-red-500 dark:text-gray-50">*</span>
//         </label>
//         <input
//           type="text"
//           name="text"
//           autoComplete="off"
//           value={firstName}
//           onChange={(e) => {
//             setFirstName(e.target.value);
//           }}
//           className="bg-transparent focus:bg-transparent appearance-none border-b py-2 pl-2 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500 font-light text-white"
//         />
//         {errors?.firstName && (
//           <p className="text-red-500">First Name cannot be empty.</p>
//         )}

//         <label
//           htmlFor="lastName"
//           className="text-gray-500 font-light mt-8 dark:text-gray-50"
//         >
//           Last Name
//           <span className="text-red-500 dark:text-gray-50">*</span>
//         </label>
//         <input
//           type="text"
//           name="text"
//           autoComplete="off"
//           value={lastName}
//           onChange={(e) => {
//             setLastName(e.target.value);
//           }}
//           className="bg-transparent focus:bg-transparent appearance-none border-b py-2 pl-2 focus:outline-none focus:rounded-md focus:ring-1 ring-purple-500 font-light text-white"
//         />
//         {errors?.lastName && (
//           <p className="text-red-500">Last Name cannot be empty.</p>
//         )} */}

//             {/* <div class="m-3 py-5 px-5 bg-gray-800 rounded inline-block">
//   <p class="text-white font-bold text-sm">Join our newsletter</p>
//   <div class="flex justify-between mb-3">
//     <input class="mr-3 shadow-inner text-white rounded px-3 text-sm bg-gray-900 border-b border-gray-700" placeholder="Enter your email" type="text"/>
//     <button class="shadow-lg bg-blue-600 text-white font-bold text-sm rounded px-3 py-2">Subscribe</button>
//   </div>
//   <label class="text-sm text-white mt-3 block">
//     <div class="inline-block bg-gray-900 shadow-inner border-b border-gray-700 rounded h-4 w-4">
//       <input class="appearance-none" type="checkbox"/>
//     </div>
//     <span class="">send me occasional promotional emails</span>
//   </label>
// </div> */}
