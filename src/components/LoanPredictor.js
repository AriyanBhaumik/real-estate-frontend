import axios from "axios";
import React, { useEffect, useState } from 'react';

const LoanPredictor = () => {
  const [loanPrediction, setLoanPrediction] = useState('');
  const [formData, setFormData] = useState({
    Gender: '',
    Married: '',
    Dependents: '',
    Education: '',
    Self_Employed: '',
    ApplicantIncome: '',
    CoapplicantIncome: '',
    LoanAmount: '',
    Loan_Amount_Term: '',
    Credit_History: '',
    Property_Area: ''
  });

  useEffect(() => {
    setLoanPrediction(loanPrediction);
    console.log("Updated Loan Prediction:", loanPrediction);
  }, [loanPrediction]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('https://real-estate-backend-q05k.onrender.com/get-loan-amount', formData);
      if(response.data["loan-status"] === 1)
      setLoanPrediction("Loan Approved");
    else
    setLoanPrediction("Loan Not Approved");
      
      console.log(response.data); // Log full response data
    } catch (error) {
      console.error("Error:", error.message); // Log any errors
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-10">
      <div className="bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6">Loan Eligibility Predictor</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select 
              onChange={(e) => setFormData({...formData, Gender: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select Gender</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>

            <select 
              onChange={(e) => setFormData({...formData, Married: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Marital Status</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <input 
              type="number" 
              placeholder="Dependents"
              onChange={(e) => setFormData({...formData, Dependents: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />

            <select 
              onChange={(e) => setFormData({...formData, Education: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Education</option>
              <option value="1">Graduate</option>
              <option value="0">Not Graduate</option>
            </select>

            <input
              type="number"
              placeholder="Applicant Income"
              onChange={(e) => setFormData({...formData, ApplicantIncome: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />

            <input 
              type="number"
              placeholder="Co-applicant Income"
              onChange={(e) => setFormData({...formData, CoapplicantIncome: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />

            <input 
              type="number" 
              placeholder="Loan Amount(in thousands)"
              onChange={(e) => setFormData({...formData, LoanAmount: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />

            <input 
              type="number" 
              placeholder="Loan Term (days)"
              onChange={(e) => setFormData({...formData, Loan_Amount_Term: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            />

            <select 
              onChange={(e) => setFormData({...formData, Credit_History: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Credit History</option>
              <option value="1">Good</option>
              <option value="0">Bad</option>
            </select>

            <select 
              onChange={(e) => setFormData({...formData, Self_Employed: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Self Employed</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <select 
              onChange={(e) => setFormData({...formData, Property_Area: e.target.value})}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Property Area</option>
              <option value="2">Urban</option>
              <option value="1">Semiurban</option>
              <option value="0">Rural</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Predict Loan Eligibility
          </button>
        </form>
{/* Render loanPrediction */}
{loanPrediction && (
  <div className="mt-6 p-4 bg-white rounded-lg shadow-md border border-gray-200">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      Loan Prediction Result:
    </h3>
    <p className="text-gray-600">
      {loanPrediction}
    </p>
  </div>
)}

      </div>
    </div>
  );
};

export default LoanPredictor;