import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AxiosGetTest from "./components/useContext/AxiosGetTest";
import AxiosPostTest from "./components/AxiosPostTest";
import AxiosDeleteTest from "./components/useContext/AxiosDeleteTest";

const routes = createBrowserRouter([
  { path: "/", element: <AxiosGetTest/> },
  { path: "/v", element: <AxiosPostTest/> },
  {path: "/admin", element: <AxiosDeleteTest/>}
]);
function App() {

  return (
    <>
      <div className="flex justify-around gap-5 flex-wrap h-screeen w-full py-5">
       
        
        
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
