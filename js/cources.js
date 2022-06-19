/*Загрузка данных с гугл таблиц*/

(function () {
    var app = "https://script.google.com/macros/s/AKfycbz46h-iNBc48lUbtW2ExevHE7eZ9_KwQRAnh5aQiqGr7BdciXUqRr9LwL__6LCgpWI3/exec",
       output = '',
       xhr = new XMLHttpRequest();
    xhr.open('GET', app);
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) return;
  
      if (xhr.status == 200) {
         try {
             var r = JSON.parse(xhr.responseText),
                result = r["result"];
         } catch(e) {}
      } 
      document.getElementById('nine-course').innerHTML = result[1][1];
      document.getElementById('ten-course').innerHTML = result[1][2];
      document.getElementById('eleven-course').innerHTML = result[1][3];
      document.getElementById('start-date-nine').innerHTML = result[0][1];
      document.getElementById('start-date-ten').innerHTML = result[0][2];
      document.getElementById('start-date-eleven').innerHTML = result[0][3];
      if(result[0][0] === 0) {
         document.getElementById('nine-course').style.borderColor = '#D7546B';
      }
      if(result[0][1] === 0) {
         document.getElementById('ten-course').style.borderColor = '#D7546B';
      }
      if(result[0][2] === 0) {
         document.getElementById('eleven-course').style.borderColor = '#D7546B';
      }
    }
    xhr.send()
  })()