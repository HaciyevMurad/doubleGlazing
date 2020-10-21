import checkNumInputs from './checkNumInputs';


const forms = (state) =>{
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]'),
          window = document.querySelectorAll('[data-modal]');

          const message = {
              loaded : 'Загрузка',
              success : 'Спосибо , мы вам перезвоним .',
              failure: 'Что-то пошло не так'
          }

          const postData = async(url, data)=>{
            const res = await fetch(url, {
                method: "POST",
                body: data
            });
            return await res.text();
          }

          checkNumInputs(phoneInputs);

          const clearInput = () =>{
            input.forEach(item =>{
                item.value = "" ;
                })
            }

            const closeAfterSubmit = ()=>{
                window.forEach(item =>{
                    item.style.display = "none";
                    document.body.style.overflow = "";
                })
            }

          form.forEach(item =>{
              item.addEventListener('submit', (e)=>{
                    e.preventDefault();

                    let statusMessage = document.createElement('div');
                          statusMessage.classList.add('status');
                          item.appendChild(statusMessage);
                    
                    const formData = new FormData(item);

                    if(item.getAttribute('data-calc') === "end"){
                        for(let key in state){
                            formData.append(key , state[key]);
                        }
                    }

                    document.querySelector('.status').textContent = message.loaded;

                    postData('assets/server.php' , formData)
                        .then(res =>{
                            console.log(res);
                            document.querySelector('.status').textContent = message.success;
                        })
                        .catch(()=> document.querySelector('.status').textContent = message.failure)
                        .finally(() => {
                            clearInput();
                            setTimeout(() =>{
                                statusMessage.remove();
                                closeAfterSubmit();
                               
                            },5000)
                        })
                   
              })
          })
}   


export default forms;