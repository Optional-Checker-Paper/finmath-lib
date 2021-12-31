var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":76,"id":32103,"methods":[{"el":44,"sc":2,"sl":36},{"el":56,"sc":2,"sl":52},{"el":62,"sc":2,"sl":58},{"el":68,"sc":2,"sl":64},{"el":74,"sc":2,"sl":70}],"name":"ExponentialNormalizer","sl":21}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_181":{"methods":[{"sl":52},{"sl":58},{"sl":70}],"name":"testBasic","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":72},{"sl":73}]},"test_201":{"methods":[{"sl":58}],"name":"b_testSeq","pass":true,"statements":[{"sl":60},{"sl":61}]},"test_219":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_26":{"methods":[{"sl":58}],"name":"a_testMappings","pass":true,"statements":[{"sl":60},{"sl":61}]},"test_327":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testCalibration","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_447":{"methods":[{"sl":58},{"sl":64}],"name":"c_testFirstDerivative","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":66},{"sl":67}]},"test_451":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_471":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_492":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_524":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_567":{"methods":[{"sl":58},{"sl":70}],"name":"d_testSecondDerivative","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":72},{"sl":73}]},"test_569":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]},"test_580":{"methods":[{"sl":52},{"sl":58},{"sl":70}],"name":"testMulti","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":72},{"sl":73}]},"test_626":{"methods":[{"sl":36},{"sl":52},{"sl":58},{"sl":70}],"name":"testExpectation","pass":true,"statements":[{"sl":37},{"sl":38},{"sl":40},{"sl":41},{"sl":43},{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":72},{"sl":73}]},"test_637":{"methods":[{"sl":52},{"sl":58},{"sl":64},{"sl":70}],"name":"testCalibration","pass":true,"statements":[{"sl":53},{"sl":54},{"sl":55},{"sl":60},{"sl":61},{"sl":66},{"sl":67},{"sl":72},{"sl":73}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [626], [626], [626], [], [626], [626], [], [626], [], [], [], [], [], [], [], [], [580, 471, 219, 626, 181, 492, 637, 327, 524, 569, 451], [580, 471, 219, 626, 181, 492, 637, 327, 524, 569, 451], [580, 471, 219, 626, 181, 492, 637, 327, 524, 569, 451], [580, 471, 219, 626, 181, 492, 637, 327, 524, 569, 451], [], [], [580, 201, 567, 471, 219, 626, 181, 492, 26, 447, 637, 327, 524, 569, 451], [], [580, 201, 567, 471, 219, 626, 181, 492, 26, 447, 637, 327, 524, 569, 451], [580, 201, 567, 471, 219, 626, 181, 492, 26, 447, 637, 327, 524, 569, 451], [], [], [471, 219, 492, 447, 637, 327, 524, 569, 451], [], [471, 219, 492, 447, 637, 327, 524, 569, 451], [471, 219, 492, 447, 637, 327, 524, 569, 451], [], [], [580, 567, 471, 219, 626, 181, 492, 637, 327, 524, 569, 451], [], [580, 567, 471, 219, 626, 181, 492, 637, 327, 524, 569, 451], [580, 567, 471, 219, 626, 181, 492, 637, 327, 524, 569, 451], [], [], []]