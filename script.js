// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Set up the parallax effect for each project
const projects = document.querySelectorAll('.project');

projects.forEach((project, index) => {
    const image = project.querySelector('img');
    const info = project.querySelector('.project-info');

    // Create a timeline for each project
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: project,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: false,
            toggleActions: 'play none none reverse'
        }
    });

    // Add animations to the timeline
    tl.fromTo(image, {
        scale: 1,
        opacity: 1
    }, {
        scale: 1.1,
        opacity: index === projects.length - 1 ? 1 : 0,
        ease: 'none'
    });

    // Fade in project info
    gsap.from(info, {
        scrollTrigger: {
            trigger: project,
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    });
});

// About page animations
if (document.querySelector('.about-page')) {
    gsap.from('.about-text', {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: 'power3.out'
    });

    gsap.from('.about-image', {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
        delay: 0.2
    });
}

// Work page animations
if (document.querySelector('.work-page')) {
    gsap.from('.work-item', {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out'
    });
}
