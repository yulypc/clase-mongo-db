const estudiante = [{
  id: 1020225312,
  nombre: "Daniel Contreras",
  edad: 28,
  matricula: "24567",
  carrera: "Ing. Sistemas",
  ciudad: "medellin",
  sexo: "masculino",
     notas:{ 
         periodo1:{
           cienciasNaturales:[4.0, 5.0, 4.0, 3.0],
           matematicas:[3.8, 3.5, 5.0, 5.0],
           cienciasSociales:[5.0, 5.0, 5.0, 5.0],
           español:[3.5,5.0,4.5,3.8],
         
        }
      },
  {
  id: 71345628,
  nombre: "Martha parra",
  edad: 32,
  matricula: "247890",
  carrera: "desarrollo de software",
  ciudad: "medellin",
  sexo: "femenino",
     notas:{ 
         periodo1:{
           cienciasNaturales:[4.0, 4.0, 4.0, 2.8],
           matematicas:[4.7, 3.8, 5.0, 3.0],
            cienciasSocial[2.0,1.0,5.0,5.0]
         }
      }     
}]
funtion promedio(notas){
  let promedio = 0;
  for(let i=0; i<notas.length; i++){
    promedio += notas[i];
  }
  return promedio/notas.length;
}
function promedioPeriodo(periodo1){
  let promedio = 0;
  for(let i=0; i<periodo1.length; i++){
    promedio += periodo1[i];
  }
  return promedio/periodo1.length
}
