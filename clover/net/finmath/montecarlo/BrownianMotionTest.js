var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":296,"id":40405,"methods":[{"el":54,"sc":2,"sl":45},{"el":59,"sc":2,"sl":56},{"el":81,"sc":5,"sl":80},{"el":95,"sc":2,"sl":65},{"el":136,"sc":2,"sl":97},{"el":181,"sc":2,"sl":138},{"el":241,"sc":2,"sl":183},{"el":294,"sc":2,"sl":243}],"name":"BrownianMotionTest","sl":37}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_109":{"methods":[{"sl":97}],"name":"testScalarValuedBrownianMotionTerminalDistribution[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":107},{"sl":109},{"sl":112},{"sl":120},{"sl":122},{"sl":124},{"sl":125},{"sl":127},{"sl":129},{"sl":130},{"sl":132},{"sl":135}]},"test_139":{"methods":[{"sl":243}],"name":"testSerialization[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":249},{"sl":250},{"sl":253},{"sl":256},{"sl":264},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":282},{"sl":283},{"sl":284},{"sl":285},{"sl":290},{"sl":292},{"sl":293}]},"test_169":{"methods":[{"sl":65},{"sl":80}],"name":"testDensity[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":81},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":89},{"sl":91},{"sl":93}]},"test_226":{"methods":[{"sl":183}],"name":"testBrownianIncrementSquaredDrift[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":186},{"sl":187},{"sl":189},{"sl":190},{"sl":193},{"sl":196},{"sl":204},{"sl":205},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":214},{"sl":215},{"sl":218},{"sl":219},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":226},{"sl":228},{"sl":229},{"sl":230},{"sl":231},{"sl":234},{"sl":235},{"sl":237},{"sl":240}]},"test_238":{"methods":[{"sl":183}],"name":"testBrownianIncrementSquaredDrift[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":186},{"sl":187},{"sl":189},{"sl":190},{"sl":193},{"sl":196},{"sl":204},{"sl":205},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":214},{"sl":215},{"sl":218},{"sl":219},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":226},{"sl":228},{"sl":229},{"sl":230},{"sl":231},{"sl":234},{"sl":235},{"sl":237},{"sl":240}]},"test_260":{"methods":[{"sl":138}],"name":"testScalarValuedBrownianMotionWithJarqueBeraTest[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":149},{"sl":152},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":172},{"sl":176},{"sl":178},{"sl":180}]},"test_310":{"methods":[{"sl":243}],"name":"testSerialization[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":249},{"sl":250},{"sl":253},{"sl":256},{"sl":264},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":282},{"sl":283},{"sl":284},{"sl":285},{"sl":290},{"sl":292},{"sl":293}]},"test_331":{"methods":[{"sl":138}],"name":"testScalarValuedBrownianMotionWithJarqueBeraTest[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":149},{"sl":152},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":172},{"sl":176},{"sl":178},{"sl":180}]},"test_40":{"methods":[{"sl":183}],"name":"testBrownianIncrementSquaredDrift[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":186},{"sl":187},{"sl":189},{"sl":190},{"sl":193},{"sl":196},{"sl":204},{"sl":205},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":214},{"sl":215},{"sl":218},{"sl":219},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":226},{"sl":228},{"sl":229},{"sl":230},{"sl":231},{"sl":234},{"sl":235},{"sl":237},{"sl":240}]},"test_463":{"methods":[{"sl":97}],"name":"testScalarValuedBrownianMotionTerminalDistribution[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":107},{"sl":109},{"sl":112},{"sl":120},{"sl":122},{"sl":124},{"sl":125},{"sl":127},{"sl":129},{"sl":130},{"sl":132},{"sl":135}]},"test_473":{"methods":[{"sl":138}],"name":"testScalarValuedBrownianMotionWithJarqueBeraTest[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":149},{"sl":152},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":172},{"sl":176},{"sl":178},{"sl":180}]},"test_484":{"methods":[{"sl":243}],"name":"testSerialization[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":249},{"sl":250},{"sl":253},{"sl":256},{"sl":264},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":282},{"sl":283},{"sl":284},{"sl":285},{"sl":290},{"sl":292},{"sl":293}]},"test_488":{"methods":[{"sl":183}],"name":"testBrownianIncrementSquaredDrift[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":186},{"sl":187},{"sl":189},{"sl":190},{"sl":193},{"sl":196},{"sl":204},{"sl":205},{"sl":207},{"sl":208},{"sl":209},{"sl":210},{"sl":211},{"sl":214},{"sl":215},{"sl":218},{"sl":219},{"sl":222},{"sl":223},{"sl":224},{"sl":225},{"sl":226},{"sl":228},{"sl":229},{"sl":230},{"sl":231},{"sl":234},{"sl":235},{"sl":237},{"sl":240}]},"test_493":{"methods":[{"sl":65},{"sl":80}],"name":"testDensity[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":81},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":89},{"sl":91},{"sl":93}]},"test_537":{"methods":[{"sl":65},{"sl":80}],"name":"testDensity[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":81},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":89},{"sl":91},{"sl":93}]},"test_550":{"methods":[{"sl":65},{"sl":80}],"name":"testDensity[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":67},{"sl":68},{"sl":69},{"sl":70},{"sl":71},{"sl":73},{"sl":74},{"sl":75},{"sl":76},{"sl":78},{"sl":79},{"sl":81},{"sl":84},{"sl":85},{"sl":86},{"sl":88},{"sl":89},{"sl":91},{"sl":93}]},"test_619":{"methods":[{"sl":138}],"name":"testScalarValuedBrownianMotionWithJarqueBeraTest[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":141},{"sl":142},{"sl":143},{"sl":144},{"sl":146},{"sl":149},{"sl":152},{"sl":160},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":166},{"sl":167},{"sl":168},{"sl":169},{"sl":172},{"sl":176},{"sl":178},{"sl":180}]},"test_646":{"methods":[{"sl":97}],"name":"testScalarValuedBrownianMotionTerminalDistribution[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":107},{"sl":109},{"sl":112},{"sl":120},{"sl":122},{"sl":124},{"sl":125},{"sl":127},{"sl":129},{"sl":130},{"sl":132},{"sl":135}]},"test_649":{"methods":[{"sl":243}],"name":"testSerialization[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":246},{"sl":247},{"sl":249},{"sl":250},{"sl":253},{"sl":256},{"sl":264},{"sl":269},{"sl":270},{"sl":271},{"sl":272},{"sl":273},{"sl":274},{"sl":282},{"sl":283},{"sl":284},{"sl":285},{"sl":290},{"sl":292},{"sl":293}]},"test_90":{"methods":[{"sl":97}],"name":"testScalarValuedBrownianMotionTerminalDistribution[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":100},{"sl":101},{"sl":102},{"sl":104},{"sl":107},{"sl":109},{"sl":112},{"sl":120},{"sl":122},{"sl":124},{"sl":125},{"sl":127},{"sl":129},{"sl":130},{"sl":132},{"sl":135}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [537, 550, 493, 169], [], [537, 550, 493, 169], [537, 550, 493, 169], [537, 550, 493, 169], [537, 550, 493, 169], [537, 550, 493, 169], [], [537, 550, 493, 169], [537, 550, 493, 169], [537, 550, 493, 169], [537, 550, 493, 169], [], [537, 550, 493, 169], [537, 550, 493, 169], [537, 550, 493, 169], [537, 550, 493, 169], [], [], [537, 550, 493, 169], [537, 550, 493, 169], [537, 550, 493, 169], [], [537, 550, 493, 169], [537, 550, 493, 169], [], [537, 550, 493, 169], [], [537, 550, 493, 169], [], [], [], [109, 463, 646, 90], [], [], [109, 463, 646, 90], [109, 463, 646, 90], [109, 463, 646, 90], [], [109, 463, 646, 90], [], [], [109, 463, 646, 90], [], [109, 463, 646, 90], [], [], [109, 463, 646, 90], [], [], [], [], [], [], [], [109, 463, 646, 90], [], [109, 463, 646, 90], [], [109, 463, 646, 90], [109, 463, 646, 90], [], [109, 463, 646, 90], [], [109, 463, 646, 90], [109, 463, 646, 90], [], [109, 463, 646, 90], [], [], [109, 463, 646, 90], [], [], [619, 331, 473, 260], [], [], [619, 331, 473, 260], [619, 331, 473, 260], [619, 331, 473, 260], [619, 331, 473, 260], [], [619, 331, 473, 260], [], [], [619, 331, 473, 260], [], [], [619, 331, 473, 260], [], [], [], [], [], [], [], [619, 331, 473, 260], [619, 331, 473, 260], [619, 331, 473, 260], [619, 331, 473, 260], [619, 331, 473, 260], [], [619, 331, 473, 260], [619, 331, 473, 260], [619, 331, 473, 260], [619, 331, 473, 260], [], [], [619, 331, 473, 260], [], [], [], [619, 331, 473, 260], [], [619, 331, 473, 260], [], [619, 331, 473, 260], [], [], [238, 40, 488, 226], [], [], [238, 40, 488, 226], [238, 40, 488, 226], [], [238, 40, 488, 226], [238, 40, 488, 226], [], [], [238, 40, 488, 226], [], [], [238, 40, 488, 226], [], [], [], [], [], [], [], [238, 40, 488, 226], [238, 40, 488, 226], [], [238, 40, 488, 226], [238, 40, 488, 226], [238, 40, 488, 226], [238, 40, 488, 226], [238, 40, 488, 226], [], [], [238, 40, 488, 226], [238, 40, 488, 226], [], [], [238, 40, 488, 226], [238, 40, 488, 226], [], [], [238, 40, 488, 226], [238, 40, 488, 226], [238, 40, 488, 226], [238, 40, 488, 226], [238, 40, 488, 226], [], [238, 40, 488, 226], [238, 40, 488, 226], [238, 40, 488, 226], [238, 40, 488, 226], [], [], [238, 40, 488, 226], [238, 40, 488, 226], [], [238, 40, 488, 226], [], [], [238, 40, 488, 226], [], [], [484, 649, 139, 310], [], [], [484, 649, 139, 310], [484, 649, 139, 310], [], [484, 649, 139, 310], [484, 649, 139, 310], [], [], [484, 649, 139, 310], [], [], [484, 649, 139, 310], [], [], [], [], [], [], [], [484, 649, 139, 310], [], [], [], [], [484, 649, 139, 310], [484, 649, 139, 310], [484, 649, 139, 310], [484, 649, 139, 310], [484, 649, 139, 310], [484, 649, 139, 310], [], [], [], [], [], [], [], [484, 649, 139, 310], [484, 649, 139, 310], [484, 649, 139, 310], [484, 649, 139, 310], [], [], [], [], [484, 649, 139, 310], [], [484, 649, 139, 310], [484, 649, 139, 310], [], [], []]