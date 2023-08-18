const moon = document.querySelector('.fa-moon')
// console.log(moon);



const moonHanlder = ()=>{
    // console.log(moonHanlder);
    if(moon.classList.contains("fa-moon")){
       moon.classList.replace('fa-moon','fa-sun')
       document.body.classList.add("active");
       const sun = document.querySelector('.fa-sun')
       sun.style.color = '#A395E9' 
    }else{
        moon.classList.replace("fa-sun", "fa-moon");
        document.body.classList.remove("active");
    }


}
moon.addEventListener('click',moonHanlder)
