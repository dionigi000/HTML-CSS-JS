(function () {

var names = ["Yaakov", "Go", "Jo", "Yama", "Moto", "Satoru", "Javascript", "JOJO IS PEAK", "Avdol", "Jamal"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();