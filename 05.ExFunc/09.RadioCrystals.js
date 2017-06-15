/**
 * Created by krustev on 6/2/2017.
 */
function radioCry(input){
    let desiredThickness=input[0];

    for(let cry=1;cry<input.length; cry++){
        let currentCrystal=input[cry];
        console.log(`Processing chunk ${currentCrystal} microns`);

        if(currentCrystal>=desiredThickness){
            currentCrystal=processCut(desiredThickness,currentCrystal);
            currentCrystal=processLap(desiredThickness,currentCrystal);
            currentCrystal=processGrind(desiredThickness,currentCrystal);
            currentCrystal=processEtch(desiredThickness,currentCrystal);
            currentCrystal=processXray(desiredThickness,currentCrystal);
            console.log(`Finished crystal ${currentCrystal} microns`);
        }
        else{
            currentCrystal=processXray(desiredThickness,currentCrystal);
            console.log(`Finished crystal ${currentCrystal} microns`);
        }
    }

    function processCut(target, cry){
        let count=0;
        while(cry>target){
            if(cry/4<target){
                break;
            }
            else {
                cry = Math.floor(cry / 4);
            }
            count++;
        }

        if(count>0){
            console.log(`Cut x${count}`);
            cry=round(cry);
        }

        return cry;
    }

    function processLap(target, cry){
        let count=0;
        while(cry>target){
            if((cry-(cry*0.2))<target){
                break;
            }
            else {
                cry =cry-(cry*0.2)
            }
            count++;
        }
        if(count>0){

            console.log(`Lap x${count}`)
            cry=round(cry);
        }
        return cry;
    }

    function processGrind(target, cry){
        let count=0;
        while(cry>target){
            if((cry-20)<target){
                break;
            }
            else {
                cry -= 20
            }
            count++;
        }
        if(count>0){

            console.log(`Grind x${count}`)
            cry=round(cry);
        }

        return cry;
    }

    function processEtch(target, cry){
        let count=0;
        while(cry>=target){
            if((cry-2)==(target-3) || cry==target){
                break;
            }
            else {
                cry -=2
            }
            count++;
        }
        if(count>0){
            console.log(`Etch x${count}`)
            cry=round(cry);
        }

        return cry;
    }

    function processXray(target, cry){
        if((cry+1)==target){
            console.log(`X-ray x1`);
            return ++cry;
        }
        return cry;
    }

    function round(cry) {
        console.log("Transporting and washing");
        return Math.floor(cry);
    }
    

}


radioCry([1375, 50000]);