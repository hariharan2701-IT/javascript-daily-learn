// 1. Get the first paragraph using document.querySelector(tagname) and tag name
let firstParagraph = document.querySelector('p');
console.log(firstParagraph);

// 2. Get each of the paragraphs using document.querySelector('#id') and by their id
let para1 = document.querySelector('#para1');
let para2 = document.querySelector('#para2');
let para3 = document.querySelector('#para3');
let para4 = document.querySelector('#para4');
console.log(para1, para2, para3, para4);

// 3. Get all the p elements as nodeList using document.querySelectorAll(tagname) and by their tag name
let allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

// 4. Loop through the nodeList and get the text content of each paragraph
allParagraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}:`, paragraph.textContent);
});

// 5. Set a text content to the fourth paragraph
para4.textContent = 'Fourth Paragraph';

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
para1.setAttribute('class', 'para-class');
para2.id = 'new-para2';
para2.classList.add('para-class');
para3.className = 'para-class';
para4.classList.add('para-class');





// 1. Change style of each paragraph using JavaScript (e.g., color, background, border, font-size, font-family)
allParagraphs.forEach((paragraph) => {
  paragraph.style.color = 'blue';
  paragraph.style.backgroundColor = 'lightgrey';
  paragraph.style.border = '1px solid black';
  paragraph.style.fontSize = '16px';
  paragraph.style.fontFamily = 'Arial';
});

// 2. Select all paragraphs and loop through each element and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
allParagraphs.forEach((paragraph, index) => {
  if (index === 0 || index === 2) {
      paragraph.style.color = 'green';
  } else if (index === 1 || index === 3) {
      paragraph.style.color = 'red';
  }
});

// 3. Set text content, id, and class to each paragraph
allParagraphs.forEach((paragraph, index) => {
  paragraph.textContent = `This is paragraph ${index + 1}`;
  paragraph.id = `new-para${index + 1}`;
  paragraph.className = `new-para-class-${index + 1}`;
});
