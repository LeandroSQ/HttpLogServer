# HttpLogServer
A simple HTTP web-server that logs its requests. Used for a personal project and ported to github afterwards.


It makes use of an local tunnel, so you don't need to pay a domain and a server to run with a valid URL. Just make sure you change the localtunnel subdomain on the code and it should run smoothly!

You can also disable the local tunnel and use ngrok if you wish.

Or simple disable the local tunnel and use as localhost or your local ip address. All of these options work!

## Now with file listings!
You can see list and view the content of your logs using this server. Just access the url that the server is listening to ad add the endpoint '/ftp'.
You'll see all of your logs sorted by date! And clicking on any will show it's contents.
