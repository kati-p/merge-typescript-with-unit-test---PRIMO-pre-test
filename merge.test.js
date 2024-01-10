const merge = require("./merge");

// Assume that we will use merge sort from this
// [ 1 5 9 10 0 8 6 3 2 7 ]
// [ 1 5 9 10 0 ] + [ 8 6 3 2 7 ]
// [ 1 5 9 ] + [ 10 0 ]   [ 8 6 3] + [ 2 7 ]
// [ 1 5 ]+[ 9 ]   [10][0]   [ 8 6 ]+[ 3 ]   [2][7]
// [1][5] [9] [10][0] [8][6] [3] [2][7]

// [1][5] expect [1,5]
test('[1][5] merge to [1,5]', () => { 
     expect(merge([1],[5])).toEqual([1,5]);
});

// [10][0] expect [0,10]
test('[10][0] merge to [10,0]', () => { 
     expect(merge([10],[0])).toEqual([0,10]);
});

// [8][6] expect [6,8]
test('[8][6] merge to [6,8]', () => { 
     expect(merge([8],[6])).toEqual([6,8]);
});

// [2][7] expect [2,7]
test('[2][7] merge to [2,7]', () => { 
     expect(merge([2],[7])).toEqual([2,7]);
});

// [1,5][9] expect [1,5,9]
test('[1,5][9] merge to [1,5,9]', () => { 
     expect(merge([1,5],[9])).toEqual([1,5,9]);
});

// [6,8][3] expect [3,6,8]
test('[6,8][3] merge to [3,6,8]', () => { 
     expect(merge([6,8],[3])).toEqual([3,6,8]);
});

// [1,5,9][0,10] expect [0,1,5,9,10]
test('[1,5,9][0,10] merge to [0,1,5,9,10]', () => { 
     expect(merge([1,5,9],[0,10])).toEqual([0,1,5,9,10]);
});

// [3,6,8][2,7] expect [2,3,6,7,8]
test('[3,6,8][2,7] merge to [2,3,6,7,8]', () => { 
     expect(merge([3,6,8],[2,7])).toEqual([2,3,6,7,8]);
});

// [0,1,5,9,10][2,3,6,7,8] expect [0,1,2,3,5,6,7,8,9,10]
test('[0,1,5,9,10][2,3,6,7,8] merge to [0,1,2,3,5,6,7,8,9,10]', () => { 
     expect(merge([0,1,5,9,10],[2,3,6,7,8])).toEqual([0,1,2,3,5,6,7,8,9,10]);
});
