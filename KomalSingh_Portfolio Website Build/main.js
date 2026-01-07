// Portfolio Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initMobileMenu();
    initTypedText();
    initScrollReveal();
    initMetricCounters();
    initCharts();
    initParticleBackground();
    
    // Mobile Menu Toggle
    function initMobileMenu() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
    
    // Typed Text Animation
    function initTypedText() {
        const typedElement = document.getElementById('typed-name');
        if (typedElement) {
            new Typed('#typed-name', {
                strings: ['Komal Singh Shekhawat', 'Data Scientist Enthusiast', 'Problem Solver'],
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }
    
    // Scroll Reveal Animation
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }
    
    // Animated Metric Counters
    function initMetricCounters() {
        const metricNumbers = document.querySelectorAll('.metric-number');
        
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.target);
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        metricNumbers.forEach(number => {
            counterObserver.observe(number);
        });
    }
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const stepTime = duration / 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, stepTime);
    }
    
    // Initialize Charts
    function initCharts() {
        initSkillsRadar();
        initExperienceChart();
    }
    
    // Skills Radar Chart
    function initSkillsRadar() {
        const radarElement = document.getElementById('skills-radar');
        if (!radarElement) return;
        
        const chart = echarts.init(radarElement);
        
        const option = {
            backgroundColor: 'transparent',
            radar: {
                indicator: [
                    { name: 'Frontend', max: 100 },
                    { name: 'Backend', max: 100 },
                    { name: 'Database', max: 100 },
                    { name: 'Data Analysis', max: 100 },
                    { name: 'DevOps', max: 100 },
                    { name: 'UI/UX', max: 100 }
                ],
                axisName: {
                    color: '#b0b0b0',
                    fontSize: 12
                },
                splitLine: {
                    lineStyle: {
                        color: '#404040'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#404040'
                    }
                },
                splitArea: {
                    show: false
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: [90, 85, 80, 95, 75, 70],
                    name: 'Skills',
                    areaStyle: {
                        color: 'rgba(0, 168, 255, 0.2)'
                    },
                    lineStyle: {
                        color: '#00a8ff',
                        width: 2
                    },
                    itemStyle: {
                        color: '#00a8ff'
                    }
                }]
            }]
        };
        
        chart.setOption(option);
        
        // Animate chart on load
        setTimeout(() => {
            chart.resize();
        }, 100);
        
        // Responsive resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }
    
    // Experience Timeline Chart
    function initExperienceChart() {
        const chartElement = document.getElementById('experience-chart');
        if (!chartElement) return;
        
        const chart = echarts.init(chartElement);
        
        const option = {
            backgroundColor: 'transparent',
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['2022', '2023', '2024','2025'],
                axisLine: {
                    lineStyle: {
                        color: '#404040'
                    }
                },
                axisLabel: {
                    color: '#b0b0b0'
                }
            },
            yAxis: {
                type: 'value',
                name: 'Experience (Years)',
                nameTextStyle: {
                    color: '#b0b0b0'
                },
                axisLine: {
                    lineStyle: {
                        color: '#404040'
                    }
                },
                axisLabel: {
                    color: '#b0b0b0'
                },
                splitLine: {
                    lineStyle: {
                        color: '#404040'
                    }
                }
            },
            series: [{
                data: [1, 2, 3, 4, 5, 5],
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#00b894',
                    width: 3
                },
                itemStyle: {
                    color: '#00b894'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(0, 184, 148, 0.3)'
                        }, {
                            offset: 1, color: 'rgba(0, 184, 148, 0.05)'
                        }]
                    }
                }
            }]
        };
        
        chart.setOption(option);
        
        // Responsive resize
        window.addEventListener('resize', () => {
            chart.resize();
        });
    }
    
    // Particle Background Effect
    function initParticleBackground() {
        const canvas = document.getElementById('particle-canvas');
        if (!canvas) return;
        
        // Create canvas element
        const canvasElement = document.createElement('canvas');
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
        canvas.appendChild(canvasElement);
        
        const ctx = canvasElement.getContext('2d');
        const particles = [];
        const particleCount = 50;
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvasElement.width,
                y: Math.random() * canvasElement.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            
            particles.forEach(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = canvasElement.width;
                if (particle.x > canvasElement.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvasElement.height;
                if (particle.y > canvasElement.height) particle.y = 0;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 168, 255, ${particle.opacity})`;
                ctx.fill();
            });
            
            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(0, 168, 255, ${0.1 * (1 - distance / 100)})`;
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animateParticles);
        }
        
        animateParticles();
        
        // Resize handler
        window.addEventListener('resize', () => {
            canvasElement.width = window.innerWidth;
            canvasElement.height = window.innerHeight;
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        setTimeout(() => {
            const firstReveal = document.querySelector('.reveal');
            if (firstReveal) {
                firstReveal.classList.add('active');
            }
        }, 100);
    });
    
    // Active navigation highlighting
    function updateActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    updateActiveNavigation();
    
    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.02,
                rotateX: 2,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotateX: 0,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
    
    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutCubic'
            });
        });
    });
    
    // Performance optimization: Debounce resize events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Debounced resize handler
    const debouncedResize = debounce(() => {
        // Trigger resize events for charts and other components
        window.dispatchEvent(new Event('resize'));
    }, 250);
    
    window.addEventListener('resize', debouncedResize);
    
    // Console welcome message
    console.log('%c👋 Welcome to my Portfolio Dashboard!', 'color: #00a8ff; font-size: 16px; font-weight: bold;');
    console.log('%cFeel free to explore the code and see how everything works!', 'color: #b0b0b0; font-size: 14px;');
    
});