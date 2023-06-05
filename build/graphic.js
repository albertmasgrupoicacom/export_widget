"use strict";

Liferay.Loader.define("chart-1@1.0.0/graphic", ['module', 'exports', 'require', 'chart-1$chart.js/auto'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Graphic = void 0;
    var _auto = _interopRequireDefault(require("chart-1$chart.js/auto"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }
    function _regeneratorRuntime() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      _regeneratorRuntime = function _regeneratorRuntime() {
        return exports;
      };var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
          $Symbol = "function" == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || "@@iterator",
          asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
          toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {
        return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];
      }try {
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator;
      }function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {
            var result = record.arg,
                value = result.value;return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            }) : PromiseImpl.resolve(value).then(function (unwrapped) {
              result.value = unwrapped, resolve(result);
            }, function (error) {
              return invoke("throw", error, resolve, reject);
            });
          }reject(record.arg);
        }var previousPromise;defineProperty(this, "_invoke", { value: function value(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } });
      }function makeInvokeMethod(innerFn, self, context) {
        var state = "suspendedStart";return function (method, arg) {
          if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {
            if ("throw" === method) throw arg;return doneResult();
          }for (context.method = method, context.arg = arg;;) {
            var delegate = context.delegate;if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;return delegateResult;
              }
            }if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
              if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);
            } else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {
              if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };
            }"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
          }
        };
      }function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method,
            method = delegate.iterator[methodName];if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
      }function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
      }function resetTryEntry(entry) {
        var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;
      }function Context(tryLocsList) {
        this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
      }function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;return next.value = undefined, next.done = !0, next;
            };return next.next = next;
          }
        }return { next: doneResult };
      }function doneResult() {
        return { value: undefined, done: !0 };
      }return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
      }, exports.mark = function (genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
      }, exports.awrap = function (arg) {
        return { __await: arg };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
        return this;
      }), define(Gp, "toString", function () {
        return "[object Generator]";
      }), exports.keys = function (val) {
        var object = Object(val),
            keys = [];for (var key in object) keys.push(key);return keys.reverse(), function next() {
          for (; keys.length;) {
            var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;
          }return next.done = !0, next;
        };
      }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        }, stop: function stop() {
          this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;
        }, dispatchException: function dispatchException(exception) {
          if (this.done) throw exception;var context = this;function handle(loc, caught) {
            return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
          }for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i],
                record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc"),
                  hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              } else {
                if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
              }
            }
          }
        }, abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;break;
            }
          }finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        }, complete: function complete(record, afterLoc) {
          if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        }, finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
          }
        }, "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {
              var record = entry.completion;if ("throw" === record.type) {
                var thrown = record.arg;resetTryEntry(entry);
              }return thrown;
            }
          }throw new Error("illegal catch attempt");
        }, delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        } }, exports;
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);var value = info.value;
      } catch (error) {
        reject(error);return;
      }if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }_next(undefined);
        });
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");return _typeof(key) === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {
        var res = prim.call(input, hint || "default");if (_typeof(res) !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");
      }return (hint === "string" ? String : Number)(input);
    }
    var colors = ['#36a2eb', '#ff6384', '#4bc0c0', '#ff9f40', '#9966ff', '#ffcd56', '#c9cbcf'];
    var Graphic = /*#__PURE__*/function () {
      function Graphic(base_url, type, details) {
        var _this = this;
        _classCallCheck(this, Graphic);
        var url = this.mountUrl(base_url, type, details);

        var element1 = document.getElementById('but_pie');
        element1.addEventListener('click', this.toPie);
        if (type === 'SERIE') {
          this.getJSONData(url).then(function (graphicData) {
            _this.addTable(graphicData);
            _this.pintarSerie(graphicData);
          });
        } else if (type === 'PREGUNTA') {
          var data = details;
          var type_var = 0;
          if (data.id_cruce2) {
            type_var = 1;
          }

          this.postJSON(url, data).then(function (graphicData) {
            if (type_var === 0) {
              _this.addSelectorOperaciones(graphicData, 'operaciones', type_var);
              _this.addTableCRUCE(graphicData);
              _this.pintarCruce1(graphicData);
            } else {
              _this.addSelector(graphicData, 'variableCruce');
              _this.addSelectorOperaciones(graphicData, 'operaciones', type_var);
              _this.addTableCRUCE2(graphicData, 0);
              _this.pintarCruce2(graphicData, 0);
            }
          });
        }
      }
      _createClass(Graphic, [{
        key: "toPie",
        value: function toPie() {
          console.log('toPie');
          console.log(this.chart);
          // this.chart.update();
        }
      }, {
        key: "pintarCruce1",
        value: function pintarCruce1(data) {
          var ctx = document.getElementById("graph_chart");
          var dataReto = this.getDataCruce1(data);

          this.paintCruce1(ctx, dataReto, 'bar');
        }
      }, {
        key: "pintarCruce2",
        value: function pintarCruce2(data, etiqCruce2_index) {
          var ctx = document.getElementById("graph_chart");
          var dataReto = this.getDataCruce2(data, etiqCruce2_index);

          if (!this.chart) {
            this.paintCruce1(ctx, dataReto, 'bar');
          } else {
            this.chart.data = dataReto;
            this.chart.update();
          }
        }
      }, {
        key: "pintarSerie",
        value: function pintarSerie(data) {
          var ctx = document.getElementById("graph_chart");
          console.log(data);
          var dataReto = this.getData(data);
          this.paint(ctx, dataReto, 'line');
        }
      }, {
        key: "postJSON",
        value: function () {
          var _postJSON = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, data) {
            var formBody, property, encodedKey, encodedValue, response, result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  formBody = [];
                  for (property in data) {
                    encodedKey = encodeURIComponent(property);
                    encodedValue = encodeURIComponent(data[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                  }
                  formBody = formBody.join("&");
                  _context.prev = 3;
                  _context.next = 6;
                  return fetch(url, {
                    method: "POST",
                    // or 'PUT'
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                      // "Content-Type": "application/json",
                    },

                    // body: JSON.stringify(data),
                    body: formBody
                  });
                case 6:
                  response = _context.sent;
                  _context.next = 9;
                  return response.json();
                case 9:
                  result = _context.sent;
                  console.log("Success:", result);
                  return _context.abrupt("return", result);
                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](3);
                  console.error("Error:", _context.t0);
                case 17:
                case "end":
                  return _context.stop();
              }
            }, _callee, null, [[3, 14]]);
          }));

          return function postJSON(_x, _x2) {
            return _postJSON.apply(this, arguments);
          };
        }()
      }, {
        key: "getJSONData",
        value: function () {
          var _getJSONData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
            var response, result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return fetch(url);
                case 2:
                  response = _context2.sent;
                  _context2.next = 5;
                  return response.json();
                case 5:
                  result = _context2.sent;
                  return _context2.abrupt("return", result);
                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));

          return function getJSONData(_x3) {
            return _getJSONData.apply(this, arguments);
          };
        }()
      }, {
        key: "mountUrl",
        value: function mountUrl(base_url, type, details) {
          var url = base_url;
          if (type === 'SERIE') {
            url = url + '/serie/' + details.id;
          } else if (type === 'PREGUNTA') {
            url = url + '/resultados';
          }
          return url;
        }
      }, {
        key: "addHeaderCell",
        value: function addHeaderCell(row, contenido) {
          var headerCell = document.createElement('th');
          // const contenido = data.ficha.tabla[tabla].etiqCruce1[k].etiqueta;
          var cellText = document.createTextNode(contenido);
          headerCell.appendChild(cellText);
          row.appendChild(headerCell);
        }
      }, {
        key: "addCell",
        value: function addCell(row, contenido) {
          var cell = document.createElement('td');
          var cellText = document.createTextNode(contenido);
          cell.appendChild(cellText);
          cell.className += (cell.className ? " " : "") + "td";
          row.appendChild(cell);
        }
      }, {
        key: "addTableCRUCE",
        value: function addTableCRUCE(data) {
          var ctx = document.getElementById("graph_container");
          var tbl = document.getElementById("graph_table");
          var tblBody = document.createElement('tbody');
          var row = document.createElement('tr');
          this.addHeaderCell(row, '');
          for (var tabla = 0; tabla < data.ficha.tabla.length; tabla++) {
            for (var k = 0; k < data.ficha.tabla[tabla].etiqCruce1.length; k++) {
              this.addHeaderCell(row, data.ficha.tabla[tabla].etiqCruce1[k].etiqueta);
            }
            this.addHeaderCell(row, 'Total');
            tblBody.appendChild(row);
            for (var i = 0; i < data.ficha.tabla[tabla].etiqVar.length + 1; i++) {
              var _row = document.createElement('tr');
              if (i >= data.ficha.tabla[tabla].etiqVar.length) {
                this.addCell(_row, '(N)');
              } else {
                this.addCell(_row, data.ficha.tabla[tabla].etiqVar[i].etiqueta);
              }
              for (var j = 0; j < data.ficha.tabla[tabla].cruce[i].length; j++) {
                this.addCell(_row, data.ficha.tabla[tabla].cruce[i][j]);
              }
              tblBody.appendChild(_row);
            }

            // MEDIA
            if (data.ficha.tabla[tabla].hayMediaVar) {
              var _row2 = document.createElement('tr');
              this.addCell(_row2, 'Media');
              for (var _k = 0; _k < data.ficha.tabla[tabla].mediasVariable.length; _k++) {
                this.addCell(_row2, data.ficha.tabla[tabla].mediasVariable[_k].media.toFixed(2));
              }
              tblBody.appendChild(_row2);
              _row2 = document.createElement('tr');
              this.addCell(_row2, 'Desviación típica');
              for (var _k2 = 0; _k2 < data.ficha.tabla[tabla].mediasVariable.length; _k2++) {
                this.addCell(_row2, data.ficha.tabla[tabla].mediasVariable[_k2].desvEstandar.toFixed(2));
              }
              tblBody.appendChild(_row2);
              _row2 = document.createElement('tr');
              this.addCell(_row2, 'N');
              for (var _k3 = 0; _k3 < data.ficha.tabla[tabla].mediasVariable.length; _k3++) {
                this.addCell(_row2, data.ficha.tabla[tabla].mediasVariable[_k3].base);
              }
              tblBody.appendChild(_row2);
            }
            tbl.appendChild(tblBody);
            ctx.appendChild(tbl);
          }
        }
      }, {
        key: "addTableCRUCE2",
        value: function addTableCRUCE2(data, etiqCruce2_index) {
          var ctx = document.getElementById("graph_container");
          var tbl = document.getElementById("graph_table");
          var tblBody = document.createElement('tbody');
          var row = document.createElement('tr');
          this.addHeaderCell(row, '');
          // const etiqCruce2_index = 0;

          for (var tabla = 0; tabla < data.ficha.tabla.length; tabla++) {
            for (var k = 0; k < data.ficha.tabla[tabla].etiqCruce1.length; k++) {
              this.addHeaderCell(row, data.ficha.tabla[tabla].etiqCruce1[k].etiqueta);
            }
            this.addHeaderCell(row, 'Total');
            tblBody.appendChild(row);
            for (var i = 0; i < data.ficha.tabla[tabla].etiqVar.length; i++) {
              var _row3 = document.createElement('tr');
              this.addCell(_row3, data.ficha.tabla[tabla].etiqVar[i].etiqueta);
              for (var j = 0; j < data.ficha.tabla[tabla].cruce[i].length; j++) {
                this.addCell(_row3, data.ficha.tabla[tabla].cruce[i][j][etiqCruce2_index]);
              }
              tblBody.appendChild(_row3);
            }
            tbl.appendChild(tblBody);
            ctx.appendChild(tbl);
          }
        }
      }, {
        key: "addTable",
        value: function addTable(data) {
          var ctx = document.getElementById("graph_container");
          var tbl = document.getElementById("graph_table");
          var tblBody = document.createElement('tbody');
          var row = document.createElement('tr');
          this.addHeaderCell(row, '');
          for (var k = 0; k < data.ficha.serie_temporal.length; k++) {
            this.addHeaderCell(row, data.ficha.serie_temporal[k].fecha);
          }
          tblBody.appendChild(row);
          for (var i = 0; i < data.ficha.filas.length; i++) {
            var _row4 = document.createElement('tr');
            this.addCell(_row4, data.ficha.filas[i]);
            for (var j = 0; j < data.ficha.serie_temporal.length; j++) {
              this.addCell(_row4, data.ficha.serie_temporal[j].datos[i]);
            }
            tblBody.appendChild(_row4);
          }
          tbl.appendChild(tblBody);
          ctx.appendChild(tbl);
        }
      }, {
        key: "addSelector",
        value: function addSelector(data, name) {
          var _this2 = this;
          var tabla_index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          var ctx = document.getElementById("graph_container");
          var selector = document.createElement('select');
          selector.id = name;
          ctx.appendChild(selector);
          var array = data.ficha.tabla[tabla_index].etiqCruce2;
          for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = parseInt(i); //array[i].categoria;
            option.text = array[i].etiqueta;
            selector.appendChild(option);
          }
          selector.addEventListener("change", function (e) {
            _this2.removeTable();
            _this2.addTableCRUCE2(data, parseInt(e.target.value));
            // this.removeChart();
            _this2.pintarCruce2(data, parseInt(e.target.value));
          });
        }
      }, {
        key: "addSelectorOperaciones",
        value: function addSelectorOperaciones(data, name, type_var) {
          var _this3 = this;
          arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

          var ctx = document.getElementById("graph_container");
          var selector = document.createElement('select');
          selector.id = name;
          ctx.appendChild(selector);
          var array = [{
            id: 0,
            etiqueta: 'Valores Absolutos'
          }, {
            id: 1,
            etiqueta: 'Mostrar % (columna)'
          }, {
            id: 2,
            etiqueta: 'Mostrar % (columna - NS/NC)'
          }, {
            id: 3,
            etiqueta: 'Mostrar % (fila)'
          }, {
            id: 4,
            etiqueta: 'Mostrar % (fila - NS/NC)'
          }, {
            id: 5,
            etiqueta: 'Mostrar % (total)'
          }, {
            id: 6,
            etiqueta: 'Mostrar % (total - NS/NC)'
          }];
          for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.value = parseInt(i); //array[i].categoria;
            option.text = array[i].etiqueta;
            selector.appendChild(option);
          }
          selector.addEventListener("change", function (e) {
            var newData = _this3.calculate(data, parseInt(e.target.value));
            _this3.removeTable();
            if (type_var === 0) {
              _this3.addTableCRUCE(newData, parseInt(e.target.value));
              _this3.pintarCruce1(newData, parseInt(e.target.value));
            } else {
              _this3.addTableCRUCE2(newData, parseInt(e.target.value));
              _this3.pintarCruce2(newData, parseInt(e.target.value));
            }
          });
        }
      }, {
        key: "calculate",
        value: function calculate(data, type_value_index) {
          var newdata;
          var cloneData = JSON.parse(JSON.stringify(data));
          if (type_value_index == 0) {
            console.log('Valores Absolutos)');
            newdata = cloneData;
          }
          // Valores absolutos
          if (type_value_index == 1) {
            console.log('Mostrar % (columna)');
          }
          return newdata;
        }
      }, {
        key: "getData",
        value: function getData(data) {
          var newData = {};
          var estudios = [];
          newData.datasets = [];
          newData.titulo = data.ficha.titulo;
          var filas = data.ficha.filas.slice(0, -1);
          var newArray = [];
          var colorIndex = 0;
          filas.map(function (fila) {
            var color = colors[colorIndex];

            newArray.push({
              label: fila,
              data: [],
              backgroundColor: color,
              borderColor: color
            });
            colorIndex == 6 ? colorIndex = 0 : colorIndex++;
          });
          data.ficha.serie_temporal.map(function (x) {
            filas.map(function (fila, index) {
              newArray[index].data.push(x.datos[index]);
            });
            estudios.push(x.fecha);
          });
          newData.labels = estudios;
          newData.datasets = newArray;
          return newData;
        }
      }, {
        key: "paint",
        value: function paint(ctx, data, tipo) {
          this.chart = new _auto["default"](ctx, {
            type: tipo,
            data: data,
            options: {
              plugins: {
                title: {
                  display: true,
                  text: data.titulo,
                  position: 'top'
                },
                legend: {
                  display: true,
                  position: 'bottom'
                }
              },
              responsive: true,
              scales: {
                x: {
                  stacked: true
                },
                y: {
                  beginAtZero: true,
                  stacked: false,
                  type: 'linear'
                }
              }
            }
          });
        }
      }, {
        key: "getDataCruce1",
        value: function getDataCruce1(data) {
          console.log(data);
          var newData = {};
          var labels = [];
          newData.datasets = [];
          newData.titulo = data.ficha.pregunta.titulo;
          var filas = data.ficha.tabla[0].etiqCruce1;
          filas.push({
            etiqueta: 'Total'
          });
          labels = data.ficha.tabla[0].etiqVar.map(function (label) {
            return label.etiqueta;
          });
          var datasets = [];
          var colorIndex = 0;
          filas.map(function (fila) {
            var color = colors[colorIndex];
            var element = {
              label: fila.etiqueta,
              data: [],
              backgroundColor: color,
              borderColor: color
            };
            datasets.push(element);
            colorIndex == 6 ? colorIndex = 0 : colorIndex++;
          });
          data.ficha.tabla[0].cruce.slice(0, -1).map(function (x) {
            filas.map(function (fila, index) {
              datasets[index].data.push(x[index]);
            });
          });
          newData.labels = labels;
          newData.datasets = datasets;
          console.log(newData);
          return newData;
        }
      }, {
        key: "getDataCruce2",
        value: function getDataCruce2(data, etiqCruce2_index) {
          console.log(data);
          var newData = {};
          var labels = [];
          newData.datasets = [];
          newData.titulo = data.ficha.pregunta.titulo;

          // const filas = data.ficha.tabla[0].etiqCruce1;
          var filas = JSON.parse(JSON.stringify(data.ficha.tabla[0].etiqCruce1));
          filas.push({
            etiqueta: 'Total'
          });
          labels = data.ficha.tabla[0].etiqVar.map(function (label) {
            return label.etiqueta;
          });
          var datasets = [];
          var colorIndex = 0;
          filas.map(function (fila) {
            var color = colors[colorIndex];
            var element = {
              label: fila.etiqueta,
              data: [],
              backgroundColor: color,
              borderColor: color
            };
            datasets.push(element);
            colorIndex == 6 ? colorIndex = 0 : colorIndex++;
          });
          data.ficha.tabla[0].cruce.slice(0, -1).map(function (x) {
            filas.map(function (fila, index) {
              datasets[index].data.push(x[index][etiqCruce2_index]);
            });
          });
          newData.labels = labels;
          newData.datasets = datasets;
          console.log(newData);
          return newData;
        }
      }, {
        key: "paintCruce1",
        value: function paintCruce1(ctx, data, tipo) {
          this.chart = new _auto["default"](ctx, {
            type: tipo,
            data: data,
            options: {
              plugins: {
                title: {
                  display: true,
                  text: data.titulo,
                  position: 'top'
                },
                legend: {
                  display: true,
                  position: 'bottom'
                }
              },
              responsive: true,
              scales: {
                x: {
                  stacked: false
                },
                y: {
                  beginAtZero: true,
                  stacked: false,
                  type: 'linear'
                }
              }
            }
          });
        }
      }, {
        key: "removeTable",
        value: function removeTable() {
          var element = document.getElementById("graph_table");
          element.innerHTML = '';
        }
      }, {
        key: "removeChart",
        value: function removeChart() {
          var element = document.getElementById("graph_chart");
          element.innerHTML = '';
        }
      }]);
      return Graphic;
    }();
    exports.Graphic = Graphic;
    //# sourceMappingURL=graphic.js.map
  }
});
//# sourceMappingURL=graphic.js.map