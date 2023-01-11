$(document).ready(function () {
  $(
    "#one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero"
  ).click(function () {
    if (document.getElementById("display").value == "0") {
      document.getElementById("display").value = "";
    }
  });

  $("#one").click(function () {
    document.getElementById("display").value += this.value;
  });
  $("#two").click(function () {
    document.getElementById("display").value += this.value;
  });
  $("#three").click(function () {
    document.getElementById("display").value += this.value;
  });
  $("#four").click(function () {
    document.getElementById("display").value += this.value;
  });
  $("#five").click(function () {
    document.getElementById("display").value += this.value;
  });
  $("#six").click(function () {
    document.getElementById("display").value += this.value;
  });
  $("#seven").click(function () {
    document.getElementById("display").value += this.value;
  });
  $("#eight").click(function () {
    document.getElementById("display").value += this.value;
  });
  $("#nine").click(function () {
    document.getElementById("display").value += this.value;
  });
  $("#zero").click(function () {
    document.getElementById("display").value += this.value;
  });
  $("#add").click(function () {
    document.getElementById("display").value += "+";
  });
  $("#subs").click(function () {
    document.getElementById("display").value += "-";
  });
  $("#multi").click(function () {
    document.getElementById("display").value += "*";
  });
  $("#divide").click(function () {
    document.getElementById("display").value += "/";
  });
  $("#dot").click(function () {
    document.getElementById("display").value += ".";
  });
  $("#equal").click(function () {
    if (document.getElementById("display").value == "") {
      alert("Please enter any numbers to calculate!");
    } else {
      document.getElementById("display").value = eval(
        document.getElementById("display").value
      );
    }
  });
  $("#clear").click(function () {
    document.getElementById("display").value = "";
  });
});
