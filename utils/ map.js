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
      '<img class="imgCity" src="$[properties.img]" alt="$[properties.balloonHeader]">' +
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
    iconImageHref: '/image/starPlaceMark.png',
    iconImageSize: [32, 32],
    iconImageOffset: [-16, -32],
    balloonContentLayout: BalloonLayout,
    hideIconOnBalloonOpen: false,
  };

  const cities = [
    {
      coordinates: [55.751574, 37.573856],
      name: 'Москва',
      url: '../pages/mockwa.html',
      img: '../image/moskva.png',
    },
    {
      coordinates: [59.93428, 30.335098],
      name: 'Санкт-Петербург',
      url: '../pages/spd.html',
      img: '../image/Saint Petersburg (Leningrad).png',
    },
    {
      coordinates: [48.707067, 44.516975],
      name: 'Волгоград',
      url: '',
      img: '../image/Volgograd (Stalingrad).png',
    },
    {
      coordinates: [44.723489, 37.76866],
      name: 'Новороссийск',
      url: '',
      img: '../image/Novorossiysk.png',
    },
    {
      coordinates: [54.193122, 37.617348],
      name: 'Тула',
      url: '',
      img: '../image/tula.webp',
    },
    {
      coordinates: [68.969562, 33.074541],
      name: 'Мурманск',
      url: '',
      img: '../image/Murmansk.png',
    },
    {
      coordinates: [54.782635, 32.045287],
      name: 'Смоленск',
      url: '',
      img: '../image/Smolensk.png',
    },
    {
      coordinates: [45.326572, 36.508314],
      name: 'Керчь',
      url: '',
      img: '../image/Kerch.png',
    },
    {
      coordinates: [44.6178, 33.5256],
      name: 'Севастополь',
      url: '',
      img: '../image/Sevastopol.png',
    },
  ];

  cities.forEach((city) => {
    const placemark = new ymaps.Placemark(
      city.coordinates,
      {
        balloonHeader: city.name,
        url: city.url,
        img: city.img,
      },
      placemarkOptions
    );

    map.geoObjects.add(placemark);
  });

  window.showCityDetails = function (cityUrl) {
    window.location.href = cityUrl;
  };
}
