import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/all";

import Slider from "./components/slider";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
    return (
       <main>
           <Slider   />

       </main>
    )
}
export default App
