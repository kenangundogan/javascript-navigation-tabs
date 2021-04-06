## Javascript Navigation Tabs
Javascript navigation tabs - tiny and simple.

![Javascript Navigation Tabs](https://raw.githubusercontent.com/kenangundogan/javascript-navigation-tabs/main/asset/javascript_navigation_tabs-cover.png)

## Options
Option | Type | Default | Description | Example
------ | ---- | ------- | ----------- | -----------
element | string or object |  | id or class DOM element | [Example](https://kenangundogan.github.io/javascript-navigation-tabs)
event | string | click | add event listener | [Example](https://kenangundogan.github.io/javascript-navigation-tabs)
direction | string | top | navigation position | [Example](https://kenangundogan.github.io/javascript-navigation-tabs)
activeTab | int |  | active item to be open at startup | [Example](https://kenangundogan.github.io/javascript-navigation-tabs)

## Usage example
### Script
```javascript
var navigationtabs = new NavigationTabs({
    element: "#top-position",
    event: "click",
    direction: "top",
    activeTab: 1
});
```

### View
```html
<ul class="navigation-tabs-container" id="top-position">
    <ul class="navigation-tab-menu">
        <li class="item" data-id="1">...</li>
        <li class="item" data-id="2">...</li>
        <!-- -->
    </ul>
    <ul class="navigation-tab-content">
        <li class="item" data-id="1">...</li>
        <li class="item" data-id="2">...</li>
        <!-- -->
    </ul>
</ul>
```

## Copyright and license
Designed and built by [Kenan Gündoğan](https://www.linkedin.com/in/kenangundogan/)
<br>
2021 Currently - Code released under the [MIT License](https://github.com/kenangundogan/javascript-navigation-tabs/blob/master/LICENSE)
Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/)
