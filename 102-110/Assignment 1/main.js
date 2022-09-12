let msg = window.prompt ('Print Number From – To' , 'Example: 5-20'),
    nums = msg.split('-')

if (parseInt(nums[0]) < parseInt(nums[1])) {
    for (i = parseInt(nums[0]); i <= parseInt(nums[1]); i++){
        console.log(i)
    }
} else {
    for (i = parseInt(nums[1]); i <= parseInt(nums[0]); i++){
        console.log(i)
    }
}
