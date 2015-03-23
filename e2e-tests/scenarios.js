'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /cLogin when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/cLogin");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/cLogin');
    });


    it('should render cLogin when user navigates to /cLogin', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/cInicioDoctor');
    });


    it('should render cInicioDoctor when user navigates to /cInicioDoctor', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
