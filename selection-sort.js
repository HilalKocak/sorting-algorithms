function selectionSort(array) {
    for(let i=0; i<array.length; i++){
        let minIndex = i
        for(let j=i+1; j<array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j
            }
        }

        const temp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = temp
    }

    return array
}

console.log(selectionSort([40, 16, 11, 18, 1, 8, 30]))