function noNums (arr) {
    let nums = arr.filter(function (el) {
        return typeof el == 'number';
    })
    for (i = 0; i < nums.length; i++){
        arr.splice(arr.indexOf(nums[i]),1);
    }
    arr.unshift(...nums)
    arr.copyWithin(0, nums.length, 2 * nums.length)
    return arr;
}


