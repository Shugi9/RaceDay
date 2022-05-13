let raceNumber = Math.floor(Math.random() * 1000);
var registeredEarly = false;
if (registeredEarly){
    console.log('Runner is registered early')
} else {
    console.log('Runner is not registered early');
}
let runnerAge = 17
if (runnerAge > 18 && registeredEarly){
    raceNumber += 1000;
} 
if (registeredEarly && runnerAge >= 18){
    console.log(   `Race will begin at 9:30, your racenumber is ${raceNumber}.`);
}else if (runnerAge >= 18){
    console.log(`Race will begin at 11:00, your racenumber is ${raceNumber},`);
}else {console.log('Youth registrants run at 12:30 pm')}
