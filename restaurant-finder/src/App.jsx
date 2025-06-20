import RestaurantFinder from './components/RestaurantFinder.jsx'
import useUserLocation from './hooks/useUserLocation'
import LocationButton from './LocationButton.jsx'


function App() {
  
  const userLocation = useUserLocation()

  useEffect(() => {
    if (userLocation) {
      console.log("User location:", userLocation)
      userLocation
    }
  }, [userLocation])

  return (
    <div>
      <LocationButton/>
      <h1>Restaurant Finder 🍽️</h1>
      {/* Render nearby results based on userLocation or fallback */}
    </div>
  )
}


export default function App() {
  return <RestaurantFinder />
}
