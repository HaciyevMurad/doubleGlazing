
const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector , closeOverlayClick = true){
            const trigger = document.querySelectorAll(triggerSelector);
            const modal = document.querySelector(modalSelector);
            const close = document.querySelector(closeSelector);
            const windows = document.querySelectorAll('[data-modal]');
            const scroll =   calcScroll();
           
        
            trigger.forEach(item =>{
                item.addEventListener('click', (e)=>{
                            if(e.target){
                                e.preventDefault();
                            }

                            windows.forEach(item=>{
                                item.style.display = "none";
                            });

                            modal.style.display = "block";
                            document.body.style.overflow = "hidden";
                            document.body.style.marginRight= `${scroll}px`;
                    });
            });
            
            close.addEventListener('click', (e)=>{
                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight = `${0}px`;

                windows.forEach(item=>{
                    item.style.display = "none";
                });
        });
            modal.addEventListener("click", (e)=>{
                if(e.target===modal && closeOverlayClick){
                    windows.forEach(item=>{
                        item.style.display = "none";
                    });
                    modal.style.display = "none";
                    document.body.style.overflow = "";   
                    document.body.style.marginRight = `${0}px`;
                }  
            })
        }

       function calcScroll(){

            const div = document.createElement('div');
                  div.style.width = '50px';
                  div.style.height = '50px';
                  div.style.overflow = 'scroll';
                  div.style.visibility = 'visible';
                  div.style.backgroundColor = 'red';

            document.body.appendChild(div);

            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove;


            return scrollWidth;
        }

      

        function showModalByTime(selector, time){
            setTimeout(function(){
                document.querySelector(selector).style.display = "block";
            },time)
        }


        showModalByTime('.popup_engineer', 60000)
        bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
        bindModal(".phone_link", ".popup", ".popup .popup_close");
        bindModal(".glazing_price_btn",".popup_calc", ".popup_calc_close" );
        bindModal(".popup_calc_button", ".popup_calc_profile" , ".popup_calc_profile_close", false);
        bindModal(".popup_calc_profile_button" , ".popup_calc_end" , ".popup_calc_end_close" , false)
        bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
    }

export default modals;