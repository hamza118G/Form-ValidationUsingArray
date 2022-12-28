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
        YourData = YourData + " " + a.value;
    }



    document.getElementById("par").innerHTML = YourData;

    

}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }

        }
    } while (swapped)
}


const arr = [8, 20, -4, -3, 10]
bubbleSort(arr)
console.log(arr)









