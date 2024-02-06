
window.onload = init;

function init() {
    const map = new ol.Map({
        view: new ol.View({
            center: [0, 0],
            zoom: 3,
            maxZoom: 6,
            minZoom: 2,
            rotation: 0.3
        }),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target: "js-map"
    })

    const popupContainerElement = document.getElementById('popup-coordinates');
    const popup = new ol.Overlay({
        element: popupContainerElement,
        positioning: 'center-left'
    })

    map.addOverlay(popup);

    map.on('click', function(e){
        console.log(e);
        const clickedCoordinate = e.coordinate; // Agafa la coordenada [x,y] clicada
        popup.setPosition(undefined);
        popup.setPosition(clickedCoordinate);
        popupContainerElement.innerHTML = clickedCoordinate; // Això fa que al clicar, es pintin les coordenades per pantalla
    })
}