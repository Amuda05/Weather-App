import React from 'react'

const Main = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({});
  return (
<>
<main>
    <div className="wrapper">
    <h1>Welcome to my Weather App</h1>
    <img src="/src/assets/cloud3.png" alt="" className='img' />
    </div>

    <div className="wrap">
    <input type="text"  placeholder='enter city or country' onChange={e => setQuery(e.target.value)} value={que}/>
        <img src="/src/assets/map.png" alt="" />

    </div>
    

    <div className="location-box">
      <div className="location">Nigeria, US</div>
      <div className="date">{dateBuilder(new Date)}</div>
    </div>
</main>
</>
  )
}

export default Main