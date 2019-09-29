# GigarBox Website
Current status of website :
[![Netlify Status](https://api.netlify.com/api/v1/badges/e578c429-1453-4722-a8aa-273c6b7ced45/deploy-status)](https://app.netlify.com/sites/gigarbox-prod/deploys)

# How to change target email ID 
The destination email address for contact forms can be changed by changing the environment variable GATSBY_formSubmitEmail in Netlify. To change the email address, follow these steps : 

1. Log In to Netlify (via Github account).
2. Select the GigarBox website.

![Login To Netlify](./Screenshots/1.webp)

3. In the Navbar above select "Settings" nav option.

![Login To Netlify](./Screenshots/2.webp)

4. In the Sidebar select "Build & deploy".

![Login To Netlify](./Screenshots/3.webp)

5. Within "Build and deploy" select "Environment" option.

![Login To Netlify](./Screenshots/4.webp)

6. Under "Environment Variables" section click on "Edit Variables" button.

![Login To Netlify](./Screenshots/5.webp)

7. Change the value text box to the new destination email address for the Key "GATSBY_formSubmitEmail".

![Login To Netlify](./Screenshots/6.webp)

8. Scroll up to the Navbar and select "Deploys" option.

![Login To Netlify](./Screenshots/7.webp)

9. On the right hand side of the newly loaded page. Find the button "Trigger deploy".

![Login To Netlify](./Screenshots/8.webp)

10. Select "Deploy site" option. Now wait for a few minutes for the site to rebuild and the changes to take place. You can track the build status in this same page above.

![Login To Netlify](./Screenshots/9.webp)

![Login To Netlify](./Screenshots/10.webp)

11. Once the site build is "success", then the changes should be in place.

Please feel free to contact @sangeet at Github in case there is any confusion regarding the process.
