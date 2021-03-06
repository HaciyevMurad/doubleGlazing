import "./slider";

import modals from "./modals";
import tabs from "./tabs";
import forms from "./forms";
import changeModalState from "./changeModalState"
import timer from "./timer";
import images from "./images";

window.addEventListener('DOMContentLoaded' , ()=>{

    let modalState = {};
    let deadline = 'dec 31, 2020';


    tabs('.glazing_slider' , '.glazing_block' , '.glazing_content' , 'active')
    tabs('.decoration_slider' , '.no_click' , '.decoration_content > div > div' , 'after_click');
    tabs('.decoration_slider' , '.no_click' , '.decoration_content > div > div' , 'after_click');
    tabs('.balcon_icons' , '.balcon_icons_img' , '.big_img  > img' , 'do_image_more' , 'inline');
    modals();
    forms(modalState);
    changeModalState(modalState);
    timer('.container1', deadline);
    images();
})
