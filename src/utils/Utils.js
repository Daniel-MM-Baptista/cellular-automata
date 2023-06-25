function create2DArray(rows, columns){
    let arr = [];

    for(let i = 0; i < rows; i++){
        arr[i] = [];
        for(let j = 0; j < columns; j++){
            arr[i][j] = 0;
        }
    }
    return arr;
}

module.exports = { create2DArray };