document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Intersection Observer for Fade-In Effects
    const faders = document.querySelectorAll('.fade-in');

    // Add appearance options
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                // Unobserve once animated to keep the style applied
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Attach observer to each fader
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 3. Animated Circuit Board Background (Canvas)
    initCircuitBackground();
});

function initCircuitBackground() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height;
    let nodes = [];
    const numNodes = 70; // Adjust for density
    
    // Connection distance threshold
    const connectDistance = 150;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Node {
        constructor() {
            // Align to a grid to look like a circuit board
            const gridSize = 40;
            this.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
            this.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
            
            // Movement is restricted to 90 degree angles (horizontal or vertical)
            this.vx = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.5 + 0.1);
            this.vy = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 0.5 + 0.1);
            
            // Make most nodes static, only a few move like data packets
            if (Math.random() > 0.3) {
                this.vx = 0;
                this.vy = 0;
            }

            this.radius = Math.random() > 0.9 ? 3 : 1.5; // Some large junction nodes
            this.pulse = Math.random() * Math.PI * 2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
            
            this.pulse += 0.05;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            
            // Subtle pulse effect for nodes
            let opacity = 0.3 + Math.sin(this.pulse) * 0.2;
            
            // Glowing nodes are white/blue, others are dark grey
            if (this.radius > 2) {
                ctx.fillStyle = `rgba(180, 220, 255, ${opacity + 0.3})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'rgba(180, 220, 255, 0.8)';
            } else {
                ctx.fillStyle = `rgba(80, 80, 90, ${opacity})`;
                ctx.shadowBlur = 0;
            }
            
            ctx.fill();
            ctx.shadowBlur = 0; // reset
        }
    }

    for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node());
    }

    function animate() {
        // Very dark, slightly transparent background for trails
        ctx.fillStyle = 'rgba(5, 5, 8, 0.2)'; 
        ctx.fillRect(0, 0, width, height);

        nodes.forEach(node => {
            node.update();
            node.draw();
        });

        // Draw circuit traces (lines)
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectDistance) {
                    ctx.beginPath();
                    
                    // Circuit boards have right angles. Draw an L-shape connection.
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    
                    // Randomly choose horizontal first or vertical first
                    if (i % 2 === 0) {
                        ctx.lineTo(nodes[j].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                    } else {
                        ctx.lineTo(nodes[i].x, nodes[j].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                    }
                    
                    const opacity = 1 - (dist / connectDistance);
                    // Extremely subtle, dark traces
                    ctx.strokeStyle = `rgba(60, 60, 70, ${opacity * 0.15})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}
