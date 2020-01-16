function  suma(a,b) {

 console.log(a+b);

}

function  multipli(a,b) {

    let c = a * b;
    return c;
   
   }

  //sintaxis de invocacion
  
  suma(3,5);


  let cuadrado= function(a) {

     return a*a;
     
  }


  console.log(cuadrado(5));

  let cubo = (a) =>  {

   return a * a * a;

  }

  let cubos = a => a * a;

  console.log(cubos(7));

  console.log(cubo(10));


  setTimeout(() => {
      
    console.log("ssisiis");
      
  }, 1000);


  let seconds = 10;
  function countDown(onTimeChanged) {

    setInterval(() =>{

        --seconds;
        //onTimeChanged();

        if(seconds > 0){

            onTimeChanged();
        }

   
  }, 5000);
}

function showSeconds(){

    console.log(seconds);

}


countDown(showSeconds);




