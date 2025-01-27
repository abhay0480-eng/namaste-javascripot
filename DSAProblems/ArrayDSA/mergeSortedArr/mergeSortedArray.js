

function mergeSortedArrays(arr1, arr2){
    const mergeArr = arr1.concat(arr2).sort()

    // const merged = []

    // let i = 0
    // let j = 0

    // while(i < arr1.length && j < arr2.length){
    //     if(arr1[i] <= arr2[j]){
    //         merged.push(arr1[i])
    //         i++
    //     } else {
    //         merged.push(arr2[j])
    //         j++
    //     }
    // }

    // return merged.concat(arr1.slice(i), arr2.slice(j))


    return mergeArr
}




const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(mergeSortedArrays(arr1, arr2))