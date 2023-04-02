import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, LayersControl, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import FP from "./LFP_FHNW.json";

import nivel from "./data/nivicon.png";
import auss from "./data/aussicon.png";
import inn from './data/innicon.png';
import dachic from './data/dachiconL.png';
import atel from './data/ateliconL.png';
import monico from './data/moniconL.png';
import agnesico from './data/agniconL.png';

export default function Map() {
    const niv = FP.filter(F => F.properties.type === "Nivellement");
    const aussen = FP.filter(F => F.properties.type === "Aussen");
    const innen = FP.filter(F => F.properties.type === "Innenraum");
    const dach = FP.filter(F => F.properties.type === "Dach");
    const atelier = FP.filter(F => F.properties.type === "Atelier");
    const moni = FP.filter(F => F.properties.type === "Monitoring");
    const agnes = FP.filter(F => F.properties.type === "AGNES");

    const nivIcon = L.icon({
        iconUrl: require('./data/nivicon.png'),
        iconSize: [10, 10],
        iconAnchor: [5, 5],
        popupAnchor: [0, -5],
        tooltipAnchor: [-5, 0],
        shadowSize: [0, 0],
        shadowAnchor: [0, 0]
    });

    const aussIcon = L.icon({
        iconUrl: require('./data/aussicon.png'),
        iconSize: [10, 10],
        iconAnchor: [5, 5],
        popupAnchor: [0, -5],
        tooltipAnchor: [-5, 0],
        shadowSize: [0, 0],
        shadowAnchor: [0, 0]
    });

    const innIcon = L.icon({
        iconUrl: require('./data/innicon.png'),
        iconSize: [10, 10],
        iconAnchor: [5, 5],
        popupAnchor: [0, -5],
        tooltipAnchor: [-5, 0],
        shadowSize: [0, 0],
        shadowAnchor: [0, 0]
    });

    const dachIcon = L.icon({
        iconUrl: require('./data/dachicon.png'),
        iconSize: [10, 10],
        iconAnchor: [5, 5],
        popupAnchor: [0, -5],
        tooltipAnchor: [-5, 0],
        shadowSize: [0, 0],
        shadowAnchor: [0, 0]
    });

    const atelIcon = L.icon({
        iconUrl: require('./data/atelicon.png'),
        iconSize: [10, 10],
        iconAnchor: [5, 5],
        popupAnchor: [0, -5],
        tooltipAnchor: [-5, 0],
        shadowSize: [0, 0],
        shadowAnchor: [0, 0]
    });

    const monIcon = L.icon({
        iconUrl: require('./data/monicon.png'),
        iconSize: [10, 10],
        iconAnchor: [5, 5],
        popupAnchor: [0, -5],
        tooltipAnchor: [-5, 0],
        shadowSize: [0, 0],
        shadowAnchor: [0, 0]
    });

    const agnIcon = L.icon({
        iconUrl: require('./data/agnicon.png'),
        iconSize: [10, 10],
        iconAnchor: [5, 5],
        popupAnchor: [0, -5],
        tooltipAnchor: [-5, 0],
        shadowSize: [0, 0],
        shadowAnchor: [0, 0]
    });

    return (
        <div>
            <MapContainer center={[47.534760423285974, 7.642263339527119]}
                zoom={18}
                maxBounds={[[-90, -180], [90, 180]]}
            >

                <TileLayer url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png'
                    attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors<br/>Fabian Rüfenacht, Stand: 02. April 2023`}
                    noWrap='true'
                    maxZoom={22}
                    maxNativeZoom={18}
                />
                <LayersControl position='topright'>
                        <LayersControl.Overlay name={`<img src=${nivel} /> Nivellement`}>
                            <LayerGroup>
                                {niv.map(f => (
                                    <Marker key={f.properties.Pt}
                                        icon={nivIcon}
                                        position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                        <Popup position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                            <table>
                                                <tr>
                                                    <th>Nummer:</th>
                                                    <th>{f.properties.Pt}</th>
                                                </tr>
                                                <tr>
                                                    <td>Ort:</td>
                                                    <td>{f.properties.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Ost:</td>
                                                    <td>{f.properties.E}</td>
                                                </tr>
                                                <tr>
                                                    <td>Nord:</td>
                                                    <td>{f.properties.N}</td>
                                                </tr>
                                                <tr>
                                                    <td>Höhe:</td>
                                                    <td>{f.properties.H}</td>
                                                </tr>
                                            </table>
                                        </Popup>
                                        <Tooltip permanent className='tooltip' direction='left'>{f.properties.Pt}</Tooltip>
                                    </Marker>
                                ))}
                            </LayerGroup>
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name={`<img src=${auss} /> FP Aussen`} checked>
                            <LayerGroup>
                                {aussen.map(f => (
                                    <Marker key={f.properties.Pt}
                                        icon={aussIcon}
                                        position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                        <Popup position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                            <table>
                                                <tr>
                                                    <th>Nummer:</th>
                                                    <th>{f.properties.Pt}</th>
                                                </tr>
                                                <tr>
                                                    <td>Ort:</td>
                                                    <td>{f.properties.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Ost:</td>
                                                    <td>{f.properties.E}</td>
                                                </tr>
                                                <tr>
                                                    <td>Nord:</td>
                                                    <td>{f.properties.N}</td>
                                                </tr>
                                                <tr>
                                                    <td>Höhe:</td>
                                                    <td>{f.properties.H}</td>
                                                </tr>
                                            </table>
                                        </Popup>
                                        <Tooltip permanent className='tooltip' direction='left'>{f.properties.Pt}</Tooltip>
                                    </Marker>
                                ))}
                            </LayerGroup>
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name={`<img src=${inn} /> Innenraum`}>
                            <LayerGroup>
                                {innen.map(f => (
                                    <Marker key={f.properties.Pt}
                                        icon={innIcon}
                                        position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                        <Popup position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                            <table>
                                                <tr>
                                                    <th>Nummer:</th>
                                                    <th>{f.properties.Pt}</th>
                                                </tr>
                                                <tr>
                                                    <td>Ort:</td>
                                                    <td>{f.properties.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Ost:</td>
                                                    <td>{f.properties.E}</td>
                                                </tr>
                                                <tr>
                                                    <td>Nord:</td>
                                                    <td>{f.properties.N}</td>
                                                </tr>
                                                <tr>
                                                    <td>Höhe:</td>
                                                    <td>{f.properties.H}</td>
                                                </tr>
                                            </table>
                                        </Popup>
                                        <Tooltip permanent className='tooltip' direction='left'>{f.properties.Pt}</Tooltip>
                                    </Marker>
                                ))}
                            </LayerGroup>
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name={`<img src=${atel} /> Atelier`}>
                            <LayerGroup>
                                {atelier.map(f => (
                                    <Marker key={f.properties.Pt}
                                        icon={atelIcon}
                                        position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                        <Popup position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                            <table>
                                                <tr>
                                                    <th>Nummer:</th>
                                                    <th>{f.properties.Pt}</th>
                                                </tr>
                                                <tr>
                                                    <td>Ort:</td>
                                                    <td>{f.properties.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Ost:</td>
                                                    <td>{f.properties.E}</td>
                                                </tr>
                                                <tr>
                                                    <td>Nord:</td>
                                                    <td>{f.properties.N}</td>
                                                </tr>
                                                <tr>
                                                    <td>Höhe:</td>
                                                    <td>{f.properties.H}</td>
                                                </tr>
                                            </table>
                                        </Popup>
                                        <Tooltip permanent className='tooltip' direction='left'>{f.properties.Pt}</Tooltip>
                                    </Marker>
                                ))}
                            </LayerGroup>
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name={`<img src=${dachic} /> Dach`}>
                            <LayerGroup>
                                {dach.map(f => (
                                    <Marker key={f.properties.Pt}
                                        icon={dachIcon}
                                        position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                        <Popup position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                            <table>
                                                <tr>
                                                    <th>Nummer:</th>
                                                    <th>{f.properties.Pt}</th>
                                                </tr>
                                                <tr>
                                                    <td>Ort:</td>
                                                    <td>{f.properties.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Ost:</td>
                                                    <td>{f.properties.E}</td>
                                                </tr>
                                                <tr>
                                                    <td>Nord:</td>
                                                    <td>{f.properties.N}</td>
                                                </tr>
                                                <tr>
                                                    <td>Höhe:</td>
                                                    <td>{f.properties.H}</td>
                                                </tr>
                                            </table>
                                        </Popup>
                                        <Tooltip permanent className='tooltip' direction='left'>{f.properties.Pt}</Tooltip>
                                    </Marker>
                                ))}
                            </LayerGroup>
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name={`<img src=${monico} /> Monitoring`} checked>
                            <LayerGroup>
                                {moni.map(f => (
                                    <Marker key={f.properties.Pt}
                                        icon={monIcon}
                                        position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                        <Popup position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                            <table>
                                                <tr>
                                                    <th>Nummer:</th>
                                                    <th>{f.properties.Pt}</th>
                                                </tr>
                                                <tr>
                                                    <td>Ort:</td>
                                                    <td>{f.properties.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Ost:</td>
                                                    <td>{f.properties.E}</td>
                                                </tr>
                                                <tr>
                                                    <td>Nord:</td>
                                                    <td>{f.properties.N}</td>
                                                </tr>
                                                <tr>
                                                    <td>Höhe:</td>
                                                    <td>{f.properties.H}</td>
                                                </tr>
                                            </table>
                                        </Popup>
                                        <Tooltip permanent className='tooltip' direction='left'>{f.properties.Pt}</Tooltip>
                                    </Marker>
                                ))}
                            </LayerGroup>
                        </LayersControl.Overlay>
                        <LayersControl.Overlay name={`<img src=${agnesico} /> AGNES`}>
                            <LayerGroup>
                                {agnes.map(f => (
                                    <Marker key={f.properties.Pt}
                                        icon={agnIcon}
                                        position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                        <Popup position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}>
                                            <table>
                                                <tr>
                                                    <th>Nummer:</th>
                                                    <th>{f.properties.Pt}</th>
                                                </tr>
                                                <tr>
                                                    <td>Ort:</td>
                                                    <td>{f.properties.type}</td>
                                                </tr>
                                                <tr>
                                                    <td>Ost:</td>
                                                    <td>{f.properties.E}</td>
                                                </tr>
                                                <tr>
                                                    <td>Nord:</td>
                                                    <td>{f.properties.N}</td>
                                                </tr>
                                                <tr>
                                                    <td>Höhe:</td>
                                                    <td>{f.properties.H}</td>
                                                </tr>
                                            </table>
                                        </Popup>
                                        <Tooltip permanent className='tooltip' direction='left'>{f.properties.Pt}</Tooltip>
                                    </Marker>
                                ))}
                            </LayerGroup>
                        </LayersControl.Overlay>
                </LayersControl>
            </MapContainer>
        </div>
    )
}
