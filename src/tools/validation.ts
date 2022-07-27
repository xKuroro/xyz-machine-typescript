import Regex from "../regex/Regex.js";
export function validation(text: string, size: number, direction: string){
    let error: boolean = false;
    let fixedDirection: string[] = ["HORIZONTAL", "VERTICAL"]
    // check text if its passed
        if(!text.length){
            error = true;
            console.log("input some text !")
        }else if(!Regex(text)){
            error = true;
            console.log("Text must only contains X Y or Z !");
        }else{
            error;
        }

        // check size if its passed
         if(typeof size === "string" || size === 0 || (size % 2) === 0){
            error = true;
            console.log("Size should be Odd number and above 3")
         }else{
            error;
         }

        //  check direction if its passed
         if(direction && !fixedDirection.includes(direction)){
            error = true;
            console.log("Direction must be vertical or horizontal!!")
         }else if(!direction.length){
            error = true;
            console.log("Needed some direction!!")
         }else{
            error;
         }


        return error;
}