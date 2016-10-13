---
className: javascript
layout: post
---

![ES6, the awesome parts](/assets/es6_awesome.jpg)

ECMAScript 6 brings a lot of cool new features, one that I hadn't heard about until today is [Array.prototype.copyWithin](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

According to the MDN, copyWithin:

> The copyWithin() method copies the sequence of array elements within the array to the position starting at target. The copy is taken from the index positions of the second and third arguments start and end. The end argument is optional and defaults to the length of the array.

This left me... with no idea as to what this method does.

## copyWithin

It appears to do array manipulation. I think examples make it a bit easier to understand.

<script src="https://gist.github.com/jkup/030d8cff2cfb0af996c0fe9769a0fe8f.js"></script>

It's worth noting that the third parameter is optional. If it isn't specified, it will assume you want to copy all values from the start index until the end of the array.

What copyWithin does is takes a subset of the array ( from start to end ) and copies it over the array's current values starting at target.

## Examples

If you were to call it like this:

<script src="https://gist.github.com/jkup/ff9442bcec9d41ae833d229635b0164b.js"></script>

Or you can call it with just the first two parameters:

<script src="https://gist.github.com/jkup/b17f028f31494f01061e01216b78fcd6.js"></script>

## What this method is good for?

I'm honestly having a tough time answering this one! Have a good use case? Share it with me on [Twitter](https://twitter.com/jkup)!

Gotten a few good responses so far!

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/jkup">@jkup</a> <a href="https://twitter.com/angustweets">@angustweets</a> this was one of the most confusing ones to implement in the shim. I’m going to guess its useful for typed arrays.</p>&mdash; Jordan Harband (@ljharb) <a href="https://twitter.com/ljharb/status/590951277963583488">April 22, 2015</a></blockquote>

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/jkup">@jkup</a> <a href="https://twitter.com/angustweets">@angustweets</a> it&#39;s not for authors, it&#39;s primarily for the compile-to-js use-cases from other langs (aka asm.js stuff)</p>&mdash; getify (@getify) <a href="https://twitter.com/getify/status/590906149542633473">April 22, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
