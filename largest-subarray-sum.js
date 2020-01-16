// let testArray = [1, -2, 3, 5, -6, 3, 8, 9];

function largestSubArraySum(array) {
  let result = array[0];
  let sum = array[0];
  for (let index = 1; index < array.length; index++) {
    // console.log("index=", index, "sum=", sum, "result=", result);

    if (sum < 0 && sum < sum + array[index]) {
      sum = array[index];
    } else {
      sum = sum + array[index];
    }

    if (sum > result) {
      //   console.log("NEW RESULT=", sum, "AT INDEX=", index);

      result = sum;
    }
  }

  return result;
}

// largestSubArraySum(testArray);
