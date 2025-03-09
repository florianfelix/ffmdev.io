var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/h5p-standalone/dist/main.bundle.js
var require_main_bundle = __commonJS((exports, module) => {
  (function(e, n) {
    typeof exports == "object" && typeof module == "object" ? module.exports = n() : typeof define == "function" && define.amd ? define([], n) : typeof exports == "object" ? exports["h5p-standalone"] = n() : e.H5PStandalone = n();
  })(self, () => (() => {
    var e = { 633: (e2) => {
      function n2(e3, n3) {
        var t2 = e3.length, r2 = new Array(t2), o = {}, i = t2, a = function(e4) {
          for (var n4 = new Map, t3 = 0, r3 = e4.length;t3 < r3; t3++) {
            var o2 = e4[t3];
            n4.has(o2[0]) || n4.set(o2[0], new Set), n4.has(o2[1]) || n4.set(o2[1], new Set), n4.get(o2[0]).add(o2[1]);
          }
          return n4;
        }(n3), s = function(e4) {
          for (var n4 = new Map, t3 = 0, r3 = e4.length;t3 < r3; t3++)
            n4.set(e4[t3], t3);
          return n4;
        }(e3);
        for (n3.forEach(function(e4) {
          if (!s.has(e4[0]) || !s.has(e4[1]))
            throw new Error("Unknown node. There is an unknown node in the supplied edges.");
        });i--; )
          o[i] || c(e3[i], i, new Set);
        return r2;
        function c(e4, n4, i2) {
          if (i2.has(e4)) {
            var l;
            try {
              l = ", node was:" + JSON.stringify(e4);
            } catch (e5) {
              l = "";
            }
            throw new Error("Cyclic dependency" + l);
          }
          if (!s.has(e4))
            throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(e4));
          if (!o[n4]) {
            o[n4] = true;
            var u = a.get(e4) || new Set;
            if (n4 = (u = Array.from(u)).length) {
              i2.add(e4);
              do {
                var d = u[--n4];
                c(d, s.get(d), i2);
              } while (n4);
              i2.delete(e4);
            }
            r2[--t2] = e4;
          }
        }
      }
      e2.exports = function(e3) {
        return n2(function(e4) {
          for (var n3 = new Set, t2 = 0, r2 = e4.length;t2 < r2; t2++) {
            var o = e4[t2];
            n3.add(o[0]), n3.add(o[1]);
          }
          return Array.from(n3);
        }(e3), e3);
      }, e2.exports.array = n2;
    } }, n = {};
    function t(r2) {
      var o = n[r2];
      if (o !== undefined)
        return o.exports;
      var i = n[r2] = { exports: {} };
      return e[r2](i, i.exports, t), i.exports;
    }
    t.d = (e2, n2) => {
      for (var r2 in n2)
        t.o(n2, r2) && !t.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: n2[r2] });
    }, t.o = (e2, n2) => Object.prototype.hasOwnProperty.call(e2, n2);
    var r = {};
    return (() => {
      t.d(r, { default: () => m });
      var e2 = function(e3, n3, t2, r2) {
        return new (t2 || (t2 = Promise))(function(o2, i2) {
          function a2(e4) {
            try {
              c2(r2.next(e4));
            } catch (e5) {
              i2(e5);
            }
          }
          function s2(e4) {
            try {
              c2(r2.throw(e4));
            } catch (e5) {
              i2(e5);
            }
          }
          function c2(e4) {
            var n4;
            e4.done ? o2(e4.value) : (n4 = e4.value, n4 instanceof t2 ? n4 : new t2(function(e5) {
              e5(n4);
            })).then(a2, s2);
          }
          c2((r2 = r2.apply(e3, n3 || [])).next());
        });
      }, n2 = function(e3, n3) {
        var t2, r2, o2, i2, a2 = { label: 0, sent: function() {
          if (1 & o2[0])
            throw o2[1];
          return o2[1];
        }, trys: [], ops: [] };
        return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, typeof Symbol == "function" && (i2[Symbol.iterator] = function() {
          return this;
        }), i2;
        function s2(s3) {
          return function(c2) {
            return function(s4) {
              if (t2)
                throw new TypeError("Generator is already executing.");
              for (;i2 && (i2 = 0, s4[0] && (a2 = 0)), a2; )
                try {
                  if (t2 = 1, r2 && (o2 = 2 & s4[0] ? r2.return : s4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, s4[1])).done)
                    return o2;
                  switch (r2 = 0, o2 && (s4 = [2 & s4[0], o2.value]), s4[0]) {
                    case 0:
                    case 1:
                      o2 = s4;
                      break;
                    case 4:
                      return a2.label++, { value: s4[1], done: false };
                    case 5:
                      a2.label++, r2 = s4[1], s4 = [0];
                      continue;
                    case 7:
                      s4 = a2.ops.pop(), a2.trys.pop();
                      continue;
                    default:
                      if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || s4[0] !== 6 && s4[0] !== 2)) {
                        a2 = 0;
                        continue;
                      }
                      if (s4[0] === 3 && (!o2 || s4[1] > o2[0] && s4[1] < o2[3])) {
                        a2.label = s4[1];
                        break;
                      }
                      if (s4[0] === 6 && a2.label < o2[1]) {
                        a2.label = o2[1], o2 = s4;
                        break;
                      }
                      if (o2 && a2.label < o2[2]) {
                        a2.label = o2[2], a2.ops.push(s4);
                        break;
                      }
                      o2[2] && a2.ops.pop(), a2.trys.pop();
                      continue;
                  }
                  s4 = n3.call(e3, a2);
                } catch (e4) {
                  s4 = [6, e4], r2 = 0;
                } finally {
                  t2 = o2 = 0;
                }
              if (5 & s4[0])
                throw s4[1];
              return { value: s4[0] ? s4[1] : undefined, done: true };
            }([s3, c2]);
          };
        }
      };
      function o(e3) {
        if ((e3 = e3.trim()).match(/^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*|localhost)(:\d{1,5})?(\/[^\s]*)?$/i))
          return e3;
        if (e3.startsWith("//"))
          return window.location.protocol + e3;
        if (e3.startsWith("/"))
          return window.location.origin + e3;
        var n3 = "".concat(window.location.protocol, "//").concat(window.location.host);
        return window.location.pathname.indexOf("/") > -1 ? n3 += window.location.pathname.split("/").slice(0, -1).join("/") : n3 += window.location.pathname, "".concat(n3, "/").concat(e3);
      }
      function i(t2, r2) {
        return e2(this, undefined, undefined, function() {
          return n2(this, function(e3) {
            switch (e3.label) {
              case 0:
                return r2 || (r2 = { credentials: "same-origin" }), [4, fetch(t2, r2)];
              case 1:
                return [2, e3.sent().json()];
            }
          });
        });
      }
      function a(t2, r2) {
        return e2(this, undefined, undefined, function() {
          var e3, o2, i2, a2;
          return n2(this, function(n3) {
            switch (n3.label) {
              case 0:
                for (e3 = t2.getElementsByTagName("script"), o2 = [], i2 = 0;i2 < e3.length; i2++)
                  e3[i2].dataset.h5p && o2.push(e3[i2]);
                return a2 = [], r2.forEach(function(e4) {
                  if (!o2.some(function(n5) {
                    return n5.dataset.h5p === e4;
                  })) {
                    var n4 = document.createElement("script");
                    n4.src = e4, n4.async = false, n4.defer = false, n4.dataset.h5p = e4;
                    var r3 = new Promise(function(e5) {
                      n4.onload = e5;
                    });
                    t2.append(n4), a2.push(r3);
                  }
                }), [4, Promise.all(a2)];
              case 1:
                return n3.sent(), [2];
            }
          });
        });
      }
      function s(e3, n3) {
        for (var t2 = e3.getElementsByTagName("link"), r2 = [], o2 = 0;o2 < t2.length; o2++)
          t2[o2].dataset.h5p && r2.push(t2[o2]);
        n3.forEach(function(n4) {
          if (!r2.some(function(e4) {
            return e4.dataset.h5p === n4;
          })) {
            var t3 = document.createElement("link");
            t3.href = n4, t3.dataset.h5p = n4, t3.rel = "stylesheet", t3.type = "text/css", e3.append(t3);
          }
        });
      }
      function c(e3) {
        return e3 instanceof Object && !Array.isArray(e3);
      }
      function l(e3) {
        for (var n3, t2, r2 = [], o2 = 1;o2 < arguments.length; o2++)
          r2[o2 - 1] = arguments[o2];
        if (!r2.length)
          return e3;
        var i2 = r2.shift();
        if (c(e3) && c(i2))
          for (var a2 in i2)
            c(i2[a2]) ? (e3[a2] || Object.assign(e3, ((n3 = {})[a2] = {}, n3)), l(e3[a2], i2[a2])) : Object.assign(e3, ((t2 = {})[a2] = i2[a2], t2));
        return l.apply(undefined, function(e4, n4, t3) {
          if (t3 || arguments.length === 2)
            for (var r3, o3 = 0, i3 = n4.length;o3 < i3; o3++)
              !r3 && o3 in n4 || (r3 || (r3 = Array.prototype.slice.call(n4, 0, o3)), r3[o3] = n4[o3]);
          return e4.concat(r3 || Array.prototype.slice.call(n4));
        }([e3], r2, false));
      }
      function u(e3, n3) {
        return n3.filter(function(n4) {
          return e3.indexOf(n4) < 0;
        }).concat(e3);
      }
      var d = function(e3, n3, t2, r2) {
        return new (t2 || (t2 = Promise))(function(o2, i2) {
          function a2(e4) {
            try {
              c2(r2.next(e4));
            } catch (e5) {
              i2(e5);
            }
          }
          function s2(e4) {
            try {
              c2(r2.throw(e4));
            } catch (e5) {
              i2(e5);
            }
          }
          function c2(e4) {
            var n4;
            e4.done ? o2(e4.value) : (n4 = e4.value, n4 instanceof t2 ? n4 : new t2(function(e5) {
              e5(n4);
            })).then(a2, s2);
          }
          c2((r2 = r2.apply(e3, n3 || [])).next());
        });
      }, p = function(e3, n3) {
        var t2, r2, o2, i2, a2 = { label: 0, sent: function() {
          if (1 & o2[0])
            throw o2[1];
          return o2[1];
        }, trys: [], ops: [] };
        return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, typeof Symbol == "function" && (i2[Symbol.iterator] = function() {
          return this;
        }), i2;
        function s2(s3) {
          return function(c2) {
            return function(s4) {
              if (t2)
                throw new TypeError("Generator is already executing.");
              for (;i2 && (i2 = 0, s4[0] && (a2 = 0)), a2; )
                try {
                  if (t2 = 1, r2 && (o2 = 2 & s4[0] ? r2.return : s4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, s4[1])).done)
                    return o2;
                  switch (r2 = 0, o2 && (s4 = [2 & s4[0], o2.value]), s4[0]) {
                    case 0:
                    case 1:
                      o2 = s4;
                      break;
                    case 4:
                      return a2.label++, { value: s4[1], done: false };
                    case 5:
                      a2.label++, r2 = s4[1], s4 = [0];
                      continue;
                    case 7:
                      s4 = a2.ops.pop(), a2.trys.pop();
                      continue;
                    default:
                      if (!((o2 = (o2 = a2.trys).length > 0 && o2[o2.length - 1]) || s4[0] !== 6 && s4[0] !== 2)) {
                        a2 = 0;
                        continue;
                      }
                      if (s4[0] === 3 && (!o2 || s4[1] > o2[0] && s4[1] < o2[3])) {
                        a2.label = s4[1];
                        break;
                      }
                      if (s4[0] === 6 && a2.label < o2[1]) {
                        a2.label = o2[1], o2 = s4;
                        break;
                      }
                      if (o2 && a2.label < o2[2]) {
                        a2.label = o2[2], a2.ops.push(s4);
                        break;
                      }
                      o2[2] && a2.ops.pop(), a2.trys.pop();
                      continue;
                  }
                  s4 = n3.call(e3, a2);
                } catch (e4) {
                  s4 = [6, e4], r2 = 0;
                } finally {
                  t2 = o2 = 0;
                }
              if (5 & s4[0])
                throw s4[1];
              return { value: s4[0] ? s4[1] : undefined, done: true };
            }([s3, c2]);
          };
        }
      }, f = t(633), h = function() {
        function e3(e4, n3) {
          var t2 = this;
          this.libraryFolderContainsVersion = true;
          var r2 = n3.id || Math.random().toString(36).substr(2, 9);
          return this.prepareH5PEnvironment(r2, n3).then(function(o2) {
            window.H5P || (window.H5P = {}), window.H5P.preventInit = true;
            var i2 = n3.embedType ? n3.embedType : "iframe";
            return t2.renderPlayerFrame({ anchorElement: e4, contentId: r2, embedType: i2, H5PIntegration: o2 }).then(function() {
              return (n3.preventH5PInit === undefined || n3.preventH5PInit) && (typeof window.H5P.init == "function" && window.H5P.init(), window.H5P.preventInit = false), r2;
            });
          });
        }
        return e3.prototype.renderPlayerFrame = function(e4) {
          return d(this, undefined, undefined, function() {
            var n3, t2, r2, o2, i2, c2;
            return p(this, function(l2) {
              switch (l2.label) {
                case 0:
                  if (!(e4.anchorElement instanceof HTMLElement))
                    throw new Error("createH5P must be passed an element");
                  return e4.embedType !== "iframe" ? [3, 2] : ((t2 = document.createElement("div")).classList.add("h5p-iframe-wrapper"), t2.style.backgroundColor = "#DDD;", (n3 = document.createElement("iframe")).id = "h5p-iframe-".concat(e4.contentId), n3.src = "about:blank", n3.classList.add("h5p-iframe"), n3.setAttribute("scrolling", "no"), n3.setAttribute("data-content-id", e4.contentId), n3.setAttribute("frameBorder", "0"), n3.style.width = "100%", n3.style.height = "100%", n3.style.border = "none", n3.style.display = "block", t2.append(n3), e4.anchorElement.append(t2), s(document.head || document.body || e4.anchorElement, e4.H5PIntegration.core.styles), [4, a(n3, e4.H5PIntegration.core.scripts)]);
                case 1:
                  return l2.sent(), [3, 4];
                case 2:
                  return (t2 = document.createElement("div")).classList.add("h5p-iframe"), (r2 = document.createElement("div")).classList.add("h5p-content"), r2.setAttribute("data-content-id", e4.contentId), t2.append(r2), e4.anchorElement.append(t2), o2 = document.head || document.body || e4.anchorElement, i2 = (e4.H5PIntegration.core.styles || []).concat(e4.H5PIntegration.contents["cid-".concat(e4.contentId)].styles), s(o2, i2), c2 = (e4.H5PIntegration.core.scripts || []).concat(e4.H5PIntegration.contents["cid-".concat(e4.contentId)].scripts), [4, a(o2, c2)];
                case 3:
                  l2.sent(), l2.label = 4;
                case 4:
                  return [2];
              }
            });
          });
        }, e3.prototype.prepareH5PEnvironment = function(e4, n3) {
          var t2, r2;
          return d(this, undefined, undefined, function() {
            var a2, s2, c2, d2, f2, h2, m2, y, b, v, w, g, C, P, D, F, N;
            return p(this, function(p2) {
              switch (p2.label) {
                case 0:
                  return a2 = this.getH5PPaths(n3), s2 = a2.h5pJsonPath, c2 = a2.contentJsonPath, d2 = a2.librariesPath, [4, i("".concat(s2, "/h5p.json"), n3 == null ? undefined : n3.assetsRequestFetchOptions)];
                case 1:
                  return f2 = p2.sent(), h2 = this, [4, this.libraryFolderNameIncludesVersion(d2, f2.preloadedDependencies[0], n3 == null ? undefined : n3.assetsRequestFetchOptions)];
                case 2:
                  return h2.libraryFolderContainsVersion = p2.sent(), [4, i("".concat(c2, "/content.json"), n3 == null ? undefined : n3.assetsRequestFetchOptions)];
                case 3:
                  return m2 = p2.sent(), [4, this.findMainLibrary(f2, d2, n3 == null ? undefined : n3.assetsRequestFetchOptions)];
                case 4:
                  return y = p2.sent(), [4, this.findAllDependencies(f2, d2, n3 == null ? undefined : n3.assetsRequestFetchOptions)];
                case 5:
                  return b = p2.sent(), v = this.sortDependencies(b, d2), w = v.styles, g = v.scripts, C = { baseUrl: window.location.origin, url: "", contents: {}, saveFreq: false, postUserStatistics: false, ajax: {}, l10n: { H5P: { fullscreen: "Fullscreen", disableFullscreen: "Disable fullscreen", download: "Download", copyrights: "Rights of use", embed: "Embed", size: "Size", showAdvanced: "Show advanced", hideAdvanced: "Hide advanced", advancedHelp: "Include this script on your website if you want dynamic sizing of the embedded content:", copyrightInformation: "Rights of use", close: "Close", title: "Title", author: "Author", year: "Year", source: "Source", license: "License", thumbnail: "Thumbnail", noCopyrights: "No copyright information available for this content.", reuse: "Reuse", reuseContent: "Reuse Content", reuseDescription: "Reuse this content.", downloadDescription: "Download this content as a H5P file.", copyrightsDescription: "View copyright information for this content.", embedDescription: "View the embed code for this content.", h5pDescription: "Visit H5P.org to check out more cool content.", contentChanged: "This content has changed since you last used it.", startingOver: "You'll be starting over.", by: "by", showMore: "Show more", showLess: "Show less", subLevel: "Sublevel", confirmDialogHeader: "Confirm action", confirmDialogBody: "Please confirm that you wish to proceed. This action is not reversible.", cancelLabel: "Cancel", confirmLabel: "Confirm", licenseU: "Undisclosed", licenseCCBY: "Attribution", licenseCCBYSA: "Attribution-ShareAlike", licenseCCBYND: "Attribution-NoDerivs", licenseCCBYNC: "Attribution-NonCommercial", licenseCCBYNCSA: "Attribution-NonCommercial-ShareAlike", licenseCCBYNCND: "Attribution-NonCommercial-NoDerivs", licenseCC40: "4.0 International", licenseCC30: "3.0 Unported", licenseCC25: "2.5 Generic", licenseCC20: "2.0 Generic", licenseCC10: "1.0 Generic", licenseGPL: "General Public License", licenseV3: "Version 3", licenseV2: "Version 2", licenseV1: "Version 1", licensePD: "Public Domain", licenseCC010: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication", licensePDM: "Public Domain Mark", licenseC: "Copyright", contentType: "Content Type", licenseExtras: "License Extras", changes: "Changelog", contentCopied: "Content is copied to the clipboard", connectionLost: "Connection lost. Results will be stored and sent when you regain connection.", connectionReestablished: "Connection reestablished.", resubmitScores: "Attempting to submit stored results.", offlineDialogHeader: "Your connection to the server was lost", offlineDialogBody: "We were unable to send information about your completion of this task. Please check your internet connection.", offlineDialogRetryMessage: "Retrying in :num....", offlineDialogRetryButtonLabel: "Retry now", offlineSuccessfulSubmit: "Successfully submitted results." } } }, window && window.H5PIntegration && (C = l(C, window.H5PIntegration)), P = [o("./frame.bundle.js")], D = [o("./styles/h5p.css")], n3.frameJs && (P = [o(n3.frameJs)]), n3.frameCss && (D = [o(n3.frameCss)]), C.core ? (C.core.styles = u(C.core.styles, D), C.core.scripts = u(C.core.scripts, P)) : C.core = { styles: D, scripts: P }, C.url = e4, C.urlLibraries = d2, C.postUserStatistics = !!n3.postUserStatistics, C.reportingIsEnabled = !!n3.reportingIsEnabled, n3.saveFreq && typeof n3.saveFreq == "number" && (C.saveFreq = n3.saveFreq), n3.user && (C.user = n3.user), ((t2 = n3.ajax) === null || t2 === undefined ? undefined : t2.contentUserDataUrl) && (C.ajax.contentUserData = n3.ajax.contentUserDataUrl), ((r2 = n3.ajax) === null || r2 === undefined ? undefined : r2.setFinishedUrl) && (C.ajax.setFinished = n3.ajax.setFinishedUrl), n3.translations && (C.l10n = l(C.l10n, n3.translations)), n3.customCss && typeof n3.customCss == "string" && (n3.customCss = [n3.customCss]), n3.customJs && typeof n3.customJs == "string" && (n3.customJs = [n3.customJs]), w = w.concat((n3.customCss || []).map(function(e5) {
                    return o(e5);
                  })), g = g.concat((n3.customJs || []).map(function(e5) {
                    return o(e5);
                  })), F = { copyright: !!n3.copyright, embed: !!n3.embed, export: !!n3.export, frame: !!n3.frame, icon: !!n3.icon, copy: !!n3.copy }, N = "".concat(y.machineName, " "), y.majorVersion && (N += y.majorVersion), y.minorVersion && (N += ".".concat(y.minorVersion)), C.contents || (C.contents = {}), (n3 == null ? undefined : n3.metadata) || (n3.metadata = { title: n3.title ? n3.title : "", license: "U" }), C.contents["cid-".concat(e4)] = { library: N, title: n3.title ? n3.title : "", url: s2, contentUrl: c2, jsonContent: JSON.stringify(m2), styles: w, scripts: g, fullScreen: !!n3.fullScreen, exportUrl: n3.downloadUrl ? o(n3.downloadUrl) : undefined, embedCode: n3.embedCode ? n3.embedCode : "", resizeCode: n3.resizeCode ? n3.resizeCode : "", displayOptions: F, contentUserData: n3.contentUserData, metadata: n3.metadata }, n3.xAPIObjectIRI && (C.contents["cid-".concat(e4)].url = n3.xAPIObjectIRI), window.H5PIntegration = C, [2, C];
              }
            });
          });
        }, e3.prototype.getH5PPaths = function(e4) {
          var n3 = o("workspace");
          e4.h5pJsonPath && (n3 = o(e4.h5pJsonPath));
          var t2 = "".concat(n3, "/content");
          e4.contentJsonPath && (t2 = o(e4.contentJsonPath));
          var r2 = n3;
          return e4.librariesPath && (r2 = o(e4.librariesPath)), { h5pJsonPath: n3, contentJsonPath: t2, librariesPath: r2 };
        }, e3.prototype.libraryFolderNameIncludesVersion = function(e4, n3, t2) {
          return d(this, undefined, undefined, function() {
            var r2, o2;
            return p(this, function(a2) {
              switch (a2.label) {
                case 0:
                  r2 = this.libraryToFolderName(n3), a2.label = 1;
                case 1:
                  return a2.trys.push([1, 3, , 4]), [4, i("".concat(e4, "/").concat(r2, "/library.json"), t2)];
                case 2:
                  return a2.sent(), o2 = true, [3, 4];
                case 3:
                  return a2.sent(), o2 = false, [3, 4];
                case 4:
                  return [2, o2];
              }
            });
          });
        }, e3.prototype.libraryToFolderName = function(e4) {
          var n3 = e4.machineName;
          return this.libraryFolderContainsVersion && (e4.majorVersion !== undefined && (n3 += "-".concat(e4.majorVersion)), e4.minorVersion !== undefined && (n3 += ".".concat(e4.minorVersion))), n3;
        }, e3.prototype.findMainLibrary = function(e4, n3, t2) {
          return d(this, undefined, undefined, function() {
            var r2, o2;
            return p(this, function(a2) {
              return r2 = e4.preloadedDependencies.find(function(n4) {
                return n4.machineName === e4.mainLibrary;
              }), o2 = this.libraryToFolderName(r2), [2, i("".concat(n3, "/").concat(o2, "/library.json"), t2)];
            });
          });
        }, e3.prototype.findAllDependencies = function(e4, n3, t2) {
          return d(this, undefined, undefined, function() {
            var r2, o2 = this;
            return p(this, function(i2) {
              return r2 = e4.preloadedDependencies.map(function(e5) {
                return o2.libraryToFolderName(e5);
              }), [2, this.loadDependencies(r2, [], n3, t2)];
            });
          });
        }, e3.prototype.loadDependencies = function(e4, n3, t2, r2) {
          return d(this, undefined, undefined, function() {
            var o2, i2, a2, s2, c2 = this;
            return p(this, function(l2) {
              switch (l2.label) {
                case 0:
                  return o2 = n3, i2 = [], a2 = e4.map(function(e5) {
                    return c2.findLibraryDependencies(e5, t2, r2);
                  }), [4, Promise.all(a2)];
                case 1:
                  return (s2 = l2.sent()).forEach(function(e5) {
                    o2.push(e5), e5.dependencies.forEach(function(e6) {
                      var n4 = o2.find(function(n5) {
                        return n5.libraryFolderName === e6;
                      }), t3 = s2.find(function(n5) {
                        return n5.libraryFolderName === e6;
                      });
                      n4 || t3 || i2.push(e6);
                    });
                  }), i2.length > 0 ? [2, this.loadDependencies(i2, o2, t2, r2)] : [2, o2];
              }
            });
          });
        }, e3.prototype.findLibraryDependencies = function(e4, n3, t2) {
          return d(this, undefined, undefined, function() {
            var r2, o2, a2 = this;
            return p(this, function(s2) {
              switch (s2.label) {
                case 0:
                  return [4, i("".concat(n3, "/").concat(e4, "/library.json"), t2)];
                case 1:
                  return r2 = s2.sent(), o2 = [], r2.preloadedDependencies && (o2 = r2.preloadedDependencies.map(function(e5) {
                    return a2.libraryToFolderName(e5);
                  })), [2, { libraryFolderName: e4, dependencies: o2, preloadedCss: r2.preloadedCss, preloadedJs: r2.preloadedJs }];
              }
            });
          });
        }, e3.prototype.sortDependencies = function(e4, n3) {
          var t2 = [], r2 = {}, o2 = {};
          e4.forEach(function(e5) {
            e5.dependencies.length === 0 && t2.push([e5.libraryFolderName]), e5.dependencies.forEach(function(n4) {
              t2.push([e5.libraryFolderName, n4]);
            }), e5.preloadedCss && (r2[e5.libraryFolderName] = [], r2[e5.libraryFolderName] && (r2[e5.libraryFolderName] = r2[e5.libraryFolderName]), e5.preloadedCss.forEach(function(t3) {
              var o3 = "".concat(n3, "/").concat(e5.libraryFolderName, "/").concat(t3.path);
              r2[e5.libraryFolderName].push(o3);
            })), e5.preloadedJs && (o2[e5.libraryFolderName] = [], o2[e5.libraryFolderName] && (o2[e5.libraryFolderName] = o2[e5.libraryFolderName]), e5.preloadedJs.forEach(function(t3) {
              var r3 = "".concat(n3, "/").concat(e5.libraryFolderName, "/").concat(t3.path);
              o2[e5.libraryFolderName].push(r3);
            }));
          });
          var i2 = [], a2 = [];
          return f(t2).reverse().forEach(function(e5) {
            Array.prototype.push.apply(i2, r2[e5]), Array.prototype.push.apply(a2, o2[e5]);
          }), { styles: i2, scripts: a2 };
        }, e3;
      }();
      h.EventDispatcher = function() {
      };
      const m = { H5P: h };
    })(), r.default;
  })());
});

// ts/bundle.ts
var import_h5p_standalone = __toESM(require_main_bundle(), 1);
function loadH5P(elementId, h5pJsonPath) {
  const el = document.getElementById(elementId);
  if (el) {
    const options = {
      h5pJsonPath,
      frameJs: "h5p/3.8.0/frame.bundle.js",
      frameCss: "h5p/3.8.0/styles/h5p.css"
    };
    new import_h5p_standalone.H5P(el, options);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}
export {
  loadH5P
};
