# Getting started with the Panorama Browser

This react application allows you to browse panorama images, powered by the [Pannellum](https://pannellum.org/) panorama viewer.

To get started, run:
    npm install
in the root directory.

# Customizing the Panorama Browser

In order to specify the panorama images to be displayed, one must modify the panoramas.js file.
This file is located under
    src/shared/panoramas.js
It contains an example object that this application uses to display panorama images.

# Running the Panorama Browser
To run this application, simply use the command:
    npm start

# Notes
- Panoramas are displayed in the order they are specified in the panoramas.js file.
- Pannellum is not included in the package.json file. Rather, the Pannellum CDN is leveraged via an iframe.