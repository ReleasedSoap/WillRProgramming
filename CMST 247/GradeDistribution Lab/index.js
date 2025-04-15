

function parseScores(scoresString) {

   let gradesArray = scoresString.split(" ");
   return gradesArray;

}
function buildDistributionArray(scoresArray) {
 
   let distributionArray = [0,0,0,0,0];
 
   for (let i = 0; i < scoresArray.length; i++) {
 
     if (scoresArray[i] >= 90) {
      distributionArray[0] += 1;
     }
     else if (scoresArray[i] >= 80 && scoresArray[i] <= 89) {
      distributionArray[1] += 1;
     }
     else if (scoresArray[i] >= 70 && scoresArray[i] <= 79) {
      distributionArray[2] += 1;
     }
     else if (scoresArray[i] >= 60 && scoresArray[i] <= 69) {
      distributionArray[3] += 1;
     }
     else if (scoresArray[i] <= 59) {
      distributionArray[4] += 1;
     }

   }

   return distributionArray;
}
 
function setTableContent(scoresString) {
let scoresArray = parseScores(scoresString);
let distributionArray = buildDistributionArray(scoresArray);

let row1 = document.getElementById("firstRow");
for (let [index, count] of distributionArray.entries()){
   let bar = document.createElement("div");
   bar.classList.add(`bar-${index}`);
   bar.style.height = count * 10 +"px";

   let td = document.createElement("td");
   td.appendChild(bar);

   row1.appendChild(td);
}
let row3 = document.getElementById("thirdRow");
for (let count of distributionArray){
   let td = document.createElement("td");
   td.textContent = count;
   row3.appendChild(td);
}

 }
   // The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");