# Website

I initially had a personal website designed and hosted on Wix that I built near the end of my grad career. I didn't quite have the time to really delve into how to build a website so the drag-and-drop interface kept things easy and fast. 
However, I've definitely noticed a lot of downsides compared to building a website from scratch:
- Inflexible design choices. There were many limitations on design, both in placement of objects, transitions, etc.
- Speed of the site. The site was slow for the small amount of information it had.
- Lack of compatibility. A site designed on Wix cannot be transferred to a different host (or converted to HTML, etc.) as Wix uses it own engine. This was probably the largest point of contention for me.
- High price. It's just plain expensive.

As a result, I decided I wanted to learn basic web development - by basic I mean truly simple HTML, CSS, and JavaScript. After going down the rabbit hole of webhosting (even considering self hosting on the Plex machine) I decided to take things one step at a time and focus on building a site first. The easiest (and free!) way of hosting I found was through (github pages)[https://pages.github.com/].

The website can be found on: [richyyun.github.io](richyyun.github.io)

## TODO
1. Figure out implementation of a menu bar.
   - There are two ways to make a menu consistent across different pages of a website, first is to build the site as only one page and use JavaScript to hide / show appropriate content. The second is to have the same menu on each HTML file for each page, for which you can copy paste or use JavaScript or php to load a file in instead.
   - Not entirely sure which one is better yet - first approach is easier, but second approach seems cleaner. Slightly concerned that reloading the menu each time would show as jitter, but remains to be seen.
3. Build the homepage.
   - Would like to make some graphic for this. Currently thinking name, neuroscientist, with a brain image in the middle.
   - May delve into blender / rendering an animation with lighting using a 3D model of a brain for this as that would be cool to do.
   - In the future may look into threejs to have the light source be where the mouse is and the brain lighting up from different angles.
5. Build the about page.
   - Need to see if I can use a photo from the Sonera website. 
7. Build the projects page.
   - Includes all projects including personal, grad, and undergrad.
9. Build the links page.
   - Likely just email, linkedin, and github.
11. Fine tune design and animations.
