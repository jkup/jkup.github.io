---
layout: post
title: Modern Password Management
description: How to manage all of your passwords, balancing security and convenience.
image: heartbleed.jpg
---

There have been more than a few security scares going around the internet lately.

<img src="{{ site.url }}/images/heartbleed.jpg" alt="Heartbleed Logo" />

Whether you've been keeping up with the news, or not, you need to be sure that you are using strong passwords for your various online accounts.

## Things to consider

When selecting a password there are a few things you need to consider.

* Entropy
* Attack Methods
* Password Variety

Let's take a look at each of these.

## Entropy

Simply put, *password entropy* is a term for how difficult to guess a password is. There are really two schools of thought on creating a difficult to guess password.

* Length - <a href="https://xkcd.com/936/" target="_blank">correcthorsebatterystaple</a>
* Randomness - 2*mWX3XWL9pZAfMh4p6*wK3J]%c]=

Understanding these two schools of thoughts ultimately boils down to understanding potential attack methods.

## Attack Methods

There are really two password attacks you should be considering when choosing a password.

* <a href="https://en.wikipedia.org/wiki/Brute-force_attack">Brute-force</a>
* <a href="https://en.wikipedia.org/wiki/Dictionary_attack">Dictionary</a>

### Brute-Force Attacks

One of the most common methods for cracking passwords, the basic idea is to try every possible letter number combination until eventually getting it correct. As you might imagine, randomness doesn't help make your password harder to brute-force. But before you start piling words together, let's check out the next type of attack.

### Dictionary Attack

As you may imagine from it's name, this type of attack uses a dictionary ( or word list ) to attempt password cracking. Very different from the brute-force attack, this one renders your long string of words password ultimately useless.

## Password Variety

Just as an aside, using multiple passwords for different accounts means that even if one is breached, the attacker won't have your password for everything. Far too often attackers target unimportant services with relatively weak security and then use your username / password combination to go after your email, bank, and other important accounts.

# Managing It All

Now that you want to have many different passwords that are both long and full of random characters, you'll need some type of software to manage it all.

<img src="{{ site.url }}/images/1password.png" alt="1Password Logo" />

Personally, I use <a href="https://agilebits.com/onepassword">1 Password from AgileBits</a> to manage mine, but you can use <a href="https://lastpass.com/">Lastpass</a> or whatever else you'd like. Whatever you choose should be able to do a few basic tasks.

+ Generate high entropy passwords
+ Manage all of your passwords
+ Sync between devices ( computers and mobile )

I think that all of the passwords I create fall into one of the following three categories.

1. Low-priority website that needs to be accessed from multiple devices.
2. High-priority website that only needs to be accessed from your main device.
3. High-priority website that needs to be accessed from multiple devices.

### Low-priority / multiple device

For most of these websites, I create an easy to remember combination of letters and numbers and just commit it to memory. Sometimes I don't even both to save these in 1Password.

### High-priority / single device

These are also very easy. I use 1Password to generate a 30 character string comprised of letters, numbers and symbols and save it in the app.

### High-priority / multiple devices

This is also fairly simple to do with an app like 1Password. I generate 30 character strings and then sync my passwords between the mobile app and the desktop app on multiple devices. Honestly, after I had to set up syncing on all my devices I began generating high entropy passwords even for lower stakes sites.

## A Word of Warning

The basic idea with these password managers is always the same. They are apps on your computers locked behind a single password -- or a *single point of failure*. This means that if someone got access to your computer and cracked your 1Password password they would have all of the rest of your passwords in plain text.

Personally, I think it's the best option out there - and there are security measures you can take to make your system more secure, but I just thought you should all be aware of the potential shortcomings!
