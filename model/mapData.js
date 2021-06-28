const Images = [
  { image: {uri:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1567052518/assets/91/f8d08e-84b1-417f-bba6-9c8e3eaf2220/original/APAC-driver-uber-comfort-driver2.jpg"} },
  { image: {uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShioLUecBLRXz5o_sWeFkhxutSr0BF59QLDbnkIIzyHYWaTpqSiig-dr8nl34koSIZ6Bs&usqp=CAU"} },
  { image: {uri:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1566972723/assets/8c/f777bf-ad1a-44f5-9b09-e42aad298e51/original/DPBasics.jpg"} },
  { image: {uri:"data:image/jpeg;base64,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"} },
];
export const markers = [
    {
      holder:"user",
      coordinate: {
        latitude: 25.397456519230683,
        longitude: 68.33357032796224,
      },
      title: "Driver 1",
      description: "I have expreince of 5+ years",
      image: Images[0].image,
      rating: 4,
      reviews: 99,
    },
    {
      holder:"user",
      coordinate: {
        latitude: 25.393424604614527,
        longitude: 68.34610160847981,
      },
      title: "Driver 2",
      description: "I have expreince of 1+ years",
      image: Images[1].image,
      rating: 5,
      reviews: 102,
    },
    {
      holder:"user",
      coordinate: {
        latitude: 25.392183988404177,
        longitude: 68.36172279378255,
      },
      title: "Driver 3",
      description: "I have expreince of 5+ years",
      image: Images[2].image,
      rating: 3,
      reviews: 220,
    },
    {
      holder:"user",
      coordinate: {
        latitude: 25.392183988404177,
        longitude: 68.3677309419759,
      },
      title: "Drier 4",
      description: "I have expreince of 5+ years",
      image: Images[3].image,
      rating: 4,
      reviews: 48,
    },
    {
      holder:"customer",
      coordinate: {
        latitude: 25.39497535694559,
        longitude: 68.40223487874349,
      },
      title: "Driver 5",
      description: "I have expreince of 5+ years",
      image: Images[3].image,
      rating: 4,
      reviews: 178,
    },
];


export const mapDarkStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
];

export const mapStandardStyle = [
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  ,
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];