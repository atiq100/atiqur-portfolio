import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home/Home/Home";
import ParticlesBacground from "./Pages/Shared/Config/ParticlesBacground";



function App() {

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <ParticlesBacground></ParticlesBacground>
      <Home></Home>
      <Toaster></Toaster>
      
    
    </div>
  );
}

export default App;
