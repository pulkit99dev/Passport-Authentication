let User = require("../models/user");

module.exports.profile = (req, res) => {
  res.render("profile", {
    title: "Profile Page",
  });
};

module.exports.signIn = (req, res) => {
  res.render("sign-in", {
    title: "Sign-in Page",
  });
};

module.exports.signUp = (req, res) => {
  res.render("sign-up", {
    title: "Sign-up Page",
  });
};

module.exports.create = function(req, res){
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user");
      return;
    }
    if (!user) {
      User.create(req.body, function (err, user) {
        if (err) {
          console.log("Error in creating User");
          return;
        }
        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

module.exports.createSession = (req, res) => {
  return res.redirect("/");
};
