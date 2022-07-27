export const Directions = (arrayData, direction, size) => {
    let setDirection = '';
    switch (direction) {
        case ("HORIZONTAL"):
            let setHorizontal = "";
            for (let i = 0; i < size; i += 1) {
                for (let j = 0; j < arrayData.length; j += 1) {
                    setHorizontal = setHorizontal.concat(arrayData[j][i] + "   ");
                }
                setHorizontal = setHorizontal.concat("\n");
            }
            setDirection = setHorizontal;
            break;
        case ("VERTICAL"):
            let setVertical = "";
            for (let i = 0; i < arrayData.length; i += 1) {
                for (let j = 0; j < size; j += 1) {
                    setVertical = setVertical.concat(arrayData[i][j] + "\n");
                }
                setVertical = setVertical.concat("\n");
            }
            setDirection = setVertical;
            break;
        default:
    }
    return setDirection;
};
