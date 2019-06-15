var ctx = document.getElementById('pieChart').getContext('2d');

fetch("http://localhost:8080/transactions/all")
.then(response => response.json())
.then(response => classifyExpenses(response))
.then(response => createChart(response));

function classifyExpenses(rawDatafromDB) {
    var id1=0;id2=0;id3=0;id4=0;id5=0;id6=0;id7=0;id8=0;id9=0;id10=0;id11=0;id12=0;
    for (var i = 0; i <= rawDatafromDB.length - 1; i++ ){ 
        switch (rawDatafromDB[i].category_id) {
            case 1: 
                id1+=rawDatafromDB[i].value;
                break;
            case 2: 
                id2+=rawDatafromDB[i].value;
                break;
            case 3: 
                id3+=rawDatafromDB[i].value;
                break;
            case 4: 
                id4+=rawDatafromDB[i].value;
                break;    
            case 5: 
                id5+=rawDatafromDB[i].value;
                break;    
            case 6: 
                id6+=rawDatafromDB[i].value;
                break;    
            case 7: 
                id7+=rawDatafromDB[i].value;
                break;    
            case 8: 
                id8+=rawDatafromDB[i].value;
                break;    
            case 9: 
                id9+=rawDatafromDB[i].value;
                break;    
            case 10: 
                id10+=rawDatafromDB[i].value;
                break;    
            case 11: 
                id11+=rawDatafromDB[i].value;
                break;    
            case 12: 
                id12+=rawDatafromDB[i].value;
                break;    
        }
    }
    var myArr = [];
    myArr.push(id1);myArr.push(id2);myArr.push(id3);myArr.push(id4);myArr.push(id5);myArr.push(id6);myArr.push(id7);myArr.push(id8);myArr.push(id9);myArr.push(id10);myArr.push(id11);myArr.push(id12);
    console.log(myArr);
    return myArr;
};

function createChart(dataFromDB) {
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Jedzenie', 'Mieszkanie/Dom', 'Transport', 'Media', 'Odzież', 'Zdrowie', "Edukacja", "Dzieci", "Hobby", "Rozrywka", "Spłata długów", "Oszczędności"],
        datasets: [{
            data: dataFromDB,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            animateRotate: true
        }
    }
});
}