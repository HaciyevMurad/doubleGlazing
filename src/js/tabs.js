
const tabs = (headerSelector, tabSelector, contentSelector, activeClassSelector, display = 'block') =>{
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector),
          activeClass = document.querySelector(activeClassSelector);
         

          


          function showContent(i=0){
            content[i].style.display = display;
            tab[i].classList.add(activeClassSelector);
          }

          function hideContent(){
              content.forEach(item =>{
                  item.style.display = 'none';
              });
              tab.forEach(item =>{
                  item.classList.remove(activeClassSelector)
              });
          }

          hideContent();
          showContent()

          header.addEventListener('click', (e)=>{
            const target = e.target;
            if(target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, ''))){

                    tab.forEach((item, i)=>{
                        if(target == item || target.parentNode == item){
                            hideContent();
                            showContent(i)
                            console.log(target);
                        }
                    })
            }
          })
}



export default tabs