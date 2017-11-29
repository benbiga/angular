export class Point {
    
        constructor(private x?: number, private y?: number)
        {
        }
    
    
        draw()
        {
            console.log("X : "+ this.x + " Y : "+this.y);
        }
    
        displayDistance(anotherPoint : Point)
        {
            //...
        }
    
        getX()
        {
            return this.x;
        }
        setX(value : number)
        {
            if(value < 0)
            {
                throw new Error("the value of x cannot be negative");
            }
            this.x = value;
        }
    
    }
    