function init () {
  let demoMap = L.map('map').setView([32.18, -99.14], 4)
  L.tileLayer('https://sserva1.github.io/Final-project/', {
  }).addTo(demoMap)
  let city = L.marker([30, -90]).addTo(demoMap)
  let area = L.polygon([
    [31, -88],
    [35, -88],
    [32, -82]
  ]).addTo(demoMap)
  area.bindPopup('A polygon')
  city.bindPopup('A marker')
}
window.addEventListener('load', init)
