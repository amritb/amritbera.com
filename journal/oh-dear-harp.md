I was almost ready with [Jekyll](http://jekyllrb.com/) to resume my blog after a 3 year pause. Closed and deleted all my [blogger](http://blogger.com) writings. I wanted to document my [node.js](http://nodejs.org) projects and other experiments. Checked [Jekyll](http://jekyllrb.com/) documentations and also initiated a branch named 'jekyllrb' in my repo. Always wanted to put that fancy ruby icon on the footer of my site!

Then came across this [hacker news post](https://news.ycombinator.com/item?id=6553374) eleven days ago. Built with Node, works with markdown, less and my most favourite template engine [Jade](https://github.com/visionmedia/jade)!

##Needless to say about the extreme speed of static sites and free github hosting! 

Read the quickstart and instantly got amazed. In no time fired up my own instance and just in a weekend created this site with blogs and couple of other pages.

[Kenneth's](http://kennethormandy.com/journal/start-a-blog-with-harp) post helped me a lot to get started but got stuck with putting it to gh-pages. Ended up with two instances of the same repo, set with diffterent branches.

````
|-- amritbera.com         <-- Branch 'harp'
|-- harp_amritbera_www
   |-- amritbera.com      <-- Branch 'gh-pages'
````
Finally compiled the source, copied the www contents to harp_amritbera_www and pushed to gh-pages.
````
$ harp compile
````
Git push and a page refresh. Then a 10 minutes break to click on the same nav links again & again and check if everything is perfect!

Harp is amazingly intelligent. The connect page is in html, the journals are in markdown whereas others are in jade. Whatever I throw in, it compiles that to static html.

##It can be a common practice these days. But for me, its magic!