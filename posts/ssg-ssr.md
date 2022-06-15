---
title: 'When to Use Static Generation v.s. Server-Side Rendering'
date: '2022-06-15'
---

Next.js recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN (Content Delivery Network), which makes it much faster than having a server render the page on every request.

Static Generation can be used for many types of pages, including:

- Marketing pages
- Blog posts
- E-Commerce product listings
- Help and documentation

Ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then Static Generation is your best choice.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe the page shows frequently updated data, and the content changes on every request.

In that case, use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or skip pre-rendering and use client-Side JavaScript to populate data.
