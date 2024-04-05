import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const AxiosPages = () => {
  const [getUsers, setGetUsers] = useState([]);
  const [getError, setGetError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGitHubUsers(); // Calling the function when component mounts
  }, []);

  const getGitHubUsers = () => {
    setLoading(true);
    setGetError('');

    // Using axios
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        // console.log(response.status);
        // console.log(response.data);
        setGetUsers(response.data); // Assuming setGetUsers is a function to update state
      })
        .catch((error) => {
            console.log(error);
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(error.response.data.message);
            setGetError(error.message); // Set error message in state
        })
      .finally(function () {
        setLoading(false);
      });
  };

  return (
    <>
      <div>Axios page: Working with APIs (GET Request)</div>
      <button onClick={getGitHubUsers} className='w-[100px] h-[40px] bg-red-500 rounded-xl'>Get users</button>
      {loading && <div className="text-red-500 font-bold text-5xl ">Loading...</div>}
      {getError && <div className="text-red-500 font-bold text-5xl ">{getError}</div>}
      {getUsers.length > 0 && (
        <div>
          {getUsers.map((user) => (
            <div className="flex items-center space-x-4 bg-orange-400 m-4 p-2 capitalize" key={user.id}>
              <img className="w-10 h-10 rounded-full" src={user.avatar_url} alt=""/>
              <div>{user.login}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};