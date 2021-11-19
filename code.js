setScreen("mainscreen");
onEvent("playbutton", "click", function( ) {
  setScreen("playscreen/game");
  var points = 0;
  timedLoop(2000, function() {
    points = points-1;
    setText("pointslabel/counter", points);
  });
  onEvent("square/point/generator", "click", function( ) {
    setProperty("square/point/generator", "background-color", rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
    setPosition("square/point/generator", randomNumber(0, 245), randomNumber(60, 390), 60, 70);
    points = points+1;
    setText("pointslabel/counter", points);
  });
  onEvent("returnbutton/playscreen", "click", function( ) {
    setScreen("mainscreen");
    stopTimedLoop();
  });
});
onEvent("studybutton", "click", function( ) {
  setScreen("studyscreen/timer");
  onEvent("startbutton", "click", function( ) {
    var r = 0;
    var time = getNumber("timer/input") * 60;
    timedLoop(1000, function() {
      if (r < time) {
        r = r + 1;
        setProperty("counter/timer/label", "text-color", rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255), 1));
        setNumber("counter/timer/label", r);
      } else {
        stopTimedLoop();
        playSound("assets/category_digital/ring_1.mp3", false);
      }
    });
  });
  onEvent("restartbutton", "click", function( ) {
    var r = 0;
    setNumber("counter/timer/label", r);
    playSound("assets/category_digital/ring_1.mp3", false);
    stopTimedLoop();
    setText("counter/timer/label", "");
  });
  onEvent("returnbutton", "click", function( ) {
    setScreen("mainscreen");
    stopTimedLoop();
    setText("counter/timer/label", "");
  });
});
