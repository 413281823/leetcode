const AST = {
    "type": "Program",
    "start": 0,
    "end": 58,
    "body": [
      {
        "type": "VariableDeclaration",
        "start": 0,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 6,
            "end": 19,
            "id": {
              "type": "Identifier",
              "start": 6,
              "end": 7,
              "name": "a"
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 10,
              "end": 19,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Literal",
                "start": 16,
                "end": 19,
                "value": "a",
                "raw": "\"a\""
              }
            }
          }
        ],
        "kind": "const"
      },
      {
        "type": "VariableDeclaration",
        "start": 20,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 26,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "name": "b"
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 30,
              "end": 39,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Literal",
                "start": 36,
                "end": 39,
                "value": "b",
                "raw": "'b'"
              }
            }
          }
        ],
        "kind": "const"
      },
      {
        "type": "ExpressionStatement",
        "start": 41,
        "end": 57,
        "expression": {
          "type": "CallExpression",
          "start": 41,
          "end": 57,
          "callee": {
            "type": "MemberExpression",
            "start": 41,
            "end": 52,
            "object": {
              "type": "Identifier",
              "start": 41,
              "end": 48,
              "name": "console"
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 52,
              "name": "log"
            },
            "computed": false,
            "optional": false
          },
          "arguments": [
            {
              "type": "CallExpression",
              "start": 53,
              "end": 56,
              "callee": {
                "type": "Identifier",
                "start": 53,
                "end": 54,
                "name": "a"
              },
              "arguments": [],
              "optional": false
            }
          ],
          "optional": false
        }
      }
    ],
    "sourceType": "module"
  }

  module.exports= AST