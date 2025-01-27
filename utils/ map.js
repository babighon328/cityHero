ymaps.ready(init);

function init() {
  const map = new ymaps.Map(
    'map',
    {
      center: [61, 35],
      zoom: 3.5,
      controls: [],
    },
    {
      suppressMapOpenBlock: true,
      suppressObsoleteBrowserNotifier: true,
      yandexMapDisablePoiInteractivity: true,
    }
  );

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl');
  map.options.set('suppressCopyright', true);

  const placemark1 = new ymaps.Placemark([55.751574, 37.573856], {
    hintContent: 'Москва',
  });
  const placemark2 = new ymaps.Placemark([59.93428, 30.335098], {
    hintContent: 'Санкт-Петербург',
  });
  const placemark3 = new ymaps.Placemark([48.707067, 44.516975], {
    hintContent: 'Волгоград',
  });
  const placemark4 = new ymaps.Placemark([44.723489, 37.76866], {
    hintContent: 'Новороссийск',
  });
  const placemark5 = new ymaps.Placemark([54.193122, 37.617348], {
    hintContent: 'Тула',
  });
  const placemark6 = new ymaps.Placemark([68.969562, 33.074541], {
    hintContent: 'Мурманск',
  });
  const placemark7 = new ymaps.Placemark([54.782635, 32.045287], {
    hintContent: 'Смоленск',
  });

  map.geoObjects.add(placemark1);
  map.geoObjects.add(placemark2);
  map.geoObjects.add(placemark3);
  map.geoObjects.add(placemark4);
  map.geoObjects.add(placemark5);
  map.geoObjects.add(placemark6);
  map.geoObjects.add(placemark7);
}
