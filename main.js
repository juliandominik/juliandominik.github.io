
myHeading.textContent = 'Potenzialrechner';
  
function loadGoogleCharts(){
	google.charts.load('current', {'packages':['corechart']});
}

function drawChart(x1,x2,x3) {	
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', '€/Jahr');
        data.addRows([
          ['2018', x1],
          ['2019', x2],
          ['2020', x3]
        ]);

        // Set chart options
        var options = {'title':'Mehrerlöse',
                       'width':600,
                       'height':300,
			'vAxis': { 'minValue': 0, 'title': 'Mehrerlöse [€/Jahr]'},
			'legend': {'position': 'none'}
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
}

function updateRange() {
  document.getElementById("demo_x2").innerHTML = "Laufzeit [Vollbenutzungsstunden pro Jahr]: " + Math.round(document.getElementById("myRange_x2").value/100*8760);
  document.getElementById("demo_x3").innerHTML = "Speichergröße [Vollbenutzungsstunden pro Jahr]: " + Math.round(document.getElementById("myRange_x3").value/100*11*10)/10; 
}

function myPotenzialrechner() {

  var x1 = document.getElementById("myNumber_x1").value;
  var x2 = document.getElementById("myRange_x2").value/100*8760;
  var x3 = document.getElementById("myRange_x3").value/100*11;
 
  //document.getElementById("text_ergebnis").innerHTML = "Mehrerlös [€/Jahr]: "; 
  //document.getElementById("ergebnis2018").innerHTML = potenzialBerechnen(x1,x2,x3, 2018) + " (2018)"; 
  //document.getElementById("ergebnis2019").innerHTML = potenzialBerechnen(x1,x2,x3, 2019) + " (2019)"; 
  //document.getElementById("ergebnis2020").innerHTML = potenzialBerechnen(x1,x2,x3, 2020) + " (2020)"; 

  
  // Load the Visualization API and the corechart package.
  //google.charts.load('current', {'packages':['corechart']});
  // Set a callback to run when the Google Visualization API is loaded.
  //google.charts.setOnLoadCallback(drawChart(potenzialBerechnen(x1,x2,x3, 2018),potenzialBerechnen(x1,x2,x3, 2019),potenzialBerechnen(x1,x2,x3, 2020)));
  drawChart(1.1*potenzialBerechnen(x1,x2,x3, 2018),potenzialBerechnen(x1,x2,x3, 2019),0.8*potenzialBerechnen(x1,x2,x3, 2020))
}

function potenzialBerechnen(leistung_kWel, laufzeit_vbhprojahr, speicher_vbh, jahr) {
   
  //laufzeit_vbhprojahr 0.000,1.000,...,8.000,8.760 
  //speicher_vbh 0, 1, 2, ..., 9, 10, 11 Vbh
  jahr=jahr-2018;
  leistung_kWel=Math.max(leistung_kWel,0);
  speicher_vbh=Math.max(Math.min(speicher_vbh, 11),0);	
  laufzeit_vbhprojahr=Math.max(Math.min(laufzeit_vbhprojahr,8760),0);    
  if (laufzeit_vbhprojahr>=8000) {laufzeit_vbhprojahr = 8000 + (laufzeit_vbhprojahr-8000)*1000/760} ;

  let erloes = [
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13],
    [0, 7, 13, 15, 16, 16, 17, 17, 18, 18, 19, 19],
    [0, 7, 12, 16, 18, 19, 20, 20, 21, 21, 21, 22],
    [0, 5, 10, 14, 17, 19, 20, 20, 21, 22, 22, 23],
    [0, 4, 8, 11, 14, 16, 18, 19, 19, 20, 21, 22], 
    [0, 2, 6, 8, 11, 12, 14, 15, 16, 16, 17, 18],
    [0, 5, 6, 6, 7, 8, 9, 9, 10, 11, 13, 14],
    [0, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13],
    [0, 7, 13, 15, 16, 16, 17, 17, 18, 18, 19, 19],
    [0, 7, 12, 16, 18, 19, 20, 20, 21, 21, 21, 22],
    [0, 5, 10, 14, 17, 19, 20, 20, 21, 22, 22, 23],
    [0, 4, 8, 11, 14, 16, 18, 19, 19, 20, 21, 22], 
    [0, 2, 6, 8, 11, 12, 14, 15, 16, 16, 17, 18],
    [0, 5, 6, 6, 7, 8, 9, 9, 10, 11, 13, 14],
    [0, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 7, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13],
    [0, 7, 13, 15, 16, 16, 17, 17, 18, 18, 19, 19],
    [0, 7, 12, 16, 18, 19, 20, 20, 21, 21, 21, 22],
    [0, 5, 10, 14, 17, 19, 20, 20, 21, 22, 22, 23],
    [0, 4, 8, 11, 14, 16, 18, 19, 19, 20, 21, 22], 
    [0, 2, 6, 8, 11, 12, 14, 15, 16, 16, 17, 18],
    [0, 5, 6, 6, 7, 8, 9, 9, 10, 11, 13, 14],
    [0, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
    ];
  
  var result=Math.round(leistung_kWel*
 	(erloes[jahr][Math.floor(laufzeit_vbhprojahr/1000)][Math.floor(speicher_vbh)]+
	(laufzeit_vbhprojahr/1000-Math.floor(laufzeit_vbhprojahr/1000))*
	(erloes[jahr][Math.ceil(laufzeit_vbhprojahr/1000)][Math.floor(speicher_vbh)]-
	erloes[jahr][Math.floor(laufzeit_vbhprojahr/1000)][Math.floor(speicher_vbh)])+
	(speicher_vbh-Math.floor(speicher_vbh))*
	(erloes[jahr][Math.floor(laufzeit_vbhprojahr/1000)][Math.ceil(speicher_vbh)]-
	erloes[jahr][Math.floor(laufzeit_vbhprojahr/1000)][Math.floor(speicher_vbh)])));

  return result;
}



