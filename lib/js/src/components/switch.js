// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_undefined = require("bs-platform/lib/js/js_undefined.js");
var ReactNative = require("react-native");
var Props$BsReactNative = require("../private/props.js");
var UtilsRN$BsReactNative = require("../private/utilsRN.js");

function make(disabled, onTintColor, onValueChange, thumbTintColor, tintColor, value, accessibilityLabel, accessible, hitSlop, onAccessibilityTap, onLayout, onMagicTap, responderHandlers, pointerEvents, removeClippedSubviews, style, testID, accessibilityComponentType, accessibilityLiveRegion, collapsable, importantForAccessibility, needsOffscreenAlphaCompositing, renderToHardwareTextureAndroid, accessibilityTraits, accessibilityViewIsModal, shouldRasterizeIOS) {
  var partial_arg = Props$BsReactNative.extendView(accessibilityLabel, accessible, hitSlop, onAccessibilityTap, onLayout, onMagicTap, responderHandlers, pointerEvents, removeClippedSubviews, style, testID, accessibilityComponentType, accessibilityLiveRegion, collapsable, importantForAccessibility, needsOffscreenAlphaCompositing, renderToHardwareTextureAndroid, accessibilityTraits, accessibilityViewIsModal, shouldRasterizeIOS, {
        value: Js_undefined.fromOption(UtilsRN$BsReactNative.optBoolToOptJsBoolean(value)),
        disabled: Js_undefined.fromOption(UtilsRN$BsReactNative.optBoolToOptJsBoolean(disabled)),
        onValueChange: Js_undefined.fromOption(onValueChange),
        onTintColor: Js_undefined.fromOption(onTintColor),
        thumbTintColor: Js_undefined.fromOption(thumbTintColor),
        tintColor: Js_undefined.fromOption(tintColor)
      });
  var partial_arg$1 = ReactNative.Switch;
  return (function (param) {
      return ReasonReact.wrapJsForReason(partial_arg$1, partial_arg, param);
    });
}

exports.make = make;
/* ReasonReact Not a pure module */
