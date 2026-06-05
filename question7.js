let nums=[78, 85, 62, 90, 55];
let largest=nums[0];
for(let i=1; i<nums.length; i++)
{
    if(nums[i]>largest)
    {
        largest=nums[i];
    }
}
console.log("The largest number is: " + largest);
console.log();
nums.push(95);
console.log(nums);
console.log();
nums.shift();
console.log(nums);