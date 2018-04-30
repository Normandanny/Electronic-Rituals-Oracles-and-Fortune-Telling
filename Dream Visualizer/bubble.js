class bubble {
    constructor(wordJS, x, y) {
        this.title = wordJS;
        this.x = x;
        this.y = y;
        this.selected = false;
        this.show = true;
    }

    // display() {
    //     // Draw the bubble
    //     fill("#D496A7");
    //     noStroke();
    //     ellipseMode(CENTER);
    //     ellipse(this.x, this.y, 100, 100);

    //     // Write the text
    //     fill(255);
    //     textAlign(CENTER);
    //     textSize(18);
    //     text(this.title, this.x, this.y + 5);

    // }

    display() {
        if (this.show) {
            if (this.selected) {
                // Draw the bubble
                fill("#D496A7");
                noStroke();
                ellipseMode(CENTER);
                ellipse(this.x, this.y, 100, 100);

                // Write the text
                fill(0);
                textAlign(CENTER);
                textSize(18);
                text(this.title, this.x, this.y + 5);

            } else {
                fill("#D496A7");
                noStroke();
                ellipseMode(CENTER);
                ellipse(this.x, this.y, 100, 100);

                // Write the text
                fill(255);
                textAlign(CENTER);
                textSize(24);
                text(this.title, this.x, this.y + 8);
            }
        }
    }
}