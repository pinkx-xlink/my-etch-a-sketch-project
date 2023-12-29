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
