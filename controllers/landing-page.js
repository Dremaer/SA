exports.getLandPage = (req, res, next) => {
  res.render("main_screen", {
    pageTitle: "project",
    path: "/",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getCommunity = (req, res, next) => {
  res.render("community", {
    pageTitle: "project",
    path: "/landPage", 
    isAuthenticated: req.session.isLoggedIn, 
  });
};

exports.getLogin = (req, res, next) => {
  res.render("login", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getSignUp = (req, res, next) => {
  res.render("signup", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getQuizzes = (req, res, next) => {
  res.render("quizzes", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getQuizzesSubject = (req, res, next) => {
  res.render("quizzes_subject", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getQuizTemplate = (req, res, next) => {
  res.render("quiz_template", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getQuiz = (req, res, next) => {
  res.render("quiz", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getQuiz1 = (req, res, next) => {
  res.render("quiz_1", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};

exports.getEduBot = (req, res, next) => {
  res.render("edubot", {
    pageTitle: "project",
    path: "/landPage",
    isAuthenticated: req.session.isLoggedIn,
  });
};