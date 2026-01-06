import { useEffect, useState } from "react";
import API from "../api/axios";
import "../styles/auth.css";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  useEffect(() => {
    API.get("/user/profile").then((res) => {
      const data = res.data;
      setForm({
        name: data.name || "",
        email: data.email || "",
        phone: data.phone || "",
        dob: data.dob ? data.dob.slice(0, 10) : "",
      });
    });
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleUpdate = async () => {
    await API.put("/user/profile", {
      name: form.name,
      phone: form.phone,
      dob: form.dob,
    });
    alert("Profile updated");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Edit Profile</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          value={form.email}
          disabled
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
        />

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />

        <button onClick={handleUpdate}>Save</button>
      </div>
    </div>
  );
};

export default Profile;
