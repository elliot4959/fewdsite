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

---
### Problem Solving
As with any programming endeavour, a large amount of my time was fixing problems that cropped up throughout development. Some of the more interesting or complex ones would be:

* The alignment of the news articles on my index page, under the slideshow. Now, plain CSS would be an effective solution to this problem, but I decided to follow another path. I had a few reasons for doing this: My CSS document is already sitting at a healthy 342 lines, no need to make it bigger unnecessarily; I was designing for multiple screen sizes, so I would have to consider the layout myself at these differing sizes, and why make work for myself when I don't have to; The alternate solution should hopefully score me some style points, but the first two reasons were **_definitely_** the driving force here.
* The API call to gather weather information. This one I had to include because it was a real lightbulb moment for me, despite the problem being really simple in hindsight (it really is a gift and a curse).

#### Alignment
For my alignment, I ended up using flexbox. Now with only a few short flexbox lines I achieved exactly the behaviour I was looking for.

**Flexbox CSS**
```css
#flex-container {
  margin-top: 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(230, 230, 230);
}
```
So, by simply telling my container that it would use the flex display, that when resizing the screen, the flex items should separate to separate lines to maintain good readability and to show the items in the centre (or "center") I have all that I wanted in a compact and semantically meaningful way. No need to even write code comments here since this really explains itself.

#### API
I would like to think that no matter how experience a programmer you are, you will always make silly mistakes and feel fantastic when you manage to fix the problem you yourself created. I had a moment like this myself with my API call. The easiest way to explain this is with a show and tell demonstration:

**Original API URL**
```javascript
let baseURL = "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=6e5bf6c426e3464d831142025172411 \
               &q=Silverstone,UnitedKingdom \
               &num_of_days=1 \
               &fx=no \
               &mca=no \
               &format=json";
```
As the figure title might suggest, this is the first URL I attempted to use. I felt pretty good since I managed to break up the query string into its separate components to make it easily readable and added the backslashes to concatenate it to one big string. However, when I tried to use this to make my API call, I kept getting an error from the server (400 (Parameter key is missing from the request URL)). This confused me to no end, I could see my key right there in the URL, I checked and double checked that there were no typos in said key, I typed the URL in manually to my web client and found the URL worked fine, so I decided to do what I believe anyone would in my shoes, I decided to debug. I added as many console.log() lines as I possibly could and trawled through the console to check where my issue was, and finally I was rewarded. The actual URL I was sending was as follows: ![Bad API URL](https://image.prntscr.com/image/tqk9BrZjQT263n4Nu55fzg.png)
And there was my problem, by separating my lines and including backslashes I had added numerous spaces to my URL which caused it to behave unexpectedly with the Server.

My solution to this problem was to remove all the separation and simply enter the whole string and have it all written in my code as one long line. This solved my problem and I was relatively happy with this, though I really would have liked to have the lines separated in code to make it far easier to read and modify.

Then, whilst writing this README, I found my solution:

**Final API URL**
```javascript
let baseURL = "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=6e5bf6c426e3464d831142025172411" +
                "&q=Silverstone,UnitedKingdom" +
                "&num_of_days=1" +
                "&fx=no" +
                "&mca=no" +
                "&format=json";
```
Thanks to the actual closing of the strings on each line and then the concatenation of the next string to the previous, this method provides the exact URL I need and makes the code look far better. A real win-win found at the very last moment.

### Code/Ideas Used
https://google.github.io/styleguide/htmlcssguide.html (up to shorthand)
https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-omission
