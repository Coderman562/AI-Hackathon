import React, { useState } from 'react';

const PromptResultPage = () => {
  const [result, setResult] = useState('');

  const handleGenerate = () => {
    // Logic to generate result goes here
    setResult('Generated result goes here');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-green-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl mb-4">PromptResultPage</h1>
        <div className="mb-6">
          <label htmlFor="result" className="block mb-1 text-gray-600">
            Result:
          </label>
          <textarea
            id="result"
            name="result"
            value={result}
            readOnly
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="3"
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={handleGenerate}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default PromptResultPage;
