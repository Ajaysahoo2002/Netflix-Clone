const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    console.log(req.body);
    const newUser = new User({
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, 'ajay').toString()   //Encrypted password
    });

    try {
        const userExist = await User.findOne({ email: req.body.email });
        if (!userExist) {
            await newUser.save();
        } else {
            res.status(422).json({ message: "Email already exist!" });
        }

    } catch (error) {
        console.log(error);
    }

})

//For Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        // Decrypt
        const bytes = CryptoJS.AES.decrypt(user.password, 'ajay');
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (!user || req.body.password !== originalPassword) {
            res.status(401).json("Invalid Credentials!");
        } else {
            console.log(user);
            res.json("User login Successfully!");
            const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "1hr" });
            console.log(token);
            this.tokens = this.tokens.concat({ token: token });
            await this.save();
        }
    } catch (error) {
        console.log(error);
    }
})


// For Liked Movies
router.post("/add", async (req, res) => {
    try {
        console.log("This is add section...");
        const { email, data } = req.body;
        const user = await User.findOne({ email });
        console.log(user);
        if (user) {
            console.log("This is add section...");
            const { likedMovies } = user;
            const movieAlreadyLiked = likedMovies.find(({ id }) => (id = data.id));
            if (!movieAlreadyLiked) {
                await User.findByIdAndUpdate(user._id, {
                    likedMovies: [...user.likedMovies, data],
                },
                    { new: true }
                );
            } else {
                return res.json({ msg: "Movie already added to the liked list." });
            }
        } else await User.create({ email, likedMovies: [data] });
        return res.json({ msg: "Movie added successfully" });
    } catch (err) {
        return res.json({ msg: "Error adding movie!" });
    }
});


module.exports = router;