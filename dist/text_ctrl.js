'use strict';

System.register(['app/plugins/sdk', 'lodash', './css/text-panel.css!'], function (_export, _context) {
  "use strict";

  var PanelCtrl, _, _createClass, panelDefaults, TextCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      PanelCtrl = _appPluginsSdk.PanelCtrl;
    }, function (_lodash) {
      _ = _lodash.default;
    }, function (_cssTextPanelCss) {}],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      panelDefaults = {
        mode: 'markdown', // 'html', 'markdown', 'text'
        content: '# title'
      };

      _export('TextCtrl', TextCtrl = function (_PanelCtrl) {
        _inherits(TextCtrl, _PanelCtrl);

        function TextCtrl($scope, $injector) {
          _classCallCheck(this, TextCtrl);

          var _this = _possibleConstructorReturn(this, (TextCtrl.__proto__ || Object.getPrototypeOf(TextCtrl)).call(this, $scope, $injector));

          _.defaultsDeep(_this.panel, panelDefaults);
          // this.content = '';
          // this.datashow = '';
          _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_this));
          _this.events.on('panel-initialized', _this.render.bind(_this));
          // this.events.on('render', this.onRender.bind(this));

          return _this;
        }

        // onRender() {
        //   // this.datashow = this.content;

        //   this.renderingCompleted();
        // }


        _createClass(TextCtrl, [{
          key: 'onInitEditMode',
          value: function onInitEditMode() {
            this.addEditorTab('Options', 'public/plugins/demo-text-panel/editor.html', 1);
          }
        }, {
          key: 'link',
          value: function link(scope, elem) {
            this.events.on('render', function () {});
          }
        }]);

        return TextCtrl;
      }(PanelCtrl));

      _export('TextCtrl', TextCtrl);

      TextCtrl.templateUrl = 'module.html';
    }
  };
});
//# sourceMappingURL=text_ctrl.js.map
