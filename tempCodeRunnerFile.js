for (let FB = 0; FB <= 100; FB++) {
    if (FB % 3 == 0 && FB % 5 == 0){
        console.log('Fizz Buzz');
    } else if (FB % 5 == 0){
        console.log('Buzz');
    } else if (FB % 3 == 0){
        console.log('Fizz');
    } else {
        console.log(FB);
    }
}