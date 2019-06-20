/* eslint-disable no-console */
var first_run_flag = true;

// hourly data
const hourlyLabels = [
   "8am",
   "9am",
   "10am",
   "11am",
   "12pm",
   "1pm",
   "2pm",
   "3pm",
   "4pm",
   "5pm",
   "6pm",
   "7pm"
];
const hourlyData = [8, 14, 2, 3, 2, 4, 3, 1, 1, 4, 8, 12];

// daily data
const dailyLabels = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"
];
const dailyData = [80, 25, 8, 15, 18, 42, 150];

// weekly data
const weeklyLabels = [
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
const weeklyData = [
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

// monthly data
const monthlyLabels = [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "May",
   "Jun",
   "Jul",
   "Aug",
   "Sep",
   "Oct",
   "Nov",
   "Dec"
];
const monthlyData = [
   215,
   190,
   200,
   315,
   411,
   872,
   1005,
   543,
   427,
   311,
   212,
   198
];

// =-=-=-==-=-=-=-= TRAFFIC CHART =-=-=-=-=-=-=-=-=-=-=-=-=-=
function createLineChart(chrtLabels, chrtData) {
   // args to pass - datalabels, data
   let lineChart = null;
   let chartLabel = chrtLabels;
   let chartData = chrtData;
   let chartColor = "rgba(116, 119, 191, 0.2)";
   let chartBGcolor = "rgb(77, 76, 114)";
   let pointBGcolor = "rgb(240,240,240)";
   let ctx = document.getElementById("lineChart").getContext("2d");
   console.log(monthlyData); // ===============
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
         resonsive: false,
         scales: {
            yAxes: [
               {
                  ticks: {
                     beginAtZero: false
                     // stepValue: 500,
                     // startVale: 500,
                     // max: 2500,
                     // min: 500
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

// =-=-=-=-=-=-=-=-=-=-= BAR CHART =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
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

// =-=-=-=-=-=-=-= MOBILE USER CHART =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
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

function newElement(element, class_name, member_data, insert_point) {
   let element_name = document.createElement(element);
   element_name.setAttribute("class", class_name);
   element_name.textContent = member_data;
   insert_point.appendChild(element_name);
}

function insertMemberActivity() {
   const newMemberData = [
      {
         name: "Victoria Chambers",
         image: "images/member-1.jpg",
         email: "victoria.chambers80@example.com",
         date: "10/15/15",
         message: "commented on YourApp's SEO Tips",
         time: "4 hours ago"
      },
      {
         name: "Dale Byrd",
         image: "images/member-2.jpg",
         email: "dale.byrd52@example.com",
         date: "10/15/15",
         message: "liked the post Facebook's Changes for 2016",
         time: "5 hours ago"
      },
      {
         name: "Dawn Wood",
         image: "images/member-3.jpg",
         email: "dawn.wood16@example.com",
         date: "10/15/15",
         message: "commented on Facebook's Changes for 2016",
         time: "5 hours ago"
      },
      {
         name: "Dan Oliver",
         image: "images/member-4.jpg",
         email: "dan.oliver82@example.com",
         date: "10/14/15",
         message: "posted YourApp's SEO Tips",
         time: "1 day ago"
      }
   ];

   for (let i = 0; i < newMemberData.length; i++) {
      // GET TARGET DIV & CREATE CONTAINER for MEMBER DATA =-=-=-=-=-=
      let new_member_wrapper = document.getElementById("new-member-wrapper");
      let member_div = document.createElement("div");
      member_div.setAttribute("class", "member-div");
      new_member_wrapper.appendChild(member_div);

      // =-=-=-=-= SET MEMBER AVATER IMAGE =-=-=-=-=-=-=-=-=-=-=-=
      let member_image = document.createElement("img");
      member_image.setAttribute("src", newMemberData[i].image);
      member_image.setAttribute("class", "member-avatar");
      member_div.appendChild(member_image);

      // =-=-=-=-=-=-= INSERT NAME, EMAIL & DATE -=-=-=-=-=-=-=
      newElement("p", "member-name", newMemberData[i].name, member_div);
      newElement("p", "member-email", newMemberData[i].email, member_div);
      newElement("p", "member-date", newMemberData[i].date, member_div);

      // GET TARGET DIV & CREATE CONTAINER for MEMBER ACTIVITY
      let recent_activity_wrapper = document.getElementById(
         "recent-activity-wrapper"
      );
      let activity_div = document.createElement("div");
      activity_div.setAttribute("class", "activity-div");
      recent_activity_wrapper.appendChild(activity_div);

      // =-=-=-=-=-=-=-=-=-= INSERT MEMBER AVATAR =-=-=-=-=-=-=-=-=-=
      member_image = document.createElement("img");
      member_image.setAttribute("src", newMemberData[i].image);
      member_image.setAttribute("class", "member-avatar");
      activity_div.appendChild(member_image);

      // -=-=-=-=-=-=-= CREATE COMMENT DIV and INSERT COMMENT =-=-=-=-=-=-=
      let comment_div = document.createElement("div"); //may need class
      activity_div.appendChild(comment_div);
      let memberComment =
         newMemberData[i].name + " " + newMemberData[i].message;

      // =-=-= INSERT COMMENT, TIME and ARROW POINTER =-=-=-=-=-=-=-=
      newElement("p", "member-comment", memberComment, comment_div);
      newElement("p", "time-ago", newMemberData[i].time, activity_div);
      newElement("p", "greater-than", "＞", activity_div);
   }
}

function getSettings() {
   // GET and SET EMAIL TOGGLE (IRL - this should be a function)
   if (localStorage.getItem("yourapp_email_notification") === null) {
      document.getElementById("myonoffswitch").checked = true;
   } else {
      // set the setting
      let email_notification = localStorage.getItem(
         "yourapp_email_notification"
      );
      if (email_notification === "true") {
         document.getElementById("myonoffswitch").checked = true;
      }
      if (email_notification === "false") {
         document.getElementById("myonoffswitch").checked = false;
      }
      if (email_notification !== "true" && email_notification !== "false") {
         // key corrupted - EXTERMINATE!
         localStorage.removeItem("yourapp_email_notification");
      }
   }

   // GET AND SET PROFILE TOGGLE
   if (localStorage.getItem("yourapp_profile_public") === null) {
      document.getElementById("myonoffswitch2").checked = true;
   } else {
      // set the setting
      let profile_public = localStorage.getItem("yourapp_profile_public");

      if (profile_public === "true") {
         document.getElementById("myonoffswitch2").checked = true;
      }
      if (profile_public === "false") {
         document.getElementById("myonoffswitch2").checked = false;
      }
      if (profile_public !== "true" && profile_public !== "false") {
         // key corrupted - EXTERMINATE!
         localStorage.removeItem("yourapp_profile_public");
      }
   }

   // GET AND SET TIMEZONE
   let timezone = localStorage.getItem("timezone");
   console.log("Timezone: " + timezone);
   if (timezone === null) {
      document.getElementById("timezones").value = 0;
   } else {
      // set the setting
      document.getElementById("timezones").value = timezone;
   }
}

function saveSettings() {
   // SAVE THE SETTIMNGS TO LOCAL STORAGE
   let email_notification = document.getElementById("myonoffswitch").checked;
   localStorage.setItem("yourapp_email_notification", email_notification);
   let public_profile = document.getElementById("myonoffswitch2").checked;
   localStorage.setItem("yourapp_profile_public", public_profile);
   let timezone = document.getElementById("timezones").value;
   localStorage.setItem("timezone", timezone);
}

document.addEventListener("click", event => {
   // =-=-=-=-=-= MENU BAR =-=-=-=-=-=-=-=-=-=
   if (event.target.className == "nav-button") {
      //  MENU BUTTON INDICATOR OFF =-=-=-=-=-=-=-=-=-=-=-=
      let nav_button = document.getElementsByClassName("nav-button");
      for (let i = 0; i < 4; i++) {
         nav_button[i].style.borderLeftStyle = "none";
         nav_button[i].style.opacity = "0.4";
      }
      // MENU BUTTON INDICATOR ON =-=-=-=-=-=-=-=
      event.target.style.borderLeft = "3px solid #82d67d";
      event.target.style.borderRadius = "3px";
      event.target.style.opacity = "1";
   }

   // =-=-=-==-=-=-= CLICK NOTIFICATION BELL =-=-=-=-=-=-=-=
   if (event.target.tagName == "svg" || event.target.className == "msg-dot") {
      // =-=-=-=-=-= HIDE MSG DOT - SHOW NOTIFICATION POPUP =-=-=-=
      document.getElementById("msg-dot").style.display = "none";
      document.getElementById("popup").style.display = "block";
   }

   // =-=-= CLICK POPUP NOTIFICATION ITEM =-=-=-=-=-=
   if (event.target.className == "menu") {
      document.getElementById("popup").style.display = "none";
   }
   // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   // =-=-=-=-=-=-= CHART OPTIONS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
   // +++ HOURLY +++
   let selectChart = event.target.innerText;
   if (selectChart == "Hourly") {
      createLineChart(hourlyLabels, hourlyData);
   }
   // +++ DAILY +++
   if (selectChart == "Daily") {
      createLineChart(dailyLabels, dailyData);
   }

   // +++ WEEKLY +++
   if (selectChart == "Weekly") {
      createLineChart(weeklyLabels, weeklyData);
   }

   // +++ MONTHLY +++
   if (selectChart == "Monthly") {
      createLineChart(monthlyLabels, monthlyData);
   }

   // =-=-=-=-=-= SEND BUTTON POPUP =-=-=-=-=-=
   if (event.target.className == "btn-send") {
      // =-=-=-=-= ERROR CHK MESSAGE AND USER BEFORE SEND =-=-=-=-=
      if (
         document.getElementById("user-box").value == "" ||
         document.getElementById("msg-box").value == ""
      ) {
         // ++++++ ERROR BOX +++++++++++
         document.getElementById("err-confirm-box").style.display = "block";
      } else {
         document.getElementById("confirm-box").style.display = "block";
      }
   }

   //  =-=-=-=-=-=-=-= SEND POPUP CLOSE BUTTON =-=-=-=-=-=
   if (event.target.className == "send-btn-close") {
      document.getElementById("confirm-box").style.display = "none";
   }

   // =-=-=-=-=-=-=-=-= ERR POPUP CLOSE =-=-=-=-=-=-=-=-=-=
   if (event.target.className == "err-btn-close") {
      document.getElementById("err-confirm-box").style = "none";
   }

   // =-=-=-=-=-=-=-=-=-=-=-= SAVE BUTTON Save & POPUP =-=-=-=-=-=-=
   if (event.target.className == "btn-save") {
      // TODO call the saveSettings function here +++++++++++++
      saveSettings();
      document.getElementById("save-box").style.display = "block";
   }

   // =-=-=-=-=-=-=-=-=-= SAVE POPUP CLOSE BUTTON =-=-=-=-=-=-=-=-=-=-=
   if (event.target.className == "save-btn-close") {
      document.getElementById("save-box").style.display = "none";
   }
});

document.addEventListener("mouseover", event => {
   if (event.target.className == "nav-button") {
      //  =-=-=-=-=-=-=-=-=-= TURN OFF ALL INDICATORS =-=-=-=-=-=-=
      let nav_button = document.getElementsByClassName("nav-button");
      for (let i = 0; i < 4; i++) {
         if (nav_button[i].style.borderLeftStyle !== "solid") {
            nav_button[i].style.opacity = "0.4";
         }
      }
      // =-=-=-=-=-=-=-= TURN ON TARGETED INDICATOR =-=-=-=-=-=-=
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

window.addEventListener("resize", event => {
   document.location.reload(true);
});

// =-=-=-=-=-=-=-= MAIN PROCEDURE =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
createLineChart(weeklyLabels, weeklyData);
createBarChart();
createDonutChart();
insertMemberActivity();
getSettings();

window.onload = function() {
   if (first_run_flag) {
      first_run_flag = false;
      let first = document.getElementById("ico-dashboard");
      first.style.borderLeftStyle = "solid";
   }
};
