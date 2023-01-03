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








// var YourData = " ";

// function validation() {
//     var input = document.getElementsByName('array[]');

//     for (var i = 0; i < input.length; i++) {
//         var a = input[i];
//         YourData = YourData + " " + `<li>${a.value}</li>`

//     }

    

//     document.getElementById("par").innerHTML = YourData;

    
//     console.log(YourData)


// }


   // set value using id
            //document.getElementById('txt').value = "Text Here";
            
            // set value using input
            //document.getElementsByTagName('input')[1].value = "Input Value";
            
            // let arr = [
            //     {
            //       'firstName': 'Joe',
            //       'age': 42,
            //       'gender': 'male',
            //     },
            //     {
            //       'firstName': 'Mary',
            //       'lastName': 'Jenkins',
            //       'age': 36,
            //       'gender': 'female',
            //     },
            //     {
            //       'firstName': 'Kim',
            //       'age': 40,
            //       'gender': 'female',
            //     }
            //   ];

            //   function test5(arr) {
            //     let result=[];
            //     arr.forEach(function(elm){
            //      let entry={
            //        'name':elm['firstName'],
            //        'age':elm['age']
            //      };
               
            //      // this if will put append last name if present in elm
            //      if(elm['lastName']){
            //        entry['name']=entry['name']+' '+elm['lastName'];
            //      }
            //      result.push(entry)
            //     })
            //     return result;
            //    }





            






// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }

//         }
//     } while (swapped)
// }


// const arr = YourData

// bubbleSort(arr)
// console.log(arr)




// function bubbleSort(arrAges) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arrAges.length - 1; i++) {
//             if (arrAges[i] > arrAges[i + 1]) {
//                 let temp = arrAges[i]
//                 arrAges[i] = arrAges[i + 1]
//                 arrAges[i + 1] = temp
//                 swapped = true
//             }

//         }
//     } while (swapped)
// }



// bubbleSort(arrAges)
// console.log(arrAges)






// flow 

// var persons = [];

// SubmitEvent.click () 
// {
//     name = getElementById('name')    
//     age = getElementById('age')
//     ... 

//     var person = {name: name, age: age, 2, 50000}

//     persons.add(person)
// }


// age.click () {
//     var sortedAge = [10,20,30]    
//     var sortedPersons = [['Hamza', 10], ['Ali',20], ['Haider', 30]]
//     persons.forEach(person) {
//         sortedAge.add(person[1])    
//         sortedPersons.add(person)

//     }
//     bubbleSort(personsAge, sortedPersons)
//     console.log(sortedPersons)
// }


// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }    

// window.onclick = function (event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }    
//         }    
//     }    
// }    




var arrsalaries=new Array();
var arrNames=new Array();
var arrAges=new Array();
var arrexperience=new Array();


// function savedata(){
//     var name = document.getElementById('name').value;
//     var salary = document.getElementById('salary').value;
//     var age = document.getElementById('age').value;
//     var experience = document.getElementById('experience').value;

//     arrsalaries[arrsalaries.length]=salary;    
//     arrNames[arrNames.length]=name;
//     arrAges[arrAges.length]=age;
//     arrexperience[arrexperience.length]=experience;


// }    
   
 
function displayData() {

    var name = document.getElementById('name').value;
    var salary = document.getElementById('salary').value;
    var age = document.getElementById('age').value;
    var experience = document.getElementById('experience').value;

    arrsalaries[arrsalaries.length]=salary;    
    arrNames[arrNames.length]=name;
    arrAges[arrAges.length]=age;
    arrexperience[arrexperience.length]=experience;




  var content="<b>Data Entered by User :</b><br>";  
  content+= [...arrNames]+"</br>";
  content+=[...arrsalaries]+"</br>";
  content+=[...arrAges]+"</br>";
  content+=[...arrexperience]+"</br>";
  document.getElementById('display').innerHTML = content;

  


  function bubbleSort(arrAges) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arrAges.length - 1; i++) {
            if (arrAges[i] > arrAges[i + 1]) {
                let temp = arrAges[i]
                arrAges[i] = arrAges[i + 1]
                arrAges[i + 1] = temp
                swapped = true
            }
            
        }
    } while (swapped)

}



bubbleSort(arrAges)
console.log(arrAges)

  
  
}  


// function sortages() {
//     for(var i=0; i<arrAges.length; i++){
//         for(var j=0; j>sortages.length; j++){
//             if (arrAges[i] > arrAges[i+1]) {
//                 var temp = arrAges[i]    
//                 arrAges[i] = arrAges[i+1]
//                 arrAges = temp
//             }
//         }
//     }
//     console.log(sortages)



//   function sortAge  (aage){
    //         for(i=1; i<aage.length-1; i++){
        //             if (aage[i] > aage [i+1]) {
//               sort = aage[i]            
//               aage[i]= aage[i+1]
//                 aage[i+1]
//                 console.log(sortAge)  
//             }
//         }
//   }


// function sortages() {
//     for(var i=0; i<arrAges.length; i++){
//         for(var j=0; j>sortages.length; j++){
//             if (arrAges[i] > arrAges[i+1]) {
//                 var temp = arrAges[i]
//                 arrAges[i] = arrAges[i+1]
//                 arrAges = temp
//             }
//         }
//     }
//     console.log(sortages)
// }





// const arr = [arrAges];
// const sortWithReduce = arr => {
//    return arr.reduce((acc, val) => {
//       let ind = 0;
//       while(ind < arr.length && val < arr[ind]){
//          ind++;
//       }
//       acc.splice(ind, 0, val);
//       return acc;
//    }, []);
// };
// console.log(sortWithReduce(arrAges));




