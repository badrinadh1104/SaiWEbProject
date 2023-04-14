function generatePieChart() {
    // Load the data from the JSON file using jQuery's getJSON() method
    $.getJSON("json/timesheet.json", function(data) {
      // Define the labels for the chart
      var labels = ["Name","Regular Hours", "Overtime Hours", "Vacation Hours"];
  
      // Calculate the total hours for each category
      var regularHours = 0;
      var overtimeHours = 0;
      var vacationHours = 0;
      for (var i = 0; i < data.employees.length; i++) {
        regularHours += data.employees[i].regularHours;
        overtimeHours += data.employees[i].overtimeHours;
        vacationHours += data.employees[i].vacationHours;
      }
  
      // Define the data for the chart
      var chartData = {
        labels: labels,
        datasets: [{
          label: "Timesheet Distribution",
          data: [Name,regularHours, overtimeHours, vacationHours],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 205, 86, 0.6)"
          ]
        }]
      };
  
      // Get the canvas element and create a new chart
      var ctx = $("#pie")[0].getContext("2d");
      var myPieChart = new Chart(ctx, {
        type: "pie",
        data: chartData
      });
    });
  }
  
  function generateTable() {
    // Load the data from the JSON file using jQuery's getJSON() method
    $.getJSON("json/timesheet.json", function(data) {
      // Define the table headers
      var headers = ["Name", "Regular Hours", "Overtime Hours", "Vacation Hours"];
  
      // Define the data for the table
      var tableData = [];
      for (var i = 0; i < data.employees.length; i++) {
        var employee = data.employees[i];
        var rowData = [
          employee.name,
          employee.regularHours,
          employee.overtimeHours,
          employee.vacationHours
        ];
        tableData.push(rowData);
      }
  
      // Create the DataTable object and add it to the div with ID "datatable-example1"
      $("#datatable-example1").DataTable({
        data: tableData,
        columns: headers
      });
    });
  }
  
  // Call the functions to generate the chart and table
  generatePieChart();
  generateTable();
  