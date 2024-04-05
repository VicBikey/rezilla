import { useState, useEffect } from 'react';
import axios from "axios";

const apiLink = 'http://49.13.2.10:4000/todos/'

const AxiosPostTest = () => {
  const [post, setPost] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [toggle, setToggle] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    axios.get(apiLink)
        .then((response) => {
        console.log(response)
        setPost(response.data)
    })
}, [])

function postRequest() {
    axios.post(apiLink, {
        title: "I am changed",
        completed:"razor"
    }).then((response) => {
        console.log(response)
        setPost(response.data)
    })
}

  return (
    <div>
      <input className="" onChange={func}>Get Request</input>
      <p>{post.title}</p>

    </div>
  )
}

export default AxiosPostTest