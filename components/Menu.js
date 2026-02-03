

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
        { href: "https://codepen.io/khandice", icon: "/images/codepen.svg", altText: "Link to Codepen" },
        { href: "https://github.com/khandices", icon: "/images/github.svg", altText: "Link to GitHub" },
        { href: "https://www.linkedin.com/in/khandice-schuhmann/", icon: "/images/linkedin.svg", altText: "Link to LinkedIn" },
    ];

    return createMenu({
        items,
        className: "menuLeft",
        renderItem: (item) => {
            const menuItem = document.createElement("a");
            menuItem.className = "menuLeftItem";
            menuItem.alt=item.altText;
            menuItem.href = item.href;

            const img = document.createElement("img");
            img.src = item.icon;
            img.alt = item.altText;

            menuItem.appendChild(img);
            return menuItem;
        },
    });
}

function createMenuRight() {
    const items = [
        { href: "https://khandices.github.io", label: "About" },
        { href: "https://khandices.github.io/portfolio", label: "Projects" },
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
    const menuHeader = document.getElementById("menuHeader");

    menuHeader.appendChild(createMenuLeft());
    menuHeader.appendChild(createMenuRight());
});