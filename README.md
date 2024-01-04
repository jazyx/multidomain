# METEOR MULTIDOMAIN #

Proof of concept Meteor project, to show different skins depending on which domain name is used to connect to the Meteor app.

## Description
Suppose you host an app on a server which is set up with several domain names, for example: https://example.com, https://mycustomdomain.fun, and (for development) http://localhost or http://127.0.0.1. You can run one Meteor instance on your server and access it from different domains. The same application will appear with a different skin in each case.

## Use Case
Your Meteor app provides teaching tools that can be useful for different schools. You can set your server up to accept connections to a different domain for each school. Each school can also provide a skin for the app, so that the login screen and the styling is specific to that school.

End users who visit the sites of different schools will find the same tools, but with custom branding.