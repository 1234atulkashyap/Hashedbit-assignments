// Change text color
document.getElementById('colorchange').addEventListener('click', function() {
    const color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
});

// Change font size
document.getElementById('fontsize').addEventListener('input', function() {
    const fontSize = document.getElementById('fontsize').value + 'px';
    document.getElementById('text-container').style.fontSize = fontSize;
});

// Toggle text styles
document.getElementById('italic').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

document.getElementById('underline').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

document.getElementById('bold').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

// Change font family
document.getElementById('list').addEventListener('change', function() {
    const fontFamily = document.getElementById('list').value;
    document.getElementById('text-container').style.fontFamily = fontFamily;
});

// Get and display CSS properties
document.getElementById('getstyle').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    const styles = window.getComputedStyle(textContainer);
    
    const cssProps = `
        color: ${styles.color}; 
        font-size: ${styles.fontSize}; 
        font-family: ${styles.fontFamily}; 
        text-decoration: ${styles.textDecoration}; 
        font-style: ${styles.fontStyle}; 
        font-weight: ${styles.fontWeight};
    `;
    
    document.getElementById('css-props').textContent = cssProps.trim().replace(/\s+/g, ' ');
});
