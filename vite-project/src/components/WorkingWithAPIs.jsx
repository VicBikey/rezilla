import { useState } from "react";
import { dbData } from "./dt";

export const WorkingWithAPIs = () => {
    const [gUser, changeGuser] = useState({
        'name': 'vic'
    })

    const [gProfile, changeGProfile] = useState({dbData})
    return (
        <>
    
          <div className="flex justify-center items-center h-screen w-full">
                {/* <p className="text-3xl ">{gUser.name}</p> */}
            <div className="">
              <img src='' alt="" />
                    <p className=" text-3xl">{gUser.name}</p>
                    <a className="btn bg-red-900" href={dbData.url} rel="noreferee" target="_blank">visit my profile</a>
            </div>
            </div>
        </>
  )
}

