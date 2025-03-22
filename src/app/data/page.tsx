"use client"
import { useState } from 'react';

export default function Page() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const correctPassword = 'yourPassword'; // The correct password to access the page

  // Fetch data from third-party API
  const fetchData = async () => {
    try {
      const response = await fetch(''); // Replace with your third-party API URL
      const result = await response.json();
      setData(result); // Save the fetched data
    } catch (err) {
      setError('Failed to fetch data');
    }
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      fetchData(); // Fetch data after successful password check
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {!isAuthenticated ? (
        <div className='max-w-2xl mx-auto'>
          <h1 className='text-white lg:text-5xl md:text-5xl'>Enter Password</h1>
          <form onSubmit={handleSubmit} className='flex flex-col mt-5'>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className='border-2 rounded-full border-white p-4 text-white mb-10'
              required
            />
            <button type="submit" className='border-2 border-white lg:text-3xl rounded-full md:text-3xl text-white p-2'>Submit</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      ) : (
        <div>
          <h1>Protected Data</h1>
          {data ? (
            <div>
              <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display the fetched data */}
            </div>
          ) : (
            <p className='text-white text-center lg:text-5xl md:text-5xl sm:text-5xl'>Loading data...</p>
          )}
        </div>
      )}
    </div>
  );
}
