/**
 * Created by krustev on 5/23/2017.
 */

function Area(w,h,W,H) {
    let s1=w*h;
    let s2=W*H;
    let s3= Math.min(w, W) * Math.min(h, H);
    let result= s1+s2-s3;
    console.log(result);
}

Area(13, 2, 5, 8);