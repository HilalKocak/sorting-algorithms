function bubleSort(array) {
    for(let i=0; i<array.length-1; i++){
        for(let j=0; j<array.length-1; j++){
            if(array[j] > array[j+1]){
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
console.log(bubleSort([1, 4, 2, 43, 55, 2, 17, 1, 18]));
