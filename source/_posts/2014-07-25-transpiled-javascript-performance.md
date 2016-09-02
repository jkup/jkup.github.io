---
layout: post
title: Transpiled JavaScript Performance
description: Is Google's Traceur deoptomizing your code?
image: traceur_demo.png
---

A really interesting discussion *almost* happened between <a href="https://twitter.com/getify">Kyle Simpson</a> and <a href="https://twitter.com/jdalton">John-David Dalton</a> at <a href="http://forwardjs.com/">Forward JS</a>.

John mentioned that most browsers deoptimize your functions if they contain a try-catch. Kyle had mentioned earlier that catch blocks are the only way to have block scope in JS and so transpilers like Google's Traceur use them to backport ES6's *let* keyword.

So that begs the question

<blockquote>Is Google turning your code into something it refuses to optimize?</blockquote>

## ES6 Block Scope

Coming with ECMAScript 6, you'll be able to get block scope like this:

<pre><code class="language-javascript">{
    let a = 2;
    console.log(a); // 2
}

console.log(a); // undefined
</code></pre>

## Block Scope with Traceur

Traceur allows you to use this block scoping technique today by turning your code into try-catch blocks under the hood.

Check out the <a href="https://google.github.io/traceur-compiler/demo/repl.html">Traceur Transcoding Demo</a> for yourself! Just remember to turn on the option for experimental.

If you try the code shown above, you'll see this result in the right pane.

<img src="{{ site.url }}/images/traceur_demo.png" alt="Traceur try-catch" />

## JS Perf with Try-Catch

The second piece of this puzzle comes to us from Kevin Gadd in the form of a JS Perf.

<a href="http://jsperf.com/try-block-deoptimization">On this page</a> you can plainly see that adding a try-catch reduces operations per second from 90K to 20K in a simple add example.

## Is There Something We're Missing?

Perhaps something else is happening behind the scenes?

It seems as though Traceur's compilation of this feature can really wreak havok on the performance of your code.
