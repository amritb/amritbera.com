Title: Why I built transcode.io
Date: 2013-10-18 19:30
Modified: 2013-10-18 19:30
Category: Idea
Slug: why-i-built-transcode-io
Authors: Amrit Bera
Summary: Why I built transcode.io

I have been working with web technologies for past 5 years and what seems like an eternity. I built sites for all sorts of Toms, Harrys & various multinational brands.

One thing I have noticed very often while travelling down these convoluted paths is that people do want to embed videos in their sites. Not just [Vimeo](https://vimeo.com/) or [Youtube](http://youtube.com), but they want to upload and put them on the site. Of-course I say them its not a good idea to directly put them there, as they are "big and fat" and take up a lot of space on the sofa, leaving very little for others to be comfortable in. Then I explain to them about transcoding and how much time it consumes to integrate it. Also brief them about [Zencoder](http://zencoder.com) and other similar solutions (I feel these are quite expensive and restricted, as I regularly work with [ElasticTranscoder](https://aws.amazon.com/elastictranscoder/) on high budget projects) - losing "the fat" is not easy business.

 As far as I know, drupal don't have any direct approach to integrate [ElasticTranscoder](https://aws.amazon.com/elastictranscoder/). It does have modules for uploading to [S3](https://aws.amazon.com/s3/), but you are on your own with [ElasticTranscoder](https://aws.amazon.com/elastictranscoder/). I have a custom module to do it, but still don't like it much. I have this bad habit of writing too much code even if there are direct solutions. I just want it my way.

##The geek monster in me remains satisfied!

Of all the additional trouble in the world, with the rising prices of products and vegetables, the global warming, radical elements in society, Facebook security :-P , the last thing people want to trouble themselves with is all of this.

I wanted a tool or a system which will take care of all the [S3](https://aws.amazon.com/s3/) business (the extra sofa) and then transcoding (the gym training) & storing it for later use. All this should happen seamlessly. I don't want to charge my clients exclusively for the integration (storage and transcoding charges are anyway there). Yet I don't want to loose the flexibility to code my &lt;video&gt; element and use whatever player I like.

I built [transcode.io](http://transcode.io) which does exactly this. Users upload HD videos which are saved in the host server or a CDN. This is a very common practice with just file upload form element and some validation. Developers store the path of the file in db and then prints it back inside the video element's source property. 

[transcode.io](http://transcode.io) just want you to pass in the video path and it does the rest. Transcodes it and then stores it to [S3](https://aws.amazon.com/s3/). When its done, it also gives a 301 redirect to the [S3](https://aws.amazon.com/s3/) transcoded video file. Also it sends temporary processing and error videos when needed. 

Thats it then! Now you can all worry about the much more important things in life like fine tuning the starting line you have been planning to use on the pretty girl/guy you have been wanting to talk to for a long time. 

Oh I should also mention my friends, who are big in the industry so you can trust them to give a solid hand to my product.

##transcode.io is built with Node.js and heavily uses streams. Hosted with Heroku

I have released an alpha version (just a MVP) to see if anyone else wants to use it. If you are interested, please submit the form at [transcode.io](http://transcode.io) and your account ID will be sent to you.

Happy transcoding :)