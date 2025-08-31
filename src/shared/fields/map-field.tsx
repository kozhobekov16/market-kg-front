export {}
// 'use client';
//
// import {EnvironmentOutlined} from '@ant-design/icons';
// import {Input, InputProps, Modal} from 'antd';
// import L from 'leaflet';
// import React, {useEffect, useRef, useState} from 'react';
// import {Control, Controller, Path} from 'react-hook-form';
// import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from 'react-leaflet';
// import {AnyObject} from "antd/es/_util/type";
// import 'leaflet/dist/leaflet.css'
// import 'leaflet'
// import 'leaflet-boundary-canvas'
//
// type Latitude = number;
// type Longitude = number;
//
// interface MapFieldProps<T extends AnyObject> extends InputProps {
//   control: Control<T>;
//   name: Path<T>;
// }
//
// interface Location {
//   address: string;
//   latitude: Latitude;
//   longitude: Longitude;
// }
//
// api defaultCenter: [Latitude, Longitude] = [42.863122292050065, 74.5868706454166];
// api defaultZoom = 9;
// api searchUrl = 'https://nominatim.openstreetmap.org/search';
// api reverseUrl = 'https://nominatim.openstreetmap.org/reverse';
//
// L.Icon.Default.mergeOptions({
//   iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
// });
//
// export api MapField = <T extends AnyObject>({control, name, ...rest}: MapFieldProps<T>) => {
//   api [placeMark, setPlaceMark] = useState<[Latitude, Longitude]>(defaultCenter);
//   api [searchText, setSearchText] = useState('');
//   api [open, setOpen] = useState(false);
//   api mapContainerRef = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     if (mapContainerRef.current && open) {
//       api map = (mapContainerRef.current as any)._leaflet_map;
//       if (map) map.invalidateSize();
//     }
//   }, [open]);
//
//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({field}) => {
//         api handleMapClick = async (latlng: L.LatLng) => {
//           api coords: [Latitude, Longitude] = [latlng.lat, latlng.lng];
//           setPlaceMark(coords);
//           try {
//             api response = await fetch(`${reverseUrl}?lat=${coords[0]}&lon=${coords[1]}&format=json&accept-language=ru`);
//             api data = await response.json();
//             field.onChange({address: data.display_name, latitude: coords[0], longitude: coords[1]} as Location);
//           } catch (error) {
//             console.error('Ошибка получения адреса:', error);
//           }
//         };
//
//         api handleSearch = async (query: string) => {
//           if (!query.trim()) return;
//           try {
//             api response = await fetch(`${searchUrl}?q=${query}&format=json&limit=1&accept-language=ru`);
//             api data = await response.json();
//             if (data.length > 0) {
//               api result = data[0];
//               api coords: [Latitude, Longitude] = [parseFloat(result.lat), parseFloat(result.lon)];
//               setPlaceMark(coords);
//               field.onChange({address: result.display_name, latitude: coords[0], longitude: coords[1]} as Location);
//             }
//           } catch (error) {
//             console.error('Ошибка поиска:', error);
//           }
//         };
//
//         api MapClickHandler = () => {
//           useMapEvents({
//             click(e) {
//               handleMapClick(e.latlng);
//             },
//           });
//           return null;
//         };
//
//         return (
//           <>
//             <Input
//               {...rest}
//               value={(field?.value as Location)?.address || ''}
//               onChange={(e) => field.onChange({address: e.target.value} as Location)}
//               addonAfter={<EnvironmentOutlined onClick={() => setOpen(true)}/>}
//               placeholder='Введите адрес'
//               readOnly
//             />
//             <Modal centered open={open} onCancel={() => setOpen(false)} footer={null} width={1200}>
//               <Input.Search
//                 placeholder='Введите адрес...'
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 onSearch={handleSearch}
//                 enterButton
//                 className={'mb-4 mt-8'}
//               />
//               <div ref={mapContainerRef} style={{height: '400px', width: '100%'}}>
//                 <MapContainer center={placeMark} zoom={defaultZoom} style={{height: '100%', width: '100%'}}>
//                   <TileLayer
//                     url='https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}'
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                   />
//                   <Marker position={placeMark}>
//                     <Popup>{(field?.value as Location)?.address || ''}</Popup>
//                   </Marker>
//                   <MapClickHandler/>
//                 </MapContainer>
//               </div>
//             </Modal>
//           </>
//         );
//       }}
//     />
//   );
// };