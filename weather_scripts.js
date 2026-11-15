//Function inspired from https://www.geeksforgeeks.org/javascript/how-to-switch-between-multiple-css-stylesheets-using-javascript/
function toggleTheme() {
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == 'light_mode.css') {
        theme.setAttribute('href', 'dark_mode.css')
        document.getElementById("logo").src = "logo_moon.svg"
    } else {
        theme.setAttribute('href', 'light_mode.css')
        document.getElementById("logo").src = "logo_sun.svg"
    }
}


const temperature_data = [[20, 14],
                          [18, 14],
                          [21, 16],
                          [25, 19],
                          [22, 13],
                          [19, 10],
                          [15, 7]] 

const precipitation_data = [15, 60, 57, 0, 48, 100, 10] 

const weather_data = [["foggy", "foggy", "cloudy", "sunny", "foggy", "rainy", "snowy"],
                      ["cloudy", "rainy", "sunny", "sunny", "foggy", "stormy", "snowy"],
                      ["sunny", "rainy", "cloudy", "sunny", "cloudy", "stormy", "cloudy"],
                      ["sunny", "cloudy", "stormy", "sunny", "cloudy", "stormy", "sunny"],
                      ["cloudy_night", "clear_night", "cloudy_night", "clear_night", "stormy_night", "rainy", "clear_night"],
                      ["stormy_night", "clear_night", "stormy_night", "clear_night", "cloudy_night", "snowy", "cloudy_night"]] 


function dayChange (n) {
    const day_parts = document.querySelectorAll("#wimg")
    const day_parts_text = document.querySelectorAll("#wtext")

    let data = undefined
    let data_split = undefined
    
    for (let i = 0; i < day_parts.length; i++) {

        data = weather_data[i][n-1]

        day_parts[i].className= data
        day_parts[i].src= data + ".png"

        data_split = data.split("_")
        data=""

        for (let i = 0; i < data_split.length; i++) {
            data += data_split[i][0].toUpperCase() + data_split[i].slice(1) + " "
        }
        day_parts_text[i].innerHTML = data
    }

    console.log(n)
    document.getElementById("max_number").innerHTML = temperature_data[n-1][0] + "º C"
    document.getElementById("min_number").innerHTML = temperature_data[n-1][1] + "º C"

    document.getElementById("rain_chance").innerHTML = precipitation_data[n-1] + " %"
}

