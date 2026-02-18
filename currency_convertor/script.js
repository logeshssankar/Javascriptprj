let select = document.querySelectorAll('.currency')
let btn = document.getElementById('btn')
let input = document.getElementById('input')

fetch('https://api.frankfurter.app/currencies')
.then((res)=>res.json())
.then((res)=>displayDropDown(res))


function displayDropDown(res){
let cur = Object.entries(res)

for(let i=0;i<cur.length;i++){

    let opt = `<option value=${cur[i][0]}>${cur[i][0]}</option>`
    select[0].innerHTML += opt
    select[1].innerHTML += opt
}
}

btn.addEventListener('click',()=>{
let currency1 = select[0].value 
let currency2 = select[1].value
let inputValue = input.value

if(currency1 == currency2){
    alert("Choose difference currencies")
}else{
    convert(currency1,currency2,inputValue)
}
})

function convert(currency1,currency2,inputValue){
    fetch(`https://api.frankfurter.dev/v1/latest?base=${currency1}&symbols=${currency2}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(Object.values(data.rates)[0])
      document.getElementById('result').value = Object.values(data.rates)[0]
     
    });
}