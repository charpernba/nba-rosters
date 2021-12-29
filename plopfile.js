module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("make", {
    description: "component file structure",
    prompts: [
      {
        type: "input",
        name: "bucket",
        message: "bucket (components, pages, context)",
      },
      {
        type: "input",
        name: "name",
        message: "file name",
      },
    ], // array of inquirer prompts
    actions: (data) => {
      var actions = [
        {
          type: "add",
          path: "{{bucket}}/{{name}}/index.js",
          templateFile: ".plop-templates/{{bucket}}.hbs",
        },
      ];
      return actions;
    },
  });
};
