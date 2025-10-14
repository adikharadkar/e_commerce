import { useState } from "react";
import "../styles/Registration.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (formData.firstName.trim().length === 0) {
      newErrors.firstName = "First name is required!";
      isValid = false;
    }

    if (formData.lastName.trim().length === 0) {
      newErrors.lastName = "Last name is required!";
      isValid = false;
    }

    if (formData.username.trim().length === 0) {
      newErrors.username = "Username is required!";
      isValid = false;
    }

    if (formData.email.trim().length === 0) {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email!";
      isValid = false;
    }

    if (formData.password.trim().length < 8) {
      newErrors.password = "Password must be at least 8 characters long!";
      isValid = false;
    }
    if (formData.confirmPassword.trim().length < 8) {
      newErrors.confirmPassword =
        "Password must be at least 8 characters long!";
      isValid = false;
    } else if (formData.confirmPassword.trim() !== formData.password.trim()) {
      newErrors.confirmPassword = "Password does not match!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <div>
        <div className="input-container">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <span>{errors.firstName}</span>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <span>{errors.lastName}</span>
        </div>
      </div>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />
        <span>{errors.username}</span>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
        <span>{errors.password}</span>
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Re-enter password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span>{errors.confirmPassword}</span>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
