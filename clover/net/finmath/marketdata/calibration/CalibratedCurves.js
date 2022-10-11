var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":835,"id":2916,"methods":[{"el":100,"sc":2,"sl":95},{"el":334,"sc":2,"sl":322},{"el":369,"sc":2,"sl":357},{"el":393,"sc":2,"sl":391},{"el":416,"sc":2,"sl":414},{"el":428,"sc":2,"sl":426},{"el":440,"sc":2,"sl":438},{"el":461,"sc":5,"sl":458},{"el":467,"sc":5,"sl":464},{"el":524,"sc":2,"sl":442},{"el":534,"sc":2,"sl":532},{"el":544,"sc":2,"sl":542},{"el":553,"sc":2,"sl":551},{"el":579,"sc":2,"sl":566},{"el":604,"sc":2,"sl":591},{"el":636,"sc":2,"sl":621},{"el":655,"sc":2,"sl":653},{"el":664,"sc":2,"sl":662},{"el":689,"sc":2,"sl":674},{"el":698,"sc":2,"sl":691},{"el":750,"sc":2,"sl":706},{"el":766,"sc":2,"sl":758},{"el":834,"sc":2,"sl":775}],"name":"CalibratedCurves","sl":91},{"el":286,"id":2919,"methods":[{"el":166,"sc":3,"sl":142},{"el":194,"sc":3,"sl":183},{"el":233,"sc":3,"sl":211},{"el":261,"sc":3,"sl":246},{"el":270,"sc":3,"sl":263},{"el":281,"sc":3,"sl":272},{"el":285,"sc":3,"sl":283}],"name":"CalibratedCurves.CalibrationSpec","sl":107}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":95},{"sl":142},{"sl":357},{"sl":391},{"sl":442},{"sl":458},{"sl":464},{"sl":532},{"sl":691},{"sl":706}],"name":"testMultiCurveCalibration","pass":true,"statements":[{"sl":97},{"sl":99},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":358},{"sl":359},{"sl":361},{"sl":362},{"sl":364},{"sl":365},{"sl":368},{"sl":392},{"sl":443},{"sl":444},{"sl":449},{"sl":457},{"sl":460},{"sl":463},{"sl":466},{"sl":469},{"sl":472},{"sl":475},{"sl":478},{"sl":483},{"sl":484},{"sl":486},{"sl":487},{"sl":488},{"sl":490},{"sl":491},{"sl":493},{"sl":497},{"sl":501},{"sl":502},{"sl":503},{"sl":504},{"sl":523},{"sl":533},{"sl":692},{"sl":693},{"sl":695},{"sl":697},{"sl":708},{"sl":715},{"sl":716},{"sl":721},{"sl":722},{"sl":727},{"sl":730},{"sl":731},{"sl":732},{"sl":734},{"sl":735},{"sl":742},{"sl":746},{"sl":747},{"sl":749}]},"test_720":{"methods":[{"sl":95},{"sl":142},{"sl":357},{"sl":391},{"sl":442},{"sl":458},{"sl":464},{"sl":532},{"sl":691},{"sl":706}],"name":"testMultiCurveCalibration","pass":true,"statements":[{"sl":97},{"sl":99},{"sl":153},{"sl":154},{"sl":155},{"sl":156},{"sl":157},{"sl":158},{"sl":159},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":165},{"sl":358},{"sl":359},{"sl":361},{"sl":362},{"sl":364},{"sl":365},{"sl":368},{"sl":392},{"sl":443},{"sl":444},{"sl":449},{"sl":457},{"sl":460},{"sl":463},{"sl":466},{"sl":469},{"sl":472},{"sl":475},{"sl":478},{"sl":483},{"sl":484},{"sl":486},{"sl":487},{"sl":488},{"sl":490},{"sl":491},{"sl":493},{"sl":497},{"sl":501},{"sl":502},{"sl":503},{"sl":504},{"sl":523},{"sl":533},{"sl":692},{"sl":693},{"sl":695},{"sl":697},{"sl":708},{"sl":715},{"sl":716},{"sl":721},{"sl":722},{"sl":727},{"sl":730},{"sl":731},{"sl":732},{"sl":734},{"sl":735},{"sl":742},{"sl":746},{"sl":747},{"sl":749}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [102, 720], [], [102, 720], [], [102, 720], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [102, 720], [], [], [], [], [], [], [], [], [], [], [102, 720], [102, 720], [102, 720], [102, 720], [102, 720], [102, 720], [102, 720], [102, 720], [102, 720], [102, 720], [102, 720], [102, 720], [102, 720], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [102, 720], [102, 720], [102, 720], [], [102, 720], [102, 720], [], [102, 720], [102, 720], [], [], [102, 720], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [102, 720], [102, 720], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [102, 720], [102, 720], [102, 720], [], [], [], [], [102, 720], [], [], [], [], [], [], [], [102, 720], [102, 720], [], [102, 720], [], [], [102, 720], [102, 720], [], [102, 720], [], [], [102, 720], [], [], [102, 720], [], [], [102, 720], [], [], [102, 720], [], [], [], [], [102, 720], [102, 720], [], [102, 720], [102, 720], [102, 720], [], [102, 720], [102, 720], [], [102, 720], [], [], [], [102, 720], [], [], [], [102, 720], [102, 720], [102, 720], [102, 720], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [102, 720], [], [], [], [], [], [], [], [], [102, 720], [102, 720], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [102, 720], [102, 720], [102, 720], [], [102, 720], [], [102, 720], [], [], [], [], [], [], [], [], [102, 720], [], [102, 720], [], [], [], [], [], [], [102, 720], [102, 720], [], [], [], [], [102, 720], [102, 720], [], [], [], [], [102, 720], [], [], [102, 720], [102, 720], [102, 720], [], [102, 720], [102, 720], [], [], [], [], [], [], [102, 720], [], [], [], [102, 720], [102, 720], [], [102, 720], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]