var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":36,"id":36221,"methods":[{"el":25,"sc":2,"sl":24},{"el":30,"sc":2,"sl":27},{"el":35,"sc":2,"sl":32}],"name":"BusinessdayCalendarAny","sl":17}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_153":{"methods":[{"sl":24}],"name":"testCDS","pass":true,"statements":[]},"test_183":{"methods":[{"sl":24},{"sl":27}],"name":"testCreateDateFromDateAndOffsetCode","pass":true,"statements":[{"sl":29}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [153, 183], [], [], [183], [], [183], [], [], [], [], [], [], []]