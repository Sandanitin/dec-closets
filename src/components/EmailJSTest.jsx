import React from 'react';
import emailjs from '@emailjs/browser';

const EmailJSTest = () => {
  const testEmailJS = () => {
    // Simple test to check if EmailJS is properly configured
    const templateParams = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '123-456-7890',
      message: 'This is a test message to verify EmailJS is working properly.'
    };

    emailjs.send('service_vvpe66o', 'template_q6yi57d', templateParams)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('EmailJS is working! Check the console for details.');
      }, (error) => {
        console.log('FAILED...', error);
        alert('EmailJS failed. Check the console for error details.');
      });
  };

  return (
    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
      <h3 className="text-xl font-bold mb-4">EmailJS Test</h3>
      <p className="mb-4">Click the button below to test if EmailJS is properly configured:</p>
      <button 
        onClick={testEmailJS}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Test EmailJS
      </button>
      <p className="mt-4 text-sm text-gray-600">
        Note: Make sure you've configured your EmailJS service and template correctly in your EmailJS dashboard.
      </p>
    </div>
  );
};

export default EmailJSTest;