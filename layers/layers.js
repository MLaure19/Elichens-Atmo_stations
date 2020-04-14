var wms_layers = [];

var format_IRIS_0 = new ol.format.GeoJSON();
var features_IRIS_0 = format_IRIS_0.readFeatures(json_IRIS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IRIS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRIS_0.addFeatures(features_IRIS_0);
var lyr_IRIS_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IRIS_0, 
                style: style_IRIS_0,
                interactive: true,
                title: '<img src="styles/legend/IRIS_0.png" /> IRIS'
            });
var format_Stations_NO2_1 = new ol.format.GeoJSON();
var features_Stations_NO2_1 = format_Stations_NO2_1.readFeatures(json_Stations_NO2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_NO2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_NO2_1.addFeatures(features_Stations_NO2_1);
var lyr_Stations_NO2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stations_NO2_1, 
                style: style_Stations_NO2_1,
                interactive: true,
                title: '<img src="styles/legend/Stations_NO2_1.png" /> Stations_NO2'
            });
var format_Stations_PM10_2 = new ol.format.GeoJSON();
var features_Stations_PM10_2 = format_Stations_PM10_2.readFeatures(json_Stations_PM10_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_PM10_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_PM10_2.addFeatures(features_Stations_PM10_2);
var lyr_Stations_PM10_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stations_PM10_2, 
                style: style_Stations_PM10_2,
                interactive: true,
                title: '<img src="styles/legend/Stations_PM10_2.png" /> Stations_PM10'
            });
var format_Stations_O3_3 = new ol.format.GeoJSON();
var features_Stations_O3_3 = format_Stations_O3_3.readFeatures(json_Stations_O3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_O3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_O3_3.addFeatures(features_Stations_O3_3);
var lyr_Stations_O3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stations_O3_3, 
                style: style_Stations_O3_3,
                interactive: true,
                title: '<img src="styles/legend/Stations_O3_3.png" /> Stations_O3'
            });
var format_Stations_BaP_4 = new ol.format.GeoJSON();
var features_Stations_BaP_4 = format_Stations_BaP_4.readFeatures(json_Stations_BaP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_BaP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_BaP_4.addFeatures(features_Stations_BaP_4);
var lyr_Stations_BaP_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stations_BaP_4, 
                style: style_Stations_BaP_4,
                interactive: true,
                title: '<img src="styles/legend/Stations_BaP_4.png" /> Stations_BaP'
            });
var format_Stations_PM25_5 = new ol.format.GeoJSON();
var features_Stations_PM25_5 = format_Stations_PM25_5.readFeatures(json_Stations_PM25_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stations_PM25_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_PM25_5.addFeatures(features_Stations_PM25_5);
var lyr_Stations_PM25_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stations_PM25_5, 
                style: style_Stations_PM25_5,
                interactive: true,
                title: '<img src="styles/legend/Stations_PM25_5.png" /> Stations_PM25'
            });
var format_Points_Elichens_6 = new ol.format.GeoJSON();
var features_Points_Elichens_6 = format_Points_Elichens_6.readFeatures(json_Points_Elichens_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Points_Elichens_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Points_Elichens_6.addFeatures(features_Points_Elichens_6);
var lyr_Points_Elichens_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Points_Elichens_6, 
                style: style_Points_Elichens_6,
                interactive: true,
                title: '<img src="styles/legend/Points_Elichens_6.png" /> Points_Elichens'
            });
var format_centroides_7 = new ol.format.GeoJSON();
var features_centroides_7 = format_centroides_7.readFeatures(json_centroides_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centroides_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centroides_7.addFeatures(features_centroides_7);
var lyr_centroides_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centroides_7, 
                style: style_centroides_7,
                interactive: true,
                title: '<img src="styles/legend/centroides_7.png" /> centroides'
            });

lyr_IRIS_0.setVisible(true);lyr_Stations_NO2_1.setVisible(false);lyr_Stations_PM10_2.setVisible(false);lyr_Stations_O3_3.setVisible(false);lyr_Stations_BaP_4.setVisible(false);lyr_Stations_PM25_5.setVisible(false);lyr_Points_Elichens_6.setVisible(false);lyr_centroides_7.setVisible(false);
var layersList = [lyr_IRIS_0,lyr_Stations_NO2_1,lyr_Stations_PM10_2,lyr_Stations_O3_3,lyr_Stations_BaP_4,lyr_Stations_PM25_5,lyr_Points_Elichens_6,lyr_centroides_7];
lyr_IRIS_0.set('fieldAliases', {'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'IRIS': 'IRIS', 'CODE_IRIS': 'CODE_IRIS', 'NOM_IRIS': 'NOM_IRIS', 'TYP_IRIS': 'TYP_IRIS', 'surface': 'surface', });
lyr_Stations_NO2_1.set('fieldAliases', {'Numéro st': 'Numéro st', 'Station': 'Station', 'Polluant': 'Polluant', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Stations_PM10_2.set('fieldAliases', {'Numéro st': 'Numéro st', 'Station': 'Station', 'Polluant': 'Polluant', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Stations_O3_3.set('fieldAliases', {'Numéro st': 'Numéro st', 'Station': 'Station', 'Polluant': 'Polluant', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Stations_BaP_4.set('fieldAliases', {'Numéro st': 'Numéro st', 'Station': 'Station', 'Polluant': 'Polluant', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Stations_PM25_5.set('fieldAliases', {'Numéro st': 'Numéro st', 'Station': 'Station', 'Polluant': 'Polluant', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Points_Elichens_6.set('fieldAliases', {'id': 'id', });
lyr_centroides_7.set('fieldAliases', {'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'IRIS': 'IRIS', 'CODE_IRIS': 'CODE_IRIS', 'NOM_IRIS': 'NOM_IRIS', 'TYP_IRIS': 'TYP_IRIS', 'surface': 'surface', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_IRIS_0.set('fieldImages', {'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'IRIS': 'TextEdit', 'CODE_IRIS': 'TextEdit', 'NOM_IRIS': 'TextEdit', 'TYP_IRIS': 'TextEdit', 'surface': 'TextEdit', });
lyr_Stations_NO2_1.set('fieldImages', {'Numéro st': 'TextEdit', 'Station': 'TextEdit', 'Polluant': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Stations_PM10_2.set('fieldImages', {'Numéro st': 'TextEdit', 'Station': 'TextEdit', 'Polluant': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Stations_O3_3.set('fieldImages', {'Numéro st': 'TextEdit', 'Station': 'TextEdit', 'Polluant': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Stations_BaP_4.set('fieldImages', {'Numéro st': 'TextEdit', 'Station': 'TextEdit', 'Polluant': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Stations_PM25_5.set('fieldImages', {'Numéro st': 'TextEdit', 'Station': 'TextEdit', 'Polluant': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Points_Elichens_6.set('fieldImages', {'id': 'TextEdit', });
lyr_centroides_7.set('fieldImages', {'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'IRIS': 'TextEdit', 'CODE_IRIS': 'TextEdit', 'NOM_IRIS': 'TextEdit', 'TYP_IRIS': 'TextEdit', 'surface': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', });
lyr_IRIS_0.set('fieldLabels', {'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'IRIS': 'no label', 'CODE_IRIS': 'no label', 'NOM_IRIS': 'no label', 'TYP_IRIS': 'no label', 'surface': 'no label', });
lyr_Stations_NO2_1.set('fieldLabels', {'Numéro st': 'no label', 'Station': 'no label', 'Polluant': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Stations_PM10_2.set('fieldLabels', {'Numéro st': 'no label', 'Station': 'no label', 'Polluant': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Stations_O3_3.set('fieldLabels', {'Numéro st': 'no label', 'Station': 'no label', 'Polluant': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Stations_BaP_4.set('fieldLabels', {'Numéro st': 'no label', 'Station': 'no label', 'Polluant': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Stations_PM25_5.set('fieldLabels', {'Numéro st': 'no label', 'Station': 'no label', 'Polluant': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Points_Elichens_6.set('fieldLabels', {'id': 'no label', });
lyr_centroides_7.set('fieldLabels', {'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'IRIS': 'no label', 'CODE_IRIS': 'no label', 'NOM_IRIS': 'no label', 'TYP_IRIS': 'no label', 'surface': 'no label', 'longitude': 'no label', 'latitude': 'no label', });
lyr_centroides_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});