// 1–10: Oddiy hisob-kitoblar
// 1-masala
function oneNumber11(num11) {
  if (num11 % 2 == 0) {
    return "juft son";
  } else {
    return "toq son";
  }
}

// 2-masala
function num12(ag12) {
  if (ag > 0) {
    return "musbat son";
  } else {
    return " manfiy yoki o ga teng soni";
  }
}
// 3-masala
function num13(ag131, ag132) {
  let max13;
  if (ag131 > ag132) {
    max13 = ag131;
  } else {
    max13 = ag132;
  }
  return max13;
}
// 4-masala
function sum14(ag141, ag142, ag143) {
  let max14;
  if (ag141 > ag142) {
    max14 = ag141;
  } else {
    max = ag142;
  }
  if (max14 > ag143) {
    return max14;
  } else {
    return ag143;
  }
}
// 5-masala
function sum15(ag15) {
  if (ag15 % 3 == 0) {
    return "bolinadi";
  } else {
    return " bolinmaydi";
  }
}
// 6-masala
function sum16(ag16) {
  return ag16 ** 2;
}
// 7-masala
function sum17(ag171, ag172) {
  return ag171 * ag172;
}
// 8-masala
function num18(ag18) {
  let sum18 = 0;
  for (let i = 1; i <= ag18; i++) sum18 += i;
  return sum18;
}
// 9-masala
function num19() {
  let sum19 = 1;
  for (let i = 1; i <= 100; i++) {
    sum19 *= i;
    return sum19;
  }
}
// 10-masala
function num110(ag110) {
  for (let i = ag110; i >= 1; i--) {
    return i;
  }
}
// 11–20: Shart operatorlari va sikllar
// 20-masala
function num20(ag20) {
   if (ag20 % 2 == 0) {
      return ag20
   }
}
// 21-masala
function num21(ad211, ag212) {
   return ag211 / ag212
}
// 23-masala
function num23(ag23) {
   if (ag23 > 0) {
      return 'musbat'
   } else 'manfiy'
}
// 25-masala
function num25(ag251, ag252) {
   if ((ag251 > 0 && ag252 > 0) || (ag251 < 0 && ag252 < 0)) {
      return ag251 + ag252
   } else {
      return '10'
   }
}
// 26-masala
function num26(ag261, ag262) {
      console.log(ag261 + ag262);
      console.log(ag261 * ag262);
      
}
// 27-masala
function num27(ag27) {
   if (ag27 % 7 == 0){
      return ' bolinadi'
   }
}
// 28-masala
function num28(ag28) {
   return ag28**10
}
// 29-masala
function num29(ag291, ag292) {
   if (ag291 == 0 || ag292 == 0) {
      return '1'
   } else {
      return ag291 * ag292
   }
}
// 30-masala
function num30(ag301, ag302) {
   let sum30;
   sum30 = Math.abs(ag301)
   sum30 = Math.abs(ag302)
   return sum30
}
// 31–40: Sonlar bilan ishlash
// 31-masala
function num31(ag31) {
   if (ag31 < 0) {
      return ag31
   }
}
// 32-masala
function num32() {
   for (let i = 5; i <= 100; i += 5 )
      return i
}
// 33-masala
function num33(ag331, ag332) {
   if ((ag331 + ag332) % 2 == 0) {
      return 'juft'
   }
}
// 35-masala
function num35(ag35) {
   for (let i = 1; i <= ag35; i+=2)
      return i
}
/* 37-masala
function num37(ag37) {
   let sum37;
 ishlay olmadm
} */
// 38-masala
function num38(ag38) {
   if (ag38 % 2 == 0) {
      return ag38 **2
   }
}
// 39-masala
function num39(ag39) {
   if (ag39 > 100) {
      return ag39 * 2
   } else {
      return ag39 + 10
   }
}
// 41–50: Murakkabroq masalalar
// 41-masala
function num41(ag411, ag412) {
   if (ag411 % ag412 == 0) {
      return 'ozoro karali'
   } else {
      return 'ozoro karali emas'
   }
   if (ag412 % ag411 == 0) {
      return 'ozoro karali'
   } else {
      return 'ozoro karali emas'
   }
}
// 42-masala
function num42(ag42) {
   let sum42 = 0;
   while (ag42 > 1) {
      console.log(ag42 % 10)
      sum42 += age42;

      
   }
   
   return sum42
} 
// 45-masala
function num45(ag45){
   for (let i = 1; i < ag45; i++) {
      return i**2
   }
}
// 46-masala xato
// 47-masala
function num47(ag47) {
   let sum47;
   while (num47 > 1) {
      sum47 += num47 % 10;
      num47 = num47 / 10;
      
   }
   return sum47**2
}
// 48-masala
function num48() {
   let sum48 = 0;
   for (let i = 1; i <= 50; i+= 2) {
      sum48 += i;
   }
     return sum48

}
// 49-masala
function num49 {ag49} [
   let sum49 = 0;
   while (ag49 > 1) {
      sum49 = ag49 * 10 + ag % 10;
      ag49 = ag49 / 10 
      
   }
   return sum49
]
// 50-masala
function num50(ag50) {
   let sum50 = 0;
   while (ag50 > 1) {
       sum50 += ag50 % 10;
       ag50 = ag50 / 10
   }
   if (sum50 > 10) {
      return ' kotta'
   } else {
      return ' kichik'
   }
}

