/*!
 * Javascript Navigation Tabs 1.0.0
 * Copyright 2021 Kenan Gündoğan
 * Released under the MIT License
 */

var NavigationTabs = function (options) {
    var element = options.element,
        event = options.event == null ? "click" : options.event,
        direction = options.direction == undefined ? "top" : options.direction,
        activeTab = options.activeTab,
        navigationTabMenu = element + " .navigation-tab-menu",
        navigationTabMenuItem = navigationTabMenu + " .item",
        navigationTabContent = element + " .navigation-tab-content",
        navigationContentItem = navigationTabContent + " .item",
        navigationContainer = document.querySelector(element),
        navigationMenuItems = document.querySelectorAll(navigationTabMenuItem),
        navigationContentItems = document.querySelectorAll(navigationContentItem);

    navigationContainer.classList.add(direction);

    navigationMenuItems.forEach((menuItem) => {
        menuItem.addEventListener(event, function () {
            menuItemDataId = this.getAttribute("data-id");
            navigationContentItems.forEach((contentItem) => {
                contentItemDataId = contentItem.getAttribute("data-id");
                if (menuItemDataId == contentItemDataId) {
                    navigationTabHideFunc();
                    menuItem.classList.add("show");
                    contentItem.classList.add("show");
                }
            });
        });
    });

    function navigationTabHideFunc() {
        navigationMenuItems.forEach(menuItem => {
            menuItem.classList.remove("show");
        });
        navigationContentItems.forEach(contentItem => {
            contentItem.classList.remove("show");
        });
    }

    function navigationActiveTabFunc(activeTab) {
        navigationMenuItems.forEach((menuItem, key) => {
            if (activeTab == (key + 1)) {
                menuItem.classList.add("show");
            }
        });
        navigationContentItems.forEach((contentItem, key) => {
            if (activeTab == (key + 1)) {
                contentItem.classList.add("show");
            }
        });
    }
    navigationActiveTabFunc(activeTab);
}