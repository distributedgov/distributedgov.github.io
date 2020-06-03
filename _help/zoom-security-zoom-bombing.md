---
layout: help
title: Zoom Security and Fixing 'Zoom Bombing'
description: Given all the newly-working-from-home zoom users out there, and the recent flurry of security alerts for Zoom video conference software, I thought this summary would be helpful.
excerpt: 
date: 2020-05-19 20:34:01 -0700
question: What is Zoom bombing?
categories: [Telework, Security, Communications, Managing, Meetings, Project management, Technology, Policy, Culture, Hiring]
tags: Zoom
author: johnoduinn
permalink: 

---

Given all the newly-working-from-home zoom users out there, and the recent flurry of security alerts for [Zoom video conference software](http://zoom.us/), I thought this summary would be helpful.

(1) A [few zero-day security exploits for zoom](https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=zoom) were announced recently. Many are already fixed in the latest version of zoom. And watch carefully for new updates from zoom in the coming days. As expected, soon after writing this post, zoom released a updated version with security fixes. Make sure you are running at least v4.6.10 (20041.0408).

(2) “[zoom bombing](https://en.wikipedia.org/wiki/Zoombombing)” happens when someone guesses your meeting url, joins un-invited and disrupts your meeting. To prevent this, there is an existing setting in zoom to add a password to your meetings. Use it. To make this easy for users, zoom appends the password to the meeting URL, so most people using zoom just click on the URL and join instantly without needing to type in the password. Importantly, people without the URL cannot zoombomb your meeting unless they guess the meetingID and the long password! To review your settings (and if needed change this setting), login to your zoom profile on zoom.us and look at your user profile settings. Under “Personal -> Settings -> Meeting”, make sure you have *at least* these three settings turned on.

![Zoom security settings](/img/posts/zoom-security-settings.png)

(3) Zoom changed the default settings on Sunday (05apr2020), to address press coverage around zoom-bombings, and push users to use these passwords by default. Watch for changes to default zoom meeting behavior Monday morning – depending on your existing meeting invites, you may have to re-notify attendees of new longer-URL-with-password for upcoming meetings. NOTE: I recommend putting the zoom URL into your calendar invite, so all attendees see the same info at the same time. This helps you avoid delaying meetings while people search for the correct/updated URL and end up joining the meeting late. Zoom also [wrote their own “tips and tricks for secure zoom meetings” post](https://blog.zoom.us/wordpress/2019/12/04/hosts-admins-secure-zoom-meeting-experience) which you might also find helpful to read.

(4) [The Washington Post reported](https://www.washingtonpost.com/technology/2020/04/03/thousands-zoom-video-calls-left-exposed-open-web) that a bunch of Zoom “cloud” recordings were found on publicly-accessible Amazon S3 buckets. Details still developing, but until this is clarified, I recommend checking your zoom meeting invites for any meetings you record and change them from “cloud” to “local recordings”.

Thats all for now. If you know of any other zoom essential tips I should share, please let me know. 