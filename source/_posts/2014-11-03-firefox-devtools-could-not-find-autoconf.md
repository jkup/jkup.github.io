---
layout: post
title: FireFox DevTools could not find autoconf
description: How to fix autoconf errors when building FireFox devtools
image: firefox-devtools.png
---

Today I decided to build FireFox Devtools using [this tutorial](https://wiki.mozilla.org/DevTools/Hacking). When I tried to run the mach build command I got this error:

```
fx-team  ./mach build
/usr/bin/make -f client.mk -s
Adding client.mk options from :
    MOZ_OBJDIR=/Applications/MAMP/htdocs/fx-team/obj-x86_64-apple-darwin14.0.0
    OBJDIR=/Applications/MAMP/htdocs/fx-team/obj-x86_64-apple-darwin14.0.0
/Applications/MAMP/htdocs/fx-team/client.mk:304: *** Could not find autoconf 2.13.  Stop.
make: *** [build] Error 2
0 compiler warnings present.
 ```

which really boils down to:

```
*** Could not find autoconf 2.13.  Stop.
```

You most likely either don't have autoconf installed or you just have the wrong version. You can check which by running:

```
autoconf --version
```

and you'll either see something like *zsh: command not found: autoconf* **or** *autoconf (GNU Autoconf) 2.69*

Either way, you just need to make sure that you only have autoconf 2.13 installed so you can ( assuming you are on a Mac ) run these commands:

```
brew rm autoconf
brew tap homebrew/versions
brew install autoconf213
```

then try to run mach build again and you should be good to go!
