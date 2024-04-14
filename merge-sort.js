const merge = (leftArr, rightArr) => {
// both of them sorted
    const output = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        const leftItem = leftArr[leftIndex]
        const righItem = rightArr[rightIndex]

        if(leftItem < righItem){
            output.push(leftItem)
            leftIndex++
        }else{
            output.push(righItem)
            rightIndex++
        }
    }

    // if there is any element in leftArr or rightArr
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}

const mergeSort = (array) => {
    if(array.length <= 1){
        return array
    }
    const middleIndex = Math.floor(array.length/2)
    const leftArr = array.slice(0, middleIndex)
    const rightArray = array.slice(middleIndex)

    return merge(
        mergeSort(leftArr), 
        mergeSort(rightArray)
        )

}

console.log(merge([3,6], [2,4,9]))