const data = [
	{
		name:"A",
		rollNo:1,
		mids:[
			{
				mid:1,
				telugu:40,
				hindi:40,
				english:40,
			},
			{
				mid:2,
				telugu:35,
				hindi:60,
				english:70
			},{
				mid:3,
				telugu:45,
				hindi:50,
				english:60
			}
		]
	},
	{
		name:"B",
		rollNo:2,
		mids:[
			{
				mid:1,
				telugu:42,
				hindi:42,
				english:40,
			},
			{
				mid:2,
				telugu:35,
				hindi:64,
				english:70
			},{
				mid:3,
				telugu:40,
				hindi:52,
				english:60
			}
		]
	},
];

// Calculate each student's total based on top two mid sums
const processedData = data.map(student => {
  const midSums = student.mids.map(mid => mid.telugu + mid.hindi + mid.english);
  midSums.sort((a, b) => b - a); // Sort descending
  const total = midSums[0] + (midSums[1] || 0); // Sum top two
  return {
    name: student.name,
    rollNo: student.rollNo,
    total: total
  };
});

// Sort students by total descending
processedData.sort((a, b) => b.total - a.total);

// Assign ranks
if (processedData.length > 0) {
  let rank = 1;
  processedData[0].rank = rank;
  let prevTotal = processedData[0].total;

  for (let i = 1; i < processedData.length; i++) {
    if (processedData[i].total === prevTotal) {
      processedData[i].rank = rank;
    } else {
      rank = i + 1;
      processedData[i].rank = rank;
      prevTotal = processedData[i].total;
    }
  }
}

console.log(processedData);