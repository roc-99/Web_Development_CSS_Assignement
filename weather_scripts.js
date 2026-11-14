//Function inspired from https://www.geeksforgeeks.org/javascript/how-to-switch-between-multiple-css-stylesheets-using-javascript/
function toggleTheme() {
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'light_mode.css') {
        theme.setAttribute('href', 'dark_mode.css');
        document.getElementById("logo").src = "logo_sun.svg";
    } else {
        theme.setAttribute('href', 'light_mode.css');
        document.getElementById("logo").src = "logo_moon.svg";
    }
}


const temperature_data = [[20, 14],
                          [18, 14],
                          [21, 16],
                          [25, 19],
                          [22, 13],
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

    console.log(n)
    document.getElementById("max_number").innerHTML = temperature_data[n-1][0] + "º C";
    document.getElementById("min_number").innerHTML = temperature_data[n-1][1] + "º C";
}

