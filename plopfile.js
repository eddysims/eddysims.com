module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Adds a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name?",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/components/{{pascalCase name}}/",
        base: "generators/component",
        templateFiles: "generators/component/*",
      },
    ],
  });

  plop.setHelper(
    "storyParams",
    (text) => `{{
    ${text}
  }}`
  );
};
