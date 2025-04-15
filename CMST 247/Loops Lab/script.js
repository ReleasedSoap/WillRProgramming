function drawTriangle(size) {
let height=size;
let width=0;
let line;
   // Your solution goes here
	
	for (let i=1; i<=height; i++){
	 line="*";
		for (let w=1; w<=width; w++){
			line+="*";
			}
		width++;
		console.log(line);
		}
	}