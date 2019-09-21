const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const children = Array.from(htmlElement.children);
    const p = document.createElement("p");

    children.forEach(child => child.remove());

    p.innerText = string;
    htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM Manipulation!', partyHeader);
