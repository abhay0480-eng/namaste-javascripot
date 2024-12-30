const findSecondLargest = (arr) => {
    let first = -Infinity;
    let second = -Infinity;
  
    for (let num of arr) {
      if (num > first) {
        second = first; // Update second largest
        first = num;    // Update largest
      } else if (num > second && num < first) {
        second = num;   // Update second largest
      }
    }
  
    return second === -Infinity ? null : second; // Return null if no second largest exists
  };
  
  const arr = [23, 12, 16, 88, 54, 23, 8];
  console.log(findSecondLargest(arr)); //   