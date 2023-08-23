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

/* @media only screen and (max-width:800px) {
    .first-nav{
        height: 3.5rem;
        position: fixed;
        top: 0;
    }
    .name{
        font-size: 20px;
        position: relative;
        right: 55px;
    }
    .fa-moon{
        font-size: 20px;
        margin-top: 10px;
    }
    .fa-sun{
        font-size: 20px;
        margin-top: 3px;
    }
    .btn-1{
        width: 100%;
        padding: 10px 20px;
        display: flex;
        flex-direction: row;
    }
    .btn-2{
        margin-top: 0px;
        padding: 10px 25px;
    }
    .forImg{
        width: 80%;
        height: 105%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 50%;
        top: 80%;
    }
    .aboutme{
        margin-top: 100px;
    }
    .followme{
        font-size: 3rem;
        position: absolute;
        top: 100%;
    }
    #scroll-btn{
        position: absolute;
        left: 525px;
        top: 105%;
    }
    #Scroll-text{
        position: absolute;
        top: 570px;
        left: 355px;
        font-size: 20px;
        width: 100%;       
    }
    .for-bg{
        height: 80%;
    }
    .navbar ul{
        position: fixed;
        bottom: 0;
        width: 70%;
        display: flex;
        align-items: center;
        font-size: 1.8rem;
    }
    .navbar{
        position: fixed;
        bottom: 0;
        padding: 5px;
    }
    #my-img{
        width: 94%;
    }
    .my-self{
        position: absolute;
        top: 47%;
        left: 90%;
        font-size: 2rem;    
    }
    .btn{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .boxes{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        text-align: center;
    }
    .imgbox{
        display: flex;
        flex-direction: column;
    }
    .para{
        margin-top: 140px;
        left: 0;
        right: 0;
        width: 95%;
        text-align: center;
        padding-bottom: 20px;      
    }
    .box1{
        width: 80%;
        height: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .box1 h6{
        display: flex;
        flex-direction: row;
    }
    .box1 span{
        display: flex;
        margin-left: 3px;
    }
    .box2{
        width: 80%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .box3{
        width: 80%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .box2 h6{
        display: flex;
        flex-direction: row;
    }
    .box2 span{
        display: flex;
        margin-left: 3px;
    }
    .box3 h6{
        display: flex;
        flex-direction: row;
    }
    .box3 span{
        display: flex;
        margin-left: 3px;
    }
} */
/* @media (min-width:375px) and (max-width:425px){
    .boxes{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 0.5rem;
    }
    .imgbox{
        display: flex;
        flex-direction: column;
    }
    #my-img{
        width: 93%;
    }
    .forImg{
        width: 80%;
        height: 105%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 45%;
        top: 80%;
    }
    .aboutme{
        margin-top: 100px;
    }
    .followme{
        font-size: 3rem;
        position: absolute;
        top: 100%;
    }
    #scroll-btn{
        position: absolute;
        left: 525px;
        top: 105%;
    }
    #Scroll-text{
        position: absolute;
        top: 570px;
        left: 355px;
        font-size: 20px;
        width: 100%;       
    }
    .for-bg{
        height: 80%;
    }
    .my-self{
        position: absolute;
        top: 47%;
        left: 85%;
        font-size: 2rem;    
    }
    .btn{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .btn-1{
        width: 100%;
        padding: 10px 20px;
        display: flex;
        flex-direction: row;
    }
    .btn-2{
        margin-top: 0px;
        padding: 10px 25px;
    }
    .first-nav{
        height: 3.5rem;
        position: fixed;
        top: 0;
    }
    .name{
        font-size: 20px;
        position: relative;
        right: 55px;
    }
    .fa-moon{
        font-size: 20px;
        margin-top: 12px;
    }
    .fa-sun{
        font-size: 20px;
        margin-top: 3px;
    }
    .navbar ul{
        position: fixed;
        bottom: 0;
        width: 80%;
        display: flex;
        align-items: center;
        font-size: 1.8rem;
    }
    .navbar{
        position: fixed;
        bottom: 0;
        padding: 5px;
    }    
    .para{
        margin-top: 140px;
        left: 0;
        right: 0;
        width: 95%;
        text-align: center;
        padding-bottom: 20px;
    }
    .box1{
        width: 80%;
        height: 80%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .box1 h6{
        display: flex;
        flex-direction: row;
    }
    .box1 span{
        display: flex;
        margin-left: 3px;
    }
    .box2{
        width: 80%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .box3{
        width: 80%;
        height: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .box3 h6{
        display: flex;
        flex-direction: row;
    }
    .box3 span{
        display: flex;
        margin-left: 3px;
    }
    .box2 h6{
        display: flex;
        flex-direction: row;
    }
    .box2 span{
        display: flex;
        margin-left: 3px;
    }
}
 */

