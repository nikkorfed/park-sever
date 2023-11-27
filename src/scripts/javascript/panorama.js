pannellum.viewer("panorama", {
  type: "equirectangular",
  panorama: "https://pannellum.org/images/alma.jpg",
  autoLoad: true,
  mouseZoom: false,
  showControls: false,
  // hotSpotDebug: true,
  hotSpots: [
    {
      pitch: 14.1,
      yaw: 1.5,
      type: "info",
      text: "Беспроводная зарядка 10W",
    },
    {
      pitch: -7.2957755669927975,
      yaw: -56.600141557901466,
      type: "info",
      text: "Телевизор (с регулируемой высотой)",
    },
    {
      pitch: 3.809525099987637,
      yaw: 38.725013375010015,
      type: "info",
      text: "Голосовой ассистент Алиса",
    },
  ],
});
