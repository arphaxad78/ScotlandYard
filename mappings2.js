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
