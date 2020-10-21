

const changeNnumber = (selector) =>{
    
        selector.forEach(item =>{
            item.addEventListener('input', ()=>{
                item.value = item.value.replace(/\D/, "")
            });
        });
    
}

export default changeNnumber;