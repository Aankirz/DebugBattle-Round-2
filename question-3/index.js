
let ball= document.querySelector(".ball");
console.log(ball)
let size=200;
let increase = true;
setInterval(()=>{

    ball.style.height=`${size}px`;
    ball.style.width=`${size}px`;

    if( increase ){
        size+=50
    }else{
        size-=50;
    }
    
    if(size>=500){
        increase=false;
    }else if(size<=100){
        increase=true;
    }


},50)

