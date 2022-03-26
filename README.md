# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](https://ik.imagekit.io/c5xc1x6srka/screenshot/screen-intro-component-with-sign-up-form_3pa3JQP-E.png)

### Links

- Solution URL: [https://github.com/samsonsham/intro-component-with-signup-form.git](https://github.com/samsonsham/intro-component-with-signup-form.git)
- Live Site URL: [https://samsonsham.github.io/intro-component-with-signup-form/](https://samsonsham.github.io/intro-component-with-signup-form/)

## My process

- Set up SCSS file structure. Define all the styles given by style guide, including colours and font into SCSS files.
- Define components and setup corresponding DOM elements in HTML file.
- Mobile first, build each elements by with colours, alignment, and adjusting size.
- Create js to validate email address.

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Javascript

### What I learned

I learn how to validate multiple fields by javascript.

```js
const invalidList = elem.form.querySelectorAll(':invalid');
invalidList.forEach((inputElem) => {
  showError(inputElem);
});
```

### Useful resources

- [How to find which child element is invalid in an HTML5 form](https://stackoverflow.com/questions/47378768/how-to-find-which-child-element-is-invalid-in-an-html5-form) - I learnt how to validate multiple input fields by js from this.

## Author

- Website - [Samson Sham](https://samson-sham-portfolio.vercel.app)
- Frontend Mentor - [@samsonsham](https://www.frontendmentor.io/profile/samsonsham)
- Twitter - [@samson_sham](https://www.twitter.com/samson_sham)
