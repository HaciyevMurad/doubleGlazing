
const forms = () =>{
    const form = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');


    const message = {
        loaded: 'Загрузка',
        success: 'Спасибо , мы вам перезвоним .',
        failure: 'Что-то пошло не так .',
    }

    const postData = async(url ,data) =>{
        const res = await fetch(url, {
            method: "POST",
            body: data,
        });
        return await res.text();
    }

    const clearInput = ()=>{
        input.forEach(item =>{
            item.value = "";
        })
    }

    form.forEach(item =>{
        item.addEventListener('submit' , (e)=>{
            e.preventDefault();

            const formData = new FormData(item);

            const statusMesage = document.createElement('div');
                statusMesage.classList.add('status');
                item.appendChild(statusMesage);
             

            document.querySelector('.status').textContent = message.loaded;

            postData('assets/server.php', formData)
                .then(res =>{
                    document.querySelector('.status').textContent = message.success;
                })
                .catch(()=>{
                    document.querySelector('.status').textContent = message.failure;
                })
                .finally(()=>{
                    clearInput();
                    setTimeout(()=>{
                       statusMesage.remove();
                    },2000)
                })

        })
    })
}


export default forms;