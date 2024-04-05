import { useState, useEffect } from 'react';
import axios from "axios";
import {Button} from 'flowbite-react'

const apiLink = 'http://49.13.2.10:4000/todos/'


const AxiosGetTest = () => {
  const [post, setPost] = useState([]);

    // useEffect(() => {
    //     func()
    // }, [])
  
  const func = () => {
      axios.get(apiLink)
            .then((response) => {
            console.log(response.data.data)
            setPost(response.data.data)
            })
            .catch((error) => {
              console.log(error)
             })
  }
  
  
  
  return (
    <div>
       <Button className="" onClick={func}>Get Request</Button>

      {post?.map((val, indx) => (
          
          <div key={indx} className='text-white h-100px bg-black flex flex-col m-5 w-[100px] '> 
          <h1>{val.status}</h1>
                  
                  <p>{val.name}</p>
                  <p>{val.completed}</p>
                  <p>{ val.id}</p>
                  <p>{ val.description}</p>
              </div>
          ))}
    </div>
  )
}

export default AxiosGetTest