System.config({
  "paths": {
    "*": "*.js",
    "hello-jspm/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "fetch": "github:github/fetch@0.4.0"
  }
});

