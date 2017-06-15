/**
 * Created by krustev on 5/24/2017.
 */
function Nums(n) {
  let html=`<ul>\n`;
  for(let x=1;x<=n;x++){
      let color='green';
      if(x%2==0){
          color='blue'
      }
      html+=`<li><span style='color: ${color}'>${x}</span></li>\n`;
  }
  html+=`</ul>\n`;
    return html
}

