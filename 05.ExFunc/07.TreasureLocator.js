/**
 * Created by krustev on 5/31/2017.
 */

function locator(input) {
    class Island{
        constructor(x1,x2,y1,y2,name){
            this.x1=x1;
            this.x2=x2;
            this.y1=y1;
            this.y2=y2;
            this.name=name;
        }

        checkIntersect(x,y){
            if(x>=this.x1 && x<=this.x2 && y>=this.y1 && y<=this.y2){
                return true; //console.log(this.name);
            }
            else{
                return false; //
            }
        }
    }
    let islands= new Array();

    islands[0] = new Island(8, 9, 0, 1, 'Tokelau');
    islands[1]= new Island(1,3,1,3, 'Tuvalu');
    islands[2] = new Island(5,7,3,6,'Samoa');
    islands[3] = new Island (0,2,6,8,'Tonga');
    islands[4] = new Island(4,9,7,8,'Cook');

    let c=0;
    for(let p=0;p<input.length;p+=2){
        let pointX = input[c++];
        let pointY = input[c++];
        let result = false;
        for(let i of islands){
            result=i.checkIntersect(pointX,pointY)
            if(result){
                console.log(i.name);
                break;
            }
        }
        if(!result) {
            console.log("On the bottom of the ocean");
        }
    }
}

locator([6, 4])