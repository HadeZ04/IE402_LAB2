require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/request"
], function (Map, SceneView, GeoJSONLayer, esriRequest) {
  const configUrl = "./data/dinh_doc_lap/layers.config.json";

  function createPolygonRenderer(color) {
    return {
      type: "simple",
      symbol: {
        type: "polygon-3d",
        symbolLayers: [
          {
            type: "extrude",
            material: { color: color },
            edges: {
              type: "solid",
              color: "#4f4f4f",
              size: "0.5px"
            }
          }
        ]
      },
      visualVariables: [
        {
          type: "size",
          field: "height",
          valueUnit: "meters"
        }
      ]
    };
  }

  function createPointRenderer(color) {
    return {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: color,
        size: 7,
        outline: {
          color: "#ffffff",
          width: 1
        }
      }
    };
  }

  function createPopupTemplate() {
    return {
      title: "{name}",
      content:
        "<b>ID:</b> {id}<br><b>Group:</b> {group}<br><b>Height:</b> {height}<br><b>Source:</b> {source}<br><b>Owner:</b> {owner}<br><b>Phase:</b> {phase}<br><b>Module:</b> {module}"
    };
  }

  function addGeoJsonLayer(map, layerConfig) {
    const renderer =
      layerConfig.geometryType === "point"
        ? createPointRenderer(layerConfig.color)
        : createPolygonRenderer(layerConfig.color);

    const elevationInfo =
      layerConfig.geometryType === "point"
        ? { mode: "on-the-ground" }
        : {
            mode: "relative-to-ground",
            offset: layerConfig.baseOffset || 0,
            unit: "meters"
          };

    const layer = new GeoJSONLayer({
      url: layerConfig.url,
      title: layerConfig.title,
      renderer: renderer,
      elevationInfo: elevationInfo,
      outFields: ["*"],
      popupTemplate: createPopupTemplate()
    });

    map.add(layer);
  }

  function sortLayersByPhase(layers, phaseOrder) {
    const phaseIndex = new Map((phaseOrder || []).map((p, i) => [p, i]));
    return [...layers].sort((a, b) => {
      const ai = phaseIndex.has(a.phase) ? phaseIndex.get(a.phase) : 999;
      const bi = phaseIndex.has(b.phase) ? phaseIndex.get(b.phase) : 999;
      if (ai !== bi) return ai - bi;
      return a.id.localeCompare(b.id);
    });
  }

  esriRequest(configUrl, {
    query: { f: "json" },
    responseType: "json"
  })
    .then(function (response) {
      const config = response.data;
      const center = config.center;

      const map = new Map({
        basemap: "topo-vector",
        ground: "world-elevation"
      });

      const view = new SceneView({
        container: "viewDiv",
        map: map,
        camera: {
          position: [center.longitude, center.latitude, center.cameraZ],
          heading: center.heading,
          tilt: center.tilt
        }
      });

      const orderedLayers = sortLayersByPhase(config.layers || [], config.phaseOrder || []);
      orderedLayers.forEach(function (layerConfig) {
        addGeoJsonLayer(map, layerConfig);
      });

      view.when(function () {
        console.log("Dinh Doc Lap GeoJSON-only project loaded with phase order.");
      });
    })
    .catch(function (error) {
      console.error("Failed to load project config:", error);
    });
});
