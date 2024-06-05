const Post = require("../models/post");

exports.getAllPosts = (req, res) => {
    // res.json({
    //     posts: [
    //         {title: 'First post'},
    //         {title: 'Second post'}
    //     ]
    // });

    Post.find()
        .select("_id title body")
        .then((posts) => {
            res.status(200).json({posts: posts})
        })
        .catch(err => console.log(err));
};

exports.getPostById = (req, res) => {
    Post.findById(req.params.id)
        .exec()
        .then((post) => {
            if(!post) return res.status(404).json({error: "No post found"});
            return res.status(200).json({post});
        })
        .catch(err => console.log(err));
};

exports.createPost = (req, res) => {
    // const post = new Post(req.body);
    // console.log("Creating post: ", req.body);

    // Model.prototype.save() no longer accepts a callback (DEPRECATED)

    // post.save((err, result) => {
    //     if(err) {
    //         return res.status(400).json({error: err});
    //     }
    //     res.status(200).json({
    //         post: result
    //     });
    // })

    // post.save().then(() => {
    //     res.status(200).json({
    //         post: post
    //     });
    // })

    Post.create(req.body)
        .then(post => res.status(200).json({post: post}))
        .catch(err => res.status(400).json({error: err}));
};

exports.updatePost = (req, res) => {
    Post.updateOne({_id: req.params.id}, {$set: req.body})
        .exec()
        .then(() => {
            res.status(200).json(req.body);
        })
        .catch(err => console.log(err));
}

exports.deletePost = (req, res) => {
    Post.deleteOne({_id: req.params.id})
        .exec()
        .then(() => {
            res.status(200).json({
                message : 'Post has been deleted ...',
            }); 
        }) 
        .catch(err => console.log(err));  
}