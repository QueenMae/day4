const paragraphs = document.querySelectorAll("#description p");

paragraphs.forEach(paragraph => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Now featuring a headphone jack!";
    paragraph.insertAdjacentElement("afterend", newParagraph);
});
