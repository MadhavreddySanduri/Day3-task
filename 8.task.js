//Rotate an array by k times

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // In case k is greater than the length of the array
    return arr.slice(-k).concat(arr.slice(0, -k));
    }
    
    // Example usage:
    const array = [1, 2, 3, 4, 5];
    const k = 2;
    const rotatedArray = rotateArray(array, k);
    console.log(rotatedArray); // Output: [4, 5, 1, 2, 3]