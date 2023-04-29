import Card from '../Components/Card'

export default function Home() {
  return (
    <div>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Card name="Welcome"/>
        <Card name="Favorites"/>
        <Card name="Foods"/>
        <Card name="Habits"/>        
      </div>
    </div>
  )
}
