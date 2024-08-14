#### Get all the elements

- Attach event listener to the about-info article
- Get each target we are clicking
- Get the unique id of each tab-btn

### setInterval

It schedules the remainingTime function to be called every 1000 milliseconds (or 1 second).

- It returns an interval ID, which is stored in the countDown variable. This ID can be used later to stop the interval using clearInterval(countDown).

- Even though you don't call countDown directly anywhere else, the setInterval function keeps calling the remainingTime function every second, automatically updating the countdown on the page.
