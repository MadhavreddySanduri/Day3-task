//Return median of two sorted arrays of the same size.

function findMedianSortedArrays(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const midIndex = mergedArray.length / 2;
    
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    }
    

    const array1 = [1, 3, 5];
    const array2 = [2, 4, 6];
    const median = findMedianSortedArrays(array1, array2);
    console.log(median); // Output: 3.5