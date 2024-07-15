function findMissingNumber(arr) {

    arr.sort((a, b) => a - b);
    
    let missing 0;
    
    for (let i=0; i < arr.length; i++) {
    
    if (arr[i]!== 1) {
    
    missing = i;
    
    break;
    
    }
    
    }
    
    return missing;
    
    }
    
    console.log(findMissingNumber([0, 1, 3, 4, 5]));