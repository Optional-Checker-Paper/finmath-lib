var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":181,"id":49825,"methods":[{"el":13,"sc":2,"sl":8},{"el":25,"sc":2,"sl":15},{"el":32,"sc":2,"sl":27},{"el":44,"sc":2,"sl":34},{"el":56,"sc":2,"sl":46},{"el":64,"sc":2,"sl":58},{"el":73,"sc":2,"sl":66},{"el":83,"sc":2,"sl":75},{"el":94,"sc":2,"sl":85},{"el":102,"sc":2,"sl":96},{"el":109,"sc":2,"sl":104},{"el":118,"sc":2,"sl":111},{"el":125,"sc":2,"sl":121},{"el":132,"sc":2,"sl":127},{"el":140,"sc":2,"sl":134},{"el":147,"sc":2,"sl":142},{"el":155,"sc":2,"sl":149},{"el":162,"sc":2,"sl":157},{"el":171,"sc":2,"sl":164},{"el":180,"sc":2,"sl":173}],"name":"ScalarTest","sl":6}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1004":{"methods":[{"sl":173}],"name":"testSubRatio","pass":true,"statements":[{"sl":175},{"sl":176},{"sl":177},{"sl":179}]},"test_1011":{"methods":[{"sl":75}],"name":"testChoose","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":80},{"sl":81},{"sl":82}]},"test_1041":{"methods":[{"sl":34}],"name":"testAddProduct","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":41},{"sl":42},{"sl":43}]},"test_1103":{"methods":[{"sl":173}],"name":"testSubRatio","pass":true,"statements":[{"sl":175},{"sl":176},{"sl":177},{"sl":179}]},"test_1126":{"methods":[{"sl":104}],"name":"testEquals","pass":true,"statements":[{"sl":106},{"sl":107},{"sl":108}]},"test_113":{"methods":[{"sl":164}],"name":"testSub","pass":true,"statements":[{"sl":166},{"sl":167},{"sl":169},{"sl":170}]},"test_1191":{"methods":[{"sl":15}],"name":"testAccrue","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":20},{"sl":21},{"sl":23},{"sl":24}]},"test_1225":{"methods":[{"sl":104}],"name":"testEquals","pass":true,"statements":[{"sl":106},{"sl":107},{"sl":108}]},"test_125":{"methods":[{"sl":127}],"name":"testInvert","pass":true,"statements":[{"sl":129},{"sl":130},{"sl":131}]},"test_1281":{"methods":[{"sl":27}],"name":"testAdd","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":31}]},"test_135":{"methods":[{"sl":134}],"name":"testIsNaN","pass":true,"statements":[{"sl":136},{"sl":137},{"sl":138},{"sl":139}]},"test_145":{"methods":[{"sl":157}],"name":"testSquared","pass":true,"statements":[{"sl":159},{"sl":160},{"sl":161}]},"test_158":{"methods":[{"sl":142}],"name":"testMult","pass":true,"statements":[{"sl":144},{"sl":145},{"sl":146}]},"test_172":{"methods":[{"sl":127}],"name":"testInvert","pass":true,"statements":[{"sl":129},{"sl":130},{"sl":131}]},"test_180":{"methods":[{"sl":164}],"name":"testSub","pass":true,"statements":[{"sl":166},{"sl":167},{"sl":169},{"sl":170}]},"test_236":{"methods":[{"sl":34}],"name":"testAddProduct","pass":true,"statements":[{"sl":36},{"sl":37},{"sl":38},{"sl":39},{"sl":41},{"sl":42},{"sl":43}]},"test_244":{"methods":[{"sl":66}],"name":"testCap","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72}]},"test_265":{"methods":[{"sl":85}],"name":"testDiscount","pass":true,"statements":[{"sl":87},{"sl":89},{"sl":90},{"sl":92},{"sl":93}]},"test_273":{"methods":[{"sl":111}],"name":"testFloor","pass":true,"statements":[{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117}]},"test_317":{"methods":[{"sl":157}],"name":"testSquared","pass":true,"statements":[{"sl":159},{"sl":160},{"sl":161}]},"test_329":{"methods":[{"sl":142}],"name":"testMult","pass":true,"statements":[{"sl":144},{"sl":145},{"sl":146}]},"test_389":{"methods":[{"sl":149}],"name":"testSqrt","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":153},{"sl":154}]},"test_449":{"methods":[{"sl":8}],"name":"testAbs","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12}]},"test_479":{"methods":[{"sl":111}],"name":"testFloor","pass":true,"statements":[{"sl":113},{"sl":114},{"sl":115},{"sl":116},{"sl":117}]},"test_539":{"methods":[{"sl":27}],"name":"testAdd","pass":true,"statements":[{"sl":29},{"sl":30},{"sl":31}]},"test_552":{"methods":[{"sl":85}],"name":"testDiscount","pass":true,"statements":[{"sl":87},{"sl":89},{"sl":90},{"sl":92},{"sl":93}]},"test_567":{"methods":[{"sl":134}],"name":"testIsNaN","pass":true,"statements":[{"sl":136},{"sl":137},{"sl":138},{"sl":139}]},"test_618":{"methods":[{"sl":8}],"name":"testAbs","pass":true,"statements":[{"sl":10},{"sl":11},{"sl":12}]},"test_63":{"methods":[{"sl":46}],"name":"testAddRatio","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55}]},"test_632":{"methods":[{"sl":58}],"name":"testArrayOf","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":62},{"sl":63}]},"test_664":{"methods":[{"sl":149}],"name":"testSqrt","pass":true,"statements":[{"sl":151},{"sl":152},{"sl":153},{"sl":154}]},"test_742":{"methods":[{"sl":15}],"name":"testAccrue","pass":true,"statements":[{"sl":17},{"sl":18},{"sl":20},{"sl":21},{"sl":23},{"sl":24}]},"test_750":{"methods":[{"sl":121}],"name":"testGetAverage","pass":true,"statements":[{"sl":123},{"sl":124}]},"test_766":{"methods":[{"sl":121}],"name":"testGetAverage","pass":true,"statements":[{"sl":123},{"sl":124}]},"test_86":{"methods":[{"sl":75}],"name":"testChoose","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":80},{"sl":81},{"sl":82}]},"test_860":{"methods":[{"sl":46}],"name":"testAddRatio","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55}]},"test_904":{"methods":[{"sl":96}],"name":"testDiv","pass":true,"statements":[{"sl":98},{"sl":99},{"sl":100},{"sl":101}]},"test_906":{"methods":[{"sl":96}],"name":"testDiv","pass":true,"statements":[{"sl":98},{"sl":99},{"sl":100},{"sl":101}]},"test_976":{"methods":[{"sl":66}],"name":"testCap","pass":true,"statements":[{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":72}]},"test_987":{"methods":[{"sl":58}],"name":"testArrayOf","pass":true,"statements":[{"sl":60},{"sl":61},{"sl":62},{"sl":63}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [618, 449], [], [618, 449], [618, 449], [618, 449], [], [], [1191, 742], [], [1191, 742], [1191, 742], [], [1191, 742], [1191, 742], [], [1191, 742], [1191, 742], [], [], [1281, 539], [], [1281, 539], [1281, 539], [1281, 539], [], [], [236, 1041], [], [236, 1041], [236, 1041], [236, 1041], [236, 1041], [], [236, 1041], [236, 1041], [236, 1041], [], [], [860, 63], [], [860, 63], [860, 63], [860, 63], [860, 63], [], [860, 63], [860, 63], [860, 63], [], [], [632, 987], [], [632, 987], [632, 987], [632, 987], [632, 987], [], [], [244, 976], [], [244, 976], [244, 976], [244, 976], [244, 976], [244, 976], [], [], [1011, 86], [], [1011, 86], [1011, 86], [], [1011, 86], [1011, 86], [1011, 86], [], [], [552, 265], [], [552, 265], [], [552, 265], [552, 265], [], [552, 265], [552, 265], [], [], [904, 906], [], [904, 906], [904, 906], [904, 906], [904, 906], [], [], [1225, 1126], [], [1225, 1126], [1225, 1126], [1225, 1126], [], [], [479, 273], [], [479, 273], [479, 273], [479, 273], [479, 273], [479, 273], [], [], [], [766, 750], [], [766, 750], [766, 750], [], [], [125, 172], [], [125, 172], [125, 172], [125, 172], [], [], [567, 135], [], [567, 135], [567, 135], [567, 135], [567, 135], [], [], [329, 158], [], [329, 158], [329, 158], [329, 158], [], [], [389, 664], [], [389, 664], [389, 664], [389, 664], [389, 664], [], [], [317, 145], [], [317, 145], [317, 145], [317, 145], [], [], [113, 180], [], [113, 180], [113, 180], [], [113, 180], [113, 180], [], [], [1004, 1103], [], [1004, 1103], [1004, 1103], [1004, 1103], [], [1004, 1103], [], []]