var n=1;
initialize()


setInterval(()=>{
    makeLeave(getImage(n))
    .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))})
    makeCurrent(getImage(n+1))
    n++
},2000)

//函数库

function initialize(){
    $('.images>img:nth-child(1)').addClass('current')
    .siblings().addClass('enter')
}

function getImage(n){
   return  $(`.images>img:nth-child(${x(n)})`)
}

function makeLeave($node){
   return $node.removeClass('current').addClass('leave')
}

function makeCurrent($node){
    return $node.removeClass('enter').addClass('current')
 }

 function makeEnter($node){
    return $node.removeClass('leave').addClass('enter')
 }

function x(n){
    if(n>5){ 
        n= n%5
        if(n===0){
            n=5
        }
     }
     return n
}