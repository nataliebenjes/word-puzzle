
describe: omitVowels()

Test: "It should split the passage into single letters"
Code: 
const text = "word puzzle";
omitVowels(text);
Expected Output: ['w', 'o', 'r', 'd', ' ', 'p', 'u', 'z', 'z', 'l', 'e']

Test: "It should replace vowels in textArray with a -"
Code: 
const text = "word puzzle";
omitVowels(text);
Expected Output: ['w', '-', 'r', 'd', ' ', 'p', '-', 'z', 'z', 'l', '-']