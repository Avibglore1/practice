import './App.css'

function App() {
 

  return (
    <>
     <header>
        <div class="input-container">
            <input type="text" name="" id=""
             placeholder="Enter Location" 
             class="search-input"
             />
            <button id="search" class="search-btn">Search</button>
        </div>
    </header>
    <main>
        <div class="weather-container">
            <div class="temprature">21.2°C</div>
            <div class="location-date">
                <div class="location">Delhi</div>
                <span class="time">12:43</span>
                <span class="Date">2024-07-15</span>
            </div>
            <div class="weather-state">
                <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" class="emoji" alt=""/>
                <div class="condition">Sunny</div>
            </div>
          </div>
    </main> 
    </>
  )
}

export default App
