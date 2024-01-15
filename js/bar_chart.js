const xValues = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov","Dec"];
const yValues = [580, 560, 200, 90, 350,500,420,700,300,690,490,220];
const barColors = ["blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: ""
    }
  }
});