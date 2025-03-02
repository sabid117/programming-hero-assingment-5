const date = new Date().toLocaleDateString("en-US", {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const dateSplit = date.split(", ");

document.getElementById(
  "date"
).innerHTML = `${dateSplit[0]} , <br> <strong>${dateSplit[1]}</strong> <strong>${dateSplit[2]}</strong>`;