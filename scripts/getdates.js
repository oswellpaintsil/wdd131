window.addEventListener('load', () => {
    const year = document.getElementById('year');
    year.innerHTML = new Date().getFullYear();
});

// document.getElementById("lastModified").innerHTML=new Date(document.lastModified);

// const lastMod = new Date(document.lastModified);
//   document.getElementById("lastModified").innerHTML =
//     "Last Modification: " + lastMod;

// const lastMod = new Date(document.lastModified);
//   document.getElementById("lastModified").innerHTML =
//     "Last Modification: " + lastMod.toLocaleString();

const lastMod = new Date(document.lastModified);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };
  // format without comma
  const formatted = lastMod.toLocaleString(undefined, options).replace(",", "");
  
  document.getElementById("lastModified").innerHTML =
    "Last Modification: " + formatted;