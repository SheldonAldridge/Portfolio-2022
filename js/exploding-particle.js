document.addEventListener("DOMContentLoaded",()=>{
    let contactMe = new explosion("contact-me");
});

class explosion{
    constructor(el){
        this.element = document.querySelector(el);
        this.width = 0;
        this.height = 0;
        this.centerX = 0;
        this.centerY = 0;
        this.placeWidth = 0;
        this.piecesX = 9;
        this.piecesY = 4;
        this.duration = 1000;

        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));

        if(document.body.animate)
        this.element.addEventListener("click", this.explode.bind(this,this.duration));
    }

    updateDimensions(){
        this.width = pxToEm(this.element.offsetWidth);
        this.height = pxToEm(this.element.offsetHeight);
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.pieceWidth = this.width / this.piecesX;
        this.pieceHeight = this.height / this.piecesY;
    }

    explode(duration){
        let explodeState = "exploding";

        if(!this.element.classList.contains(explodeState)){
            this.element.classList.add(explodeState);

            this.createParticles("fire",25,duration);
            this.createParticles("debris",this.piecesX * this.piecesY,duration);
        }
    }

    createParticles(kind,count,duration){
        for(let i =0; i < count; ++i){
            let random = randomFloat(0.25,0.5),
            diam = r * 2,
            xBound = this.centerX - random,
            yBound = this.centerY - random,
            easing = "cubic-bezier(0.15,0.5,0.5,0.85)";

            if(kind == "fire"){
                let x = this.centerX + randomFloat(-xBound,xBound),
                    y = this.centerY + randomFloat(-yBound,yBound),
                    a = calcAngle(this.centerX, this.centerY,x,y),
                    dist = randomFloat(1,5);

                    new FireParticle(this.element,x,y,diam,diam,a,dist,duration,easing);

                
            }
            else if(kind == "debris"){
                let x = (this.pieceWidth / 2) + this.pieceWidth * (i % this.piecesX),
                    y = (this.pieceHidth / 2) + this.pieceHidth * Math.floor(i / this.piecesX),
                    a = calcAngle(this.centerX, this.centerY,x,y),
                    dist = randomFloat(4,7);

            new DebrisParticle(this.element,x,y,this.pieceWidth, this.pieceHeight,a,dist,duration,easing);
            }
        }
    }
}