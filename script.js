function cursoreffect() {
    var page1Content = document.querySelector("#page1_content");
    var cursor = document.querySelector("#cursor");
    page1Content.addEventListener("mousemove", (dets) => {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y,
        })
        // cursor.style.left = dets.x + "px";
        // cursor.style.top = dets.y + "px";
    });
    page1Content.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
        })
    });
    page1Content.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0,
        })
    });
};
cursoreffect();

function page2Animation() {
    gsap.from(".elem h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "body",
            start: "top 47%",
            end: "top 46%",
            markers: false,
            scrub: 2,
        }
    })
};
page2Animation();

// function lo() {
//     var scroll = new LocomotiveScroll();
// }
// lo()

function page4Animation() {
    gsap.from(".eleme h1", {
        y: 120,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            start: "top 48%",
            end: "top 46%",
            markers: false,
            scrub: 2,
        }
    })
};
page4Animation();


function slider() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
    });
};
slider();
function abot(){
    gsap.from("#page7 h1", {
        y: 120,
        stagger: 0.2,
        duration: 0.4,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "body",
            start: "top 78%",
            end: "top 76%",
            markers: false,
            scrub: 2,
        }
    })
}
abot();

var tl = gsap.timeline()
tl.from("#loader h3", {
    x: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
});
tl.to("#loader h3", {
    opacity: 0,
});
tl.to("#loader", {
    opacity: 0,
});
tl.from("#page1_content h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration:0.3,
    delay:-0.5,
})
tl.to("#loader", {
    display: "none",
});

function last(){
    gsap.from("#lastpage h1", {
        y: 150,
        stagger: 0.2,
        duration: 1,
        delay:1,
        scrollTrigger: {
            trigger: ".addbottom",
            scroller: "body",
            start: "top 78%",
            end: "top 76%",
            markers: false,
            scrub: 2,
        }
    })
}
last();