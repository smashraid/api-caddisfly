"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.send('This is a test');
});
exports.default = router;
//# sourceMappingURL=test.js.map