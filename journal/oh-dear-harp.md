#Oh dear Harp!

I was almost ready with [Jekyll](http://jekyllrb.com/) to resume my blog after a 3 year pause. Closed and deleted all my [blogger](http://blogger.com) writings. I wanted to document my [node.js](http://nodejs.org) projects and other experiments. Checked [Jekyll](http://jekyllrb.com/) documentations and also initiated a branch named 'jekyllrb' in my repo.

##Always wanted to put that fancy ruby icon on the footer of my site!

Needless to say about the extreme speed of static sites and free github hosting ^^.

Then came across this [hacker news post](https://news.ycombinator.com/item?id=6553374) eleven days ago. Built with Node, works with markdown, less and my most favourite template engine [Jade](https://github.com/visionmedia/jade)! Read the quickstart and documentation and instantly got amazed. In no time fired up my own instance and just in a weekend created this site with blogs and couple of other pages.

[Kenneth's](http://kennethormandy.com/journal/start-a-blog-with-harp) post helped me a lot to get started but got stuck with putting it to gh-pages. Ended up with two instances of the same repo, with diffterent branches set.

````
|-- amritbera.com         <-- Branch 'harp'
|-- harp_amritbera_www
   |-- amritbera.com      <-- Branch 'gh-pages'
````
FInally compiled the source with
````
$ harp compile -o ../harp_amritbera_www/amritbera.com
````
