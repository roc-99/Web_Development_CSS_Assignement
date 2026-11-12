const temperature_data = [[20, 14],
                          [18, 14],
                          [21, 16],
                          [25, 19],
                          [19, 10],
                          [15, 7]] 

const weather_data = [["foggy", "foggy", "cloudy", "sunny", "foggy", "rainy", "snowy"],
                      ["cloudy", "rainy", "sunny", "sunny", "foggy", "stormy", "snowy"],
                      ["sunny", "rainy", "cloudy", "sunny", "cloudy", "stormy", "cloudy"],
                      ["sunny", "cloudy", "stormy", "sunny", "cloudy", "stormy", "sunny"],
                      ["cloudy_night", "clear_moon", "cloudy_night", "clear_moon", "rainy_night", "rainy", "clear_moon"],
                      ["rainy_night", "clear_moon", "rainy_night", "clear_moon", "cloudy", "snowy", "cloudy_night"]] 


function dayChange (n) {
    const day_parts = document.querySelectorAll("#wimg");
    
    for (let i = 0; i < day_parts.length; i++) {
        day_parts[i].src= weather_data[i][n-1] + ".png"
    }

    document.getElementById("max_number").innerHTML = temperature_data[n][0] + " C";
    document.getElementById("min_number").innerHTML = temperature_data[n][1] + " C";
}

