# Why I built transcode.io

(Still a draft) I have been working with Drupal for past 5 years. I built sites for several people & multinational brands.

One thing I have noticed among all is, people do want to embed videos in their sites. Not just Vimeo or Youtube, but they want to upload and put those in the site. Of-course I say them its not a good idea to directly to directly put those in the site, as they are huge. Then I explain them about transcoding and how much time it consumes to integrate. Also brief them about Zencoder and other similar solutions (I feel these are quite expensive and restricted, as I regularly work with ElasticTranscoder on high budget projects).

 As far as I know, drupal don't have any direct approach to integrate ElasticTranscoder. It does have modules for uploading to S3, but you are on your own with ElasticTranscoder. I have a custom module to do it, but still don't like it much. I have this bad habit of writing too much code even if there are direct solutions.I just want it my way. 

##I wanted a tool or a system which will take care of all the S3 stuffs and then transcoding & storing it for later use. 

All this should happen seamlessly. I don't want to charge my clients exclusively for the integration (storage and transcoding charges are anyways there). Yet I don't want to loose the flexibility to code my &lt;video&gt; element and use whatever player I like.

I built transcode.io which does exactly this. Users upload HD videos which are saved in the host server or a CDN. This is a very common practice with just file upload form element and some validation. Developers sore the path of the file in db and then prints it back inside the video element's source property.

##Transcode.io just want you to pass in the video path and it does the rest.

Transcodes it and then stores it to S3. When its done, it also gives a 301 redirect to the S3 transcoded video file. Also it sends temporary processing videos when needed. 

Its built with Node.js and heavily uses streams. Hosted with Heroku (for now). I have released an alpha version (just a MVP) to see if anyone else want to use it. If you are interested, please submit the form at [transcode.io](http://transcode.io) and I will send you your account ID.

Happy transcoding :)