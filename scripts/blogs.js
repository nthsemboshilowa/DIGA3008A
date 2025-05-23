class LineTypewriter {
    constructor(element, options = {}) {
        this.element = element;
        this.lines = options.lines || [];
        this.lineIndex = 0;
        this.charIndex = 0;
        this.typingSpeed = options.typingSpeed || 100;
        this.lineDelay = options.lineDelay || 1000;
        this.cursor = document.createElement('span');
        this.cursor.className = 'cursor';
       /* this.cursor.textContent = '|';*/
    }

    start() {
        this.element.innerHTML = '';
        this.element.appendChild(this.cursor);
        this.typeLine();
    }

    typeLine() {
        if (this.lineIndex >= this.lines.length) return;

        const currentLine = this.lines[this.lineIndex];
        if (this.charIndex === 0) {
            // Create new line div
            const lineDiv = document.createElement('div');
            lineDiv.classList.add('typed-line');
            this.element.insertBefore(lineDiv, this.cursor);
        }

        const currentLineElement = this.element.querySelectorAll('.typed-line')[this.lineIndex];
        currentLineElement.textContent += currentLine[this.charIndex];
        this.charIndex++;

        if (this.charIndex < currentLine.length) {
            setTimeout(() => this.typeLine(), this.typingSpeed);
        } else {
            this.lineIndex++;
            this.charIndex = 0;
            setTimeout(() => this.typeLine(), this.lineDelay);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const headingEl = document.getElementById('typewriter-heading');
    const typewriter = new LineTypewriter(headingEl, {
        lines: ['Blogs'],
        typingSpeed: 120,
        lineDelay: 800
    });
    typewriter.start();
});
