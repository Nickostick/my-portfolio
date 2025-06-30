import SanityClient from 'https://cdn.skypack.dev/@sanity/client';
import { toHTML } from 'https://cdn.skypack.dev/@portabletext/to-html';

document.addEventListener('DOMContentLoaded', () => {
    // --- THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-mode');
            themeToggle.checked = true;
        } else {
            body.classList.remove('light-mode');
            themeToggle.checked = false;
        }
    };
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (!prefersDark) {
            applyTheme('light');
        }
    }
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- TEXT SCRAMBLE EFFECT ---
    class TextScramble {
        constructor(el) { this.el = el; this.chars = '!<>-_\\/[]{}—=+*^?#________'; this.update = this.update.bind(this); }
        setText(newText) { const oldText = this.el.innerText; const length = Math.max(oldText.length, newText.length); const promise = new Promise((resolve) => this.resolve = resolve); this.queue = []; for (let i = 0; i < length; i++) { const from = oldText[i] || ''; const to = newText[i] || ''; const start = Math.floor(Math.random() * 40); const end = start + Math.floor(Math.random() * 40); this.queue.push({ from, to, start, end }); } cancelAnimationFrame(this.frameRequest); this.frame = 0; this.update(); return promise; }
        update() { let output = ''; let complete = 0; for (let i = 0, n = this.queue.length; i < n; i++) { let { from, to, start, end, char } = this.queue[i]; if (this.frame >= end) { complete++; output += to; } else if (this.frame >= start) { if (!char || Math.random() < 0.28) { char = this.randomChar(); this.queue[i].char = char; } output += `<span class="dud">${char}</span>`; } else { output += from; } } this.el.innerHTML = output; if (complete === this.queue.length) { this.resolve(); } else { this.frameRequest = requestAnimationFrame(this.update); this.frame++; } }
        randomChar() { return this.chars[Math.floor(Math.random() * this.chars.length)]; }
    }
    
    const phrases = [
        'Scaling teams 0 -> 1 -> 100',
        'Builder',
        'Gamer',
        'Athlete',
        'Scientist'
    ];

    const el = document.querySelector('.scramble-text');
    const fx = new TextScramble(el);
    let counter = 0;
    const next = () => { fx.setText(phrases[counter]).then(() => { setTimeout(next, 3000); }); counter = (counter + 1) % phrases.length; };
    if (el) { 
        next();
    }

    // --- SANITY.IO - FETCH POST LIST ---
    const sanityClient = SanityClient({
        projectId: 'yj5sya5j',
        dataset: 'production',
        apiVersion: '2025-06-29',
        useCdn: true,
    });
    const postListContainer = document.getElementById('post-list-container');
    if (postListContainer) {
        const query = `*[_type == "post"] | order(publishedAt desc) {
            title,
            "slug": slug.current,
            excerpt
        }`;
        async function fetchAndRenderPostPreviews() {
            const posts = await sanityClient.fetch(query);
            if (posts && posts.length > 0) {
                postListContainer.innerHTML = '';
                posts.forEach(post => {
                    const previewEl = document.createElement('div');
                    previewEl.className = 'post-preview';
                    const postLink = `post.html?slug=${post.slug}`;
                    previewEl.innerHTML = `
                        <h2 class="post-preview-title">
                            <a href="${postLink}">${post.title}</a>
                        </h2>
                        <p class="post-preview-excerpt">${post.excerpt || ''}</p>
                        <a href="${postLink}" class="post-preview-link">Read More →</a>
                    `;
                    postListContainer.appendChild(previewEl);
                });
            } else {
                postListContainer.innerHTML = '<p>No writings published yet. Check back soon!</p>';
            }
        }
        fetchAndRenderPostPreviews().catch(error => {
            console.error('Error fetching Sanity data:', error);
            postListContainer.innerHTML = '<p>Sorry, there was an error loading the writings.</p>';
        });
    }

    // --- ENTROPY EASTER EGG ---
    const entropyTrigger = document.getElementById('entropy-trigger');
    if (entropyTrigger) {
        const elementsToAnimate = document.querySelectorAll(
            '.profile-photo, header h1, header .scramble-text, .social-links, .post-preview'
        );
        let isDisordered = false;
        const induceEntropy = () => {
            elementsToAnimate.forEach(el => {
                const randomX = Math.random() * 300 - 150;
                const randomY = Math.random() * 160 - 80;
                const randomRot = Math.random() * 120 - 60;
                el.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRot}deg)`;
            });
        };
        const restoreOrder = () => {
            elementsToAnimate.forEach(el => {
                el.style.transform = '';
            });
        };
        entropyTrigger.addEventListener('click', () => {
            if (isDisordered) {
                restoreOrder();
                isDisordered = false;
            } else {
                induceEntropy();
                isDisordered = true;
                setTimeout(() => {
                    restoreOrder();
                    isDisordered = false;
                }, 2000);
            }
        });
    }
});