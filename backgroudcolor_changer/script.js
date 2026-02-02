const wrap = document.getElementById("wrap")
const colortext = document.getElementById("color")
const btn = document.getElementById("btn")

const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',changebackground)

function changebackground(){
    let hexcolor = "#"
    for(let i = 1; i<=6;i++){
       hexcolor += randhexvalue()
    }
    wrap.style.backgroundColor = hexcolor
    colortext.innerHTML = hexcolor
}

console.log(randhexvalue())
function randhexvalue(){

    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex];
}