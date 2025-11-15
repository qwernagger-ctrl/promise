// Инициализация карты
const map = L.map('map').setView([51.5, -0.12], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 20
}).addTo(map);
 
const statusEl = document.getElementById('s');
const btn = document.getElementById('go');
 
// Функция, которая возвращает Promise
function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: 'Точка события',
        lat: 51.5033,
        lng: -0.1195,
        info: 'Пример async/await'
      });
    }, 900);
  });
}
 
// Асинхронная логика
btn.onclick = async () => {
  try {
    statusEl.textContent = 'загрузка...';
 
    const data = await getData();
 
    map.setView([data.lat, data.lng], 15);
    L.marker([data.lat, data.lng]).addTo(map).bindPopup(data.name).openPopup();
 
    statusEl.textContent = 'готово';
  } catch (e) {
    statusEl.textContent = 'ошибка';
  }
};
