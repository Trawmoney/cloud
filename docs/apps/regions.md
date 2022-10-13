---
title: Regions
menuText: Regions
description: Region information for Serverless Cloud apps.
menuOrder: 12
parent: Building Applications
---

# Regions

Serverless Cloud apps can be deployed to different regions all over the world. If you have already created an account, all of your applications will be deployed to the region that was selected by default. However, changing default regions, or adding new ones to existing apps, is a reserved feature for `startup` Serverless Cloud plans and above. 

If you have an existing Serverless Cloud account, but are not on a paid plan, you are able to change your org's default region once. Previously, all Cloud applications defaulted to US East. However, existing applications and their instances will not be moved. 

The current available regions are:

- US East
- US West
- UK
- Europe
- APAC

## Setting a Region for a new App

When creating a new app from the CLI, the app will use the default region you have configured during onboarding, or in Org Settings. You can overwrite this by passing a region argument to the start command, inside your new app’s directory.

In a new application directory, use:

`cloud --region us-west` or `cloud --region “US West”`

This will set all instances within the app to be deployed to the provided region, _including personal sandboxes_.

## Deploying an App to multiple Regions

If you have an app that is set to a region, but want a stage available at another, you can set this in two places.

Within the dashboard, on your app's page, you can set a region from the "Create Stage" button at the top right. This will default to your App's region. 

*NOTE*: Once set, your stage's region (along with its data and storage contents) will _not be movable_. 

You can also pass CLI options with `--region` to specify:

`deploy --region us-west`

or if in headless mode:

`cloud deploy --region us-west`

## Creating Preview Stages in Multiple Regions

If you want to crete a preview instance that's different than your app's default region. You can pass the `--region` parameter to `share` command. This will copy both code and data to the preview stage in the specified region. 

`share --region apac` 

or if in headless mode: 

`cloud share --region apac` 
