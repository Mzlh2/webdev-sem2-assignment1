const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");


let sampleEvents = 
    [
        {
            title: "web dev",
            date: "4-12-2026",
            category: "workshop",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
        },
        {
            title: "web dev2",
            date: "5-12-2026",
            category: "conference",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate."
        }
    ]
const eventData={
    title: eventTitle.value;
    date: eventDate.value;
    category: eventCategory.value;
    description: eventDescription.value;
}



