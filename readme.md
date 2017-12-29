# Front-End Web Development Assignment 2 Website
## Formula 1 Website

### Designs and Ideas
The first place I went for design inspiration for my Formula 1 website was the official [Formula 1 website](https://www.formula1.com/). From here I got the idea of a large slideshow taking centre stage of my index page.

Looking further down the page I also implemented the smaller news stories, I went back and forth on the separation I would use for this content, but ultimately decided that at the largest size I would spread them out evenly over the screen. (More information to follow about how this was achieved technically).

I also used the official website to help me see how I might design my other pages, as I am not a particularly artistic or visionary designer. I am very pleased with this finished product, however, and am glad I was able to credit the place most of my design ideas began.

---
### Decisions
I would like here to talk about two technical decisions I had to make during the creation of this website.

1. **Index slideshow**: I was unsure of whether to have an automatically scrolling slideshow that would move forward after a predetermined amount of time or have it user controlled. I did try implemented both, but I had an issue whereby manually scrolling through the slides would cause the automatic transitioning to speed up. I could not begin to understand why this was the case but ultimately (and not at all technically) I decided to go with manual controls because the automatic transitioning of slides has always distracted me from the content of the rest of a webpage. Not to mention it was also extremely distracting when I was working on other parts of my index page, having something intermittently moving around and attracting my eye.

2. **Weather API**: On my race page I elected to include a weather API, so I could write real-time weather information for the track to the website. I managed this (after some difficulties, to follow) and was rewarded with a hefty chunk of JSON containing lots of valuable information. From this I had to select only the truly relevant information, else I would risk significant overload with only mildly interesting data. I decided, in the end, to only display current basic weather conditions and temperature for the track location, as these are the two variables that most effect a race. I was also toying with the idea of allowing a user to request specific information and modifying my query string passed in the URL, but decided to follow the principle of KISS (keeping it simple) to keep my website and audience focussed (I wanted a F1 website, there are already plenty of better sources for weather out there for use).
 
Of course, I had to make many more decisions than this, but I feel this has already run on somewhat, so I will leave it and hope that my website can speak for itself regarding things done or not done.

### Problem Solving


### Code/Ideas Used
https://google.github.io/styleguide/htmlcssguide.html (up to shorthand)
https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-omission