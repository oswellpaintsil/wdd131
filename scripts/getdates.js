window.addEventListener('load', () => {
    const year = document.getElementById('year');
    year.innerHTML = new Date().getFullYear();
});

document.getElementById("lastModified").innerHTML=new Date(document.lastModified);