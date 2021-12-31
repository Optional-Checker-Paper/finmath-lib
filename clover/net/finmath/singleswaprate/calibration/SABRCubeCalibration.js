var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":750,"id":32341,"methods":[{"el":131,"sc":2,"sl":115},{"el":156,"sc":2,"sl":147},{"el":205,"sc":2,"sl":167},{"el":219,"sc":2,"sl":214},{"el":271,"sc":2,"sl":224},{"el":296,"sc":2,"sl":278},{"el":322,"sc":2,"sl":298},{"el":347,"sc":2,"sl":329},{"el":384,"sc":2,"sl":353},{"el":410,"sc":2,"sl":399},{"el":452,"sc":2,"sl":419},{"el":471,"sc":2,"sl":457},{"el":594,"sc":4,"sl":488},{"el":601,"sc":2,"sl":478},{"el":614,"sc":2,"sl":611},{"el":621,"sc":2,"sl":619},{"el":629,"sc":2,"sl":627},{"el":644,"sc":2,"sl":639},{"el":651,"sc":2,"sl":649},{"el":658,"sc":2,"sl":656},{"el":665,"sc":2,"sl":663},{"el":672,"sc":2,"sl":670},{"el":676,"sc":2,"sl":674},{"el":681,"sc":2,"sl":679},{"el":686,"sc":2,"sl":684},{"el":691,"sc":2,"sl":689},{"el":696,"sc":2,"sl":694},{"el":700,"sc":2,"sl":698},{"el":707,"sc":2,"sl":705},{"el":714,"sc":2,"sl":712}],"name":"SABRCubeCalibration","sl":45},{"el":749,"id":32630,"methods":[{"el":732,"sc":3,"sl":728},{"el":743,"sc":3,"sl":734},{"el":748,"sc":3,"sl":745}],"name":"SABRCubeCalibration.SwaptionInfo","sl":723}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_492":{"methods":[{"sl":115},{"sl":147},{"sl":167},{"sl":224},{"sl":278},{"sl":329},{"sl":353},{"sl":399},{"sl":419},{"sl":457},{"sl":478},{"sl":488},{"sl":611},{"sl":639},{"sl":712},{"sl":728},{"sl":745}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":117},{"sl":118},{"sl":121},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":150},{"sl":152},{"sl":153},{"sl":154},{"sl":155},{"sl":169},{"sl":170},{"sl":172},{"sl":173},{"sl":174},{"sl":175},{"sl":184},{"sl":185},{"sl":187},{"sl":189},{"sl":191},{"sl":194},{"sl":195},{"sl":197},{"sl":200},{"sl":203},{"sl":226},{"sl":227},{"sl":228},{"sl":230},{"sl":231},{"sl":232},{"sl":233},{"sl":235},{"sl":236},{"sl":237},{"sl":238},{"sl":239},{"sl":240},{"sl":243},{"sl":244},{"sl":245},{"sl":250},{"sl":251},{"sl":252},{"sl":253},{"sl":257},{"sl":261},{"sl":270},{"sl":280},{"sl":281},{"sl":284},{"sl":285},{"sl":286},{"sl":288},{"sl":289},{"sl":290},{"sl":291},{"sl":331},{"sl":332},{"sl":333},{"sl":334},{"sl":335},{"sl":337},{"sl":338},{"sl":339},{"sl":340},{"sl":343},{"sl":344},{"sl":345},{"sl":358},{"sl":359},{"sl":362},{"sl":363},{"sl":366},{"sl":367},{"sl":368},{"sl":369},{"sl":373},{"sl":374},{"sl":375},{"sl":376},{"sl":380},{"sl":381},{"sl":383},{"sl":400},{"sl":401},{"sl":403},{"sl":404},{"sl":405},{"sl":406},{"sl":409},{"sl":421},{"sl":422},{"sl":423},{"sl":425},{"sl":426},{"sl":427},{"sl":429},{"sl":430},{"sl":431},{"sl":432},{"sl":433},{"sl":435},{"sl":437},{"sl":448},{"sl":451},{"sl":459},{"sl":460},{"sl":461},{"sl":463},{"sl":464},{"sl":465},{"sl":467},{"sl":468},{"sl":469},{"sl":480},{"sl":492},{"sl":495},{"sl":496},{"sl":497},{"sl":500},{"sl":501},{"sl":502},{"sl":503},{"sl":504},{"sl":505},{"sl":506},{"sl":507},{"sl":509},{"sl":511},{"sl":512},{"sl":513},{"sl":514},{"sl":515},{"sl":516},{"sl":517},{"sl":519},{"sl":520},{"sl":521},{"sl":522},{"sl":525},{"sl":526},{"sl":529},{"sl":531},{"sl":532},{"sl":535},{"sl":537},{"sl":541},{"sl":542},{"sl":543},{"sl":544},{"sl":545},{"sl":546},{"sl":547},{"sl":549},{"sl":550},{"sl":551},{"sl":552},{"sl":555},{"sl":556},{"sl":557},{"sl":559},{"sl":561},{"sl":562},{"sl":565},{"sl":568},{"sl":597},{"sl":598},{"sl":600},{"sl":612},{"sl":613},{"sl":640},{"sl":641},{"sl":642},{"sl":643},{"sl":713},{"sl":729},{"sl":730},{"sl":731},{"sl":747}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [], [492], [492], [], [], [492], [492], [492], [492], [492], [492], [], [492], [492], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [], [], [492], [], [492], [492], [492], [492], [], [], [], [], [], [], [], [], [], [], [], [492], [], [492], [492], [], [492], [492], [492], [492], [], [], [], [], [], [], [], [], [492], [492], [], [492], [], [492], [], [492], [], [], [492], [492], [], [492], [], [], [492], [], [], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [], [492], [492], [492], [], [492], [492], [492], [492], [], [492], [492], [492], [492], [492], [492], [], [], [492], [492], [492], [], [], [], [], [492], [492], [492], [492], [], [], [], [492], [], [], [], [492], [], [], [], [], [], [], [], [], [492], [], [], [], [], [], [], [], [492], [], [492], [492], [], [], [492], [492], [492], [], [492], [492], [492], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [], [492], [492], [492], [492], [492], [], [492], [492], [492], [492], [], [], [492], [492], [492], [], [], [], [], [], [], [], [492], [], [], [], [], [492], [492], [], [], [492], [492], [], [], [492], [492], [492], [492], [], [], [], [492], [492], [492], [492], [], [], [], [492], [492], [], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [492], [492], [], [492], [492], [492], [492], [], [], [492], [], [], [], [], [], [], [], [], [], [492], [], [492], [492], [492], [], [492], [492], [492], [], [492], [492], [492], [492], [492], [], [492], [], [492], [], [], [], [], [], [], [], [], [], [], [492], [], [], [492], [], [], [], [], [], [492], [], [492], [492], [492], [], [492], [492], [492], [], [492], [492], [492], [], [], [], [], [], [], [], [], [492], [], [492], [], [], [], [], [], [], [], [492], [], [], [], [492], [], [], [492], [492], [492], [], [], [492], [492], [492], [492], [492], [492], [492], [492], [], [492], [], [492], [492], [492], [492], [492], [492], [492], [], [492], [492], [492], [492], [], [], [492], [492], [], [], [492], [], [492], [492], [], [], [492], [], [492], [], [], [], [492], [492], [492], [492], [492], [492], [492], [], [492], [492], [492], [492], [], [], [492], [492], [492], [], [492], [], [492], [492], [], [], [492], [], [], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [492], [], [492], [], [], [], [], [], [], [], [], [], [], [492], [492], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [492], [492], [492], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [492], [492], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [], [492], [], [], []]