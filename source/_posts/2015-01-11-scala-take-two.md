---
layout: post
title: Scala, Take Two
description: A follow up to 24 hours with scala. This is my day two post.. a few days late!
image: scala.png
---

<img src="{{ site.url }}/images/scala-lang.gif" alt="Scala, take two" />

A few more days working on this Scala project and I'm liking the language even more. Let's dive in!

<img src="{{ site.url }}/images/good_bad_ugly.jpg" alt="the good, the bad and the ugly" />

<!--more-->

## The Good

+ **Immutability** - Scala makes heavy use of the *val* keyword which is essentially an immutable data type. Scala also provides the *var* keyword which is great for those of you used to JavaScript, but it's really surprising how rarely you need it. Here's an example:<pre><code class="language-scala">val foo = "Hello World"
foo = "Something Else" // This will not compile, you cannot change immutable data
</code></pre>

+ **Immutability continued** - Immutability is great, but perhaps you are wondering "What do you do about for loops?". It's such a common pattern in the JS / Ruby / PHP world. If you need to iterate through almost anything you'd do something like this:<pre><code class="language-javascript">for ( var i = 0; i < 20; i++ ) {
    console.log(i);
}
</code></pre>this poses a serious problem if you're using immutable data types. The solution leads me to my next section:

+ **Map everything** - Here's where the real elegance begins to show. Instead of iterating through mutable variables like traditional imperitive languages, in Scala you can [map](http://www.scala-lang.org/api/current/index.html#scala.collection.immutable.Map) over any iterable data type. Check it out here:<pre><code class="language-scala">val foo = List(1, 2, 3, 4, 5)
foo.map( bar => bar * 2) // 2, 4, 6, 8, 10
</code></pre>You can also take advantage of this nice *for* synax ( hint: It just does a map under the hood )<pre><code class="language-scala">val foo = List(1, 2, 3, 4, 5)
for( var bar <- foo ){
    println(bar);
}
</code></pre>

> The brilliance here is that you can map any 'iterable' data type. This means Lists, Arrays, Objects, Collections. It doesn't matter, Scala knows how to map over it.

+ **Traits, not datatypes** - (Disclaimer: I'm out of my depth there.) I'll probably come back and amend this section as I learn more about the language. In JavaScript, methods are attached to objects, meaning that functionality like *map* belong to the *Array* object. For example, if you want to map over a regular JavaScript object you'd have to do something like:<pre><code class="language-javascript">Object.keys(myObject).map(function(value, index) {
    console.log(myObject[value]);
});
</code></pre>Something that I find lovely about Scala is that it doesn't care what data type you are working with, so much as what traits that data type has. Like I mentioned before, you can map over any data that has is iterable.

## The Bad and The Ugly

+ **The weight of Java** - I read a post a while ago entitled [Java for Everything](http://www.teamten.com/lawrence/writings/java-for-everything.html). There was a section that stood out to me:

> The big argument against Java is that it’s verbose. Perhaps, but so what? I suppose the real argument is that it takes longer to write the code. I doubt this is very much true after the first 10 minutes.

I have to disagree with this. It's not the verbosity, it's the dependency management. I really don't mind the syntax for Java and I love the syntax of Scala but setting everything up is just terrible. I finally got everything set up on my personal machine, and having to set it all up again on my work computer was just as painful.

I've been thinking a lot about how tools like [Vagrant](https://www.vagrantup.com/) or [Docker](https://www.docker.com/) could make all of this a lot better. My only worry is that building large scala JVM applications requires a lot of system resources which I think would be problematic with a virtual dev environment.

+ **Lack of community** - Say what you will about JavaScript, but the community is stunning. There are limitless IRC channels, Stackoverflow groups, books, blogs, interactive videos, etc. If anything, the problem with the JavaScript community is that too many people are building libraries and writing blog posts.

Coming from that, it's weird how empty the Scala community feels. The web frameworks are lacking in documentation. Stackoverflow posts often go unanswered. It's just a different culture.
