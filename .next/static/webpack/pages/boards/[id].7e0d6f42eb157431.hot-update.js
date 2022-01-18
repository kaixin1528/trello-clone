"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/boards/[id]",{

/***/ "./lib/const.ts":
/*!**********************!*\
  !*** ./lib/const.ts ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"url\": function() { return /* binding */ url; },\n/* harmony export */   \"handleAddList\": function() { return /* binding */ handleAddList; },\n/* harmony export */   \"handleAddCard\": function() { return /* binding */ handleAddCard; },\n/* harmony export */   \"handleEditDescription\": function() { return /* binding */ handleEditDescription; },\n/* harmony export */   \"handleEditVisibility\": function() { return /* binding */ handleEditVisibility; },\n/* harmony export */   \"handleRename\": function() { return /* binding */ handleRename; },\n/* harmony export */   \"handleDeleteList\": function() { return /* binding */ handleDeleteList; },\n/* harmony export */   \"handleEditCardDescription\": function() { return /* binding */ handleEditCardDescription; },\n/* harmony export */   \"handleAddComment\": function() { return /* binding */ handleAddComment; },\n/* harmony export */   \"handleAddLabels\": function() { return /* binding */ handleAddLabels; },\n/* harmony export */   \"handleAddBoard\": function() { return /* binding */ handleAddBoard; }\n/* harmony export */ });\n/* harmony import */ var _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n// import { connectToDatabase } from \"../lib/mongodb\";\n// import { ObjectId } from \"mongodb\";\nvar dev_url = \"http://localhost:3000\";\nvar prod_url = \"https://kaixin-trello-clone.vercel.app\";\nvar url =  true ? dev_url : 0;\nvar handleAddList = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(listTitle, id) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"/api/boards/\".concat(id), {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: listTitle\n                    })\n                });\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const { db } = await connectToDatabase();\n// await db\n//   .collection(\"boards\")\n//   .updateOne(\n//     { _id: new ObjectId(id) },\n//     { $push: { lists: { name: listTitle } } }\n//   );\n}));\nvar handleAddCard = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(title, cardTitle, id) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"/api/boards/\".concat(id, \"/lists/\").concat(title), {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: title,\n                        cardTitle: cardTitle\n                    })\n                });\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const { db } = await connectToDatabase();\n// await db\n//   .collection(\"boards\")\n//   .updateOne(\n//     { _id: new ObjectId(id), \"lists.name\": title },\n//     { $addToSet: { \"lists.$.cards\": { title: cardTitle } } }\n//   );\n}));\nvar handleEditDescription = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, id, description, setEditDescription, editDescription) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                e.preventDefault();\n                _ctx.next = 3;\n                return fetch(\"/api/boards/\".concat(id), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        description: description\n                    })\n                });\n            case 3:\n                // const { db } = await connectToDatabase();\n                // await db.collection(\"boards\").updateOne(\n                //   { _id: new ObjectId(id) },\n                //   {\n                //     $set: {\n                //       menu: { madeBy: \"Kaixin Huang\", description: description },\n                //     },\n                //   }\n                // );\n                setEditDescription(!editDescription);\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar handleEditVisibility = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(value, id, setOpenVisibility, openVisibility) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"/api/boards/\".concat(id, \"/setting\"), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        visibility: value\n                    })\n                });\n            case 2:\n                // const { db } = await connectToDatabase();\n                // console.log(value);\n                // await db.collection(\"boards\").updateOne(\n                //   { _id: new ObjectId(id) },\n                //   {\n                //     $set: {\n                //       visibility: value,\n                //     },\n                //   }\n                // );\n                setOpenVisibility(!openVisibility);\n            case 3:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar handleRename = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(title, id, listTitle) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"/api/boards/\".concat(id, \"/lists/\").concat(title), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: title,\n                        newTitle: listTitle\n                    })\n                });\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const { db } = await connectToDatabase();\n// await db\n//   .collection(\"boards\")\n//   .updateOne(\n//     { _id: new ObjectId(id), \"lists.name\": title },\n//     { $set: { \"lists.$.name\": listTitle } }\n//   );\n}));\nvar handleDeleteList = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(title, id) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"/api/boards/\".concat(id, \"/lists/\").concat(title), {\n                    method: \"DELETE\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: title\n                    })\n                });\n            case 2:\n                // const { db } = await connectToDatabase();\n                // await db\n                //   .collection(\"boards\")\n                //   .updateOne(\n                //     { _id: new ObjectId(id) },\n                //     { $pull: { lists: { name: title } } }\n                //   );\n                window.location.reload();\n            case 3:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar handleEditCardDescription = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, listIndex, i, id, cardDescription, setEditDescription, editDescription) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                e.preventDefault();\n                _ctx.next = 3;\n                return fetch(\"/api/boards/\".concat(id, \"/lists/\").concat(listIndex, \"/cards/\").concat(i), {\n                    method: \"PUT\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        listIndex: listIndex,\n                        cardIndex: i,\n                        cardDescription: cardDescription\n                    })\n                });\n            case 3:\n                // const { db } = await connectToDatabase();\n                // await db.collection(\"boards\").updateOne(\n                //   { _id: new ObjectId(id) },\n                //   {\n                //     $set: {\n                //       [`lists.${listIndex}.cards.${i}.description`]: cardDescription,\n                //     },\n                //   }\n                // );\n                setEditDescription(!editDescription);\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\nvar handleAddComment = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e, listIndex, cardIndex, id, comment) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"/api/boards/\".concat(id, \"/lists/\").concat(listIndex, \"/cards/\").concat(cardIndex), {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        listIndex: listIndex,\n                        cardIndex: cardIndex,\n                        comment: comment\n                    })\n                });\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const { db } = await connectToDatabase();\n// await db.collection(\"boards\").updateOne(\n//   { _id: new ObjectId(id) },\n//   {\n//     $addToSet: {\n//       [`lists.${listIndex}.cards.${cardIndex}.comments`]: {\n//         name: \"Kaixin Huang\",\n//         description: comment,\n//       },\n//     },\n//   }\n// );\n}));\nvar handleAddLabels = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(currentLabels, label, listIndex, cardIndex, setLabels, labels, id) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                if (!currentLabels || !currentLabels.includes(label)) setLabels(_toConsumableArray(labels).concat([\n                    label\n                ]));\n                _ctx.next = 3;\n                return fetch(\"/api/boards/\".concat(id, \"/lists/\").concat(listIndex, \"/cards/\").concat(cardIndex), {\n                    method: \"DELETE\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        listIndex: listIndex,\n                        cardIndex: cardIndex,\n                        label: label\n                    })\n                });\n            case 3:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const { db } = await connectToDatabase();\n// await db.collection(\"boards\").updateOne(\n//   { _id: new ObjectId(id) },\n//   {\n//     $addToSet: {\n//       [`lists.${listIndex}.cards.${cardIndex}.labels`]: label,\n//     },\n//   }\n// );\n}));\nvar handleAddBoard = _asyncToGenerator(_Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(boardTitle, visibility) {\n    return _Users_kaihuang_Documents_GitHub_trello_clone_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return fetch(\"/api/boards\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        boardName: boardTitle,\n                        users: [\n                            \"KH\"\n                        ],\n                        visibility: visibility\n                    })\n                });\n            case 2:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n// const board = {\n//   boardName: boardTitle,\n//   users: [\"KH\"],\n//   visibility: visibility,\n// };\n// const { db } = await connectToDatabase();\n// await db.collection(\"boards\").insertOne(board);\n}));\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9jb25zdC50cz82YmZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uL2xpYi9tb25nb2RiXCI7XG4vLyBpbXBvcnQgeyBPYmplY3RJZCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmNvbnN0IGRldl91cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xuXG5jb25zdCBwcm9kX3VybCA9IFwiaHR0cHM6Ly9rYWl4aW4tdHJlbGxvLWNsb25lLnZlcmNlbC5hcHBcIjtcblxuZXhwb3J0IGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBkZXZfdXJsIDogcHJvZF91cmw7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVBZGRMaXN0ID0gYXN5bmMgKGxpc3RUaXRsZTogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAvYXBpL2JvYXJkcy8ke2lkfWAsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdGl0bGU6IGxpc3RUaXRsZSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgLy8gYXdhaXQgZGJcbiAgLy8gICAuY29sbGVjdGlvbihcImJvYXJkc1wiKVxuICAvLyAgIC51cGRhdGVPbmUoXG4gIC8vICAgICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9LFxuICAvLyAgICAgeyAkcHVzaDogeyBsaXN0czogeyBuYW1lOiBsaXN0VGl0bGUgfSB9IH1cbiAgLy8gICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFkZENhcmQgPSBhc3luYyAoXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGNhcmRUaXRsZTogc3RyaW5nLFxuICBpZDogc3RyaW5nXG4pID0+IHtcbiAgYXdhaXQgZmV0Y2goYC9hcGkvYm9hcmRzLyR7aWR9L2xpc3RzLyR7dGl0bGV9YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBjYXJkVGl0bGU6IGNhcmRUaXRsZSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgLy8gYXdhaXQgZGJcbiAgLy8gICAuY29sbGVjdGlvbihcImJvYXJkc1wiKVxuICAvLyAgIC51cGRhdGVPbmUoXG4gIC8vICAgICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSwgXCJsaXN0cy5uYW1lXCI6IHRpdGxlIH0sXG4gIC8vICAgICB7ICRhZGRUb1NldDogeyBcImxpc3RzLiQuY2FyZHNcIjogeyB0aXRsZTogY2FyZFRpdGxlIH0gfSB9XG4gIC8vICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVFZGl0RGVzY3JpcHRpb24gPSBhc3luYyAoXG4gIGU6IGFueSxcbiAgaWQ6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgc2V0RWRpdERlc2NyaXB0aW9uOiBGdW5jdGlvbixcbiAgZWRpdERlc2NyaXB0aW9uOiBib29sZWFuXG4pID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhd2FpdCBmZXRjaChgL2FwaS9ib2FyZHMvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIH0pLFxuICB9KTtcblxuICAvLyBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAvLyBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiYm9hcmRzXCIpLnVwZGF0ZU9uZShcbiAgLy8gICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9LFxuICAvLyAgIHtcbiAgLy8gICAgICRzZXQ6IHtcbiAgLy8gICAgICAgbWVudTogeyBtYWRlQnk6IFwiS2FpeGluIEh1YW5nXCIsIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbiB9LFxuICAvLyAgICAgfSxcbiAgLy8gICB9XG4gIC8vICk7XG4gIHNldEVkaXREZXNjcmlwdGlvbighZWRpdERlc2NyaXB0aW9uKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVFZGl0VmlzaWJpbGl0eSA9IGFzeW5jIChcbiAgdmFsdWU6IHN0cmluZyxcbiAgaWQ6IHN0cmluZyxcbiAgc2V0T3BlblZpc2liaWxpdHk6IEZ1bmN0aW9uLFxuICBvcGVuVmlzaWJpbGl0eTogYm9vbGVhblxuKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAvYXBpL2JvYXJkcy8ke2lkfS9zZXR0aW5nYCwge1xuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHZpc2liaWxpdHk6IHZhbHVlLFxuICAgIH0pLFxuICB9KTtcblxuICAvLyBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIC8vIGF3YWl0IGRiLmNvbGxlY3Rpb24oXCJib2FyZHNcIikudXBkYXRlT25lKFxuICAvLyAgIHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpIH0sXG4gIC8vICAge1xuICAvLyAgICAgJHNldDoge1xuICAvLyAgICAgICB2aXNpYmlsaXR5OiB2YWx1ZSxcbiAgLy8gICAgIH0sXG4gIC8vICAgfVxuICAvLyApO1xuXG4gIHNldE9wZW5WaXNpYmlsaXR5KCFvcGVuVmlzaWJpbGl0eSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlUmVuYW1lID0gYXN5bmMgKFxuICB0aXRsZTogc3RyaW5nLFxuICBpZDogc3RyaW5nLFxuICBsaXN0VGl0bGU6IHN0cmluZ1xuKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAvYXBpL2JvYXJkcy8ke2lkfS9saXN0cy8ke3RpdGxlfWAsIHtcbiAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBuZXdUaXRsZTogbGlzdFRpdGxlLFxuICAgIH0pLFxuICB9KTtcblxuICAvLyBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAvLyBhd2FpdCBkYlxuICAvLyAgIC5jb2xsZWN0aW9uKFwiYm9hcmRzXCIpXG4gIC8vICAgLnVwZGF0ZU9uZShcbiAgLy8gICAgIHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpLCBcImxpc3RzLm5hbWVcIjogdGl0bGUgfSxcbiAgLy8gICAgIHsgJHNldDogeyBcImxpc3RzLiQubmFtZVwiOiBsaXN0VGl0bGUgfSB9XG4gIC8vICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVEZWxldGVMaXN0ID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IHtcbiAgYXdhaXQgZmV0Y2goYC9hcGkvYm9hcmRzLyR7aWR9L2xpc3RzLyR7dGl0bGV9YCwge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgLy8gYXdhaXQgZGJcbiAgLy8gICAuY29sbGVjdGlvbihcImJvYXJkc1wiKVxuICAvLyAgIC51cGRhdGVPbmUoXG4gIC8vICAgICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9LFxuICAvLyAgICAgeyAkcHVsbDogeyBsaXN0czogeyBuYW1lOiB0aXRsZSB9IH0gfVxuICAvLyAgICk7XG5cbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUVkaXRDYXJkRGVzY3JpcHRpb24gPSBhc3luYyAoXG4gIGU6IGFueSxcbiAgbGlzdEluZGV4OiBudW1iZXIsXG4gIGk6IG51bWJlcixcbiAgaWQ6IHN0cmluZyxcbiAgY2FyZERlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIHNldEVkaXREZXNjcmlwdGlvbjogRnVuY3Rpb24sXG4gIGVkaXREZXNjcmlwdGlvbjogYm9vbGVhblxuKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgYXdhaXQgZmV0Y2goYC9hcGkvYm9hcmRzLyR7aWR9L2xpc3RzLyR7bGlzdEluZGV4fS9jYXJkcy8ke2l9YCwge1xuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGxpc3RJbmRleDogbGlzdEluZGV4LFxuICAgICAgY2FyZEluZGV4OiBpLFxuICAgICAgY2FyZERlc2NyaXB0aW9uOiBjYXJkRGVzY3JpcHRpb24sXG4gICAgfSksXG4gIH0pO1xuICAvLyBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAvLyBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiYm9hcmRzXCIpLnVwZGF0ZU9uZShcbiAgLy8gICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9LFxuICAvLyAgIHtcbiAgLy8gICAgICRzZXQ6IHtcbiAgLy8gICAgICAgW2BsaXN0cy4ke2xpc3RJbmRleH0uY2FyZHMuJHtpfS5kZXNjcmlwdGlvbmBdOiBjYXJkRGVzY3JpcHRpb24sXG4gIC8vICAgICB9LFxuICAvLyAgIH1cbiAgLy8gKTtcblxuICBzZXRFZGl0RGVzY3JpcHRpb24oIWVkaXREZXNjcmlwdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQWRkQ29tbWVudCA9IGFzeW5jIChcbiAgZTogYW55LFxuICBsaXN0SW5kZXg6IG51bWJlcixcbiAgY2FyZEluZGV4OiBudW1iZXIsXG4gIGlkOiBzdHJpbmcsXG4gIGNvbW1lbnQ6IHN0cmluZ1xuKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAvYXBpL2JvYXJkcy8ke2lkfS9saXN0cy8ke2xpc3RJbmRleH0vY2FyZHMvJHtjYXJkSW5kZXh9YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBsaXN0SW5kZXg6IGxpc3RJbmRleCxcbiAgICAgIGNhcmRJbmRleDogY2FyZEluZGV4LFxuICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgLy8gYXdhaXQgZGIuY29sbGVjdGlvbihcImJvYXJkc1wiKS51cGRhdGVPbmUoXG4gIC8vICAgeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSxcbiAgLy8gICB7XG4gIC8vICAgICAkYWRkVG9TZXQ6IHtcbiAgLy8gICAgICAgW2BsaXN0cy4ke2xpc3RJbmRleH0uY2FyZHMuJHtjYXJkSW5kZXh9LmNvbW1lbnRzYF06IHtcbiAgLy8gICAgICAgICBuYW1lOiBcIkthaXhpbiBIdWFuZ1wiLFxuICAvLyAgICAgICAgIGRlc2NyaXB0aW9uOiBjb21tZW50LFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgfSxcbiAgLy8gICB9XG4gIC8vICk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQWRkTGFiZWxzID0gYXN5bmMgKFxuICBjdXJyZW50TGFiZWxzOiBzdHJpbmdbXSxcbiAgbGFiZWw6IHN0cmluZyxcbiAgbGlzdEluZGV4OiBudW1iZXIsXG4gIGNhcmRJbmRleDogbnVtYmVyLFxuICBzZXRMYWJlbHM6IEZ1bmN0aW9uLFxuICBsYWJlbHM6IHN0cmluZ1tdLFxuICBpZDogc3RyaW5nXG4pID0+IHtcbiAgaWYgKCFjdXJyZW50TGFiZWxzIHx8ICFjdXJyZW50TGFiZWxzLmluY2x1ZGVzKGxhYmVsKSlcbiAgICBzZXRMYWJlbHMoWy4uLmxhYmVscywgbGFiZWxdKTtcbiAgYXdhaXQgZmV0Y2goYC9hcGkvYm9hcmRzLyR7aWR9L2xpc3RzLyR7bGlzdEluZGV4fS9jYXJkcy8ke2NhcmRJbmRleH1gLCB7XG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgbGlzdEluZGV4OiBsaXN0SW5kZXgsXG4gICAgICBjYXJkSW5kZXg6IGNhcmRJbmRleCxcbiAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICB9KSxcbiAgfSk7XG5cbiAgLy8gY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgLy8gYXdhaXQgZGIuY29sbGVjdGlvbihcImJvYXJkc1wiKS51cGRhdGVPbmUoXG4gIC8vICAgeyBfaWQ6IG5ldyBPYmplY3RJZChpZCkgfSxcbiAgLy8gICB7XG4gIC8vICAgICAkYWRkVG9TZXQ6IHtcbiAgLy8gICAgICAgW2BsaXN0cy4ke2xpc3RJbmRleH0uY2FyZHMuJHtjYXJkSW5kZXh9LmxhYmVsc2BdOiBsYWJlbCxcbiAgLy8gICAgIH0sXG4gIC8vICAgfVxuICAvLyApO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUFkZEJvYXJkID0gYXN5bmMgKFxuICBib2FyZFRpdGxlOiBzdHJpbmcsXG4gIHZpc2liaWxpdHk6IHN0cmluZ1xuKSA9PiB7XG4gIGF3YWl0IGZldGNoKGAvYXBpL2JvYXJkc2AsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgYm9hcmROYW1lOiBib2FyZFRpdGxlLFxuICAgICAgdXNlcnM6IFtcIktIXCJdLFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJpbGl0eSxcbiAgICB9KSxcbiAgfSk7XG4gIC8vIGNvbnN0IGJvYXJkID0ge1xuICAvLyAgIGJvYXJkTmFtZTogYm9hcmRUaXRsZSxcbiAgLy8gICB1c2VyczogW1wiS0hcIl0sXG4gIC8vICAgdmlzaWJpbGl0eTogdmlzaWJpbGl0eSxcbiAgLy8gfTtcblxuICAvLyBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAvLyBhd2FpdCBkYi5jb2xsZWN0aW9uKFwiYm9hcmRzXCIpLmluc2VydE9uZShib2FyZCk7XG59O1xuIl0sIm5hbWVzIjpbImRldl91cmwiLCJwcm9kX3VybCIsInVybCIsImhhbmRsZUFkZExpc3QiLCJsaXN0VGl0bGUiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGl0bGUiLCJoYW5kbGVBZGRDYXJkIiwiY2FyZFRpdGxlIiwiaGFuZGxlRWRpdERlc2NyaXB0aW9uIiwiZSIsImRlc2NyaXB0aW9uIiwic2V0RWRpdERlc2NyaXB0aW9uIiwiZWRpdERlc2NyaXB0aW9uIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVFZGl0VmlzaWJpbGl0eSIsInZhbHVlIiwic2V0T3BlblZpc2liaWxpdHkiLCJvcGVuVmlzaWJpbGl0eSIsInZpc2liaWxpdHkiLCJoYW5kbGVSZW5hbWUiLCJuZXdUaXRsZSIsImhhbmRsZURlbGV0ZUxpc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUVkaXRDYXJkRGVzY3JpcHRpb24iLCJsaXN0SW5kZXgiLCJpIiwiY2FyZERlc2NyaXB0aW9uIiwiY2FyZEluZGV4IiwiaGFuZGxlQWRkQ29tbWVudCIsImNvbW1lbnQiLCJoYW5kbGVBZGRMYWJlbHMiLCJjdXJyZW50TGFiZWxzIiwibGFiZWwiLCJzZXRMYWJlbHMiLCJsYWJlbHMiLCJpbmNsdWRlcyIsImhhbmRsZUFkZEJvYXJkIiwiYm9hcmRUaXRsZSIsImJvYXJkTmFtZSIsInVzZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/const.ts\n");

/***/ })

});