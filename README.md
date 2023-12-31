# my-etch-a-sketch-project
This is my second time creating this project per The Odin Project: Etch-a-Sketch Project lesson. I struggled to understand it the first time, and I think it will be fun to give it a second try to see how I've grown. 

In this project, I need to make a 16x16 grid whose squares change color (like an etch-a-sketch/sketchbook) when I mouseover (draw) on them.

I think I'll create an array with 16 elements and then use flexbox magic to align them into a grid. In THEORY I'm fairly excited and believe I have a fair understanding of how to change the color of each element using :hover. 
In my first iteration of this project, the squares immediately changed color on hover; this time I don't want them to change until I click/drag the mouse. 
I will need to be able to use user input to determine the size of the grid, max size being 100. With a simple prompt and createGrid using ${userInput}, I think this will be managable.
The extra credit is to 1. add a rainbow drawing method, and 2. a brush method that gets progressively 10% darker as it's used.

12/20/23 ~2 hrs

12/27/23: 5 hrs
I scrapped the old code I wrote last week, and replaced the gridSquares and createNewGrid() function with a Grid constructor. Using the contructor I was able to make the squares incriment correctly to the EXACT number I chose--no weird extra (or missing) squares.
I played with the flex a little bit, but couldn't quite figure out how to make all squares in the responsive grid actually look like squares (and all be the same proportions) no matter how many squares there are. 

12/28/23: ~1 hr
My goal for today is to make all squares in the grid the same proportions no matter what size the grid is/how many squares there are. I'm also going to try to figure out how to "draw" on the grid, and then remove the borders and background color from the squares. 

12/30/23: 5 hrs
Today's goal is to make the changeColor() function work on click one square at a time instead of none at all, or on all squares at once. Then, I'll add different color options and an "eraser" element. 

After 5 hours of trial and error (and once again starting from scratch), I approached the project differently by using grid instead of flex. Flex was not the best idea for this project because I was unable to find a good way to make all squares EXACTLY the same size no many how many there were/how large/small the page was scaled. Grid was a much better option and made the responsive #x# grid much cleaner. 
In my last iteration of the project, nothing I tried worked to make the grid squares change color (and trust me, I tried SO MANY things before admitting I should scrap the inadequate code and try again--toggle, active/inactive classes, MULTIPLE iterations of colorChange functions, setting a new bg color on click, linking the function in HTML instead of the JS, etc...). I think the issue was that the square elements WERE being generated as part of the grid's innerHTML upon running a newGrid function; now, the squares are generated as plains JS elements instead, and I believe that's why the current changeColor method succeeded at targeting the squares using basically the same function that failed in the last iterations.
This lesson helped me get some practice with updating CSS properties using JS, and I gained a better understanding of how/if certain attributes can be redefined in CSS when they have been defined in JS first. (Apparently, if you set a background color in JS, the CSS doesn't like to override the JS code. How polite, CSS.)
Of course, this project also helped cement "click" and "mouseover" into my brain.
The console/dev tools was my best friend during this project while I was troubleshooting why my grid wasn't being built (plot twist: if you set the grid template rows & columns in JS, don't forget to declare display: grid in the CSS file! Be better than I was).
This project was a roller coaster for me, as I made plenty of progress on each of my 3 main iterations before scrapping and starting over because I struggled to target the squares and "draw" on them. But the way I see it, it was a great learning experience.
The (current) final product is pretty bare bones as far as style goes, but I'll add some CSS razzle dazzle in the future.