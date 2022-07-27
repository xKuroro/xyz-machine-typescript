import promptSync from 'prompt-sync';
import { PrintLetters } from './tools/printLetters.js';
import { validation } from "./tools/validation.js";
const prompts = promptSync();
const inputText = prompts("Input X Y and Z: ").trim().toUpperCase();
const inputSize = parseInt(prompts("Input size: "));
const inputDirection = prompts("Input direction: ").trim().toUpperCase();
let validated = validation(inputText, inputSize, inputDirection);
if (validated === false) {
    const setTextArray = inputText.split('');
    const print = new PrintLetters(setTextArray, inputSize, inputDirection);
    console.log(print.printXYZ());
}
