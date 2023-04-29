import React, { useState } from 'react';

export default function FormPage(){
  console.log("test")

  const [formData, setFormData] = useState({
    organizationName: '',
    volunteerInformation: '',
    nonprofitInformation: '',
    memberCount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-green-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl mb-4">FormPage</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="organizationName" className="block mb-1">
              Organization Name:
            </label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="volunteerInformation" className="block mb-1">
              Volunteer Information:
            </label>
            <textarea
              id="volunteerInformation"
              name="volunteerInformation"
              value={formData.volunteerInformation}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              rows="3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nonprofitInformation" className="block mb-1">
              Nonprofit Information:
            </label>
            <textarea
              id="nonprofitInformation"
              name="nonprofitInformation"
              value={formData.nonprofitInformation}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              rows="3"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="memberCount" className="block mb-1">
              Member Count:
            </label>
            <input
              type="number"
              id="memberCount"
              name="memberCount"
              value={formData.memberCount}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};



//   const [formData, setFormData] = useState({
//   organizationName: '',
//   volunteerInformation: '',
//   nonprofitInformation: '',
//   memberCount: '',
// });

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({ ...formData, [name]: value });
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log('Form data submitted:', formData);
// };

// return (
//   <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-green-600 flex justify-center items-center">
//     <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
//       <h1 className="text-2xl mb-4">FormPage</h1>
//       <form onSubmit={handleSubmit}>
//         {[
//           {
//             label: 'Organization Name:',
//             id: 'organizationName',
//             type: 'text',
//           },
//           {
//             label: 'Volunteer Information:',
//             id: 'volunteerInformation',
//             type: 'textarea',
//           },
//           {
//             label: 'Nonprofit Information:',
//             id: 'nonprofitInformation',
//             type: 'textarea',
//           },
//           {
//             label: 'Member Count:',
//             id: 'memberCount',
//             type: 'number',
//           },
//         ].map(({ label, id, type }) => (
//           <div key={id} className="mb-6">
//             <label htmlFor={id} className="block mb-1 text-gray-600">
//               {label}
//             </label>
//             <div className="relative bg-white shadow-md rounded-lg">
//               {type === 'textarea' ? (
//                 <textarea
//                   id={id}
//                   name={id}
//                   value={formData[id]}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   rows="3"
//                 />
//               ) : (
//                 <input
//                   type={type}
//                   id={id}
//                   name={id}
//                   value={formData[id]}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 />
//               )}
//             </div>
//           </div>
//         ))}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   </div>