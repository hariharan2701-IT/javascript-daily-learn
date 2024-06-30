var movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

var movie2 = {
  title: "Spectre",
  actors: "Daniel Craig, Christoph Waltz",
  directors: "Sam Mendes"
};

var movie3 = {
  title: "Star Wars: Episode VII - The Force Awakens",
  actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors: "J.J.Abrams"
};

var movie4 = {
  title: "The Revenant",
  actors: "Leonardo DiCaprio, Tom Hardy",
  directors: "Alejandro G. Iñárritu"
};

function displayMovieInfo(movie) {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
  console.log("\n"); // Add a blank line to space out the different movies
}

displayMovieInfo(movie1);
displayMovieInfo(movie2);
displayMovieInfo(movie3);
displayMovieInfo(movie4);

var event1 = {
  title: "Meeting with Bob",
  date: "2024-07-01",
  location: "Conference Room A",
  description: "Discuss project status and next steps."
};

var event2 = {
  title: "Dentist Appointment",
  date: "2024-07-02",
  location: "Downtown Dental Clinic",
  description: "Routine dental checkup."
};

var event3 = {
  title: "Yoga Class",
  date: "2024-07-03",
  location: "Wellness Center",
  description: "Morning yoga class for relaxation and flexibility."
};

function displayEventInfo(event) {
  console.log("Event: " + event.title);
  console.log("------------------------------");
  console.log("Date: " + event.date);
  console.log("Location: " + event.location);
  console.log("Description: " + event.description);
  console.log("------------------------------");
  console.log("\n"); // Add a blank line to space out the different events
}

displayEventInfo(event1);
displayEventInfo(event2);
displayEventInfo(event3);
