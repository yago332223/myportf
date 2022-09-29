var sec = 0
var min = 0
var interval 
function start(){
    interval = setInterval(contador, 100)
}
function pause(){
    clearInterval(interval)
}
function stop(){
    clearInterval(interval)
    
    document.getElementById('watch').innerText=00+':'+00

}

function contador(){
    sec++
    if(sec==60){
        min++
        sec=0
    }
    document.getElementById('watch').innerText=min+':'+sec
}