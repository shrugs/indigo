(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define("index", ["exports"], factory)
    : ((global = global || self), factory((global.index = {})));
})(this, function(exports) {
  "use strict";

  function createCommonjsModule(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    );
  }

  /*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        "Object.assign cannot be called with null or undefined"
      );
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String("abc"); // eslint-disable-line no-new-wrappers
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (
        Object.keys(Object.assign({}, test3)).join("") !==
        "abcdefghijklmnopqrst"
      ) {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative()
    ? Object.assign
    : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };

  function aa(a, b, e, c, d, g, h, f) {
    if (!a) {
      a = void 0;
      if (void 0 === b)
        a = Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var l = [e, c, d, g, h, f],
          m = 0;
        a = Error(
          b.replace(/%s/g, function() {
            return l[m++];
          })
        );
        a.name = "Invariant Violation";
      }
      a.framesToPop = 1;
      throw a;
    }
  }
  function D(a) {
    for (
      var b = arguments.length - 1,
        e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a,
        c = 0;
      c < b;
      c++
    )
      e += "&args[]=" + encodeURIComponent(arguments[c + 1]);
    aa(
      !1,
      "Minified React error #" +
        a +
        "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",
      e
    );
  }
  var E = {
      isMounted: function() {
        return !1;
      },
      enqueueForceUpdate: function() {},
      enqueueReplaceState: function() {},
      enqueueSetState: function() {}
    },
    F = {};
  function G(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = F;
    this.updater = e || E;
  }
  G.prototype.isReactComponent = {};
  G.prototype.setState = function(a, b) {
    "object" !== typeof a && "function" !== typeof a && null != a
      ? D("85")
      : void 0;
    this.updater.enqueueSetState(this, a, b, "setState");
  };
  G.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function H() {}
  H.prototype = G.prototype;
  function I(a, b, e) {
    this.props = a;
    this.context = b;
    this.refs = F;
    this.updater = e || E;
  }
  var J = (I.prototype = new H());
  J.constructor = I;
  objectAssign(J, G.prototype);
  J.isPureReactComponent = !0;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};

    printWarning = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack
  ) {
    {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") +
                  ": " +
                  location +
                  " type `" +
                  typeSpecName +
                  "` is invalid; " +
                  "it must be a function, usually from the `prop-types` package, but received `" +
                  typeof typeSpecs[typeSpecName] +
                  "`."
              );
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret$1
            );
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") +
                ": type specification of " +
                location +
                " `" +
                typeSpecName +
                "` is invalid; the type checker " +
                "function must return `null` or an `Error` but returned a " +
                typeof error +
                ". " +
                "You may have forgotten to pass an argument to the type checker " +
                "creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and " +
                "shape all require an argument)."
            );
          }
          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : "";

            printWarning(
              "Failed " +
                location +
                " type: " +
                error.message +
                (stack != null ? stack : "")
            );
          }
        }
      }
    }
  }

  var checkPropTypes_1 = checkPropTypes;

  var react_development = createCommonjsModule(function(module) {
    {
      (function() {
        var _assign = objectAssign;
        var checkPropTypes = checkPropTypes_1;

        // TODO: this is special because it gets imported during build.

        var ReactVersion = "16.7.0";

        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === "function" && Symbol.for;

        var REACT_ELEMENT_TYPE = hasSymbol
          ? Symbol.for("react.element")
          : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol
          ? Symbol.for("react.fragment")
          : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol
          ? Symbol.for("react.strict_mode")
          : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol
          ? Symbol.for("react.profiler")
          : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol
          ? Symbol.for("react.provider")
          : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol
          ? Symbol.for("react.context")
          : 0xeace;

        var REACT_CONCURRENT_MODE_TYPE = hasSymbol
          ? Symbol.for("react.concurrent_mode")
          : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol
          ? Symbol.for("react.forward_ref")
          : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol
          ? Symbol.for("react.suspense")
          : 0xead1;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 0xead4;

        var MAYBE_ITERATOR_SYMBOL =
          typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";

        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator =
            (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
            maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }

        /**
         * Use invariant() to assert state which your program assumes to be true.
         *
         * Provide sprintf-style format (only %s is supported) and arguments
         * to provide information about what broke and what you were
         * expecting.
         *
         * The invariant message will be stripped in production, but the invariant
         * will remain to ensure logic does not differ in production.
         */

        var validateFormat = function() {};

        {
          validateFormat = function(format) {
            if (format === undefined) {
              throw new Error("invariant requires an error message argument");
            }
          };
        }

        function invariant(condition, format, a, b, c, d, e, f) {
          validateFormat(format);

          if (!condition) {
            var error = void 0;
            if (format === undefined) {
              error = new Error(
                "Minified exception occurred; use the non-minified dev environment " +
                  "for the full error message and additional helpful warnings."
              );
            } else {
              var args = [a, b, c, d, e, f];
              var argIndex = 0;
              error = new Error(
                format.replace(/%s/g, function() {
                  return args[argIndex++];
                })
              );
              error.name = "Invariant Violation";
            }

            error.framesToPop = 1; // we don't care about invariant's own frame
            throw error;
          }
        }

        // Relying on the `invariant()` implementation lets us
        // preserve the format and params in the www builds.

        /**
         * Forked from fbjs/warning:
         * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
         *
         * Only change is we use console.warn instead of console.error,
         * and do nothing when 'console' is not supported.
         * This really simplifies the code.
         * ---
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var lowPriorityWarning = function() {};

        {
          var printWarning = function(format) {
            for (
              var _len = arguments.length,
                args = Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key];
            }

            var argIndex = 0;
            var message =
              "Warning: " +
              format.replace(/%s/g, function() {
                return args[argIndex++];
              });
            if (typeof console !== "undefined") {
              console.warn(message);
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              throw new Error(message);
            } catch (x) {}
          };

          lowPriorityWarning = function(condition, format) {
            if (format === undefined) {
              throw new Error(
                "`lowPriorityWarning(condition, format, ...args)` requires a warning " +
                  "message argument"
              );
            }
            if (!condition) {
              for (
                var _len2 = arguments.length,
                  args = Array(_len2 > 2 ? _len2 - 2 : 0),
                  _key2 = 2;
                _key2 < _len2;
                _key2++
              ) {
                args[_key2 - 2] = arguments[_key2];
              }

              printWarning.apply(undefined, [format].concat(args));
            }
          };
        }

        var lowPriorityWarning$1 = lowPriorityWarning;

        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var warningWithoutStack = function() {};

        {
          warningWithoutStack = function(condition, format) {
            for (
              var _len = arguments.length,
                args = Array(_len > 2 ? _len - 2 : 0),
                _key = 2;
              _key < _len;
              _key++
            ) {
              args[_key - 2] = arguments[_key];
            }

            if (format === undefined) {
              throw new Error(
                "`warningWithoutStack(condition, format, ...args)` requires a warning " +
                  "message argument"
              );
            }
            if (args.length > 8) {
              // Check before the condition to catch violations early.
              throw new Error(
                "warningWithoutStack() currently supports at most 8 arguments."
              );
            }
            if (condition) {
              return;
            }
            if (typeof console !== "undefined") {
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format);

              // We intentionally don't use spread (or .apply) directly because it
              // breaks IE9: https://github.com/facebook/react/issues/13610
              Function.prototype.apply.call(
                console.error,
                console,
                argsWithFormat
              );
            }
            try {
              // --- Welcome to debugging React ---
              // This error was thrown as a convenience so that you can use this stack
              // to find the callsite that caused this warning to fire.
              var argIndex = 0;
              var message =
                "Warning: " +
                format.replace(/%s/g, function() {
                  return args[argIndex++];
                });
              throw new Error(message);
            } catch (x) {}
          };
        }

        var warningWithoutStack$1 = warningWithoutStack;

        var didWarnStateUpdateForUnmountedComponent = {};

        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName =
              (_constructor &&
                (_constructor.displayName || _constructor.name)) ||
              "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            warningWithoutStack$1(
              false,
              "Can't call %s on a component that is not yet mounted. " +
                "This is a no-op, but it might indicate a bug in your application. " +
                "Instead, assign to `this.state` directly or define a `state = {};` " +
                "class property with the desired state in the %s component.",
              callerName,
              componentName
            );
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }

        /**
         * This is the abstract API for an update queue.
         */
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },

          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },

          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(
            publicInstance,
            completeState,
            callback,
            callerName
          ) {
            warnNoop(publicInstance, "replaceState");
          },

          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(
            publicInstance,
            partialState,
            callback,
            callerName
          ) {
            warnNoop(publicInstance, "setState");
          }
        };

        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }

        /**
         * Base class helpers for the updating state of a component.
         */
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          // If a component has string refs, we will assign a different object later.
          this.refs = emptyObject;
          // We initialize the default updater but the real one gets injected by the
          // renderer.
          this.updater = updater || ReactNoopUpdateQueue;
        }

        Component.prototype.isReactComponent = {};

        /**
         * Sets a subset of the state. Always use this to mutate
         * state. You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * There is no guarantee that calls to `setState` will run synchronously,
         * as they may eventually be batched together.  You can provide an optional
         * callback that will be executed when the call to setState is actually
         * completed.
         *
         * When a function is provided to setState, it will be called at some point in
         * the future (not synchronously). It will be called with the up to date
         * component arguments (state, props, context). These values can be different
         * from this.* because your function may be called after receiveProps but before
         * shouldComponentUpdate, and this new state, props, and context will not yet be
         * assigned to this.
         *
         * @param {object|function} partialState Next partial state or function to
         *        produce next partial state to be merged with current state.
         * @param {?function} callback Called after state is updated.
         * @final
         * @protected
         */
        Component.prototype.setState = function(partialState, callback) {
          !(
            typeof partialState === "object" ||
            typeof partialState === "function" ||
            partialState == null
          )
            ? invariant(
                false,
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              )
            : void 0;
          this.updater.enqueueSetState(
            this,
            partialState,
            callback,
            "setState"
          );
        };

        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {?function} callback Called after update is complete.
         * @final
         * @protected
         */
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };

        /**
         * Deprecated APIs. These APIs used to exist on classic React classes but since
         * we would like to deprecate them, we're not going to move them over to this
         * modern base class. Instead, we define a getter that warns if it's accessed.
         */
        {
          var deprecatedAPIs = {
            isMounted: [
              "isMounted",
              "Instead, make sure to clean up subscriptions and pending requests in " +
                "componentWillUnmount to prevent memory leaks."
            ],
            replaceState: [
              "replaceState",
              "Refactor your code to use setState instead (see " +
                "https://github.com/facebook/react/issues/3236)."
            ]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                lowPriorityWarning$1(
                  false,
                  "%s(...) is deprecated in plain JavaScript React classes. %s",
                  info[0],
                  info[1]
                );
                return undefined;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }

        function ComponentDummy() {}
        ComponentDummy.prototype = Component.prototype;

        /**
         * Convenience component with default shallow equality check for sCU.
         */
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          // If a component has string refs, we will assign a different object later.
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }

        var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
        pureComponentPrototype.constructor = PureComponent;
        // Avoid an extra prototype jump for these methods.
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;

        // an immutable object with a single mutable value
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }

        /**
         * Keeps track of the current owner.
         *
         * The current owner is the component who should own any components that are
         * currently being constructed.
         */
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null,
          currentDispatcher: null
        };

        var BEFORE_SLASH_RE = /^(.*)[\\\/]/;

        var describeComponentFrame = function(name, source, ownerName) {
          var sourceInfo = "";
          if (source) {
            var path = source.fileName;
            var fileName = path.replace(BEFORE_SLASH_RE, "");
            {
              // In DEV, include code for a common special case:
              // prefer "folder/index.js" instead of just "index.js".
              if (/^index\./.test(fileName)) {
                var match = path.match(BEFORE_SLASH_RE);
                if (match) {
                  var pathBeforeSlash = match[1];
                  if (pathBeforeSlash) {
                    var folderName = pathBeforeSlash.replace(
                      BEFORE_SLASH_RE,
                      ""
                    );
                    fileName = folderName + "/" + fileName;
                  }
                }
              }
            }
            sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
          } else if (ownerName) {
            sourceInfo = " (created by " + ownerName + ")";
          }
          return "\n    in " + (name || "Unknown") + sourceInfo;
        };

        var Resolved = 1;

        function refineResolvedLazyComponent(lazyComponent) {
          return lazyComponent._status === Resolved
            ? lazyComponent._result
            : null;
        }

        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return (
            outerType.displayName ||
            (functionName !== ""
              ? wrapperName + "(" + functionName + ")"
              : wrapperName)
          );
        }

        function getComponentName(type) {
          if (type == null) {
            // Host root, text node or just invalid type.
            return null;
          }
          {
            if (typeof type.tag === "number") {
              warningWithoutStack$1(
                false,
                "Received an unexpected object in getComponentName(). " +
                  "This is likely a bug in React. Please file an issue."
              );
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_CONCURRENT_MODE_TYPE:
              return "ConcurrentMode";
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                return "Context.Consumer";
              case REACT_PROVIDER_TYPE:
                return "Context.Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_LAZY_TYPE: {
                var thenable = type;
                var resolvedThenable = refineResolvedLazyComponent(thenable);
                if (resolvedThenable) {
                  return getComponentName(resolvedThenable);
                }
              }
            }
          }
          return null;
        }

        var ReactDebugCurrentFrame = {};

        var currentlyValidatingElement = null;

        function setCurrentlyValidatingElement(element) {
          {
            currentlyValidatingElement = element;
          }
        }

        {
          // Stack implementation injected by the current renderer.
          ReactDebugCurrentFrame.getCurrentStack = null;

          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";

            // Add an extra top frame while an element is being validated
            if (currentlyValidatingElement) {
              var name = getComponentName(currentlyValidatingElement.type);
              var owner = currentlyValidatingElement._owner;
              stack += describeComponentFrame(
                name,
                currentlyValidatingElement._source,
                owner && getComponentName(owner.type)
              );
            }

            // Delegate to the injected renderer-specific implementation
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }

            return stack;
          };
        }

        var ReactSharedInternals = {
          ReactCurrentOwner: ReactCurrentOwner,
          // Used by renderers to avoid bundling object-assign twice in UMD bundles:
          assign: _assign
        };

        {
          _assign(ReactSharedInternals, {
            // These should not be included in production.
            ReactDebugCurrentFrame: ReactDebugCurrentFrame,
            // Shim for React DOM 16.0.0 which still destructured (but not used) this.
            // TODO: remove in React 17.0.
            ReactComponentTreeHook: {}
          });
        }

        /**
         * Similar to invariant but only logs a warning if the condition is not met.
         * This can be used to log issues in development environments in critical
         * paths. Removing the logging code for production environments will keep the
         * same logic and follow the same code paths.
         */

        var warning = warningWithoutStack$1;

        {
          warning = function(condition, format) {
            if (condition) {
              return;
            }
            var ReactDebugCurrentFrame =
              ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            // eslint-disable-next-line react-internal/warning-and-invariant-args

            for (
              var _len = arguments.length,
                args = Array(_len > 2 ? _len - 2 : 0),
                _key = 2;
              _key < _len;
              _key++
            ) {
              args[_key - 2] = arguments[_key];
            }

            warningWithoutStack$1.apply(
              undefined,
              [false, format + "%s"].concat(args, [stack])
            );
          };
        }

        var warning$1 = warning;

        var hasOwnProperty = Object.prototype.hasOwnProperty;

        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };

        var specialPropKeyWarningShown = void 0;
        var specialPropRefWarningShown = void 0;

        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== undefined;
        }

        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== undefined;
        }

        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              warningWithoutStack$1(
                false,
                "%s: `key` is not a prop. Trying to access it will result " +
                  "in `undefined` being returned. If you need to access the same " +
                  "value within the child component, you should pass it as a different " +
                  "prop. (https://fb.me/react-special-props)",
                displayName
              );
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }

        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              warningWithoutStack$1(
                false,
                "%s: `ref` is not a prop. Trying to access it will result " +
                  "in `undefined` being returned. If you need to access the same " +
                  "value within the child component, you should pass it as a different " +
                  "prop. (https://fb.me/react-special-props)",
                displayName
              );
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }

        /**
         * Factory method to create a new React element. This no longer adheres to
         * the class pattern, so do not use new to call it. Also, no instanceof check
         * will work. Instead test $$typeof field against Symbol.for('react.element') to check
         * if something is a React Element.
         *
         * @param {*} type
         * @param {*} key
         * @param {string|object} ref
         * @param {*} self A *temporary* helper to detect places where `this` is
         * different from the `owner` when React.createElement is called, so that we
         * can warn. We want to get rid of owner and replace string `ref`s with arrow
         * functions, and as long as `this` and owner are the same, there will be no
         * change in behavior.
         * @param {*} source An annotation object (added by a transpiler or otherwise)
         * indicating filename, line number, and/or other information.
         * @param {*} owner
         * @param {*} props
         * @internal
         */
        var ReactElement = function(
          type,
          key,
          ref,
          self,
          source,
          owner,
          props
        ) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,

            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,

            // Record the component responsible for creating this element.
            _owner: owner
          };

          {
            // The validation flag is currently mutative. We put it on
            // an external backing store so that we can freeze the whole object.
            // This can be replaced with a WeakMap once they are implemented in
            // commonly used development environments.
            element._store = {};

            // To make comparing ReactElements easier for testing purposes, we make
            // the validation flag non-enumerable (where possible, which should
            // include every environment we run tests in), so the test framework
            // ignores it.
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            // self and source are DEV only properties.
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            // Two elements created in two different places should be considered
            // equal for testing purposes and therefore we hide it from enumeration.
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }

          return element;
        };

        /**
         * Create and return a new ReactElement of the given type.
         * See https://reactjs.org/docs/react-api.html#createelement
         */
        function createElement(type, config, children) {
          var propName = void 0;

          // Reserved names are extracted
          var props = {};

          var key = null;
          var ref = null;
          var self = null;
          var source = null;

          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }

            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source;
            // Remaining properties are added to a new props object
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                props[propName] = config[propName];
              }
            }
          }

          // Children can be more than one argument, and those are transferred onto
          // the newly allocated props object.
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }

          // Resolve default props
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === undefined) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName =
                typeof type === "function"
                  ? type.displayName || type.name || "Unknown"
                  : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(
            type,
            key,
            ref,
            self,
            source,
            ReactCurrentOwner.current,
            props
          );
        }

        /**
         * Return a function that produces ReactElements of a given type.
         * See https://reactjs.org/docs/react-api.html#createfactory
         */

        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(
            oldElement.type,
            newKey,
            oldElement.ref,
            oldElement._self,
            oldElement._source,
            oldElement._owner,
            oldElement.props
          );

          return newElement;
        }

        /**
         * Clone and return a new ReactElement using element as the starting point.
         * See https://reactjs.org/docs/react-api.html#cloneelement
         */
        function cloneElement(element, config, children) {
          !!(element === null || element === undefined)
            ? invariant(
                false,
                "React.cloneElement(...): The argument must be a React element, but you passed %s.",
                element
              )
            : void 0;

          var propName = void 0;

          // Original props are copied
          var props = _assign({}, element.props);

          // Reserved names are extracted
          var key = element.key;
          var ref = element.ref;
          // Self is preserved since the owner is preserved.
          var self = element._self;
          // Source is preserved since cloneElement is unlikely to be targeted by a
          // transpiler, and the original source is probably a better indicator of the
          // true owner.
          var source = element._source;

          // Owner will be preserved, unless ref is overridden
          var owner = element._owner;

          if (config != null) {
            if (hasValidRef(config)) {
              // Silently steal the ref from the parent.
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }

            // Remaining properties override existing props
            var defaultProps = void 0;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (
                hasOwnProperty.call(config, propName) &&
                !RESERVED_PROPS.hasOwnProperty(propName)
              ) {
                if (
                  config[propName] === undefined &&
                  defaultProps !== undefined
                ) {
                  // Resolve default props
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }

          // Children can be more than one argument, and those are transferred onto
          // the newly allocated props object.
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }

          return ReactElement(
            element.type,
            key,
            ref,
            self,
            source,
            owner,
            props
          );
        }

        /**
         * Verifies the object is a ReactElement.
         * See https://reactjs.org/docs/react-api.html#isvalidelement
         * @param {?object} object
         * @return {boolean} True if `object` is a ReactElement.
         * @final
         */
        function isValidElement(object) {
          return (
            typeof object === "object" &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          );
        }

        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";

        /**
         * Escape and wrap key so it is safe to use as a reactid
         *
         * @param {string} key to be escaped.
         * @return {string} the escaped key.
         */
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = ("" + key).replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });

          return "$" + escapedString;
        }

        /**
         * TODO: Test that a single child and an array with one item have the same key
         * pattern.
         */

        var didWarnAboutMaps = false;

        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
        }

        var POOL_SIZE = 10;
        var traverseContextPool = [];
        function getPooledTraverseContext(
          mapResult,
          keyPrefix,
          mapFunction,
          mapContext
        ) {
          if (traverseContextPool.length) {
            var traverseContext = traverseContextPool.pop();
            traverseContext.result = mapResult;
            traverseContext.keyPrefix = keyPrefix;
            traverseContext.func = mapFunction;
            traverseContext.context = mapContext;
            traverseContext.count = 0;
            return traverseContext;
          } else {
            return {
              result: mapResult,
              keyPrefix: keyPrefix,
              func: mapFunction,
              context: mapContext,
              count: 0
            };
          }
        }

        function releaseTraverseContext(traverseContext) {
          traverseContext.result = null;
          traverseContext.keyPrefix = null;
          traverseContext.func = null;
          traverseContext.context = null;
          traverseContext.count = 0;
          if (traverseContextPool.length < POOL_SIZE) {
            traverseContextPool.push(traverseContext);
          }
        }

        /**
         * @param {?*} children Children tree container.
         * @param {!string} nameSoFar Name of the key path so far.
         * @param {!function} callback Callback to invoke with each child found.
         * @param {?*} traverseContext Used to pass information throughout the traversal
         * process.
         * @return {!number} The number of children in this subtree.
         */
        function traverseAllChildrenImpl(
          children,
          nameSoFar,
          callback,
          traverseContext
        ) {
          var type = typeof children;

          if (type === "undefined" || type === "boolean") {
            // All of the above are perceived as null.
            children = null;
          }

          var invokeCallback = false;

          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }

          if (invokeCallback) {
            callback(
              traverseContext,
              children,
              // If it's the only child, treat the name as if it was wrapped in an array
              // so that it's consistent if the number of children grows.
              nameSoFar === ""
                ? SEPARATOR + getComponentKey(children, 0)
                : nameSoFar
            );
            return 1;
          }

          var child = void 0;
          var nextName = void 0;
          var subtreeCount = 0; // Count of children found in the current subtree.
          var nextNamePrefix =
            nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;

          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getComponentKey(child, i);
              subtreeCount += traverseAllChildrenImpl(
                child,
                nextName,
                callback,
                traverseContext
              );
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              {
                // Warn about using Maps as children
                if (iteratorFn === children.entries) {
                  !didWarnAboutMaps
                    ? warning$1(
                        false,
                        "Using Maps as children is unsupported and will likely yield " +
                          "unexpected results. Convert it to a sequence/iterable of keyed " +
                          "ReactElements instead."
                      )
                    : void 0;
                  didWarnAboutMaps = true;
                }
              }

              var iterator = iteratorFn.call(children);
              var step = void 0;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getComponentKey(child, ii++);
                subtreeCount += traverseAllChildrenImpl(
                  child,
                  nextName,
                  callback,
                  traverseContext
                );
              }
            } else if (type === "object") {
              var addendum = "";
              {
                addendum =
                  " If you meant to render a collection of children, use an array " +
                  "instead." +
                  ReactDebugCurrentFrame.getStackAddendum();
              }
              var childrenString = "" + children;
              invariant(
                false,
                "Objects are not valid as a React child (found: %s).%s",
                childrenString === "[object Object]"
                  ? "object with keys {" +
                      Object.keys(children).join(", ") +
                      "}"
                  : childrenString,
                addendum
              );
            }
          }

          return subtreeCount;
        }

        /**
         * Traverses children that are typically specified as `props.children`, but
         * might also be specified through attributes:
         *
         * - `traverseAllChildren(this.props.children, ...)`
         * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
         *
         * The `traverseContext` is an optional argument that is passed through the
         * entire traversal. It can be used to store accumulations or anything else that
         * the callback might find relevant.
         *
         * @param {?*} children Children tree object.
         * @param {!function} callback To invoke upon traversing each child.
         * @param {?*} traverseContext Context for traversal.
         * @return {!number} The number of children in this subtree.
         */
        function traverseAllChildren(children, callback, traverseContext) {
          if (children == null) {
            return 0;
          }

          return traverseAllChildrenImpl(
            children,
            "",
            callback,
            traverseContext
          );
        }

        /**
         * Generate a key string that identifies a component within a set.
         *
         * @param {*} component A component that could contain a manual key.
         * @param {number} index Index that is used if a manual key is not provided.
         * @return {string}
         */
        function getComponentKey(component, index) {
          // Do some typechecking here since we call this blindly. We want to ensure
          // that we don't block potential future ES APIs.
          if (
            typeof component === "object" &&
            component !== null &&
            component.key != null
          ) {
            // Explicit key
            return escape(component.key);
          }
          // Implicit key determined by the index in the set
          return index.toString(36);
        }

        function forEachSingleChild(bookKeeping, child, name) {
          var func = bookKeeping.func,
            context = bookKeeping.context;

          func.call(context, child, bookKeeping.count++);
        }

        /**
         * Iterates through children that are typically specified as `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
         *
         * The provided forEachFunc(child, index) will be called for each
         * leaf child.
         *
         * @param {?*} children Children tree container.
         * @param {function(*, int)} forEachFunc
         * @param {*} forEachContext Context for forEachContext.
         */
        function forEachChildren(children, forEachFunc, forEachContext) {
          if (children == null) {
            return children;
          }
          var traverseContext = getPooledTraverseContext(
            null,
            null,
            forEachFunc,
            forEachContext
          );
          traverseAllChildren(children, forEachSingleChild, traverseContext);
          releaseTraverseContext(traverseContext);
        }

        function mapSingleChildIntoContext(bookKeeping, child, childKey) {
          var result = bookKeeping.result,
            keyPrefix = bookKeeping.keyPrefix,
            func = bookKeeping.func,
            context = bookKeeping.context;

          var mappedChild = func.call(context, child, bookKeeping.count++);
          if (Array.isArray(mappedChild)) {
            mapIntoWithKeyPrefixInternal(
              mappedChild,
              result,
              childKey,
              function(c) {
                return c;
              }
            );
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              mappedChild = cloneAndReplaceKey(
                mappedChild,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                keyPrefix +
                  (mappedChild.key && (!child || child.key !== mappedChild.key)
                    ? escapeUserProvidedKey(mappedChild.key) + "/"
                    : "") +
                  childKey
              );
            }
            result.push(mappedChild);
          }
        }

        function mapIntoWithKeyPrefixInternal(
          children,
          array,
          prefix,
          func,
          context
        ) {
          var escapedPrefix = "";
          if (prefix != null) {
            escapedPrefix = escapeUserProvidedKey(prefix) + "/";
          }
          var traverseContext = getPooledTraverseContext(
            array,
            escapedPrefix,
            func,
            context
          );
          traverseAllChildren(
            children,
            mapSingleChildIntoContext,
            traverseContext
          );
          releaseTraverseContext(traverseContext);
        }

        /**
         * Maps children that are typically specified as `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenmap
         *
         * The provided mapFunction(child, key, index) will be called for each
         * leaf child.
         *
         * @param {?*} children Children tree container.
         * @param {function(*, int)} func The map function.
         * @param {*} context Context for mapFunction.
         * @return {object} Object containing the ordered map of results.
         */
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, func, context);
          return result;
        }

        /**
         * Count the number of children that are typically specified as
         * `props.children`.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrencount
         *
         * @param {?*} children Children tree container.
         * @return {number} The number of children.
         */
        function countChildren(children) {
          return traverseAllChildren(
            children,
            function() {
              return null;
            },
            null
          );
        }

        /**
         * Flatten a children object (typically specified as `props.children`) and
         * return an array with appropriately re-keyed children.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
         */
        function toArray(children) {
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, function(child) {
            return child;
          });
          return result;
        }

        /**
         * Returns the first child in a collection of children and verifies that there
         * is only one child in the collection.
         *
         * See https://reactjs.org/docs/react-api.html#reactchildrenonly
         *
         * The current implementation of this function assumes that a single child gets
         * passed without a wrapper, but the purpose of this helper function is to
         * abstract away the particular structure of children.
         *
         * @param {?object} children Child collection structure.
         * @return {ReactElement} The first and only `ReactElement` contained in the
         * structure.
         */
        function onlyChild(children) {
          !isValidElement(children)
            ? invariant(
                false,
                "React.Children.only expected to receive a single React element child."
              )
            : void 0;
          return children;
        }

        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === undefined) {
            calculateChangedBits = null;
          } else {
            {
              !(
                calculateChangedBits === null ||
                typeof calculateChangedBits === "function"
              )
                ? warningWithoutStack$1(
                    false,
                    "createContext: Expected the optional second argument to be a " +
                      "function. Instead received: %s",
                    calculateChangedBits
                  )
                : void 0;
            }
          }

          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null
          };

          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };

          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;

          {
            // A separate object, but proxies back to the original context object for
            // backwards compatibility. It has a different $$typeof, so we can properly
            // warn for the incorrect usage of Context as a Consumer.
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            };
            // $FlowFixMe: Flow complains about not setting a value, which is intentional here
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    warning$1(
                      false,
                      "Rendering <Context.Consumer.Provider> is not supported and will be removed in " +
                        "a future major release. Did you mean to render <Context.Provider> instead?"
                    );
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    warning$1(
                      false,
                      "Rendering <Context.Consumer.Consumer> is not supported and will be removed in " +
                        "a future major release. Did you mean to render <Context.Consumer> instead?"
                    );
                  }
                  return context.Consumer;
                }
              }
            });
            // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
            context.Consumer = Consumer;
          }

          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }

          return context;
        }

        function lazy(ctor) {
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _ctor: ctor,
            // React uses these fields to store the result.
            _status: -1,
            _result: null
          };

          {
            // In production, this would just set it on the object.
            var defaultProps = void 0;
            var propTypes = void 0;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  warning$1(
                    false,
                    "React.lazy(...): It is not supported to assign `defaultProps` to " +
                      "a lazy component import. Either specify them where the component " +
                      "is defined, or create a wrapping component around it."
                  );
                  defaultProps = newDefaultProps;
                  // Match production behavior more closely:
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  warning$1(
                    false,
                    "React.lazy(...): It is not supported to assign `propTypes` to " +
                      "a lazy component import. Either specify them where the component " +
                      "is defined, or create a wrapping component around it."
                  );
                  propTypes = newPropTypes;
                  // Match production behavior more closely:
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }

          return lazyType;
        }

        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              warningWithoutStack$1(
                false,
                "forwardRef requires a render function but received a `memo` " +
                  "component. Instead of forwardRef(memo(...)), use " +
                  "memo(forwardRef(...))."
              );
            } else if (typeof render !== "function") {
              warningWithoutStack$1(
                false,
                "forwardRef requires a render function but was given %s.",
                render === null ? "null" : typeof render
              );
            } else {
              !// Do not warn for 0 arguments because it could be due to usage of the 'arguments' object
              (render.length === 0 || render.length === 2)
                ? warningWithoutStack$1(
                    false,
                    "forwardRef render functions accept exactly two parameters: props and ref. %s",
                    render.length === 1
                      ? "Did you forget to use the ref parameter?"
                      : "Any additional parameter will be undefined."
                  )
                : void 0;
            }

            if (render != null) {
              !(render.defaultProps == null && render.propTypes == null)
                ? warningWithoutStack$1(
                    false,
                    "forwardRef render functions do not support propTypes or defaultProps. " +
                      "Did you accidentally pass a React component?"
                  )
                : void 0;
            }
          }

          return {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
          };
        }

        function isValidElementType(type) {
          return (
            typeof type === "string" ||
            typeof type === "function" ||
            // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_CONCURRENT_MODE_TYPE ||
            type === REACT_PROFILER_TYPE ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            (typeof type === "object" &&
              type !== null &&
              (type.$$typeof === REACT_LAZY_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE ||
                type.$$typeof === REACT_PROVIDER_TYPE ||
                type.$$typeof === REACT_CONTEXT_TYPE ||
                type.$$typeof === REACT_FORWARD_REF_TYPE))
          );
        }

        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              warningWithoutStack$1(
                false,
                "memo: The first argument must be a component. Instead " +
                  "received: %s",
                type === null ? "null" : typeof type
              );
            }
          }
          return {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
          };
        }

        /**
         * ReactElementValidator provides a wrapper around a element factory
         * which validates the props passed to the element. This is intended to be
         * used only in DEV and could be replaced by a static type checker for languages
         * that support it.
         */

        var propTypesMisspellWarningShown = void 0;

        {
          propTypesMisspellWarningShown = false;
        }

        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }

        function getSourceInfoErrorAddendum(elementProps) {
          if (
            elementProps !== null &&
            elementProps !== undefined &&
            elementProps.__source !== undefined
          ) {
            var source = elementProps.__source;
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return (
              "\n\nCheck your code at " + fileName + ":" + lineNumber + "."
            );
          }
          return "";
        }

        /**
         * Warn if there's no key explicitly set on dynamic arrays of children or
         * object keys are not valid. This allows us to keep track of children between
         * updates.
         */
        var ownerHasKeyUseWarning = {};

        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();

          if (!info) {
            var parentName =
              typeof parentType === "string"
                ? parentType
                : parentType.displayName || parentType.name;
            if (parentName) {
              info =
                "\n\nCheck the top-level render call using <" +
                parentName +
                ">.";
            }
          }
          return info;
        }

        /**
         * Warn if the element doesn't have an explicit key assigned to it.
         * This element is in an array. The array could grow and shrink or be
         * reordered. All children that haven't already been validated are required to
         * have a "key" property assigned to it. Error statuses are cached so a warning
         * will only be shown once.
         *
         * @internal
         * @param {ReactElement} element Element that requires a key.
         * @param {*} parentType element's parent's type.
         */
        function validateExplicitKey(element, parentType) {
          if (
            !element._store ||
            element._store.validated ||
            element.key != null
          ) {
            return;
          }
          element._store.validated = true;

          var currentComponentErrorInfo = getCurrentComponentErrorInfo(
            parentType
          );
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

          // Usually the current owner is the offender, but if it accepts children as a
          // property, it may be the creator of the child that's responsible for
          // assigning it a key.
          var childOwner = "";
          if (
            element &&
            element._owner &&
            element._owner !== ReactCurrentOwner.current
          ) {
            // Give the component that originally created this child.
            childOwner =
              " It was passed a child from " +
              getComponentName(element._owner.type) +
              ".";
          }

          setCurrentlyValidatingElement(element);
          {
            warning$1(
              false,
              'Each child in an array or iterator should have a unique "key" prop.' +
                "%s%s See https://fb.me/react-warning-keys for more information.",
              currentComponentErrorInfo,
              childOwner
            );
          }
          setCurrentlyValidatingElement(null);
        }

        /**
         * Ensure that every element either is passed in a static location, in an
         * array with an explicit keys property defined, or in an object literal
         * with valid key property.
         *
         * @internal
         * @param {ReactNode} node Statically passed child of any type.
         * @param {*} parentType node's parent's type.
         */
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            // This element was passed in a valid location.
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              // Entry iterators used to provide implicit keys,
              // but now we print a separate warning for them later.
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step = void 0;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }

        /**
         * Given an element, validate that its props follow the propTypes definition,
         * provided by the type.
         *
         * @param {ReactElement} element
         */
        function validatePropTypes(element) {
          var type = element.type;
          if (type === null || type === undefined || typeof type === "string") {
            return;
          }
          var name = getComponentName(type);
          var propTypes = void 0;
          if (typeof type === "function") {
            propTypes = type.propTypes;
          } else if (
            typeof type === "object" &&
            (type.$$typeof === REACT_FORWARD_REF_TYPE ||
              // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)
          ) {
            propTypes = type.propTypes;
          } else {
            return;
          }
          if (propTypes) {
            setCurrentlyValidatingElement(element);
            checkPropTypes(
              propTypes,
              element.props,
              "prop",
              name,
              ReactDebugCurrentFrame.getStackAddendum
            );
            setCurrentlyValidatingElement(null);
          } else if (
            type.PropTypes !== undefined &&
            !propTypesMisspellWarningShown
          ) {
            propTypesMisspellWarningShown = true;
            warningWithoutStack$1(
              false,
              "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
              name || "Unknown"
            );
          }
          if (typeof type.getDefaultProps === "function") {
            !type.getDefaultProps.isReactClassApproved
              ? warningWithoutStack$1(
                  false,
                  "getDefaultProps is only used on classic React.createClass " +
                    "definitions. Use a static property named `defaultProps` instead."
                )
              : void 0;
          }
        }

        /**
         * Given a fragment, validate that it can only be provided with fragment props
         * @param {ReactElement} fragment
         */
        function validateFragmentProps(fragment) {
          setCurrentlyValidatingElement(fragment);

          var keys = Object.keys(fragment.props);
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (key !== "children" && key !== "key") {
              warning$1(
                false,
                "Invalid prop `%s` supplied to `React.Fragment`. " +
                  "React.Fragment can only have `key` and `children` props.",
                key
              );
              break;
            }
          }

          if (fragment.ref !== null) {
            warning$1(
              false,
              "Invalid attribute `ref` supplied to `React.Fragment`."
            );
          }

          setCurrentlyValidatingElement(null);
        }

        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);

          // We warn in this case but don't throw. We expect the element creation to
          // succeed and there will likely be errors in render.
          if (!validType) {
            var info = "";
            if (
              type === undefined ||
              (typeof type === "object" &&
                type !== null &&
                Object.keys(type).length === 0)
            ) {
              info +=
                " You likely forgot to export your component from the file " +
                "it's defined in, or you might have mixed up default and named imports.";
            }

            var sourceInfo = getSourceInfoErrorAddendum(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }

            var typeString = void 0;
            if (type === null) {
              typeString = "null";
            } else if (Array.isArray(type)) {
              typeString = "array";
            } else if (
              type !== undefined &&
              type.$$typeof === REACT_ELEMENT_TYPE
            ) {
              typeString =
                "<" + (getComponentName(type.type) || "Unknown") + " />";
              info =
                " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }

            warning$1(
              false,
              "React.createElement: type is invalid -- expected a string (for " +
                "built-in components) or a class/function (for composite " +
                "components) but got: %s.%s",
              typeString,
              info
            );
          }

          var element = createElement.apply(this, arguments);

          // The result can be nullish if a mock or a custom function is used.
          // TODO: Drop this when these are no longer allowed as the type argument.
          if (element == null) {
            return element;
          }

          // Skip key warning if the type isn't valid since our key validation logic
          // doesn't expect a non-string/function type and can throw confusing errors.
          // We don't want exception behavior to differ between dev and prod.
          // (Rendering will throw with a helpful message and as soon as the type is
          // fixed, the key warnings will appear.)
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }

          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }

          return element;
        }

        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          // Legacy hook: remove it
          {
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                lowPriorityWarning$1(
                  false,
                  "Factory.type is deprecated. Access the class directly " +
                    "before passing it to createFactory."
                );
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }

          return validatedFactory;
        }

        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }

        var React = {
          Children: {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray: toArray,
            only: onlyChild
          },

          createRef: createRef,
          Component: Component,
          PureComponent: PureComponent,

          createContext: createContext,
          forwardRef: forwardRef,
          lazy: lazy,
          memo: memo,

          Fragment: REACT_FRAGMENT_TYPE,
          StrictMode: REACT_STRICT_MODE_TYPE,
          Suspense: REACT_SUSPENSE_TYPE,

          createElement: createElementWithValidation,
          cloneElement: cloneElementWithValidation,
          createFactory: createFactoryWithValidation,
          isValidElement: isValidElement,

          version: ReactVersion,

          unstable_ConcurrentMode: REACT_CONCURRENT_MODE_TYPE,
          unstable_Profiler: REACT_PROFILER_TYPE,

          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ReactSharedInternals
        };

        var React$2 = Object.freeze({
          default: React
        });

        var React$3 = (React$2 && React) || React$2;

        // TODO: decide on the top-level export form.
        // This is hacky but makes it work with both Rollup and Jest.
        var react = React$3.default || React$3;

        module.exports = react;
      })();
    }
  });

  var react = createCommonjsModule(function(module) {
    {
      module.exports = react_development;
    }
  });
  var react_1 = react.Component;

  var printWarning$1 = function() {};

  {
    printWarning$1 = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator"; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = "<<anonymous>>";

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = "";
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                "Use `PropTypes.checkPropTypes()` to call them. " +
                "Read more at http://fb.me/use-check-prop-types"
            );
            err.name = "Invariant Violation";
            throw err;
          } else if (typeof console !== "undefined") {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ":" + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                "You are manually calling a React.PropTypes validation " +
                  "function for the `" +
                  propFullName +
                  "` prop on `" +
                  componentName +
                  "`. This is deprecated " +
                  "and will throw in the standalone `prop-types` package. " +
                  "You may be seeing this warning due to a third-party PropTypes " +
                  "library. See https://fb.me/react-warning-dont-call-proptypes " +
                  "for details."
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                "The " +
                  location +
                  " `" +
                  propFullName +
                  "` is marked as required " +
                  ("in `" + componentName + "`, but its value is `null`.")
              );
            }
            return new PropTypeError(
              "The " +
                location +
                " `" +
                propFullName +
                "` is marked as required in " +
                ("`" + componentName + "`, but its value is `undefined`.")
            );
          }
          return null;
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName
          );
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                preciseType +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("`" + expectedType + "`.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside arrayOf."
          );
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an array.")
          );
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + "[" + i + "]",
            ReactPropTypesSecret_1
          );
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected a single ReactElement.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                actualClassName +
                "` supplied to `" +
                componentName +
                "`, expected ") +
              ("instance of `" + expectedClassName + "`.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        printWarning$1(
          "Invalid argument supplied to oneOf, expected an instance of array."
        );
        return emptyFunctionThatReturnsNull;
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` of value `" +
            propValue +
            "` " +
            ("supplied to `" +
              componentName +
              "`, expected one of " +
              valuesString +
              ".")
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError(
            "Property `" +
              propFullName +
              "` of component `" +
              componentName +
              "` has invalid PropType notation inside objectOf."
          );
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type " +
              ("`" +
                propType +
                "` supplied to `" +
                componentName +
                "`, expected an object.")
          );
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + "." + key,
              ReactPropTypesSecret_1
            );
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning$1(
          "Invalid argument supplied to oneOfType, expected an instance of array."
        );
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning$1(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but " +
              "received " +
              getPostfixForTypeWarning(checker) +
              " at index " +
              i +
              "."
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (
            checker(
              props,
              propName,
              componentName,
              location,
              propFullName,
              ReactPropTypesSecret_1
            ) == null
          ) {
            return null;
          }
        }

        return new PropTypeError(
          "Invalid " +
            location +
            " `" +
            propFullName +
            "` supplied to " +
            ("`" + componentName + "`.")
        );
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` supplied to " +
              ("`" + componentName + "`, expected a ReactNode.")
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`.")
          );
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret_1
          );
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError(
            "Invalid " +
              location +
              " `" +
              propFullName +
              "` of type `" +
              propType +
              "` " +
              ("supplied to `" + componentName + "`, expected `object`.")
          );
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              "Invalid " +
                location +
                " `" +
                propFullName +
                "` key `" +
                key +
                "` supplied to `" +
                componentName +
                "`." +
                "\nBad object: " +
                JSON.stringify(props[propName], null, "  ") +
                "\nValid keys: " +
                JSON.stringify(Object.keys(shapeTypes), null, "  ")
            );
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + "." + key,
            ReactPropTypesSecret_1
          );
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === "symbol") {
        return true;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
      }
      if (isSymbol(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case "array":
        case "object":
          return "an " + type;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function(module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      var REACT_ELEMENT_TYPE =
        (typeof Symbol === "function" &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        0xeac7;

      var isValidElement = function(object) {
        return (
          typeof object === "object" &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      };

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(
        isValidElement,
        throwOnDirectAccess
      );
    }
  });

  // React Utils
  const getDomProps = props =>
    Object.entries(props).reduce((acc, [k, v]) => {
      return k.match(/prop-/) ? { ...acc, [k]: v.toString() } : acc;
    }, {});

  const withProps = (children, props) => {
    return react.Children.map(children, c => {
      return react.cloneElement(c, props);
    });
  };

  // const childrenWithProps = React.Children.map(props.children, c => {
  //   console.log(state)
  //   const childProps = {
  //     ...state,
  //     // formState: state.formState,
  //     setValue: this.setValue,
  //     submitForm: props.submitForm,
  //     canSubmit: props.canSubmit,
  //     formName: props.name,
  //   }
  //
  //
  // });

  // Utils
  const defaultTo = (v, d) => (isUndefined(v) ? d : v);

  // FP
  const compose = (...fs) =>
    fs.reduceRight((f, g) => (...a) => g(f(...a)), v => v);

  // Boolean
  const isTrue = v => v === true;

  const isFalse = v => v === false;

  // Typechecks
  const isUndefined = v => v === undefined;

  const _jsxFileName =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/proto/ProtoButton.js";
  const ProtoButton = props => {
    return react.createElement(
      "button",
      {
        ...getDomProps(props),
        className: `${props.className}`,
        type: props.type,
        style: props.style,
        onClick: props.onClick,
        disabled: props.disabled,
        autoFocus: props.autoFocus,
        __self: undefined,
        __source: { fileName: _jsxFileName, lineNumber: 7 }
      },
      props.children
    );
  };

  ProtoButton.propTypes = {
    disabled: propTypes.bool,
    onClick: propTypes.func,
    className: propTypes.string,
    children: propTypes.node,
    autofocus: propTypes.bool,
    style: propTypes.object,
    type: propTypes.oneOf(["button", "submit", "reset"])
  };

  ProtoButton.defaultProps = {
    className: "",
    autoFocus: false,
    onClick: () => {},
    disabled: false,
    style: {},
    type: "button"
  };

  const _jsxFileName$1 =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/proto/ProtoAnchor.js";
  const ProtoAnchor = props => {
    return react.createElement(
      "a",
      {
        ...getDomProps(props),
        href: props.href,
        autoFocus: props.autoFocus,
        className: `block sans ${props.className}`,
        style: props.style,
        rel: props.rel,
        target: props.target,
        __self: undefined,
        __source: { fileName: _jsxFileName$1, lineNumber: 7 }
      },
      props.children
    );
  };

  ProtoAnchor.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    autoFocus: propTypes.bool,
    style: propTypes.object,
    href: propTypes.string,
    rel: propTypes.string,
    target: propTypes.oneOf(["_self", "_blank", "_parent", "_top"])
  };

  ProtoAnchor.defaultProps = {
    className: "",
    autoFocus: false,
    style: {},
    href: "",
    rel: "",
    target: "_self"
  };

  const _jsxFileName$2 =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/proto/ProtoInput.js";
  const ProtoInput = props => {
    return react.createElement("input", {
      // getDomProps gets any prop prepended with 'prop-'. Useful here because
      // one cannot simply pass props like {...props} because the input elem
      // cannot accept children nodes, which are included in the props arg. It
      // is doubly useful because it lets the developer control which props are
      // added to the real DOM.
      ...getDomProps(props),
      className: props.className,
      onChange: e => props.onChange(e),
      onKeyPress: e => props.onKeyPress(e),
      onFocus: e => props.onFocus(e),
      onBlur: e => props.onBlur(e),
      placeholder: props.placeholder,
      type: props.type,
      name: props.name,
      style: props.style,
      value: props.value,
      autoFocus: props.autoFocus,
      readOnly: props.readOnly,
      maxLength: props.maxLength,
      autoComplete: props.autoComplete,
      __self: undefined,
      __source: { fileName: _jsxFileName$2, lineNumber: 7 }
    });
  };

  ProtoInput.propTypes = {
    disabled: propTypes.bool,
    onChange: propTypes.func,
    onBlur: propTypes.func,
    onFocus: propTypes.func,
    onKeyPress: propTypes.func,
    className: propTypes.string,
    style: propTypes.object,
    children: propTypes.node,
    autoFocus: propTypes.bool,
    readOnly: propTypes.bool,
    name: propTypes.string,
    value: propTypes.string,
    autoComplete: propTypes.string,
    type: propTypes.string
  };

  ProtoInput.defaultProps = {
    disabled: false,
    autoFocus: false,
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    onKeyPress: () => {},
    style: {},
    className: "",
    value: "",
    name: "",
    autoComplete: "off",
    type: "input"
  };

  const _jsxFileName$3 =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/proto/ProtoTextarea.js";
  const ProtoTextarea = props => {
    return react.createElement("textarea", {
      // getDomProps gets any prop prepended with 'prop-'. Useful here because
      // one cannot simply pass props like {...props} because the input elem
      // cannot accept children nodes, which are included in the props arg. It
      // is doubly useful because it lets the developer control which props are
      // added to the real DOM.
      ...getDomProps(props),
      className: props.className,
      onChange: e => props.onChange(e),
      onKeyPress: e => props.onKeyPress(e),
      onFocus: e => props.onFocus(e),
      onBlur: e => props.onBlur(e),
      placeholder: props.placeholder,
      name: props.name,
      style: props.style,
      value: props.value,
      autoFocus: props.autoFocus,
      readOnly: props.readOnly,
      maxLength: props.maxLength,
      autoComplete: props.autoComplete,
      __self: undefined,
      __source: { fileName: _jsxFileName$3, lineNumber: 7 }
    });
  };

  ProtoTextarea.propTypes = {
    disabled: propTypes.bool,
    onChange: propTypes.func,
    onBlur: propTypes.func,
    onFocus: propTypes.func,
    onKeyPress: propTypes.func,
    className: propTypes.string,
    style: propTypes.object,
    children: propTypes.node,
    autoFocus: propTypes.bool,
    readOnly: propTypes.bool,
    name: propTypes.string,
    value: propTypes.string,
    autoComplete: propTypes.string
  };

  ProtoTextarea.defaultProps = {
    disabled: false,
    autoFocus: false,
    onChange: () => {},
    onBlur: () => {},
    onFocus: () => {},
    onKeyPress: () => {},
    style: {},
    className: "",
    value: "",
    name: "",
    autoComplete: "off"
  };

  const _jsxFileName$4 =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Button.js";

  const Button = props => {
    return react.createElement(
      ProtoButton,
      {
        ...props,
        className: `block sans ${props.className}`,
        __self: undefined,
        __source: { fileName: _jsxFileName$4, lineNumber: 8 }
      },
      props.children
    );
  };

  Button.propTypes = {
    "prop-color": propTypes.oneOf(["blue", "green", "yellow"]),
    "prop-size": propTypes.oneOf(["sm", "md", "lg", "xl"]),
    "prop-type": propTypes.oneOf(["solid", "link", "border"])
  };

  Button.defaultProps = {
    "prop-color": "blue",
    "prop-size": "md",
    "prop-type": "solid"
  };

  const _jsxFileName$5 =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/CheckboxButton.js";
  const CheckboxButton = props => {
    const onOff =
      props.state === true
        ? "cb-on br-blue bg-blue outline-blue"
        : "bg-transparent br-black outline-blue";

    const checkmarkState = props.state === true ? "o-100" : "o-0";

    const classes = props.disabled ? "br-gray-30 bg-gray-10" : onOff;

    return react.createElement(
      "div",
      {
        className: `flex items-center ${props.className}`,
        style: props.style,
        __self: undefined,
        __source: { fileName: _jsxFileName$5, lineNumber: 17 }
      },

      react.createElement(
        ProtoButton,
        {
          ...props,
          className: `s-7 p-0 o-blue mr-4 bs-solid bw-2 ${classes}`,
          __self: undefined,
          __source: { fileName: _jsxFileName$5, lineNumber: 21 }
        },

        react.createElement(
          "svg",
          {
            className: checkmarkState,
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            __self: undefined,
            __source: { fileName: _jsxFileName$5, lineNumber: 25 }
          },
          react.createElement("path", {
            d: "M2 3.55661V0H0V5.55661H12.4182V3.55661H2Z",
            transform: "translate(6, 13) rotate(-45)",
            fill: "white",
            __self: undefined,
            __source: { fileName: _jsxFileName$5, lineNumber: 32 }
          })
        )
      ),

      props.children
    );
  };

  CheckboxButton.propTypes = {
    state: propTypes.bool,
    className: propTypes.string
  };

  CheckboxButton.defaultProps = {
    state: false,
    className: ""
  };

  const _jsxFileName$6 =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Anchor.js";

  const Anchor = props => {
    return react.createElement(
      ProtoAnchor,
      {
        ...props,
        "prop-disabled": props["prop-disabled"].toString(),
        __self: undefined,
        __source: { fileName: _jsxFileName$6, lineNumber: 9 }
      },
      props.children
    );
  };

  Anchor.propTypes = {
    "prop-disabled": propTypes.bool,
    "prop-color": propTypes.oneOf(["black"]),
    "prop-size": propTypes.oneOf(["sm", "md", "lg", "xl"]),
    "prop-type": propTypes.oneOf(["solid", "link", "outline"])
  };

  Anchor.defaultProps = {
    "prop-disabled": false,
    "prop-color": "black",
    "prop-size": "md",
    "prop-type": "link"
  };

  const _jsxFileName$7 =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Form.js";

  class Form extends react.Component {
    constructor(props) {
      super(props);
      this.state = {
        didSubmit: false,
        formPending: false,
        formSuccess: false,
        canSubmit: false,
        formState: {},
        reports: {}
      };
      this.setValue = this.setValue.bind(this);
      this.getReport = this.getReport.bind(this);
    }

    setValue(k, v) {
      const { state } = this;
      this.setState({ formState: { ...state.formState, [k]: v } });
    }

    getReport(name, report) {
      console.log(name, report);
      const { state } = this;
      const canSubmit = Object.values(state.reports).every(
        r => r.pass === true
      );

      this.setState({
        reports: { [name]: report },
        canSubmit
      });
    }

    render() {
      const { state, props } = this;

      return react.createElement(
        "form",
        {
          className: `${props.className}`,
          style: props.style,
          __self: this,
          __source: { fileName: _jsxFileName$7, lineNumber: 45 }
        },
        withProps(props.children, {
          ...state,
          getReport: this.getReport,
          setValue: this.setValue,
          submitForm: props.submitForm,
          canSubmit: state.canSubmit,
          formName: props.name
        })
      );
    }
  }

  Form.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  Form.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$8 =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/FormSubmit.js";

  const FormSubmit = props => {
    return react.createElement(
      Button,
      {
        ...props,
        disabled: !props.canSubmit,
        onClick: () => props.submitForm({ [props.formName]: props.formState }),
        className: `block sans ${props.className}`,
        __self: undefined,
        __source: { fileName: _jsxFileName$8, lineNumber: 8 }
      },
      props.children
    );
  };

  const _jsxFileName$9 =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Input.js";
  const Input = props => {
    const _disabled = props.disabled === true ? "br-gray-30" : "";

    // This enables all children of this component to share the state of this
    // component.
    const childrenWithProps = react.Children.map(props.children, child => {
      const propsToPass = {
        displayPass: props.displayPass,
        displayFailure: props.displayFailure,
        focussed: props.focussed,
        beenFocussed: props.beenFocussed,
        error: props.error
      };
      return react.cloneElement(child, propsToPass);
    });

    const className = props.advanced
      ? `${props.valClassname} ${props.className}`
      : `br-gray-50 f-br-blue outline-blue ${props.className}`;

    return react.createElement(
      "div",
      {
        className: "relative",
        __self: undefined,
        __source: { fileName: _jsxFileName$9, lineNumber: 28 }
      },
      react.createElement(ProtoInput, {
        ...props,
        // prop-focussed={props.focussed.toString()}
        className: `p-3 b-2 b-solid flex ${_disabled} ${className}`,
        onChange: e => props.onChange(e.target.value),
        __self: undefined,
        __source: { fileName: _jsxFileName$9, lineNumber: 29 }
      }),
      props.displayFailure === true && props.advanced === true
        ? react.createElement(
            "div",
            {
              className: "yellow text-600 h-6 mt-1 fs-3",
              __self: undefined,
              __source: { fileName: _jsxFileName$9, lineNumber: 36 }
            },
            props.error
          )
        : react.createElement("div", {
            __self: undefined,
            __source: { fileName: _jsxFileName$9, lineNumber: 37 }
          }),

      childrenWithProps
    );
  };

  Input.propTypes = {
    focussed: propTypes.bool,
    beenFocussed: propTypes.bool,
    hasSubmitted: propTypes.bool,
    displayPass: propTypes.bool,
    displayFailure: propTypes.bool,
    advanced: propTypes.bool,
    error: propTypes.string,
    valClassname: propTypes.string,
    size: propTypes.oneOf(["s", "m", "l", "xl"])
  };

  Input.defaultProps = {
    focussed: false,
    beenFocussed: false,
    hasSubmitted: false,
    displayPass: false,
    displayFailure: false,
    advanced: false,
    error: "",
    size: "m",
    format: "normal"
  };

  const _jsxFileName$a =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/FormInput.js";
  const FormInput = props => {
    return react.createElement(Input, {
      onChange: e => props.setValue(props.name, e),
      value: props.formState[props.name],
      ...props,
      __self: undefined,
      __source: { fileName: _jsxFileName$a, lineNumber: 8 }
    });
  };

  const _jsxFileName$b =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Label.js";

  const Label = props => {
    return react.createElement(
      "div",
      {
        className: `mb-1 mt-8 fs-3 text-500 sans ${props.className}`,
        style: props.style,
        __self: undefined,
        __source: { fileName: _jsxFileName$b, lineNumber: 7 }
      },
      props.children
    );
  };

  Label.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  Label.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$c =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/InnerLabel.js";

  const InnerLabel = ({ children, className, style }) => {
    return react.createElement(
      "div",
      {
        className: `abs tl-0 pt-2 pl-4 fs-3 text-500 sans ${className}`,
        style: style,
        __self: undefined,
        __source: { fileName: _jsxFileName$c, lineNumber: 7 }
      },
      children
    );
  };

  InnerLabel.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  InnerLabel.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$d =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/InputCaption.js";

  const InputCaption = ({ children, className, style }) => {
    return react.createElement(
      "div",
      {
        className: `mb-2 mt-2 fs-3 text-400 sans gray-70 ${className}`,
        style: style,
        __self: undefined,
        __source: { fileName: _jsxFileName$d, lineNumber: 7 }
      },
      children
    );
  };

  InputCaption.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  InputCaption.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$e =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Textarea.js";
  const Textarea = props => {
    const _disabled = props.disabled === true ? "br-gray-30" : "";

    // This enables all children of this component to share the state of this
    // component.
    const childrenWithProps = react.Children.map(props.children, child => {
      const propsToPass = {
        displayPass: props.displayPass,
        displayFailure: props.displayFailure,
        focussed: props.focussed,
        beenFocussed: props.beenFocussed,
        error: props.error
      };
      return react.cloneElement(child, propsToPass);
    });

    const className = props.advanced
      ? `${props.valClassname} ${props.className}`
      : `br-gray-50 f-br-blue outline-blue ${props.className}`;

    return react.createElement(
      "div",
      {
        className: "relative",
        __self: undefined,
        __source: { fileName: _jsxFileName$e, lineNumber: 30 }
      },
      react.createElement(ProtoTextarea, {
        ...props,
        // prop-focussed={props.focussed.toString()}
        className: `p-3 b-2 b-solid flex ${_disabled} ${className}`,
        onChange: e => props.onChange(e.target.value),
        __self: undefined,
        __source: { fileName: _jsxFileName$e, lineNumber: 31 }
      }),
      props.displayFailure === true && props.advanced === true
        ? react.createElement(
            "div",
            {
              className: "yellow text-600 h-6 mt-1 fs-3 abs",
              __self: undefined,
              __source: { fileName: _jsxFileName$e, lineNumber: 38 }
            },
            props.error
          )
        : react.createElement("div", {
            __self: undefined,
            __source: { fileName: _jsxFileName$e, lineNumber: 39 }
          }),

      childrenWithProps
    );
  };

  Textarea.propTypes = {
    focussed: propTypes.bool,
    beenFocussed: propTypes.bool,
    hasSubmitted: propTypes.bool,
    displayPass: propTypes.bool,
    displayFailure: propTypes.bool,
    advanced: propTypes.bool,
    error: propTypes.string,
    valClassname: propTypes.string,
    size: propTypes.oneOf(["s", "m", "l", "xl"])
  };

  Textarea.defaultProps = {
    focussed: false,
    beenFocussed: false,
    hasSubmitted: false,
    displayPass: false,
    displayFailure: false,
    advanced: false,
    error: "",
    size: "m",
    format: "normal"
  };

  // import * as bip39 from 'bip39';
  // import * as ob from 'urbit-ob';

  // import { isValidAddress } from './wallet'

  // const hexRegExp = /[0-9A-Fa-f]{64}/g

  // // Note that this validator also transforms data
  // const validateBase64 = ({ data, pass, error }) => {
  //   if (pass !== true) return { data, pass, error }
  //
  //   try {
  //     atob(data);
  //     return { data: atob(data), pass: true, error: '' }
  //   } catch(e) {
  //     return { data: data, pass: false, error: 'File is not valid base64.' }
  //   }
  // };
  //
  // // Note that this validator also transforms data
  // const validateJSON = ({ data, pass, error }) => {
  //   if (pass !== true) return { data, pass, error }
  //
  //   try {
  //     JSON.parse(data)
  //     return { data: JSON.parse(data), pass: true, error: '' }
  //   } catch(e) {
  //     return { data: data, pass: false, error: 'File does not decode into valid JSON.' }
  //   }
  // };

  // Validates a bip39 mnemonic
  // const validateMnemonic = m => simpleValidatorWrapper({
  //   prevMessage: m,
  //   validator: d => bip39.validateMnemonic(d),
  //   errorMessage: 'This is not a valid mnemonic.'
  // });
  //
  //
  // Checks an empty field
  const validateNotEmpty = m =>
    simpleValidatorWrapper({
      prevMessage: m,
      validator: d => d.length > 0,
      errorMessage: "This field is required."
    });
  //
  //
  // const validateNetworkKey = m => simpleValidatorWrapper({
  //   prevMessage: m,
  //   validator: d => hexRegExp.test(d),
  //   errorMessage: 'This is not a valid network key'
  // });
  //
  //
  // const validateNetworkSeed = m => simpleValidatorWrapper({
  //   prevMessage: m,
  //   validator: d => hexRegExp.test(d),
  //   errorMessage: 'This is not a valid network seed'
  // });
  //
  //
  //
  // // Checks if a string is a valid ethereum address
  // const validateEthereumAddress = m => simpleValidatorWrapper({
  //   prevMessage: m,
  //   validator: d => isValidAddress(d),
  //   errorMessage: 'This is not a valid Ethereum address'
  // });

  // Wraps single validation functions in a controlled and predictable way.
  const simpleValidatorWrapper = config => {
    // If a previous validation has already failed, skip this validation and
    // return the prev message to the next stage in the validation function chain.
    // Failed validations should drop all the way down the chain and drop out of
    // the output.
    if (config.prevMessage.pass !== true) return config.prevMessage;

    // Run the validator and return the result.
    return config.validator(config.prevMessage.data)
      ? newMessage(config.prevMessage.data, true, "")
      : newMessage(config.prevMessage.data, false, config.errorMessage);
  };

  // Validation message
  // {
  //   data: ...
  //   pass: ...
  //   error: ...
  // }
  // Creates a new validation message in a uniform way.
  const newMessage = (data, pass, error) => ({
    // The input data
    data,
    // Has the data passed validation?
    pass,
    // If data has failed a validator, the error message goes here.
    error
  });

  // import { fill } from './lib'

  const _jsxFileName$f =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/hoc/advancedInput.js";
  // =============================================================================
  // Utils

  const initMessage = data => ({
    data: data,
    pass: true,
    error: ""
  });

  // Validation display triggers
  const displayTriggers = {
    eagerSuccess: r => isTrue(r.pass),
    eagerFailure: r => isFalse(r.pass),
    tactfulSuccess: r => isTrue(r.pass) && isTrue(r.beenFocussed),
    tactfulFailure: r =>
      isFalse(r.pass) && isTrue(r.beenFocussed) && isFalse(r.focussed)
  };

  // =============================================================================
  // AdvancedInput

  const advancedInput = ({ WrappedComponent, validators, transformers }) => {
    // set argument defaults
    validators = defaultTo(validators, []);
    transformers = defaultTo(transformers, []);

    class AdvancedInputHOC extends react_1 {
      constructor(props) {
        super(props);
        AdvancedInputHOC.prototype.__init.call(this);
        AdvancedInputHOC.prototype.__init2.call(this);
        AdvancedInputHOC.prototype.__init3.call(this);
        this.state = {
          report: initMessage(""),
          displayPass: false,
          displayFailure: false,
          valClassname: styleSelector(false, false),
          focussed: false,
          beenFocussed: false
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
      }

      __init() {
        this.onFocus = () => this.setState({ focussed: true });
      }

      __init2() {
        this.onBlur = () =>
          this.setState({ focussed: false, beenFocussed: true });
      }

      __init3() {
        this.onChange = value => {
          const { props, state } = this;

          // =======================================================================
          // 0. RUN VALUE TRANSFORMERS

          // This applies functions to the input value and updates state with the
          // new value. This is useful for ship/point names which technically
          // should always have a sig prepending them, but users might not know/care
          // about such a technicality. ValueTransformers are executed from right to
          // left.
          const newValue = compose(...transformers)(value);

          // Run validation chain on the transformed value. Validators are executed
          // from right to left and exit on the first validation failure.
          const report = compose(
            ...validators,
            initMessage
          )(newValue);

          // Makes a uniform data structure to pass to display triggers. This
          // removes the need to rely on argument order for these functions.
          const stateReport = {
            pass: report.pass,
            beenFocussed: state.beenFocussed,
            focussed: state.focussed,
            submitted: props.submitted
          };

          // Determine if the passing validation style or message should be shown
          const displayPass = displayTriggers.eagerSuccess(stateReport);

          // Determine if the failing validation style or message should be shown
          const displayFailure = displayTriggers.tactfulFailure(stateReport);

          const valClassname = styleSelector(displayPass, displayFailure);

          this.setState({
            report,
            displayPass,
            displayFailure,
            valClassname
          });

          props.getReport(props.name, report);
          props.onChange(newValue);
        };
      }

      render() {
        const { state, props } = this;

        // =======================================================================
        // RUN VALIDATORS AND DETERMINE STYLES

        // Run validation chain on the transformed value. Validators are executed
        // from right to left and exit on the first validation failure.
        // const report = compose(...validators, initMessage)(props.value)
        //
        // console.log('render Report: ', report.data)

        // // Makes a uniform data structure to pass to display triggers. This
        // // removes the need to rely on argument order for these functions.
        // const stateReport = {
        //   pass:         report.pass,
        //   beenFocussed: state.beenFocussed,
        //   focussed:     state.focussed,
        //   submitted:    props.submitted,
        // }
        //
        // // Determine if the passing validation style or message should be shown
        // const displayPass = displayTriggers.eagerSuccess(stateReport);
        //
        // // Determine if the failing validation style or message should be shown
        // const displayFailure = displayTriggers.tactfulFailure(stateReport);
        //
        // // Generate class strings for validation state. VCN stands for validation
        // // class names
        // const valClassname = styleSelector(
        //   displayPass,
        //   displayFailure
        // );

        return react.createElement(WrappedComponent, {
          ...props,
          // Events
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onChange: this.onChange,

          // stateReport
          focussed: state.focussed,
          beenFocussed: state.beenFocussed,
          displayPass: state.displayPass,
          displayFailure: state.displayFailure,
          // 'error' prop refers to an error message string, not the presence
          // of an error.
          error: state.report.error,
          didPass: state.report.pass,
          value: props.value,
          className: props.className,
          valClassname: state.valClassname,
          advanced: true,
          __self: this,
          __source: { fileName: _jsxFileName$f, lineNumber: 141 }
        });
      }
    }

    AdvancedInputHOC.propTypes = {
      className: propTypes.string,
      style: propTypes.object,
      value: propTypes.string,
      submitted: propTypes.bool
    };

    AdvancedInputHOC.defaultProps = {
      className: "",
      style: {},
      value: "",
      submitted: false
    };

    return AdvancedInputHOC;
    // END advancedInput()
  };

  const styleSelector = (pass, fail) => {
    if (fail === true)
      return "br-yellow outline-yellow f-br-yellow bg-yellow-light";
    if (pass === true) return "br-green outline-green f-br-green";
    return "br-gray-50 f-br-blue outline-blue";
  };

  // Helpers

  // HOC validated form components
  const RequiredInput = advancedInput({
    WrappedComponent: Input,
    validators: [validateNotEmpty]
  });

  const _jsxFileName$g =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/hoc/formInput.js";
  const formInput = InputComponent => {
    const formInputHOC = props => {
      return react.createElement(InputComponent, {
        ...props,
        onChange: e => props.setValue(props.name, e),
        value: props.formState[props.name],
        __self: undefined,
        __source: { fileName: _jsxFileName$g, lineNumber: 7 }
      });
    };
    return formInputHOC;
  };

  const _jsxFileName$h =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/DropdownItem.js";

  const DropdownItem = props => {
    const _disabled = props.disabled
      ? "gray-50"
      : "h-br-blue br-gray-50 h-bg-blue h-white";

    return react.createElement(
      "button",
      {
        disabled: props.disabled,
        style: props.style,
        className: `h-10 m-0 p-0 ph-2 bg-white flex items-start bs-solid brw-2 blw-2 btw-0 bbw-0 sans ${_disabled} ${
          props.className
        }`,
        onClick: props.onClick,
        __self: undefined,
        __source: { fileName: _jsxFileName$h, lineNumber: 12 }
      },
      props.children
    );
  };

  DropdownItem.propTypes = {
    disabled: propTypes.bool,
    onClick: propTypes.func,
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  DropdownItem.defaultProps = {
    className: "",
    onClick: () => {},
    disabled: false,
    style: {}
  };

  const _jsxFileName$i =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/DropdownDivider.js";

  const DropdownDivider = props => {
    return react.createElement(
      "div",
      {
        className: `br-gray-50 bs-solid bw-0-2-0-2 ${props.className}`,
        style: props.style,
        __self: undefined,
        __source: { fileName: _jsxFileName$i, lineNumber: 7 }
      },
      react.createElement("div", {
        className: `block bs-solid bw-2-0-0-0 br-gray-30 mv-2`,
        __self: undefined,
        __source: { fileName: _jsxFileName$i, lineNumber: 8 }
      })
    );
  };

  DropdownDivider.propTypes = {
    className: propTypes.string,
    style: propTypes.object
  };

  DropdownDivider.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$j =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/InnerLabelDropdown.js";

  const InnerLabelDropdown = props => {
    const menuVisibility = props.isOpen === true ? "visible" : "hidden";

    const selectedClasses = props.isOpen === true ? "br-blue" : "br-gray-50";

    return react.createElement(
      "div",
      {
        className: "rel table",
        __self: undefined,
        __source: { fileName: _jsxFileName$j, lineNumber: 16 }
      },
      react.createElement("div", {
        className: `fix full o-0 ${menuVisibility}`,
        onClick: props.handleClose,
        __self: undefined,
        __source: { fileName: _jsxFileName$j, lineNumber: 17 }
      }),

      react.createElement(
        "button",
        {
          className: `h-10 mp-0 bg-white outline-blue sans ${props.className}`,
          onClick: props.handleToggle,
          disabled: props.disabled,
          __self: undefined,
          __source: { fileName: _jsxFileName$j, lineNumber: 22 }
        },
        react.createElement(
          "div",
          {
            className: "flex",
            __self: undefined,
            __source: { fileName: _jsxFileName$j, lineNumber: 26 }
          },
          react.createElement(
            "div",
            {
              className: `ph-4 flex-center-all b-2 br-0 b-solid h-10 ${selectedClasses}`,
              __self: undefined,
              __source: { fileName: _jsxFileName$j, lineNumber: 27 }
            },
            react.createElement(
              "div",
              {
                className: "text-400 mr-2",
                __self: undefined,
                __source: { fileName: _jsxFileName$j, lineNumber: 28 }
              },
              props.title
            ),
            react.createElement(
              "div",
              {
                className: "text-600",
                __self: undefined,
                __source: { fileName: _jsxFileName$j, lineNumber: 29 }
              },
              props.currentSelectionTitle
            )
          ),
          react.createElement(
            "div",
            {
              className: "white bg-blue s-10 flex-center-all text-sm",
              __self: undefined,
              __source: { fileName: _jsxFileName$j, lineNumber: 31 }
            },
            "▼"
          )
        )
      ),

      react.createElement(
        "div",
        {
          className: `abs flex-column bg-white t-12 l-0 w-100 ${menuVisibility}`,
          __self: undefined,
          __source: { fileName: _jsxFileName$j, lineNumber: 35 }
        },
        react.createElement("div", {
          className: "pv-1 b-solid b-gray-50 b-2 bb-0",
          __self: undefined,
          __source: { fileName: _jsxFileName$j, lineNumber: 36 }
        }),

        props.children,

        react.createElement("div", {
          className: "pv-1 b-solid b-gray-50 b-2 bt-0",
          __self: undefined,
          __source: { fileName: _jsxFileName$j, lineNumber: 40 }
        })
      )
    );
  };

  InnerLabelDropdown.propTypes = {
    disabled: propTypes.bool,
    isOpen: propTypes.bool,
    handleToggle: propTypes.func,
    handleClose: propTypes.func,
    className: propTypes.string,
    title: propTypes.string,
    children: propTypes.node,
    style: propTypes.object,
    currentSelectionTitle: propTypes.string
  };

  InnerLabelDropdown.defaultProps = {
    isOpen: false,
    className: "",
    title: "",
    currentSelectionTitle: "",
    handleToggle: () => {},
    handleClose: () => {},
    disabled: false,
    style: {}
  };

  const _jsxFileName$k =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Container.js";

  const Container = ({ className, children, style }) => {
    return react.createElement(
      "main",
      {
        className: `container ${className}`,
        style: style,
        __self: undefined,
        __source: { fileName: _jsxFileName$k, lineNumber: 11 }
      },
      children
    );
  };

  Container.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  Container.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$l =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Col.js";

  const Col = props => {
    return react.createElement(
      "div",
      {
        className: `col- ${props.className}`,
        style: props.style,
        __self: undefined,
        __source: { fileName: _jsxFileName$l, lineNumber: 7 }
      },
      props.children
    );
  };

  Col.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  Col.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$m =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Row.js";
  const Row = props => {
    return react.createElement(
      "div",
      {
        className: `row ${props.className}`,
        style: props.style,
        __self: undefined,
        __source: { fileName: _jsxFileName$m, lineNumber: 6 }
      },
      props.children
    );
  };

  Row.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  Row.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$n =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/RowCol.js";
  const RowCol = props => {
    return react.createElement(
      Row,
      {
        className: props.rowClassName,
        style: props.style,
        __self: undefined,
        __source: { fileName: _jsxFileName$n, lineNumber: 9 }
      },
      react.createElement(
        Col,
        {
          className: props.colClassName,
          __self: undefined,
          __source: { fileName: _jsxFileName$n, lineNumber: 10 }
        },
        props.children
      )
    );
  };

  RowCol.propTypes = {
    colClassName: propTypes.string,
    rowClassName: propTypes.string,
    style: propTypes.object,
    children: propTypes.node
  };

  RowCol.defaultProps = {
    colClassName: "",
    rowClassName: "",
    style: {},
    children: undefined
  };

  const _jsxFileName$o =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/H1.js";
  const H1 = ({ className, children, style }) => {
    return react.createElement(
      "h1",
      {
        className: `mt-12 pt-6 mb-4 text-700 measure-md ${className}`,
        style: style,
        __self: undefined,
        __source: { fileName: _jsxFileName$o, lineNumber: 7 }
      },
      children
    );
  };

  H1.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  H1.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$p =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/H2.js";
  const H2 = ({ className, children, style }) => {
    return react.createElement(
      "h2",
      {
        className: `mt-8 pt-3 mb-4 measure-md ${className}`,
        style: style,
        __self: undefined,
        __source: { fileName: _jsxFileName$p, lineNumber: 6 }
      },
      children
    );
  };

  H2.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  H2.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$q =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/H3.js";
  const H3 = ({ className, children, style }) => {
    return react.createElement(
      "h3",
      {
        className: `mt-8 pt-3 mb-4 measure-md ${className}`,
        style: style,
        __self: undefined,
        __source: { fileName: _jsxFileName$q, lineNumber: 6 }
      },
      children
    );
  };

  H3.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  H3.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$r =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/H4.js";
  const H4 = ({ className, children, style }) => {
    return react.createElement(
      "h4",
      {
        className: `mt-2 pt-1 mb-2 measure-md sans ${className}`,
        style: style,
        __self: undefined,
        __source: { fileName: _jsxFileName$r, lineNumber: 6 }
      },
      children
    );
  };

  H4.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  H4.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$s =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/P.js";
  const P = props => {
    const measure = getMeasure(manifest, props.measure);

    return react.createElement(
      "p",
      {
        className: `mb-7 ${measure} ${props.className}`,
        style: props.style,
        __self: undefined,
        __source: { fileName: _jsxFileName$s, lineNumber: 9 }
      },
      props.children
    );
  };

  const getMeasure = (sm, m) => sm[m];

  const manifest = {
    sm: "measure-sm",
    md: "measure-md",
    lg: "measure-lg"
  };

  P.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  P.defaultProps = {
    className: "",
    style: {},
    measure: "md"
  };

  const _jsxFileName$t =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Code.js";
  const Code = ({ className, children, style, measure }) => {
    // const s = getStyles(styleManifest, measure)

    return react.createElement(
      "pre",
      {
        className: `flex ${className}`,
        style: style,
        __self: undefined,
        __source: { fileName: _jsxFileName$t, lineNumber: 9 }
      },
      children
    );
  };

  // const getStyles = (sm, m) => sm[m];
  //
  // const styleManifest = {
  //   sm: 'measure-sm',
  //   md: 'measure-md',
  //   lg: 'measure-lg',
  // }

  Code.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  Code.defaultProps = {
    className: "",
    style: {},
    measure: "md"
  };

  const _jsxFileName$u =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/component/Warning.js";
  const Warning = ({ className, children, style, measure }) => {
    return react.createElement(
      "div",
      {
        className: `mb-7 p-4 bg-yellow ${className}`,
        style: style,
        __self: undefined,
        __source: { fileName: _jsxFileName$u, lineNumber: 8 }
      },
      children
    );
  };

  Warning.propTypes = {
    className: propTypes.string,
    children: propTypes.node,
    style: propTypes.object
  };

  Warning.defaultProps = {
    className: "",
    style: {}
  };

  const _jsxFileName$v =
    "/Users/jimmy/Documents/GitHub/indigo/indigo/react/src/icon/Chevron.js";
  const Chevron = props => {
    return react.createElement("img", {
      src: `data:image/svg+xml;utf8,<svg width="11" height="24" viewBox="0 0 11 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 12L10.387 12.3166L10.646 12L10.387 11.6833L10 12ZM0.613022 1.31662L9.61302 12.3166L10.387 11.6833L1.38698 0.68338L0.613022 1.31662ZM9.61302 11.6833L0.613021 22.6834L1.38698 23.3166L10.387 12.3166L9.61302 11.6833Z" stroke="${
        props.color
      }" stroke-width="${props.strokeWidth}" fill="${props.color}"/></svg>`,
      alt: "",
      style: props.style,
      className: props.className,
      __self: undefined,
      __source: { fileName: _jsxFileName$v, lineNumber: 6 }
    });
  };

  Chevron.propTypes = {
    style: propTypes.object,
    className: propTypes.string,
    color: propTypes.string,
    strokeWidth: propTypes.string
  };

  Chevron.defaultProps = {
    style: {},
    className: "",
    color: "black",
    strokeWidth: "1px"
  };

  // Proto Elements

  const FormRequiredInput = formInput(RequiredInput);

  exports.Anchor = Anchor;
  exports.Button = Button;
  exports.CheckboxButton = CheckboxButton;
  exports.Chevron = Chevron;
  exports.Code = Code;
  exports.Col = Col;
  exports.Container = Container;
  exports.DropdownDivider = DropdownDivider;
  exports.DropdownItem = DropdownItem;
  exports.Form = Form;
  exports.FormInput = FormInput;
  exports.FormRequiredInput = FormRequiredInput;
  exports.FormSubmit = FormSubmit;
  exports.H1 = H1;
  exports.H2 = H2;
  exports.H3 = H3;
  exports.H4 = H4;
  exports.InnerLabel = InnerLabel;
  exports.InnerLabelDropdown = InnerLabelDropdown;
  exports.Input = Input;
  exports.InputCaption = InputCaption;
  exports.Label = Label;
  exports.P = P;
  exports.ProtoAnchor = ProtoAnchor;
  exports.ProtoButton = ProtoButton;
  exports.ProtoInput = ProtoInput;
  exports.ProtoTextarea = ProtoTextarea;
  exports.RequiredInput = RequiredInput;
  exports.Row = Row;
  exports.RowCol = RowCol;
  exports.Textarea = Textarea;
  exports.Warning = Warning;
  exports.advancedInput = advancedInput;

  Object.defineProperty(exports, "__esModule", { value: true });
});
