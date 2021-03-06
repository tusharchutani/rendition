# Change Log

All notable changes to this project will be documented in this file
automatically by Versionist. DO NOT EDIT THIS FILE MANUALLY!
This project adheres to [Semantic Versioning](http://semver.org/).

## 4.31.2 - 2018-11-14

* Use GFM style line break handling in Markdown component [Lucian Buzzo]

## 4.31.1 - 2018-11-12

* Tooltip does not show in modal [Stevche Radevski]

## 4.31.0 - 2018-11-08

* Add ButtonGroup component [Kakhaber]

## 4.30.2 - 2018-11-06

* Exit screenshot generation if there are docker errors [Lucian Buzzo]

## 4.30.1 - 2018-11-06

* Hide tooltip if the element its bound to is removed from the DOM [Lucian Buzzo]
* Reset tooltip position after it hides [Lucian Buzzo]

## 4.30.0 - 2018-11-06

* Add ArcSlider component [Lucian Buzzo]

## v4.29.7 - 2018-11-01

* Test: Add visual regression tests [Lucian Buzzo]
* Docs: Fix incorrect Table prop name [Michał Koziarski]

## v4.29.6 - 2018-10-31

* Form: Only show a title if it is set on the schema [Lucian Buzzo]

## v4.29.5 - 2018-10-31

* Change resin to balena in docs and stories [Lucian Buzzo]

## v4.29.4 - 2018-10-31

* Alert: Do not wire all props to the dismiss button [Thodoris Greasidis]

## v4.29.3 - 2018-10-24

* Update resin-semver to support balenaOS version strings [Paulo Castro]

## v4.29.2 - 2018-10-08

* Table: Defensively program against null or undefined data values [Lucian Buzzo]

## v4.29.1 - 2018-10-03

* Docs: Add contribution guidelines [Lucian Buzzo]

## v4.29.0 - 2018-10-03

* Form: Add unique class name for every field [Lucian Buzzo]

## v4.28.0 - 2018-09-24

* Markdown: Make improvements to markdown component [Lucian Buzzo]
* Form: Add support for ui:warning values [Lucian Buzzo]

## v4.27.7 - 2018-09-24

* Dependencies: Update dependencies to fix security issues [Lucian Buzzo]

## v4.27.6 - 2018-09-24

* Docs: Add a table of contents to README [Lucian Buzzo]
* Docs: Fix table formatting and incorrect start command [Lucian Buzzo]

## v4.27.5 - 2018-09-21

* Docs: Compile separate component README files into main README [Lucian Buzzo]

## v4.27.4 - 2018-09-18

* Dependencies: Update resin-semver version to support Balena OS [Lucian Buzzo]

## v4.27.3 - 2018-09-07

* Table: Allow styling using rest props [Dimitrios Lytras]

## v4.27.2 - 2018-09-06

* Fix: Pin grid-styled version [Lucian Buzzo]

## v4.27.1 - 2018-09-05

* Table: Remove Box wrapper [Dimitrios Lytras]

## v4.27.0 - 2018-09-04

* Code-with-copy: Allow to show icon on hover [Dimitrios Lytras]

## v4.26.0 - 2018-09-04

* Feat(Table): Add pager functionality to the Table component [Lucian Buzzo]
* Feat: Add a Pager component [Lucian Buzzo]

## v4.25.5 - 2018-08-31

* ProgressBar: Change Background color [amdomanska]

## v4.25.4 - 2018-08-31

* DropdownButton: Align arrow toggle properly [amdomanska]

## v4.25.3 - 2018-08-30

* Theme: Update the colors [amdomanska]

## v4.25.2 - 2018-08-29

* Package.json: Add prepack script [Lucian Buzzo]

## v4.25.1 - 2018-08-29

* Button: Add type prop to typings [Lucian Buzzo]

## v4.25.0 - 2018-08-29

* Textarea: Add functionality to autosize textarea based on content [Lucian Buzzo]
* Textarea: Add story for monospace property [Lucian Buzzo]
* Textarea: Convert component to TypeScript [Lucian Buzzo]

## v4.24.0 - 2018-08-22

* Table: Include method that clears all selected checkboxes [Dimitrios Lytras]
* Fix(Filters): Make full text search only filter on string type fields [Lucian Buzzo]

## v4.23.0 - 2018-08-20

* Table: Add conditional classes to rows #563 [Dimitrios Lytras]

## v4.22.6 - 2018-08-17

* Types: Correct Divider prop types #558 [Dimitrios Lytras]

## v4.22.5 - 2018-08-10

* Configuration: Use the recommended approach for storybook actions #549 [Dimitrios Lytras]

## v4.22.4 - 2018-08-10

* Readme: Fix story source redirects #548 [Dimitrios Lytras]

## v4.22.3 - 2018-08-07

* Docs(Stories): Use Provider component in individual stories #546 [Lucian Buzzo]

## v4.22.2 - 2018-08-07

* Filters: Clear search input after filter deletion #544 [Dimitrios Lytras]

## v4.22.1 - 2018-08-03

* Docs(Table): Improve documentation of `onRowClick` property #543 [Lucian Buzzo]

## v4.22.0 - 2018-08-03

* Table: Add property for highlighting a row #531 [Lucian Buzzo]

## v4.21.3 - 2018-08-03

* Tools: Fix JSON schema validator #513 [Lucian Buzzo]

## v4.21.2 - 2018-08-03

* Fix(Stories): Change onPress to onClick #536 [Lucian Buzzo]

## v4.21.1 - 2018-08-03

* Alert: Fix warning on dev mode when setting prefix={false} #530 [Thodoris Greasidis]

## v4.21.0 - 2018-08-02

* Pill: Add Pill component #526 [Thodoris Greasidis]

## v4.20.0 - 2018-08-02

* Modal: Add a containerStyle & a style property #522 [Thodoris Greasidis]

## v4.19.0 - 2018-08-02

* ProgressBar: Add typings for the color & background #540 [Thodoris Greasidis]

## v4.18.11 - 2018-07-30

* Input: Fix spin button alignment in Chrome #533 [Thodoris Greasidis]

## v4.18.10 - 2018-07-28

* Docs(Box): Add docs and story for Box component #519 [Lucian Buzzo]
* Navbar: allow to have zero or one children #519 [Michael Chris Lopez]

## v4.18.9 - 2018-07-25

* Chore: Bump @types/recompose to 0.26.2 to fix compiling w/ TS 2.9.2 #528 [Thodoris Greasidis]

## v4.18.8 - 2018-07-23

* CI: Update encrypted npm token #520 [Lucian Buzzo]

## v4.18.7 - 2018-07-23

* Migrations: Fix filter migration bug #517 [Lucian Buzzo]

## v4.18.6 - 2018-07-23

* Flex: Add docs and story for Flex component #512 [Lucian Buzzo]

## v4.18.5 - 2018-07-23

* README: Emphasise use of Provider component #515 [Lucian Buzzo]

## v4.18.4 - 2018-07-20

* Table: Add additional tests to check changes to data prop #505 [Lucian Buzzo]

## v4.18.3 - 2018-07-20

* README: Add links to individual component documentation #511 [Lucian Buzzo]

## v4.18.2 - 2018-07-20

* README: Add installation instructions #504 [Lucian Buzzo]

## v4.18.1 - 2018-07-12

* SchemaSieve: Fix bug in flattenSchema #499 [Lucian Buzzo]

## v4.18.0 - 2018-07-12

* Form: Add custom template for array fields #497 [Lucian Buzzo]

## v4.17.2 - 2018-07-05

* Migrations: Fix bug where migrations would run multiple times #496 [Lucian Buzzo]

## v4.17.1 - 2018-07-02

* Tooltip: stop using toJSON() on getBoundingClientRect() #491 [Thodoris Greasidis]

## v4.17.0 - 2018-06-29

* Update button's styling #468 [Dimitrios Lytras]

## v4.16.4 - 2018-06-28

* Include Props section in Divider docs #489 [Dimitrios Lytras]

## v4.16.3 - 2018-06-27

* Fix 'styled system' table in Readme #488 [Dimitrios Lytras]

## v4.16.2 - 2018-06-25

* Fix tooltips on disabled buttons with child elements #485 [Thodoris Greasidis]

## v4.16.1 - 2018-06-25

* Make Markdown component inherit font size #479 [Lucian Buzzo]

## v4.16.0 - 2018-06-25

* Filter unsupported formats from Form schemas #480 [Lucian Buzzo]

## v4.15.0 - 2018-06-24

* Add markdown widget to Form component #475 [Lucian Buzzo]

## v4.14.2 - 2018-06-21

* Make tooltips work with disabled elements #471 [Lucian Buzzo]

## v4.14.1 - 2018-06-21

* Fix mouse event override in tooltips #469 [Lucian Buzzo]

## v4.14.0 - 2018-06-20

* Improve documentation in README and storybook #465 [Lucian Buzzo]

## v4.13.1 - 2018-06-20

* Remove vertical padding from Button #462 [Dimitrios Lytras]

## v4.13.0 - 2018-06-18

* Add functionality to inject custom styles into tooltips #459 [Lucian Buzzo]
* Improve tooltips #459 [Lucian Buzzo]

## v4.12.0 - 2018-06-18

* Introduce Card component #455 [Dimitrios Lytras]
* Include font weight of 700 in preview #455 [Dimitrios Lytras]

## v4.11.2 - 2018-06-18

* Introduce issue templates #456 [Dimitrios Lytras]

## v4.11.1 - 2018-06-14

* Use Apache-2.0 as license #442 [Dimitrios Lytras]

## v4.11.0 - 2018-06-13

* Include Search component #441 [Dimitrios Lytras]

## v4.10.0 - 2018-06-13

* Add components for rendering markdown and mermaid #438 [Lucian Buzzo]

## v4.9.0 - 2018-06-08

* Add filter handling for arrays of strings #435 [Lucian Buzzo]

## v4.8.5 - 2018-06-08

* Add missing methods to SchemaSieve typings #432 [Lucian Buzzo]

## v4.8.4 - 2018-06-06

* Add legends on the swatches story #430 [Thodoris Greasidis]

## v4.8.3 - 2018-05-28

* Add tooltip to support Link props #428 [Lucian Buzzo]

## v4.8.2 - 2018-05-28

* Fix Text sub-element typings #427 [Lucian Buzzo]

## v4.8.1 - 2018-05-25

* Fix incorrect typings for Input element #426 [Lucian Buzzo]

## v4.8.0 - 2018-05-24

* Add a `disabled` property to the Select component #425 [Lucian Buzzo]
* Write more complex tests for Select component #425 [Lucian Buzzo]
* Convert Select component to TypeScript #425 [Lucian Buzzo]

## v4.7.1 - 2018-05-22

* Improve performance of table component #422 [Lucian Buzzo]

## v4.7.0 - 2018-05-22

* Table: add cell props & make the cells clickable instead of the rows #423 [Thodoris Greasidis]
* Table: Fix checked row style #423 [Thodoris Greasidis]

## v4.6.1 - 2018-05-22

* Fix add filter selects' default value #408 [Benedict Aas]

## v4.6.0 - 2018-05-02

* Show partial totals in Gauge component #396 [Dimitrios Lytras]

## v4.5.1 - 2018-05-01

* Use npm v5 and install dependencies with npm ci #414 [Thodoris Greasidis]

## v4.5.0 - 2018-04-24

* Add Form component for generating forms from JSON schemas #386 [Lucian Buzzo]

## v4.4.4 - 2018-04-20

* Limit DropDownButton's length #411 [Dimitrios Lytras]

## v4.4.3 - 2018-04-20

* Use flattening methods on inbound and outbound views and filters #405 [Lucian Buzzo]

## v4.4.2 - 2018-04-18

* Fix broken filter logic and tests #402 [Lucian Buzzo]
* Refactor and improve tests and remove broken jest-extended library #402 [Lucian Buzzo]

## v4.4.1 - 2018-04-18

* Fix Typography story after v4 changes #399 [Thodoris Greasidis]

## v4.4.0 - 2018-04-17

* Add property to Filters to control which subcomponents are rendered #392 [Lucian Buzzo]

## v4.3.0 - 2018-04-17

* Change the prefix text of the danger alerts #398 [Thodoris Greasidis]

## v4.2.2 - 2018-04-17

* Amend typings to correctly export SchemaSieve #395 [Lucian Buzzo]

## v4.2.1 - 2018-04-17

* Fix incorrect interface for `Flex` component #394 [Lucian Buzzo]

## v4.2.0 - 2018-04-17

* Allow filtering on nested data structures by flattening the schema #391 [Lucian Buzzo]

## v4.1.0 - 2018-04-17

* Use flex-basis instead of width for Filters search box #393 [Lucian Buzzo]

## v4.0.1 - 2018-04-16

* Remove old tooltips file that was added by mistake #387 [Lucian Buzzo]

## v4.0.0 - 2018-04-11

* V4 #366 [Lucian Buzzo]

## 3.27.0 - 2018-05-14

* Fix tslint targets & limit lodash typings #417 [Thodoris Greasidis]
* Table: Add cell props & make the cells clickable instead of the rows #417 [Thodoris Greasidis]
* Table: Fix checked row style #417 [Thodoris Greasidis]

## v3.26.1 - 2018-04-04

* Modal: Fix anchors inside modals #379 [Thodoris Greasidis]

## v3.26.0 - 2018-03-16

* Add generic TextWithCopy component #372 [Thodoris Greasidis]

## v3.25.6 - 2018-03-14

* Fix bug where a persistent Terminal cannot be created #369 [Lucian Buzzo]

## v3.25.5 - 2018-03-08

* Add Terminal methods to typings #367 [Lucian Buzzo]

## v3.25.4 - 2018-03-05

* Fix bug that stopped tag name filter from working #364 [Lucian Buzzo]

## v3.25.3 - 2018-02-26

* Ensure that values are object and not strings when editing a KeyValuePair #362 [Lucian Buzzo]

## v3.25.2 - 2018-02-25

* Update to latest version of moment package #360 [Lucian Buzzo]

## v3.25.1 - 2018-02-23

* Add badges to README #345 [Lucian Buzzo]

## v3.25.0 - 2018-02-23

* Add Terminal component #359 [Lucian Buzzo]

## v3.24.0 - 2018-02-15

* Render Table rows as anchor elements #358 [Lucian Buzzo]

## v3.23.0 - 2018-02-09

* Allow prefixes on BadgeSelect list #355 [Lucian Buzzo]

## v3.22.3 - 2018-02-09

* Set type and label attributes correctly when editing extra filters #354 [Lucian Buzzo]

## v3.22.2 - 2018-02-09

* Add `test` method to SchemaSieve typings #351 [Lucian Buzzo]

## v3.22.1 - 2018-02-08

* Make `extra` key optional on FilterModel interface #349 [Lucian Buzzo]

## v3.22.0 - 2018-02-08

* Allow users to define compound filters #348 [Lucian Buzzo]
* Convert Filters component to TypeScript #348 [Lucian Buzzo]

## v3.21.0 - 2018-01-31

* Add styled-components badge to README #342 [Lucian Buzzo]

## v3.20.2 - 2018-01-30

* Fix incorrect typings for Filter component #341 [Lucian Buzzo]

## v3.20.1 - 2018-01-29

* Update usage section of README with more complete example #334 [Lucian Buzzo]

## v3.20.0 - 2018-01-29

* Modal: make action prop optional and default to 'Ok' #331 [Lucian Buzzo]

## v3.19.0 - 2018-01-25

* Tooltip: use hover as the default event type #328 [Thodoris Greasidis]

## v3.18.0 - 2018-01-25

* Only change Table row bg on hover if onRowClick or onCheck props are used #310 [Lucian Buzzo]

## v3.17.1 - 2018-01-24

* Fix typo in typings #325 [Lucian Buzzo]

## v3.17.0 - 2018-01-23

* Add BadgeSelect component #324 [Lucian Buzzo]

## v3.16.1 - 2018-01-23

* Add npm version badge #322 [Thodoris Greasidis]

## v3.16.0 - 2018-01-23

* Modal: add secondary action button #321 [Thodoris Greasidis]

## v3.15.0 - 2018-01-23

* Add Badge component #319 [Lucian Buzzo]

## v3.14.0 - 2018-01-23

* Modal: allow customizing the text of the cancel button #318 [Thodoris Greasidis]

## v3.13.0 - 2018-01-22

* Allow multiple tbody prefixes on Table component #314 [Lucian Buzzo]

## v3.12.0 - 2018-01-22

* Allow a custom JSX element to be added to the top of a Table #312 [Lucian Buzzo]

## v3.11.0 - 2018-01-19

* Add `onRowClick` property and highlight style to Table component #305 [Lucian Buzzo]

## v3.10.0 - 2018-01-19

* Allow the render method on TableColumn to return a `null` value #304 [Lucian Buzzo]

## v3.9.0 - 2018-01-16

* Add a `dark` option for Filters for using the component on a dark BG #299 [Lucian Buzzo]

## v3.8.0 - 2018-01-12

* Add `outline` option for DropDownButton #298 [Lucian Buzzo]

## v3.7.1 - 2018-01-10

* Add Enum to PineDataTypes and storyboard #294 [Tim Perry]

## v3.7.0 - 2018-01-09

* Modal: use a css class to manipulate body element scroll #289 [Thodoris Greasidis]
* Convert Fixed & Modal components to tsx #289 [Thodoris Greasidis]

## v3.6.0 - 2018-01-05

* Filter: autofocus save view modal input & handle form submits #277 [Thodoris Greasidis]

## v3.5.1 - 2018-01-05

* Filters: remove empty simple search rules #281 [Thodoris Greasidis]

## v3.5.0 - 2018-01-05

* Export the Gauge component #279 [Thodoris Greasidis]
* Move typings in a separate folder #279 [Thodoris Greasidis]

## v3.4.0 - 2018-01-04

* Modal: hide page scrollbars when opening #275 [Thodoris Greasidis]

## v3.3.0 - 2018-01-04

* Add selection functionality to Table component #268 [Lucian Buzzo]

## v3.2.1 - 2018-01-03

* Add missing bold prop to Text typings #272 [Lucian Buzzo]

## v3.2.0 - 2018-01-03

* Modal: add scroll for large vertical content #269 [Thodoris Greasidis]

## v3.1.1 - 2018-01-03

* Filters: fix loading saved view w/ simple text search #271 [Thodoris Greasidis]

## v3.1.0 - 2017-12-29

* Add table component #253 [Lucian Buzzo]

## v3.0.0 - 2017-12-27

* Rename module to 'rendition' #265 [Lucian Buzzo]

## v2.16.6 - 2017-12-27

* Fix bug where simple text search rules are incorrectly filtered out #263 [Lucian Buzzo]

## v2.16.5 - 2017-12-22

* Fix typo in README #261 [Lucian Buzzo]

## v2.16.4 - 2017-12-22

* Add prettier & lint for Typescript files #260 [Thodoris Greasidis]

## v2.16.3 - 2017-12-22

* Fix Button styles when using `bg` and `color` props together #256 [Lucian Buzzo]

## v2.16.2 - 2017-12-21

* Gracefully handle situations where a filter rule refers to a schema entry that is non-existent #251 [Lucian Buzzo]

## v2.16.1 - 2017-12-21

* Add rounded border to DropDownButton wrapper #252 [Lucian Buzzo]

## v2.16.0 - 2017-12-20

* Button: add plaintext variant #247 [Thodoris Greasidis]

## v2.15.1 - 2017-12-18

* Filters: add missing typings for KeyValuePairs #249 [Thodoris Greasidis]

## v2.15.0 - 2017-12-18

* Add type for Key Value Pairs #245 [Lucian Buzzo]

## v2.14.1 - 2017-12-15

* Modal: make cancel prop optional & allow JSX elements for the action #238 [Thodoris Greasidis]

## v2.14.0 - 2017-12-15

* Allow customizing the modal buttons #229 [Thodoris Greasidis]

## v2.13.6 - 2017-12-15

* Add button color variants #243 [Konstantinos Mouzakis]

## v2.13.5 - 2017-12-13

* Input: add typings for the type property #236 [Thodoris Greasidis]

## v2.13.4 - 2017-12-12

* Fixes underline buttons #234 [Konstantinos Mouzakis]

## v2.13.3 - 2017-12-12

* Alert: remove min-height & padding from plaintext alerts #233 [Thodoris Greasidis]

## v2.13.2 - 2017-12-12

* Alert: properly align the dismiss button #231 [Thodoris Greasidis]

## v2.13.1 - 2017-12-11

* Make Filters button props optional in typings #227 [Lucian Buzzo]

## v2.13.0 - 2017-12-11

* Allow users to specify props for filter buttons #226 [Lucian Buzzo]

## v2.12.0 - 2017-12-08

* Don't throw an error if a rule contains invalid values #223 [Lucian Buzzo]

## v2.11.2 - 2017-12-08

* Modal: fix unknown properties warning #220 [Thodoris Greasidis]

## v2.11.1 - 2017-12-07

* Add monospace attribute to typings #218 [Lucian Buzzo]

## v2.11.0 - 2017-12-07

* Add a monospace property to Input and Text #216 [Lucian Buzzo]

## v2.10.0 - 2017-12-07

* Modal: support responsive widths #207 [Thodoris Greasidis]
* Modal: Update buttons & title #207 [Thodoris Greasidis]

## v2.9.1 - 2017-12-07

* Heading: add missing typings #212 [Thodoris Greasidis]

## v2.9.0 - 2017-12-05

* Implement Alert component #206 [Thodoris Greasidis]

## v2.8.0 - 2017-12-05

* Update base colors #204 [Thodoris Greasidis]

## v2.7.1 - 2017-12-05

* Fix prettier eslint commit hook error #205 [Thodoris Greasidis]

## v2.7.0 - 2017-12-01

* Export the theme #200 [Thodoris Greasidis]

## v2.6.0 - 2017-12-01

* Add a `normalize` function to Pine Type modules #198 [Lucian Buzzo]

## v2.5.3 - 2017-11-30

* Convert blacklist, theme, utils and Button component to TypeScript #187 [Lucian Buzzo]

## v2.5.2 - 2017-11-30

* Change default horizontal padding of buttons to 20px #193 [Konstantinos Mouzakis]

## v2.5.1 - 2017-11-28

* Improve typings #195 [Lucian Buzzo]

## v2.5.0 - 2017-11-23

* Add titleElement property to Modal component #188 [Thodoris Greasidis]

## v2.4.0 - 2017-11-23

* Add valid, invalid input states & fix typings #190 [Thodoris Greasidis]

## v2.3.5 - 2017-11-21

* Fix dropdown button toggle misalignment on chrome #186 [Lucian Buzzo]

## v2.3.4 - 2017-11-21

* Add typings for sieve.makeFilterInputs #185 [Lucian Buzzo]

## v2.3.3 - 2017-11-17

* Change theme radius from 4 to 3px #181 [konmouz]

## v2.3.2 - 2017-11-15

* Improve saved Filter View Items hover effects #176 [Thodoris Greasidis]

## v2.3.1 - 2017-11-14

* Improve ProgressBar content visibility #178 [Thodoris Greasidis]

## v2.3.0 - 2017-11-10

* Add a disabled attribute to Filters #174 [Lucian Buzzo]

## v2.2.4 - 2017-11-06

* Fix bug where filters still get updated if cancel is pressed #172 [Lucian Buzzo]

## v2.2.3 - 2017-11-02

* Improve typings to use responsive styled-system props #169 [Lucian Buzzo]

## v2.2.2 - 2017-10-31

* Don't show an input field when filtering on a boolean value #166 [Lucian Buzzo]

## v2.2.1 - 2017-10-31

* When filtering by an Enum type, preselect the first option #168 [Lucian Buzzo]

## v2.2.0 - 2017-10-31

* Improve bundled typings #164 [Lucian Buzzo]

## v2.1.0 - 2017-10-30

* Export tooltip class #163 [Lucian Buzzo]

## v2.0.2 - 2017-10-27

* Prevent CodeWithCopy component from propagating click events #160 [Lucian Buzzo]

## v2.0.1 - 2017-10-27

* Add TypeScript support and begin conversion to TypeScript #158 [Lucian Buzzo]

## v2.0.0 - 2017-10-18

* Switch to React instead of Preact #156 [Lucian Buzzo]

## v1.21.3 - 2017-10-12

* Get 4 figure numbers to fit inside Gauge component #154 [Lucian Buzzo]

## v1.21.2 - 2017-10-12

* Update to latest version of resin-device-status #152 [Lucian Buzzo]

## v1.21.1 - 2017-10-12

* Add Enum type to filters #147 [Lucian Buzzo]

## v1.21.0 - 2017-10-11

* Convert Filters to use DropDownButton #149 [Lucian Buzzo]

## v1.20.2 - 2017-10-11

* Improve bundle size with explicit imports #150 [craig-mulligan]

## v1.20.1 - 2017-10-10

* Add small gap between dropdown menu and button #142 [Lucian Buzzo]

## v1.20.0 - 2017-10-10

* Add disabled style for buttons #144 [Lucian Buzzo]

## v1.19.0 - 2017-10-10

* Add support for a divider in the dropdown menu #141 [Lucian Buzzo]

## v1.18.0 - 2017-10-09

* Add prop for right aligning dropdown menu and improve close behaviour #138 [Lucian Buzzo]

## v1.17.0 - 2017-10-09

* Add `disabled` attribute to Link component #136 [Lucian Buzzo]

## v1.16.0 - 2017-10-09

* Add option to dropdown button that removes split effect #133 [Lucian Buzzo]

## v1.15.1 - 2017-10-09

* Modal: Increase the ModalWrapper z-index #137 [Thodoris Greasidis]

## v1.15.0 - 2017-10-09

* Add a width utility prop to Buttons #130 [Lucian Buzzo]

## v1.14.3 - 2017-10-09

* Fix empty gauge svg errors #128 [Thodoris Greasidis]

## v1.14.2 - 2017-10-06

* Auto deploy to gh-pages #126 [craig-mulligan]

## v1.14.1 - 2017-10-06

* State.open is toggled on navbar children click #125 [craig-mulligan]

## v1.14.0 - 2017-10-05

* Add Navbar component #123 [craig-mulligan]

## v1.13.0 - 2017-10-05

* Add Link component #122 [craig-mulligan]

## v1.12.0 - 2017-10-04

* Add Dropdown Button #89 [craig-mulligan]

## v1.11.0 - 2017-10-04

* Add Container component #119 [craig-mulligan]

## v1.10.7 - 2017-10-04

* Change `storybook` npm script to `start` #120 [Lucian Buzzo]

## v1.10.6 - 2017-10-04

* Center the Modal using flexbox #118 [Thodoris Greasidis]

## v1.10.5 - 2017-10-04

* Set Divider color correctly #110 [Lucian Buzzo]

## v1.10.4 - 2017-10-04

* Fix filter bookmarking referential issues #114 [Thodoris Greasidis]

## v1.10.3 - 2017-10-04

* Use a min-height in FilterDescription #116 [Thodoris Greasidis]

## v1.10.2 - 2017-10-04

* Fix filters saved view deletion on Firefox #112 [Thodoris Greasidis]

## v1.10.1 - 2017-10-03

* Increase views menu z-index #108 [Lucian Buzzo]

## v1.10.0 - 2017-10-02

* Add Headings + refactor Text [craig-mulligan]

## v1.9.4 - 2017-10-02

* Default Date/Time related filters to the current time #106 [Lucian Buzzo]

## v1.9.3 - 2017-10-02

* Add Image component #102 [craig-mulligan]

## v1.9.2 - 2017-10-02

* Refactor Button + add underline prop #90 [craig-mulligan]

## v1.9.1 - 2017-10-02

* Set the default view scope to the first view scope found #104 [Lucian Buzzo]

## v1.9.0 - 2017-10-02

* Generalise filter views storage #101 [Lucian Buzzo]

## v1.8.2 - 2017-10-02

* Provider cascades theme font styling to children #94 [craig-mulligan]

## v1.8.1 - 2017-10-02

* Add an example data set to the Filters story #87 [Lucian Buzzo]

## v1.8.0 - 2017-10-02

* Add support for human friendly labels when using filters #81 [Lucian Buzzo]

## v1.7.0 - 2017-09-26

* Add SchemaSieve support for arrays of rules in filter() method #76 [Lucian Buzzo]

## v1.6.6 - 2017-09-26

* Safely handle null values when filtering #84 [Lucian Buzzo]

## v1.6.5 - 2017-09-26

* Increase Modal component z-index #78 [Lucian Buzzo]

## v1.6.4 - 2017-09-26

* Fix sieve filter logic for arrays #74 [Lucian Buzzo]

## v1.6.3 - 2017-09-25

* Fix gauge color when no item has value #72 [Thodoris Greasidis]

## v1.6.2 - 2017-09-25

* Fix gauge color when only one item has value #70 [Thodoris Greasidis]

## v1.6.1 - 2017-09-19

* Add CodeWithCopy component to module exports #66 [Lucian Buzzo]

## v1.6.0 - 2017-09-19

* Add CodeWithCopy component #64 [Lucian Buzzo]

## v1.5.0 - 2017-09-18

* Add progress bar component #62 [Lucian Buzzo]

## v1.4.0 - 2017-09-18

* Create default gauge component #60 [Lucian Buzzo]

## v1.3.7 - 2017-09-15

* Remove dist files from repo and use Travis to build src prior to publishing #58 [Lucian Buzzo]

## v1.3.6 - 2017-09-15

* Add dist file to repo and auto build on commit #56 [Lucian Buzzo]

## v1.3.5 - 2017-09-14

* Fix bug where the device status gauge is black when there is a single device #54 [Lucian Buzzo]

## v1.3.4 - 2017-09-14

* Auto deploy package to npm #52 [Lucian Buzzo]

## v1.3.3 - 2017-09-13

* Fix hover bug in Edge when the Gauge is wrapped in anchor #51 [Lucian Buzzo]

## v1.3.2 - 2017-09-12

* Upgrade resin-semver to v0.10.0 to fix failing publish-storybook command #49 [Lucian Buzzo]

## v1.3.1 - 2017-09-11

* Add 'publish-storybook' npm script #46 [Lucian Buzzo]

## v1.3.0 - 2017-09-11

* Add filter component and pine types components #30 [Lucian Buzzo]

## v1.2.5 - 2017-09-11

* Fix broken npm build #43 [Lucian Buzzo]

## v1.2.4 - 2017-09-11

* Update README and add script for publishing to GH pages #37 [Lucian Buzzo]

## v1.2.3 - 2017-09-11

* Remove story that was added by mistake #38 [Lucian Buzzo]

## v1.2.2 - 2017-09-07

* Add Banner Component #33 [craig-mulligan]

## v1.2.1 - 2017-09-06

* Use Husky to format code as on commit #35 [Lucian Buzzo]

## v1.2.0 - 2017-09-05

* Add Device Status Gauge component #29 [Lucian Buzzo]

## v1.1.0 - 2017-09-04

* Add Provider #23 [craig-mulligan]

## v1.0.0 - 2017-09-01

* Transition to Preact + Styled Components + Rebass