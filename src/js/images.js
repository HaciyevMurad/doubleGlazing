
const  images = () =>{
    const SectionWorks = document.querySelector('.works');
//create element and add class
    const imgPopup = document.createElement('div');
          imgPopup.classList.add('popup');
    const bigImg = document.createElement('img');
          imgPopup.style.justifyContent = 'center';
          imgPopup.style.alignItems = 'center' ;        
          bigImg.style.maxHeight = '80%' ;        
//append
          imgPopup.appendChild(bigImg);
          SectionWorks.appendChild(imgPopup);
          
// add event listener       
          SectionWorks.addEventListener('click', (e)=>{
              e.preventDefault();
              
              if(e.target.className === 'preview'){
                  const path = e.target.parentNode.getAttribute('href') ;
                  imgPopup.style.display = "flex";
                  document.body.style.overflow = "hidden";
                  bigImg.setAttribute('src', path);
              }
          });

          const popup = document.querySelector('.popup');
          popup.addEventListener('click' , (e)=>{
              if(e.target.className === 'popup'){
                imgPopup.style.display = "none";
                document.body.style.overflow = "";
               
              }
          })
          console.log(popup);
          

    
}


export default images;