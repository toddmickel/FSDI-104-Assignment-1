const salon = {
    name:'The Fashion Pet',
    address:{
        street: '1224 Sesame Ct',
        city: 'Sunnyvale',
        state: 'CA',
        zip: '94807'
    },
    hours: {
        open: '9:00 am',
        close: '5:00 pm'
    },
    pets:[
        { //Anonymous objects
            petName: 'Scooby',
            petAge: 50,
            petGender: 'Male',
            petBreed: 'Dane',
            service: 'Grooming',
            ownerName: 'Shaggy',
            contactPhone: '555-555-5555'
        },
        { //Anonymous objects
            petName: 'Scrappy',
            petAge: 40,
            petGender: 'Male',
            petBreed: 'Dane',
            service: 'Full Service',
            ownerName: 'Shaggy',
            contactPhone: '555-555-5555'
        },
        { //Anonymous objects
            petName: 'Speedy',
            petAge: 60,
            petGender: 'Male',
            petBreed: 'Mixed',
            service: 'Nails cut',
            ownerName: 'Bugs Bunny',
            contactPhone: '888-888-8888'
        }
    ]
}
var {name,address:{street,city,state,zip}} = salon;

document.getElementById('footer-info').innerHTML = `
    <p> ${name} | ${street} | ${city}, ${state} ${zip} </p>
`;