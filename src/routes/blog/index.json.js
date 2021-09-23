import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
    return {
        title: post.title,
        html: post.html,
        slug: post.slug,
        desc: post.desc,
        createdAt: post.createdAt,
        tag: post.tag,
        image: post.image,
        id: post.id
    };
}));

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}