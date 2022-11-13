const count=document.querySelector('.count');
const add=document.querySelector('.add');
const sub=document.querySelector('.sub');

let counter=0;

add.addEventListener('click',()=>{
    counter++;

    count.innerHTML=counter;
    if(counter%2!=0){
        count.style.backgroundColor='green'
    }else{
        count.style.backgroundColor='red'
    
    }
})

sub.addEventListener('click',()=>{
    counter--;
    count.innerHTML=counter;
    if(counter%2!=0){
        count.style.backgroundColor='green'
    }else{
        count.style.backgroundColor='red'
    
    }
    
})




