let data = undefined

//Function inspired from https://www.geeksforgeeks.org/javascript/how-to-switch-between-multiple-css-stylesheets-using-javascript/
function toggleTheme() {
    const theme = localStorage.getItem("theme")

    if (theme === 'light_mode.css') {
        localStorage.setItem('theme', 'dark_mode.css')
        stylesheet.setAttribute('href', 'dark_mode.css')
        document.getElementById("logo").src = "logo_moon.svg"
    } else {
        localStorage.setItem('theme', 'light_mode.css')
        stylesheet.setAttribute('href', 'light_mode.css')
        document.getElementById("logo").src = "logo_sun.svg"
    }
}

function dayChange (n) {
    localStorage.setItem('day', n)

    const day_parts = document.querySelectorAll("#wimg")
    const day_parts_text = document.querySelectorAll("#wtext")

    console.log(data)

    let tmp = undefined
    let tmp_split = undefined
    
    for (let i = 0; i < day_parts.length; i++) {

        tmp = data[n-1].weather_data[i]

        day_parts[i].className= tmp
        day_parts[i].src= tmp + ".webp"

        tmp_split = tmp.split("_")
        tmp = ""

        for (let u = 0; u < tmp_split.length; u++) {
            tmp += tmp_split[u][0].toUpperCase() + tmp_split[u].slice(1) + " "
        }
        day_parts_text[i].innerHTML = tmp
    }

    document.getElementById("max_number").innerHTML = data[n-1].max_temp + "º C"
    document.getElementById("min_number").innerHTML = data[n-1].min_temp + "º C"

    document.getElementById("rain_chance").innerHTML = data[n-1].precipitation + " %"
}

async function main() {
    const promises = [
        new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve)),
        (async function() {
            let d = await fetch("data.json")
            return await d.json()
        })()
    ]

    data = (await Promise.all(promises))[1]

    console.log(data)

    let stylesheet = document.querySelector('link[rel="stylesheet"]')
    stylesheet.setAttribute('href', localStorage.getItem("theme") || 'dark_mode.css')

    if (localStorage.getItem("theme") === 'light_mode.css') {
        document.getElementById("logo").src = "logo_sun.svg"
    }

    dayChange(parseInt(localStorage.getItem("day") || "1"))
}

main()