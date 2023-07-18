function solution(nums) {
    const setNums = new Set(nums);
    return setNums.size>=nums.length/2 ? nums.length/2 : setNums.size;
}
