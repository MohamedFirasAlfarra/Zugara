import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../Services/apiServices"; // افترض أن هذا الملف يحتوي على دالة تسجيل الدخول

const Login = () => {
  const [msg, setMsg] = useState(""); // رسالة تظهر للمستخدم عند النجاح أو الفشل
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // التنقل بين الصفحات

  const { email, password } = user;

  // تحديث الحقول عند إدخال البيانات
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // React Query Mutation لتسجيل الدخول
  // const loginMutation = useMutation({
  //   mutationFn: login, // استدعاء دالة تسجيل الدخول من ملف الخدمات
  //   onSuccess: (data) => {
  //     const { token, name } = data;

  //     // تخزين الـ token واسم المستخدم في localStorage
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("user", name);

  //     // إظهار رسالة نجاح وإعادة التوجيه
  //     setMsg("Login successful! Welcome back.");
  //     setTimeout(() => navigate("/Landing"), 2000); // الانتقال إلى صفحة Landing بعد ثانيتين
  //   },
  //   onError: (error) => {
  //     // معالجة الخطأ وإظهار رسالة فشل
  //     setMsg(error.response?.data?.message || "Login successful! Welcome back.");
  //   },
  // });

  

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login successful, response data:", data); // تحقق من البيانات المستلمة
      const { token, name } = data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', name);
      setMsg('Login successful! Welcome back.');
      setTimeout(() => navigate('/Landing'), 2000);
    },
    onError: (error) => {
      console.error("Login failed, error response:", error); // تحقق من الخطأ
      setMsg(error.response?.data?.message || 'Login failed');
    },
    
  });
  

  // دالة تسجيل الدخول
  const handleLogin = () => {
    // التحقق من الحقول قبل إرسال الطلب
    if (!email || !password) {
      setMsg("Please fill in both email and password.");
      return;
    }

    // إرسال الطلب إلى الـ API
    loginMutation.mutate(user);
  };

  return (
    <div className="div3 h-auto flex justify-center items-center">
      <div
        className="container lg:w-[50%] md:w-[70%] sm:w-[80%] w-full"
        style={{ padding: 20, height: "50vh", width: 280 }}
      >
        <div align="center">
          <h2 className="text">Sign In</h2>
          <div className="underline"></div>
          <h4 style={{ color: "green" }}>{msg}</h4> {/* رسالة النجاح أو الفشل */}
        </div>
        <label
          htmlFor="Email"
          className="form-label text-xl text-white font-medium"
        >
          Email:
        </label>
        <input
          className="rounded-lg p-1 text-black"
          label="Email"
          name="email"
          value={email}
          onChange={onInputChange}
          placeholder="Enter Email"
          type="text"
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
        <label
          htmlFor="Password"
          className="form-label text-xl text-white font-medium"
        >
          Password:
        </label>
        <input
          className="rounded-lg p-1 text-black"
          label="Password"
          name="password"
          value={password}
          onChange={onInputChange}
          placeholder="Enter password"
          type="password"
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
        <button
          className="bg-indigo-600 font-bold w-full p-3 rounded-2xl"
          onClick={handleLogin}
          style={{
            color: "white",
            border: "none",
          }}
        >
          Sign In
        </button>
        <div className="w-full h-auto block justify-center items-center mb-4 mt-4">
          <p className="mb-4 mt-4">Don't have an account?</p>
          <NavLink to="/Signup">
            <span
              className="bg-indigo-600 p-2 rounded-md"
              style={{ marginLeft: "4px", textDecoration: "underline" }}
            >
              Signup
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
