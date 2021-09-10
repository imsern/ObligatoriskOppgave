function chooseBar(selectedPillar){
    chosenBar=chosenBar == selectedPillar ? '' : selectedPillar;
  console.log(selectedPillar)
  show();
}

function removePillar(selectedPillar){
    numbers.splice(selectedPillar -1, 1);
    console.log(selectedPillar);
    show();
}
function changePillar(selectedPillar){
    if (inputValue > 10) {
        feilmelding = 'Verdien er feil. Hold verdien innenfor 1-10!';
    } else {
        numbers[selectedPillar -1] = inputValue;
        feilmelding = '';
    }
    show();
}
function addPillar(){
    if (inputValue > 10){
        feilmelding = 'Verdien er feil. Hold verdien innenfor 1-10!';
    } else {
        numbers.push(inputValue);
        feilmelding = '';
    }
    show();
}