---
date: '2023-12-12'
title: 'My personal website'
slug: 'website'
summary: 'Welcome to my website. Here I detail why and how I did it. Also a look into the future.'
tags: ['tech', 'meta']
---

Hello you! Welcome to my website. For the longest time I wanted to have my own
hand-crafted place on the Internet. Just like this. Having a website is
beneficial, fun, creative, somewhat necessary, but also distressing.

### Websites are important

At this point, it should be clear that social media is controlling a huge amount
of people's time online. There are many problems with that kind of
centralization, censorship and uniformity for example. Owning a website gives
you your individuality back: display anything in any form!

Maintaining and perfecting a website is a hobby. My site is partly just for me,
even though it's accessible for anyone. Small and personal pages were the way
the Internet was used in the beginning. Interest in the craft seems to be
resurfacing, with some people calling it [digital gardening][digitalGardening].
(It's accurate, but I don't know how I feel about the branding.)

I've struggled with creativity a lot. I feel like writing would be the best
creative outlet for me. Currently my only "creative outlet" is "writing code"
and that's not what I meant by writing. I'm just so incredibly anxious and
afraid of judgement. (From who? Who reads these?) I normally post to social
media in the story format because it's so ephemeral. It feels liberating. But I
would also like to practice long-form writing. Have something I could look back
at, see the progress in and be proud of. A blog would be great for that. It
would also (hopefully) treat my perfectionism as a exposure treatment.

Lastly, I think owning an independent website is a sign of professionalism.
Especially in the field of IT. People should recognize the upsides and have even
a simple landing page because of them.

### How I did mine

The website itself is created using [Hugo][hugo], a static site generator. I
have my files -- posts, images and scripts -- completely separated. Nobody likes
vendor lock-in. My theme is a heavily modified version of
[hugo-bearblog][bearTheme1] with hints of [hugo-bearcub][bearTheme2]. Both of
them are based on [Bear Blog][bearblog], a simplistic blogging platform I like a
lot. After all that lecturing about individuality and creativity, I like to keep
my website very simple both technically and visually [for everyone's
sake][designedToLast].

I host my website on [GitHub Pages][hugoPages]. Version control, backups and web
editor come built in. I bought a custom domain and configured it in both ends
(the domain hosting service and the repository's settings). That's it, really.
Super simple if you have basic understanding of code.

### Implementing concepts everywhere

Hugo can create landing pages or portfolios. It can also create blogs. I wanted
both. [Home](/) is the landing page that lets me introduce myself and highlight
the most relevant projects and presences. [Blog](/blog/) is where I do the
writing. That's the core website in a nutshell. But there's more.

Next, I added [Now](/now). I like [the concept of a "now page"][now] that
describes one's whatabouts in short-term (having the first summer holiday after
uni) compared to the usual long-term (Tampere University graduate).

I try to minimize the amount of JavaScript my website is running. At first, I
had none. Not even analytics. But then I discovered [Status Cafe][statusCafe]
and the concept of microblogging just the current status. The service allows me
to easily fetch the newest post. A great and interesting addition to the now
page.

Ater my first blog post, I applied for [The 512KB Club][512kb], a collection of
websites that reject the modern way of developing bloated web. I was accepted
and placed in the "green team." Clubs and page directories are a concept that I
will always love for their discoverability and community feeling.

In the future, I'm planning on implementing every concept that resonates with
me. CC licensing, content in many languages, analytics with zero tracking,
webrings, more visual stuff, everything.

### What now?

It took a few dozens of hours, but I finally have a website I'm kind of proud
of. It looks like me and reflects the things I care about. And it's been such a
pleasant experience so far! I'm a bit afraid I don't have that much to say, and
the blog will remain short. But at least I have a place I can come back to when
I'm feeling inspired and ready to write -- or code.

[digitalGardening]: https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/
[512kb]: https://512kb.club
[bearBlog]: https://bearblog.dev
[bearTheme1]: https://github.com/janraasch/hugo-bearblog
[bearTheme2]: https://github.com/clente/hugo-bearcub
[designedToLast]: https://jeffhuang.com/designed_to_last/
[hugo]: https://gohugo.io
[hugoPages]: https://gohugo.io/hosting-and-deployment/hosting-on-github/
[now]: https://nownownow.com/about
[statusCafe]: https://status.cafe
