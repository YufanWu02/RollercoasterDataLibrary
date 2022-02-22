# RollercoasterDataLibrary
These are the functions that help to find various rollercoasters based on different criteria. 
#

#### Returns all rollercoasters in the specified country.
##### @param country {string} - a country to get the corresponding rollercoaster in the country.
##### @return return {string} - rollercoasters in the country given.
**`function getRollercoasterByCountry(country)`**
#

#### Returns all rollercoasters in the specified city.
##### @param city {string} - a city to get the corresponding rollercoaster in the city.
##### @return return {string} - rollercoasters in the city given.
**`function getRollercoasterByCity(city)`**
#

#### Returns all rollercoasters opened between the year ranged. 
##### @param min {number} - The earliest time to check if a rollercoaster has opened. 
##### @param max {number} - The latest time to check if a rollercoaster has opened. 
##### @return return {string} - rollercoasters opened in the year range.
**`function getRollercoasterByYearRange(min,max)`**
#


#### Return the average speed of all the rollercoaster listed.
##### @return return {number} - average speed of all the rollercoaster in the table.
**`function findAverageSpeed()`**
#


#### Decides if a rollercoaster has inversion or no and if its height is above the given height. 
##### @param inversion {boolean} - whether a rollercoaster has inversion or no. 
##### @param heights {number} - The height of a rollercoaster to check.
##### @return return {string} - rollercoasters fit the inversion option and heights given.
**`function getRollercoasterByInversionAndHeight(inversions, heights)`**
#
