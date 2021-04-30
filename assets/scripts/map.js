//Gyms
const markers = [


  {
      coords: {
          lat: 52.34456611491875,
          lng: -6.4686427306865815
      },
      content: '<h1>Arena Wexford</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Eden House, Redmond Rd, Ferrybank South, Wexford, Y35 R6VXe</h2>' + '<a href="http://www.arenawexford.com/">http://www.arenawexford.com/</a>'
  },
  {
      coords: {
          lat: 53.18126149146826,
          lng: -6.799040272699171
      },
      content: '<h1>Berserkers Team Ireland</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>1 Eyre St, Piercetown, Newbridge, Co. Kildare, W12 PX99</h2>' + '<a href="https://www.facebook.com/pages/category/Martial-Arts-School/Berserkers-Team-Ireland-349155898482571/">https://www.facebook.com/pages/category/Martial-Arts-School/Berserkers-Team-Ireland-349155898482571/</a>'
  },
  {
      coords: {
          lat: 53.403076021498244,
          lng: -6.399429672692802
      },
      content: '<h1>C-MAC</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Parkside House, Mulhuddart Village</h2>' + '<a href="https://www.facebook.com/cmac.mma">https://www.facebook.com/cmac.mma</a>'
  },
  {
      coords: {
          lat: 53.34333155980888,
          lng: -6.272761072694545
      },
      content: '<h1>Coleman Combat</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>High Street Kenpo Academy School House Lane Dublin 8</h2>' + '<a href="https://www.colemancombat.com/facilities">https://www.colemancombat.com/facilities</a>'
  },
  {
      coords: {
          lat: 53.38567045513304,
          lng: -6.214139074544065
      },
      content: '<h1>Compound Martial Arts</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Butterly Business Park, Unit 24, Kilmore Rd, Artane, Co. Dublin, D05 HH34</h2>' + '<a href="https://www.facebook.com/CompoundMartialArts/">https://www.facebook.com/CompoundMartialArts/</a>'
  },
  {
      coords: {
          lat: 53.38705386257512,
          lng: -6.258192050855235
      },
      content: '<h1>DCU MM</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Dublin City University, Whitehall, Dublin 9</h2>' + '<a href="https://www.facebook.com/DCU-Mixed-Martial-Arts-736961459665559/">https://www.facebook.com/DCU-Mixed-Martial-Arts-736961459665559/</a>'
  },
  {
      coords: {
          lat: 53.3638366293654,
          lng: -6.271209186186487
      },
      content: '<h1>Dublin Combat Academy</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Unit 2 7, Cross Guns Business Park, Royal Canal Bank, Phibsborough Park</h2>' + '<a href="https://www.facebook.com/DublinCombatAcademy/">https://www.facebook.com/DublinCombatAcademy/</a>'
  },
  {
      coords: {
          lat: 51.88647955501132,
          lng: -8.588593001571848
      },
      content: '<h1>F.1.T</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Unit 4 Westside Retail Park</h2>' + '<a href="https://www.facebook.com/F.1.Tcentre">https://www.facebook.com/F.1.Tcentre</a>'
  },
  {
      coords: {
          lat: 53.35090534693532,
          lng: -6.262856028515221
      },
      content: '<h1>Fantom Dublin</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>23 Moore St, North City, Dublin, D01 N7E8</h2>' + '<a href="https://www.facebook.com/FantomGym/">https://www.facebook.com/FantomGym/</a>'
  },
  {
      coords: {
          lat: 53.975794908479685,
          lng: -6.710792930347878
      },
      content: '<h1>Ferocity MMA</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Dundalk Rd Lisanisk Carrickmacross Co. Monaghan</h2>' + '<a href="https://www.facebook.com/Ferocity-Mma-Fitness-Centre-1396922383859542/">https://www.facebook.com/Ferocity-Mma-Fitness-Centre-1396922383859542/</a>'
  },
  {
      coords: {
          lat: 53.36918232517633,
          lng: -6.234656241434616
      },
      content: '<h1>Full Power Gym</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>82 N Wall Quay, North Dock, Dublin, D01 XR83</h2>' + '<a href="https://www.facebook.com/FullPowerGymDrogheda/">https://www.facebook.com/FullPowerGymDrogheda/</a>'
  },
  {
      coords: {
          lat: 52.84478012058378,
          lng: -8.973923353261807
      },
      content: '<h1>Husaria Fight Team</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Clon Road Business Park, Clon Rd, Cappahard, Ennis, Co. Clare</h2>' + '<a href="https://www.facebook.com/Husaria-Fight-Team-167175519996191/">https://www.facebook.com/Husaria-Fight-Team-167175519996191/</a>'
  },
  {
      coords: {
          lat: 53.35639186747569,
          lng: -6.242154259201615
      },
      content: '<h1>Kokoro Mixed Martial Arts Dublin</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Unit 4, Sráid Na Gaeilge, An Trá Thuaidh, Dublin 3</h2>' + '<a href="http://kokoromma.org/index.html">http://kokoromma.org/index.html</a>'
  },
  {
      coords: {
          lat: 53.37592488984366,
          lng: -6.306309930365237
      },
      content: '<h1>Kyuzo MMA</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>2a, Ballyboggan Business Centre, Ballyboggan Rd, Cabra West, Dublin 11</h2>' + '<a href="http://kyuzogym.com/">http://kyuzogym.com/</a>'
  },
  {
      coords: {
          lat: 52.65804673598622,
          lng: -8.636951572714146
      },
      content: '<h1>Limerick BJJ Academy</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>St Alphonsus St, Limerick</h2>' + '<a href="http://www.limerickbjjacademy.com/">http://www.limerickbjjacademy.com/</a>'
  },
  {
      coords: {
          lat: 51.91972064287831,
          lng: -8.47685366799377
      },
      content: '<h1>MMA Cork</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>T23 XC85, Unit 4, New Sunbeam Industrial Estate, Blackpool, Co. Cork</h2>' + '<a href="https://mmacork.com/">https://mmacork.com/</a>'
  },
  {
      coords: {
          lat: 52.87091207741929,
          lng: -8.19274143037976
      },
      content: '<h1>MMA Nenagh Warriors</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Old Birr Road, Nenagh North, Nenagh, Co. Tipperary</h2>' + '<a href="">Gym does not have a website</a>'
  },
  {
      coords: {
          lat: 53.46280652726272,
          lng: -6.2070376861836225
      },
      content: '<h1>Malahide Martial Arts</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Unit 17, Seatown Business Campus, Swords</h2>' + '<a href="http://malahidemma.com/">http://malahidemma.com/</a>'
  },
  {
      coords: {
          lat: 51.873161804826374,
          lng: -8.509886188079678
      },
      content: '<h1>Pedro Bessa Brazilian Jiu-jitsu Cork</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Unit 3 Karlbrooke Business Park, Doughcloyne Industrial Estate, Sarsfield Road, Wilton, Cork, T12 Y650</h2>' + '<a href="https://www.bjjcork.com/">https://www.bjjcork.com/</a>'
  },
  {
      coords: {
          lat: 53.29323240122379,
          lng: -9.013350159203469
      },
      content: '<h1>Point Blank BJJ</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Ballybane Industrial Estate, 30, Glenrock Business Park, Galway</h2>' + '<a href="http://pointblankgym.com/">http://pointblankgym.com/</a>'
  },
  {
      coords: {
          lat: 53.52156972504169,
          lng: -6.104247883614653
      },
      content: '<h1>Rush Fight Academ</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Rush National School, Channel Rd, Rush, Co. Dublin</h2>' + '<a href="http://www.rushfightacademy.ie/">http://www.rushfightacademy.ie/</a>'
  },
  {
      coords: {
          lat: 53.34584364919763,
          lng: -6.370958745709406
      },
      content: '<h1>Ryoshin Fight Team</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>19 Oakcourt Lawn, Johnstown, Dublin 20, D20 PW28 Oakcourt Lawn, Johnstown, Dublin 20, D20 PW28</h2>' + '<a href="http://www.ryoshinmma.com">http://www.ryoshinmma.com</a>'
  },
  {
      coords: {
          lat: 51.922903630333856,
          lng: -8.487367959242421
      },
      content: '<h1>SBG Cork City</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>North Point Business Park, Unit 31 New Mallow Rd, Cork, T23 HN76</h2>' + '<a href="http://sbgcork.com/">http://sbgcork.com/</a>'
  },
  {
      coords: {
          lat: 53.7019219093769,
          lng: -6.375896672684191
      },
      content: '<h1>SBG Drogheda</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Unit 11, Newgrange Business Park, Lagavooren, Drogheda, Co. Louth</h2>' + '<a href="http://www.sbgdrogheda.com/">http://www.sbgdrogheda.com/</a>'
  },
  {
      coords: {
          lat: 51.89774936763641,
          lng: -8.450001474586486
      },
      content: '<h1>Samson Martial Arts</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Centre Park House, Centre Park Rd, Ballintemple, Cork</h2>' + '<a href="https://www.facebook.com/Samson-Martial-Arts-Ireland-661737673881455">https://www.facebook.com/Samson-Martial-Arts-Ireland-661737673881455</a>'
  },
  {
      coords: {
          lat: 54.00547295613088,
          lng: -6.37775145918282
      },
      content: '<h1>Sanda MMA Dundalk</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>1 Coes Rd,Marshes Lower,Dundalk Co. Louth</h2>' + '<a href="https://www.facebook.com/SandaMMAdundalk/">https://www.facebook.com/SandaMMAdundalk/</a>'
  },
  {
      coords: {
          lat: 53.39714294588486,
          lng: -6.402637697068272
      },
      content: '<h1>Satori</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Unit 8B Coolmine Central Porters Road Ireland, Coolmine Industrial Estate, Dublin, D15 KT72</h2>' + '<a href="https://www.satoribjj.com/">https://www.satoribjj.com/</a>'
  },
  {
      coords: {
          lat: 53.28658269845903,
          lng: -9.038357770845415
      },
      content: '<h1>Shaolin MMA</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Kilkerrin Park 1 Liosban Industrial Estate, no. 11, Tuam Rd, Galway</h2>' + '<a href="https://shaolinmma.com/ic/index.html">https://shaolinmma.com/ic/index.html</a>'
  },
  {
      coords: {
          lat: 52.66219111644771,
          lng: -8.626432288057329
      },
      content: '<h1>SharkBait MMA</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>11-12 Catherine St, Limerick, V94 F865</h2>' + '<a href="https://www.facebook.com/sharkbait.mma.9/">https://www.facebook.com/sharkbait.mma.9/</a>'
  },
  {
      coords: {
          lat: 53.17420126787466,
          lng: -6.913831538563635
      },
      content: '<h1>Shootfighters</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>11-12 Catherine St, Limerick, V94 F865</h2>' + '<a href="https://www.facebook.com/shootfighters.leixlipmma">https://www.facebook.com/shootfighters.leixlipmma</a>'
  },
  {
      coords: {
          lat: 51.90347499077489,
          lng: -8.482410815063892
      },
      content: '<h1>Siam Warriors Cork</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Ballymacthomas St, Glen Ryan Rd, Gurranabraher, Cork</h2>' + '<a href="https://www.facebook.com/pages/category/Sports-Team/Siam-Warriors-Cork-140990235914651/">https://www.facebook.com/pages/category/Sports-Team/Siam-Warriors-Cork-140990235914651/</a>'
  },
  {
      coords: {
          lat: 53.29787864729682,
          lng: -6.372732003382403
      },
      content: '<h1>Spartan Club MMA</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Circle K garage, Spartan Club, Old Belgard Rd, Tallaght, Co. Dublin</h2>' + '<a href="https://www.facebook.com/spartanclub/">https://www.facebook.com/spartanclub/</a>'
  },
  {
      coords: {
          lat: 53.402230720010714,
          lng: -6.3017217015286695
      },
      content: '<h1>Straight Blast Gym Charlestown</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Century Business Park, 1B, St Margaret Rd, Charlestown, Dublin, D11 H972</h2>' + '<a href="https://www.facebook.com/Sbgcharlestown/">https://www.facebook.com/Sbgcharlestown/</a>'
  },
  {
      coords: {
          lat: 53.29608466410855,
          lng: -6.34822009447469
      },
      content: '<h1>Straight Blast Gym Dublin 24</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Unit GB1, Sitecast Industrial Estate, Greenhills Rd, Tallaght, Dublin 24</h2>' + '<a href="http://www.sbgd24.ie/">http://www.sbgd24.ie/</a>'
  },
  {
      coords: {
          lat: 53.336542019572015,
          lng: -6.322683416873826
      },
      content: '<h1>Straight Blast Gym</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Goldenbridge Industrial Estate, Unit 13, Inchicore, Dublin, D08 WK22</h2>' + '<a href="https://sbgireland.com/">https://sbgireland.com/</a>'
  },
  {
      coords: {
          lat: 53.26937339074899,
          lng: -7.496164289890692
      },
      content: '<h1>Straight Blast Gym Tullamore</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Kilcruttin Business Park, Spollenstown, Tullamore, Co. Offaly</h2>' + '<a href="https://www.sbgtullamore.com/">https://www.sbgtullamore.com/</a>'
  },
  {
      coords: {
          lat: 51.921781601674404,
          lng: -8.189624674585772
      },
      content: '<h1>Systema Gym Cork</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Knockgriffin (Imokilly), Midleton, Co. Cork</h2>' + '<a href="">Gym does not have a website</a>'
  },
  {
      coords: {
          lat: 51.89228115556664,
          lng: -8.165251843900068
      },
      content: '<h1>T45 Jiu Jitsu</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Unit 13, Ballinacurra Business Park, Co. Cork</h2>' + '<a href="https://t45jiujitsu.ie/">https://t45jiujitsu.ie/</a>'
  },
  {
      coords: {
          lat: 53.43829625630824,
          lng: -6.226980888035089
      },
      content: '<h1>Team KF Martial Arts</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Metropoint Business Park, Unit B3, Kettles Ln, Swords, Co. Dublin, K67 NP22</h2>' + '<a href="http://www.sbgswords.com/">http://www.sbgswords.com/</a>'
  },
  {
      coords: {
          lat: 53.39872821699408,
          lng: -6.295050803379507
      },
      content: '<h1>Team Ryano MMA</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>2 Creation House, Finglas Business Centre, Jamestown Rd, Finglas North, Dublin</h2>' + '<a href="http://www.teamryano.com/">http://www.teamryano.com/</a>'
  },
  {
      coords: {
          lat: 52.26817950045311,
          lng: -9.709257676716454
      },
      content: '<h1>Tralee Martial Arts</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>2 Godfrey Pl, Tralee, Co. Kerry, V92 RW8D</h2>' + '<a href="https://www.facebook.com/tralee.arts/">https://www.facebook.com/tralee.arts/</a>'
  },
  {
      coords: {
          lat: 53.29379210041179,
          lng: -8.749809330686581
      },
      content: '<h1>K-Fit Fitness DoJo</h1>' + '<br>' + 'Address:' + '<br>' + '<h2>Athenry Shopping Centre, Unit 10, Bridgewater, Athenry, Co. Galway</h2>' + '<a href="https://www.facebook.com/pages/category/Martial-Arts-School/K-FIT-Fitness-Dojo-2118288294883801/">https://www.facebook.com/pages/category/Martial-Arts-School/K-FIT-Fitness-Dojo-2118288294883801/</a>'
  },

];

function initMap() {
  // map options
  var options = {
      zoom: 7,
      center: {
          lat: 53.3938131,
          lng: -7.858913
      }
  }
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Loop through markers
  var gmarkers = [];
  for (var i = 0; i < markers.length; i++) {
      gmarkers.push(addMarker(markers[i]));

  }

  //Add Marker function
  function addMarker(props) {
      var marker = new google.maps.Marker({
          position: props.coords,
          map: map,

      });


      //Check content
      if (props.content) {
          var infoWindow = new google.maps.InfoWindow({
              content: props.content
          });
          marker.addListener('click', function() {
              infoWindow.open(map, marker);
              map.setZoom(12);
              map.setCenter(marker.getPosition());
          });
      }
      return marker;
  }


  //Clusters google maps
  var markerCluster = new MarkerClusterer(map, gmarkers, {
      imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
}