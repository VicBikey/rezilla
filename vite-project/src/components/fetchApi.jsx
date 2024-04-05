import { useState, useEffect } from 'react'

const FetchApi = () => {
    const [data, setData] = useState([]);
    console.log(data)
    
    useEffect(() => {
        getData();
    }, [])
    
   
    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
        const jsonData = await response.json()
        setData(jsonData)

    }



    
  return (
      <div className='w-screen bg-black'>
          <div className='flex flex-wrap gap-5 w-[100%] justify-center'>
              {data.map((values) => {
                  return (
                      
                      <>
                        <div className='bg-yellow-500 h-[100px]  items-center flex justify-center self-center w-[200px] text-black'>
                              <h5>{values.title}</h5>
                        </div>
                      </>
                  )
              })}
          </div>
    </div>
  )
}

export default FetchApi