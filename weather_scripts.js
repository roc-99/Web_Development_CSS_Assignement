const weather_data = [["foggy", "foggy", "cloudy", "sunny", "foggy", "rainy", "snowy"],
                      ["cloudy", "rainy", "sunny", "sunny", "foggy", "stormy", "snowy"],
                      ["sunny", "rainy", "cloudy", "sunny", "cloudy", "stormy", "cloudy"],
                      ["sunny", "cloudy", "stormy", "sunny", "cloudy", "stormy", "sunny"],
                      ["cloudy_night", "clear_moon", "cloudy_night", "clear_moon", "rainy_night", "rainy", "clear_moon"],
                      ["rainy_night", "clear_moon", "rainy_night", "clear_moon", "cloudy", "snowy", "cloudy_night"]] 


function dayChange (n) {
    console.log(n)
    const day_parts = document.querySelectorAll("#wimg");
    
    for (let i = 0; i < day_parts.length; i++) {
        day_parts[i].src= weather_data[i][n-1] + ".png"
        console.log(day_parts[i])
    }

}

