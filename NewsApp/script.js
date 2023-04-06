// fetch(" http://localhost:3000/country").then(res => console.log(res.json)).catch(err => console.log(err))

fetch('http://localhost:3000/country')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // handle the JSON response data here
        const country = data;
        var xValues = [data[0].country, data[1].country, data[2].country, data[3].country, data[4].country, data[5].country];
        var yValues = [data[0].oil, data[1].oil, data[2].oil, data[3].oil, data[4].oil, data[5].oil];
        var barColors = ["red", "green", "blue", "orange", "brown", "pink"];
        new Chart("myChart", {
            type: "doughnut",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: yValues
                }]
            }
        });

        new Chart("myChart2", {
            type: "bar",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: [data[0].coal, data[1].coal, data[2].coal, data[3].coal, data[4].coal, data[5].coal]
                }]
            },
            legend: { display: false }
        });

        new Chart("myChart3", {
            type: "pie",
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: barColors,
                    data: [data[0].coal, data[1].coal, data[2].coal, data[3].coal, data[4].coal, data[5].coal]
                }]
            }
        });



        new Chart("myChart4", {
            type: "line",
            data: {
                labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
                datasets: [{
                    data: [data[0].coal, data[1].coal, data[2].coal, data[3].coal, data[4].coal, data[5].coal],
                    borderColor: "red",
                    fill: false,
                    label: "Coal"
                }, {
                    data: [data[0].oil, data[1].oil, data[2].oil, data[3].oil, data[4].oil, data[5].oil],
                    borderColor: "green",
                    fill: false,
                    label: "Oil"
                }, {
                    data: [data[0].gas, data[1].gas, data[2].gas, data[3].gas, data[4].gas, data[5].gas],
                    borderColor: "blue",
                    fill: true,
                    label: "gas"
                }]
            },
            options: {
                legend: { display: true }
            }
        });
        // console.log(data);
    })
    .catch(error => {
        // handle errors here
        console.error('There was a problem with the network request:', error);
    });


// 
//creating table from json
function createTable(myJson) {
    let employeeData = new Array();
    for (let i = 0; i < myJson.country.length; i++) {
        let employee = myJson.country[i];
        let oneEmployeeData = [employee.country, employee.hydro, employee.oil, employee.gas, employee.coal, employee.nuclear];
        employeeData.push(oneEmployeeData);
    }
    $('#datatabel-example1').DataTable({
        data: employeeData
    });
    $('#datatabel-example2').DataTable({
        data: employeeData
    });
    $('#datatabel-example3').DataTable({
        data: employeeData
    });
    $('#datatabel-example4').DataTable({
        data: employeeData
    });
}


//generating table from local JSON file
function generateTable() {
    //retriving local json and creating a tab  using jquery
    $.getJSON("data.json", createTable);
}
generateTable()