(function (window) {
  var names = ["Harshita", "Jasmine", "Jensen", "Jared", "Anamika", "Steve", "Larry", "Paula", "Robert", "Joel"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);