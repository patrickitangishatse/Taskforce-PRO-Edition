function SubarrayWithSum(arr, target) {
  let start = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    while (currentSum > target && start <= i) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === target) {
      return true;
    }
  }
  return false;
}
