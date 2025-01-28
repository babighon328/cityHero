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

  [
    'geolocationControl',
    'searchControl',
    'trafficControl',
    'typeSelector',
    'fullscreenControl',
    'rulerControl',
  ].forEach((control) => {
    map.controls.remove(control);
  });

  map.options.set('suppressCopyright', true);

  const BalloonLayout = ymaps.templateLayoutFactory.createClass(
    '<div class="custom-balloon">' +
      '<div class="balloon-content">' +
      '<h3>$[properties.balloonHeader]</h3>' +
      '<span class="url">$[properties.url]</span>' +
      '<button class="details-btn">Подробнее →</button>' +
      '</div>' +
      '</div>',
    {
      build: function () {
        BalloonLayout.superclass.build.call(this);
        this._$element = $('.custom-balloon', this.getParentElement());
        this._$element.find('.details-btn').on('click', this.onDetailsClick);
      },

      onDetailsClick: function (e) {
        const cityUrl = $(e.currentTarget)
          .closest('.balloon-content')
          .find('span')
          .text();
        window.showCityDetails(cityUrl);
      },

      clear: function () {
        BalloonLayout.superclass.clear.call(this);
      },
    }
  );

  const placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: '../image/starPlaceMark.png',
    iconImageSize: [32, 32],
    iconImageOffset: [-16, -32],
    balloonContentLayout: BalloonLayout,
    hideIconOnBalloonOpen: false,
  };

  const cities = [
    {
      coordinates: [55.751574, 37.573856],
      name: 'Москва',
      url: 'fsdfsdfsd',
    },
    {
      coordinates: [59.93428, 30.335098],
      name: 'Санкт-Петербург',
      url: '',
    },
    {
      coordinates: [48.707067, 44.516975],
      name: 'Волгоград',
      url: '',
    },
    {
      coordinates: [44.723489, 37.76866],
      name: 'Новороссийск',
      url: '',
    },
    {
      coordinates: [54.193122, 37.617348],
      name: 'Тула',
      url: '',
    },
    {
      coordinates: [68.969562, 33.074541],
      name: 'Мурманск',
      url: '',
    },
    {
      coordinates: [54.782635, 32.045287],
      name: 'Смоленск',
      url: '',
    },
    {
      coordinates: [45.326572, 36.508314],
      name: 'Керчь',
      url: '',
    },
    {
      coordinates: [44.6178, 33.5256],
      name: 'Севастополь',
      url: '',
    },
  ];

  cities.forEach((city) => {
    const placemark = new ymaps.Placemark(
      city.coordinates,
      {
        balloonHeader: city.name,
        url: city.url,
      },
      placemarkOptions
    );

    map.geoObjects.add(placemark);
  });

  window.showCityDetails = function (cityUrl) {
    console.log(`Переход на страницу города: ${cityUrl}`);
  };
}
