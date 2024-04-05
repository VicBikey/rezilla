import React, { useEffect, useState } from "react";
import axios from "axios";
import {Button} from 'flowbite-react'

const apiLink = 'https://jsonplaceholder.typicode.com/todos/'

const AxiosPost = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get(`${apiLink}/1`)
            .then((response) => {
            console.log(response.data)
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
            <Button className="" onClick={postRequest}>Post Request</Button>

            <p>{post.title}</p>
            {/* <p>{post.completed}</p> */}

        </div>
    );
};

export default AxiosPost;