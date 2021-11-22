# Milestone-Project-2 : Find a MMA GYM
![ScreenClip](assets/images/Wireframe/ScreenClip.png)


 __[Live Webpage](https://azimny86.github.io/Milestone-Project-2/)__
# Introduction

This site was created to give people information about good MMA gyms in Ireland. The idea for the website was born when my current employer sent me for training in another town , and was put in a position to look for one.

This is my second milestone on my Code Institute course, in which I was given the instructions to make an Interactive Front End Project.

I'm thankful for you all visiting my project. If you have any suggestions, questions or feedback feel free to reach out to me on GitHub.

# UX

## Goals
* My website allows you to easily find a good MMA gym in Ireland.
* Create a website that allows you to easily and intuitively navigate through the website.
* Successfully use the API on the website   


## User Stories

1. I am a user looking for a MMA Gym in Irland.
2. I am a user looking for adress of gym.
3. I am a user looking for webpage or facbook page of gym.
4. I am a user looking for a hints on how to find good gym.

## Design Process


* I started my design process with following the trend and making a website, only on one page with few secions "Map Section" , "Video Section" , "Few questions for beginners Section" , "Contact form" .
* During the design process, I use MMA gloves as inspiration for the selection of colors on the website.
![ScreenClip](assets/images/Wireframe/ColorHuntPalette282572.png)
1. black (Background and text in infoWIndow).
2. #f9d342(text and buttom on contact form).
3.  #fafafa(Background color on serchlist)

* For made a wireframe I use FIGMA. I made the design easy to navigate trough. 

# Wierframe
I use a  __[Balsamiq](https://balsamiq.cloud/)__  to make wireframes for the website, I created first a desktop version and after that, I make a tablet and mobile. 

You can find my mock-ups below:
* __[Desktop](assets/images/Wireframe/Desktop.png)__
* __[Mobile](assets/images/Wireframe/Mobile.png)__

# Features

## Features throughout page
## Navbar
* Navbar always sticks to the top of the page on devices with large screens
## Map
* Google Map api used
* Markers with gym positions
* After clicking on the marker, a window appears with the name of the gym, address and the website of the gym or the website of the gym on facebook
* Placed clusters with a large number of gyms in the area

## Video how to find a good MMA gym
* A video explaining how to choose the right MMA gym to help a beginner choose a good gym. The video used is from the YouTube channel __[Howcast ](https://www.youtube.com/c/howcast/featured)__ .
## FQA
* A few questions most frequently asked by beginners
## Contact Form
* Form for asking questions for users as well as for gym owners to add them to the database
# Technologies Used

## Languages
*  __[HTML](https://en.wikipedia.org/wiki/HTML)__ 
*  __[CSS](https://en.wikipedia.org/wiki/CSS)__ 
*  __[JavaScript](https://www.javascript.com/)__ 


## Technologies
*  __[Balsamiq](https://balsamiq.cloud/)__ 
*  __[Git](https://git-scm.com/)__ 
*  __[GitPod](https://www.gitpod.io/)__ 
*  __[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)__ 
*  __[W3C HTML Validation Service](https://validator.w3.org/)__ 
*  __[HTML Formatter](https://codebeautify.org/htmlviewer//)__ 
* __[Online JavaScript Beautifier](https://beautifier.io/)__ 
* __[Bootstrap](https://getbootstrap.com/)__
* __[Google Maps API](https://developers.google.com/maps/documentation)__

# Testing

## BUGS

* The site did not display the navbar on small screen devices:<br> It was a bug in the media section of CSS code, this was corrected by creating two navbars one for large screen devices and the other for devices with smaller.
I also added a large screen devices navbar will be stuck to the top of the screen


* Error about billing on consol and also on the map itself:<br>
    The error was caused by a misconfigured API it was fixed by reconfiguring on  __[Google Cloud Platform](https://console.cloud.google.com/)__

* HTML code does not pass validator:<br>
    The code does not pass the W3C validator check through non-closed elements this has been fixed by carefully checking the code in the W3C validator
    another bug in the code was due to some attributes and ifrem it was fixed with the addition of the built-in bootstrap **embed-responsive-item** class and adding the title to the link

Result of checking the code after correcting:
 __[HTML](/assets/images/Wireframe/IndexValidatorRaport.png)__

* During testing, I also encountered a problem with errors displayed in consol  __[bug](assets/images/Wireframe/bug_-_22_lis__10_03_AM.png)__
it was fixed by disabling all extensions in the browser

## Testing Devices

My webpage was tested using Google Developer Tools to see if it's responsive. 
* __[Desktop](assets/images/Wireframe/ligthouse-Desktop.png)__
* __[Mobile](assets/images/Wireframe/lighthouse-mobile.png)__<br>
All devices were tested successfully including Iphones, Samsungs and Ipads of different screen sizes.


## Validating HTML5 and CSS3 code
My code CSS and HTML  used in the project was tested on the WC3 Validation pages and passed all tests
* __[CSS](/assets/images/Wireframe/CSSValidatorRaport.png)__
* __[HTML](/assets/images/Wireframe/IndexValidatorRaport.png)__


# Deployment
This project was deployed via GitHub by following these steps :
* Navigate to the repository on github and click Settings.
* From there, go to the Source section within the Github Pages section.
* Select master branch on the dropdown menu, and click save.
* The page will be available at this link __[Find a MMA Gym in Irleand](https://azimny86.github.io/Milestone-Project-2/)__.
****
# Credits

## Content
YouTube video it's from the channel __[Howcast ](https://www.youtube.com/c/howcast/featured)__ .  The rest of the content was written by me, all gyms really exist.