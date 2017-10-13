/// <reference path="./index.d.ts" />

var view = new Cesium.Viewer('');
view.camera.flyTo({
    destination: new Cesium.Cartesian3(113.2, 23.5)
});
