window.onload = function() {
    const navigation = document.getElementById('navigation');
    const mobileNavigation = document.createElement("span");
    mobileNavigation.setAttribute("id", "mobile-navigation");
    navigation.parentNode.insertBefore(mobileNavigation, navigation);

    mobileNavigation.addEventListener('click', function() {
        const style = navigation.getAttribute('style');
        if (style) {
            navigation.removeAttribute('style');
            mobileNavigation.style.backgroundImage = 'url(images1/mobile-menu.png)';
        } else {
            navigation.style.display = 'block';
            mobileNavigation.style.backgroundImage = 'url(images1/mobile-close.png)';
        }
    });

    const menuItems = navigation.getElementsByTagName("li");
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].children.length > 1) {
            createSubmenuButton(menuItems[i], i);
        }
    }
};

function createSubmenuButton(menuItem, index) {
    const submenuButton = document.createElement("span");
    submenuButton.setAttribute("class", "mobile-submenu");
    submenuButton.addEventListener("click", function() {
        toggleSubmenu(menuItem, index);
    });
    menuItem.appendChild(submenuButton);
}

function toggleSubmenu(menuItem, index) {
    const submenu = menuItem.children[1];
    const style = submenu.getAttribute('style');
    if (style) {
        submenu.removeAttribute('style');
        menuItem.lastChild.style.backgroundImage = 'url(images/mobile-expand.png)';
        menuItem.lastChild.style.backgroundColor = 'rgba(11, 163, 156, 0.7)';
    } else {
        submenu.style.display = 'block';
        menuItem.lastChild.style.backgroundImage = 'url(images/mobile-collapse.png)';
        menuItem.lastChild.style.backgroundColor = 'rgba(0,0,0,0.8)';
    }
}
