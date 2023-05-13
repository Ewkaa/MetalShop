"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var DEBUG = 'debug';
var LOG = 'log';
var ERROR = 'error';
var OFF = 'off';
var LOG_LEVELS = [DEBUG, LOG, ERROR, OFF];
var logFuncAtLevels = function (logLevels, logFunction) {
    if (logFunction === void 0) { logFunction = console; }
    return function (logLevel) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        if (logLevel !== OFF && logLevels.indexOf(logLevel) !== -1 && msg.length > 0) {
            logFunction[logLevel].apply(logFunction, msg);
        }
    };
};
var getLogLevel = function (logLevel) {
    var dynamicLogLevelIndex = LOG_LEVELS.indexOf(logLevel);
    return LOG_LEVELS.slice(dynamicLogLevelIndex);
};
var createLogger = function (logLevel) {
    var activeLogLevels = getLogLevel(logLevel);
    var logger = logFuncAtLevels(activeLogLevels);
    return LOG_LEVELS.reduce(function (accumulator, level) {
        var _a;
        return (__assign(__assign({}, accumulator), (_a = {}, _a[level] = function () {
            var msg = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                msg[_i] = arguments[_i];
            }
            return logger.apply(void 0, __spreadArray([level], msg, false));
        }, _a)));
    }, {});
};
