// Write a program that takes a string and prints out the number of vowels in the string. 
function countVowels(str)
{
    let count = 0;
    for (let s of str){
        if(s === 'a' || s === 'e' || s === 'o' || s === 'i' || s === 'u' || s === 'I' || s === 'O' || s === 'A' || s === 'U' || s === 'E')
        {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Priyansh"));