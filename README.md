# Intro to jQuery

This is an Intro to jQuery class based on http://teaching-materials.org/jquery/ and adapted by Marcy Sutton of GDI Seattle. Intro to HTML & CSS and Intro to JavaScript are prerequisites.

The course is meant to be taught in 2 two-hour sections. Each of the slides and practice files are customizable according to the needs of a given class or audience.

Slides: 
http://marcysutton.github.io/gdi-intro-to-jquery/

Exercises: 
http://marcysutton.github.io/gdi-intro-to-jquery/exercises.zip

Completed Exercises: 
http://marcysutton.github.io/gdi-intro-to-jquery/exercises-completed.zip

## Class 1

What is a library? How do I include and use one?
Survey the audience to make sure they know JavaScript basics to prep for a native JS exercise: variables, arrays, looping, createElement, setAttribute, appendChild.
Discuss the purpose of libraries and show the difference between native JS and jQuery.
Moving onto jQuery basics, you will explain how to include the library and then go over usage: adding CSS classes; explaining the $ symbol; finding, creating, changing and reading elements; iterating over jQuery collections; the DOM ready event. In Exercise 2, students will recreate Exercise 1 with jQuery.

## Class 2

In class 2, you will go over chaining and events: interactions, Effects & Animation, scoping and "this". Talk about AJAX and how to work with async operations, with a touch on Promises. Finally, go over some jQuery best practices such as caching selectors and performant selector lookups. End with an example that ties everything together!

## Theme customization

You can change theme colors by changing the theme css to any of the following options:
```html
  <link rel="stylesheet" href="css/theme/gdidefault.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdilight.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdisunny.css" id="theme">
  <link rel="stylesheet" href="css/theme/gdicool.css" id="theme">
```
You can change the text editor theme by changing the highlight.js css to the following options:
```html
  <link rel="stylesheet" href="lib/css/dark.css">
  <link rel="stylesheet" href="lib/css/light.css">
```
You can change transition by changing the reveal transition property in Reveal.initialize
```javascript
  Reveal.initialize({
  				transition:  'default', // default/cube/page/concave/zoom/linear/none
  			});
```
