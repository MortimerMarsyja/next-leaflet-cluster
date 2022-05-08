import styles from '../../styles/Home.module.css';
import { Map } from 'leaflet';
import * as L1 from 'leaflet.markercluster'
import 'leaflet.markercluster';


const DEFAULT_CENTER = [38.907132, -77.036546]

export default function Home() {
  const al = [];
  for (var i = 0; i < test.length; i++) {
    al.push(<Marker key={i} position={[coord1 + i / 100, coord2 + i / 100]} />);
  }
  return (
    <div className={styles.container}>
      <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
        {({ TileLayer, Marker, Popup, ClusterMarker }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <L1.ClusterMarker>
              <Marker position={DEFAULT_CENTER}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </L1.ClusterMarker>
          </>
        )}
      </Map>
    </div>
  )
}
