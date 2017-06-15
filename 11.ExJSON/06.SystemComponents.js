/**
 * Created by krustev on 6/13/2017.
 */
function catalogs(input){
    let catalog=new Map();
    for(let row of input){
        let args=row.split('|').filter(s=>s!='').map(x=>x.trim());
        let system=args[0];
        let component=args[1];
        let subcomponent=args[2];

        if(catalog.has(system)){
           if(!catalog.get(system).has(component)){
               catalog.get(system).set(component,new Set());
           }
           catalog.get(system).get(component).add(subcomponent);

        }
        else{
            catalog.set(system, new Map());
            catalog.get(system).set(component,new Set())
            catalog.get(system).get(component).add(subcomponent);
        }
    }
  //  console.log([...catalog.keys()].sort(sortSystems))
    let sortedCtalog= new Map([...catalog.values()].sort(sortSystems))
   // console.log(secondvalues)

    function sortSystems(s1, s2) {
        console.log(catalog.get(s1))
        if(s1.length != s2.length) {
            return s2.length - s1.length;
        } else {
            return String(s1).toLowerCase().localeCompare(String(s2).toLowerCase());
        }
    }


  for(let [k,v] of sortedCtalog){
      console.log(k)
      for(let [k1,v1] of v){

          console.log(`|||${k1}`)
          for(let c of v1){
              console.log(`||||||${c}`)
          }
      }
  }
}

catalogs([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])