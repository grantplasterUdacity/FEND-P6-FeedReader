/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url\'s are defined', function () {
            allFeeds.forEach (function (element) {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function () {
            allFeeds.forEach (function (element) {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
        });
    });


    /* Test suite for "The menu" */
    describe('The menu', function () {

        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        /* This test ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when menu icon is clicked', function () {
            var menu_icon = $('.menu-icon-link');
            menu_icon.click();
            expect($('body').hasClass('menu-hidden')).not.toBeTruthy();

            menu_icon.click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    /* Test suite for "Initial Entries" */
    describe('Initial Entries', function () {

        /* Load a new feed before you check its children. */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test utilizes
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('are not empty', function (done) {
            expect($('.feed').children().length).not.toBe(0);
            done();
        });
    });

    /* Test suite for "New Feed Selection" */
    describe('New Feed Selection', function () {

        var checkTitles, checkHeaders, checkAgainstTitles, checkAgainstHeaders;

        /* Before checking the content load a feed, grab the title and content of
         * feed, then load another and grab the title and header.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                checkTitles = $(".feed .entry h2").html();
                checkHeaders = $("h1.header-title").html();
                loadFeed(1, function () {
                    checkAgainstTitles = $(".feed .entry h2").html();
                    checkAgainstHeaders = $("h1.header-title").html();
                    done();
                });
            });
        });

        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        it('content has changed', function (done) {
            expect(checkTitles).not.toBe(checkAgainstTitles);
            expect(checkHeaders).not.toBe(checkAgainstHeaders);
            done();
        });
    });
}());
