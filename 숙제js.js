var count = 1;

document.querySelector(".btn1").addEventListener('click',function(){
    document.querySelector(".container").style.transform = `translateX(-${200 * count}px)`
count++;
if(count == 3){
count = 0;
}

})
