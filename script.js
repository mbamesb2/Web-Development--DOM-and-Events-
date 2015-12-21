// Michael Bamesberger
// CS 290 Web Development
// DOM and Events Assignment


function buildTable(){

    var newTable = document.createElement("table");
    for(var i = 0; i < 4; i++){
        var newRow = document.createElement("tr");
        newTable.appendChild(newRow);
        for(var j = 0; j < 4; j++){
            var newItem = document.createElement("td");
            newItem.style.border = "1px solid black";
            if (i==0){
                
                newItem.textContent = "Header " + (j+1);
            	newTable.appendChild(newItem);
            }
            else
             
            	newItem.textContent = (j+1) + ", " + i;
            	newTable.appendChild(newItem);   
      	}
    }
    return newTable;
}

var tableVar = buildTable();


document.body.appendChild(tableVar);


var currentCell = 4;

function updateCurrentCell(update)
{ 
    return currentCell = currentCell + update;
}


document.addEventListener("DOMContentLoaded", highlight(tableVar, currentCell));


// Create the Mark Cell Button
var btn = document.createElement("BUTTON");  
var t = document.createTextNode("Mark Cell");  
btn.appendChild(t); 
document.body.appendChild(btn);           

// Create the directional buttons
var leftbtn = document.createElement("BUTTON");        
var leftT = document.createTextNode("<");      
leftbtn.appendChild(leftT);                                
document.body.appendChild(leftbtn);
var left = "left";
                         
var rightbtn = document.createElement("BUTTON");       
var rightT = document.createTextNode(">");     
rightbtn.appendChild(rightT);           
document.body.appendChild(rightbtn);
var right = "right";

var downbtn = document.createElement("BUTTON");       
var downT = document.createTextNode("v");     
downbtn.appendChild(downT);           
document.body.appendChild(downbtn);
var down = "down";

var upbtn = document.createElement("BUTTON");       
var upT = document.createTextNode("^");     
upbtn.appendChild(upT);           
document.body.appendChild(upbtn);  
var up = "up";

//Add click event to Mark Cell button
btn.addEventListener("click", function(event){changeColor(tableVar, currentCell)});

//Add click event to left button
leftbtn.addEventListener("click", function(event){
    navigate(tableVar, left, currentCell)});

//Add click event to right button
rightbtn.addEventListener("click", function(event){
    navigate(tableVar, right, currentCell)});

//Add click event to up button
upbtn.addEventListener("click", function(event){
    navigate(tableVar, up, currentCell)});

//Add click event to down button
downbtn.addEventListener("click", function(event){
    navigate(tableVar, down, currentCell)});



function navigate(table, buttonType, currentCell){
 
	var cells = table.querySelectorAll('td');
    
    if(buttonType == "left"){
        console.log("Left button");
    	if(currentCell != 4 && currentCell != 8 && currentCell != 12){
           unHighlight(table, currentCell);
           highlight(table, updateCurrentCell(-1));
        }
    }
    
    if(buttonType == "right"){
       if(currentCell != 7 && currentCell != 11 && currentCell != 15){
           unHighlight(table, currentCell);
           highlight(table, updateCurrentCell(1));  
    	}
    }
    
    if(buttonType == "down"){
       if(currentCell != 12 && currentCell != 13 && currentCell != 14 && currentCell != 15){
           unHighlight(table, currentCell);
           highlight(table, updateCurrentCell(4));  
    	}    
    }    
    
    if(buttonType == "up"){
       if(currentCell != 4 && currentCell != 5 && currentCell != 6 && currentCell != 7){
           unHighlight(table, currentCell);
           highlight(table, updateCurrentCell(-4));  
    	}    
    }   

}


function highlight(table, currentCell) {
    var cells = table.querySelectorAll('td');
    cells[currentCell].style.outline = "2px solid black";
}

function unHighlight(table, currentCell) {
    var cells = table.querySelectorAll('td');
    cells[currentCell].style.outline = "0px solid black";
    
}

function changeColor(table, index){
	var cells = table.querySelectorAll('td');
	cells[index].style.backgroundColor = "yellow";
     
}



