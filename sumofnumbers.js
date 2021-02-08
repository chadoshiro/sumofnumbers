const testNums = [1, 2, 3, 4, 5];

function sumFor(nums) {
  let tot = 0;
  for (const num of nums) {
    tot += num;
  }
  return tot;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let tot = 0;
  let count = 0;
  while (count < nums.length) {
    tot += nums[count];
    count++;
  }
  return tot;
}

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNums));
