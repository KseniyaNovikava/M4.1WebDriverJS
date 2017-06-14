const webdriver = require("selenium-webdriver"),
    until = webdriver.until,
    util = require('util'),
    assert = require('assert');

const Page = require('./page.js');

let page = new Page();
let browser = page.createDriver();

browser.get('https://staging.telescope.epam.com/health/board');
browser.findElement(page.searchForm)
    .then((search)=>{
        browser.wait(until.elementIsVisible(search))
            .then(function(visibleElement){
                return visibleElement.click();
            });
    })
    .then(()=>{
    assert(browser.findElement(page.filters).isDisplayed(),"Filters are not displayed");
    })
    .then(()=>{
        browser.findElement(page.status).click()
    })
    .then(()=>{
        browser.findElements(page.options).then((elems)=>{
                elems[0].click();
        });
        })
    .then(()=>{
        browser.findElements(page.checked).then((elems)=>{
            assert.equal(elems[0].getAttribute('aria-hidden'),true,"Option is checked")});
    });

