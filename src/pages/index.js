
import Map from '../components/Map';


import styles from '../../styles/Home.module.css';

const DEFAULT_CENTER = [38.907132, -77.036546]

export default function Home() {
  return (
    <div className={styles.container}>
      <Map className={styles.homeMap} center={DEFAULT_CENTER} zoom={12}>
        {({ TileLayer, Marker, Popup, MarkerClusterGroup }) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <MarkerClusterGroup>
              <Marker position={[49.8397, 24.0297]} />
              <Marker position={[52.2297, 21.0122]} />
              <Marker position={[51.5074, -0.0901]} />
            </MarkerClusterGroup>;
            <Marker position={DEFAULT_CENTER}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </>
        )}
      </Map>
    </div>
  )
}
