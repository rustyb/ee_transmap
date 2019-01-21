{
    "version":8,
    "name":"entsoe-map",
    "metadata": {
        "mapbox:autocomposite":true,
        "mapbox:groups": {
            "1444850762048.5845": {
                "name": "Water labels", "collapsed": true
            }
            ,
            "1444850923457.5469": {
                "name": "Water", "collapsed": true
            }
            ,
            "1444850900520.0022": {
                "name": "Tunnels", "collapsed": true
            }
            ,
            "1444850775955.1606": {
                "name": "POI labels", "collapsed": true
            }
            ,
            "1444850752066.192": {
                "name": "Place labels", "collapsed": true
            }
            ,
            "1444850948248.0754": {
                "name": "Hillshades", "collapsed": true
            }
            ,
            "1444850913245.3801": {
                "name": "Aeroways", "collapsed": true
            }
            ,
            "1444850808863.985": {
                "name": "Road labels", "collapsed": true
            }
            ,
            "1444850892815.3088": {
                "name": "Roads", "collapsed": true
            }
            ,
            "1444850928470.7239": {
                "name": "Buildings", "collapsed": true
            }
            ,
            "1444850885718.7302": {
                "name": "Bridges", "collapsed": true
            }
            ,
            "1444850963394.812": {
                "name": "Landuses", "collapsed": true
            }
            ,
            "1444850654682.7075": {
                "name": "Marine labels", "collapsed": true
            }
            ,
            "1444850820682.8682": {
                "name": "Admin boundaries", "collapsed": true
            }
            ,
            "1444850621704.1523": {
                "name": "Country/State labels", "collapsed": true
            }
            ,
            "1444850874198.7793": {
                "name": "Shields", "collapsed": true
            }
            ,
            "1444850853666.2222": {
                "name": "Waterway labels", "collapsed": true
            }
            ,
            "1444850978189.4492": {
                "name": "Landcovers", "collapsed": true
            }
        }
    }
    ,
    "center":[11.035818336456344,
    47.21865728558075],
    "zoom":3.665046620556277,
    "bearing":0,
    "pitch":0,
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7", "type": "vector"
        }
        ,
        "mapbox://entsoe.dzotpozu": {
            "url": "mapbox://entsoe.dzotpozu", "type": "vector"
        }
    }
    ,
    "sprite":"mapbox://sprites/entsoe/cimn76g7t0040d2np7woiqswj",
    "glyphs":"mapbox://fonts/entsoe/{fontstack}/{range}.pbf",
    "layers":[ {
        "id":"background",
        "type":"background",
        "layout": {
            "visibility": "visible"
        }
        ,
        "paint": {
            "background-color": "#eee"
        }
        ,
        "interactive":true
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850978189.4492"
        }
        ,
        "filter":["==",
        "class",
        "snow"],
        "type":"fill",
        "source":"composite",
        "id":"landcover_snow",
        "paint": {
            "fill-color": "#fff", "fill-opacity": 0.5
        }
        ,
        "source-layer":"landcover"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850978189.4492"
        }
        ,
        "filter":["==",
        "class",
        "crop"],
        "type":"fill",
        "source":"composite",
        "id":"landcover_crop",
        "paint": {
            "fill-color": "#ececec", "fill-opacity": 0.5
        }
        ,
        "source-layer":"landcover"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850978189.4492"
        }
        ,
        "filter":["==",
        "class",
        "grass"],
        "type":"fill",
        "source":"composite",
        "id":"landcover_grass",
        "paint": {
            "fill-color": "#e5e5e5", "fill-opacity": 0.5
        }
        ,
        "source-layer":"landcover"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850978189.4492"
        }
        ,
        "filter":["==",
        "class",
        "scrub"],
        "type":"fill",
        "source":"composite",
        "id":"landcover_scrub",
        "paint": {
            "fill-color": "#e3e3e3", "fill-opacity": 0.5
        }
        ,
        "source-layer":"landcover"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850978189.4492"
        }
        ,
        "filter":["==",
        "class",
        "wood"],
        "type":"fill",
        "source":"composite",
        "id":"landcover_wood",
        "paint": {
            "fill-color": "#dcdcdc", "fill-opacity": 0.5
        }
        ,
        "source-layer":"landcover"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850963394.812"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "Polygon"],
        ["==",
        "class",
        "industrial"]],
        "type":"fill",
        "source":"composite",
        "id":"landuse_industrial",
        "paint": {
            "fill-color": "#fff", "fill-opacity": 0.5
        }
        ,
        "source-layer":"landuse"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850963394.812"
        }
        ,
        "filter":["==",
        "class",
        "park"],
        "type":"fill",
        "source":"composite",
        "id":"landuse_park",
        "paint": {
            "fill-color": "#e4e4e4"
        }
        ,
        "source-layer":"landuse"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850963394.812"
        }
        ,
        "filter":["==",
        "class",
        "national_park"],
        "type":"fill",
        "source":"composite",
        "id":"landuse_overlay_national_park",
        "paint": {
            "fill-color": "#e4e4e4"
        }
        ,
        "source-layer":"landuse_overlay"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850963394.812"
        }
        ,
        "filter":["==",
        "class",
        "wood"],
        "type":"fill",
        "source":"composite",
        "id":"landuse_wood",
        "paint": {
            "fill-color": "#e0e0e0"
        }
        ,
        "source-layer":"landuse"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850948248.0754"
        }
        ,
        "filter":["==",
        "level",
        94],
        "type":"fill",
        "source":"composite",
        "id":"hillshade_highlight_bright",
        "paint": {
            "fill-color":"#fff",
            "fill-opacity": {
                "base": 1, "stops": [[15, 0.15], [17, 0.05]]
            }
        }
        ,
        "source-layer":"hillshade"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850948248.0754"
        }
        ,
        "filter":["==",
        "level",
        90],
        "type":"fill",
        "source":"composite",
        "id":"hillshade_highlight_med",
        "paint": {
            "fill-color":"#fff",
            "fill-opacity": {
                "base": 1, "stops": [[15, 0.15], [17, 0.05]]
            }
        }
        ,
        "source-layer":"hillshade"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850948248.0754"
        }
        ,
        "filter":["==",
        "level",
        89],
        "type":"fill",
        "source":"composite",
        "id":"hillshade_shadow_faint",
        "paint": {
            "fill-color":"#666",
            "fill-opacity": {
                "base": 1, "stops": [[14, 0.06], [17, 0.01]]
            }
        }
        ,
        "source-layer":"hillshade"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850948248.0754"
        }
        ,
        "filter":["==",
        "level",
        78],
        "type":"fill",
        "source":"composite",
        "id":"hillshade_shadow_med",
        "paint": {
            "fill-color":"#666",
            "fill-opacity": {
                "base": 1, "stops": [[14, 0.06], [17, 0.01]]
            }
        }
        ,
        "source-layer":"hillshade"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850948248.0754"
        }
        ,
        "filter":["==",
        "level",
        67],
        "type":"fill",
        "source":"composite",
        "id":"hillshade_shadow_dark",
        "paint": {
            "fill-color":"#888888",
            "fill-opacity": {
                "base": 1, "stops": [[14, 0.06], [17, 0.01]]
            }
        }
        ,
        "source-layer":"hillshade"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850948248.0754"
        }
        ,
        "filter":["==",
        "level",
        56],
        "type":"fill",
        "source":"composite",
        "id":"hillshade_shadow_extreme",
        "paint": {
            "fill-color":"#999",
            "fill-opacity": {
                "base": 1, "stops": [[14, 0.06], [17, 0.01]]
            }
        }
        ,
        "source-layer":"hillshade"
    }
    ,
    {
        "id":"building",
        "type":"fill",
        "source":"composite",
        "source-layer":"building",
        "minzoom":15,
        "paint": {
            "fill-outline-color":"#c0c0c0",
            "fill-opacity": {
                "base": 1, "stops": [[15, 0], [16.5, 1]]
            }
            ,
            "fill-antialias":true,
            "fill-color":"#cbcbcb"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850928470.7239"
        }
        ,
        "interactive":true
    }
    ,
    {
        "id":"waterway",
        "type":"line",
        "source":"composite",
        "source-layer":"waterway",
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["in",
        "class",
        "river",
        "canal"]],
        "paint": {
            "line-color":"#d6d6d6",
            "line-width": {
                "base": 1, "stops": [[6, 0.25], [20, 6]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850923457.5469"
        }
        ,
        "interactive":true
    }
    ,
    {
        "id":"waterway_stream",
        "type":"line",
        "source":"composite",
        "source-layer":"waterway",
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["==",
        "class",
        "stream"]],
        "paint": {
            "line-color":"#d6d6d6",
            "line-width": {
                "base": 1, "stops": [[13, 0.75], [20, 4]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850923457.5469"
        }
        ,
        "interactive":true
    }
    ,
    {
        "id":"water",
        "type":"fill",
        "source":"composite",
        "source-layer":"water",
        "layout": {
            "visibility": "visible"
        }
        ,
        "paint": {
            "fill-color": "#d6d6d6"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850923457.5469"
        }
        ,
        "interactive":true
    }
    ,
    {
        "interactive":true,
        "layout": {
            "line-join": "miter", "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850913245.3801"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["==",
        "type",
        "runway"]],
        "type":"line",
        "source":"composite",
        "id":"aeroway_runway",
        "paint": {
            "line-width": {
                "base": 1.15, "stops": [[11, 3], [20, 32]]
            }
            ,
            "line-color":"#fff",
            "line-opacity": {
                "base": 1, "stops": [[9, 0.5], [11, 1]]
            }
        }
        ,
        "source-layer":"aeroway"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "line-join": "miter"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850913245.3801"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["==",
        "type",
        "taxiway"]],
        "type":"line",
        "source":"composite",
        "id":"aeroway_taxiway",
        "paint": {
            "line-width": {
                "base": 1.15, "stops": [[10, 0.25], [11, 1], [20, 8]]
            }
            ,
            "line-color":"#fff"
        }
        ,
        "source-layer":"aeroway"
    }
    ,
    {
        "id":"tunnel_minor",
        "type":"line",
        "source":"composite",
        "source-layer":"road",
        "filter":["all",
        ["==",
        "structure",
        "tunnel"],
        ["in",
        "class",
        "motorway_link",
        "street",
        "street_limited",
        "service",
        "path"]],
        "paint": {
            "line-color":"#efefef",
            "line-width": {
                "base": 1.55, "stops": [[4, 0.25], [20, 20]]
            }
            ,
            "line-dasharray":[0.36,
            0.18]
        }
        ,
        "metadata": {
            "mapbox:group": "1444850900520.0022"
        }
        ,
        "interactive":true
    }
    ,
    {
        "id":"tunnel_major",
        "type":"line",
        "source":"composite",
        "source-layer":"road",
        "filter":["all",
        ["==",
        "structure",
        "tunnel"],
        ["in",
        "class",
        "motorway",
        "primary",
        "secondary",
        "tertiary",
        "motorway_link",
        "primary_link",
        "secondary_link",
        "tertiary_link"]],
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.4, "stops": [[6, 0.5], [20, 30]]
            }
            ,
            "line-dasharray":[0.28,
            0.14]
        }
        ,
        "metadata": {
            "mapbox:group": "1444850900520.0022"
        }
        ,
        "interactive":true
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["==",
        "class",
        "path"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]],
        "type":"line",
        "source":"composite",
        "id":"road-path",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1, "stops": [[15, 1], [18, 4]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["all",
        ["in",
        "class",
        "street",
        "street_limited"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]]],
        "type":"line",
        "source":"composite",
        "id":"road-street-low-zoom",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[12.5, 0.5], [14, 2], [18, 18]]
            }
            ,
            "line-opacity": {
                "base": 1, "stops": [[11.5, 0], [12, 1]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["==",
        "class",
        "service"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]],
        "type":"line",
        "source":"composite",
        "id":"road-service-driveway",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1, "stops": [[14, 0.5], [18, 12]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["==",
        "class",
        "motorway_link"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]],
        "type":"line",
        "source":"composite",
        "id":"road-motorway_link",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[12.5, 0.5], [14, 2], [18, 18]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["all",
        ["==",
        "class",
        "street_limited"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]]],
        "type":"line",
        "source":"composite",
        "id":"road-street_limited",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[12.5, 0.5], [14, 2], [18, 18]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "minzoom":14,
        "layout": {
            "line-cap": "round", "line-join": "round", "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["all",
        ["==",
        "class",
        "street"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]]],
        "type":"line",
        "source":"composite",
        "id":"road-street",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[12.5, 0.3], [14, 2], [18, 18]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "line-cap": "round", "line-join": "round", "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["all",
        ["in",
        "class",
        "primary",
        "primary_link"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]]],
        "type":"line",
        "source":"composite",
        "id":"road-primary",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[6, 0.5], [18, 26]]
            }
            ,
            "line-opacity": {
                "base": 1, "stops": [[5, 0], [5.5, 1]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "line-cap": "round", "line-join": "round", "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["all",
        ["in",
        "class",
        "secondary_link",
        "secondary",
        "tertiary",
        "tertiary_link"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]]],
        "type":"line",
        "source":"composite",
        "id":"road-secondary-tertiary",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[6, 0.2], [18, 20]]
            }
            ,
            "line-opacity": {
                "base": 1, "stops": [[5, 0], [5.5, 1]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "line-cap": "round", "line-join": "round", "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["!in",
        "structure",
        "bridge",
        "tunnel"],
        ["==",
        "class",
        "trunk"]],
        "type":"line",
        "source":"composite",
        "id":"road-trunk",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[5, 0.75], [18, 32]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "line-cap": "round", "line-join": "round", "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["==",
        "class",
        "motorway"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]],
        "type":"line",
        "source":"composite",
        "id":"road-motorway",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[5, 0.75], [18, 32]]
            }
            ,
            "line-opacity": {
                "base": 1, "stops": [[5, 0], [5.5, 1]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "minzoom":13,
        "layout": {
            "line-cap": "round", "line-join": "round", "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["in",
        "class",
        "major_rail",
        "minor_rail"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]],
        "type":"line",
        "source":"composite",
        "id":"road-rail",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[14, 0.5], [20, 1]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "minzoom":13,
        "layout": {
            "line-cap": "butt", "line-join": "miter", "visibility": "visible"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850892815.3088"
        }
        ,
        "filter":["all",
        ["in",
        "class",
        "major_rail",
        "minor_rail"],
        ["!in",
        "structure",
        "bridge",
        "tunnel"]],
        "type":"line",
        "source":"composite",
        "id":"road-rail-tracks",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[14, 4], [20, 8]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "id":"bridge_minor_case",
        "type":"line",
        "source":"composite",
        "source-layer":"road",
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["in",
        "class",
        "street",
        "street_limited",
        "service",
        "path",
        "pedestrian",
        "track",
        "link"]],
        "paint": {
            "line-color":"#eee",
            "line-width": {
                "base": 1.6, "stops": [[12, 0.5], [20, 10]]
            }
            ,
            "line-gap-width": {
                "base": 1.55, "stops": [[4, 0.25], [20, 20]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "interactive":true
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["==",
        "class",
        "path"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-path",
        "paint": {
            "line-color":"#efefef",
            "line-width": {
                "base": 1.5, "stops": [[15, 1], [18, 4]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "minzoom":11,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "maxzoom":14.1,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["in",
        "class",
        "street",
        "street_limited",
        "service",
        "path",
        "pedestrian",
        "track",
        "link"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-street-low-zoom",
        "paint": {
            "line-color":"#efefef",
            "line-width": {
                "base": 1.5, "stops": [[12.5, 0.5], [14, 2], [18, 18]]
            }
            ,
            "line-opacity": {
                "base": 1, "stops": [[11.5, 0], [12, 1]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "minzoom":10,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["==",
        "class",
        "motorway_link"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-motorway_link",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[12.5, 0.5], [14, 2], [18, 18]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "minzoom":14,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["in",
        "class",
        "street",
        "street_limited",
        "service",
        "path",
        "pedestrian",
        "track",
        "link"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-street_limited",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[12.5, 0.5], [14, 2], [18, 18]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "minzoom":14,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["==",
        "class",
        "street"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-street",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[12.5, 0.5], [14, 2], [18, 18]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["!=",
        "class",
        "trunk"],
        ["in",
        "class",
        "primary",
        "primary_link"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-primary",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[6, 0.5], [18, 26]]
            }
            ,
            "line-opacity": {
                "base": 1, "stops": [[5, 0], [5.5, 1]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["in",
        "primary",
        "secondary",
        "tertiary",
        "secondary_link",
        "tertiary_link"],
        ["!=",
        "class",
        "trunk"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-secondary-tertiary",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[6, 0.2], [18, 20]]
            }
            ,
            "line-opacity": {
                "base": 1, "stops": [[5, 0], [5.5, 1]]
            }
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["==",
        "class",
        "trunk"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-trunk",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1, "stops": [[3, 0.5], [9, 1.25], [20, 10]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["==",
        "class",
        "motorway"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-motorway",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1, "stops": [[3, 0.5], [9, 1.25], [20, 10]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "minzoom":13,
        "layout": {
            "visibility": "visible", "line-cap": "butt", "line-join": "miter", "line-round-limit": 2
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["in",
        "class",
        "major_rail",
        "minor_rail"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-rail",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[14, 0.5], [20, 1]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "minzoom":14,
        "layout": {
            "visibility": "visible", "line-cap": "butt", "line-join": "miter", "line-round-limit": 2
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["in",
        "class",
        "major_rail",
        "minor_rail"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-rail-tracks",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[14, 4], [20, 8]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "minzoom":14,
        "layout": {
            "visibility": "visible", "line-cap": "butt", "line-join": "miter", "line-round-limit": 2
        }
        ,
        "metadata": {
            "mapbox:group": "1444850885718.7302"
        }
        ,
        "filter":["all",
        ["==",
        "structure",
        "bridge"],
        ["==",
        "class",
        "aerialway"]],
        "type":"line",
        "source":"composite",
        "id":"bridge-aerialway",
        "paint": {
            "line-color":"#fff",
            "line-width": {
                "base": 1.5, "stops": [[14, 0.5], [20, 1]]
            }
            ,
            "line-opacity":1
        }
        ,
        "source-layer":"road"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-join": "bevel"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850820682.8682"
        }
        ,
        "filter":["all",
        [">=",
        "admin_level",
        3],
        ["==",
        "maritime",
        0]],
        "type":"line",
        "source":"composite",
        "id":"admin-3-4-boundaries-bg",
        "paint": {
            "line-width": {
                "base": 1, "stops": [[3, 3.5], [12, 6]]
            }
            ,
            "line-opacity": {
                "base": 1, "stops": [[2, 0], [5, 0.75]]
            }
            ,
            "line-color":"#fff"
        }
        ,
        "source-layer":"admin"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-join": "miter"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850820682.8682"
        }
        ,
        "filter":["all",
        ["==",
        "admin_level",
        2],
        ["==",
        "maritime",
        0]],
        "type":"line",
        "source":"composite",
        "id":"admin-2-boundaries-bg",
        "paint": {
            "line-color":"#fff",
            "line-opacity": {
                "base": 1, "stops": [[3, 0], [4, 0.75]]
            }
            ,
            "line-width": {
                "base": 1, "stops": [[2, 3.5], [10, 10]]
            }
        }
        ,
        "source-layer":"admin"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-join": "miter"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850820682.8682"
        }
        ,
        "filter":["all",
        [">=",
        "admin_level",
        3],
        ["==",
        "maritime",
        0],
        ["==",
        "disputed",
        0]],
        "type":"line",
        "source":"composite",
        "id":"admin-3-4-boundaries",
        "paint": {
            "line-color":"#b5b5b5",
            "line-opacity": {
                "base": 1, "stops": [[2, 0], [3, 1]]
            }
            ,
            "line-width": {
                "base": 1, "stops": [[3, 0.5], [12, 2]]
            }
            ,
            "line-dasharray": {
                "base": 1, "stops": [[4, [2, 0]], [5, [2, 2, 6, 2]]]
            }
        }
        ,
        "source-layer":"admin"
    }
    ,
    {
        "interactive":true,
        "minzoom":1,
        "layout": {
            "visibility": "visible", "line-join": "round", "line-cap": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850820682.8682"
        }
        ,
        "filter":["all",
        ["==",
        "admin_level",
        2],
        ["==",
        "maritime",
        0],
        ["==",
        "disputed",
        1]],
        "type":"line",
        "source":"composite",
        "id":"admin-disputed",
        "paint": {
            "line-color":"#c0c0c0",
            "line-opacity":1,
            "line-width": {
                "base": 1, "stops": [[3, 0.5], [10, 2]]
            }
            ,
            "line-dasharray":[1,
            1.5]
        }
        ,
        "source-layer":"admin"
    }
    ,
    {
        "interactive":true,
        "minzoom":1,
        "layout": {
            "visibility": "visible", "line-join": "round", "line-cap": "round"
        }
        ,
        "metadata": {
            "mapbox:group": "1444850820682.8682"
        }
        ,
        "filter":["all",
        ["==",
        "admin_level",
        2],
        ["==",
        "maritime",
        0],
        ["==",
        "disputed",
        0]],
        "type":"line",
        "source":"composite",
        "id":"admin-2-boundaries",
        "paint": {
            "line-color":"#c0c0c0",
            "line-opacity":1,
            "line-width": {
                "base": 1, "stops": [[3, 0.5], [10, 2]]
            }
        }
        ,
        "source-layer":"admin"
    }
    ,
    {
        "interactive":true,
        "minzoom":12,
        "layout": {
            "text-font":["DIN Offc Pro Italic",
            "Arial Unicode MS Regular"],
            "visibility":"visible",
            "symbol-placement":"line",
            "text-field":"{name_en}",
            "text-size": {
                "base": 1, "stops": [[13, 12], [18, 16]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850853666.2222"
        }
        ,
        "filter":["==",
        "class",
        "river"],
        "type":"symbol",
        "source":"composite",
        "id":"waterway-label",
        "paint": {
            "text-color": "#929292"
        }
        ,
        "source-layer":"waterway_label"
    }
    ,
    {
        "interactive":true,
        "minzoom":12,
        "layout": {
            "symbol-placement":"line",
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Bold"],
            "text-transform":"none",
            "text-letter-spacing":0,
            "text-padding":0,
            "text-size": {
                "base": 1, "stops": [[8, 8], [20, 15]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850808863.985"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["!in",
        "class",
        "motorway",
        "primary",
        "secondary",
        "tertiary",
        "street_limited",
        "street",
        "ferry"]],
        "type":"symbol",
        "source":"composite",
        "id":"road-label-sm",
        "paint": {
            "text-halo-color": "#fff", "text-halo-width": 2, "text-color": "#929292"
        }
        ,
        "source-layer":"road_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "symbol-placement":"line",
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Bold"],
            "text-transform":"none",
            "text-letter-spacing":0,
            "text-padding":0,
            "text-size": {
                "base": 1, "stops": [[8, 8], [20, 16]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850808863.985"
        }
        ,
        "filter":["in",
        "class",
        "street",
        "street_limited"],
        "type":"symbol",
        "source":"composite",
        "id":"road-label-med",
        "paint": {
            "text-halo-color": "#fff", "text-halo-width": 2, "text-color": "#929292"
        }
        ,
        "source-layer":"road_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "symbol-placement":"line",
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Bold"],
            "text-transform":"none",
            "text-letter-spacing":0,
            "text-padding":0,
            "text-size": {
                "base": 1, "stops": [[8, 8], [20, 17]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850808863.985"
        }
        ,
        "filter":["in",
        "class",
        "motorway",
        "primary",
        "secondary",
        "tertiary"],
        "type":"symbol",
        "source":"composite",
        "id":"road-label-large",
        "paint": {
            "text-halo-color": "#fff", "text-halo-width": 2, "text-color": "#929292"
        }
        ,
        "source-layer":"road_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "visibility":"visible",
            "text-field":"{name_en}",
            "text-max-width":9,
            "text-size": {
                "base": 1, "stops": [[10, 10], [18, 18]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850775955.1606"
        }
        ,
        "type":"symbol",
        "source":"composite",
        "id":"airport-label",
        "paint": {
            "text-color": "#666", "text-halo-color": "#fff", "text-halo-width": 1, "text-halo-blur": 0
        }
        ,
        "source-layer":"airport_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-max-width":8,
            "visibility":"visible",
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Regular",
            "Arial Unicode MS Regular"],
            "text-size": {
                "base": 1, "stops": [[10, 10], [18, 14]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850775955.1606"
        }
        ,
        "filter":["all",
        ["==",
        "maki",
        "park"],
        ["<=",
        "scalerank",
        1]],
        "type":"symbol",
        "source":"composite",
        "id":"poi-parks-scalerank1",
        "paint": {
            "text-color": "#4f4f4f", "text-halo-color": "#fff", "text-halo-width": 1
        }
        ,
        "source-layer":"poi_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-max-width":8,
            "visibility":"visible",
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Regular",
            "Arial Unicode MS Regular"],
            "text-size": {
                "base": 1, "stops": [[10, 10], [18, 14]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850775955.1606"
        }
        ,
        "filter":["all",
        ["!in",
        "maki",
        "rail-light",
        "rail-metro",
        "airfield",
        "heliport",
        "rocket",
        "park",
        "golf",
        "cemetery",
        "zoo",
        "campsite",
        "swimming",
        "dog-park"],
        ["<=",
        "scalerank",
        1]],
        "type":"symbol",
        "source":"composite",
        "id":"poi-scalerank1",
        "paint": {
            "text-color": "#5a5a5a", "text-halo-color": "#fff", "text-halo-width": 1
        }
        ,
        "source-layer":"poi_label"
    }
    ,
    {
        "interactive":true,
        "minzoom":5,
        "layout": {
            "text-font":["DIN Offc Pro Italic",
            "Arial Unicode MS Regular"],
            "visibility":"visible",
            "text-field":"{name_en}",
            "text-max-width":7,
            "text-size": {
                "base": 1, "stops": [[13, 12], [18, 16]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850762048.5845"
        }
        ,
        "type":"symbol",
        "source":"composite",
        "id":"water-label",
        "paint": {
            "text-color": {
                "base": 1, "stops": [[0, "#929292"], [20, "#929292"]]
            }
        }
        ,
        "source-layer":"water_label"
    }
    ,
    {
        "interactive":true,
        "minzoom":12,
        "layout": {
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Bold",
            "Arial Unicode MS Bold"],
            "text-max-width":7,
            "text-letter-spacing":0.1,
            "text-transform":"uppercase",
            "text-size": {
                "stops": [[12, 10], [16, 14]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850752066.192"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "Point"],
        ["in",
        "type",
        "suburb",
        "neighbourhood"]],
        "type":"symbol",
        "source":"composite",
        "id":"place_label_neighborhood",
        "paint": {
            "text-color":"#666",
            "text-halo-color":"#fff",
            "text-halo-width":1,
            "text-halo-blur":1,
            "text-opacity": {
                "base": 1, "stops": [[0, 0], [12, 0.66], [13, 1]]
            }
        }
        ,
        "source-layer":"place_label"
    }
    ,
    {
        "interactive":true,
        "minzoom":8,
        "layout": {
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Regular",
            "Arial Unicode MS Bold"],
            "text-max-width":15,
            "text-size": {
                "stops": [[6, 10], [12, 13]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850752066.192"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "Point"],
        ["all",
        ["in",
        "type",
        "town",
        "village",
        "hamlet",
        "island",
        "islet",
        "archipelago"],
        ["in",
        "scalerank",
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8]]],
        "type":"symbol",
        "source":"composite",
        "id":"place_label_other",
        "paint": {
            "text-color": "#666", "text-halo-color": "#fff", "text-halo-width": 1, "text-halo-blur": 1
        }
        ,
        "source-layer":"place_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Bold"],
            "text-max-width":10,
            "text-anchor": {
                "base": 1, "stops": [[0, "top"], [6, "center"]]
            }
            ,
            "text-offset": {
                "base": 1, "stops": [[0, [0, 0.1]], [6, [0, 0]]]
            }
            ,
            "text-size": {
                "stops": [[6, 11], [14, 19]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850752066.192"
        }
        ,
        "maxzoom":16,
        "filter":["all",
        ["==",
        "type",
        "city"],
        [">",
        "scalerank",
        4],
        ["in",
        "ldir",
        "S",
        "E",
        "SE",
        "SW"]],
        "type":"symbol",
        "source":"composite",
        "id":"place_label_city_small_s",
        "paint": {
            "text-color": "#666", "text-halo-color": "#fff", "text-halo-width": 1.5, "text-halo-blur": 0
        }
        ,
        "source-layer":"place_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Bold"],
            "text-max-width":10,
            "text-anchor": {
                "base": 1, "stops": [[0, "bottom"], [6, "center"]]
            }
            ,
            "text-offset": {
                "base": 1, "stops": [[0, [0, -0.2]], [6, [0, 0]]]
            }
            ,
            "text-size": {
                "stops": [[6, 11], [14, 19]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850752066.192"
        }
        ,
        "maxzoom":16,
        "filter":["all",
        ["==",
        "type",
        "city"],
        [">",
        "scalerank",
        4],
        ["in",
        "ldir",
        "N",
        "W",
        "NW",
        "NE"]],
        "type":"symbol",
        "source":"composite",
        "id":"place_label_city_small_n",
        "paint": {
            "text-color": "#666", "text-halo-color": "#fff", "text-halo-width": 1.5, "text-halo-blur": 0
        }
        ,
        "source-layer":"place_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Bold"],
            "text-max-width":10,
            "text-anchor": {
                "base": 1, "stops": [[0, "top"], [6, "center"]]
            }
            ,
            "text-offset": {
                "base": 1, "stops": [[0, [0, 0.1]], [6, [0, 0]]]
            }
            ,
            "text-size": {
                "stops": [[5, 11], [12, 19]], "base": 0.9
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850752066.192"
        }
        ,
        "maxzoom":16,
        "filter":["all",
        ["==",
        "type",
        "city"],
        ["<=",
        "scalerank",
        4],
        [">",
        "scalerank",
        1],
        ["in",
        "ldir",
        "S",
        "E",
        "SE",
        "SW"]],
        "type":"symbol",
        "source":"composite",
        "id":"place_label_city_medium_s",
        "paint": {
            "text-color": "#666", "text-halo-color": "#fff", "text-halo-width": 1.5, "text-halo-blur": 0
        }
        ,
        "source-layer":"place_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Bold"],
            "text-max-width":10,
            "text-anchor": {
                "base": 1, "stops": [[0, "bottom"], [6, "center"]]
            }
            ,
            "text-offset": {
                "base": 1, "stops": [[0, [0, -0.2]], [6, [0, 0]]]
            }
            ,
            "text-size": {
                "stops": [[5, 11], [12, 19]], "base": 0.9
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850752066.192"
        }
        ,
        "maxzoom":16,
        "filter":["all",
        ["==",
        "type",
        "city"],
        ["<=",
        "scalerank",
        4],
        [">",
        "scalerank",
        1],
        ["in",
        "ldir",
        "N",
        "W",
        "NW",
        "NE"]],
        "type":"symbol",
        "source":"composite",
        "id":"place_label_city_medium_n",
        "paint": {
            "text-color": "#666", "text-halo-color": "#fff", "text-halo-width": 1.5, "text-halo-blur": 0
        }
        ,
        "source-layer":"place_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Bold",
            "Arial Unicode MS Bold"],
            "text-max-width":15,
            "text-transform":"none",
            "text-anchor": {
                "base": 1, "stops": [[0, "top"], [6, "center"]]
            }
            ,
            "text-offset": {
                "base": 1, "stops": [[0, [0, 0.1]], [6, [0, 0]]]
            }
            ,
            "text-size": {
                "stops": [[4, 11], [10, 20]], "base": 0.9
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850752066.192"
        }
        ,
        "maxzoom":16,
        "filter":["all",
        ["==",
        "type",
        "city"],
        ["<=",
        "scalerank",
        1],
        ["in",
        "ldir",
        "S",
        "SE",
        "SW",
        "E"]],
        "type":"symbol",
        "source":"composite",
        "id":"place_label_city_large_s",
        "paint": {
            "text-color": "#666", "text-halo-color": "#fff", "text-halo-width": 1.5, "text-halo-blur": 0
        }
        ,
        "source-layer":"place_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Bold",
            "Arial Unicode MS Bold"],
            "text-max-width":5,
            "text-transform":"none",
            "text-anchor": {
                "base": 1, "stops": [[0, "bottom"], [6, "center"]]
            }
            ,
            "text-offset": {
                "base": 1, "stops": [[0, [0, -0.2]], [6, [0, 0]]]
            }
            ,
            "symbol-avoid-edges":false,
            "text-size": {
                "stops": [[4, 11], [10, 20]], "base": 0.9
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850752066.192"
        }
        ,
        "maxzoom":16,
        "filter":["all",
        ["<=",
        "scalerank",
        1],
        ["in",
        "ldir",
        "N",
        "NE",
        "NW",
        "W"],
        ["==",
        "type",
        "city"]],
        "type":"symbol",
        "source":"composite",
        "id":"place_label_city_large_n",
        "paint": {
            "text-color": "#666", "text-halo-color": "#fff", "text-halo-width": 1.5, "text-halo-blur": 0
        }
        ,
        "source-layer":"place_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-max-width":8,
            "visibility":"visible",
            "symbol-placement":"point",
            "text-field":"{name_en}",
            "text-line-height":1.2,
            "text-letter-spacing":0.1,
            "text-font":["DIN Offc Pro Regular",
            "Arial Unicode MS Regular"],
            "text-size": {
                "base": 1, "stops": [[4, 12], [6, 16]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850654682.7075"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "Point"],
        ["in",
        "labelrank",
        4,
        5,
        6]],
        "type":"symbol",
        "source":"composite",
        "id":"marine_label_point_other",
        "paint": {
            "text-color": "#666", "text-opacity": 0.25
        }
        ,
        "source-layer":"marine_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-max-width":8,
            "visibility":"visible",
            "symbol-placement":"point",
            "text-field":"{name_en}",
            "text-line-height":1.3,
            "text-letter-spacing":0.1,
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "text-size": {
                "base": 1, "stops": [[3, 13], [5, 18]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850654682.7075"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "Point"],
        ["==",
        "labelrank",
        3]],
        "type":"symbol",
        "source":"composite",
        "id":"marine_label_point_3",
        "paint": {
            "text-color": "#666", "text-opacity": 0.25
        }
        ,
        "source-layer":"marine_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-max-width":8,
            "visibility":"visible",
            "symbol-placement":"point",
            "text-field":"{name_en}",
            "text-line-height":1.2,
            "text-letter-spacing":0,
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "text-size": {
                "base": 1, "stops": [[3, 14], [5, 24]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850654682.7075"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "Point"],
        ["==",
        "labelrank",
        2]],
        "type":"symbol",
        "source":"composite",
        "id":"marine_label_point_2",
        "paint": {
            "text-color": "#666", "text-opacity": 0.25
        }
        ,
        "source-layer":"marine_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-max-width":4,
            "visibility":"visible",
            "symbol-placement":"point",
            "text-field":"{name_en}",
            "text-line-height":1.5,
            "text-letter-spacing":0.25,
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "text-size": {
                "base": 1, "stops": [[1, 12], [4, 30]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850654682.7075"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "Point"],
        ["==",
        "labelrank",
        1]],
        "type":"symbol",
        "source":"composite",
        "id":"marine_label_point_1",
        "paint": {
            "text-color": "#666", "text-opacity": 0.25
        }
        ,
        "source-layer":"marine_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-max-width":15,
            "visibility":"visible",
            "symbol-placement":"line",
            "text-field":"{name_en}",
            "text-line-height":1.2,
            "text-letter-spacing":0,
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "text-size": {
                "base": 1, "stops": [[4, 12], [6, 16]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850654682.7075"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["in",
        "labelrank",
        4,
        5,
        6]],
        "type":"symbol",
        "source":"composite",
        "id":"marine_label_line_other",
        "paint": {
            "text-color": "#666", "text-opacity": 0.25
        }
        ,
        "source-layer":"marine_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-max-width":15,
            "visibility":"visible",
            "symbol-placement":"line",
            "text-field":"{name_en}",
            "text-line-height":1.2,
            "text-letter-spacing":0,
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "text-size": {
                "base": 1, "stops": [[3, 13], [5, 18]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850654682.7075"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["==",
        "labelrank",
        3]],
        "type":"symbol",
        "source":"composite",
        "id":"marine_label_line_3",
        "paint": {
            "text-color": "#666", "text-opacity": 0.25
        }
        ,
        "source-layer":"marine_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-max-width":15,
            "visibility":"visible",
            "symbol-placement":"line",
            "text-field":"{name_en}",
            "text-line-height":1.2,
            "text-letter-spacing":0,
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "text-size": {
                "base": 1, "stops": [[3, 14], [5, 24]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850654682.7075"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["==",
        "labelrank",
        2]],
        "type":"symbol",
        "source":"composite",
        "id":"marine_label_line_2",
        "paint": {
            "text-color": "#666", "text-opacity": 0.25
        }
        ,
        "source-layer":"marine_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-max-width":15,
            "visibility":"visible",
            "symbol-placement":"line",
            "text-field":"{name_en}",
            "text-line-height":1.2,
            "text-letter-spacing":0.4,
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "text-size": {
                "base": 1, "stops": [[3, 25], [4, 30]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850654682.7075"
        }
        ,
        "filter":["all",
        ["==",
        "$type",
        "LineString"],
        ["==",
        "labelrank",
        1]],
        "type":"symbol",
        "source":"composite",
        "id":"marine_label_line_1",
        "paint": {
            "text-color": "#666", "text-opacity": 0.25
        }
        ,
        "source-layer":"marine_label"
    }
    ,
    {
        "interactive":true,
        "minzoom":3,
        "layout": {
            "text-transform":"uppercase",
            "visibility":"visible",
            "text-field": {
                "base":1,
                "stops":[[0,
                "{abbr}"],
                [4,
                "{name_en}"]]
            }
            ,
            "text-font":["DIN Offc Pro Bold",
            "Arial Unicode MS Regular"],
            "text-letter-spacing":0.15,
            "text-max-width":7,
            "text-size": {
                "base": 1, "stops": [[4, 9], [7, 18]]
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850621704.1523"
        }
        ,
        "maxzoom":7,
        "filter":[">=",
        "area",
        80000],
        "type":"symbol",
        "source":"composite",
        "id":"state-label-lg",
        "paint": {
            "text-color": {
                "base": 1, "stops": [[0, "#929292"], [20, "#929292"]]
            }
        }
        ,
        "source-layer":"state_label"
    }
    ,
    {
        "interactive":true,
        "minzoom":1,
        "layout": {
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "text-max-width":7,
            "text-size": {
                "stops": [[3, 8], [9, 18]], "base": 0.9
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850621704.1523"
        }
        ,
        "maxzoom":10,
        "filter":[">=",
        "scalerank",
        5],
        "type":"symbol",
        "source":"composite",
        "id":"country-label-sm",
        "paint": {
            "text-color": {
                "base": 1, "stops": [[0, "#444"], [10, "#888"]]
            }
            ,
            "text-halo-color":"#fff",
            "text-halo-width":1,
            "text-halo-blur":1
        }
        ,
        "source-layer":"country_label"
    }
    ,
    {
        "interactive":true,
        "minzoom":1,
        "layout": {
            "text-field": {
                "base":1,
                "stops":[[0,
                "{code}"],
                [2,
                "{name_en}"]]
            }
            ,
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "text-max-width":7,
            "text-size": {
                "stops": [[2, 8], [7, 18]], "base": 0.9
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850621704.1523"
        }
        ,
        "maxzoom":8,
        "filter":["in",
        "scalerank",
        3,
        4],
        "type":"symbol",
        "source":"composite",
        "id":"country-label-md",
        "paint": {
            "text-color": {
                "base": 1, "stops": [[0, "#444"], [10, "#888"]]
            }
            ,
            "text-halo-color":"#fff",
            "text-halo-width":1,
            "text-halo-blur":1
        }
        ,
        "source-layer":"country_label"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-field":"{name_en}",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "text-max-width":6,
            "text-size": {
                "stops": [[1, 9], [5, 18]], "base": 0.9
            }
        }
        ,
        "metadata": {
            "mapbox:group": "1444850621704.1523"
        }
        ,
        "maxzoom":12,
        "filter":["in",
        "scalerank",
        1,
        2],
        "type":"symbol",
        "source":"composite",
        "id":"country-label-lg",
        "paint": {
            "text-color": {
                "base": 1, "stops": [[0, "#444"], [10, "#888"]]
            }
            ,
            "text-halo-color":"#fff",
            "text-halo-width":1,
            "text-halo-blur":1
        }
        ,
        "source-layer":"country_label"
    }
    ,
    {
        "interactive":true,
        "minzoom":3,
        "layout": {
            "visibility": "visible"
        }
        ,
        "filter":["all",
        ["in",
        "$type",
        "Polygon",
        "Point",
        "LineString"],
        ["==",
        "underground",
        1]],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"UC copy",
        "paint": {
            "line-color":"hsl(0, 0%, 67%)",
            "line-width": {
                "base": 1.25, "stops": [[3, 0.6], [6, 3], [7, 4], [22, 20]]
            }
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "butt", "line-join": "miter", "line-miter-limit": 0
        }
        ,
        "filter":["in",
        "symbol",
        "DC-Line Under Construction, 2 Circuits",
        "DC-Line, 2 Circuits"],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"dc multi",
        "paint": {
            "line-opacity": {
                "base": 1.5, "stops": [[3, 0], [7, 1]]
            }
            ,
            "line-width": {
                "base": 1.25, "stops": [[3, 0], [6, 0.8], [7, 6.8], [22, 10]]
            }
            ,
            "line-dasharray": {
                "base": 1, "stops": [[0, [0, 0]], [6, [0.15, 3]], [7, [0.2, 2]], [22, [0.15, 3]]]
            }
            ,
            "line-gap-width":0,
            "line-offset":0,
            "line-translate":[0,
            0],
            "line-color":"rgba(139,14,207,1)"
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "miter"
        }
        ,
        "filter":["in",
        "symbol",
        "DC-Line Under Construction, 1 Circuit",
        "DC-Line Under Construction, 2 Circuits",
        "DC-Line, 1 Circuit",
        "DC-Line, 2 Circuits",
        "DC-Line, 1 Circuit, underground"],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"DC Lines",
        "paint": {
            "line-color":"rgba(139,14,207,1)",
            "line-width": {
                "base": 1.25, "stops": [[0, 0.5], [6, 1.6], [10, 3], [22, 8]]
            }
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "miter"
        }
        ,
        "filter":["==",
        "symbol",
        "110"],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"110kV",
        "paint": {
            "line-color":"rgba(0,0,0,1)",
            "line-width": {
                "base": 1, "stops": [[0, 1], [7, 3]]
            }
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "butt", "line-join": "miter", "line-miter-limit": 0
        }
        ,
        "filter":["in",
        "symbol",
        "132-150 kV Transmission Line Under Construction, 2 Circuits",
        "132-150 kV Transmission Line, 2 Circuits",
        "132-150 kV Transmission Line, 2 Circuits, underground"],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"132kv Multi",
        "paint": {
            "line-opacity": {
                "base": 1, "stops": [[5, 0], [10, 1]]
            }
            ,
            "line-width": {
                "base": 1.25, "stops": [[3, 0], [6, 0.8], [7, 6.8], [22, 10]]
            }
            ,
            "line-dasharray": {
                "base": 1, "stops": [[0, [0, 0]], [6, [0.15, 3]], [7, [0.2, 2]], [22, [0.15, 3]]]
            }
            ,
            "line-gap-width":0,
            "line-offset":0,
            "line-translate":[0,
            0],
            "line-color":"rgba(0,0,0,1)"
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "id":"132kv Multi copy",
        "paint": {
            "line-opacity": {
                "base": 1, "stops": [[5, 0], [10, 1]]
            }
            ,
            "line-width": {
                "base": 1.25, "stops": [[3, 0], [6, 0.8], [7, 6.8], [22, 10]]
            }
            ,
            "line-dasharray": {
                "base": 1, "stops": [[0, [0, 0]], [6, [0.15, 3]], [7, [0.2, 2]], [22, [0.15, 3]]]
            }
            ,
            "line-gap-width":0,
            "line-offset":0,
            "line-translate":[0,
            0],
            "line-color":"rgba(0,0,0,1)"
        }
        ,
        "ref":"132kv Multi"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "miter"
        }
        ,
        "filter":["in",
        "symbol",
        "132-150 kV Transmission Line Under Construction, 1 Circuit",
        "132-150 kV Transmission Line Under Construction, 1 Circuit, underground",
        "132-150 kV Transmission Line, 1 Circuit",
        "132-150 kV Transmission Line, 2 Circuits",
        "132-150 kV Transmission Line, 1 Circuit, underground",
        "132-150 kV Transmission Line, 2 Circuits, underground",
        "Interconnection for Voltage < 200 kV, 1 Circuit",
        "Interconnection for Voltage < 200 kV, 2 Circuits"],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"132kV",
        "paint": {
            "line-color":"rgba(0,0,0,1)",
            "line-width": {
                "base": 1.25, "stops": [[0, 0.1], [7, 0.9], [22, 5]]
            }
            ,
            "line-opacity": {
                "base": 1, "stops": [[5, 0], [10, 1]]
            }
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "butt", "line-join": "miter", "line-miter-limit": 0
        }
        ,
        "filter":["in",
        "symbol",
        "220 kV Transmission Line Under Construction, 2 Circuits",
        "220 kV Transmission Line Under Construction, 2 Circuits, underground",
        "220 kV Transmission Line, 2 Circuits",
        "220 kV Transmission Line, 2 Circuits, underground",
        "220 kV Transmission Line, >= 3 Circuits"],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"220kV Multi",
        "paint": {
            "line-opacity": {
                "base": 1.5, "stops": [[3, 0], [7, 1]]
            }
            ,
            "line-width": {
                "base": 1.25, "stops": [[3, 0], [6, 0.8], [7, 6.8], [22, 10]]
            }
            ,
            "line-dasharray": {
                "base": 1, "stops": [[0, [0, 0]], [6, [0.15, 3]], [7, [0.2, 2]], [22, [0.15, 3]]]
            }
            ,
            "line-gap-width":0,
            "line-offset":0,
            "line-translate":[0,
            0],
            "line-color":"rgba(10,105,10,1)"
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "round", "line-join": "miter"
        }
        ,
        "filter":["in",
        "symbol",
        "220 kV Transmission Line, 1 Circuit",
        "220 kV Transmission Line, 2 Circuits",
        "220 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",
        "220 kV Transmission Line, >= 3 Circuits",
        "220 kV Transmission Line Under Construction, 1 Circuit",
        "220 kV Transmission Line Under Construction, 2 Circuits",
        "220 kV Transmission Line Under Construction, 2 Circuits, underground",
        "220 kV Transmission Line, 1 Circuit, underground",
        "220 kV Transmission Line Under Construction, 1 Circuit, underground",
        "220 kV Transmission Line, 2 Circuits, underground"],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"220kV",
        "paint": {
            "line-color":"rgba(10,105,10,1)",
            "line-width": {
                "base": 1.25, "stops": [[3, 0.5], [6, 1.1], [7, 2.2], [22, 6]]
            }
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "butt", "line-join": "miter", "line-miter-limit": 0
        }
        ,
        "filter":["in",
        "symbol",
        "300-330 kV Transmission Line Under Construction, 2 Circuits",
        "300-330 kV Transmission Line, 2 Circuits",
        "300-330 kV Transmission Line, >= 3 Circuits"],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"300-330kV Multi",
        "paint": {
            "line-opacity": {
                "base": 1.5, "stops": [[3, 0], [7, 1]]
            }
            ,
            "line-width": {
                "base": 1.25, "stops": [[3, 0], [6, 0.8], [7, 6.8], [22, 10]]
            }
            ,
            "line-dasharray": {
                "base": 1, "stops": [[0, [0, 0]], [6, [0.15, 3]], [7, [0.2, 2]], [22, [0.15, 3]]]
            }
            ,
            "line-gap-width":0,
            "line-offset":0,
            "line-translate":[0,
            0],
            "line-color":"rgba(224,140,22,1)"
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "filter":["all",
        ["in",
        "$type",
        "Polygon",
        "Point",
        "LineString"],
        ["in",
        "symbol",
        "300-330 kV Transmission Line Under Construction, 1 Circuit",
        "300-330 kV Transmission Line Under Construction, 2 Circuits",
        "300-330 kV Transmission Line, 1 Circuit",
        "300-330 kV Transmission Line, 2 Circuits",
        "300-330 kV Transmission Line, >= 3 Circuits"]],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"300-330kV",
        "paint": {
            "line-color":"rgba(224,140,22,1)",
            "line-width": {
                "base": 1.25, "stops": [[3, 0.5], [6, 1.1], [7, 2.2], [22, 6]]
            }
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "butt", "line-join": "miter", "line-miter-limit": 0
        }
        ,
        "filter":["in",
        "symbol",
        "380-400 kV Transmission Line Under Construction, >= 3 Circuits",
        "380-400 kV Transmission Line, >= 3 Circuits",
        "380-400 kV Transmission Line Under Construction, 2 Circuits",
        "380-400 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",
        "380-400 kV Transmission Line, 2 Circuits",
        "380-400 kV Transmission Line, 2 Circuits, underground"],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"380-400kV Multi",
        "paint": {
            "line-opacity": {
                "base": 1.5, "stops": [[3, 0], [7, 1]]
            }
            ,
            "line-width": {
                "base": 1.25, "stops": [[3, 0], [6, 0.8], [7, 6.8], [22, 10]]
            }
            ,
            "line-dasharray": {
                "base": 1, "stops": [[0, [0, 0]], [6, [0.15, 3]], [7, [0.2, 2]], [22, [0.15, 3]]]
            }
            ,
            "line-gap-width":0,
            "line-offset":0,
            "line-translate":[0,
            0],
            "line-color":"rgba(237,17,17,1)"
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "filter":["all",
        ["in",
        "$type",
        "Polygon",
        "Point",
        "LineString"],
        ["in",
        "symbol",
        "380-400 kV Transmission Line Under Construction, 1 Circuit",
        "380-400 kV Transmission Line Under Construction, 2 Circuits",
        "380-400 kV Transmission Line Under Construction, >= 3 Circuits",
        "380-400 kV Transmission Line, 1 Circuit",
        "380-400 kV Transmission Line, 2 Circuits",
        "380-400 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",
        "380-400 kV Transmission Line, >= 3 Circuits",
        "380-400 kV Transmission Line, 2 Circuits, underground"]],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"380-400kV",
        "paint": {
            "line-width": {
                "base": 1.25, "stops": [[3, 0.5], [6, 1.1], [7, 2.2], [22, 6]]
            }
            ,
            "line-color":"rgba(237,17,17,1)"
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible", "line-cap": "butt", "line-join": "miter", "line-miter-limit": 0
        }
        ,
        "filter":["in",
        "symbol",
        "500 kV Transmission Line Under Construction, 2 Circuits",
        "500 kV Transmission Line, 2 Circuits"],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"500kV Multi",
        "paint": {
            "line-opacity": {
                "base": 1.5, "stops": [[3, 0], [7, 1]]
            }
            ,
            "line-width": {
                "base": 1.25, "stops": [[3, 0], [6, 0.8], [7, 6.8], [22, 10]]
            }
            ,
            "line-dasharray": {
                "base": 1, "stops": [[0, [0, 0]], [6, [0.15, 3]], [7, [0.2, 2]], [22, [0.15, 3]]]
            }
            ,
            "line-gap-width":0,
            "line-offset":0,
            "line-translate":[0,
            0],
            "line-color":"rgba(168,0,0,1)"
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "filter":["all",
        ["in",
        "$type",
        "Polygon",
        "Point",
        "LineString"],
        ["in",
        "symbol",
        "500 kV Transmission Line Under Construction, 1 Circuit",
        "500 kV Transmission Line Under Construction, 2 Circuits",
        "500 kV Transmission Line, 1 Circuit",
        "500 kV Transmission Line, 2 Circuits",
        "500"]],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"500kV",
        "paint": {
            "line-color":"rgba(168,0,0,1)",
            "line-width": {
                "base": 1.25, "stops": [[3, 0.5], [6, 1.1], [7, 2.2], [22, 6]]
            }
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "filter":["all",
        ["in",
        "$type",
        "Polygon",
        "Point",
        "LineString"],
        ["in",
        "symbol",
        "750 kV Transmission Line, 1 Circuit",
        "750 kV Transmission Line Under Construction, 1 Circuit"]],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"750kV",
        "paint": {
            "line-color":"rgba(32,72,128,1)",
            "line-width": {
                "base": 1.25, "stops": [[3, 0.5], [6, 1.1], [7, 2.2], [22, 6]]
            }
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "visibility": "visible"
        }
        ,
        "filter":["all",
        ["in",
        "$type",
        "Polygon",
        "Point",
        "LineString"],
        ["in",
        "symbol",
        "132-150 kV Transmission Line Under Construction, 1 Circuit",
        "132-150 kV Transmission Line Under Construction, 2 Circuits",
        "220 kV Transmission Line Under Construction, 1 Circuit",
        "220 kV Transmission Line Under Construction, 2 Circuits",
        "220 kV Transmission Line Under Construction, 1 Circuit, underground",
        "220 kV Transmission Line Under Construction, 2 Circuits, underground",
        "300-330 kV Transmission Line Under Construction, 1 Circuit",
        "300-330 kV Transmission Line Under Construction, 2 Circuits",
        "380-400 kV Transmission Line Under Construction, 1 Circuit",
        "380-400 kV Transmission Line Under Construction, 2 Circuits",
        "380-400 kV Transmission Line Under Construction, >= 3 Circuits",
        "500 kV Transmission Line Under Construction, 1 Circuit",
        "500 kV Transmission Line Under Construction, 2 Circuits",
        "750 kV Transmission Line Under Construction, 1 Circuit",
        "DC-Line Under Construction, 1 Circuit",
        "DC-Line Under Construction, 2 Circuits"]],
        "type":"line",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"UC",
        "paint": {
            "line-dasharray": {
                "base": 1, "stops": [[4, [5, 10]], [6, [5, 5]], [22, [2, 5]]]
            }
            ,
            "line-width": {
                "base": 1.25, "stops": [[3, 0.5], [6, 1.1], [7, 2.2], [22, 6]]
            }
            ,
            "line-color":"#fff"
        }
        ,
        "source-layer":"lines"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-optional":true,
            "text-size": {
                "base": 0.85, "stops": [[0, 0], [6, 0], [7, 10], [22, 15]]
            }
            ,
            "text-allow-overlap":false,
            "icon-image":"{mb_symbol}",
            "symbol-avoid-edges":false,
            "text-ignore-placement":false,
            "text-transform":"none",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "icon-allow-overlap":true,
            "text-offset":[0,
            -0.9],
            "icon-optional":false,
            "icon-size": {
                "base": 1, "stops": [[4, 0], [7, 0.7], [22, 1]]
            }
            ,
            "text-anchor":"bottom",
            "text-field":"{name_eng}",
            "icon-ignore-placement":true
        }
        ,
        "filter":["!=",
        "name_eng",
        "unknown"],
        "type":"symbol",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"ee_points",
        "paint": {
            "text-halo-color": "#fff", "text-halo-width": 2
        }
        ,
        "source-layer":"points"
    }
    ,
    {
        "interactive":true,
        "layout": {
            "text-optional":true,
            "text-size": {
                "base": 0.85, "stops": [[0, 0], [6, 0], [7, 10], [22, 15]]
            }
            ,
            "text-allow-overlap":false,
            "icon-image":"{mb_symbol}",
            "symbol-avoid-edges":false,
            "text-ignore-placement":false,
            "text-transform":"none",
            "text-font":["DIN Offc Pro Medium",
            "Arial Unicode MS Regular"],
            "icon-allow-overlap":true,
            "text-offset":[0,
            -0.9],
            "icon-optional":false,
            "icon-size": {
                "base": 1, "stops": [[4, 0], [7, 0.7], [22, 1]]
            }
            ,
            "text-anchor":"bottom",
            "text-field":"",
            "icon-ignore-placement":true
        }
        ,
        "filter":["==",
        "name_eng",
        "unknown"],
        "type":"symbol",
        "source":"mapbox://entsoe.dzotpozu",
        "id":"ee_points_unknown",
        "paint": {
            "text-halo-color": "#fff", "text-halo-width": 2
        }
        ,
        "source-layer":"points"
    }
    ],
    "created":"2016-04-05T09:02:25.440Z",
    "id":"cimn76g7t0040d2np7woiqswj",
    "modified":"2016-04-05T09:02:25.440Z",
    "owner":"entsoe",
    "draft":false
}