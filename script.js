// function multipleSubmit() {


//     var input = document.getElementById('NameInput').value;
//     var Ageinput = document.getElementById('AgeInput').value;
//     var Experienceinput = document.getElementById('ExperienceInput').value;
//     var Salaryinput = document.getElementById('SalaryInput').value;
//     // var input = document.getElementsByName('array[]');
//     var button = document.getElementById('button');


    
//     var array = [`Your Name: ${input}`, `Your Age:${Ageinput}`, `Your Experience: ${Experienceinput}`, `Your Salary: ${Salaryinput}`.split(" ") ]
//     // alert(array);
//     console.log(array);}

var YourData = " ";

function validation() {
    var input = document.getElementsByName('array');

    for (var i = 0; i < input.length; i++) {
        var a = input[i];
        YourData = YourData + " " + a.value  ;
    }

    document.getElementById("par").innerHTML = YourData;
    

}

    // function bubbleSort(arr) {
    //     for (let arr = 0; arr < arr.length -1; arr++) {
         
          
    //     }
    // }











