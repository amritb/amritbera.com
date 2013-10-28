#Oh dear Harp!

I was almost ready with [Jekyll](http://jekyllrb.com/) to resume my blog after a 3 year pause. Closed and deleted all my [blogger](http://blogger.com) writings. I wanted to document all my [node.js](http://nodejs.org) projects and other experiments. Checked the documentations and also initiated a branch named 'jekyllrb' in my github repo.

##Always wanted to put that fancy ruby icon on the footer of my site (and free hosting ^^ ).

Needless to say about the extreme speed of static sites.

Then came across this [hacker news post](https://news.ycombinator.com/item?id=6553374) eleven days ago. Built with Node, works with markdown, less and my most favourite template engine [Jade](https://github.com/visionmedia/jade)! Read the quick start and documentation and instantly got amazed by it. In no time fired up my own instance and just in a weekend created this site with blogs and couple of other pages.

[Kenneth's](http://kennethormandy.com/journal/start-a-blog-with-harp) post helped me a lot to get started but I got stuck with putting it to github pages. Ended up with this structure:

````
|-- amritbera.com         <-- Branch 'harp'
|-- harp_amritbera_www
|-- amritbera.com         <-- Branch 'gh-pages'
````
Then I compiled the source with
````
$ harp compile -o ../harp_amritbera_www/amritbera.com
````
