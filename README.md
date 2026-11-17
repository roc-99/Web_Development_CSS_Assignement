<h1 align="center">Weather Report</h1>
<p align="center"><b>A Static Webpage for a weather dashboard</b><br>
</p>

***

## The Purpose
This page allows users to see the theoretical weather for a theorethical location, along the 7 days of the week. The informations displayed are: the maximum and minimum temperature for that day, the chance of precipitation and the state of the weather on that day, separated along 6 different "segments" of that day. This is a static webpage, as such, no actual real weather information is displayed. Despite that, the webpage will fetch its data from a json file, simulating a real dynamic page.

## The page's contents
Upon entering the page, the user is shown 4 different "sections"
1. The header of the site
2. The day buttons
3. Temperature and precipitation information
4. Information about state of the weather along the day

## The header
The header shows the name of the page "Weather Report" and after it there is a moon symbol. Clicking on it will activate the pages "Light Mode" which, along with expected changes from dark to light, also has some visual differences that were added for flavor. In "Light Mode", instead of a moon symbol, there is a sun. Clicking it will send the user back to "Dark Mode". The current style of the page is saved between refreshes.

## The buttons
After the header there are 7 buttons displayed, representing the 7 days of the week that the page has information for. Clicking on one of them will change the information displayed. The default day chosen upon opening the page is "Monday" and the current day bein displayed is also saved between refreshes of the page.

## Temperature and Precipitation information
From this section on, the actual information of the page is displayed. In this first section there are 3 different informations shown, that will change depending of the day currently selected:
1. In warm colours, the maximum temperature predicted for that day
2. In cold colours, the minimum temperature predicted for that day
3. With a waterdrop symbol next to it, the chance of precipitation predicted for that day

## State of the Weather information
This last section shows the what will be the expected state of the weather along differnt parts of the day. These parts are::
1. <b>Early Morning</b> (from 6AM to 9AM)
2. <b>Late Morning</b> (from 9AM to 12AM)
3. <b>Early Afternoon</b> (from 12AM to 3PM)
4. <b>Late Afternoon</b> (from 3PM to 6PM)
5. <b>Evening</b> (from 6PM to 9PM)
6. <b>Night</b> (from 9PM to 6AM)

Each of these sections will have an animated image representing a specific state of the weather. Each different state has a specific image and animation to reepresent them and are as follows:

1. <b>Sunny:</b> A sun that is spinning
2. <b>Snowy:</b> A snowflake that spins slower than the sun
3. <b>Cloudy:</b> A cloud that slowly hovers up and down
4. <b>Cloudy Night:</b> A dark cloud that slowly hovers up and down, but slower than the previous cloud
5. <b>Foggy:</b> Grey fog, that slowly moves from left to right
6. <b>Rainy:</b> Rain drops that continuously fall from up to down
7. <b>Stormy:</b> A lightning bolt that zaps from the from the top-right to the bottom-left 
8. <b>Clear Night:</b> A moon that periodically lights up
9. <b>Stormy Night:</b> The moon and some dark clouds, they briefly flash up, simulating a lightning strike