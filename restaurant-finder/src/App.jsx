import RestaurantFinder from './components/RestaurantFinder.jsx'
import useUserLocation from './hooks/useUserLocation'

function App() {
  const userLocation = useUserLocation()

  useEffect(() => {
    if (userLocation) {
      console.log("User location:", userLocation)
      // 🔁 Replace fetchRestaurants or rec engine logic here with `userLocation`
    }
  }, [userLocation])

  return (
    <div>
      <h1>Restaurant Finder 🍽️</h1>
      {/* Render nearby results based on userLocation or fallback */}
    </div>
  )
}


export default function App() {
  return <RestaurantFinder />
}
