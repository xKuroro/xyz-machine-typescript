import { Directions } from "../directions/Directions.js";

export class PrintLetters{
    text: string[];
    size: number;
    direction: string;
    constructor(text: string[], size: number, direction: string){
        this.text = text;
        this.size = size;
        this.direction = direction;
       
    }
    printXYZ(){
   
    let storeArray: string[][] = [];
    
    this.text.forEach((str,i) => {
        let printText: string = '';
        let storePrint: string[] = [];
        switch(str){
            // print Text X pattern
          case("X"):
            
          for(let i = 0; i < this.size; i += 1){
            for(let j = 0; j < this.size; j += 1){
                if(i === j || i + j === this.size - 1){
                    printText = printText.concat("o" + " ")
                }else{
                    printText = printText.concat(" " + " ");
                }
            }
            storePrint.push(printText); 
            printText = "";
          } 
          storeArray.push(storePrint);
          break;
        
        //   Print Text Y pattern
         case("Y"):
          let counter: number = 0;
         for(let i = 0; i < this.size; i += 1){
            for(let j = 0; j < this.size; j += 1){

                if(j === counter || (j === (this.size - 1) - counter && i <= Math.floor(this.size - 1) / 2)){
                    printText = printText.concat("o" + " ");
                }else{
                    printText = printText.concat(" " + " ");
                }

            }
            storePrint.push(printText);
            printText = "";
            if (i < Math.floor(this.size / 2) ) {
                counter++;
              }
         
            
         }
         storeArray.push(storePrint);
         break;
         case("Z"):

            for(let i = 0; i < this.size; i += 1){
                for(let j = 0; j < this.size; j += 1){
                    if(i === 0 || i === this.size - 1 || i + j === this.size - 1){
                        printText = printText.concat("o" + " ");
                    }else{
                        printText = printText.concat(" " + " ")
                    }
                }
                storePrint.push(printText);
                printText = "";
            }
           storeArray.push(storePrint);
          break;

          default: 
            console.log("Done")
        }
    })
    const directions: string = Directions(storeArray, this.direction, this.size)
    return directions;
    }


}