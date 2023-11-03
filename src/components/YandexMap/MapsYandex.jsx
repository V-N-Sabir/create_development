import React from "react"
import { YMaps,Map,Placemark, FullscreenControl, ZoomControl,  } from "@pbe/react-yandex-maps"
import './MapsYandex.css'


function MapsYandex() {
 
    
    //https://github.com/gribnoysup/react-yandex-maps/issues/59
          return (
            <div className="yandeksMap">
              <YMaps 
             enterprise={{lang: 'ru_RU',apikey: "eef937f8-f2db-4a12-8af3-0f01efd78ae3",}}
             query={{lang: 'ru_RU',apikey: "eef937f8-f2db-4a12-8af3-0f01efd78ae3",}}
             >
              
              <Map  defaultState={{
              center: [41.247772, 69.315185],
              zoom: 3
            }}
            width={900}
            height={500}
            >
                <Placemark geometry={[41.247772, 69.315185]} />
                < FullscreenControl options={{float: 'left'}} />
                <ZoomControl options={{float: 'left'}} />
              </Map>
            </YMaps>
          </div>
          )
        }
        
        export default MapsYandex
