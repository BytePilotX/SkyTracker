var map = L.map('map', {zoomControl: false}).setView([51.505, -0.09], 5); // Quickstart code

L.control.zoom({ position: 'bottomright' }).addTo(map); // Quickstart code


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);


// Note this will undergo further development.