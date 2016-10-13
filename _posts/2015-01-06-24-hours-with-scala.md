---
title: 24 Hours with Scala
className: scala
layout: post
---

![Scala Language](/assets/scala-lang.gif)

It's been about 24 hours since I started working on my first Scala project.

I figured I'd write down some of my musings and observations here so I can look back later and laugh at how naive I was. That's what the internet is for, right?

## 1. Ruby style function definitions

Coming from JavaScript and PHP, it took a minute to get used to the def syntax of scala as opposed my normal function() {} syntax. No biggie if you're used to something like Ruby but it changes the general shape of your code.

### JavaScript Function

<script src="https://gist.github.com/jkup/d8eaedd86293578405293cc5a0aa9246.js"></script>

### Scala Function

<script src="https://gist.github.com/jkup/834e086e74aeb281113ed3522832c272.js"></script>

## 2. No return statements necessary

One of the weirdest / hardest / nicest things I've noticed is that many Scala frameworks don't specify what value a function returns with a return statement. Instead, functions in Scala will return whatever variable is set last in the function. For example:

### JavaScript return

<script src="https://gist.github.com/jkup/f5004df5c892213814362b462e606fd4.js"></script>

### Scala return

<script src="https://gist.github.com/jkup/25d6d636c095c064b30f6ae7aef88698.js"></script>

## 3. No semicolons

Ok ok, I know that *technically* semicolons aren't required in JavaScript but [good god you should use them](http://benalman.com/news/2013/01/advice-javascript-semicolon-haters/) anyway.

Things are different in Scala, not a semicolon to be found!

<script src="https://gist.github.com/jkup/5808e6541f0d060267734efe8b810493.js"></script>

## 4. Functional out of the box

This is a bit subjective, as JavaScript also provides everything you need for functional programming, but the community around Scala seems very pro functional programming.

Immutable data structures, high order functions, everything you need to get started mapping and reducing to your heart's content.

## 5. Very 'Java'

Getting set up on this project really reminded me of college. It was all '**wrong java version**' and '**which SDK do you want**' and '**SE EE ENTERPRISE OO JDK JRE 7SDK u777**' and all that.

It took a while to set up correctly and I'm still far from used to having to re-build every time I make a change. It's just a different workflow than PHP or Node but the debuggers are pretty good so I think it all mostly works out in the end.

## Liking it so far

I hope to blog a lot more as I get to know Scala better. Look out for more posts on here and on [Codeplanet](http://codeplanet.io) coming soon!
