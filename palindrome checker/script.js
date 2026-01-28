function check() {

    let word = document.getElementById("input").value
    let word1 = word.split('');
    console.log(word1)
    let reverse = word1.reverse();
    console.log(reverse)
    let join = word1.join('')
    console.log(join)

    let palindrome = "";
    //palindrome check

    if(word == join){
        palindrome =  "it is a palindrome"
    }else{
        palindrome = "it's not a palindrome"
    }

    let result = document.querySelector("#result")
    result.innerHTML = `The text you entered, ${palindrome}`
}
