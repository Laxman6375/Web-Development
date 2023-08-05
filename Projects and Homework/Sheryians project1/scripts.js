const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })
    
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
    })
}

//jab mouse move ho to hum log skew kar paaye aur maximum skew and
//and minimum skew difine kar paaye jab mouse jab mouse move ho to chapta ki value badhe, aur jab mouse chalna band ho jaaye to chapta hata lo

var timeOut;
var xScale = 1;
var yScale = 1;
var xprev = 0;
var yprev = 0;
function circleSkew() {
    //define default scale value
    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeOut);
        xScale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yScale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);
      
        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xScale, yScale);

          timeOut = setTimeout(function () {
                    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}

circleSkew();

function circleMouseFollower(xScale, yScale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})`;
    })
}


circleSkew();
circleMouseFollower();
firstPageAnim();

//teeno element ko slect karo, uske baad teeno parek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai , jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise ratation bhi tez ho jaye


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffRot = 0;


    elem.addEventListener("mouseleave", function (dets) {
          gsap.to(elem.querySelector ("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffRot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffRot * 0.5),
        });
    });
});













