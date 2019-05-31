/* eslint-disable no-console */
var first_run_flag = true;
// =-=-=-=-=-=-=-=-=-=-=-=-= TRAFFIC CHART =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function createLineChart() {
   // args to pass - datalabels, data
   let lineChart = null;
   let chartLabel = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
      "Week 11",
      "Week 12",
      "Week 13"
   ];
   let chartData = [
      499,
      750,
      1250,
      1000,
      1500,
      2000,
      1500,
      1750,
      1250,
      1750,
      2250,
      1750,
      2250
   ];
   let chartColor = "rgba(116, 119, 191, 0.2)";
   let chartBGcolor = "rgb(77, 76, 114)";
   let pointBGcolor = "rgb(240,240,240)";
   let ctx = document.getElementById("lineChart").getContext("2d");

   lineChart = new Chart(ctx, {
      type: "line",
      data: {
         labels: chartLabel,
         datasets: [
            {
               data: chartData,
               borderColor: chartBGcolor,
               lineTension: 0,
               pointRadius: 6,
               pointBackgroundColor: pointBGcolor,
               backgroundColor: chartColor,
               borderWidth: 1.2
            }
         ]
      },
      options: {
         resonsive: true,
         scales: {
            yAxes: [
               {
                  ticks: {
                     beginAtZero: false,
                     stepValue: 500,
                     startVale: 500,
                     max: 2500,
                     min: 500
                  }
               }
            ],
            xAxes: [{}] //remove if empty when done
         },
         maintainAspectRatio: false,
         legend: {
            display: false
         },
         layout: {
            padding: {
               top: 10,
               right: 10,
               bottom: 10,
               left: 10
            }
         }
      }
   });
}
// =-=-=-=-=-=-=-=-=-=-=-= END LINE CHART =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-=-=-=-=-= BAR CHART =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function createBarChart() {
   let chartLabel = ["S", "M", "T", "W", "T", "F", "S"];
   let chartData = [75, 100, 175, 125, 225, 200, 100];
   let chartColor = "rgb(116, 119, 191)";
   let chartBGcolor = "rgb(77, 76, 114)";
   let ctx = document.getElementById("barChart").getContext("2d");
   let barChart = new Chart(ctx, {
      type: "bar",
      data: {
         labels: chartLabel,
         datasets: [
            {
               data: chartData,
               backgroundColor: chartColor,
               borderColor: chartBGcolor,
               borderWidth: 1
            }
         ]
      },
      options: {
         scales: {
            yAxes: [
               {
                  ticks: {
                     beginAtZero: true,
                     steps: 5,
                     stepValue: 50,
                     max: 250
                  }
               }
            ],
            xAxes: [{ barPercentage: 0.6 }]
         },
         legend: {
            display: false
         },
         layout: {
            padding: {
               top: 15,
               right: 15,
               bottom: 15,
               left: 15
            }
         }
      }
   });
}
// =-=-=-=-=-=-=-=-=-=-= END BAR CHART =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// =-=-=-=-=-=-=-=-=-=-= MOBILE USER CHART =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function createDonutChart() {
   //
   let chartLabel = ["Phones", "Tablets", "Desktop"];
   let chartData = [75, 50, 350];
   let phoneDataColor = "rgb(129, 201, 143)";
   let tabletDataColor = "rgb(116, 177, 191)";
   let desktopDataColor = "rgb(116, 119, 191)";
   //
   let ctx = document.getElementById("donutChart").getContext("2d");
   let donutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
         labels: chartLabel,
         datasets: [
            {
               data: chartData,
               backgroundColor: [
                  phoneDataColor,
                  tabletDataColor,
                  desktopDataColor
               ],
               borderWidth: 0
            }
         ]
      },
      options: {
         legend: {
            position: "right",
            labels: {
               boxWidth: 19,
               fontSize: 18,
               padding: 18
            }
         }
      }
   });
}
// =-=-=-=-=-=-=-=-=-=-=-=-= END OF MOBILE USER CHART =-=-=-=-=-=-=-=-=-=-=-=-=

document.addEventListener("click", event => {
   if (event.target.className == "nav-button") {
      // =-=-=-=-=-= TURN OFF ALL INDICATORS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
      let nav_button = document.getElementsByClassName("nav-button");
      for (let i = 0; i < 4; i++) {
         nav_button[i].style.borderLeftStyle = "none";
         nav_button[i].style.opacity = "0.4";
      }
      // =-=-=-=-=-=-= TURN ON THE DESIRED INDICATOR =-=-=-=-=-=-=-=-=-=-=-=-=
      event.target.style.borderLeft = "3px solid #82d67d";
      event.target.style.borderRadius = "3px";
      event.target.style.opacity = "1";
   }
});

document.addEventListener("mouseover", event => {
   if (event.target.className == "nav-button") {
      //  =-=-=-=-=-=-=-=-=-=-=-= TURN OFF ALL INDICATORS =-=-=-=-=-=-=-=-=-=-=
      let nav_button = document.getElementsByClassName("nav-button");
      for (let i = 0; i < 4; i++) {
         if (nav_button[i].style.borderLeftStyle !== "solid") {
            nav_button[i].style.opacity = "0.4";
         }
      }
      // =-=-=-=-=-=-=-=-=-= TURN ON TARGETED INDICATOR =-=-=-=-=-=-=-=-=-=-=-=
      event.target.style.opacity = "1";
   }
});

document.addEventListener("mouseout", event => {
   if (event.target.className == "nav-button") {
      if (event.target.style.borderLeftStyle == "solid") {
         event.target.style.opacity = "1";
      } else {
         event.target.style.opacity = "0.4";
      }
   }
});

// =-=-=-=-=-=-=-=-=-=-= MAIN PROCEDURE =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
createLineChart();
createBarChart();
createDonutChart();

window.onload = function() {
   if (first_run_flag) {
      first_run_flag = false;
      let first = document.getElementById("ico-dashboard");
      first.style.borderLeftStyle = "solid";
   }
};
