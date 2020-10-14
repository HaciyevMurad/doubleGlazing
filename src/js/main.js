import "./slider";

import modals from "./modals";
import tabs from "./tabs";
import forms from "./forms";

window.addEventListener('DOMContentLoaded' , ()=>{
    modals();
    tabs('.glazing_slider' , '.glazing_block' ,     '.glazing_content' , 'active')
    tabs('.decoration_slider' , '.no_click' ,     '.decoration_content > div > div' , 'after_click')
    forms();
   
})