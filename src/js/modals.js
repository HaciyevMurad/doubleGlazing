const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector , closeOverlayClick = true){
            const trigger = document.querySelectorAll(triggerSelector);
            const modal = document.querySelector(modalSelector);
            const close = document.querySelector(closeSelector);
            const windows = document.querySelectorAll('[data-modal]');
        
            trigger.forEach(item =>{
                item.addEventListener('click', (e)=>{
                            if(e.target){
                                e.preventDefault();
                            }

                            windows.forEach(item=>{
                                item.style.display = "none";
                                console.log(item)
                            });

                            modal.style.display = "block";
                            document.body.style.overflow = "hidden";
                    });
            });
            
            close.addEventListener('click', (e)=>{
                modal.style.display = "none";
                document.body.style.overflow = "";

                windows.forEach(item=>{
                    item.style.display = "none";
                    console.log(item)
                });
        });
            modal.addEventListener("click", (e)=>{
                if(e.target===modal && closeOverlayClick){
                    windows.forEach(item=>{
                        item.style.display = "none";
                        console.log(item)
                    });
                    modal.style.display = "none";
                    document.body.style.overflow = "";   
                }  
            })
        }
        function showModalByTime(selector, time){
            setTimeout(function(){
                document.querySelector(selector).style.display = "block";
            },60000)
        }
        bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
        bindModal(".phone_link", ".popup", ".popup .popup_close");
        bindModal(".phone_link", ".popup", ".popup .popup_close");
        bindModal(".glazing_price_btn",".popup_calc", ".popup_calc_close" );
        bindModal(".popup_calc_button", ".popup_calc_profile" , ".popup_calc_profile_close", false);
        bindModal(".popup_calc_profile_button" , ".popup_calc_end" , ".popup_calc_end_close" , false)
    }

export default modals;