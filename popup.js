
function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, (tabs) => {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');
    callback(url);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  getCurrentTabUrl((url) => {

    var visa = [ 
                document.getElementById('0001'),
                document.getElementById('0002'),
                document.getElementById('0003'),
               ];

    var mc = [ 
              document.getElementById('0010'),
              document.getElementById('0020'),
              document.getElementById('0030'),
             ];

    var amex = [
                document.getElementById('0100'),
                document.getElementById('0200'),
                document.getElementById('0300'),
               ];

    var discover = [
                    document.getElementById('1000'),
                    document.getElementById('2000'),
                    document.getElementById('3000'),
                   ];
      const dataVisa = getJson("VISA", 3);
      for(var i = 0; i < visa.length; i++){
          visa[i].textContent = dataVisa[i].card.pan ;
      }
      const dataMC = getJson("MC", 3);
      for(var i = 0; i < mc.length; i++){
          mc[i].textContent = dataMC[i].card.pan ;
      }
      const dataAmex = getJson("AMEX", 3);
      for(var i = 0; i < amex.length; i++){
          amex[i].textContent = dataAmex[i].card.pan ;
      }
      const dataDiscover = getJson("DISCOVER", 3);
      for(var i = 0; i < discover.length; i++){
          discover[i].textContent = dataDiscover[i].card.pan ;
      }

    var England = [ 
                document.getElementById('e1'),
                document.getElementById('e2'),
               ];

    var China = [ 
              document.getElementById('ch1'),
              document.getElementById('ch2'),
             ];

    var Cyprys = [
                document.getElementById('cy1'),
                document.getElementById('cy2'),
               ];

    var Ukraine = [
                    document.getElementById('u1'),
                    document.getElementById('u2'),
                   ];

    var Hungary = [
                    document.getElementById('hu1'),
                    document.getElementById('hu2'),
                   ];

    var Brazil = [
                    document.getElementById('b1'),
                    document.getElementById('b2'),
                   ];
    var Custom = [
                    document.getElementById('customBIN'),
                    document.getElementById('customNumbers'),
                   ];
    var CustomGenerate = [
                    document.getElementById('customPan')
                   ];
    const dataEnglandV = getJson("VISA", 1, null, "England");
    const dataEnglandMC = getJson("MC", 1, null, "England");
    England[0].textContent = dataEnglandV[0].card.pan;
    England[1].textContent = dataEnglandMC[0].card.pan;

    const dataChinaV = getJson("VISA", 1, null, "China");
    const dataChinaMC = getJson("MC", 1, null, "China");
    China[0].textContent = dataChinaV[0].card.pan;
    China[1].textContent = dataChinaMC[0].card.pan;
    
    const dataCyprysV = getJson("VISA", 1, null, "Cyprys");
    const dataCyprysMC = getJson("MC", 1, null, "Cyprys");
    Cyprys[0].textContent = dataCyprysV[0].card.pan;
    Cyprys[1].textContent = dataCyprysMC[0].card.pan;
    
    const dataUkraineV = getJson("VISA", 1, null, "Ukraine");
    const dataUkraineMC = getJson("MC", 1, null, "Ukraine");
    Ukraine[0].textContent = dataUkraineV[0].card.pan;
    Ukraine[1].textContent = dataUkraineMC[0].card.pan;
    
    const dataHungaryV = getJson("VISA", 1, null, "Hungary");
    const dataHungaryMC = getJson("MC", 1, null, "Hungary");
    Hungary[0].textContent = dataHungaryV[0].card.pan;
    Hungary[1].textContent = dataHungaryMC[0].card.pan;
    
    const dataBrazilV = getJson("VISA", 1, null, "Brazil");
    const dataBrazilMC = getJson("MC", 1, null, "Brazil");
    Brazil[0].textContent = dataBrazilV[0].card.pan;
    Brazil[1].textContent = dataBrazilMC[0].card.pan;
    
    document.getElementById('1').onclick = function() {
         let bin = String(document.getElementById('customBIN').value);
         let numbers = Number(document.getElementById('customNumbers').value);
         console.log(bin + '   ' + numbers)
         CustomGenerate[0].textContent = generatePan(bin, numbers);
      }

  });
});

function getRand(min, max) {
  return Math.floor(Math.random()*(max - min + 1 )) + min;
};

function getRandVisaPre(){
  let visa = ["4539", "4556", "4916", "4532", "4929", "4485", "4716"];
  return visa[getRand(0, visa.length - 1)];
};

function getMasterCardPre(){
  let mc = ["51", "52", "53", "54", "55"];
  return mc[getRand(0, mc.length - 1)];
};

function getDiscoverPre(){
  let discover = ["6011"];
  return discover[getRand(0, discover.length - 1)];
};

function getAmericanExpressPre(){
  let amex = ["34"];
  return amex[getRand(0, amex.length - 1)];
};

function getEngland(ps) {
  let bin = [];
  if (ps == "VISA") {
    bin = ["491238"];
  } else {
    bin = ["557397"]
  }
  return bin[getRand(0, bin.length - 1)];
}

function getBrazil(ps) {
  let bin = [];
  if (ps == "VISA") {
    bin = ["460088"];
  } else {
    bin = ["559231"]
  }
  return bin[getRand(0, bin.length - 1)];
}

function getChina(ps) {
  let bin = [];
  if (ps == "VISA") {
    bin = ["410045"];
  } else {
    bin = ["552408"]
  }
  return bin[getRand(0, bin.length - 1)];
}

function getCyprys(ps) {
  let bin = [];
  if (ps == "VISA") {
    bin = ["474128"];
  } else {
    bin = ["530446"]
  }
  return bin[getRand(0, bin.length - 1)];
}

function getUkraine(ps) {
  let bin = [];
  if (ps == "VISA") {
    bin = ["402733"];
  } else {
    bin = ["540065"]
  }
  return bin[getRand(0, bin.length - 1)];
}

function getHungary(ps) {
  let bin = [];
  if (ps == "VISA") {
    bin = ["417006"];
  } else {
    bin = ["557729"]
  }
  return bin[getRand(0, bin.length - 1)];
}
function lunValidation(pan) {
  let s1 = 0;
  let s2 = 0;
  let j = 0;
  for (i = pan.length - 1; i >= 0; i--) {
    if (( j % 2 ) == 0) {
      s1 += Number(pan[i])
    } else {
      let mult = Number(pan[i]) * 2;
      let str = String(mult);
      let newUnit = str.length == 2 ? Number(str[0]) + Number(str[1]) : mult;
      s2 += newUnit;
    }
    j++;
  }
  return (s1 + s2) % 10 == 0;
};


function getCreditCard(ps, numbers, country) {
  
  let suf = "";
  let number = 16;
  if (!country) {
    switch(ps) {
      case "VISA" :
        suf = getRandVisaPre();
        break;
      case "MC" :
        suf = getMasterCardPre();
        break;
      case "AMEX" :
        suf = getAmericanExpressPre();
        number = 15;
        break;
      case "DISCOVER" :
        suf = getDiscoverPre();
        break;
    }
    if ( numbers == undefined && ps != "AMEX") {
      number = 16;
    };
    } else {
      switch(country) {
        case "England" :
          suf = getEngland(ps);
          break;
        case "Brazil" :
          suf = getBrazil(ps);
          break;
        case "China" :
          suf = getChina(ps);
          break;
        case "Cyprys" :
          suf = getCyprys(ps);
          break;
        case "Ukraine" :
          suf = getUkraine(ps);
          break;
        case "Hungary" :
          suf = getHungary(ps);
          break;
      }  
  }
  return generatePan(suf, number);
};

function generatePan(suf, numbers) {
  number = 15;
  if (numbers) {
      number = numbers - 1;
  }
  let pan = "";
  let s1 = 0;
  let s2 = 0;
  let j = 0; 
  let unit = 0;
  console.log(lunValidation(pan));
  do {
    for (let i = number; i > suf.length; i--) {
      unit = getRand(0,9);
    if (( j % 2 )!= 0) {
      s1 += unit;
    } else {
      let mult = unit * 2;
      let str = String(mult);
      let newUnit = str.length == 2 ? Number(str[0]) + Number(str[1]) : mult;
      s2 += newUnit;
    }
    j++;
    pan = unit + pan;
    }
    for (i = suf.length - 1; i >= 0; i--) {
      unit = +String(suf)[i];
      if ((j % 2) != 0) {
        s1 += unit;
      } else {
        let mult = unit * 2;
        let str = String(mult);
        let newUnit = str.length == 2 ? Number(str[0]) + Number(str[1]) : mult;
        s2 += newUnit ;
      }
      j++;
      pan = unit + pan;
    }
    let s = String(s1 + s2);
    let x = s[1] == 0 ? 0 : 10 - Number(s[1]);
    pan +=x;

  } while (!lunValidation(pan))
  
  return pan;
};

function getJson(ps, count, numbers, country){
  let data = [];
  for (let i = 0; i < count; i++ ){
    const card = {};
    card.card ={};
    card.card.cardId = i;
    card.card.paymentSystem = ps;
    card.card.pan = getCreditCard(ps, numbers, country);
    card.card.length = card.card.pan.length;
    card.card.lun = lunValidation(card.card.pan);
    if (!card.card.lun) {
      i--;
      continue;
    }
    data.push(card);
  }
  return data;
};

