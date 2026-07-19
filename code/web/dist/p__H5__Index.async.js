(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [7],
  {
    '6MrE': function(e, t, n) {
      e.exports = {
        'ant-tag': 'ant-tag',
        'anticon-close': 'anticon-close',
        'ant-tag-has-color': 'ant-tag-has-color',
        'ant-tag-checkable': 'ant-tag-checkable',
        'ant-tag-checkable-checked': 'ant-tag-checkable-checked',
        'ant-tag-hidden': 'ant-tag-hidden',
        'ant-tag-pink': 'ant-tag-pink',
        'ant-tag-pink-inverse': 'ant-tag-pink-inverse',
        'ant-tag-magenta': 'ant-tag-magenta',
        'ant-tag-magenta-inverse': 'ant-tag-magenta-inverse',
        'ant-tag-red': 'ant-tag-red',
        'ant-tag-red-inverse': 'ant-tag-red-inverse',
        'ant-tag-volcano': 'ant-tag-volcano',
        'ant-tag-volcano-inverse': 'ant-tag-volcano-inverse',
        'ant-tag-orange': 'ant-tag-orange',
        'ant-tag-orange-inverse': 'ant-tag-orange-inverse',
        'ant-tag-yellow': 'ant-tag-yellow',
        'ant-tag-yellow-inverse': 'ant-tag-yellow-inverse',
        'ant-tag-gold': 'ant-tag-gold',
        'ant-tag-gold-inverse': 'ant-tag-gold-inverse',
        'ant-tag-cyan': 'ant-tag-cyan',
        'ant-tag-cyan-inverse': 'ant-tag-cyan-inverse',
        'ant-tag-lime': 'ant-tag-lime',
        'ant-tag-lime-inverse': 'ant-tag-lime-inverse',
        'ant-tag-green': 'ant-tag-green',
        'ant-tag-green-inverse': 'ant-tag-green-inverse',
        'ant-tag-blue': 'ant-tag-blue',
        'ant-tag-blue-inverse': 'ant-tag-blue-inverse',
        'ant-tag-geekblue': 'ant-tag-geekblue',
        'ant-tag-geekblue-inverse': 'ant-tag-geekblue-inverse',
        'ant-tag-purple': 'ant-tag-purple',
        'ant-tag-purple-inverse': 'ant-tag-purple-inverse',
      };
    },
    vTnR: function(e, t, n) {
      'use strict';
      n.r(t);
      n('g9YV');
      var a = n('wCAj'),
        r = (n('14J3'), n('BMrR')),
        o = (n('jCWc'), n('kPKH')),
        i = (n('+L6B'), n('2/Rp')),
        c = (n('y8nQ'), n('Vl3Y')),
        l = (n('5NDa'), n('5rEg')),
        s = (n('sPJy'), n('bE4q')),
        u = (n('/zsF'), n('PArb')),
        p = (n('Q9mQ'), n('q1tI')),
        f = n.n(p),
        d = n('3S7+'),
        g = n('H84U'),
        y = n('6CfX');
      function h(e) {
        '@babel/helpers - typeof';
        return (
          (h =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          h(e)
        );
      }
      function m() {
        return (
          (m =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          m.apply(this, arguments)
        );
      }
      function v(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function b(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function O(e, t, n) {
        return t && b(e.prototype, t), n && b(e, n), e;
      }
      function k(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && C(e, t);
      }
      function C(e, t) {
        return (
          (C =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          C(e, t)
        );
      }
      function E(e) {
        var t = P();
        return function() {
          var n,
            a = S(e);
          if (t) {
            var r = S(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return w(this, n);
        };
      }
      function w(e, t) {
        return !t || ('object' !== h(t) && 'function' !== typeof t) ? j(e) : t;
      }
      function j(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function P() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function S(e) {
        return (
          (S = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          S(e)
        );
      }
      var x = function(e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        _ = (function(e) {
          k(n, e);
          var t = E(n);
          function n() {
            var e;
            return (
              v(this, n),
              (e = t.apply(this, arguments)),
              (e.saveTooltip = function(t) {
                e.tooltip = t;
              }),
              (e.renderPopover = function(t) {
                var n = t.getPrefixCls,
                  a = e.props,
                  r = a.prefixCls,
                  o = x(a, ['prefixCls']);
                delete o.title;
                var i = n('popover', r);
                return p['createElement'](
                  d['a'],
                  m({}, o, { prefixCls: i, ref: e.saveTooltip, overlay: e.getOverlay(i) })
                );
              }),
              e
            );
          }
          return (
            O(n, [
              {
                key: 'getPopupDomNode',
                value: function() {
                  return this.tooltip.getPopupDomNode();
                },
              },
              {
                key: 'getOverlay',
                value: function(e) {
                  var t = this.props,
                    n = t.title,
                    a = t.content;
                  return (
                    Object(y['a'])(
                      !('overlay' in this.props),
                      'Popover',
                      '`overlay` is removed, please use `content` instead, see: https://u.ant.design/popover-content'
                    ),
                    p['createElement'](
                      'div',
                      null,
                      n && p['createElement']('div', { className: ''.concat(e, '-title') }, n),
                      p['createElement']('div', { className: ''.concat(e, '-inner-content') }, a)
                    )
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  return p['createElement'](g['a'], null, this.renderPopover);
                },
              },
            ]),
            n
          );
        })(p['Component']);
      _.defaultProps = {
        placement: 'top',
        transitionName: 'zoom-big',
        trigger: 'hover',
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        overlayStyle: {},
      };
      n('cIOH'), n('6MrE');
      var T = n('eHJ2'),
        R = n.n(T),
        I = n('BGR+'),
        L = n('VCL8'),
        N = n('CtXQ');
      function D(e) {
        '@babel/helpers - typeof';
        return (
          (D =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          D(e)
        );
      }
      function H() {
        return (
          (H =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          H.apply(this, arguments)
        );
      }
      function F(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function M(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function V(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function J(e, t, n) {
        return t && V(e.prototype, t), n && V(e, n), e;
      }
      function B(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Q(e, t);
      }
      function Q(e, t) {
        return (
          (Q =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          Q(e, t)
        );
      }
      function q(e) {
        var t = K();
        return function() {
          var n,
            a = X(e);
          if (t) {
            var r = X(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return z(this, n);
        };
      }
      function z(e, t) {
        return !t || ('object' !== D(t) && 'function' !== typeof t) ? A(e) : t;
      }
      function A(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function K() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function X(e) {
        return (
          (X = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          X(e)
        );
      }
      var W = function(e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        Y = (function(e) {
          B(n, e);
          var t = q(n);
          function n() {
            var e;
            return (
              M(this, n),
              (e = t.apply(this, arguments)),
              (e.handleClick = function() {
                var t = e.props,
                  n = t.checked,
                  a = t.onChange;
                a && a(!n);
              }),
              (e.renderCheckableTag = function(t) {
                var n,
                  a = t.getPrefixCls,
                  r = e.props,
                  o = r.prefixCls,
                  i = r.className,
                  c = r.checked,
                  l = W(r, ['prefixCls', 'className', 'checked']),
                  s = a('tag', o),
                  u = R()(
                    s,
                    ((n = {}),
                    F(n, ''.concat(s, '-checkable'), !0),
                    F(n, ''.concat(s, '-checkable-checked'), c),
                    n),
                    i
                  );
                return (
                  delete l.onChange,
                  p['createElement']('span', H({}, l, { className: u, onClick: e.handleClick }))
                );
              }),
              e
            );
          }
          return (
            J(n, [
              {
                key: 'render',
                value: function() {
                  return p['createElement'](g['a'], null, this.renderCheckableTag);
                },
              },
            ]),
            n
          );
        })(p['Component']),
        G = n('CWQg'),
        U = Object(G['a'])(
          'pink',
          'red',
          'yellow',
          'orange',
          'cyan',
          'green',
          'blue',
          'purple',
          'geekblue',
          'magenta',
          'volcano',
          'gold',
          'lime'
        ),
        Z = n('g0mS');
      function $(e) {
        '@babel/helpers - typeof';
        return (
          ($ =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          $(e)
        );
      }
      function ee(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function te() {
        return (
          (te =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              }
              return e;
            }),
          te.apply(this, arguments)
        );
      }
      function ne(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function ae(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      function re(e, t, n) {
        return t && ae(e.prototype, t), n && ae(e, n), e;
      }
      function oe(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && ie(e, t);
      }
      function ie(e, t) {
        return (
          (ie =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          ie(e, t)
        );
      }
      function ce(e) {
        var t = ue();
        return function() {
          var n,
            a = pe(e);
          if (t) {
            var r = pe(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return le(this, n);
        };
      }
      function le(e, t) {
        return !t || ('object' !== $(t) && 'function' !== typeof t) ? se(e) : t;
      }
      function se(e) {
        if (void 0 === e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function ue() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function pe(e) {
        return (
          (pe = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          pe(e)
        );
      }
      var fe = function(e, t) {
          var n = {};
          for (var a in e)
            Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                (n[a[r]] = e[a[r]]);
          }
          return n;
        },
        de = new RegExp('^('.concat(U.join('|'), ')(-inverse)?$')),
        ge = (function(e) {
          oe(n, e);
          var t = ce(n);
          function n(e) {
            var a;
            return (
              ne(this, n),
              (a = t.call(this, e)),
              (a.state = { visible: !0 }),
              (a.handleIconClick = function(e) {
                e.stopPropagation(), a.setVisible(!1, e);
              }),
              (a.renderTag = function(e) {
                var t = a.props,
                  n = t.children,
                  r = fe(t, ['children']),
                  o = 'onClick' in r || (n && 'a' === n.type),
                  i = Object(I['a'])(r, [
                    'onClose',
                    'afterClose',
                    'color',
                    'visible',
                    'closable',
                    'prefixCls',
                  ]);
                return o
                  ? p['createElement'](
                      Z['a'],
                      null,
                      p['createElement'](
                        'span',
                        te({}, i, { className: a.getTagClassName(e), style: a.getTagStyle() }),
                        n,
                        a.renderCloseIcon()
                      )
                    )
                  : p['createElement'](
                      'span',
                      te({}, i, { className: a.getTagClassName(e), style: a.getTagStyle() }),
                      n,
                      a.renderCloseIcon()
                    );
              }),
              Object(y['a'])(
                !('afterClose' in e),
                'Tag',
                "'afterClose' will be deprecated, please use 'onClose', we will remove this in the next version."
              ),
              a
            );
          }
          return (
            re(
              n,
              [
                {
                  key: 'getTagStyle',
                  value: function() {
                    var e = this.props,
                      t = e.color,
                      n = e.style,
                      a = this.isPresetColor();
                    return te({ backgroundColor: t && !a ? t : void 0 }, n);
                  },
                },
                {
                  key: 'getTagClassName',
                  value: function(e) {
                    var t,
                      n = e.getPrefixCls,
                      a = this.props,
                      r = a.prefixCls,
                      o = a.className,
                      i = a.color,
                      c = this.state.visible,
                      l = this.isPresetColor(),
                      s = n('tag', r);
                    return R()(
                      s,
                      ((t = {}),
                      ee(t, ''.concat(s, '-').concat(i), l),
                      ee(t, ''.concat(s, '-has-color'), i && !l),
                      ee(t, ''.concat(s, '-hidden'), !c),
                      t),
                      o
                    );
                  },
                },
                {
                  key: 'setVisible',
                  value: function(e, t) {
                    var n = this.props,
                      a = n.onClose,
                      r = n.afterClose;
                    a && a(t),
                      r && !a && r(),
                      t.defaultPrevented ||
                        'visible' in this.props ||
                        this.setState({ visible: e });
                  },
                },
                {
                  key: 'isPresetColor',
                  value: function() {
                    var e = this.props.color;
                    return !!e && de.test(e);
                  },
                },
                {
                  key: 'renderCloseIcon',
                  value: function() {
                    var e = this.props.closable;
                    return e
                      ? p['createElement'](N['a'], { type: 'close', onClick: this.handleIconClick })
                      : null;
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    return p['createElement'](g['a'], null, this.renderTag);
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e) {
                    return 'visible' in e ? { visible: e.visible } : null;
                  },
                },
              ]
            ),
            n
          );
        })(p['Component']);
      (ge.CheckableTag = Y), (ge.defaultProps = { closable: !1 }), Object(L['polyfill'])(ge);
      var ye,
        he,
        me = ge,
        ve = (n('P2fV'), n('NJEC')),
        be = n('p0pE'),
        Oe = n.n(be),
        ke = n('2Taf'),
        Ce = n.n(ke),
        Ee = n('vZ4D'),
        we = n.n(Ee),
        je = n('l4Ni'),
        Pe = n.n(je),
        Se = n('ujKo'),
        xe = n.n(Se),
        _e = n('MhPg'),
        Te = n.n(_e),
        Re = (n('2qtc'), n('kLXV')),
        Ie = n('MuoO'),
        Le = n('7DNP'),
        Ne = n('KHju');
      function De(e, t, n) {
        return (
          (t = xe()(t)),
          Pe()(e, He() ? Reflect.construct(t, n || [], xe()(e).constructor) : t.apply(e, n))
        );
      }
      function He() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        } catch (e) {}
        return (He = function() {
          return !!e;
        })();
      }
      var Fe = Re['a'].confirm,
        Me =
          ((ye = Object(Ie['connect'])(function(e) {
            var t = e.api,
              n = e.loading;
            return { api: t, _loading: n.effects['api/getH5List'] };
          })),
          ye(
            (he = (function(e) {
              function t() {
                var e;
                Ce()(this, t);
                for (var n = arguments.length, a = new Array(n), r = 0; r < n; r++)
                  a[r] = arguments[r];
                return (
                  (e = De(this, t, [].concat(a))),
                  (e.state = {
                    params: { page: 1, page_rows: 10, search: '' },
                    visible: !1,
                    data: {},
                  }),
                  (e.handleTableChange = function(t) {
                    e.setState(
                      {
                        params: Oe()({}, e.state.params, {
                          page: t.current,
                          page_rows: t.pageSize,
                        }),
                      },
                      function() {
                        e.fetch(e.state.params);
                      }
                    );
                  }),
                  (e.showEditModel = function(t, n, a, r) {
                    e.setState(
                      { visible: !0, data: { id: t, title: n, desc: a, auth_code: r } },
                      function() {}
                    );
                  }),
                  (e.showConfirm = function(t) {
                    var n = e;
                    Fe({
                      title: '\u4f60\u786e\u5b9a\u8981\u5220\u9664\u8be5\u9879\u76ee\u5417?',
                      content:
                        '\u6ce8\u610f\uff1a\u70b9\u51fb\u786e\u8ba4\uff0c\u5c06\u5220\u9664\u8be5\u9879\u76ee\uff0c\u4ee5\u53ca\u8be5\u9879\u76ee\u7684\u9879\u76ee\u53d1\u5e03\u7248\u672c',
                      okText: '\u786e\u5b9a',
                      cancelText: '\u53d6\u6d88',
                      onOk: function() {
                        return new Promise(function(e, a) {
                          var r = n.props.dispatch;
                          r({ type: 'api/delProject', payload: { project_id: t } }).then(
                            function() {
                              n.setState(
                                { params: Oe()({}, n.state.params, { page: 1 }) },
                                function() {
                                  n.fetch(n.state.params),
                                    setTimeout(Math.random() > 0.5 ? e : a, 1e3);
                                }
                              );
                            }
                          );
                        }).catch(function() {
                          return console.log('Oops errors!');
                        });
                      },
                      onCancel: function() {},
                    });
                  }),
                  (e.onEditFormFieldChange = function(t) {
                    switch (t.target.name) {
                      case 'title':
                        e.setState({ data: Oe()({}, e.state.data, { title: t.target.value }) });
                        break;
                      case 'desc':
                        e.setState({ data: Oe()({}, e.state.data, { desc: t.target.value }) });
                        break;
                      case 'auth_code':
                        e.setState({ data: Oe()({}, e.state.data, { auth_code: t.target.value }) });
                        break;
                    }
                  }),
                  (e.handleEditOk = function() {
                    e.setState({ confirmLoading: !0 }, function() {
                      Object(Ne['a'])('/api/editH5List', e.state.data).then(function(t) {
                        e.setState({ confirmLoading: !1 }),
                          200 === t.code &&
                            e.setState(
                              { visible: !1, params: Oe()({}, e.state.params, { page: 1 }) },
                              function() {
                                e.fetch(e.state.params);
                              }
                            );
                      });
                    });
                  }),
                  e
                );
              }
              return (
                Te()(t, e),
                we()(t, [
                  {
                    key: 'componentDidMount',
                    value: function() {
                      this.fetch(this.state.params);
                    },
                  },
                  {
                    key: 'fetch',
                    value: function(e) {
                      var t = this.props.dispatch;
                      t({ type: 'api/getH5List', payload: e });
                    },
                  },
                  {
                    key: 'render',
                    value: function() {
                      var e = this,
                        t = [
                          {
                            title: '\u9879\u76ee\u6807\u8bc6',
                            dataIndex: 'code',
                            key: 'code',
                            render: function(t, n) {
                              return f.a.createElement(
                                'span',
                                null,
                                f.a.createElement(
                                  ve['a'],
                                  {
                                    title:
                                      '\u786e\u5b9a\u8981\u5237\u65b0\u9879\u76ee\u6807\u8bc6\u5417\uff1f',
                                    onConfirm: function() {
                                      Object(Ne['a'])('/api/refreshProjectCode', { id: n.id }).then(
                                        function(t) {
                                          200 === t.code && e.fetch(e.state.params);
                                        }
                                      );
                                    },
                                    okText: '\u786e\u5b9a',
                                    cancelText: '\u53d6\u6d88',
                                  },
                                  f.a.createElement(
                                    'a',
                                    { style: { marginRight: 2 } },
                                    '\ud83d\udd04'
                                  )
                                ),
                                t
                              );
                            },
                          },
                          {
                            title: '\u9879\u76ee\u540d\u79f0',
                            dataIndex: 'title',
                            render: function(e, t) {
                              return f.a.createElement(
                                'div',
                                null,
                                f.a.createElement(me, null, t.version_count),
                                f.a.createElement(
                                  Le['Link'],
                                  { to: '/h5/index/version/'.concat(t.id) },
                                  e
                                )
                              );
                            },
                          },
                          {
                            title: '\u9879\u76ee\u7b80\u4ecb',
                            dataIndex: 'desc',
                            key: 'desc',
                            render: function(e) {
                              return f.a.createElement(
                                'div',
                                null,
                                f.a.createElement(_, { content: e }, e.substr(0, 150))
                              );
                            },
                          },
                          { title: '\u6388\u6743\u7801', dataIndex: 'auth_code', key: 'auth_code' },
                          { title: '\u521b\u5efa\u4eba', dataIndex: 'appid', key: 'appid' },
                          {
                            title: '\u521b\u5efa\u65f6\u95f4',
                            dataIndex: 'create_time',
                            key: 'create_time',
                          },
                          {
                            title: '\u64cd\u4f5c',
                            key: 'action',
                            render: function(t, n) {
                              return f.a.createElement(
                                'span',
                                null,
                                f.a.createElement(
                                  'a',
                                  {
                                    onClick: function() {
                                      e.showEditModel(n.id, n.title, n.desc, n.auth_code);
                                    },
                                  },
                                  '\u7f16\u8f91'
                                ),
                                f.a.createElement(u['a'], { type: 'vertical' }),
                                f.a.createElement(
                                  'a',
                                  {
                                    style: { color: 'red' },
                                    onClick: function() {
                                      e.showConfirm(n.id);
                                    },
                                  },
                                  '\u5220\u9664'
                                )
                              );
                            },
                          },
                        ],
                        n = this.props,
                        p = n._loading,
                        d = n.api,
                        g = {
                          current: d.getH5List.page,
                          total: d.getH5List.total,
                          pageSize: this.state.params.page_rows,
                          showTotal: function(e, t) {
                            return '\u603b\u5171 '.concat(e, ' \u6761\u6570\u636e');
                          },
                        };
                      return f.a.createElement(
                        'div',
                        null,
                        f.a.createElement(
                          s['a'],
                          null,
                          f.a.createElement(
                            s['a'].Item,
                            null,
                            f.a.createElement(Le['Link'], { to: '/' }, '\u9996\u9875')
                          ),
                          f.a.createElement(
                            s['a'].Item,
                            null,
                            f.a.createElement(
                              Le['Link'],
                              { to: '/h5/index' },
                              'H5\u9879\u76ee\u5217\u8868'
                            )
                          )
                        ),
                        f.a.createElement(
                          'div',
                          {
                            style: {
                              backgroundColor: 'white',
                              padding: '10px 20px',
                              marginTop: 20,
                            },
                          },
                          f.a.createElement(
                            Re['a'],
                            {
                              title: this.state.data.id
                                ? '\u7f16\u8f91\u9879\u76ee'
                                : '\u65b0\u589e\u9879\u76ee',
                              visible: this.state.visible,
                              onOk: function() {
                                e.setState({ confirmLoading: !0 }, function() {
                                  var t = e.state.data.id ? '/api/editH5List' : '/api/addH5List';
                                  Object(Ne['a'])(t, e.state.data).then(function(t) {
                                    e.setState({ confirmLoading: !1 }),
                                      200 === t.code &&
                                        e.setState(
                                          {
                                            visible: !1,
                                            params: Oe()({}, e.state.params, { page: 1 }),
                                          },
                                          function() {
                                            e.fetch(e.state.params);
                                          }
                                        );
                                  });
                                });
                              },
                              confirmLoading: this.state.confirmLoading || !1,
                              okText: '\u4fdd\u5b58',
                              onCancel: function() {
                                e.setState({ visible: !1, confirmLoading: !1 });
                              },
                            },
                            f.a.createElement(
                              c['a'],
                              {
                                labelCol: { xs: { span: 24 }, sm: { span: 4 } },
                                wrapperCol: { xs: { span: 24 }, sm: { span: 20 } },
                              },
                              f.a.createElement(
                                c['a'].Item,
                                { required: !0, label: '\u9879\u76ee\u540d\u79f0' },
                                f.a.createElement(l['a'], {
                                  autoComplete: 'off',
                                  onInput: this.onEditFormFieldChange,
                                  name: 'title',
                                  value: this.state.data.title,
                                  placeholder: '\u8bf7\u8f93\u5165',
                                })
                              ),
                              f.a.createElement(
                                c['a'].Item,
                                { label: '\u9879\u76ee\u7b80\u4ecb' },
                                f.a.createElement(l['a'].TextArea, {
                                  onInput: this.onEditFormFieldChange,
                                  name: 'desc',
                                  rows: 4,
                                  value: this.state.data.desc,
                                  placeholder: '\u8bf7\u8f93\u5165',
                                })
                              ),
                              f.a.createElement(
                                c['a'].Item,
                                { label: '\u6388\u6743\u7801' },
                                f.a.createElement(l['a'], {
                                  autoComplete: 'off',
                                  onInput: this.onEditFormFieldChange,
                                  name: 'auth_code',
                                  rows: 4,
                                  value: this.state.data.auth_code,
                                  placeholder: '\u8bf7\u8f93\u5165',
                                })
                              )
                            )
                          ),
                          f.a.createElement(
                            'div',
                            { style: { padding: '20px 0' } },
                            f.a.createElement(
                              r['a'],
                              null,
                              f.a.createElement(
                                o['a'],
                                { span: 8 },
                                f.a.createElement(
                                  i['a'],
                                  {
                                    type: 'primary',
                                    onClick: function() {
                                      e.setState({ visible: !0, data: {} });
                                    },
                                  },
                                  '\u65b0\u589e'
                                )
                              ),
                              f.a.createElement(
                                o['a'],
                                { span: 8, offset: 8 },
                                f.a.createElement(l['a'].Search, {
                                  style: { float: 'right' },
                                  allowClear: !0,
                                  placeholder: '\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57',
                                  onSearch: function(t) {
                                    e.setState(
                                      { params: Oe()({}, e.state.params, { page: 1, search: t }) },
                                      function() {
                                        e.fetch(e.state.params);
                                      }
                                    );
                                  },
                                })
                              )
                            )
                          ),
                          f.a.createElement(a['a'], {
                            tableLayout: 'fixed',
                            dataSource: d.getH5List.list,
                            rowKey: function(e) {
                              return e.id;
                            },
                            pagination: g,
                            columns: t,
                            loading: p,
                            onChange: this.handleTableChange,
                          })
                        )
                      );
                    },
                  },
                ])
              );
            })(p['Component']))
          ) || he);
      t['default'] = Me;
    },
  },
]);
