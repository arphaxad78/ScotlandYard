function GetCirclePosition(LocationNumber)
{
   // This method contains the x,y coordinate mappings that denote where each location node is on the graphic.
   // These mappings only work with the file "sy_map_full_3.jpg"

   var items =
      // Locations 0 - 49
      [[0, 0],[473, 155],[1153, 95],[1597,107],[1865, 83],[2945, 103],[3293, 107],[3613, 123],[321, 319],[601, 323],
      [1381, 303],[1585, 335],[1745, 303],[2061, 287],[2381, 215],[2705, 179],[3017, 291],[3589, 387],[177, 447],[437, 471],
      [749, 391],[1077, 527],[1593, 571],[1849, 431],[2245, 447],[2413, 487],[2677, 287],[2721, 443],[2837, 379],[3281, 467],
      [3705, 447],[293, 563],[661, 647],[933, 603],[1401, 651],[1677, 715],[1785, 731],[1949, 579],[2321, 587],[2493, 555],
      [2785, 679],[2917, 623],[3605, 619],[117, 695],[489, 775],[761, 819],[985, 751],[1161, 699],[1453, 835],[1885, 835],
      // Locations 50 - 99
      [2068, 723],[2432, 755],[2620, 703],[2824, 815],[2972, 771],[3304, 759],[3736, 795],[252, 847],[612, 891],[680, 971],
      [820, 951],[1060, 987],[1180, 943],[1492, 1095],[1676, 1059],[1872, 1019],[1984, 991],[2204, 955],[2460, 899],[2696, 883],
      [2980, 923],[3260, 923],[3540, 951],[256, 991],[380, 1139],[560, 1083],[776, 1083],[928, 1211],[1120, 1171],[1248, 1151],
      [1544, 1207],[1812, 1247],[1916, 1183],[2156, 1135],[2328, 1067],[2472, 1011],[2728, 1107],[3000, 1171],[3132, 1199],[3236, 1103],
      [3424, 1103],[3696, 1115],[164, 1271],[184, 1367],[404, 1323],[520, 1295],[1068, 1363],[1160, 1335],[1316, 1279],[1472, 1299],
      // Locations 100 - 149
      [1720, 1383],[1972, 1291],[2300, 1163],[2512, 1123],[2732, 1227],[3348, 1275],[3580, 1303],[3752, 1311],[3292, 1535],[1224, 1559],
      [1404, 1391],[1512, 1511],[1580, 1471],[1828, 1487],[2004, 1423],[2296, 1331],[2740, 1483],[3048, 1603],[2744, 1663],[3680, 1719],
      [156, 1827],[288, 1835],[468, 1819],[928, 1807],[1184, 1747],[1660, 1591],[2128, 1511],[2476, 1591],[2932, 2107],[3028, 1703],
      [1584, 1763],[1724, 1671],[2020, 1663],[2344, 1819],[2576, 1739],[3144, 1803],[3588, 1975],[764, 1959],[1268, 1855],[1560, 1875],
      [2012, 1839],[2432, 1879],[2748, 1943],[3036, 1903],[200, 2143],[328, 2135],[504, 2119],[636, 2087],[820, 2059],[976, 2035],
      // Locations 150 - 199
      [1152, 1971],[1236, 2067],[1360, 1971],[1432, 2079],[1740, 2007],[1852, 2147],[2056, 2151],[2240, 2167],[2536, 2043],[2556, 2463],
      [3164, 2167],[3412, 2139],[3764, 2147],[488, 2223],[676, 2219],[1020, 2275],[1384, 2191],[1668, 2247],[1772, 2327],[2052, 2295],
      [2216, 2323],[3344, 2731],[2836, 2311],[3232, 2431],[3548, 2335],[3720, 2471],[140, 2407],[292, 2371],[564, 2347],[880, 2383],
      [1084, 2423],[1288, 2363],[1388, 2391],[1580, 2307],[1948, 2459],[2160, 2615],[2396, 2567],[2740, 2487],[3088, 2495],[296, 2623],
      [452, 2719],[672, 2539],[720, 2771],[1224, 2559],[1288, 2635],[1444, 2627],[1664, 2511],[1692, 2667],[2552, 2807],[3128, 2783]
      ];
   var x = items[LocationNumber][0];
   var y = items[LocationNumber][1];
   return new CirclePosition(x,y);
}

function GetNodeInformation(LocationNumber)
{
  // This method contains all the Node connections for the game "Scotland Yard".
  // The first level of the array below defines the LocationNumber (hence no location zero).
  // The second level of the array is an array of [a,b] where:
  //   a) is the node that is connected and
  //   b) is the roadtype:  0 is taxi, 1 is bus, 2 is train, 3 is boat
  //
  // Thus, [8,1] represents a connection to Location 8 via a bus
   var items =
      // 0 - 4
      [[],
      [[8,0],[9,0],[46,1],[58,1],[46,2]],
      [[20,0],[10,0]],
      [[4,0],[11,0],[12,0],[22,1],[23,1]],
      [[3,0],[13,0]],
      // 5 - 9
      [[15,0],[16,0]],
      [[7,0],[29,0]],
      [[6,0],[17,0],[42,1]],
      [[1,0],[18,0],[19,0]],
      [[1,0],[19,0],[20,0]],
      // 10 - 14
      [[2,0],[11,0],[21,0],[34,0]],
      [[3,0],[10,0],[22,0]],
      [[3,0],[23,0]],
      [[4,0],[23,0],[24,0],[14,1],[23,1],[52,1],[46,2],[67,2],[89,2]],
      [[15,0],[25,0],[13,1],[15,1]],
      // 15 - 19
      [[5,0],[14,0],[16,0],[26,0],[28,0],[14,1],[29,1],[41,1]],
      [[5,0],[15,0],[28,0],[29,0]],
      [[7,0],[29,0],[30,0]],
      [[8,0],[31,0],[43,0]],
      [[8,0],[9,0],[32,0]],
      // 20 - 24
      [[2,0],[9,0],[33,0]],
      [[10,0],[33,0]],
      [[11,0],[23,0],[34,0],[35,0],[3,1],[23,1],[34,1],[65,1]],
      [[12,0],[13,0],[22,0],[37,0],[3,1],[13,1],[22,1],[67,1]],
      [[13,0],[37,0],[38,0]],
      // 25 - 29
      [[14,0],[38,0],[39,0]],
      [[15,0],[27,0],[39,0]],
      [[26,0],[28,0],[40,0]],
      [[15,0],[16,0],[27,0],[41,0]],
      [[6,0],[16,0],[17,0],[41,0],[42,0],[15,1],[41,1],[42,1],[55,1]],
      // 30 - 34
      [[17,0],[42,0]],
      [[18,0],[43,0],[44,0]],
      [[19,0],[33,0],[44,0],[45,0]],
      [[20,0],[21,0],[32,0],[46,0]],
      [[10,0],[22,0],[47,0],[48,0],[22,1],[46,1],[63,1]],
      // 35 - 39
      [[22,0],[36,0],[48,0],[65,0]],
      [[35,0],[37,0],[49,0]],
      [[23,0],[24,0],[36,0],[50,0]],
      [[24,0],[25,0],[50,0],[51,0]],
      [[25,0],[26,0],[51,0],[52,0]],
      // 40 - 44
      [[27,0],[41,0],[52,0],[53,0]],
      [[28,0],[29,0],[40,0],[54,0],[15,1],[29,1],[52,1],[87,1]],
      [[29,0],[30,0],[56,0],[72,0],[7,1],[29,1],[72,1]],
      [[18,0],[31,0],[57,0]],
      [[31,0],[32,0],[58,0]],
      // 45 - 49
      [[32,0],[46,0],[58,0],[59,0],[60,0]],
      [[9,0],[45,0],[47,0],[61,0],[1,1],[34,1],[58,1],[78,1],[1,2],[13,2],[74,2],[79,2]],
      [[34,0],[46,0],[62,0]],
      [[34,0],[35,0],[62,0],[63,0]],
      [[36,0],[50,0],[66,0]],
      // 50 - 54
      [[37,0],[38,0],[49,0]],
      [[38,0],[39,0],[52,0],[67,0],[68,0]],
      [[39,0],[40,0],[51,0],[69,0],[13,1],[41,1],[67,1],[86,1]],
      [[40,0],[54,0],[69,0]],
      [[41,0],[53,0],[55,0],[70,0]],
      // 55 - 59
      [[54,0],[71,0],[29,1],[89,1]],
      [[42,0],[91,0]],
      [[43,0],[58,0],[73,0]],
      [[44,0],[45,0],[57,0],[59,0],[74,0],[1,1],[46,1],[74,1],[77,1]],
      [[45,0],[58,0],[75,0],[76,1]],
      // 60 - 64
      [[45,0],[61,0],[76,0]],
      [[46,0],[62,0],[76,0],[78,0]],
      [[47,0],[48,0],[61,0],[79,0]],
      [[48,0],[64,0],[79,0],[80,0],[34,1],[65,1],[79,1],[100,1]],
      [[63,0],[65,0],[81,0]],
      // 65 - 69
      [[35,0],[64,0],[66,0],[82,0],[22,1],[63,1],[67,1],[82,1]],
      [[49,0],[65,0],[67,0],[82,0]],
      [[51,0],[66,0],[68,0],[84,0],[23,1],[52,1],[65,1],[102,1],[13,2],[79,2],[89,2],[111,2]],
      [[51,0],[67,0],[69,0],[85,0]],
      [[52,0],[53,0],[68,0],[86,1]],
      // 70 - 74
      [[54,0],[71,0],[87,0]],
      [[55,0],[70,0],[72,0],[89,0]],
      [[42,0],[71,0],[90,0],[91,0],[42,1],[105,1],[107,1]],
      [[57,0],[74,0],[92,0]],
      [[58,0],[73,0],[92,0],[58,1],[94,1],[46,2]],
      // 75 - 79
      [[58,0],[59,0],[74,0],[94,0]],
      [[59,0],[61,0],[77,0]],
      [[76,0],[78,0],[95,0],[96,0],[58,1],[78,1],[94,1],[124,1]],
      [[61,0],[77,0],[79,0],[97,0],[46,1],[77,1],[79,1]],
      [[62,0],[63,0],[78,0],[98,0],[63,1],[78,1],[46,2],[67,2],[93,2],[111,2]],
      // 80 - 84
      [[63,0],[99,0],[100,0]],
      [[64,0],[82,0],[100,0]],
      [[65,0],[66,0],[81,0],[101,0],[65,1],[67,1],[100,1],[140,1]],
      [[101,0],[102,0]],
      [[67,0],[85,0]],
      // 85 - 89
      [[68,0],[84,0],[103,0]],
      [[69,0],[103,0],[104,0],[52,1],[87,1],[102,1],[116,1]],
      [[70,0],[88,0],[41,1],[86,1],[105,1]],
      [[87,0],[89,0],[117,0]],
      [[71,0],[88,0],[105,0],[55,1],[105,1],[13,2],[67,2],[140,2],[128,2]],
      // 90 - 94
      [[72,0],[91,0],[105,0]],
      [[56,0],[72,0],[90,0],[105,0],[107,0]],
      [[73,0],[74,0],[93,0]],
      [[92,0],[94,0],[94,1],[79,2]],
      [[75,0],[93,0],[95,0],[74,1],[77,1],[93,1]],
      // 95 - 99
      [[77,0],[94,0],[122,0]],
      [[77,0],[97,0],[109,0]],
      [[78,0],[96,0],[98,0],[109,0]],
      [[79,0],[97,0],[99,0],[110,0]],
      [[80,0],[98,0],[110,0],[112,0]],
      // 100 - 104
      [[80,0],[81,0],[101,0],[112,0],[113,0],[63,1],[82,1],[111,1]],
      [[82,0],[83,0],[100,0],[114,0]],
      [[83,0],[103,0],[115,0],[67,1],[86,1],[127,1]],
      [[85,0],[86,0],[102,0]],
      [[86,0],[116,0]],
      // 105 - 109
      [[89,0],[90,0],[91,0],[106,0],[108,0],[72,1],[87,1],[89,1],[107,1],[108,1]],
      [[105,0],[107,0]],
      [[91,0],[106,0],[119,0],[72,1],[105,1],[161,1]],
      [[105,0],[117,0],[119,0],[105,1],[116,1],[135,1],[115,3]],
      [[96,0],[97,0],[110,0],[124,0]],
      // 110 - 114
      [[98,0],[99,0],[109,0],[111,0]],
      [[110,0],[112,0],[124,0],[100,1],[124,1],[67,2],[79,2],[153,2],[163,2]],
      [[99,0],[100,0],[111,0],[125,0]],
      [[100,0],[114,0],[125,0]],
      [[101,0],[113,0],[115,0],[126,0],[131,0],[132,0]],
      // 115 - 119
      [[102,0],[114,0],[126,0],[127,0],[108,3],[157,3]],
      [[104,0],[117,0],[118,0],[127,0],[86,1],[108,1],[127,1],[142,1]],
      [[88,0],[108,0],[116,0],[129,0]],
      [[116,0],[129,0],[134,0],[142,1]],
      [[107,0],[108,0],[136,0]],
      // 120 - 124
      [[121,0],[144,0]],
      [[120,0],[122,0]],
      [[95,0],[121,0],[123,0],[146,0],[123,1],[144,1]],
      [[122,0],[124,0],[137,0],[148,0],[149,0],[122,1],[124,1],[144,1],[165,1]],
      [[109,0],[111,0],[123,0],[130,0],[138,0],[77,1],[111,1],[123,1],[153,1]],
      // 125 - 129
      [[112,0],[113,0],[131,0]],
      [[114,0],[115,0],[127,0],[140,0]],
      [[115,0],[116,0],[126,0],[133,0],[134,0],[102,1],[116,1],[133,1]],
      [[142,0],[143,0],[160,0],[172,0],[188,0],[135,1],[142,1],[161,1],[187,1],[199,1],[89,2],[140,2],[185,2]],
      [[117,0],[118,0],[135,0],[142,0],[143,0]],
      // 130 - 134
      [[124,0],[131,0],[139,0]],
      [[114,0],[125,0],[130,0]],
      [[114,0],[140,0]],
      [[127,0],[140,0],[141,0],[127,1],[140,1],[157,1]],
      [[118,0],[127,0],[141,0],[142,0]],
      // 135 - 139
      [[129,0],[136,0],[143,0],[161,0],[108,1],[128,1],[161,1]],
      [[119,0],[135,0],[162,0]],
      [[123,0],[147,0]],
      [[124,0],[150,0],[152,0]],
      [[130,0],[153,0],[154,0]],
      // 140 - 144
      [[126,0],[132,0],[133,0],[139,0],[154,0],[156,0],[82,1],[133,1],[154,1],[156,1],[89,2],[128,2],[153,2]],
      [[133,0],[134,0],[142,0],[158,0]],
      [[118,0],[128,0],[129,0],[134,0],[141,0],[143,0],[158,0],[116,1],[128,1],[157,1]],
      [[128,0],[135,0],[142,0],[160,0]],
      [[120,0],[145,0],[177,0],[122,1],[123,1],[163,1]],
      // 145 - 149
      [[121,0],[144,0],[146,0]],
      [[122,0],[145,0],[147,0],[163,0]],
      [[137,0],[146,0],[164,0]],
      [[123,0],[149,0],[164,0]],
      [[123,0],[148,0],[150,0],[165,0]],
      // 150 - 154
      [[138,0],[149,0],[151,0]],
      [[150,0],[152,0],[165,0],[166,0]],
      [[138,0],[151,0],[153,0]],
      [[139,0],[152,0],[154,0],[166,0],[167,0],[124,1],[154,1],[180,1],[184,1],[111,2],[140,2],[163,2],[185,2]],
      [[139,0],[140,0],[153,0],[155,0],[140,1],[153,1],[156,1]],
      // 155 - 159
      [[154,0],[156,0],[168,0]],
      [[140,0],[155,0],[157,0],[169,0],[140,1],[154,1],[157,1],[184,1]],
      [[156,0],[158,0],[170,0],[133,1],[142,1],[156,1],[185,1],[115,3],[194,3]],
      [[141,0],[142,0],[157,0],[159,0]],
      [[158,0],[170,0],[172,0],[186,0],[198,0]],
      // 160 - 164
      [[128,0],[143,0],[161,0],[173,0]],
      [[135,0],[160,0],[174,0],[107,1],[128,1],[135,1],[199,1]],
      [[136,0],[175,0]],
      [[146,0],[177,0],[144,1],[176,1],[191,1],[111,2],[153,2]],
      [[147,0],[148,0],[178,0],[179,0]],
      // 165 - 169
      [[149,0],[151,0],[179,0],[180,0],[123,1],[180,1],[191,1]],
      [[151,0],[153,0],[181,0],[183,0]],
      [[153,0],[155,0],[168,0],[183,0]],
      [[155,0],[167,0],[184,0]],
      [[156,0],[184,0]],
      // 170 - 174
      [[157,0],[159,0],[185,0]],
      [[173,0],[175,0],[199,0]],
      [[128,0],[159,0],[187,0]],
      [[160,0],[171,0],[174,0],[188,0]],
      [[161,0],[173,0],[175,0]],
      // 175 - 179
      [[162,0],[171,0],[174,0]],
      [[177,0],[189,0],[163,1],[190,1]],
      [[144,0],[163,0],[176,0]],
      [[164,0],[189,0],[191,0]],
      [[164,0],[165,0],[191,0]],
      // 180 - 184
      [[165,0],[181,0],[193,0],[153,1],[165,1],[184,1],[190,1]],
      [[166,0],[180,0],[182,0],[193,0]],
      [[181,0],[183,0],[195,0]],
      [[166,0],[167,0],[182,0],[196,0]],
      [[168,0],[169,0],[185,0],[196,0],[153,1],[156,1],[180,1],[185,1]],
      // 185 - 189
      [[170,0],[184,0],[186,0],[157,1],[184,1],[187,1],[153,2],[128,2]],
      [[159,0],[185,0],[198,0]],
      [[172,0],[188,0],[198,0],[128,1],[185,1]],
      [[128,0],[173,0],[187,0],[199,0]],
      [[176,0],[178,0],[190,0]],
      // 190 - 194
      [[189,0],[191,0],[192,0],[180,1],[176,1],[191,1]],
      [[178,0],[179,0],[190,0],[192,0],[163,1],[165,1],[190,1]],
      [[190,0],[191,0],[194,0]],
      [[180,0],[181,0],[194,0]],
      [[192,0],[193,0],[195,0],[157,3]],
      // 195 - 199
      [[182,0],[194,0],[197,0]],
      [[183,0],[184,0],[197,1]],
      [[184,0],[195,0],[196,0]],
      [[159,0],[186,0],[187,0]],
      [[171,0],[188,0],[198,0],[128,1],[161,1]]
    ];
    var x = items[LocationNumber];
    return x;
}
