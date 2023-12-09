const express = require("express");
const app = express();

var expressLayouts = require('express-ejs-layouts');


const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public")); //declara la carpeta publica

app.set("view engine", "ejs");
app.set("views", "./src/views/");

app.use(expressLayouts);
app.set("layout", "layouts/layout")

app.use(require("./src/routes/main/mainRoutes"));
app.use(require("./src/routes/admin/adminRoutes"));
app.use(require("./src/routes/shop/shopRoutes"));
app.use(require("./src/routes/auth/authRoutes"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
