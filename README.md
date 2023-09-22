# 30MFF Website Project: Invisible Spectrums

## Description: What is the project, what is the overall concept and theme, and what kind of experience you were striving to create?
My project revolves around the color spectrums on campus and displaying them in an aesthetically pleasing way through the website. I did this by developing an animated gradient theme for my page, and implementing minimal, sans-serif fonts to match the simplistic vibe that make them easy to read. I implemented a scroll through effect as the main mode of movement throughout the page, with internal links implemented in case the viewer wants to skip a section or two.

## Process: How did you go about implementing the concept?
### The layout is as follows (top to bottom):
Section A)
- Title: student life
- Internal links sectioned into 'ABOUT', 'CAROUSEL', 'VIDEO'
- Main page header: Invisible Spectrums

Section B)
- 'About' header
- 'About' paragraph

Section C)
- Photo carousel
- Carousel's paragraph of text
- Color spectrum

Section D)
- Film

Miscellaneous)
- Cursor
- Translucent text


### Section A)
#### I wanted the background to have a very aesthetically pleasing and yet calming effect. 
I did this by making it fairly simplistic with the gradient effect so that it's not too distracting and visually triggering, while still standing out from the black backdrop and white text with its notable pop of colors.
The color palette consisted of four main colors: purple, blue, green, and pink:
<img width="1511" alt="palette" src="https://github.com/saraalmulla03/saraalmulla03.github.io/assets/144206983/01f08e6c-af07-4cfd-ac1b-36a30244cf02">
- Each was faded out so that it doesn't look too bright.
- Each color was contained within a circle that either moves up, down, left, or right (ref. to codeblock below)

```
 /* movement*/
@keyframes down{
0%, 100%{
	top: -100px;	
}
70%{
	top: 700px;
}
}
@keyframes up{
0%, 100%{
	bottom: -100px;	
}
70%{
	bottom: 700px;
}
}
@keyframes left{
0%, 100%{
	left: -100px;	
}
70%{
	left: 1300px;
}
}
@keyframes right{
0%, 100%{
	right: -100px;	
}
70%{
	right: 1300px;
}
}
```
#### As for the fonts, I stuck to two basic san-serif fonts and alternated with different weights (thin, regular, bold):
```
@font-face {
font-family: 'SKPayidar';
src: url(fonts/RegularSKPayidar.ttf);
}
```
and
```
@font-face {
font-family: 'Roobert';
src: url(fonts/RoobertRegular.ttf);
}
```
They are fairly similar to each other, the only difference is that one has rounded edges, and the other does not.

#### The internal links I implemented are shortcuts that scroll to the designated section for you. To make this process not too visually disruptive in its quickness, I used this code in CSS:

```
html {
	scroll-behavior: smooth;
}
```
This way, the movement imitates that of the moving gradient circles in its slowness and smoothness.

#### Main header features:
Centered text with a play on words. "Invisible" is translucent.
```
<p id= "header" ><span style= "opacity: .6; font-family: 'SKPayidar'; ">Invisible </span>Spectrums</p>
```
### Section B) 
I just sectioned it off into the header and paragraph:
```
<section>
    <h1><a id="about"> About </a></h1> <!-- 'about' header -->
    <p id= "one" > I conducted a short video around campus that revolved around the color palettes <br> on campus. The purpose was to display the “color” of student life through <br> architectural elements, scattered objects, hanging posters, natural life, etc., all of <br> which was ordered in a way to make it appear grey-toned and muted in the <br> beginning, and then more saturated near the end with brighter colors like blue,<br> green, yellow, and red making notable features. <!-- 'about' paragraph -->
    </section>
```
### Section C) 
I added a carousel mostly using CSS. You interact with it by either scrolling through the carousel with a mousepad, or clicking on each of the small circle buttons on the carousel to change the slide.

I did this by using selectors like `.container`, `.slider`, `.slider-wrapper`, etc.

### Section D)
Added the short film using `<div>`:
```
<div class="video-container">
<video style= "padding-top: 500px; padding-bottom: 150px; padding-left: 250px" width="1000" controls poster="thumbnail.png">
  <source src="MOVIE.mp4" type="video/mp4">
</video>
    </div>
```

### Miscellaneous)
I added a circle that follows the cursor using JS.
```
// cursor dot
const cursorDot = document.querySelector("[data-cursor-dot]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

});
```
and made it so that when you hover your cursor over the `ABOUT` header it becomes translucent
```
// 'about' header changes opacity when mouse hovers over it
const aboutLink = document.getElementById("about");
// when mouse hovers over it, opacity goes to 0.8
aboutLink.addEventListener("mouseover", () => {
  aboutLink.style.opacity = "0.8";
});
// when the mouse leaves, opacity resets to 1 (opaque)
aboutLink.addEventListener("mouseout", () => {
  aboutLink.style.opacity = "1";
});
```

## Reflection/Evaluation (initial vs final concept + issues)
### I encountered many problems while trying to implement my initial design.
![Untitled_Artwork 1](https://github.com/saraalmulla03/saraalmulla03.github.io/assets/144206983/06a42a92-d498-4566-82fe-afddb99bde9e)
![Untitled_Artwork](https://github.com/saraalmulla03/saraalmulla03.github.io/assets/144206983/4eaf3a21-321d-4835-814f-590dbadccff2)

Spacing things out was a nightmare. Every time I wanted to format an element, I had to reconfigure the spacing for everything else. It wasn't until a few days ago that I realized that `display: flex;` allowed the computer to disregard all spacing rules in regards to `margin`/ `padding`/ `border`, which helped me to display text beside a photo carousel and not underneath it:

```
  #carouseltext {
display: flex; 
font-size: 25px; 
margin-left: 107px; 
margin-top: -470px;
}
```
The gradient was also pretty difficult. I used this [tutorial](https://www.youtube.com/watch?v=MxpDrULwejY) to animate the moving circles, and it took me a hot second trying to figure out what each section of code was doing. Neveretheless, I was able to figure it out eventually and change up the colors of the blotches to suit the aesthetic I had in mind.

Size, position, color, and animation of blue circle:
```
/* blue side */
  #up{
position: absolute;
height: 750px;
width: 750px;
border-radius: 50%;
background-image:linear-gradient(80deg, rgb(0, 132, 255), rgb(0, 132, 255, 0.5));
filter: blur(80px);
animation: down 30s infinite;
}
```
Movement of blue circle:
```
@keyframes up{
0%, 100%{
	bottom: -100px;	
}
70%{
	bottom: 700px;
}
}
```
Another issue I had which stopped me from implementing JS code earlier, is the fact that I didn't know that its source link had to be placed just before the closing `</body>` tag in HTML until, again, just a few days ago.

```
<script src="script.js"></script>
  </body>
```

Finally, an issue which I still haven't been able to resolve, is how to make it so that the internal links for `ABOUT`, `CAROUSEL`, and `VIDEO` take you to the designated section in a centered way. Whenever you click on any of them, it takes you either too far down, or too high up.

```
    <!-- internal links -->
<a href="#about" style="display: inline-block; margin-left: 1300px; font-family: 'Roobert'; font-size: 10px; line-height: 2.3; opacity: .8; ">ABOUT</a>
<a href="#carouseltext" style="display: inline-block; margin-left: 1300px; font-family: 'Roobert'; font-size: 10px; line-height: 2.3; opacity: .8;">CAROUSEL</a>
<a href="#film" style="display: inline-block; margin-left: 1300px; font-family: 'Roobert'; font-size: 10px; line-height: 2.3; opacity: .8;">VIDEO</a>
```


