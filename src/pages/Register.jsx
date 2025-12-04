import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "visitor",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  // handle text inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // generate otp + show otp field
  const handleSendOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);

    // TODO: send OTP to backend (email/SMS)
    console.log("OTP sent:", newOtp);

    setOtpSent(true);
  };

  // final submit after otp verification
  const handleSignup = (e) => {
    e.preventDefault();

    if (otp !== generatedOtp) {
      alert("Invalid OTP");
      return;
    }

    // TODO: send signup data to backend
    console.log("Signup Complete:", formData);

    alert("Signup Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md 
                         focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md 
                         focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm mb-1">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md 
                         focus:ring-2 focus:ring-blue-500"
            >
              <option value="visitor">Visitor</option>
              <option value="employee">Employee</option>
              <option value="security">Security</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Send OTP Button */}
          {!otpSent && (
            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full bg-blue-600 text-white py-2 rounded-md 
                         hover:bg-blue-700"
            >
              Send OTP
            </button>
          )}

          {/* OTP Section */}
          {otpSent && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Enter OTP</label>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md 
                             focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md 
                           hover:bg-green-700"
              >
                Complete Signup
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
