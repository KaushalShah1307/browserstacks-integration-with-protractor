describe ('Google', function () {
  it('get page', function () {
      browser.driver.get('https://www.google.com/');
  });

  it('should have title', function() {
      expect(browser.driver.getCurrentUrl()).toContain('google.com');
  });
});