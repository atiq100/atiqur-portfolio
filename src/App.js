import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

import ParticlesBacground from "./Pages/Shared/Config/ParticlesBacground";
import { routes } from "./Routes/Routes";



function App() {

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <ParticlesBacground></ParticlesBacground>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
      
    
    </div>
  );
}

export default App;
