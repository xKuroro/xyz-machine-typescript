import promptSync from 'prompt-sync';
import { PrintLetters } from './tools/printLetters.js';
import { validation } from "./tools/validation.js";
const prompts = promptSync()
const inputText: string = prompts("Input X Y and Z: ").trim().toUpperCase();
const inputSize: number = parseInt(prompts("Input size: "));
const inputDirection: string = prompts("Input direction: ").trim().toUpperCase();

let validated: boolean = validation(inputText, inputSize, inputDirection);
if(validated === false){
    const setTextArray: string[] = inputText.split(''); 
    
    const print = new PrintLetters(setTextArray, inputSize, inputDirection);
    console.log(print.printXYZ());
}
