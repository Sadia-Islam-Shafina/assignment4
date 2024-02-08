function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return 'Invalid Array';
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

// console.log(deleteInvalids)
console.log(deleteInvalids(["1" , {num:2} , NaN ] ));