import Regex from "../regex/Regex.js";
export function validation(text, size, direction) {
    let error = false;
    let fixedDirection = ["HORIZONTAL", "VERTICAL"];
    if (!text.length) {
        error = true;
        console.log("input some text !");
    }
    else if (!Regex(text)) {
        error = true;
        console.log("Text must only contains X Y or Z !");
    }
    else {
        error;
    }
    if (typeof size === "string" || size === 0 || (size % 2) === 0) {
        error = true;
        console.log("Size should be Odd number and above 3");
    }
    else {
        error;
    }
    if (direction && !fixedDirection.includes(direction)) {
        error = true;
        console.log("Direction must be vertical or horizontal!!");
    }
    else if (!direction.length) {
        error = true;
        console.log("Needed some direction!!");
    }
    else {
        error;
    }
    return error;
}
