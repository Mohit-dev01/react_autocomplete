// import { usePlacesWidget } from "react-google-autocomplete";

// const App = () => {
//   const { ref } = usePlacesWidget({
//     apiKey: "AIzaSyDQ90b6zBbkozSHwN88U_qkKQpI_A4wHYk",
//     onPlaceSelected: (place) => {
//       console.log(place);
//     },
//     options: {
//       types: ["(regions)"],
      
//     },
//   });

//   return <input ref={ref} style={{ width: "90%" }} defaultValue="Amsterdam" />;
// };

// export default App


// import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
// import { useState } from "react";
// import { useEffect } from "react";
// export default () => {
//   const {
//     placesService,
//     placePredictions,
//     getPlacePredictions,
//     isPlacePredictionsLoading,
//   } = usePlacesService({
//     apiKey: "AIzaSyDQ90b6zBbkozSHwN88U_qkKQpI_A4wHYk",
//   });

//   const [selectedPlaceDetails, setSelectedPlaceDetails] = useState(null);

//   const savePlaceDetailsToState = (placeDetails) => {
//     // Handle saving place details to state as needed
//     setSelectedPlaceDetails(placeDetails);
//   };

//   useEffect(() => {
//     // fetch place details for the first element in placePredictions array
//     if (placePredictions.length)
//       placesService?.getDetails(
//         {
//           placeId: placePredictions[0].place_id,
//         },
//         (placeDetails) => savePlaceDetailsToState(placeDetails)
//       );
//   }, [placePredictions]);

//   const renderItem = (item) => {
//     // Implement your rendering logic here
//     return <div key={item.id}>{item.description}</div>;
//   };


//   return (
//     <>
//       <input
//         placeholder="Debounce 500 ms"
//         onChange={(evt) => {
//           getPlacePredictions({ input: evt.target.value });
//         }}
//         loading={isPlacePredictionsLoading}
//       />
//       {placePredictions.map((item) => renderItem(item))}
//     </>
//   );
// };


import { useJsApiLoader } from "@react-google-maps/api"
import { Autocomplete } from "@react-google-maps/api"
const App = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey:"AIzaSyDQ90b6zBbkozSHwN88U_qkKQpI_A4wHYk",
    libraries: ['places'],
  })
  return(
    <>
    <Autocomplete><input type="text" placeholder="enter Address"/></Autocomplete>
    </>
  )
}
export default  App