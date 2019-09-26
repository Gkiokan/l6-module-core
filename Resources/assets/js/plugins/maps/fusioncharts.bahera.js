(function(factory){if(typeof module==="object"&&typeof module.exports!=="undefined"){module.exports=factory}else{factory(FusionCharts)}})(function(FusionCharts){(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:false,enumerable:true,get:getter})}};__webpack_require__.r=function(exports){Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=254)})({254:function(module,exports,__webpack_require__){"use strict";var _fusioncharts=__webpack_require__(255);var _fusioncharts2=_interopRequireDefault(_fusioncharts);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}FusionCharts.addDep(_fusioncharts2["default"])},255:function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;
/**!
 * @license FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @meta package_map_pack
 * @id fusionmaps.Bahera.18.08-07-2012 12:49:46
 */var M="M",L="L",Z="Z",Q="Q",LFT="left",RGT="right",CEN="center",MID="middle",TOP="top",BTM="bottom",geodefinitions=[{name:"Bahera",revision:18,standaloneInit:true,baseWidth:560,baseHeight:593,baseScaleFactor:10,entities:{"01":{outlines:[[M,3212,271,Q,3201,247,3196,239,3176,223,3170,212,3167,205,3159,203,3151,201,3146,196,3071,196,3041,195,3033,195,3014,193,3006,185,3e3,184,2987,183,2984,179,2977,172,2968,167,2953,159,2950,150,2949,138,2945,132,2912,115,2903,98,2885,77,2883,69,2869,53,2861,33,L,2849,33,Q,2845,57,2837,105,2828,145,2810,172,2802,186,2799,210,2796,238,2791,251,2779,279,2758,325,2756,343,2743,362,2730,380,2725,405,2720,430,2683,502,2667,543,2590,670,2563,701,2515,762,2499,781,2468,807,2429,839,2413,856,2399,873,2392,881,2382,894,2361,905,2307,937,2297,941,2280,949,2265,961,2251,973,2240,978,2201,999,2167,1017,2160,1017,2152,1026,2142,1036,2137,1037,2110,1048,2087,1054,2073,1058,2002,1095,2e3,1096,1978,1096,1971,1106,1960,1108,1915,1119,1910,1121,1880,1132,1824,1132,L,1824,1158,1820,1158,1820,1157,Q,1807,1145,1808,1143,1808,1141,1785,1141,1770,1141,1753,1146,1738,1151,1720,1151,1719,1151,1717,1151,1703,1151,1702,1150,1699,1139,1699,1134,L,1681,1134,Q,1679,1138,1667,1145,1658,1151,1659,1158,1659,1171,1657,1198,1657,1229,1580,1229,1503,1229,1436,1222,1404,1219,1363,1220,1322,1220,1295,1217,1293,1212,1270,1183,1254,1162,1258,1141,L,1247,1141,Q,1239,1162,1232,1175,1229,1184,1224,1210,1215,1232,1193,1279,1155,1399,1141,1426,1141,1432,1133,1449,1130,1456,1130,1475,1127,1485,1109,1485,1088,1485,1082,1489,1058,1506,1061,1531,1062,1540,1056,1552,1052,1560,1045,1573,1027,1617,1025,1619,1009,1635,955,1630,892,1624,875,1639,862,1651,806,1643,806,1681,805,1782,802,1874,781,1923,729,1923,694,1933,674,1939,650,1937,640,1937,630,1943,621,1949,610,1948,580,1956,566,1959,533,1960,526,1963,502,1973,484,1970,473,1968,465,1974,446,1985,443,1986,433,1990,401,1988,374,1996,364,1996,329,1999,323,2003,316,2008,280,2011,225,2031,195,2033,102,2037,102,2043,102,2050,122,2061,138,2066,144,2084,144,2091,129,2089,127,2105,122,2109,122,2116,128,2122,134,2129,134,2134,134,2139,121,2152,116,2157,115,2167,115,2175,107,2176,103,2178,92,2196,81,2215,76,2218,68,2235,62,2239,53,2243,49,2260,23,2291,23,2303,23,2309,26,2312,29,2316,29,2327,L,32,2327,32,2351,Q,35,2353,43,2375,52,2396,64,2396,67,2396,81,2388,95,2380,102,2380,109,2381,151,2377,155,2372,190,2365,240,2360,246,2355,L,268,2355,Q,266,2388,292,2423,298,2433,299,2459,305,2469,306,2494,314,2521,313,2528,312,2535,317,2545,322,2555,322,2563,322,2578,343,2631,343,2645,331,2650,318,2657,311,2658,309,2671,287,2673,277,2681,268,2685,261,2687,257,2695,254,2701,250,2700,240,2698,233,2713,231,2712,223,2712,L,223,2729,Q,241,2741,270,2774,302,2809,322,2825,352,2865,354,2868,355,2870,360,2879,364,2888,368,2892,370,2893,372,2903,375,2911,382,2914,L,382,2924,367,2924,Q,367,2929,365,2932,L,348,2932,Q,342,2929,344,2919,L,333,2919,333,2932,Q,326,2931,316,2939,310,2944,302,2951,287,2952,277,2954,263,2966,262,2966,248,2966,239,2970,223,2983,220,2983,191,2994,184,3005,181,3011,145,3021,136,3029,106,3035,87,3054,73,3057,46,3063,44,3079,L,29,3079,Q,29,3080,28,3080,L,28,3088,Q,41,3084,49,3092,53,3097,61,3106,110,3183,118,3197,126,3211,131,3224,136,3236,154,3259,172,3282,217,3371,261,3460,313,3528,L,352,3601,Q,396,3655,471,3725,546,3794,595,3840,644,3885,645,3885,660,3899,1084,4306,1098,4320,1132,4350,1166,4379,1202,4415,1282,4490,1341,4547,1400,4603,1484,4683,1568,4763,1583,4779,1597,4795,1619,4813,1634,4826,1686,4874,1705,4894,1751,4936,1795,4974,1815,4997,1967,5170,2070,5248,2091,5276,2145,5338,2199,5399,2226,5433,2253,5466,2284,5503,2315,5539,2351,5563,2352,5563,2360,5572,2366,5577,2378,5581,2410,5592,2419,5601,2432,5616,2473,5632,2480,5636,2497,5649,2511,5653,2546,5683,2562,5696,2603,5722,2640,5745,2653,5758,2706,5805,2800,5906,2804,5906,2812,5897,2819,5887,2832,5861,L,2851,5839,Q,2875,5800,2903,5751,2931,5702,2955,5669,2980,5636,2988,5622,2997,5607,3008,5593,3023,5574,3049,5529,L,3083,5473,Q,3092,5451,3097,5441,3106,5425,3119,5425,3128,5430,3154,5463,3177,5494,3183,5494,3188,5494,3191,5486,3195,5478,3203,5477,3222,5462,3223,5461,3237,5453,3246,5438,3246,5437,3258,5430,3264,5427,3274,5411,3304,5385,3329,5365,3346,5349,3354,5342,3369,5329,3384,5330,3380,5314,3388,5305,3400,5291,3401,5287,3404,5281,3416,5273,3429,5263,3433,5257,3439,5232,3454,5209,3479,5173,3479,5172,3481,5149,3501,5133,3526,5116,3537,5107,3550,5094,3596,5094,3624,5094,3706,5095,3716,5095,3727,5095,L,3841,5095,3841,5118,Q,3841,5143,3837,5158,3832,5176,3829,5219,3827,5269,3820,5317,3820,5348,3823,5353,3831,5368,3843,5371,3847,5375,3872,5383,3896,5391,3904,5391,3916,5391,3927,5385,3939,5379,3949,5380,4010,5372,4043,5388,4076,5404,4114,5428,4152,5453,4190,5462,4204,5469,4217,5478,4229,5487,4261,5500,4292,5512,4313,5528,4346,5538,4355,5541,4363,5543,4374,5550,4386,5557,4397,5563,4407,5568,4478,5596,4492,5611,4526,5607,4561,5604,4579,5610,4599,5617,4645,5611,4651,5612,4660,5616,4668,5620,4678,5620,L,4726,5620,Q,4750,5617,4760,5633,4769,5635,4808,5634,4838,5633,4847,5641,4853,5646,4930,5646,4962,5646,4972,5652,4982,5657,5002,5657,5006,5657,5181,5644,L,5233,5644,Q,5263,5646,5273,5632,5292,5628,5369,5627,5377,5627,5391,5627,5403,5625,5409,5617,5419,5596,5428,5588,5431,5585,5467,5583,5499,5581,5499,5572,5499,5569,5494,5562,5489,5556,5489,5543,5491,5537,5486,5528,5482,5519,5485,5506,5478,5503,5476,5490,5474,5476,5471,5474,5455,5447,5455,5446,5455,5439,5472,5406,5488,5376,5482,5363,L,5492,5363,Q,5482,5340,5503,5333,5528,5325,5527,5314,5536,5316,5542,5307,5543,5306,5544,5304,5552,5270,5562,5262,5569,5257,5569,5230,5569,5188,5532,5188,5519,5188,5487,5202,5455,5215,5436,5215,5362,5215,5362,5129,5362,5107,5363,5103,5366,5094,5381,5081,5422,5056,5425,5046,5427,5038,5446,5032,5454,5028,5461,5017,5464,5015,5467,5009,5469,5006,5480,5003,5490,5002,5492,4998,5492,4997,5492,4986,5492,4982,5485,4973,5476,4963,5469,4963,5453,4963,5442,4968,5431,4972,5416,4972,5379,4972,5366,4959,5358,4944,5350,4930,5321,4885,5312,4867,5314,4836,5299,4799,5275,4737,5275,4737,5272,4731,5256,4713,5243,4699,5242,4685,5241,4666,5229,4651,5213,4633,5210,4627,5221,4617,5242,4582,5245,4567,5266,4538,5297,4521,5296,4497,5302,4465,5302,4441,5301,4420,5300,4412,5298,4397,5291,4395,5269,4379,5257,4375,5249,4372,5231,4351,5217,4333,5193,4333,5166,4333,5128,4286,5092,4241,5076,4235,5071,4213,5071,4208,5071,4203,5086,4190,5103,4175,5114,4175,5139,4177,5159,4170,5171,4167,5193,4159,5201,4157,5205,4150,5209,4142,5217,4140,5220,4139,5232,4138,5242,4137,5246,4132,5267,4120,5269,4112,5273,4100,5273,4081,5275,4060,5268,4039,5261,4019,5242,4006,5223,3988,5213,3980,5194,3967,5172,3967,5154,3967,5140,3982,5123,4002,5114,4003,5114,4003,5113,4003,5073,4009,5052,3987,5033,3967,5033,3932,5033,3908,5035,3907,5043,3897,5045,3889,5059,3880,5087,3862,5091,3858,5099,3847,5107,3836,5116,3832,5122,3830,5128,3819,5132,3815,5147,3810,5170,3795,5177,3784,5182,3776,5189,3773,5197,3769,5205,3760,5209,3755,5224,3749,5225,3749,5234,3734,5238,3733,5248,3722,5260,3723,5264,3713,5274,3718,5280,3710,5287,3701,5291,3701,5301,3702,5320,3691,5334,3683,5339,3671,5348,3668,5354,3665,5356,3663,5356,3655,5356,3645,5347,3636,5340,3628,5334,3628,5317,3618,5308,3614,5307,3613,5306,3613,5290,3611,5283,3606,5276,3601,5263,3601,5256,3601,5237,3610,5227,3615,5209,3614,5206,3623,5192,3629,5175,3637,5169,3646,5165,3652,5145,3658,5125,3665,5112,3665,5100,3665,5099,3665,5095,3661,5081,3655,5083,3650,5080,3646,5075,3640,5075,3636,5075,3632,5086,3622,5096,3612,5098,3605,5113,3606,5127,3597,5136,3591,5152,3577,5159,3572,5174,3564,5182,3559,5193,3544,5219,3533,5237,3504,5254,3476,5254,3444,5254,3415,5231,3383,5206,3348,5181,3353,5175,3355,5167,3349,5159,3342,5154,3341,5122,3343,5114,3340,5112,3332,5099,3332,5075,3332,5072,3331,5061,3318,5053,3315,5042,3314,5042,3294,5042,3274,5059,3255,5082,3229,5086,3220,5094,3201,5154,3159,5179,3117,5185,3101,5191,3091,5193,3073,5203,3059,5203,3047,5203,3009,5161,2978,5111,2950,5093,2938,5014,2883,4991,2834,L,4993,2800,Q,5015,2788,5065,2751,5067,2734,5074,2736,L,5074,2704,Q,5046,2664,5032,2644,5005,2607,4972,2605,4937,2596,4923,2596,4916,2596,4912,2592,4905,2584,4903,2583,4889,2584,4885,2579,4880,2573,4847,2565,4817,2559,4817,2546,4817,2524,4834,2524,4840,2512,4843,2505,L,4843,2485,Q,4853,2480,4850,2469,4849,2459,4858,2452,4855,2435,4867,2414,4878,2395,4873,2375,4872,2327,4871,2326,4868,2319,4867,2301,4866,2285,4859,2278,4807,2239,4785,2217,4759,2201,4750,2191,4735,2177,4708,2166,4681,2143,4667,2137,4655,2125,4652,2124,4630,2119,4624,2115,4562,2083,4535,2067,4487,2039,4463,2005,4440,1971,4399,1942,4355,1894,4330,1883,4311,1872,4282,1835,4260,1807,4262,1772,4263,1757,4253,1742,4239,1725,4234,1716,L,4213,1687,Q,4208,1675,4200,1673,4185,1671,4181,1669,4087,1620,4060,1591,4036,1563,4017,1555,3998,1547,3991,1539,3983,1531,3979,1528,3949,1525,3940,1524,L,3931,1524,Q,3930,1525,3918,1531,3911,1536,3909,1546,3908,1553,3900,1558,3891,1562,3890,1568,3888,1581,3881,1582,3873,1582,3870,1583,3852,1592,3843,1592,3810,1592,3767,1563,3722,1533,3722,1508,3722,1494,3730,1496,3737,1481,3742,1474,3742,1458,3747,1445,3751,1431,3751,1421,3756,1420,3762,1419,3765,1417,3765,1409,3765,1401,3758,1398,3751,1394,3751,1385,3752,1373,3746,1371,3745,1370,3731,1370,3721,1370,3719,1372,3709,1378,3707,1379,3697,1385,3683,1386,3672,1387,3671,1386,3652,1386,3623,1360,3590,1331,3590,1307,3590,1296,3598,1293,3605,1289,3605,1272,3605,1264,3615,1258,3623,1251,3620,1245,3623,1229,3673,1202,3700,1176,3712,1136,3713,1130,3719,1122,3724,1114,3724,1105,3724,1086,3722,1075,3721,1072,3721,1070,3721,1020,3719,1012,3709,995,3709,970,3709,953,3716,947,3724,941,3724,912,3724,888,3727,882,3730,875,3730,858,3730,814,3644,764,3555,713,3515,713,3474,713,3448,750,3436,768,3430,774,3421,786,3412,786,3392,786,3371,726,3355,668,3355,662,3355,661,3355,661,3355,631,3352,625,3350,602,3345,589,3341,578,3324,565,3306,552,3304,543,3299,541,3285,541,3273,541,3271,542,3269,543,3262,553,L,3184,553,Q,3184,544,3179,543,3173,540,3173,535,3173,522,3187,511,3192,505,3192,485,3201,476,3201,456,3200,433,3200,422,3200,411,3206,398,3214,384,3214,367,3214,355,3219,339,3224,322,3224,312,Q,3224,300,3212,271,Z]],label:"Bahera",shortLabel:"BA",labelPosition:[279.6,296.9],labelAlignment:[CEN,MID]}}}];exports["default"]={extension:geodefinitions,name:"bahera",type:"maps"}}})});