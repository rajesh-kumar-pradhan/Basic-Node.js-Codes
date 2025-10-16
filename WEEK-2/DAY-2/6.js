
function countVowels(word){
    let count = 0;
    let countVowels = "aeiou"
    for (let char of word){
        if (countVowels.includes(char)) count++;
    }
return count;
}

// count=0
// const countvowel=(string)=>{
//     return string.match(/[aeiou]/gi)?.length || 0;
// }
// console.log(countvowel("NIT COLLEGE"));

