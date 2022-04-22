class Box{
    constructor(width, height, backgroundColor){
        this.color = backgroundColor;
        this.height = `${height}px`;
        this.width = `${width}px`;
        this.circle = '50%'
    }

    render () {
        const body = document.body;
        const div = document.createElement('div');
        div.style.width = this.width;
        div.style.height = this.height;
        div.style.borderRadius = this.circle;
        div.style.backgroundColor = this.color;
        body.appendChild(div);
        
    }
}

let myBox = new Box(50,50,'red');



for (let i = 1; i <= 10; i += 1){
    if (i % 2 == 0){
        myBox.color = 'red';
        myBox.render();
    } else {
        myBox.color = 'blue';
        myBox.render();
    }
}


