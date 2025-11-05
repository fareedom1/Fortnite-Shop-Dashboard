# Web Development Project 6 - *Fortnite Shop Dashboard Part 2*

Submitted by: **Fareed Uddin**

This web app: **Builds on the Fortnite Shop dashboard to add item detail pages with unique URLs and two data visualizations that summarize the shop inventory by type and rarity using live API data.**

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - Clicking on an item in the dashboard list navigates to a detail view for that item
  - Detail view includes extra information about the item not included in the dashboard view
  - The same sidebar is displayed in detail view as in dashboard view
  - *To ensure an accurate grade, your sidebar **must** be viewable when showing the details view in your recording.*
- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  -  *To ensure an accurate grade, the URL/address bar of your web browser **must** be viewable in your recording.*
- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - At least two charts should be incorporated into the dashboard view of the site
  - Each chart should describe a different aspect of the dataset


The following **optional** features are implemented:

- [ ] The site’s customized dashboard contains more content that explains what is interesting about the data 
  - e.g., an additional description, graph annotation, suggestion for which filters to use, or an additional page that explains more about the data
- [ ] The site allows users to toggle between different data visualizations
  - User should be able to use some mechanism to toggle between displaying and hiding visualizations 

  
The following **additional** features are implemented:

* [x] Persistent sidebar navigation with Home and About links visible on both dashboard and detail pages​
* [x] Search, cost filter, and type filter from Part 1 remain available and work alongside the new features​
* [x] Responsive, modern dark UI with card panels for items, charts, and summary stats for better readability 

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./src/assets/project6.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />
GIF created with [Kap] (https://getkap.co/) for macOS

## Notes

The item price is available from the shop endpoint and not from the cosmetics-by-id endpoint, so the detail page fetch path was chosen to retain price context when needed.​

Chart data is computed from the currently loaded shop items so visuals reflect the live dataset and respond to filters when applied.​

A shared Layout component with Outlet ensures the sidebar is present on all routes, satisfying the navigation and recording requirements.​.

## License

    Copyright [2025] [Fareed Uddin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.