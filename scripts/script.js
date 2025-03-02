const date = new Date().toLocaleDateString("en-US", {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const parts = date.split(", ");

document.getElementById(
  "date"
).innerHTML = `${parts[0]}<br>${parts[1]}, ${parts[2]}`;