var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":542,"id":41096,"methods":[{"el":62,"sc":2,"sl":53},{"el":128,"sc":2,"sl":87},{"el":133,"sc":2,"sl":130},{"el":161,"sc":2,"sl":135},{"el":182,"sc":2,"sl":163},{"el":231,"sc":2,"sl":187},{"el":259,"sc":2,"sl":238},{"el":278,"sc":2,"sl":264},{"el":344,"sc":2,"sl":292},{"el":375,"sc":5,"sl":365},{"el":389,"sc":2,"sl":351},{"el":471,"sc":2,"sl":394},{"el":541,"sc":2,"sl":476}],"name":"BlackScholesMonteCarloValuationTest","sl":51}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_1019":{"methods":[{"sl":163},{"sl":292}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":297},{"sl":302},{"sl":303},{"sl":308},{"sl":309},{"sl":314},{"sl":316},{"sl":317},{"sl":322},{"sl":323},{"sl":324},{"sl":327},{"sl":328},{"sl":331},{"sl":332},{"sl":337},{"sl":338},{"sl":339},{"sl":341},{"sl":342},{"sl":343}]},"test_1022":{"methods":[{"sl":163},{"sl":394}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":400},{"sl":403},{"sl":404},{"sl":405},{"sl":410},{"sl":412},{"sl":413},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":423},{"sl":426},{"sl":428},{"sl":429},{"sl":430},{"sl":432},{"sl":433},{"sl":434},{"sl":437},{"sl":440},{"sl":447},{"sl":450},{"sl":451},{"sl":454},{"sl":455},{"sl":458},{"sl":468},{"sl":470}]},"test_1027":{"methods":[{"sl":163},{"sl":292}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":297},{"sl":302},{"sl":303},{"sl":308},{"sl":309},{"sl":314},{"sl":316},{"sl":317},{"sl":322},{"sl":323},{"sl":324},{"sl":327},{"sl":328},{"sl":331},{"sl":332},{"sl":337},{"sl":338},{"sl":339},{"sl":341},{"sl":342},{"sl":343}]},"test_1029":{"methods":[{"sl":163},{"sl":264}],"name":"testModelRandomVariable[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":269},{"sl":271},{"sl":273},{"sl":274},{"sl":275},{"sl":276}]},"test_1033":{"methods":[{"sl":163},{"sl":476}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":482},{"sl":485},{"sl":486},{"sl":487},{"sl":492},{"sl":494},{"sl":495},{"sl":498},{"sl":499},{"sl":501},{"sl":502},{"sl":505},{"sl":508},{"sl":510},{"sl":511},{"sl":513},{"sl":515},{"sl":516},{"sl":517},{"sl":520},{"sl":523},{"sl":530},{"sl":533},{"sl":538},{"sl":540}]},"test_1035":{"methods":[{"sl":163},{"sl":187}],"name":"testEuropeanCall[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":193},{"sl":196},{"sl":197},{"sl":198},{"sl":201},{"sl":202},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":213},{"sl":216},{"sl":218},{"sl":221},{"sl":224},{"sl":229}]},"test_1036":{"methods":[{"sl":163},{"sl":292}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":297},{"sl":302},{"sl":303},{"sl":308},{"sl":309},{"sl":314},{"sl":316},{"sl":317},{"sl":322},{"sl":323},{"sl":324},{"sl":327},{"sl":328},{"sl":331},{"sl":332},{"sl":337},{"sl":338},{"sl":339},{"sl":341},{"sl":342},{"sl":343}]},"test_109":{"methods":[{"sl":163},{"sl":292}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":297},{"sl":302},{"sl":303},{"sl":308},{"sl":309},{"sl":314},{"sl":316},{"sl":317},{"sl":322},{"sl":323},{"sl":324},{"sl":327},{"sl":328},{"sl":331},{"sl":332},{"sl":337},{"sl":338},{"sl":339},{"sl":341},{"sl":342},{"sl":343}]},"test_1135":{"methods":[{"sl":163},{"sl":238}],"name":"testModelProperties[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257}]},"test_1173":{"methods":[{"sl":163},{"sl":238}],"name":"testModelProperties[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257}]},"test_1219":{"methods":[{"sl":163},{"sl":238}],"name":"testModelProperties[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257}]},"test_1226":{"methods":[{"sl":163},{"sl":187}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":193},{"sl":196},{"sl":197},{"sl":198},{"sl":201},{"sl":202},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":213},{"sl":216},{"sl":218},{"sl":221},{"sl":224},{"sl":229}]},"test_1232":{"methods":[{"sl":163},{"sl":476}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":482},{"sl":485},{"sl":486},{"sl":487},{"sl":492},{"sl":494},{"sl":495},{"sl":498},{"sl":499},{"sl":501},{"sl":502},{"sl":505},{"sl":508},{"sl":510},{"sl":511},{"sl":513},{"sl":515},{"sl":516},{"sl":517},{"sl":520},{"sl":523},{"sl":530},{"sl":533},{"sl":538},{"sl":540}]},"test_1299":{"methods":[{"sl":163},{"sl":394}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":400},{"sl":403},{"sl":404},{"sl":405},{"sl":410},{"sl":412},{"sl":413},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":423},{"sl":426},{"sl":428},{"sl":429},{"sl":430},{"sl":432},{"sl":433},{"sl":434},{"sl":437},{"sl":440},{"sl":447},{"sl":450},{"sl":451},{"sl":454},{"sl":455},{"sl":458},{"sl":468},{"sl":470}]},"test_137":{"methods":[{"sl":163},{"sl":476}],"name":"testEuropeanCallVega[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":482},{"sl":485},{"sl":486},{"sl":487},{"sl":492},{"sl":494},{"sl":495},{"sl":498},{"sl":499},{"sl":501},{"sl":502},{"sl":505},{"sl":508},{"sl":510},{"sl":511},{"sl":513},{"sl":515},{"sl":516},{"sl":517},{"sl":520},{"sl":523},{"sl":530},{"sl":533},{"sl":538},{"sl":540}]},"test_159":{"methods":[{"sl":163},{"sl":292}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":297},{"sl":302},{"sl":303},{"sl":308},{"sl":309},{"sl":314},{"sl":316},{"sl":317},{"sl":322},{"sl":323},{"sl":324},{"sl":327},{"sl":328},{"sl":331},{"sl":332},{"sl":337},{"sl":338},{"sl":339},{"sl":341},{"sl":342},{"sl":343}]},"test_174":{"methods":[{"sl":163},{"sl":264}],"name":"testModelRandomVariable[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":269},{"sl":271},{"sl":273},{"sl":274},{"sl":275},{"sl":276}]},"test_214":{"methods":[{"sl":163},{"sl":187}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":193},{"sl":196},{"sl":197},{"sl":198},{"sl":201},{"sl":202},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":213},{"sl":216},{"sl":218},{"sl":221},{"sl":224},{"sl":229}]},"test_277":{"methods":[{"sl":163},{"sl":394}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":400},{"sl":403},{"sl":404},{"sl":405},{"sl":410},{"sl":412},{"sl":413},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":423},{"sl":426},{"sl":428},{"sl":429},{"sl":430},{"sl":432},{"sl":433},{"sl":434},{"sl":437},{"sl":440},{"sl":447},{"sl":450},{"sl":451},{"sl":454},{"sl":455},{"sl":458},{"sl":468},{"sl":470}]},"test_281":{"methods":[{"sl":163},{"sl":264}],"name":"testModelRandomVariable[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":269},{"sl":271},{"sl":273},{"sl":274},{"sl":275},{"sl":276}]},"test_349":{"methods":[{"sl":163},{"sl":238}],"name":"testModelProperties[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257}]},"test_355":{"methods":[{"sl":163},{"sl":292}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":297},{"sl":302},{"sl":303},{"sl":308},{"sl":309},{"sl":314},{"sl":316},{"sl":317},{"sl":322},{"sl":323},{"sl":324},{"sl":327},{"sl":328},{"sl":331},{"sl":332},{"sl":337},{"sl":338},{"sl":339},{"sl":341},{"sl":342},{"sl":343}]},"test_382":{"methods":[{"sl":163},{"sl":238}],"name":"testModelProperties[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257}]},"test_395":{"methods":[{"sl":163},{"sl":187}],"name":"testEuropeanCall[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":193},{"sl":196},{"sl":197},{"sl":198},{"sl":201},{"sl":202},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":213},{"sl":216},{"sl":218},{"sl":221},{"sl":224},{"sl":229}]},"test_450":{"methods":[{"sl":163},{"sl":394}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":400},{"sl":403},{"sl":404},{"sl":405},{"sl":410},{"sl":412},{"sl":413},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":423},{"sl":426},{"sl":428},{"sl":429},{"sl":430},{"sl":432},{"sl":433},{"sl":434},{"sl":437},{"sl":440},{"sl":447},{"sl":450},{"sl":451},{"sl":454},{"sl":455},{"sl":458},{"sl":468},{"sl":470}]},"test_530":{"methods":[{"sl":163},{"sl":476}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":482},{"sl":485},{"sl":486},{"sl":487},{"sl":492},{"sl":494},{"sl":495},{"sl":498},{"sl":499},{"sl":501},{"sl":502},{"sl":505},{"sl":508},{"sl":510},{"sl":511},{"sl":513},{"sl":515},{"sl":516},{"sl":517},{"sl":520},{"sl":523},{"sl":530},{"sl":533},{"sl":538},{"sl":540}]},"test_562":{"methods":[{"sl":163},{"sl":476}],"name":"testEuropeanCallVega[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":482},{"sl":485},{"sl":486},{"sl":487},{"sl":492},{"sl":494},{"sl":495},{"sl":498},{"sl":499},{"sl":501},{"sl":502},{"sl":505},{"sl":508},{"sl":510},{"sl":511},{"sl":513},{"sl":515},{"sl":516},{"sl":517},{"sl":520},{"sl":523},{"sl":530},{"sl":533},{"sl":538},{"sl":540}]},"test_577":{"methods":[{"sl":163},{"sl":476}],"name":"testEuropeanCallVega[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":482},{"sl":485},{"sl":486},{"sl":487},{"sl":492},{"sl":494},{"sl":495},{"sl":498},{"sl":499},{"sl":501},{"sl":502},{"sl":505},{"sl":508},{"sl":510},{"sl":511},{"sl":513},{"sl":515},{"sl":516},{"sl":517},{"sl":520},{"sl":523},{"sl":530},{"sl":533},{"sl":538},{"sl":540}]},"test_588":{"methods":[{"sl":163},{"sl":264}],"name":"testModelRandomVariable[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":269},{"sl":271},{"sl":273},{"sl":274},{"sl":275},{"sl":276}]},"test_61":{"methods":[{"sl":163},{"sl":292}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":297},{"sl":302},{"sl":303},{"sl":308},{"sl":309},{"sl":314},{"sl":316},{"sl":317},{"sl":322},{"sl":323},{"sl":324},{"sl":327},{"sl":328},{"sl":331},{"sl":332},{"sl":337},{"sl":338},{"sl":339},{"sl":341},{"sl":342},{"sl":343}]},"test_619":{"methods":[{"sl":163},{"sl":292}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":297},{"sl":302},{"sl":303},{"sl":308},{"sl":309},{"sl":314},{"sl":316},{"sl":317},{"sl":322},{"sl":323},{"sl":324},{"sl":327},{"sl":328},{"sl":331},{"sl":332},{"sl":337},{"sl":338},{"sl":339},{"sl":341},{"sl":342},{"sl":343}]},"test_658":{"methods":[{"sl":163},{"sl":264}],"name":"testModelRandomVariable[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":269},{"sl":271},{"sl":273},{"sl":274},{"sl":275},{"sl":276}]},"test_673":{"methods":[{"sl":163},{"sl":264}],"name":"testModelRandomVariable[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":269},{"sl":271},{"sl":273},{"sl":274},{"sl":275},{"sl":276}]},"test_688":{"methods":[{"sl":163},{"sl":264}],"name":"testModelRandomVariable[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":269},{"sl":271},{"sl":273},{"sl":274},{"sl":275},{"sl":276}]},"test_714":{"methods":[{"sl":163},{"sl":394}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":400},{"sl":403},{"sl":404},{"sl":405},{"sl":410},{"sl":412},{"sl":413},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":423},{"sl":426},{"sl":428},{"sl":429},{"sl":430},{"sl":432},{"sl":433},{"sl":434},{"sl":437},{"sl":440},{"sl":447},{"sl":450},{"sl":451},{"sl":454},{"sl":455},{"sl":458},{"sl":468},{"sl":470}]},"test_725":{"methods":[{"sl":163},{"sl":264}],"name":"testModelRandomVariable[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":269},{"sl":271},{"sl":273},{"sl":274},{"sl":275},{"sl":276}]},"test_741":{"methods":[{"sl":163},{"sl":187}],"name":"testEuropeanCall[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":193},{"sl":196},{"sl":197},{"sl":198},{"sl":201},{"sl":202},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":213},{"sl":216},{"sl":218},{"sl":221},{"sl":224},{"sl":229}]},"test_75":{"methods":[{"sl":163},{"sl":238}],"name":"testModelProperties[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257}]},"test_757":{"methods":[{"sl":163},{"sl":476}],"name":"testEuropeanCallVega[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":482},{"sl":485},{"sl":486},{"sl":487},{"sl":492},{"sl":494},{"sl":495},{"sl":498},{"sl":499},{"sl":501},{"sl":502},{"sl":505},{"sl":508},{"sl":510},{"sl":511},{"sl":513},{"sl":515},{"sl":516},{"sl":517},{"sl":520},{"sl":523},{"sl":530},{"sl":533},{"sl":538},{"sl":540}]},"test_802":{"methods":[{"sl":163},{"sl":394}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":400},{"sl":403},{"sl":404},{"sl":405},{"sl":410},{"sl":412},{"sl":413},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":423},{"sl":426},{"sl":428},{"sl":429},{"sl":430},{"sl":432},{"sl":433},{"sl":434},{"sl":437},{"sl":440},{"sl":447},{"sl":450},{"sl":451},{"sl":454},{"sl":455},{"sl":458},{"sl":468},{"sl":470}]},"test_819":{"methods":[{"sl":163},{"sl":238}],"name":"testModelProperties[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257}]},"test_877":{"methods":[{"sl":163},{"sl":476}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":482},{"sl":485},{"sl":486},{"sl":487},{"sl":492},{"sl":494},{"sl":495},{"sl":498},{"sl":499},{"sl":501},{"sl":502},{"sl":505},{"sl":508},{"sl":510},{"sl":511},{"sl":513},{"sl":515},{"sl":516},{"sl":517},{"sl":520},{"sl":523},{"sl":530},{"sl":533},{"sl":538},{"sl":540}]},"test_900":{"methods":[{"sl":163},{"sl":187}],"name":"testEuropeanCall[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":193},{"sl":196},{"sl":197},{"sl":198},{"sl":201},{"sl":202},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":213},{"sl":216},{"sl":218},{"sl":221},{"sl":224},{"sl":229}]},"test_912":{"methods":[{"sl":163},{"sl":238}],"name":"testModelProperties[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":243},{"sl":245},{"sl":247},{"sl":248},{"sl":249},{"sl":251},{"sl":252},{"sl":253},{"sl":255},{"sl":256},{"sl":257}]},"test_938":{"methods":[{"sl":163},{"sl":394}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":400},{"sl":403},{"sl":404},{"sl":405},{"sl":410},{"sl":412},{"sl":413},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":423},{"sl":426},{"sl":428},{"sl":429},{"sl":430},{"sl":432},{"sl":433},{"sl":434},{"sl":437},{"sl":440},{"sl":447},{"sl":450},{"sl":451},{"sl":454},{"sl":455},{"sl":458},{"sl":468},{"sl":470}]},"test_983":{"methods":[{"sl":163},{"sl":394}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":400},{"sl":403},{"sl":404},{"sl":405},{"sl":410},{"sl":412},{"sl":413},{"sl":416},{"sl":417},{"sl":419},{"sl":420},{"sl":423},{"sl":426},{"sl":428},{"sl":429},{"sl":430},{"sl":432},{"sl":433},{"sl":434},{"sl":437},{"sl":440},{"sl":447},{"sl":450},{"sl":451},{"sl":454},{"sl":455},{"sl":458},{"sl":468},{"sl":470}]},"test_984":{"methods":[{"sl":163},{"sl":187}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":193},{"sl":196},{"sl":197},{"sl":198},{"sl":201},{"sl":202},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":213},{"sl":216},{"sl":218},{"sl":221},{"sl":224},{"sl":229}]},"test_99":{"methods":[{"sl":163},{"sl":187}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":168},{"sl":170},{"sl":173},{"sl":176},{"sl":178},{"sl":181},{"sl":193},{"sl":196},{"sl":197},{"sl":198},{"sl":201},{"sl":202},{"sl":207},{"sl":209},{"sl":210},{"sl":212},{"sl":213},{"sl":216},{"sl":218},{"sl":221},{"sl":224},{"sl":229}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [983, 395, 1022, 99, 1029, 802, 577, 530, 174, 673, 137, 757, 900, 1299, 159, 1036, 912, 819, 1232, 382, 277, 1219, 1027, 1135, 588, 355, 1019, 658, 877, 938, 688, 562, 725, 450, 1226, 75, 984, 1033, 1173, 281, 1035, 214, 349, 109, 61, 714, 741, 619], [], [], [], [], [983, 395, 1022, 99, 1029, 802, 577, 530, 174, 673, 137, 757, 900, 1299, 159, 1036, 912, 819, 1232, 382, 277, 1219, 1027, 1135, 588, 355, 1019, 658, 877, 938, 688, 562, 725, 450, 1226, 75, 984, 1033, 1173, 281, 1035, 214, 349, 109, 61, 714, 741, 619], [], [983, 395, 1022, 99, 1029, 802, 577, 530, 174, 673, 137, 757, 900, 1299, 159, 1036, 912, 819, 1232, 382, 277, 1219, 1027, 1135, 588, 355, 1019, 658, 877, 938, 688, 562, 725, 450, 1226, 75, 984, 1033, 1173, 281, 1035, 214, 349, 109, 61, 714, 741, 619], [], [], [983, 395, 1022, 99, 1029, 802, 577, 530, 174, 673, 137, 757, 900, 1299, 159, 1036, 912, 819, 1232, 382, 277, 1219, 1027, 1135, 588, 355, 1019, 658, 877, 938, 688, 562, 725, 450, 1226, 75, 984, 1033, 1173, 281, 1035, 214, 349, 109, 61, 714, 741, 619], [], [], [983, 395, 1022, 99, 1029, 802, 577, 530, 174, 673, 137, 757, 900, 1299, 159, 1036, 912, 819, 1232, 382, 277, 1219, 1027, 1135, 588, 355, 1019, 658, 877, 938, 688, 562, 725, 450, 1226, 75, 984, 1033, 1173, 281, 1035, 214, 349, 109, 61, 714, 741, 619], [], [983, 395, 1022, 99, 1029, 802, 577, 530, 174, 673, 137, 757, 900, 1299, 159, 1036, 912, 819, 1232, 382, 277, 1219, 1027, 1135, 588, 355, 1019, 658, 877, 938, 688, 562, 725, 450, 1226, 75, 984, 1033, 1173, 281, 1035, 214, 349, 109, 61, 714, 741, 619], [], [], [983, 395, 1022, 99, 1029, 802, 577, 530, 174, 673, 137, 757, 900, 1299, 159, 1036, 912, 819, 1232, 382, 277, 1219, 1027, 1135, 588, 355, 1019, 658, 877, 938, 688, 562, 725, 450, 1226, 75, 984, 1033, 1173, 281, 1035, 214, 349, 109, 61, 714, 741, 619], [], [], [], [], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [], [], [], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [395, 99, 900, 1226, 984, 1035, 214, 741], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [], [], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [], [], [], [395, 99, 900, 1226, 984, 1035, 214, 741], [], [], [], [], [], [], [], [], [912, 819, 382, 1219, 1135, 75, 1173, 349], [], [], [], [], [912, 819, 382, 1219, 1135, 75, 1173, 349], [], [912, 819, 382, 1219, 1135, 75, 1173, 349], [], [912, 819, 382, 1219, 1135, 75, 1173, 349], [912, 819, 382, 1219, 1135, 75, 1173, 349], [912, 819, 382, 1219, 1135, 75, 1173, 349], [], [912, 819, 382, 1219, 1135, 75, 1173, 349], [912, 819, 382, 1219, 1135, 75, 1173, 349], [912, 819, 382, 1219, 1135, 75, 1173, 349], [], [912, 819, 382, 1219, 1135, 75, 1173, 349], [912, 819, 382, 1219, 1135, 75, 1173, 349], [912, 819, 382, 1219, 1135, 75, 1173, 349], [], [], [], [], [], [], [1029, 174, 673, 588, 658, 688, 725, 281], [], [], [], [], [1029, 174, 673, 588, 658, 688, 725, 281], [], [1029, 174, 673, 588, 658, 688, 725, 281], [], [1029, 174, 673, 588, 658, 688, 725, 281], [1029, 174, 673, 588, 658, 688, 725, 281], [1029, 174, 673, 588, 658, 688, 725, 281], [1029, 174, 673, 588, 658, 688, 725, 281], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [], [], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [], [], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [], [], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [], [], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [], [], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [], [], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [159, 1036, 1027, 355, 1019, 109, 61, 619], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [], [], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [], [], [], [], [], [], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [983, 1022, 802, 1299, 277, 938, 450, 714], [], [], [], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [577, 530, 137, 757, 1232, 877, 562, 1033], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [577, 530, 137, 757, 1232, 877, 562, 1033], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [], [], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [], [], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], [577, 530, 137, 757, 1232, 877, 562, 1033], [], []]