const path = require("path");
const express = require("express");
const hbs = require("hbs");
// const bootstrap = require("bootstrap");

const app = express();

// Defining paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

// Setup bootstrap
// app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
// app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
// app.use("/js", express.static(__dirname + "/node_modules/jquery/dist"));

// app.com
app.get("", (req, res) => {
	res.render("index", {
		title: "Home",
		name: "Justin T. Davis",
	});
});

// Any other url will give a 404 error
app.get("*", (req, res) => {
	res.render("404", {
		title: "404",
		name: "Justin",
		errorMessage: "Page not found.",
	});
});

app.listen(3000, () => {
	console.log("Server is up and running on port 3000.");
});
