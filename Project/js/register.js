
//var salonName = salon.name;
//var salonStreet = salon.address.street
    document.getElementById('regnum').innerHTML = salon.pets.length;
    document.getElementById('petnames').innerHTML = displayPetNames();
    if (salon.pets.length > 1) {
    document.getElementById('petpl').innerHTML = 'pets';
} else {
    document.getElementById('petpl').innerHTML = 'pet';
}


// Supporting functions
function displayPetNames() {
    let petNames = '';
    for (var i = 0; i < salon.pets.length; i++) {
        if (i === salon.pets.length - 1 && salon.pets.length > 1) {
            petNames += ` and ${salon.pets[i].petName} `;
        } else if (salon.pets.length === 1){
            petNames = ` ${salon.pets[i].petName} `;
        } else {
        petNames += ` ${salon.pets[i].petName},`;            
        }
    }
    return petNames;
}
