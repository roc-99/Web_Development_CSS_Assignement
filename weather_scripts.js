const weather_data = [["foggy", "foggy", "cloudy", "sunny", "cloudy", "rainy", "snowy"],
                      ["cloudy", "rainy", "sunny", "sunny", "rainy", "stormy", "snowy"],
                      ["sunny", "rainy", "cloudy", "sunny", "cloudy", "rainy", "snowy"],
                      ["sunny", "cloudy", "cloudy", "sunny", "cloudy", "rainy", "snowy"],
                      ["cloudy_night", "clear_moon", "cloudy", "sunny", "cloudy", "rainy", "snowy"],
                      ["foggy", "clear_moon", "cloudy", "sunny", "cloudy", "rainy", "snowy"]] 


let weather_info = document.querySelector(".weather_info")

function dayChange (n) {

    const day_parts = weather_info.children;
    for (let i = 0; i < day_parts.length; i++) {
        day_parts[i].getElementById("img").src= weather_data[i][n] + ".png";
    }

}

