const express = require("express");
const router = express.Router();
const {
  register,
  login,
  profile,
  google_login_url,
  google_handel_token,
  logout,
  upload_test,
} = require("../controller/api_cont");
const auth = require("../middleware/auth");
const querystring = require("querystring");

// === === === register === === === //

router.post("/register", register);

// === === === login === === === //

router.post("/login", login);

// === === === profile === === === //

router.get("/authenticate", auth, profile);

// === === === login url === === === //

router.get("/auth/google/url", google_login_url);

// === === === user data fom google === === === //

router.get("/auth/google", google_handel_token);

// === === === logout === === === //

router.get("/logout", auth, logout);

// === === === create test === === === //

router.post("/new/test", auth, upload_test);

module.exports = router;
