---
layout: post
title: WebSockets, a game of give and take
description: Stop pulling for data when you should be pushing.
image: socket-io.jpg
---

Clients polling servers for data is usually wrong. It doesn’t make sense. It’s not how things are done in the real world.

All updates on the web happen for one of two reasons:

1. **Client-Updates-Server**. The client has done something differently and the server needs to know about it order to make updates. Think scrolling around on Google Maps.

2. **Server-Updates-Client**. The server has more up to date information than was originally served to the client and needs to make the client aware. Think stock tickers.

The problem is that we handle both of these situations the same way, forcing the client to poll for updates regularly. This approach works well for **Client-Updates-Server** but there are a few problems for **Server-Updates-Client:**

1. You have to make a choice between polling too frequently and wasting a ton of resources, or not polling frequently enough and having your users look at stale data.

2. You’re always making two requests when only one is needed. When you AJAX out for data you make a request to the server, which checks to see if it has new information and makes a request back. If you could skip the first request, there would simply be **half as many** requests being made.

## Enter WebSockets

WebSockets is a technology that allows you ( the server ) to open an interactive tunnel to your users ( the client ). You can check out the [official RFC here](http://tools.ietf.org/html/rfc6455), read [the MDN article](https://developer.mozilla.org/en-US/docs/WebSockets) or just start messing around with [Socket.io](http://socket.io/) now!

[Socket.io](http://socket.io/) has been out for a while now but it has mostly been used for projects where the benefits of push are obvious like video games or collaborative apps like [Trello](https://trello.com/). I want to talk about it’s use in sites and apps where the benefit of push might be more subtle.

### A Simple Check

Next time you’re working on a web app, and you go to do an AJAX call, ask yourself this question:

> Is it the client or the server with new information to share?

If the client has new information, go ahead with AJAX business as usual! Otherwise, please consider switching to WebSockets.

## Limitations

At the time of this writing, WebSocket technology is pretty limited to stacks that are long running processes like Node.js. If you wanted to get WebSockets working with scripting languages like PHP or Ruby, you’ll have to add something like [Redis](http://redis.io/) for pubsub. Check out [this PHP implementation](https://github.com/rase-/socket.io-php-emitter) for more information on setting that up.

The point is, the more we all start using this technology the better the tooling around it will be. So stop pulling when you should be pushing!
