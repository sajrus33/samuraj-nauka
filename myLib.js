const MyLib = {
  howMuchTimeLeft: function(arg, since, untill) {
    // return number = how long that's gonna take
    const myTime = new Date().getTime();
    switch (arg) {
      case "hours":
        return Math.floor(
          (untill / (1000 * 60 * 60) - since / (1000 * 60 * 60)) % 24
        );
      case "days":
        return Math.floor(
          untill / (1000 * 60 * 60 * 24) - since / (1000 * 60 * 60 * 24)
        );
      case "minutes":
        return Math.floor((untill / (1000 * 60) - since / (1000 * 60)) % 60);
      case "seconds":
        return Math.floor((untill / 1000 - since / 1000) % 60);
      default:
        console.log(
          "First argument value can be only : hours, days, minutes, seconds"
        );
        return "Wrong argument";
    }
  }
};
