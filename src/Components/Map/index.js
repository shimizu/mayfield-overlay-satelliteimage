import React, {useState,  useEffect } from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';

import { renderLayers } from "./RenderLayers";


import { Card, Slider, RangeSlider } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import "./index.css";

// 背景マップに使用するMapboxのトークン設定
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

// 初期ビューポートの設定
const INITIAL_VIEW_STATE = {
    latitude: 36.74350043650523,
    longitude: -88.63633563734433,
    zoom: 16
};

const UIStyle = {
    zIndex: 9,
    top:80,    
}

function Map() {
    const [viwState, setViewState] = useState(INITIAL_VIEW_STATE)

    const [value, setValue] = useState(100);

    const onChange = (value) => {
        setValue(value)
    }

    return (
        <div>
            <div className="header">
                <div className="title">
                    <h1>Mayfield, Kentucky 2021-12-11 Satelite:WV03_VNIR(Maxar)</h1>
                </div>
                <div className="slider">
                    <Card interactive={true} style={UIStyle} >
                        <p><b>Opacity</b></p>
                        <Slider
                            min={0}
                            max={100}
                            stepSize={1}
                            labelStepSize={20}
                            onChange={onChange}
                            value={value}
                        />
                    </Card>
                </div>

            </div>
            <DeckGL
                initialViewState={viwState}
                controller={true}
                layers={renderLayers({ value })}
                //onViewStateChange={v => console.log(v.viewState)}
            >
                <StaticMap
                    mapStyle="mapbox://styles/mapbox/satellite-v9"
                    mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
                />
            </DeckGL>
        </div>
    );
}

export default Map;