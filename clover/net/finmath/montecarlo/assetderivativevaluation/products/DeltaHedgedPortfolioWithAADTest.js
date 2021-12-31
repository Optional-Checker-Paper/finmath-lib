var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":242,"id":41895,"methods":[{"el":96,"sc":2,"sl":70},{"el":103,"sc":2,"sl":98},{"el":133,"sc":2,"sl":105},{"el":167,"sc":2,"sl":135},{"el":241,"sc":2,"sl":169}],"name":"DeltaHedgedPortfolioWithAADTest","sl":41}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_60":{"methods":[{"sl":169}],"name":"testHedgePerformance[MonteCarloAssetModel [model=BlackScholesModel [initialValue=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@2de23121,\n ID=0], riskFreeRate=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@63475ace,\n ID=1], volatility=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2], randomVariableFactory=RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.0, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=false, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]], initialState=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@c0c2f8d,\n ID=3]], drift=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@305b7c14,\n ID=6]], factorLoadings=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2]]]]-EuropeanOption [maturity=5.0, strike=1.2840254166877414, underlyingIndex=0, nameOfUnderliyng=null]]","pass":true,"statements":[{"sl":172},{"sl":174},{"sl":176},{"sl":178},{"sl":180},{"sl":182},{"sl":183},{"sl":184},{"sl":186},{"sl":188},{"sl":189},{"sl":191},{"sl":193},{"sl":201},{"sl":217},{"sl":229},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":237},{"sl":239}]},"test_77":{"methods":[{"sl":169}],"name":"testHedgePerformance[MonteCarloAssetModel [model=BlackScholesModel [initialValue=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@2de23121,\n ID=0], riskFreeRate=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@63475ace,\n ID=1], volatility=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2], randomVariableFactory=RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.0, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=false, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]], initialState=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@c0c2f8d,\n ID=3]], drift=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@305b7c14,\n ID=6]], factorLoadings=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2]]]]-AbstractMonteCarloProduct [currency=null]]","pass":true,"statements":[{"sl":172},{"sl":174},{"sl":176},{"sl":178},{"sl":180},{"sl":182},{"sl":183},{"sl":184},{"sl":186},{"sl":188},{"sl":189},{"sl":191},{"sl":193},{"sl":201},{"sl":217},{"sl":218},{"sl":219},{"sl":220},{"sl":221},{"sl":223},{"sl":224},{"sl":226},{"sl":229},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":234},{"sl":237},{"sl":239}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [60, 77], [], [], [60, 77], [], [60, 77], [], [60, 77], [], [60, 77], [], [60, 77], [], [60, 77], [60, 77], [60, 77], [], [60, 77], [], [60, 77], [60, 77], [], [60, 77], [], [60, 77], [], [], [], [], [], [], [], [60, 77], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [60, 77], [77], [77], [77], [77], [], [77], [77], [], [77], [], [], [60, 77], [60, 77], [60, 77], [60, 77], [60, 77], [60, 77], [], [], [60, 77], [], [60, 77], [], [], []]