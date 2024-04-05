import { useState, useEffect } from "react"
import axios from "axios"

const apiLnk  = 'https://script.google.com/macros/s/AKfycbxH7_mJOYrn5IpyATacibMcOo9o859Pp5gIQbVZxJzw8NaE91F70BG6SXL_8h-Fd0iD/exec?sheetId=1dPGPmLQSJnQ65XOQ6x6ADxiQ0hXZq7XFrkdJptME1zc&sheetName=Sheet1'
const ApiSpreadSheet = () => {
    const [spread, setSpread] = useState(null)

    useEffect(() => {
        const data = axios.get(apiLink).then((response) => {
            console.log(response.data)
        })
    })

  return (
      <div>
          
    </div>
  )
}

export default ApiSpreadSheet