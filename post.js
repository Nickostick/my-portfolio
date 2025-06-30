import SanityClient from 'https://cdn.skypack.dev/@sanity/client';
import { toHTML } from 'https://cdn.skypack.dev/@portabletext/to-html';

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic...
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const applyTheme = (theme) => { if (theme === 'light') { body.classList.add('light-mode'); themeToggle.checked = true; } else { body.classList.remove('light-mode'); themeToggle.checked = false; } };
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) { applyTheme(savedTheme); } else { const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; if (!prefersDark) { applyTheme('light'); } }
    themeToggle.addEventListener('change', () => { if (themeToggle.checked) { body.classList.add('light-mode'); localStorage.setItem('theme', 'light'); } else { body.classList.remove('light-mode'); localStorage.setItem('theme', 'dark'); } });

    // --- SANITY.IO - FETCH SINGLE POST ---
    const sanityClient = SanityClient({
        projectId: 'yj5sya5j',
        dataset: 'production',
        apiVersion: '2025-06-29',
        useCdn: true,
    });

    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');

    const query = `*[_type == "post" && slug.current == $slug][0]`;
    const queryParams = { slug: slug };

    async function fetchAndRenderPost() {
        const post = await sanityClient.fetch(query, queryParams);
        const container = document.getElementById('single-post-container');

        if (post) {
            // Update the page title to be the post title
            document.title = `${post.title} | Nick Prijic`;
            
            container.innerHTML = `
                <article>
                    <h2>${post.title}</h2>
                    <div class="post-body">
                        ${toHTML(post.body)}
                    </div>
                </article>
            `;
        } else {
            container.innerHTML = '<p>Post not found.</p>';
        }
    }

    if (slug) {
        fetchAndRenderPost().catch(error => {
            console.error('Error fetching Sanity data:', error);
            const container = document.getElementById('single-post-container');
            container.innerHTML = '<p>Sorry, there was an error loading this post.</p>';
        });
    } else {
        const container = document.getElementById('single-post-container');
        container.innerHTML = '<p>No post specified.</p>';
    }
});