ymaps.ready(init);
let main = "";
let topLat=0;
let topLng=0;
let sayac=0;
function init() {
    var myMap = new ymaps.Map("map", {
        center: [39.43, 35.30],
        zoom: 6.4
    }, {
        searchControlProvider: 'yandex#search'
    });
}