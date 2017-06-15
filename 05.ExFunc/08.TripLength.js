/**
 * Created by krustev on 6/1/2017.
 */

function tripLength(input){

    class Line{
        constructor(x1,y1,x2,y2,startpoint,name){
            this.x1=x1;
            this.y1=y1;
            this.x2=x2;
            this.y2=y2;
            this.startPoint=startpoint;
            this.name=name;
            this.lineL = Math.sqrt(((this.x2- this.x1)**2)+((this.y1- this.y2)**2));
        }
    }
    let lines=new Array();//

    lines[0] =  new Line(input[0],input[1],input[2],input[3],1,'1->2');
    lines[1] =  new Line(input[0],input[1],input[4],input[5],1,'1->3');
    lines[2] =  new Line(input[2],input[3],input[0],input[1],2,'2->1');
    lines[3] =  new Line(input[2],input[3],input[4],input[5],2,'2->3');
    lines[4] =  new Line(input[4],input[5],input[0],input[1],3,'3->1');
    lines[5] =  new Line(input[4],input[5],input[2],input[3],3,'3->2');

    let paths=new Array();

    let path1 = lines[0].lineL+lines[3].lineL;
    let path2 = lines[1].lineL+lines[5].lineL;
    let path3 = lines[2].lineL+lines[1].lineL;
    let path4 = lines[2].lineL+lines[4].lineL;
    let path5 = lines[4].lineL+lines[0].lineL;
    let path6 = lines[5].lineL+lines[2].lineL;

    let arr=new Array()

    arr[0]={path:path1,name:`1->2->3: ${path1}`};
    arr[1]={path:path2,name:`1->3->2: ${path2}`};
    arr[2]={path:path3,name:`2->1->3: ${path3}`};
    //arr[3]={path:path4,name:`2->3->1: ${path4}`};
    //arr[4]={path:path5,name:`3->1->2: ${path5}`};
    //arr[5]={path:path6,name:`3->2->1: ${path6}`};

    arr.sort(x=>x.path)

    console.log(arr[1].name)


}

tripLength([0, 0, 2, 0, 4, 0])