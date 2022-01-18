"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/boards/[id]/lists/[listTitle]";
exports.ids = ["pages/api/boards/[id]/lists/[listTitle]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectToDatabase\": () => (/* binding */ connectToDatabase)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nconst MONGODB_DB = process.env.DB_NAME;\n// check the MongoDB URI\nif (!MONGODB_URI) {\n    throw new Error(\"Define the MONGODB_URI environmental variable\");\n}\n// check the MongoDB DB\nif (!MONGODB_DB) {\n    throw new Error(\"Define the MONGODB_DB environmental variable\");\n}\nlet cachedClient = null;\nlet cachedDb = null;\nasync function connectToDatabase() {\n    // check the cached.\n    if (cachedClient && cachedDb) {\n        // load from cache\n        return {\n            client: cachedClient,\n            db: cachedDb\n        };\n    }\n    // set the connection options\n    const opts = {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    };\n    // Connect to cluster\n    let client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(MONGODB_URI, opts);\n    await client.connect();\n    let db = client.db(MONGODB_DB);\n    // set cache\n    cachedClient = client;\n    cachedDb = db;\n    return {\n        client: cachedClient,\n        db: cachedDb\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsS0FBSyxDQUFDQyxXQUFXLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXO0FBQzNDLEtBQUssQ0FBQ0csVUFBVSxHQUFHRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsT0FBTztBQUV0QyxFQUF3QjtBQUN4QixFQUFFLEdBQUdKLFdBQVcsRUFBRSxDQUFDO0lBQ2pCLEtBQUssQ0FBQyxHQUFHLENBQUNLLEtBQUssQ0FBQyxDQUErQztBQUNqRSxDQUFDO0FBRUQsRUFBdUI7QUFDdkIsRUFBRSxHQUFHRixVQUFVLEVBQUUsQ0FBQztJQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDRSxLQUFLLENBQUMsQ0FBOEM7QUFDaEUsQ0FBQztBQUVELEdBQUcsQ0FBQ0MsWUFBWSxHQUFHLElBQUk7QUFDdkIsR0FBRyxDQUFDQyxRQUFRLEdBQUcsSUFBSTtBQUVaLGVBQWVDLGlCQUFpQixHQUFHLENBQUM7SUFDekMsRUFBb0I7SUFDcEIsRUFBRSxFQUFFRixZQUFZLElBQUlDLFFBQVEsRUFBRSxDQUFDO1FBQzdCLEVBQWtCO1FBQ2xCLE1BQU0sQ0FBQyxDQUFDO1lBQ05FLE1BQU0sRUFBRUgsWUFBWTtZQUNwQkksRUFBRSxFQUFFSCxRQUFRO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxFQUE2QjtJQUM3QixLQUFLLENBQUNJLElBQUksR0FBRyxDQUFDO1FBQ1pDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxrQkFBa0IsRUFBRSxJQUFJO0lBQzFCLENBQUM7SUFFRCxFQUFxQjtJQUNyQixHQUFHLENBQUNKLE1BQU0sR0FBRyxHQUFHLENBQUNWLGdEQUFXLENBQUNDLFdBQVcsRUFBRVcsSUFBSTtJQUM5QyxLQUFLLENBQUNGLE1BQU0sQ0FBQ0ssT0FBTztJQUNwQixHQUFHLENBQUNKLEVBQUUsR0FBR0QsTUFBTSxDQUFDQyxFQUFFLENBQUNQLFVBQVU7SUFFN0IsRUFBWTtJQUNaRyxZQUFZLEdBQUdHLE1BQU07SUFDckJGLFFBQVEsR0FBR0csRUFBRTtJQUViLE1BQU0sQ0FBQyxDQUFDO1FBQ05ELE1BQU0sRUFBRUgsWUFBWTtRQUNwQkksRUFBRSxFQUFFSCxRQUFRO0lBQ2QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVsbG8tY2xvbmUvLi9saWIvbW9uZ29kYi5qcz9kOTIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbmNvbnN0IE1PTkdPREJfREIgPSBwcm9jZXNzLmVudi5EQl9OQU1FO1xuXG4vLyBjaGVjayB0aGUgTW9uZ29EQiBVUklcbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiRGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudGFsIHZhcmlhYmxlXCIpO1xufVxuXG4vLyBjaGVjayB0aGUgTW9uZ29EQiBEQlxuaWYgKCFNT05HT0RCX0RCKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIkRlZmluZSB0aGUgTU9OR09EQl9EQiBlbnZpcm9ubWVudGFsIHZhcmlhYmxlXCIpO1xufVxuXG5sZXQgY2FjaGVkQ2xpZW50ID0gbnVsbDtcbmxldCBjYWNoZWREYiA9IG51bGw7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0VG9EYXRhYmFzZSgpIHtcbiAgLy8gY2hlY2sgdGhlIGNhY2hlZC5cbiAgaWYgKGNhY2hlZENsaWVudCAmJiBjYWNoZWREYikge1xuICAgIC8vIGxvYWQgZnJvbSBjYWNoZVxuICAgIHJldHVybiB7XG4gICAgICBjbGllbnQ6IGNhY2hlZENsaWVudCxcbiAgICAgIGRiOiBjYWNoZWREYixcbiAgICB9O1xuICB9XG5cbiAgLy8gc2V0IHRoZSBjb25uZWN0aW9uIG9wdGlvbnNcbiAgY29uc3Qgb3B0cyA9IHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICB9O1xuXG4gIC8vIENvbm5lY3QgdG8gY2x1c3RlclxuICBsZXQgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KE1PTkdPREJfVVJJLCBvcHRzKTtcbiAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcbiAgbGV0IGRiID0gY2xpZW50LmRiKE1PTkdPREJfREIpO1xuXG4gIC8vIHNldCBjYWNoZVxuICBjYWNoZWRDbGllbnQgPSBjbGllbnQ7XG4gIGNhY2hlZERiID0gZGI7XG5cbiAgcmV0dXJuIHtcbiAgICBjbGllbnQ6IGNhY2hlZENsaWVudCxcbiAgICBkYjogY2FjaGVkRGIsXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX0RCIiwiREJfTkFNRSIsIkVycm9yIiwiY2FjaGVkQ2xpZW50IiwiY2FjaGVkRGIiLCJjb25uZWN0VG9EYXRhYmFzZSIsImNsaWVudCIsImRiIiwib3B0cyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/mongodb.js\n");

/***/ }),

/***/ "./pages/api/boards/[id]/lists/[listTitle]/index.ts":
/*!**********************************************************!*\
  !*** ./pages/api/boards/[id]/lists/[listTitle]/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"getBoardInfo\": () => (/* binding */ getBoardInfo),\n/* harmony export */   \"addCard\": () => (/* binding */ addCard),\n/* harmony export */   \"rename\": () => (/* binding */ rename),\n/* harmony export */   \"deleteList\": () => (/* binding */ deleteList)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../lib/mongodb */ \"./lib/mongodb.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nfunction handler(req, res) {\n    const id = req.query.id.toString();\n    switch(req.method){\n        case \"GET\":\n            try {\n                return getBoardInfo(req, res, id);\n            } catch (error) {\n                return res.json({\n                    msg: error\n                });\n            }\n        case \"POST\":\n            try {\n                return addCard(req, res, id);\n            } catch (error1) {\n                return res.json({\n                    msg: error1\n                });\n            }\n        case \"PUT\":\n            try {\n                return rename(req, res, id);\n            } catch (error2) {\n                return res.json({\n                    msg: error2\n                });\n            }\n        case \"DELETE\":\n            try {\n                return deleteList(req, res, id);\n            } catch (error3) {\n                return res.json({\n                    msg: error3\n                });\n            }\n    }\n};\nconst getBoardInfo = async (req, res, id)=>{\n    const { db  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    const boardInfo = await db.collection(\"boards\").find({\n        _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(id)\n    }).toArray();\n    return res.status(200).json(boardInfo);\n};\nconst addCard = async (req, res, id)=>{\n    const { db  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    await db.collection(\"boards\").updateOne({\n        _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(id),\n        \"lists.name\": req.body.title\n    }, {\n        $addToSet: {\n            \"lists.$.cards\": {\n                title: req.body.cardTitle\n            }\n        }\n    });\n    return res.status(200).json({\n        msg: \"Successfully added a card to the list\"\n    });\n};\nconst rename = async (req, res, id)=>{\n    const { db  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    await db.collection(\"boards\").updateOne({\n        _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(id),\n        \"lists.name\": req.body.title\n    }, {\n        $set: {\n            \"lists.$.name\": req.body.newTitle\n        }\n    });\n    return res.status(200).json({\n        msg: \"Successfully renamed the list\"\n    });\n};\nconst deleteList = async (req, res, id)=>{\n    const { db  } = await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectToDatabase)();\n    await db.collection(\"boards\").updateOne({\n        _id: new mongodb__WEBPACK_IMPORTED_MODULE_0__.ObjectId(id)\n    }, {\n        $pull: {\n            lists: {\n                name: req.body.title\n            }\n        }\n    });\n    return res.status(200).json({\n        msg: \"Successfully added a card to the list\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYm9hcmRzL1tpZF0vbGlzdHMvW2xpc3RUaXRsZV0vaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxFQUE2RTtBQUMzQztBQUUrQjtBQUVsRCxRQUFRLENBQUNFLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRSxDQUFDO0lBQzFFLEtBQUssQ0FBQ0MsRUFBRSxHQUFXRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsRUFBRSxDQUFDRSxRQUFRO0lBQ3hDLE1BQU0sQ0FBRUosR0FBRyxDQUFDSyxNQUFNO1FBQ2hCLElBQUksQ0FBQyxDQUFLO1lBQ1IsR0FBRyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDQyxZQUFZLENBQUNOLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxFQUFFO1lBQ2xDLENBQUMsQ0FBQyxLQUFLLEVBQUVLLEtBQUssRUFBRSxDQUFDO2dCQUNmLE1BQU0sQ0FBQ04sR0FBRyxDQUFDTyxJQUFJLENBQUMsQ0FBQztvQkFBQ0MsR0FBRyxFQUFFRixLQUFLO2dCQUFDLENBQUM7WUFDaEMsQ0FBQztRQUNILElBQUksQ0FBQyxDQUFNO1lBQ1QsR0FBRyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDRyxPQUFPLENBQUNWLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxFQUFFO1lBQzdCLENBQUMsQ0FBQyxLQUFLLEVBQUVLLE1BQUssRUFBRSxDQUFDO2dCQUNmLE1BQU0sQ0FBQ04sR0FBRyxDQUFDTyxJQUFJLENBQUMsQ0FBQztvQkFBQ0MsR0FBRyxFQUFFRixNQUFLO2dCQUFDLENBQUM7WUFDaEMsQ0FBQztRQUVILElBQUksQ0FBQyxDQUFLO1lBQ1IsR0FBRyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSxDQUFDSSxNQUFNLENBQUNYLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxFQUFFO1lBQzVCLENBQUMsQ0FBQyxLQUFLLEVBQUVLLE1BQUssRUFBRSxDQUFDO2dCQUNmLE1BQU0sQ0FBQ04sR0FBRyxDQUFDTyxJQUFJLENB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QUFDLEdBQUcsS0FBSyxDQUFDZiwrREFBaUI7SUFDdEMsS0FBSyxDQUFDZSxFQUFFLENBQ0xFLFVBQVUsQ0FBQyxDQUFRLFNBQ25CSyxTQUFTLENBQ1IsQ0FBQztRQUFDSCxHQUFHLEVBQUUsR0FBRyxDQUFDcEIsNkNBQVEsQ0FBQ0ssRUFBRTtJQUFFLENBQUMsRUFDekIsQ0FBQztRQUFDeUIsS0FBSyxFQUFFLENBQUM7WUFBQ0MsS0FBSyxFQUFFLENBQUM7Z0JBQUNDLElBQUksRUFBRTdCLEdBQUcsQ0FBQ3FCLElBQUksQ0FBQ0MsS0FBSztZQUFDLENBQUM7UUFBQyxDQUFDO0lBQUMsQ0FBQztJQUVsRCxNQUFNLENBQUNyQixHQUFHLENBQUNrQixNQUFNLENBQUMsR0FBRyxFQUFFWCxJQUFJLENBQUMsQ0FBQztRQUFDQyxHQUFHLEVBQUUsQ0FBdUM7SUFBQyxDQUFDO0FBQzlFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVsbG8tY2xvbmUvLi9wYWdlcy9hcGkvYm9hcmRzL1tpZF0vbGlzdHMvW2xpc3RUaXRsZV0vaW5kZXgudHM/OTgxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHsgT2JqZWN0SWQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IGNvbm5lY3RUb0RhdGFiYXNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgY29uc3QgaWQ6IHN0cmluZyA9IHJlcS5xdWVyeS5pZC50b1N0cmluZygpO1xuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZ2V0Qm9hcmRJbmZvKHJlcSwgcmVzLCBpZCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVzLmpzb24oeyBtc2c6IGVycm9yIH0pO1xuICAgICAgfVxuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gYWRkQ2FyZChyZXEsIHJlcywgaWQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgbXNnOiBlcnJvciB9KTtcbiAgICAgIH1cblxuICAgIGNhc2UgXCJQVVRcIjpcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiByZW5hbWUocmVxLCByZXMsIGlkKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbih7IG1zZzogZXJyb3IgfSk7XG4gICAgICB9XG5cbiAgICBjYXNlIFwiREVMRVRFXCI6XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVsZXRlTGlzdChyZXEsIHJlcywgaWQpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsgbXNnOiBlcnJvciB9KTtcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0Qm9hcmRJbmZvID0gYXN5bmMgKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZSxcbiAgaWQ6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XG4gIGNvbnN0IGJvYXJkSW5mbyA9IGF3YWl0IGRiXG4gICAgLmNvbGxlY3Rpb24oXCJib2FyZHNcIilcbiAgICAuZmluZCh7IF9pZDogbmV3IE9iamVjdElkKGlkKSB9KVxuICAgIC50b0FycmF5KCk7XG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihib2FyZEluZm8pO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZENhcmQgPSBhc3luYyAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlLFxuICBpZDogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihcImJvYXJkc1wiKVxuICAgIC51cGRhdGVPbmUoXG4gICAgICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSwgXCJsaXN0cy5uYW1lXCI6IHJlcS5ib2R5LnRpdGxlIH0sXG4gICAgICB7ICRhZGRUb1NldDogeyBcImxpc3RzLiQuY2FyZHNcIjogeyB0aXRsZTogcmVxLmJvZHkuY2FyZFRpdGxlIH0gfSB9XG4gICAgKTtcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbXNnOiBcIlN1Y2Nlc3NmdWxseSBhZGRlZCBhIGNhcmQgdG8gdGhlIGxpc3RcIiB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW5hbWUgPSBhc3luYyAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlLFxuICBpZDogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgeyBkYiB9ID0gYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgYXdhaXQgZGJcbiAgICAuY29sbGVjdGlvbihcImJvYXJkc1wiKVxuICAgIC51cGRhdGVPbmUoXG4gICAgICB7IF9pZDogbmV3IE9iamVjdElkKGlkKSwgXCJsaXN0cy5uYW1lXCI6IHJlcS5ib2R5LnRpdGxlIH0sXG4gICAgICB7ICRzZXQ6IHsgXCJsaXN0cy4kLm5hbWVcIjogcmVxLmJvZHkubmV3VGl0bGUgfSB9XG4gICAgKTtcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbXNnOiBcIlN1Y2Nlc3NmdWxseSByZW5hbWVkIHRoZSBsaXN0XCIgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlTGlzdCA9IGFzeW5jIChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXG4gIGlkOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCB7IGRiIH0gPSBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICBhd2FpdCBkYlxuICAgIC5jb2xsZWN0aW9uKFwiYm9hcmRzXCIpXG4gICAgLnVwZGF0ZU9uZShcbiAgICAgIHsgX2lkOiBuZXcgT2JqZWN0SWQoaWQpIH0sXG4gICAgICB7ICRwdWxsOiB7IGxpc3RzOiB7IG5hbWU6IHJlcS5ib2R5LnRpdGxlIH0gfSB9XG4gICAgKTtcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbXNnOiBcIlN1Y2Nlc3NmdWxseSBhZGRlZCBhIGNhcmQgdG8gdGhlIGxpc3RcIiB9KTtcbn07XG4iXSwibmFtZXMiOlsiT2JqZWN0SWQiLCJjb25uZWN0VG9EYXRhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwidG9TdHJpbmciLCJtZXRob2QiLCJnZXRCb2FyZEluZm8iLCJlcnJvciIsImpzb24iLCJtc2ciLCJhZGRDYXJkIiwicmVuYW1lIiwiZGVsZXRlTGlzdCIsImRiIiwiYm9hcmRJbmZvIiwiY29sbGVjdGlvbiIsImZpbmQiLCJfaWQiLCJ0b0FycmF5Iiwic3RhdHVzIiwidXBkYXRlT25lIiwiYm9keSIsInRpdGxlIiwiJGFkZFRvU2V0IiwiY2FyZFRpdGxlIiwiJHNldCIsIm5ld1RpdGxlIiwiJHB1bGwiLCJsaXN0cyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/boards/[id]/lists/[listTitle]/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/boards/[id]/lists/[listTitle]/index.ts"));
module.exports = __webpack_exports__;

})();