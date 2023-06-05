"use strict";

Liferay.Loader.define("chart-1@1.0.0/index", ['module', 'exports', 'require', './graphic'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = main;
    var _graphic = require("./graphic");
    // import * as data from './mono_var.json';
    /**
     * This is the main entry point of the portlet.
     *
     * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
     * information on the signature of this function.
     *
     * @param  {Object} params a hash with values of interest to the portlet
     * @return {void}
     */
    function main(_ref) {
      var portletNamespace = _ref.portletNamespace,
          contextPath = _ref.contextPath,
          portletElementId = _ref.portletElementId,
          configuration = _ref.configuration;
      // console.log('liferay->',Liferay.ThemeDisplay.getPathContext());
      // console.log('attri->',Liferay.Util.getAttributes());
      // console.log('portlet->',Liferay.Portlet);
      console.log(id);
      buttonPass = document.getElementById("buttonPass");
      buttonPass.addEventListener("click", function () {
        console.log('Dispatch');
      });
      var node = document.getElementById(portletElementId);
      node.innerHTML = "\n    <div id=\"graph_container\">\n        <div id=\"graph_table\" class=\"table\"></div>\n        <button id=\"but_pie\" class=\"graphic_btn\"></button>\n        <canvas id=\"graph_chart\"></canvas>\n    </div>\n    <div>\n        <span class=\"tag\">Portlet Namespace:</span>\n        <span class=\"value\">".concat(portletNamespace, "</span>\n    </div>\n    <div>\n        <span class=\"tag\">Context Path:</span>\n        <span class=\"value\">").concat(contextPath, "</span>\n    </div>\n    <div>AB</div>\n    <div>\n        <span class=\"tag\">Portlet Element Id:</span>\n        <span class=\"value\">").concat(portletElementId, "</span>\n    </div>\n\n    <div>\n        <span class=\"tag\">Configuration:</span>\n        <span class=\"value pre\">").concat(JSON.stringify(configuration, null, 2), "</span>\n    </div>\n    ");
      // new Graphic(data.default, 2776)

      var call = {
        type: '',
        details: {}
      };
      //const url_basse = 'https://webserver-cis-dev.lfr.cloud/o/cis';
      // Basic Y3VzdG9tZXI6eUkyc0ZxRnh0UkxKNVZOUWVYRnpmMXA4R1dNTDZZ

      call.type = 'PREGUNTA';
      call.details = {
        'id_cuestionario': 3400,
        'id_pregunta': 406338,
        // ?
        'id_variable': 36501,
        'id_muestra': 6994,
        'id_cruce1': 36505
        // 'id_cruce2': 36506
      };


      new _graphic.Graphic('http://77.227.0.28:8180/cis/apijds', call.type, call.details, null);
    }
    //# sourceMappingURL=index.js.map
  }
});
//# sourceMappingURL=index.js.map