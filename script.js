const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

let sampleEvents = [
  //array of objects
  {
    title: "web dev",
    date: "4-12-2026",
    category: "workshop",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
  },
  {
    title: "web dev2",
    date: "5-12-2026",
    category: "conference",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
  },
];

addSampleBtn.addEventListener("click", () => {
  sampleEvents.forEach(addEvent);
});

//CREATE EVENT CARD

function createEventCard(eventData) {
  const card = document.createElement("div");
  card.className = "event-card";
  card.innerHTML = `
    <button class="deleteBtn">X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
    `;
  return card;
}

function addEvent(eventData) {
  const emptyState = document.querySelector(".empty-State");
  if (emptyState) emptyState.remove();

  eventContainer.appendChild(createEventCard(eventData));
}

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const eventData = {
    title: eventTitle.value,
    date: eventDate.value,
    category: eventCategory.value,
    description: eventDescription.value,
  };

  addEvent(eventData);
  eventForm.reset();
});

//CLEAR ALL EVENTS
clearAllBtn.addEventListener("click", () => {
  eventContainer.innerHTML = `<div class="empty-State">No events yet. Add your first event!</div>`;
});

// delete individual card
eventContainer.addEventListener("click", (event) => {
  //closest use to target the closest child element of the targeted element i.e eventContainer
  const card = event.target.closest(".event-card");
  console.log(card);

  if (event.target.classList.contains("deleteBtn")) {
    card.remove();
  }
  if (!eventContainer.querySelector(".event-card")) {
    eventContainer.innerHTML = `<div class="empty-State">No events yet. Add your first event!</div>`;
  }
});

// DOM MANIPULATION
document.addEventListener("keydown", (event) => {
    demoContent.textContent = "You pressed: " + event.key;
});
