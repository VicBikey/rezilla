import { useState, useEffect} from 'react'
import axios from 'axios'


const apiLink = 'https://script.google.com/macros/s/AKfycbxH7_mJOYrn5IpyATacibMcOo9o859Pp5gIQbVZxJzw8NaE91F70BG6SXL_8h-Fd0iD/exec?sheetId=1dPGPmLQSJnQ65XOQ6x6ADxiQ0hXZq7XFrkdJptME1zc&sheetName=Sheet1'

const Axios = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        const data = axios.get(apiLink).then((response) => {
            console.log(response.data)
            setPost(response.data.data)
        })

            .catch((error) => {
             console.log(error)
            })
        
    }, [apiLink])


  return (
      <div>
          {post?.map((val, indx) => (
              
              <div key={indx} className='text-white h-100px bg-black flex flex-col m-5 w-[100px] '> 
                  <h1>{ val.status}</h1>
                  <p>{val.Name}</p>
                  <p>{ val['Email Address']}</p>
                  <p>{ val['Phone Number']}</p>
              </div>
          ))}
          
    </div>
  )
}

export default Axios