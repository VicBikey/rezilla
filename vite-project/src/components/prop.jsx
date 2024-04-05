import { data } from "./data";

const Val = () => {
  return (
    <>
      <div  className="">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="hero.png" alt="Shoes" />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title text-white">Horse</h2>
              <div className="card-actions">
                <button className="px-4 py-5 text-white bg-slate-600 rounded-3xl mt-3">
                  View Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export const HorseComp = () => { 

return (
  <>
    {/* {data.map(val => (
      <Val />
    ))}     */}

    {/* {data.map(val => 
        <Val/>
    )} */}

    {
      data.map((val) =>
      <Val/>
      )
    }
  </>
)
 
}