exports.show = (req, res) => {
    // https://localhost:4000/ || https:/localhost:4000/about || https:/localhost:4000/contact
    const path =(req.path === '/') ? '/home' : req.path;

    // render the view 

    res.render(`pages${path}`); // Views /pages / about

}; 