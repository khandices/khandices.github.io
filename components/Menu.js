

function createMenu({ items, className = "", renderItem }) {
    const nav = document.createElement("nav");
    nav.className = `menu ${className}`;

    items.forEach((item) => {
        const element = renderItem(item);
        nav.appendChild(element);
    });

    return nav;
}

function createMenuLeft() {
    const items = [
        { href: "https://codepen.io/khandice", icon: "/images/codepen.svg" },
        { href: "https://github.com/khandices", icon: "/images/Github.svg" },
        { href: "https://www.linkedin.com/in/khandice-schuhmann/", icon: "/images/linkedin.svg" },
    ];

    return createMenu({
        items,
        className: "menuLeft",
        renderItem: (item) => {
            const menuItem = document.createElement("a");
            menuItem.className = "menuLeftItem";
            menuItem.href = item.href;

            const img = document.createElement("img");
            img.src = item.icon;
            img.alt = "";

            menuItem.appendChild(img);
            return menuItem;
        },
    });
}

function createMenuRight() {
    const items = [
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "mailto:s.khandice@gmail.com", label: "Contact" },
    ];

    return createMenu({
        items,
        className: "menuRight",
        renderItem: (item) => {
            const menuItem = document.createElement("a");
            menuItem.className = "menuRightItem";
            menuItem.href = item.href;
            menuItem.textContent = item.label;
            return menuItem;
        },
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("menuHeader");

    header.appendChild(createMenuLeft());
    header.appendChild(createMenuRight());
});