import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Signup = () => {

    const [action, setAction] = useState('Sign Up');

    const [errors, setErrors] = useState({
        fname: '',
        email: '',
        password: '',
        cpassword: '',
        successMsg: ''
    });

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        c_password: "",
        role: "",
        gender: "",
        age: "",
        height: "",
        experience_years: "",
        service_id: "",
    });
    const services = [
        { id: "1", name: "Fitness" },
        { id: "2", name: "Yoga" },
        { id: "3", name: "Gym" },
        { id: "4", name: "Aerobics" },
        { id: "5", name: "Boxing" },
        { id: "6", name: "BodyBuilding" },
        { id: "7", name: "Zumba" }
    ];
    const validateTrainersInputs = () => {
        const requiredFields = ["name", "email", "password", "c_password", "age", "height", "experience_years", "role", "gender"];
        const newErrors = {};
        let isValid = true;

        requiredFields.forEach(field => {
            if (!user[field] || user[field].trim() === "") {
                newErrors[field] = `${field} is required`;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const { name, email, password, c_password, role, gender, age, height, weight, experience_years, service_id } = user;

    const onInputChange = (e) => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    // Handle user signup
    const signup = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/register", user);
            setErrors({
                // You can display success message here if needed
                successMsg: response.data.success,
            });
        } catch (err) {
            setErrors({ fname: err.response?.data?.error?.name || "Error occurred" });
        }
    };

    return (
        <div className='div2'>
            <div className='container lg:w-[50%] md:w-[70%] sm:w-[80%] w-full h-auto' >
                <div align='center'>
                    {/* <h2>Sign Up</h2> */}
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                    {errors.fname && <h3 style={{ color: "red" }}>{errors.fname}</h3>}
                    {errors.successMsg && <h3 style={{ color: "green" }}>{errors.successMsg}</h3>}
                </div>
                {action === 'Signin Trainers' ? (
                    <form className='container2 lg:w-[50%] md:w-[70%] sm:w-[80%] w-full h-auto'>
                        {/* {Object.keys(errors).length > 0 && (
                            <div className="text-red-500 mb-4">
                                Please fill in all required fields.
                            </div>
                        )} */}
                        <label htmlFor="FullName" className="form-label text-xl text-white font-medium">FullName:</label>
                        <input className='rounded-lg p-1 text-black'
                            label='Name'
                            name="name"
                            value={name}
                            onChange={onInputChange}
                            placeholder='Enter your Name'
                            type='text'
                            required
                            fullWidth
                        />
                        {/* {errors.fname && <span className="text-red-500">{errors.fname}</span>} */}
                        <label htmlFor="Email" className="form-label text-xl text-white font-medium">Email:</label>
                        <input className='rounded-lg p-1 text-black'
                            label='Email'
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            placeholder='Enter your Email'
                            type='email'
                            required
                            fullWidth
                        />
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                        <label htmlFor="Password" className="form-label text-xl text-white font-medium">Password:</label>
                        <input className='rounded-lg p-1 text-black'
                            label='Password'
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            placeholder='Enter your Password'
                            type='password'
                            required
                            fullWidth
                        />
                        {errors.password && <span className="text-red-500">{errors.password}</span>}
                        <label htmlFor="age" className="form-label text-xl text-white font-medium">age:</label>
                        <input className='rounded-lg p-1 text-black'
                            label='age'
                            name="age"
                            value={age}
                            onChange={onInputChange}
                            placeholder='Enter your age'
                            type='number'
                            required
                            fullWidth
                        />
                        {errors.age && <span className="text-red-500">{errors.age}</span>}
                        <label htmlFor="experience_years" className="form-label text-xl text-white font-medium">experience_years:</label>
                        <input className='rounded-lg p-1 text-black'
                            label='experience_years'
                            name="experience_years"
                            value={experience_years}
                            onChange={onInputChange}
                            placeholder='Enter your experience_years'
                            type='number'
                            required
                            fullWidth
                        />
                        {errors.experience_years && <span className="text-red-500">{errors.experience_years}</span>}

                        <label htmlFor="Confirm Password" className="form-label text-xl text-white font-medium">Select role: </label>
                        <select
                            name="role"
                            onChange={onInputChange}
                            value={role}
                            className="bg-indigo-600 text-white p-1 px-2 rounded-xl">

                            <option onChange={onInputChange} value="client" >client</option>
                            <option onChange={onInputChange} value="trainer" >trainer</option>
                            {/* <option value="admin">admin</option> */}
                        </select>
                        {errors.role && <span className="text-red-500">{errors.role}</span>}

                        <label htmlFor="service_id" className="form-label text-xl text-white font-medium">Service: </label>
                        <select
                            name="service_id"
                            onChange={onInputChange}
                            value={service_id}
                            className="bg-indigo-600 text-white p-1 px-2 rounded-xl"
                        >
                            <option value="">Select a Service</option>
                            {services.map(service => (
                                <option key={service.id} value={service.id}>
                                    {service.name}
                                </option>
                            ))}
                        </select>
                        {errors.service_id && <span className="text-red-500">{errors.service_id}</span>}

                        <div>
                            <label htmlFor="Confirm Password" className="form-label text-xl text-white font-medium">Gender : </label>
                            <label htmlFor="male" className='text-white font-medium pr-1 pl-2'>male</label>
                            <input className='rounded-lg p-1 '
                                type="radio"
                                name="gender"
                                value="male"
                                checked={gender === 'male'}
                                onChange={onInputChange}
                                required
                            />
                            {errors.gender && <span className="text-red-500">{errors.gender}</span>}
                            <label htmlFor="female" className='text-white font-medium pl-1 pr-2'>female</label>
                            <input className='rounded-lg p-1'
                                type="radio"
                                name="gender"
                                value="female"
                                checked={gender === 'female'}
                                onChange={onInputChange}
                                required
                            />
                            {errors.gender && <span className="text-red-500">{errors.gender}</span>}
                        </div>
                    </form>
                )
                    :
                    (
                        <form className='container2 lg:w-[50%] md:w-[70%] sm:w-[80%] w-full h-auto'>
                            <label htmlFor="FullName" className="form-label text-xl text-white font-medium">FullName:</label>
                            <input
                                className='rounded-lg p-1 text-black'
                                name="name"
                                value={name}
                                onChange={onInputChange}
                                placeholder='Enter your Name'
                                type='text'
                                required
                            />
                            <label htmlFor="Email" className="form-label text-xl text-white font-medium">Email:</label>
                            <input className='rounded-lg p-1 text-black'
                                label='Email'
                                name="email"
                                value={email}
                                onChange={onInputChange}
                                placeholder='Enter your Email'
                                type='email'
                                required
                                fullWidth
                            />
                            <label htmlFor="Password" className="form-label text-xl text-white font-medium">Password:</label>
                            <input className='rounded-lg p-1 text-black'
                                label='Password'
                                name="password"
                                value={password}
                                onChange={onInputChange}
                                placeholder='Enter your Password'
                                type='password'
                                required
                                fullWidth
                            />
                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                            <label htmlFor="age" className="form-label text-xl text-white font-medium">age:</label>
                            <input className='rounded-lg p-1 text-black'
                                label='age'
                                name="age"
                                value={age}
                                onChange={onInputChange}
                                placeholder='Enter your age'
                                type='number'
                                required
                                fullWidth
                            />
                            {errors.age && <span className="text-red-500">{errors.age}</span>}
                            <label htmlFor="Confirm Password" className="form-label text-xl text-white font-medium">Select role: </label>
                            <select
                                name="role"
                                onChange={onInputChange}
                                value={role}
                                className="bg-indigo-600 text-white p-1 px-2 rounded-xl">

                                <option onChange={onInputChange} value="client" >client</option>
                                <option onChange={onInputChange} value="trainer" >trainer</option>
                                {/* <option value="admin">admin</option> */}
                            </select>
                            {errors.role && <span className="text-red-500">{errors.role}</span>}
                            <div>
                                <label htmlFor="Confirm Password" className="form-label text-xl text-white font-medium">Gender : </label>
                                <label htmlFor="male" className='text-white font-medium pr-1 pl-2'>male</label>
                                <input className='rounded-lg p-1 '
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={gender === 'male'}
                                    onChange={onInputChange}
                                    required
                                />
                                {errors.gender && <span className="text-red-500">{errors.gender}</span>}
                                <label htmlFor="female" className='text-white font-medium pl-1 pr-2'>female</label>
                                <input className='rounded-lg p-1'
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={gender === 'female'}
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                        </form>
                    )
                }
                <button type='button' onClick={signup} className="flex justify-center mr-auto ml-auto bg-indigo-600 p-3 rounded-lg" fullWidth> Sign Up</button>
                <div className="submit-container">
                    <div
                        className={action === 'Signin Trainers' ? 'submit gray' : 'submit'}
                        onClick={() => setAction('Sign Up')} onChange={onInputChange} value={role}> User
                    </div>

                    <div
                        className={action === 'Sign Up' ? 'submit gray' : 'submit'}
                        onClick={() => setAction('Signin Trainers')}
                        onChange={onInputChange} value={role}>
                        Trainers
                    </div>

                </div>
                <div>
                    <p className='mb-4 mt-4'> Already have an account?</p>
                    <NavLink to="/Login">
                        <span className='bg-indigo-600 p-2 rounded-md ' style={{ marginLeft: "4px", textDecoration: "underline" }}>Login</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Signup;
