const express = require("express");
const app = express();

const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public")); //declara la carpeta publica

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(require("./src/routes/admin/adminRoutes"));

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
