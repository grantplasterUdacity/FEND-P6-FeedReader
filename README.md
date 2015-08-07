FEND P6 - FeedReader Testing

Simply open the index.html file to run appropriate tests.
The test suites and specs located in feedreader.js are as follows:

Suite: RSS Feeds
	Spec: are defined
		- checks if the allFeeds variable is defined and not empty
	Spec: url's are defined
		- loops through each item in the allFeeds array and checks that
		  the url for each is defined and not empty
	Spec: names are defined
		- loops through each item in the allFeeds array and checks that
		  the name for each is defined and not empty

Suite: The menu
	Spec: is hidden by default
		- checks if the body has the class "menu-hidden" right away
	Spec: changes visibility when menu icon is clicked
		- triggers clicks on the menu icon and checks if the "menu-hidden"
		  class has been applied and removed as appropriate

Suite: Initial Entries
	Spec: are not empty
		- loads a feed and checks the children elements to determine
		  if there is at least one entry in the feed

Suite: New Feed Selection
	Spec: content has changed
		- loads a feed, grabs the header title and content of the feed, then
		  loads another and grabs the header and content of that one, and compares
		  them to check if the feed content has changed when a new feed loads