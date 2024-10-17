import { FormEvent, useState } from "react";

import "./UserLogin.css";

function UserLogin() {
    const  [form, setForm] = useState({
        email: "",
        password: "",
        emailError: "",
        passwordError: ""
    });

    const validateEmail = () => {
        if(!form.email) {
            setForm({ ...form, emailError: "Please enter your email." });
            return false;
        } else {
            setForm({ ...form, emailError: "" });
            return true;
        }
    }

    const validatePassword = () => {
        if(!form.password) {
            setForm({ ...form, passwordError: "Please enter your password." });
            return false;
        } else if(form.password.length < 6) {
            setForm({ ...form, passwordError: "Password must be at least 6 characters." });
            return false;
        }
        setForm({ ...form, passwordError: "" });
        return true;
    }



   const submitForm = (event: FormEvent) => {
        event.preventDefault();
        debugger
        const { email, password } = form;
        if(!validateEmail()) {
            return;
        }
        if(!validatePassword()) {
            return;
        }
        console.log(email, password);
    }




    return (
        <div className="flex justify-center  w-[100%] h-[100%]">
            <div className="w-[100%] p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center"
                >Login</h2>
                <form className="mt-8 m-auto w-96 space-y-6"
                onSubmit={submitForm}
                >
                    <div className="grid grid-cols-1 gap-6">
                        <label className="text-lg font-bold text-gray-600"
                        >Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your name"
                            className="w-full h-12 px-4 focus:outline-none focus:border-blue-500  border rounded-md"
                            value={form.email}
                            onChange={(event) => setForm({ ...form, email: event.target.value })}
                            onBlur={validateEmail}
                        />
                        {form.emailError && <span className="error-message text-xs">{form.emailError}</span>}
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <label className="text-lg font-bold text-gray-600"
                        >Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full  px-4 h-12 focus:outline-none focus:border-blue-500  py-2 border rounded-md"
                            value={form.password}
                            onChange={(event) =>   setForm({ ...form, password: event.target.value })}
                            onBlur={validatePassword}
                        />
                        {form.passwordError && <span className="error-message text-xs">{form.passwordError}</span>}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full active:scale-95 active:transition-all px-4 hover:bg-blue-700 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}



export default UserLogin;
    