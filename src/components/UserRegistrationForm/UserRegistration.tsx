import { FormEvent, useState } from "react";
import "../UserLogin/UserLogin.css";
function UserRegistration() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const validateName = () => {
    if (!user.name) {
      setUser({ ...user, nameError: "Please enter your name." });
      return false;
    } else {
      setUser({ ...user, nameError: "" });
    }
    return true;
  };

  const validateEmail = () => {
    if (!user.email) {
      setUser({ ...user, emailError: "Please enter your email." });
      return false;
    } else {
      setUser({ ...user, emailError: "" });
    }
    return true;
  };

  const validatePassword = () => {
    if (!user.password) {
      setUser({ ...user, passwordError: "Please enter your password." });
      return false;
    } else if (user.password.length < 6) {
      setUser({
        ...user,
        passwordError: "Password must be at least 6 characters.",
      });
      return false;
    }
    setUser({ ...user, passwordError: "" });
    return true;
  };

  const validateConfirmPassword = () => {
    if (!user.confirmPassword) {
      setUser({
        ...user,
        confirmPasswordError: "Please enter your confirm password.",
      });
      return false;
    } else if (user.confirmPassword !== user.password) {
      setUser({ ...user, confirmPasswordError: "Password does not match." });
      return false;
    }
    setUser({ ...user, confirmPasswordError: "" });
    return true;
  };

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = user;
    if (!validateName()) {
      return;
    }
    if (!validateEmail()) {
      return;
    }
    if (!validatePassword()) {
      return;
    }
    if (!validateConfirmPassword()) {
      return;
    }
    
    console.log(name, email, password, confirmPassword);
  };

  return (
    <>
      <div className="flex justify-center items-center  w-[100%] h-[100%]">
        <div className="w-[100%] p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center">Register</h2>
          <form className="mt-8 m-auto w-96 space-y-6" onSubmit={submitForm}>
            <div className="grid grid-cols-1 gap-6">
              <label className="text-lg font-bold text-gray-600">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your name"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                onBlur={validateName}
              />
              {user.nameError && (
                <p className="text-red-500 error-message text-xs">
                  {user.nameError}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 gap-6">
              <label className="text-lg font-bold text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your email address"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                onBlur={validateEmail}
              />
              {user.emailError && (
                <p className="text-red-500 error-message text-xs">
                  {user.emailError}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 gap-6">
              <label className="text-lg font-bold text-gray-600">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                onBlur={validatePassword}
              />
              {user.passwordError && (
                <p className="text-red-500 error-message text-xs">
                  {user.passwordError}
                </p>
              )}
            </div>
            <div
              className="grid grid-cols-1
                        gap-6"
            >
              <label className="text-lg font-bold text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                placeholder="Confirm your password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                onBlur={validateConfirmPassword}
              />
              {user.confirmPasswordError && (
                <p className="text-red-500 error-message text-xs">
                  {user.confirmPasswordError}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
