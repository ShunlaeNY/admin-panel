
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Pants',     50],
    ['Shirts',      20],
    ['Jackets',  15],
    ['T-shirts', 15]
  ]);

  var options = {
    title: ''
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}