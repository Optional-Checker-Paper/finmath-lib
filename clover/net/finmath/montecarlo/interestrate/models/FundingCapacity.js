var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":236,"id":20465,"methods":[{"el":80,"sc":2,"sl":75},{"el":139,"sc":2,"sl":82},{"el":181,"sc":2,"sl":141},{"el":221,"sc":2,"sl":183},{"el":225,"sc":2,"sl":223},{"el":230,"sc":2,"sl":227},{"el":235,"sc":2,"sl":232}],"name":"FundingCapacity","sl":48},{"el":73,"id":20465,"methods":[{"el":64,"sc":3,"sl":61},{"el":68,"sc":3,"sl":66},{"el":72,"sc":3,"sl":70}],"name":"FundingCapacity.DefaultFactors","sl":57}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_168":{"methods":[{"sl":61},{"sl":70},{"sl":75},{"sl":82}],"name":"test","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":71},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":87},{"sl":88},{"sl":89},{"sl":92},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":105},{"sl":106},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":116},{"sl":122},{"sl":128},{"sl":129},{"sl":134},{"sl":135},{"sl":136},{"sl":138}]},"test_500":{"methods":[{"sl":61},{"sl":66},{"sl":70},{"sl":75},{"sl":82},{"sl":223}],"name":"test","pass":true,"statements":[{"sl":62},{"sl":63},{"sl":67},{"sl":71},{"sl":76},{"sl":77},{"sl":78},{"sl":79},{"sl":87},{"sl":88},{"sl":89},{"sl":92},{"sl":99},{"sl":100},{"sl":101},{"sl":102},{"sl":105},{"sl":106},{"sl":108},{"sl":109},{"sl":110},{"sl":111},{"sl":112},{"sl":114},{"sl":116},{"sl":122},{"sl":128},{"sl":129},{"sl":134},{"sl":135},{"sl":136},{"sl":138},{"sl":224}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [500, 168], [500, 168], [500, 168], [], [], [500], [500], [], [], [500, 168], [500, 168], [], [], [], [500, 168], [500, 168], [500, 168], [500, 168], [500, 168], [], [], [500, 168], [], [], [], [], [500, 168], [500, 168], [500, 168], [], [], [500, 168], [], [], [], [], [], [], [500, 168], [500, 168], [500, 168], [500, 168], [], [], [500, 168], [500, 168], [], [500, 168], [500, 168], [500, 168], [500, 168], [500, 168], [], [500, 168], [], [500, 168], [], [], [], [], [], [500, 168], [], [], [], [], [], [500, 168], [500, 168], [], [], [], [], [500, 168], [500, 168], [500, 168], [], [500, 168], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [500], [500], [], [], [], [], [], [], [], [], [], [], [], []]