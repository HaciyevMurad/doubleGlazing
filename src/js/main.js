import "./slider";

import modals from "./modals";
import tabs from "./tabs";
import forms from "./forms";
import changeModalState from "./changeModalState"

window.addEventListener('DOMContentLoaded' , ()=>{

    let modalState = {}



    changeModalState(modalState);
    modals();
<<<<<<< HEAD
    tabs('.glazing_slider' , '.glazing_block' , '.glazing_content' , 'active');
    tabs('.decoration_slider' , '.no_click' , '.decoration_content > div > div' , 'after_click');
    tabs('.decoration_slider' , '.no_click' , '.decoration_content > div > div' , 'after_click');
    tabs('.balcon_icons' , '.balcon_icons_img' , '.big_img  > img' , 'do_image_more' , 'inline');
    forms(modalState);
=======
    tabs('.glazing_slider' , '.glazing_block' , '.glazing_content' , 'active')
    tabs('.decoration_slider' , '.no_click' , '.decoration_content > div > div' , 'after_click');
    tabs('.decoration_slider' , '.no_click' , '.decoration_content > div > div' , 'after_click');
    tabs('.balcon_icons' , '.balcon_icons_img' , '.big_img  > img' , 'do_image_more' , 'inline');
    
>>>>>>> main
   
})
import modals from './modals'
import forms from "./foms";

modals();

forms();
