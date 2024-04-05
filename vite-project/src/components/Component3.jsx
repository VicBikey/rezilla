import { useContext } from 'react'
import { userContext } from './useContext'

const Component3 = () => {
    const { name, setName, changeName} = useContext(userContext)
  return (
      <div >
          My name is {name}
          {/* <button {ondblclick='{changeName}'}></button> */}
    </div>
  )
}

export default Component3