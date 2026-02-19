const container = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')
const imgList = ["nature1","nature2","nature3","nature4"]

let index =0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains('btn-left')){
            index--;
            if(index<0){
                console.log(index)
                index = imgList.length-1;
            }
            container.style.background = `url("assets/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }else{
            index++;
            if(index==imgList.length){
                index = 0;
            }
            container.style.background = `url("assets/${imgList[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})