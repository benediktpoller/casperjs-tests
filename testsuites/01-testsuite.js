var url = "http://google.at";

casper.test.begin('01-testsuite', function suite(test) {

    casper.start(url, function() {
        this.printTitle();
    });

    casper.run(function() {
        test.done();
    });

});

