const early_morning = ["foggy", "foggy", "cloudy", "sunny", "cloudy", "rainy", "snowy"]    
//6AM - 9AM
let late_morning = ["cloudy", "rainy", "sunny", "sunny", "rainy", "stormy", "snowy"]      
//9AM - 12AM
let early_afternoon = ["sunny", "rainy", "cloudy", "sunny", "cloudy", "rainy", "snowy"]   
//12AM - 3PM
let late_afternoon = ["sunny", "cloudy", "cloudy", "sunny", "cloudy", "rainy", "snowy"]    
//3PM - 6PM
let evening = ["cloudy_night", "clear_moon", "cloudy", "sunny", "cloudy", "rainy", "snowy"]      
//6PM - 9PM
let night = ["foggy", "clear_moon", "cloudy", "sunny", "cloudy", "rainy", "snowy"]         
//9PM - 6AM



let weather_info = document.querySelector(".weather_info")

function weather_image(weather){
    switch(weather) {
        case "sunny":
            weather_info.early_morning.img
            break;
        case "cloudy":
            // code block
            break;
        case "cloudy":
            // code block
            break;
        case "cloudy":
            // code block
            break;
        case "cloudy":
            // code block
            break;
        default:
            // code block
    } 

}


function dayChange (n) {
    weather_info.early_morning = early_morning[n]
    weather_info.late_morning = late_morning[n]
    weather_info.early_afternoon = early_afternoon[n]
    weather_info.late_afternoon = late_afternoon[n]
    weather_info.evening = evening[n]
    weather_info.night = night[n]
    



}

