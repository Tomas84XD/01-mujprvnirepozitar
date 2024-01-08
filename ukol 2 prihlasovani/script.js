
var uzivatele = [
    { jmeno: 'pepik', heslo: 'ahoj1' },
    { jmeno: 'jana', heslo: 'pizza2' },
    { jmeno: 'karel', heslo: 'kočka3' },
    { jmeno: 'eva', heslo: '12345' },
  ];
   
  function overitPrihlaseni(jmeno, heslo) {
    for (var i = 0; i < uzivatele.length; i++) {
      if (uzivatele[i].jmeno === jmeno && uzivatele[i].heslo === heslo) {
        return true; 
      }
    }
    return false; 
   }

   
var jmenoUzivatele = 'pepik, jana, karel, eva';
var hesloUzivatele = 'ahoj1, pizza2, kočka3, 12345';
 
if (overitPrihlaseni(jmenoUzivatele, hesloUzivatele)) {
  console.log('pepik, ahoj1');
} else {
  console.log('jana, pizza2');
}


