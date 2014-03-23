// Done for the test file
// ----------------------------------------------------------------------------
casper.test.done()

/**
 * Tools and cool methods :')
 * ----------------------------------------------------------------------------
 */

// Clear cookies
casper.clearCookies = function() {
        casper.test.info("Clear cookies");
            casper.page.clearCookies();
};

// Print the current page title
casper.printTitle = function() {
        this.echo('### ' + casper.getTitle() + ' ###', 'INFO_BAR');
};

