import React, { useState } from 'react';
import PrimaryBtn from '../../components/Button/PrimaryBtn';

const LoginSignin = () => {
  const [action, setAction] = useState('Sign Up');
  return (
    <div className="container lg:w-[50%] md:w-[70%] sm:w-[80%]">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Signin Trainers' ?
         (
         <form className="trainer-signin-form">
         <div className="col-12 mb-4">
           <label htmlFor="name" className="form-label text-2xl font-bold">
             Name:
           </label>
           <input
             type="text"
             className="form-control"
             id="name"
             placeholder="Enter your Name"
            
           />
         </div>
         <div className="col-12 mb-4">
           <label htmlFor="email" className="form-label text-2xl font-bold">
             Email:
           </label>
           <input
             type="email"
             className="form-control"
             id="email"
             placeholder="Enter your Email"
            
           
           />
         </div>
         <div className="col-12 mb-4">
           <label htmlFor="password" className="form-label text-2xl font-bold">
             Password:
           </label>
           <input
             type="password"
             className="form-control"
             id="password"
            
           />
         </div>
         <div className="col-12 mb-4">
           <label htmlFor="years" className="form-label text-2xl font-bold">
             Years:
           </label>
           <input
             type="number"
             className="form-control"
             id="years"
             placeholder="Enter your Years"
           />
         </div>
         <div className="col-12 col-md- w-auto mt-10 mb-6 flex justify-between">
           <label htmlFor="gender" className="form-label text-2xl font-bold">
             Gender:
           </label>
           <div className="form-radio">
             <input
               type="radio"
               id="genderFemale"
             
             
             />
             <label htmlFor="genderFemale">Female</label>
           </div>
           <div className="form-radio">
             <input
               type="radio"
               id="genderMale"
             
              
             />
             <label htmlFor="genderMale">Male</label>
           </div>
         </div>
         <div className="col-12 mb-4">
           <label htmlFor="service" className="form-label text-2xl font-bold">
             Service:
           </label>
           <select
             className="bg-indigo-600 text-white text-center p-1 px-2 rounded-xl"
             id="service"
             
           >
             <option value="Fitness">Fitness</option>
             <option value="Yoga">Yoga</option>
             <option value="Gym">Gym</option>
             <option value="Aerobics">Aerobics</option>
             <option value="Boxing">Boxing</option>
             <option value="Body Building">Body Building</option>
             <option value="Zumba">Zumba</option>
           </select>
         </div>
         <PrimaryBtn type="submit">Register as Trainer</PrimaryBtn>
       </form>

      
        ) :
         (
         
            <form className="user-signup-form">
      <div className="col-12 mb-4">
        <label htmlFor="name" className="form-label text-2xl font-bold">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter your Name"
         
        />
      </div>
      <div className="col-12 mb-4">
        <label htmlFor="email" className="form-label text-2xl font-bold">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your Email"
         
        />
      </div>
      <div className="col-12 mb-4">
        <label htmlFor="password" className="form-label text-2xl font-bold">
          Password:
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your Password"
        
        />
      </div>
      <div className="col-12 mb-4">
        <label htmlFor="height" className="form-label text-2xl font-bold">
          Height:
        </label>
        <input
          type="number"
          className="form-control"
          id="height"
          placeholder="Enter your Height"
         
        />
      </div>
      <div className="col-12 mb-4">
        <label htmlFor="weight" className="form-label text-2xl font-bold">
          Weight:
        </label>
        <input
          type="number"
          className="form-control"
          id="weight"
          placeholder="Enter your Weight"
         
        />
      </div>
      <PrimaryBtn type="submit">Register as User</PrimaryBtn>
            </form>
        )}
      </div>
      <div className="submit-container">
        <div
          className={action === 'Signin Trainers' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Sign Up')}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => setAction('Signin Trainers')}
        >
          Signin Trainers
        </div>
      </div>
    </div>
  );
};

export default LoginSignin;
