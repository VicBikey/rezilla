import { useState, useEffect } from "react"

const FakeApi = () => {
  const [fake, setFake] = useState(null)
  console.log(fake)

  const fakeStore = async () => {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxH7_mJOYrn5IpyATacibMcOo9o859Pp5gIQbVZxJzw8NaE91F70BG6SXL_8h-Fd0iD/exec?sheetId=1dPGPmLQSJnQ65XOQ6x6ADxiQ0hXZq7XFrkdJptME1zc&sheetName=Sheet1");
    const {data} = await response.json();
    console.log(data);
    setFake(data)
  };

  useEffect(() => {
    fakeStore()
  }, [])
  

  return (
    <div className="w-screen bg-black text-white flex gap-5 flex-wrap items-center justify-center py-5">
      <h1 className="text-yellow-200 text-3xl animate-bounce">API</h1>
      <div className="flex gap-8 flex-wrap items-center justify-center py-5">
      {fake?.map((values, indx) => {
        return (
          <>
            <div key={indx}>
            <div className=' flex justify-center h-[600px] shadow-md shadow-white w-[400px] '>
                <p>{ values.status}</p>
              </div> 
              </div>
            </>
        )
      })}
        </div>
    </div>
  )
}

export default FakeApi