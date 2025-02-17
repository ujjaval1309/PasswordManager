import React, { useEffect, useState } from 'react';

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [data, setData] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("data");
    if (localData) {
      setData(JSON.parse(localData));
      
    }
  }, []);

  async function fetchData() {
    const res = await fetch("http://localhost:3010/fetchData", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }
  fetchData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = () => {
    const newData = [...data, form];
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
    setForm({ site: "", username: "", password: "" });
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#0080000a_1px,transparent_1px),linear-gradient(to_bottom,#0080000a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-6 rounded-lg shadow-lg mt-20 h-86 bg-white opacity-70">
        <input
          type="text"
          name="site"
          value={form.site}
          placeholder="Enter URL"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={handleChange}
        />
        <div className="w-full flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={form.username}
            className="w-full p-2 mb-4 md:mb-0 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={form.password}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={handleChange}
          />
        </div>
        <button
          className="mt-4 px-6 py-2 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between max-w-4xl mx-auto p-6 rounded-lg shadow-lg mt-4 bg-white opacity-70"
          >
            <div>
              <p className="text-lg font-semibold">URL : {item.site}</p>
              <p className="text-sm">Username : {item.username}</p>
              <p className="text-sm">Password : {item.password}</p>
            </div>
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Manager;