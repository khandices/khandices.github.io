function createButton({
    label,
    href = null,
    onClick = null,
    className = "",
    }
) {
    const button = document.createElement("a");
    button.href = href;
    button.className = className;
    button.addEventListener("click", onClick);
    button.ariaLabel = label;
};

