---
layout: post
title: 11 Inches And 300 Bytes – How Fast Is Your Website
---

This semester, I’ve decided to go back to school and finish getting my degree.

Just to make sure we’re clear, the only reason I’ve decided to finish school is because I’m already more than half way there and it just seems silly to start paying back my loans with nothing to show for it.

Moving on…

## Apparently Wi-Fi Impedes Learning

Unfortunately, one of my particularly boring classes has some sort of rudimentary technology blocking the campus wireless signal from inside the classrooms.

An easy fix right? — Just use my rooted android phone to tether to my laptop. Unfortunately, my class is on the 7th floor and I have somewhere between 0 and 1 bar of 3G service.

Okay, so I set my phone to tether, and use my Netbook to hop on the tethered Wi-Fi connection. Now I’m sitting in class on an 11″ Netbook screen trying to browse the web at less than 300 bytes per second. This has given me a whole new perspective on designing websites.

I mean, really think about it. How fast is your website? How long would it take to load on a 300 bytes per second connection? I know 300 bytes is ridiculous but let’s think about someone on a standard 56k dial-up connection. How long would your website take to load for that person?

<img src="{{ site.url }}/images/how-fast-is-your-website.png" alt="how fast is your website" />

I’ve got my site down to 66.7KB, which is not achievable for anything but a minimalist design like this one. My website would take a little more than a second to load, even on a slow dial-up connection.

## I’m Awesome, But That’s Not The Point

The real point I’m trying to drive home here is that often times we as designers, developers, publishers or what-have-you get seduced by sweet plugins and forget what the cost is. Remember that each plugin, CSS file, Javascript file, etc is another HTTP request — and they add up quick!

Things you probably don’t need that are killing your websites load times.

* Javascript Comment Systems – Disqus, Livefyre, etc.
* More Than One CSS File – Seriously, just combine them.
* More Than One JavaScript File – See Above.
* Poorly Compressed Images
* Not-Minified CSS and JS

Just some food for thought.