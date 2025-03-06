const config = {
  "lang": "es",
  "localPort": "5173",
  "base": "https://srsergiorodriguez.github.io",
  "baseurl": "/america",
  "title": "América",
  "subtitle": "RReeeeeeeee",
  "credits": "Por Sergio Rodríguez Gómez",
  "copyright": "Todos los derechos reservados, 2025",
  "pages": {
    "iiifViewer": true,
    "metadataToShow": [
      {
        "key": "label",
        "label": "Label",
        "type": "text"
      },
      {
        "key": "autor",
        "label": "Autor",
        "type": "text"
      },
      {
        "key": "fecha",
        "label": "Fecha",
        "type": "text"
      }
    ],
    "metadataToIndex": [
      "label",
      "autor",
      "fecha"
    ]
  }
};
export default config;