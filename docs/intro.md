# Introduction

Welcome to MAASU Technical Networking! This is a simple guide on
how to get up to speed on the technical side of the website. It 
will walk you through everything you should need to know for this 
position.

## Table of Contents
1. [Position](#position)
2. [Github](#github)
3. [Getting Started](#getting-started)

## Position <a name="position"></a>

First of all, what does the technical networking position entail?
One of the main duties of the technical networking chair is upkeep
and maintenance of the MAASU website. This repository (we'll talk 
about what that term means in [github](#github)) is the raw source
code of the website. I'll give detailed instructions on why it was
decided to be coded from scratch, as well as how to edit it.

#### Why is the website important?

The website is one of the most important platforms of MAASU. 
MAASU is a largely online-based nonprofit, and while it maintains
a consistent social media presence, the website is a non-platform
specific source of content and materials for the general public 
and those without social media. The website additionally brings in
traction from search engines like [Google](https://www.google.com/).

#### Why a custom website? Why not Wordpress or Squarespace?

In the early days of MAASU, we used [weebly](https://www.weebly.com/)
to promote our platform. However, the tool at the time was largely 
ineffective and uncustomizable. We transitioned over to [Wordpress](https://wordpress.com/)
around 2016.

In late 2018, the website was hacked by third-party plugins and promoted
messages other than the ones we intended. We quickly disabled the site
and embarked upon a new course of action.

We needed a website that would allow us to freely customize the layout
of the site while still keeping relatively easy maintenance and low cost.
Based on those needs, we decided that a custom website would work best.
Other website builders either were cost ineffective or restricted our 
ability to customize.

While this solution requires more upkeep, it reaps more long-term benefits.

## Github <a name="github"></a>

You may be completely new to technologies such as Github. Why is our source
code hosted on a site such as Github, and not in Google Drive or OneDrive?
Github is a _version control server_, meaning that it can track versions
through time. With Github, it is easy to track down website revisions
made a year or two years ago, something not currently possible with online
drive services. _Git_ is a client service which communicates with Github.

## Getting Started <a name="getting-started"></a>

To get started developing and changing the website, you'll first need to get
your environment set up for running the website locally. In average development,
you'll be running the website on your computer locally (this means temporarily
on your computer, and don't worry, it won't be live), make changes to the site,
then push those changes to the actual website.

First, you'll need to download [Git](https://git-scm.com/), a client which allows
you to communicate with Github. Since that's only a terminal interface, you can 
additionally download a _Git client_ which works with Git and makes things pretty
(I personally recommend [Gitkraken](https://www.gitkraken.com/)'s Git Gui).

Next, you'll need to download [Nodejs](https://nodejs.org/en/download/), since 
the website runs with Node.

Finally, you'll install `yarn`, a package manager. You can do it by opening a 
terminal (or Windows CMD) and running the following command:
```
npm install -g yarn
```

That's really all there is to it! Be sure to go back to the [readme](../README.md)
for instructions on how to install the packages and run a local website server.
You'll need a text editor to edit all the files. I recommend [VS Code](https://code.visualstudio.com/).

All my reasoning for the specific technologies I used while making the website
is available in the readme. I suggest briefly reading it before beginning to
make changes to the website, to get a basic understanding of why the website
is structured the way it is.
