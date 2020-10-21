
import checkNumInputs from "./checkNumInputs" ;


const changeModalState = (state) =>{
    const windowsForm = document.querySelectorAll('.balcon_icons_img'),
          windowsWidth = document.querySelectorAll('#width'),
          windowsHeight = document.querySelectorAll('#height'),
          windowsType = document.querySelectorAll('#view_type'),
          windowsProfile = document.querySelectorAll('.checkbox');

          checkNumInputs(windowsHeight);
          checkNumInputs(windowsWidth);

    function bindActionToElems(elem, event, props){

        elem.forEach((item , i)=>{
            item.addEventListener(event ,(e)=>{
                e.preventDefault();
                
            switch(item.nodeName){
                case "SPAN":
                    state[props] = i;
                    break;
                case "INPUT" :
                    if(item.getAttribute('type') === 'text'){
                        state[props] = item.value;
                    }else{
                        i === 0 ? state[props] = "Холодное" : state[props] = "Тёплое"
                        elem.forEach((checkbox, j) => {
                            checkbox.checked = false;
                            if(j===i){
                                checkbox.checked = true
                            }
                        });
                    }
                    break;
                case "SELECT":
                    state[props] = item.value;
                    break;
            }
                console.log(state);
            });

        });
    }

     
    bindActionToElems(windowsForm, 'click', 'form');
    bindActionToElems(windowsWidth, 'input', 'width');
    bindActionToElems(windowsHeight, 'input', 'height');
    bindActionToElems(windowsType, 'change', 'type');
    bindActionToElems(windowsProfile, 'change', 'profile');
}

export default changeModalState;