const timer = (id , deadline) =>{

    const getTimeRemaining = (endTime) =>{
        const time = Date.parse(endTime) - new Date(),
              seconds = Math.floor(time/1000 % 60),
              minutes = Math.floor((time/1000 / 60) % 60),
              hours =Math.floor((time/1000 / 60 / 60) % 24),
              days = Math.floor(time/1000 / 60 / 60 / 24);

              return{
                  time,
                  seconds,
                  minutes,
                  hours,
                  days,
              }
            }
                  const setClock = (selector,endTime)=>{
                      const timer = document.querySelector(selector),
                            days = timer.querySelector('#days'),
                            hours = timer.querySelector('#hours'),
                            minutes = timer.querySelector('#minutes'),
                            seconds = timer.querySelector('#seconds'),
                            timeInterval = setInterval(updateTime, 1000);

                            updateTime();

                            function updateTime(){
          
                              const timeRemaining = getTimeRemaining(endTime);
          
                              days.textContent = setZero(timeRemaining.days);
                              hours.textContent = setZero(timeRemaining.hours);
                              minutes.textContent = setZero(timeRemaining.minutes);
                              seconds.textContent = setZero(timeRemaining.seconds);


                              if(timeRemaining.time <= 0 ){
                                days.textContent = "00"
                                hours.textContent = "00"
                                minutes.textContent =  "00"
                                seconds.textContent = "00"
                              }
                            }
                  }

                  const setZero = (num) =>{
                      if(num <= 9){
                          return '0' + num;
                      }else{
                          return num;
                      }
                  }
            setClock(id,deadline)
}

export default timer;