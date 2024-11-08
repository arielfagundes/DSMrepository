let i = 0; 
while( i < 6 ){ 
  let nro = Math.random() * 100;
  nro = Math.floor(nro);
    if( (nro < 50 && nro % 2 === 1) || (nro >= 50 && nro % 2 === 0)){
        console.log(nro);
        i++; 
    }
  }
