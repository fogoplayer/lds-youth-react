# LDS Youth (React)

LDS Youth is an initiative to create a PWA to provide access to electronic versions of resources provided by the Church of Jesus Christ of Latter-Day Saints for its youth. This project is not affiliated with the church. This repository, in particular, is an effort to rewrite the site using ReactJS.

### Contribute

This project only has one main developer. Right now I am attending school full-time, working on the site on evenings and lunches. As such, any community support would be appreciated.

#### I don’t know how to code. How can I help?

##### Proofread

The biggest way you can help is to proofread. This project contains thousands of lines of text, and any number of those lines could include a typo. Two errors that I’ve noticed several times in my own pre-release proofreading are random spaces in the middle of words, and paragraphs that are missing their last period.

  

I’ve also seen links that went to the wrong address, question responses that showed up in the wrong section, and pages whose title doesn’t match their content. Each of those was corrected as soon as it was found, but there may be more.

  

If you're interested in contributing in this way, go to the [Contributing Document](https://docs.google.com/document/d/1OLUO3HdsXkV9hQbOzdstd-tukeNeMZ8wGSlyoKDl6OE/edit?usp=sharing)
  

##### Suggest improvements

The second way you can help is to suggest improvements. We are now transitioning the site from a word-for-word copy of the Duty to God and Personal Progress booklets to something that fully takes advantage of the benefits of a digital format. References to page numbers are being replaced with hyperlinks, and any point where the user is told to write something down in a journal or notebook now has a space for them to write. If I missed something, submitting it through the "Contact the Developer" form will let me know that changes need to be made.

  

In addition, if you have an idea for a useful feature, request it with the "Contact the Developer" form. Just make sure it’s not one of the features already in development (see the “Features in Development” section of this page).

##### Provide art

Right now all art is Creative Commons images taken from the internet. While this solution works, custom art would be preferable. We need 256 x 256 icons to represent Duty to God and Personal Progress, and a 128, 144, 152, 192 and 256 square favicon for the entire site. Concepts can be sent to [zarinloosli@gmail.com](mailto:zarinloosli@gmail.com).

#### I know how to code. How can I help?

##### Fix Issues

Any help in fixing bugs, typos, and formatting errors would be invaluable. See the “I don’t know how to code. How can I help?” section for information on the kinds of bugs I suspect exist.

  

One bug in particular that will require some technical knowledge to spot: all editable divs have an ID based on the page they are on. These need to be double-checked to make sure that the ID does not describe a different page; if this were to happen, it could cause user data to be overwritten or make it appear somewhere other than where it was submitted.

##### Develop Features

LDSYouth is the effort of a single person working in his spare time. Anything that I hope to add in the future, and their progress, is listed in the “Features in Development” section below. Feel free to work on any of them, or work on an idea of your own.

  

### Features in Development

#### Progress Indicators

All features are listed with one of three progress indicators. 

##### Research

Features at the research stage are purely conceptual. I am looking into if they are possible, or developing the skills required to carry them out.

##### Awaiting Development

If something is awaiting development, I have completed my research and understand the technologies required to make it a reality, but at this time it is not my main priority. This could be because a different feature is already in active development or due to me not having enough time to work on the project at the moment.

##### In Development

A feature that I or someone else is actively working on. If you begin working on a feature, use the “Contact the Developer” form to give me your GitHub username and the feature you are working on, and I will update this page to reflect that.

#### Feature List

##### Optimize Save Algorithm (Awaiting Development)

Currently, any time a key is pressed on the page the full contents of every div on the page is saved to localStorage. While no issues have been noted with lag, this is still unnecessary.

##### Add previous and next buttons (Awaiting Development)

Add buttons at the top and bottom of each page to move on to the next section or go on to the last.