//Creating Pie Chart
function generatePie(myJson){
	let myLabels = ['Regular Hours','Overtime Hours','Vacation Hours'];
	let regular = 0; 
	let overtime = 0;
	let vacation = 0;
	for(employee of myJson.employees){
		regular += employee.regularHours; 
		overtime += employee.overtimeHours;
		vacation += employee.vacationHours;
	}
	let pie = document.getElementById('pie').getContext('2d');

	new Chart(pie, {
		type: 'doughnut',
		data: {
			labels: myLabels,
			datasets: [{
				label: 'Timesheet Distribution',
				data: [regular, overtime, vacation],
				backgroundColor: [
					'rgb(118, 176, 65)',
					'rgb(228, 87, 46)',
					'rgb(255, 201, 20)'
				],
				hoverOffset: 4
			}]
			
		}

	});
}
//Generating Piechart from local json file
function generatePieChart(){
	//retriving local json and creating a pie chart  using jquery
	$.getJSON("json/timesheet.json", generatePie);
}


//creating table from json
function createTable(myJson){
	let employeeData = new Array();
	for(let i = 0; i < myJson.employees.length; i++){
    let employee = myJson.employees[i];
    let oneEmployeeData = [        employee.name,        employee.regularHours,        employee.overtimeHours,        employee.vacationHours    ];
    employeeData.push(oneEmployeeData);
}
	$('#datatabel-example1').DataTable({
		data: employeeData
	});
}

	
//generating table from local JSON file
function generateTable(){
	//retriving local json and creating a tab  using jquery
	$.getJSON("json/timesheet.json", createTable);
}


generatePieChart();
generateTable();



