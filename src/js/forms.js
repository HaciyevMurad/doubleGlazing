import changeNnumber from './chhangeNumber';


const forms = () =>{
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input'),
          phoneInputs = document.querySelectorAll('input[name="user_phone"]')


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

          changeNnumber(phoneInputs)

        //   phoneInputs.forEach(item =>{
        //       item.addEventListener('input', ()=>{

        //           item.value = item.value.replace(/\D/, "")
        //       })
        //   })
        

          const clearInput = () =>{
            input.forEach(item =>{
                item.value = ""
            })
        }

          form.forEach(item =>{
              item.addEventListener('submit', (e)=>{
                    e.preventDefault();

                    let statusMessage = document.createElement('div');
                          statusMessage.classList.add('status');
                          item.appendChild(statusMessage);
                    
                    const formData = new FormData(item)
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
                                statusMessage.remove()
                            },5000)
                        })
                   
              })
          })
}   


export default forms;