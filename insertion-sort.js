function insertionSort(array) {
    for(let i=1; i<array.length; i++){
        for(let j=i; j>0; j--){
            if(array[j] < array[j-1]){
                [array[j], array[j-1]] = [array[j-1], array[j]]
            }else{
                break; // we dont have to compare any more we are done
            }
        }
    }

    return array
}

console.log(insertionSort([1,4,2,8,345,12,6,9]))