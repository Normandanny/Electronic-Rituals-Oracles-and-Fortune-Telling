class bubble {
    constructor(wordJS, x, y) {
        this.title = wordJS;
        this.x = x;
        this.y = y;
        this.selected = false;
        this.show = false;
    }

    display_selected() {
                fill("#EA5A7A");
                noStroke();
                ellipseMode(CENTER);
                ellipse(this.x, this.y, 100, 100);

                // Write the text
                fill(255);
                textAlign(CENTER);
                textSize(24);
                text(this.title, this.x, this.y + 8);
            }

    display() {
           // Draw the bubble
           fill("#D496A7");
           noStroke();
           ellipseMode(CENTER);
           ellipse(this.x, this.y, 100, 100);

           // Write the text
           fill(255);
           textAlign(CENTER);
           textSize(24);
           text(this.title, this.x, this.y + 5);

       } 
}