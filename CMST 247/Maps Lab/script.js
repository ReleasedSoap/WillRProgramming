function calcWordFrequencies() {
    let wordOrder = prompt();
    let words = wordOrder.split(" ")
    let frequency = {};
    
    for(let word of words){
        if(word in frequency) {
            frequency[word]++; 
        } else {
            frequency[word] = 1;
      }
    }
    for (let word in frequency){
    console.log([word] + " " + frequency[word]);
    }
}
