import React, { useState } from "react";
import axios from "axios";
import { Button } from "flowbite-react";
import Component from "./flowbitec";
// import { Table  } from "flowbite-react";



const apiLink = 'https://jsonplaceholder.typicode.com/todos/'

const AxiosTube = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    const [getError, setGetError] = useState('');

    const axiosData = () => {
        setLoading(true);

        axios.get(`{apiLink}`)
            .then((response) => {
                console.log(response.data)
                setPost(response.data);
            })
            .catch((error) => {
                setGetError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <Button onClick={axiosData}>Click me</Button>
            {loading && <div className="text-red-500 font-bold text-5xl">Loading...</div>}
            {post.map((values, indx) => (

                <p>{ values.title}</p>
            //    <Component
            //         key={indx}

            //      title={values.title}
            //      description={values.description}
            //      completed={values.completed}
            //      id={values.id}
            //    /> 
            ))}
        </div>
    );
};

export default AxiosTube;
