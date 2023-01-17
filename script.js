function sortString(t){
let arr = []
let text = t.split(' ')
for(let i = 0;i < text.length;i++){
for(let j = 0;j < text[i].length;j++){
if(!isNaN(text[i][j])){
arr.push(text[i])
}

}
}
return arr.sort((a,b) => a.replace(/[^0-9]/g, '') - b.replace(/[^0-9]/g, '')).join(' ')
}


function queueTime(customers, n) {
const registers = new Array(n).fill(0);
for(let waitTime of customers){
const minWaitTime = registers.indexOf(Math.min(...registers));
registers[minWaitTime] += waitTime;
}

return Math.max(...registers);
}
