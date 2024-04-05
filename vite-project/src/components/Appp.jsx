import { useState } from 'react';
import Component1 from './Component1';

const Appp = () => {
  let [myName, setmyName] = useState('Victor')

  return (
    <div>
      <Component1
          myName = {myName}
        />
    </div>
  )
}

export default Appp