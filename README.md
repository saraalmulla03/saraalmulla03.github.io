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
#### As for the fonts, I stuck to two basic san-serif fonts and alternated with different weights (thin, regular, bold:
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

## Reflection/Evaluation (initial vs final concept + issues)
### I encountered many problems while trying to implement my initial design.

Spacing things out was a nightmare. Every time I wanted to format an element, I had to reconfigure the spacing for everything else. It wasn't until a few days ago that I realized that `display: flex;` allowed the computer to disregard all spacing rules in regards to `margin`/ `padding`/ `border`, which helped me to display text beside a photo carousel and not underneath it:

```
  #carouseltext {
display: flex; 
font-size: 25px; 
margin-left: 107px; 
margin-top: -470px;
}
```



- problems (use code blocks): implementing gradient, separating jss not knowing that JS code had to be on the bottom of html body, confused with margin/ padding/ border
- What i changed from my wireframes
  
