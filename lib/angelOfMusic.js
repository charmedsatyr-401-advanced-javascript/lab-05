'use strict';

/**
 * This function accepts a buffer and adds a phantom of the opera mask to the face by manipulating the color of individual pixels.
 * @param {*} buffer 
 */
let angelOfMusic = (buffer) =>{
  let foreheadDetail = 235;
  let lightForeheadDetail = 247;
  let gray = 235;
  let border = 247;
  let white = 254;

  let noseEyebrowArray = [7131, 7132, 7133, 7134, 7135, 7136, 7137, 7138, 7139, 7140, 7141, 7142, 7242, 7243, 7244, 10358, 10359, 10360, 10361, 10362, 10363, 10364, 10365, 10366, 10367, 10368, 10369, 10370, 10371, 10372, 10373, 10374, 10375, 10376, 10377, 10378, 10379, 10380, 10381, 10471, 10472, 10473, 10474, 10475, 10476, 10477, 10478, 10479, 10480, 10481, 10482, 10483, 10484, 10485, 10486, 10487, 10488, 10489, 10490, 10491, 10492, 10493, 10584, 10585, 10586, 10587, 10588, 10589, 10590, 10591, 10592, 10593, 10594, 10595, 10596, 10597, 10598, 10599, 10600, 10601, 10602, 10603, 10604, 10605, 10697, 10698, 10699, 10700, 10701, 10702, 10703, 10704, 10705, 10706, 10707, 10708, 10709, 10710, 10711, 10712, 10713, 10714, 10715, 10716, 10717, 10811, 10812, 10813, 10814, 10815, 10816, 10817, 10818, 10819, 10820, 10821, 10822, 10823, 10824, 10825, 10826, 10827, 10828, 10829];

  let foreheadArray = [10047, 10048, 10051, 10052, 10160, 10163, 10272, 10273, 10274, 10275, 10384, 10385, 10386, 10497, 10498, 10609, 10721, 11503, 11504, 11505, 11506, 11507, 11508, 11509, 11510, 11511, 11728, 11729, 11730, 11731, 11732, 11733];

  let lightForeheadArray = [11607, 11608, 11609, 11610, 11611, 11612, 11613, 11614, 11615, 11616, 11617, 11618, 11619, 11620, 11621, 11622, 11623, 11624, 11625, 11626, 11627, 11628, 11629, 11630, 11835, 11836, 11837, 11838, 11839, 11840, 11845, 11846, 11847, 11848, 11849, 11850];
  
  let borderArray = [4535, 4536, 4538, 4539, 4646, 4647, 4651, 4652, 4757, 4758, 4764, 4765, 4868, 4869, 4877, 4878, 4979, 4980, 4990, 4991, 5090, 5091, 5103, 5104, 5201, 5202, 5216, 5217, 5312, 5313, 5329, 5330, 5423, 5424, 5442, 5534, 5535, 5554, 5645, 5646, 5666, 5757, 5778, 5779, 5868, 5869, 5891, 5892, 5980, 6004, 6005, 6092, 6117, 6118, 6204, 6230, 6231, 6316, 6343, 6344, 6428, 6456, 6457, 6540, 6569, 6570, 6652, 6682, 6683, 6684, 6685, 6686, 6687, 6688, 6689, 6764, 6801, 6802, 6803, 6804, 6805, 6806, 6876, 6918, 6919, 6988, 7031, 7100, 7143, 7212, 7255, 7324, 7367, 7436, 7479, 7548, 7591, 7660, 7703, 7772, 7815, 7884, 7927, 7996, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024, 8025, 8038, 8039, 8108, 8120, 8121, 8122, 8137, 8138, 8139, 8150, 8220, 8230, 8231, 8232, 8251, 8252, 8262, 8332, 8341, 8342, 8364, 8365, 8374, 8444, 8453, 8477, 8486, 8556, 8564, 8565, 8589, 8598, 8668, 8676, 8701, 8710, 8780, 8788, 8813, 8822, 8892, 8900, 8925, 8934, 9004, 9012, 9037, 9037, 9046, 9116, 9124, 9125, 9147, 9148, 9149, 9158, 9228, 9237, 9238, 9239, 9240, 9241, 9242, 9243, 9244, 9245, 9252, 9253, 9254, 9255, 9256, 9257, 9258, 9259, 9270, 9340, 9357, 9358, 9359, 9360, 9361, 9362, 9363, 9364, 9382, 9452, 9494, 9564, 9606, 9676, 9718, 9788, 9830, 9831, 9900, 9943, 9944, 10012, 10056, 10057, 10124, 10169, 10170, 10236, 10282, 10348, 10394, 10460, 10506, 10572, 10618, 10684, 10730, 10796, 10842, 10843, 10908, 10955, 10956, 11020, 11068, 11069, 11132, 11181, 11182, 11244, 11294, 11295, 11356, 11407, 11408, 11468, 11520, 11521, 11580, 11581, 11633, 11634, 11693, 11746, 11805, 11858, 11917, 11970, 12029, 12030, 12082, 12142, 12194, 12254, 12306, 12307, 12366, 12367, 12419, 12420, 12479, 12532, 12533, 12591, 12592, 12645, 12646, 12704, 12758,12759, 12816, 12817, 12871, 12872, 12929, 12984, 12985, 13041, 13042, 13097, 13098, 13154, 13210, 13211, 13266, 13267, 13323, 13324, 13379, 13380, 13436, 13437, 13492, 13493, 13549, 13605, 13606, 13661, 13718, 13719, 13772, 13773, 13831, 13832, 13882, 13883, 13884, 13944, 13945, 13946, 13993, 13994, 14058, 14059, 14060, 14061, 14062, 14102, 14103, 14104, 14105 , 14174, 14175, 14176, 14177, 14178, 14210, 14211, 14212, 14213, 14214, 14290, 14291, 14292, 14293, 14294, 14295, 14296, 14316, 14317, 14318, 14319, 14320, 14321, 14322];
  
  for (let i = 1146 ; i <= buffer.length ; i++) {
    for (let j = 0 ; j < borderArray.length; j++){
      buffer[borderArray[j]] = border;
    }
  }
  for (let i = 4424 ; i <= 4426; i++) {
    buffer[i]= border;
  }
  for (let i = 4537 ; i <= 4537; i++) {
    buffer[i]= white;
  }
  for (let i = 4648 ; i <= 4650; i++) {
    buffer[i]= white;
  }
  for (let i = 4759 ; i <= 4763; i++) {
    buffer[i]= white;
  }
  for (let i = 4870 ; i <= 4876; i++) {
    buffer[i]= white;
  }
  for (let i = 4981 ; i <= 4989; i++) {
    buffer[i]= white;
  }
  for (let i = 5092 ; i <= 5102; i++) {
    buffer[i]= white;
  }
  for (let i = 5203 ; i <= 5215; i++) {
    buffer[i]= white;
  }
  for (let i = 5314 ; i <= 5328; i++) {
    buffer[i]= white;
  }
  for (let i = 5425 ; i <= 5441; i++) {
    buffer[i]= white;
  }
  for (let i = 5536 ; i <= 5553; i++) {
    buffer[i]= white;
  }
  for (let i = 5647 ; i <= 5665; i++) {
    buffer[i]= white;
  }
  for (let i = 5758 ; i <= 5777; i++) {
    buffer[i]= white;
  }
  for (let i = 5870 ; i <= 5890; i++) {
    buffer[i]= white;
  }
  for (let i = 5981 ; i <= 6003; i++) {
    buffer[i]= white;
  }
  for (let i = 6093 ; i <= 6116; i++) {
    buffer[i]= white;
  }
  for (let i = 6205 ; i <= 6229; i++) {
    buffer[i]= white;
  }
  for (let i = 6317 ; i <= 6342; i++) {
    buffer[i]= white;
  }
  for (let i = 6429 ; i <= 6455; i++) {
    buffer[i]= white;
  }
  for (let i = 6541 ; i <= 6568; i++) {
    buffer[i]= white;
  }
  for (let i = 6653 ; i <= 6681; i++) {
    buffer[i]= white;
  }
  for (let i = 6765 ; i <= 6800; i++) {
    buffer[i]= white;
  }
  for (let i = 6877 ; i <= 6917; i++) {
    buffer[i]= white;
  }
  for (let i = 6989 ; i <= 7030; i++) {
    buffer[i]= white;
  }
  for (let i = 7101 ; i <= 7142; i++) {
    buffer[i]= white;
  }
  for (let i = 7213 ; i <= 7254; i++) {
    buffer[i]= white;
  }
  for (let i = 7325 ; i <= 7366; i++) {
    buffer[i]= white;
  }
  for (let i = 7437 ; i <= 7478; i++) {
    buffer[i]= white;
  }
  for (let i = 7549 ; i <= 7590; i++) {
    buffer[i]= white;
  }
  for (let i = 7661 ; i <= 7702; i++) {
    buffer[i]= white;
  }
  for (let i = 7773 ; i <= 7814; i++) {
    buffer[i]= white;
  }
  for (let i = 7885 ; i <= 7926; i++) {
    buffer[i]= white;
  }
  for (let i = 7997 ; i <= 8009; i++) {
    buffer[i]= white;
  }
  for (let i = 8026 ; i <= 8037; i++) {
    buffer[i]= white;
  }
  for (let i = 8109 ; i <= 8119; i++) {
    buffer[i]= white;
  }
  for (let i = 8140 ; i <= 8149; i++) {
    buffer[i]= white;
  }
  for (let i = 8221 ; i <= 8229; i++) {
    buffer[i]= white;
  }
  for (let i = 8253 ; i <= 8261; i++) {
    buffer[i]= white;
  }
  for (let i = 8333 ; i <= 8340; i++) {
    buffer[i]= white;
  }
  for (let i = 8366 ; i <= 8373; i++) {
    buffer[i]= white;
  }
  for (let i = 8445 ; i <= 8452; i++) {
    buffer[i]= white;
  }
  for (let i = 8478 ; i <= 8485; i++) {
    buffer[i]= white;
  }
  for (let i = 8557 ; i <= 8563; i++) {
    buffer[i]= white;
  }
  for (let i = 8590 ; i <= 8597; i++) {
    buffer[i]= white;
  }
  for (let i = 8669 ; i <= 8675; i++) {
    buffer[i]= white;
  }
  for (let i = 8702 ; i <= 8709; i++) {
    buffer[i]= white;
  }
  for (let i = 8781 ; i <= 8787; i++) {
    buffer[i]= white;
  }
  for (let i = 8814 ; i <= 8821; i++) {
    buffer[i]= white;
  }
  for (let i = 8893 ; i <= 8899; i++) {
    buffer[i]= white;
  }
  for (let i = 8926 ; i <= 8933; i++) {
    buffer[i]= white;
  }
  for (let i = 9005 ; i <= 9011; i++) {
    buffer[i]= white;
  }
  for (let i = 9038 ; i <= 9045; i++) {
    buffer[i]= white;
  }
  for (let i = 9117 ; i <= 9123; i++) {
    buffer[i]= white;
  }
  for (let i = 9150 ; i <= 9157; i++) {
    buffer[i]= white;
  }
  for (let i = 9229 ; i <= 9236; i++) {
    buffer[i]= white;
  }
  for (let i = 9260 ; i <= 9269; i++) {
    buffer[i]= white;
  }
  for (let i = 9341 ; i <= 9356; i++) {
    buffer[i]= white;
  }
  for (let i = 9365 ; i <= 9381; i++) {
    buffer[i]= white;
  }
  for (let i = 9453 ; i <= 9493; i++) {
    buffer[i]= white;
  }
  for (let i = 9565 ; i <= 9605; i++) {
    buffer[i]= white;
  }
  for (let i = 9677 ; i <= 9717; i++) {
    buffer[i]= white;
  }
  for (let i = 9789 ; i <= 9829; i++) {
    buffer[i]= white;
  }
  for (let i = 9901 ; i <= 9942; i++) {
    buffer[i]= white;
  }
  for (let i = 10013 ; i <= 10055; i++) {
    buffer[i]= white;
  }
  for (let i = 10125 ; i <= 10168; i++) {
    buffer[i]= white;
  }
  for (let i = 10237 ; i <= 10281; i++) {
    buffer[i]= white;
  }
  for (let i = 10349 ; i <= 10393; i++) {
    buffer[i]= white;
  }
  for (let i = 10461 ; i <= 10505; i++) {
    buffer[i]= white;
  }
  for (let i = 10573 ; i <= 10617; i++) {
    buffer[i]= white;
  }
  for (let i = 10685 ; i <= 10729; i++) {
    buffer[i]= white;
  }
  for (let i = 10797 ; i <= 10841; i++) {
    buffer[i]= white;
  }
  for (let i = 10909 ; i <= 10954; i++) {
    buffer[i]= white;
  }
  for (let i = 11021 ; i <= 11067; i++) {
    buffer[i]= white;
  }
  for (let i = 11133 ; i <= 11180; i++) {
    buffer[i]= white;
  }
  for (let i = 11245 ; i <= 11293; i++) {
    buffer[i]= white;
  }
  for (let i = 11357 ; i <= 11406; i++) {
    buffer[i]= white;
  }
  for (let i = 11469 ; i <= 11519; i++) {
    buffer[i]= white;
  }
  for (let i = 11582 ; i <= 11632; i++) {
    buffer[i]= white;
  }
  for (let i = 11694 ; i <= 11745; i++) {
    buffer[i]= white;
  }
  for (let i = 11806 ; i <= 11857; i++) {
    buffer[i]= white;
  }
  for (let i = 11918 ; i <= 11969; i++) {
    buffer[i]= white;
  }
  for (let i = 12031 ; i <= 12081; i++) {
    buffer[i]= white;
  }
  for (let i = 12143 ; i <= 12193; i++) {
    buffer[i]= white;
  }
  for (let i = 12255 ; i <= 12305; i++) {
    buffer[i]= white;
  }
  for (let i = 12368 ; i <= 12418; i++) {
    buffer[i]= white;
  }
  for (let i = 12480 ; i <= 12531; i++) {
    buffer[i]= white;
  }
  for (let i = 12593 ; i <= 12644; i++) {
    buffer[i]= white;
  }
  for (let i = 12705 ; i <= 12757; i++) {
    buffer[i]= white;
  }
  for (let i = 12818 ; i <= 12870; i++) {
    buffer[i]= white;
  }
  for (let i = 12930 ; i <= 12983; i++) {
    buffer[i]= white;
  }
  for (let i = 13043 ; i <= 13096; i++) {
    buffer[i]= white;
  }
  for (let i = 13155 ; i <= 13209; i++) {
    buffer[i]= white;
  }
  for (let i = 13268 ; i <= 13322; i++) {
    buffer[i]= white;
  }
  for (let i = 13381 ; i <= 13435; i++) {
    buffer[i]= white;
  }
  for (let i = 13494 ; i <= 13548; i++) {
    buffer[i]= white;
  }
  for (let i = 13607 ; i <= 13660; i++) {
    buffer[i]= white;
  }
  for (let i = 13720 ; i <= 13771; i++) {
    buffer[i]= white;
  }
  for (let i = 13833 ; i <= 13881; i++) {
    buffer[i]= white;
  }
  for (let i = 13947 ; i <= 13992; i++) {
    buffer[i]= white;
  }
  for (let i = 14063 ; i <= 14101; i++) {
    buffer[i]= white;
  }
  for (let i = 14179 ; i <= 14209; i++) {
    buffer[i]= white;
  }
  for (let i = 14297 ; i <= 14315; i++) {
    buffer[i]= white;
  }
  for (let i = 14408 ; i <= 14428; i++) {
    buffer[i]= border;
  }
  for (let i = 1146 ; i <= buffer.length ; i++) {
    for (let j = 0 ; j < noseEyebrowArray.length; j++){
      buffer[noseEyebrowArray[j]] = gray;
    }
  }
  for (let i = 1146 ; i <= buffer.length ; i++) {
    for (let j = 0 ; j < foreheadArray.length; j++){
      buffer[foreheadArray[j]] = foreheadDetail;
    }
  }
  for (let i = 1146 ; i <= buffer.length ; i++) {
    for (let j = 0 ; j < lightForeheadArray.length; j++){
      buffer[lightForeheadArray[j]] = lightForeheadDetail;
    }
  }

  const output = 'phantom.bmp';
  const message = 'Love me - that\'s all I ask of you.';
  const result = { buffer, message, output };
  return result;

};

module.exports = angelOfMusic;