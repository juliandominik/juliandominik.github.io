
myHeading.textContent = 'Testrechner';
  
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
        var options = {'title':'Ergebnis',
                       'width':600,
                       'height':300,
			'vAxis': { 'minValue': 0, 'title': 'Ergebnis [Einheit]'},
			'legend': {'position': 'none'}
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
}

function updateRange() {
  document.getElementById("demo_x2").innerHTML = "Input 2: " + Math.round(document.getElementById("myRange_x2").value/100*8760);
  document.getElementById("demo_x3").innerHTML = "Input 3: " + Math.round(document.getElementById("myRange_x3").value/100*11*10)/10; 
}

function myTestrechner() {

  var x1 = document.getElementById("myNumber_x1").value;
  var x2 = document.getElementById("myRange_x2").value/100*8760;
  var x3 = document.getElementById("myRange_x3").value/100*11;
 
  //document.getElementById("text_ergebnis").innerHTML = "Ergebnis: "; 
  //document.getElementById("ergebnis2018").innerHTML = Berechnen(x1,x2,x3, 2018) + " (2018)"; 
  //document.getElementById("ergebnis2019").innerHTML = Berechnen(x1,x2,x3, 2019) + " (2019)"; 
  //document.getElementById("ergebnis2020").innerHTML = Berechnen(x1,x2,x3, 2020) + " (2020)"; 

  
  // Load the Visualization API and the corechart package.
  //google.charts.load('current', {'packages':['corechart']});
  // Set a callback to run when the Google Visualization API is loaded.
  //google.charts.setOnLoadCallback(drawChart(Berechnen(x1,x2,x3, 2018),Berechnen(x1,x2,x3, 2019),Berechnen(x1,x2,x3, 2020)));
  drawChart(1.1*Berechnen(x1,x2,x3, 2018),Berechnen(x1,x2,x3, 2019),0.8*Berechnen(x1,x2,x3, 2020))
}

function Berechnen(in1, in2, in3, jahr) {
   
  jahr=jahr-2018;
  in1=Math.max(in1,0);
  in3=Math.max(Math.min(in3, 11),0);	
  in2=Math.max(Math.min(in2,8760),0);    
  if (in2>=8000) {in2 = 8000 + (in2-8000)*1000/760} ;

  let dat= [
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
  
  var result=Math.round(in1*
 	(dat[jahr][Math.floor(in2/1000)][Math.floor(in3)]+
	(in2/1000-Math.floor(in2/1000))*
	(dat[jahr][Math.ceil(in2/1000)][Math.floor(in3)]-
	dat[jahr][Math.floor(in2/1000)][Math.floor(in3)])+
	(in3-Math.floor(in3))*
	(dat[jahr][Math.floor(in2/1000)][Math.ceil(in3)]-
	dat[jahr][Math.floor(in2/1000)][Math.floor(in3)])));

  return result;
}



