let i = 0; 
while( i < 6 ){ 
  let nro = Math.random() * 100;
  
  if (Math.floor(nro) % 3 === 0 || Math.floor(nro) % 5 === 0) {
    if(Math.floor(nro) > 20){
        console.log(Math.floor(nro));
        i++; 
    }
  }
}