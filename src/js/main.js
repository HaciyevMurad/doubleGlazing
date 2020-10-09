import "./slider";

import modals from "./modals";
import tabs from "./tabs";

window.addEventListener('DOMContentLoaded' , ()=>{
    modals();
    tabs('.glazing_slider' , '.glazing_block' ,     '.glazing_content' , 'active')
    tabs('.decoration_slider' , '.no_click' ,     '.decoration_content > div > div' , 'after_click')
   
})