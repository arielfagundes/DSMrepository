let i = 0; 
while( i < 6 ){ 
  let nro = Math.random() * 100;
  
  if (Math.floor(nro) % 2 === 0) {
    console.log(Math.floor(nro));
    i++; 
  }
}