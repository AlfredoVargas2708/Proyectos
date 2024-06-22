let i = 0;
while (i< 6){
    i++;
    if (i === 2){
        continue; /* se salta la operacion sigueinte */
    }
    if(i === 4){
        break; /* se termina el loop */
    }
    console.log(i);
}