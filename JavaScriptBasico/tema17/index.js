function initMap() {
  const myMarkers = [
    {
      position: { lat: -31.6083104051284, lng: -60.672413330339594 },
      title: "Home"
    },
    {
      position: { lat: -34.60357992415412, lng: -58.381548944094 },
      title: "Obelisco"
    },
    {
      position: {lat: -34.635363709894065, lng: -58.36471338642165 },
      title: "la Bombonera"
    },
    {
      position: { lat: -37.14719472741116, lng: -62.81186449694477 },
      title: "Laguna de Epecuén"
    }
  ]

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myMarkers[0].position,
  })

  let markers = new google.maps.Marker()

  myMarkers.forEach(element => {
    console.log(element)
    markers = (new google.maps.Marker({
      position: element.position,
      map: map,
      title: element.title
    }))
  });
}

window.initMap = initMap