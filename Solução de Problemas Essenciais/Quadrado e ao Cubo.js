let input = parseInt(gets());

for(let i = 1; i <= input; i++) {
  let output = ''
  
  for(let y = 1; y <= 3; y++) {
    output += " "   + Math.pow(i,y);
  }
  console.log(output)
}