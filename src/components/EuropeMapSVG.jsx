import React from 'react';
import { useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { geoAzimuthalEqualArea } from "d3-geo";

const geoUrl = "/world.json";

const projection = geoAzimuthalEqualArea()
  .rotate([-15.0, -48.0, 0])
  .center([0, 0])
  .scale(1100)
  .translate([400, 300]); 

const getArcPath = (start, end, index, bendDirection = 1) => {
  const [x1, y1] = projection(start);
  const [x2, y2] = projection(end);
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  
  // Normal vector to the line
  const nx = -dy / dist;
  const ny = dx / dist;
  
  // Bend multiplier controlled by bendDirection
  const bend = dist * (0.15 + (index % 3) * 0.05) * bendDirection;
  
  const cx = x1 + dx / 2 + nx * bend; 
  const cy = y1 + dy / 2 + ny * bend;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
};

const EuropeMapSVG = ({ scrollProgress }) => {
  const { t } = useTranslation();
  const globalProgress = useTransform(scrollProgress, [0, 1], [0, 1]);
  const turkeyCoords = [27.26, 37.86];

  const nodes = [
    { id: 'TR', coordinates: turkeyCoords, label: 'Türkiye' },
    { id: 'IT', coordinates: [12.49, 41.90], label: 'İtalya', start: 0.1, end: 0.4 },
    { id: 'ES', coordinates: [-3.70, 40.41], label: 'İspanya', start: 0.2, end: 0.6 },
    { id: 'RO', coordinates: [26.10, 44.42], label: 'Romanya', start: 0.6, end: 0.9 },
    { id: 'GR', coordinates: [23.72, 37.98], label: 'Yunanistan', start: 0.05, end: 0.3 },
    { id: 'HU', coordinates: [19.04, 47.49], label: 'Macaristan', start: 0.5, end: 0.8 },
    { id: 'HR', coordinates: [15.98, 45.81], label: 'Hırvatistan', start: 0.3, end: 0.5 },
    { id: 'BG', coordinates: [23.32, 42.69], label: 'Bulgaristan', start: 0.7, end: 0.95 },
    { id: 'PT', coordinates: [-9.13, 38.72], label: 'Portekiz', start: 0.25, end: 0.75 },
    { id: 'PL', coordinates: [21.01, 52.22], label: 'Polonya', start: 0.4, end: 0.85 },
  ];

  const lines = [
    { from: turkeyCoords, to: [12.49, 41.90], label: "İtalya", bendDirection: -1, start: 0.1, end: 0.4 }, // Alttan (Akdeniz)
    { from: turkeyCoords, to: [-3.70, 40.41], label: "İspanya", bendDirection: 1, start: 0.2, end: 0.6 }, // Üstten (Avrupa)
    { from: turkeyCoords, to: [26.10, 44.42], label: "Romanya", bendDirection: 1, start: 0.6, end: 0.9 }, // Üstten
    { from: turkeyCoords, to: [23.72, 37.98], label: "Yunanistan", bendDirection: 1, start: 0.05, end: 0.3 }, // Üstten (İtalya ile karışmaması için)
    { from: turkeyCoords, to: [19.04, 47.49], label: "Macaristan", bendDirection: -1, start: 0.5, end: 0.8 }, // Alttan
    { from: turkeyCoords, to: [15.98, 45.81], label: "Hırvatistan", bendDirection: 1, start: 0.3, end: 0.5 }, // Üstten
    { from: turkeyCoords, to: [23.32, 42.69], label: "Bulgaristan", bendDirection: -1, start: 0.7, end: 0.95 }, // Alttan
    { from: turkeyCoords, to: [-9.13, 38.72], label: "Portekiz", bendDirection: -1, start: 0.25, end: 0.75 }, // Alttan
    { from: turkeyCoords, to: [21.01, 52.22], label: "Polonya", bendDirection: 1, start: 0.4, end: 0.85 }, // Üstten
  ];

  return (
    <div className="w-full h-full flex items-center justify-center relative bg-transparent overflow-hidden">
      
      <div className="w-full max-w-6xl h-auto relative z-10 bg-transparent">
        
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-15.0, -48.0, 0],
            center: [0, 0],
            scale: 1100
          }}
          style={{ width: "100%", height: "auto" }}
        >
          <defs>
            <radialGradient id="mask-radial" cx="50%" cy="50%" r="60%">
              <stop offset="65%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>
            
            <linearGradient id="mask-right-fade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="65%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="black" stopOpacity="1" />
            </linearGradient>

            <mask id="map-edge-mask">
              <rect x="0" y="0" width="800" height="600" fill="url(#mask-radial)" />
              <rect x="0" y="0" width="800" height="600" fill="url(#mask-right-fade)" />
            </mask>
          </defs>

          <g mask="url(#map-edge-mask)">
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const isTurkey = geo.properties.name === "Turkey" || geo.properties.name === "Türkiye";
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isTurkey ? "#EBE4DA" : "#F3F0E9"}
                      stroke={isTurkey ? "#D97757" : "#2D2B2A"}
                      strokeWidth={isTurkey ? 0.8 : 0.5}
                      strokeOpacity={isTurkey ? 0.3 : 0.15}
                      style={{
                        default: { outline: "none", transition: "all 250ms" },
                        hover: { fill: "#EAE6DF", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </g>

          {/* Custom Animated Curved Paths */}
          {lines.map((line, index) => (
            <path
              key={`line-${index}`}
              d={getArcPath(line.from, line.to, index, line.bendDirection)}
              fill="none"
              stroke="#D97757"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="path-animated-arc"
            />
          ))}
          
          {/* Nodes */}
          {nodes.map((node) => (
            <Marker key={node.id} coordinates={node.coordinates} className="group cursor-pointer">
              <circle
                r={4}
                className={node.id === 'TR' ? "fill-terracotta" : "fill-charcoal"}
              />
              <circle
                r={12}
                className={node.id === 'TR' ? "fill-terracotta/30 animate-pulse" : "fill-charcoal/20"}
              />
              <rect
                x={-35}
                y={-25}
                width={70}
                height={16}
                rx={4}
                className="fill-cream opacity-80 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
              />
              <text
                textAnchor="middle"
                y={-14}
                style={{ fontFamily: "Inter, sans-serif", fill: "#2D2B2A", fontSize: "10px", fontWeight: "bold" }}
                className="group-hover:fill-terracotta transition-all duration-300 pointer-events-none"
              >
                {t(`map.countries.${node.id}`)}
              </text>
            </Marker>
          ))}
        </ComposableMap>

      </div>

      <MotionArcController progress={globalProgress} lines={lines} />
    </div>
  );
};

// A helper component to attach framer-motion scroll values to the custom SVG paths independently
const MotionArcController = ({ progress, lines }) => {
  React.useEffect(() => {
    const paths = document.querySelectorAll('.path-animated-arc');
    if (paths.length === 0) return;

    const setupPath = (path, v, line) => {
      const { start, end } = line;
      let localProgress = (v - start) / (end - start);
      localProgress = Math.max(0, Math.min(1, localProgress));
      
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length - (localProgress * length);
    };

    const unsub = progress.on("change", v => {
      paths.forEach((path, idx) => setupPath(path, v, lines[idx]));
    });

    paths.forEach((path, idx) => setupPath(path, progress.get(), lines[idx]));

    return () => unsub();
  }, [progress, lines]);

  return null;
}

export default EuropeMapSVG;
