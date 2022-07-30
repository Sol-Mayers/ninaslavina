/*Загрузка данных с гугл таблиц*/

(function () {
  let app =
      "https://script.google.com/macros/s/AKfycbx8D89YxgD4iKvTnRssJD_BiRbvZqklPQIgypMWJk4tfCjcukAsdMYf4bwrMt0F3dib/exec",
    output = "",
    xhr = new XMLHttpRequest();
  xhr.open("GET", app);
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    if (xhr.status == 200) {
      try {
        var r = JSON.parse(xhr.responseText),
          result = r["result"];
      } catch (e) {}
    }
    document.getElementById("nine-course").innerHTML = result[1][1];
    document.getElementById("start-date-nine").innerHTML = result[0][1];
    document.getElementById("ten-course").innerHTML = result[1][2];
    document.getElementById("start-date-ten").innerHTML = result[0][2];
    document.getElementById("eleven-course").innerHTML = result[1][3];
    document.getElementById("start-date-eleven").innerHTML = result[0][3];
    document.getElementById("dvi-year-course").innerHTML = result[1][4];
    document.getElementById("start-date-dvi-year").innerHTML = result[0][4];
    document.getElementById("dvi-intensive-course").innerHTML = result[1][5];
    document.getElementById("start-date-dvi-intensive").innerHTML =
      result[0][5];
    if (result[1][1] === 0) {
      document.getElementById("nine-course").style.borderColor = "#D7546B";
    }
    if (result[1][2] === 0) {
      document.getElementById("ten-course").style.borderColor = "#D7546B";
    }
    if (result[1][3] === 0) {
      document.getElementById("eleven-course").style.borderColor = "#D7546B";
    }
    if (result[1][4] === 0) {
      document.getElementById("dvi-year-course").style.borderColor = "#D7546B";
    }
    if (result[1][5] === 0) {
      document.getElementById("dvi-intensive-course").style.borderColor =
        "#D7546B";
    }
  };
  xhr.send();
})();
