/* eslint-disable @typescript-eslint/naming-convention */
module.exports.rules = {
  "negation-space": (context) => {
    return {
      "IfStatement > UnaryExpression": function (node) {
        const argumentShouldStartAt = node.loc.start.column + 2;
        if (node.operator === "!" && node.argument.loc.start.column !== argumentShouldStartAt) {
          context.report({
            node,
            message: "Leave one (1) space between negation and argument",
          });
        }
      },
    };
  }
};
