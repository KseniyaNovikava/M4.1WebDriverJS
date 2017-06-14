const webdriver = require("selenium-webdriver");

module.exports = class Page {

    constructor() {
        this.searchForm = webdriver.By.css(".advanced-filters-button");
        this.filters = webdriver.By.id("advanced-filters");
        this.status = webdriver.By.css("[ng-model='filterOptions.deliveryStatus'] .filtersOptionsField__caret");
        this.options = webdriver.By.css("[ng-model='filterOptions.deliveryStatus'] li.filtersOptionsList__option");
        this.checked = webdriver.By.css(".fa.fa-check");

    }

     createDriver() {
        var driver = new webdriver.Builder()
            .usingServer('http://localhost:4444/wd/hub')
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
        driver.manage().window().maximize();
        driver.manage().timeouts().setScriptTimeout(10000);
        return driver;
    }

};