function cursorEffect(){
    let page1content=document.querySelector("#page1-content");
let cursor=document.querySelector("#cursor");
page1content.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
   })
});
page1content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
       scale:1,
       opacity:1,
    })
 });
 page1content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
      scale:0,
      opacity:0,
    })
 });

}
cursorEffect();