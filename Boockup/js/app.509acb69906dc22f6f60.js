webpackJsonp([1], {
    "/Ypi": function(t, e) {},
    0: function(t, e) {},
    1: function(t, e) {},
    NHnr: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("7+uW")
          , s = i("Usg1")
          , a = {
            name: "Book",
            props: ["width", "height", "depth", "scale", "cover", "back", "spine", "paper", "animation", "axis"],
            data: function() {
                return {
                    size: "cover",
                    side: "/static/images/book-side.jpg",
                    top: "/static/images/book-top.jpg",
                    mousedown: !1,
                    playState: "running",
                    dragStartCoordinates: {
                        x: null,
                        y: null
                    },
                    originalStartCoordinates: {
                        x: null,
                        y: null
                    }
                }
            },
            computed: {
                boxWidth: function() {
                    return this.width * this.scale
                },
                boxHeight: function() {
                    return this.height * this.scale
                },
                boxDepth: function() {
                    return this.depth * this.scale
                },
                axisStyleObject: function() {
                    return "transform: rotateX(" + this.axis.x + "deg) rotateY(" + this.axis.y + "deg) rotateZ(" + this.axis.z + "deg)"
                },
                animationStyleObject: function() {
                    return "animation: " + this.animation.duration + "s rotatingAnimation" + this.animation.axis + " " + this.animation.timing + " infinite " + this.playState
                }
            },
            watch: {
                axis: {
                    handler: function() {
                        this.updateAxis(parseInt(this.axis.x), parseInt(this.axis.y), parseInt(this.axis.z))
                    },
                    deep: !0
                },
                mousedown: function() {
                    s.a.$emit("mousedown", this.mousedown)
                }
            },
            methods: {
                onMouseDown: function(t) {
                    this.mousedown = !0,
                    this.playState = "paused",
                    this.dragStartCoordinates.x = t.clientX,
                    this.dragStartCoordinates.y = t.clientY,
                    this.originalStartCoordinates.x = this.axis.y,
                    this.originalStartCoordinates.y = this.axis.x
                },
                onMouseUp: function(t) {
                    for (this.mousedown = !1,
                    this.playState = "running"; this.axis.x < -180; )
                        this.axis.x += 360;
                    for (; this.axis.x > 180; )
                        this.axis.x -= 360;
                    for (; this.axis.y < -180; )
                        this.axis.y += 360;
                    for (; this.axis.y > 180; )
                        this.axis.y -= 360
                },
                onMouseMove: function(t) {
                    this.mousedown && (this.axis.x = this.originalStartCoordinates.y + (this.dragStartCoordinates.y - t.clientY),
                    this.axis.y = this.originalStartCoordinates.x - (this.dragStartCoordinates.x - t.clientX))
                },
                updateAxis: function(t, e, i) {
                    s.a.$emit("axis-changed", t, e, i)
                }
            }
        }
          , o = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "container",
                    on: {
                        mousemove: t.onMouseMove,
                        mouseup: t.onMouseUp
                    }
                }, [i("div", {
                    style: t.axisStyleObject
                }, [i("div", {
                    staticClass: "book-container",
                    style: t.animationStyleObject,
                    on: {
                        mousedown: t.onMouseDown,
                        mouseup: t.onMouseUp
                    }
                }, [i("div", {
                    staticClass: "book-front",
                    style: {
                        width: t.boxWidth + "px",
                        height: t.boxHeight + "px",
                        "background-image": "url(" + t.cover + ")",
                        transform: "translate3d(" + -.5 * t.boxWidth + "px ," + -.5 * t.boxHeight + "px ," + t.boxDepth / 2 + "px) translate3d(0,0,0) rotateY(0deg)"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "book-side-left",
                    style: {
                        width: t.boxDepth + 1 + "px",
                        height: t.boxHeight + 1 + "px",
                        background: "url(" + t.spine + ")",
                        transform: "translate3d(" + -.5 * t.boxWidth + "px ," + -.5 * t.boxHeight + "px ," + t.boxDepth / 2 + "px) translate3d(" + -.5 * t.boxDepth + "px, 0, " + -.5 * t.boxDepth + "px) rotateY(-90deg)"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "book-side-right",
                    style: {
                        width: t.boxDepth + 1 + "px",
                        height: t.boxHeight + 1 + "px",
                        background: "url(" + t.side + ") no-repeat center center",
                        transform: "translate3d(" + -.5 * t.boxWidth + "px ," + -.5 * t.boxHeight + "px ," + t.boxDepth / 2 + "px) translate3d(" + (t.boxWidth - .5 * t.boxDepth) + "px, 0px," + -.5 * t.boxDepth + "px) rotateY(90deg)"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "book-top",
                    style: {
                        width: t.boxWidth + 1 + "px",
                        height: t.boxDepth + "px",
                        background: "#00f",
                        background: "url(" + t.top + ") no-repeat center center",
                        transform: "translate3d(" + -.5 * t.boxWidth + "px, " + -.5 * t.boxHeight + "px ," + t.boxDepth / 2 + "px) translate3d(0px, " + -.5 * t.boxDepth + "px, " + .5 * -t.boxDepth + "px) rotateX(90deg)"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "book-bottom",
                    style: {
                        width: t.boxWidth + 1 + "px",
                        height: t.boxDepth + "px",
                        background: "#000",
                        background: "url(" + t.top + ") no-repeat center center",
                        transform: "translate3d(" + -.5 * t.boxWidth + "px ," + -.5 * t.boxHeight + "px ," + t.boxDepth / 2 + "px) translate3d(0px, " + (t.boxHeight - .5 * t.boxDepth) + "px, " + -.5 * t.boxDepth + "px) rotateX(-90deg)"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "book-back",
                    style: {
                        width: t.boxWidth + 1 + "px",
                        height: t.boxHeight + 1 + "px",
                        background: "url(" + t.back + ")",
                        transform: "translate3d(" + -.5 * t.boxWidth + "px ," + -.5 * t.boxHeight + "px ," + t.boxDepth / 2 + "px) translate3d(0,0, -" + t.boxDepth + "px) rotateY(180deg)"
                    }
                })])])])
            },
            staticRenderFns: []
        };
        var r = i("VU/8")(a, o, !1, function(t) {
            i("/Ypi")
        }, null, null).exports
          , d = {
            name: "Dimensions",
            props: ["width", "height", "depth", "scale"],
            data: function() {
                return {
                    isOpen: !1,
                    sliderWidth: this.width,
                    sliderHeight: this.height,
                    sliderDepth: this.depth,
                    sliderScale: this.scale
                }
            },
            watch: {
                sliderWidth: function() {
                    s.a.$emit("dimension-changed", this.sliderWidth, this.sliderHeight, this.sliderDepth, this.sliderScale)
                },
                sliderHeight: function() {
                    s.a.$emit("dimension-changed", this.sliderWidth, this.sliderHeight, this.sliderDepth, this.sliderScale)
                },
                sliderDepth: function() {
                    s.a.$emit("dimension-changed", this.sliderWidth, this.sliderHeight, this.sliderDepth, this.sliderScale)
                },
                sliderScale: function() {
                    s.a.$emit("dimension-changed", this.sliderWidth, this.sliderHeight, this.sliderDepth, this.sliderScale)
                }
            }
        }
          , l = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "control-box textbox-control",
                    class: {
                        open: t.isOpen,
                        closed: !t.isOpen
                    }
                }, [i("h2", {
                    on: {
                        click: function(e) {
                            t.isOpen = !t.isOpen
                        }
                    }
                }, [t._v("Dimensions")]), t._v(" "), i("span", {
                    staticClass: "triangle"
                }, [i("svg", {
                    attrs: {
                        width: "4px",
                        height: "6px",
                        viewBox: "0 0 4 6",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [i("g", {
                    attrs: {
                        id: "Page-1",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                    }
                }, [i("g", {
                    attrs: {
                        id: "MacBook-Pro-15in-Copy",
                        transform: "translate(-1275.000000, -8.000000)",
                        fill: "#D0021B"
                    }
                }, [i("polygon", {
                    attrs: {
                        id: "triangle",
                        transform: "translate(1275.828427, 10.828427) rotate(-45.000000) translate(-1275.828427, -10.828427) ",
                        points: "1277.37896 8.82842712 1277.82843 12.8284271 1273.82843 12.3789634"
                    }
                })])])])]), t._v(" "), i("div", {
                    staticClass: "dimension-input"
                }, [i("label", {
                    attrs: {
                        for: "width"
                    }
                }, [t._v("width")]), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sliderWidth,
                        expression: "sliderWidth"
                    }],
                    staticClass: "slider",
                    attrs: {
                        name: "width",
                        type: "range",
                        min: "10",
                        max: "500"
                    },
                    domProps: {
                        value: t.sliderWidth
                    },
                    on: {
                        __r: function(e) {
                            t.sliderWidth = e.target.value
                        }
                    }
                }), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sliderWidth,
                        expression: "sliderWidth"
                    }],
                    staticClass: "type-input",
                    attrs: {
                        type: "number",
                        name: "width-input",
                        tabindex: "1"
                    },
                    domProps: {
                        value: t.sliderWidth
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.sliderWidth = e.target.value)
                        }
                    }
                }), t._v(" "), i("span", [t._v("mm")])]), t._v(" "), i("div", {
                    staticClass: "dimension-input"
                }, [i("label", {
                    attrs: {
                        for: "width"
                    }
                }, [t._v("height")]), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sliderHeight,
                        expression: "sliderHeight"
                    }],
                    staticClass: "slider",
                    attrs: {
                        name: "width",
                        type: "range",
                        min: "10",
                        max: "500"
                    },
                    domProps: {
                        value: t.sliderHeight
                    },
                    on: {
                        __r: function(e) {
                            t.sliderHeight = e.target.value
                        }
                    }
                }), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sliderHeight,
                        expression: "sliderHeight"
                    }],
                    staticClass: "type-input",
                    attrs: {
                        type: "number",
                        name: "height-input",
                        tabindex: "2"
                    },
                    domProps: {
                        value: t.sliderHeight
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.sliderHeight = e.target.value)
                        }
                    }
                }), t._v(" "), i("span", [t._v("mm")])]), t._v(" "), i("div", {
                    staticClass: "dimension-input"
                }, [i("label", {
                    attrs: {
                        for: "width"
                    }
                }, [t._v("depth")]), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sliderDepth,
                        expression: "sliderDepth"
                    }],
                    staticClass: "slider",
                    attrs: {
                        name: "width",
                        type: "range",
                        min: "1",
                        max: "500"
                    },
                    domProps: {
                        value: t.sliderDepth
                    },
                    on: {
                        __r: function(e) {
                            t.sliderDepth = e.target.value
                        }
                    }
                }), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sliderDepth,
                        expression: "sliderDepth"
                    }],
                    staticClass: "type-input",
                    attrs: {
                        type: "number",
                        name: "depth-input",
                        tabindex: "3"
                    },
                    domProps: {
                        value: t.sliderDepth
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.sliderDepth = e.target.value)
                        }
                    }
                }), t._v(" "), i("span", [t._v("mm")])]), t._v(" "), i("div", {
                    staticClass: "dimension-input"
                }, [i("label", {
                    attrs: {
                        for: "width"
                    }
                }, [t._v("scale")]), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sliderScale,
                        expression: "sliderScale"
                    }],
                    staticClass: "slider",
                    attrs: {
                        name: "width",
                        type: "range",
                        min: "0.5",
                        max: "5",
                        step: "0.01"
                    },
                    domProps: {
                        value: t.sliderScale
                    },
                    on: {
                        __r: function(e) {
                            t.sliderScale = e.target.value
                        }
                    }
                }), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sliderScale,
                        expression: "sliderScale"
                    }],
                    staticClass: "type-input",
                    attrs: {
                        type: "number",
                        name: "scale-input",
                        tabindex: "4"
                    },
                    domProps: {
                        value: t.sliderScale
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.sliderScale = e.target.value)
                        }
                    }
                }), t._v(" "), i("span", [t._v("×")])])])
            },
            staticRenderFns: []
        }
          , h = i("VU/8")(d, l, !1, null, null, null).exports
          , p = {
            name: "Textures",
            data: function() {
                return {
                    isOpen: !1
                }
            },
            methods: {
                processFile: function(t, e) {
                    s.a.$emit("texture-changed", t, e)
                }
            }
        }
          , c = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "control-box",
                    class: {
                        open: t.isOpen,
                        closed: !t.isOpen
                    }
                }, [i("h2", {
                    on: {
                        click: function(e) {
                            t.isOpen = !t.isOpen
                        }
                    }
                }, [t._v("Textures")]), t._v(" "), i("span", {
                    staticClass: "triangle"
                }, [i("svg", {
                    attrs: {
                        width: "4px",
                        height: "6px",
                        viewBox: "0 0 4 6",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [i("g", {
                    attrs: {
                        id: "Page-1",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                    }
                }, [i("g", {
                    attrs: {
                        id: "MacBook-Pro-15in-Copy",
                        transform: "translate(-1275.000000, -8.000000)",
                        fill: "#D0021B"
                    }
                }, [i("polygon", {
                    attrs: {
                        id: "triangle",
                        transform: "translate(1275.828427, 10.828427) rotate(-45.000000) translate(-1275.828427, -10.828427) ",
                        points: "1277.37896 8.82842712 1277.82843 12.8284271 1273.82843 12.3789634"
                    }
                })])])])]), t._v(" "), i("div", {
                    staticClass: "texture-input"
                }, [i("label", {
                    attrs: {
                        for: "cover"
                    }
                }, [t._v("cover")]), t._v(" "), i("input", {
                    staticClass: "textures",
                    attrs: {
                        type: "file",
                        name: "cover",
                        id: "cover"
                    },
                    on: {
                        change: function(e) {
                            t.processFile(e, "cover")
                        }
                    }
                })]), t._v(" "), i("div", {
                    staticClass: "texture-input"
                }, [i("label", {
                    attrs: {
                        for: "back"
                    }
                }, [t._v("back")]), t._v(" "), i("input", {
                    staticClass: "textures",
                    attrs: {
                        type: "file",
                        name: "back",
                        id: "back"
                    },
                    on: {
                        change: function(e) {
                            t.processFile(e, "back")
                        }
                    }
                })]), t._v(" "), i("div", {
                    staticClass: "texture-input"
                }, [i("label", {
                    attrs: {
                        for: "spine"
                    }
                }, [t._v("spine")]), t._v(" "), i("input", {
                    staticClass: "textures",
                    attrs: {
                        type: "file",
                        name: "spine",
                        id: "spine"
                    },
                    on: {
                        change: function(e) {
                            t.processFile(e, "spine")
                        }
                    }
                })])])
            },
            staticRenderFns: []
        }
          , x = i("VU/8")(p, c, !1, null, null, null).exports
          , u = i("Zzkc")
          , m = {
            name: "Background",
            props: ["background"],
            components: {
                "chrome-picker": u.Chrome
            },
            data: function() {
                return {
                    isOpen: !1,
                    colors: this.background
                }
            },
            methods: {
                updateValue: function(t) {
                    s.a.$emit("background-changed", t)
                }
            }
        }
          , g = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "control-box textbox-control",
                    class: {
                        open: t.isOpen,
                        closed: !t.isOpen
                    }
                }, [i("h2", {
                    on: {
                        click: function(e) {
                            t.isOpen = !t.isOpen
                        }
                    }
                }, [t._v("Background")]), t._v(" "), i("span", {
                    staticClass: "triangle"
                }, [i("svg", {
                    attrs: {
                        width: "4px",
                        height: "6px",
                        viewBox: "0 0 4 6",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [i("g", {
                    attrs: {
                        id: "Page-1",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                    }
                }, [i("g", {
                    attrs: {
                        id: "MacBook-Pro-15in-Copy",
                        transform: "translate(-1275.000000, -8.000000)",
                        fill: "#D0021B"
                    }
                }, [i("polygon", {
                    attrs: {
                        id: "triangle",
                        transform: "translate(1275.828427, 10.828427) rotate(-45.000000) translate(-1275.828427, -10.828427) ",
                        points: "1277.37896 8.82842712 1277.82843 12.8284271 1273.82843 12.3789634"
                    }
                })])])])]), t._v(" "), i("chrome-picker", {
                    attrs: {
                        value: t.colors
                    },
                    on: {
                        input: t.updateValue
                    }
                })], 1)
            },
            staticRenderFns: []
        }
          , b = i("VU/8")(m, g, !1, null, null, null).exports
          , v = {
            name: "Animation",
            props: ["animation", "axis"],
            data: function() {
                return {
                    isOpen: !1,
                    xAxis: this.axis.x,
                    yAxis: this.axis.y,
                    zAxis: this.axis.z,
                    sliderDuration: this.animation.duration,
                    timing: this.animation.timing,
                    timingOptions: ["linear", "ease", "ease-in", "ease-out", "ease-in-out"],
                    currentAxis: this.animation.axis,
                    axisOptions: ["X", "Y", "Z"]
                }
            },
            watch: {
                sliderDuration: function() {
                    this.updateAnimation(this.sliderDuration, this.timing, this.currentAxis)
                },
                timing: function() {
                    this.updateAnimation(this.sliderDuration, this.timing, this.currentAxis)
                },
                currentAxis: function() {
                    this.updateAnimation(this.sliderDuration, this.timing, this.currentAxis)
                },
                xAxis: function() {
                    this.updateAxis(this.xAxis, this.yAxis, this.zAxis)
                },
                yAxis: function() {
                    this.updateAxis(this.xAxis, this.yAxis, this.zAxis)
                },
                zAxis: function() {
                    this.updateAxis(this.xAxis, this.yAxis, this.zAxis)
                }
            },
            methods: {
                updateAnimation: function(t, e, i) {
                    s.a.$emit("animation-changed", t, e, i)
                },
                updateAxis: function(t, e, i) {
                    s.a.$emit("axis-changed", t, e, i)
                },
                onAxisChange: function(t, e, i) {
                    this.xAxis = t,
                    this.yAxis = e,
                    this.zAxis = i
                }
            },
            created: function() {
                s.a.$on("axis-changed", this.onAxisChange)
            }
        }
          , f = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "control-box",
                    class: {
                        open: t.isOpen,
                        closed: !t.isOpen
                    }
                }, [i("h2", {
                    on: {
                        click: function(e) {
                            t.isOpen = !t.isOpen
                        }
                    }
                }, [t._v("Rotation")]), t._v(" "), i("span", {
                    staticClass: "triangle"
                }, [i("svg", {
                    attrs: {
                        width: "4px",
                        height: "6px",
                        viewBox: "0 0 4 6",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [i("g", {
                    attrs: {
                        id: "Page-1",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                    }
                }, [i("g", {
                    attrs: {
                        id: "MacBook-Pro-15in-Copy",
                        transform: "translate(-1275.000000, -8.000000)",
                        fill: "#D0021B"
                    }
                }, [i("polygon", {
                    attrs: {
                        id: "triangle",
                        transform: "translate(1275.828427, 10.828427) rotate(-45.000000) translate(-1275.828427, -10.828427) ",
                        points: "1277.37896 8.82842712 1277.82843 12.8284271 1273.82843 12.3789634"
                    }
                })])])])]), t._v(" "), i("div", {
                    staticClass: "dimension-input"
                }, [i("label", {
                    attrs: {
                        for: "width"
                    }
                }, [t._v("x-axis")]), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.xAxis,
                        expression: "xAxis"
                    }],
                    staticClass: "slider",
                    attrs: {
                        name: "width",
                        type: "range",
                        min: "-180",
                        max: "180",
                        step: "1"
                    },
                    domProps: {
                        value: t.xAxis
                    },
                    on: {
                        __r: function(e) {
                            t.xAxis = e.target.value
                        }
                    }
                }), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.xAxis,
                        expression: "xAxis"
                    }],
                    staticClass: "type-input",
                    attrs: {
                        type: "number",
                        name: "width-input",
                        tabindex: "5"
                    },
                    domProps: {
                        value: t.xAxis
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.xAxis = e.target.value)
                        }
                    }
                }), t._v(" "), i("span", [t._v("deg")])]), t._v(" "), i("div", {
                    staticClass: "dimension-input"
                }, [i("label", {
                    attrs: {
                        for: "width"
                    }
                }, [t._v("y-axis")]), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.yAxis,
                        expression: "yAxis"
                    }],
                    staticClass: "slider",
                    attrs: {
                        name: "width",
                        type: "range",
                        min: "-180",
                        max: "180",
                        step: "1"
                    },
                    domProps: {
                        value: t.yAxis
                    },
                    on: {
                        __r: function(e) {
                            t.yAxis = e.target.value
                        }
                    }
                }), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.yAxis,
                        expression: "yAxis"
                    }],
                    staticClass: "type-input",
                    attrs: {
                        type: "number",
                        name: "width-input",
                        tabindex: "6"
                    },
                    domProps: {
                        value: t.yAxis
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.yAxis = e.target.value)
                        }
                    }
                }), t._v(" "), i("span", [t._v("deg")])]), t._v(" "), i("div", {
                    staticClass: "dimension-input"
                }, [i("label", {
                    attrs: {
                        for: "width"
                    }
                }, [t._v("z-axis")]), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.zAxis,
                        expression: "zAxis"
                    }],
                    staticClass: "slider",
                    attrs: {
                        name: "width",
                        type: "range",
                        min: "-180",
                        max: "180",
                        step: "1"
                    },
                    domProps: {
                        value: t.zAxis
                    },
                    on: {
                        __r: function(e) {
                            t.zAxis = e.target.value
                        }
                    }
                }), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.zAxis,
                        expression: "zAxis"
                    }],
                    staticClass: "type-input",
                    attrs: {
                        type: "number",
                        name: "width-input",
                        tabindex: "7"
                    },
                    domProps: {
                        value: t.zAxis
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.zAxis = e.target.value)
                        }
                    }
                }), t._v(" "), i("span", [t._v("deg")])]), t._v(" "), i("div", {
                    staticClass: "dimension-input"
                }, [i("label", {
                    attrs: {
                        for: "width"
                    }
                }, [t._v("speed")]), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sliderDuration,
                        expression: "sliderDuration"
                    }],
                    staticClass: "slider",
                    attrs: {
                        name: "width",
                        type: "range",
                        min: "0",
                        max: "30",
                        step: "1"
                    },
                    domProps: {
                        value: t.sliderDuration
                    },
                    on: {
                        __r: function(e) {
                            t.sliderDuration = e.target.value
                        }
                    }
                }), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.sliderDuration,
                        expression: "sliderDuration"
                    }],
                    staticClass: "type-input",
                    attrs: {
                        type: "number",
                        name: "width-input",
                        tabindex: "8"
                    },
                    domProps: {
                        value: t.sliderDuration
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.sliderDuration = e.target.value)
                        }
                    }
                }), t._v(" "), i("span", [t._v("sec")])]), t._v(" "), i("span", {
                    staticClass: "subhead"
                }, [t._v("spin")]), t._v(" "), i("ul", {
                    staticClass: "dropdown"
                }, t._l(t.axisOptions, function(e, n) {
                    return i("li", {
                        key: n,
                        staticClass: "small",
                        class: {
                            active: e == t.currentAxis
                        },
                        on: {
                            click: function(i) {
                                t.currentAxis = e
                            }
                        }
                    }, [t._v(t._s(e))])
                })), t._v(" "), i("span", {
                    staticClass: "subhead"
                }, [t._v("animation timing")]), t._v(" "), i("ul", {
                    staticClass: "dropdown"
                }, t._l(t.timingOptions, function(e, n) {
                    return i("li", {
                        key: n,
                        class: {
                            active: e == t.timing
                        },
                        on: {
                            click: function(i) {
                                t.timing = e
                            }
                        }
                    }, [t._v(t._s(e))])
                }))])
            },
            staticRenderFns: []
        }
          , k = i("VU/8")(v, f, !1, null, null, null).exports
          , w = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "control-box textbox-control",
                    class: {
                        open: t.isOpen,
                        closed: !t.isOpen
                    }
                }, [i("h2", {
                    on: {
                        click: function(e) {
                            t.isOpen = !t.isOpen
                        }
                    }
                }, [t._v("Credits / About")]), t._v(" "), i("span", {
                    staticClass: "triangle"
                }, [i("svg", {
                    attrs: {
                        width: "4px",
                        height: "6px",
                        viewBox: "0 0 4 6",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink"
                    }
                }, [i("g", {
                    attrs: {
                        id: "Page-1",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                    }
                }, [i("g", {
                    attrs: {
                        id: "MacBook-Pro-15in-Copy",
                        transform: "translate(-1275.000000, -8.000000)",
                        fill: "#D0021B"
                    }
                }, [i("polygon", {
                    attrs: {
                        id: "triangle",
                        transform: "translate(1275.828427, 10.828427) rotate(-45.000000) translate(-1275.828427, -10.828427) ",
                        points: "1277.37896 8.82842712 1277.82843 12.8284271 1273.82843 12.3789634"
                    }
                })])])])]), t._v(" "), t._m(0)])
            },
            staticRenderFns: [function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    staticClass: "credits"
                }, [i("p", [t._v("This tool was built for "), i("a", {
                    staticClass: "external",
                    attrs: {
                        href: "http://nodeberlin.com/",
                        target: "_blank"
                    }
                }, [t._v("NODE Berlin Oslo")]), t._v(" to present book cover designs, now available for public use.")]), t._v(" "), i("p", [t._v("Book: "), i("br"), i("em", [t._v("Public Space? Lost and Found")]), t._v(" (MIT Press) designed by "), i("a", {
                    staticClass: "external",
                    attrs: {
                        href: "http://nodeberlin.com/",
                        target: "_blank"
                    }
                }, [t._v("NODE Berlin Oslo")])]), t._v(" "), i("p", [t._v("Development: "), i("br"), i("a", {
                    staticClass: "external",
                    attrs: {
                        href: "http://marco.land",
                        target: "_blank"
                    }
                }, [t._v("Marco Land")])]), t._v(" "), i("p", [i("a", {
                    attrs: {
                        href: "http://marco.land/imprint",
                        target: "_blank"
                    }
                }, [t._v("Imprint")])])])
            }
            ]
        }
          , _ = i("VU/8")({
            name: "Credits",
            data: function() {
                return {
                    isOpen: !1
                }
            }
        }, w, !1, null, null, null).exports
          , y = i("b6iv")
          , D = {
            render: function() {
                var t = this.$createElement
                  , e = this._self._c || t;
                return e("div", {
                    staticClass: "control-box textbox-control closed"
                }, [e("h2", {
                    on: {
                        click: this.exportHTML
                    }
                }, [this._v("Export as HTML/CSS")])])
            },
            staticRenderFns: []
        }
          , C = {
            name: "Controls",
            components: {
                Dimensions: h,
                Textures: x,
                Background: b,
                Animation: k,
                Credits: _,
                Export: i("VU/8")(y.a, D, !1, null, null, null).exports
            },
            props: ["width", "height", "depth", "scale", "cover", "back", "spine", "top", "side", "background", "animation", "axis"],
            data: function() {
                return {
                    controlsShow: !0
                }
            }
        }
          , A = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    class: {
                        hide: !t.controlsShow
                    },
                    attrs: {
                        id: "controls"
                    }
                }, [i("Dimensions", {
                    attrs: {
                        width: t.width,
                        height: t.height,
                        depth: t.depth,
                        scale: t.scale
                    }
                }), t._v(" "), i("Textures", {
                    attrs: {
                        cover: t.cover,
                        back: t.back,
                        spine: t.spine
                    }
                }), t._v(" "), i("Background", {
                    attrs: {
                        background: t.background
                    }
                }), t._v(" "), i("Animation", {
                    attrs: {
                        animation: t.animation,
                        axis: t.axis
                    }
                }), t._v(" "), i("Credits"), t._v(" "), i("Export", {
                    attrs: {
                        width: t.width,
                        height: t.height,
                        depth: t.depth,
                        scale: t.scale,
                        cover: t.cover,
                        back: t.back,
                        spine: t.spine,
                        top: t.top,
                        side: t.side,
                        background: t.background,
                        animation: t.animation,
                        axis: t.axis
                    }
                }), t._v(" "), i("div", {
                    staticClass: "control-box hide-button",
                    on: {
                        click: function(e) {
                            t.controlsShow = !t.controlsShow
                        }
                    }
                }, [t.controlsShow ? i("span", [t._v("Hide settings")]) : i("span", [t._v("Show settings")])])], 1)
            },
            staticRenderFns: []
        }
          , H = {
            name: "App",
            components: {
                Book: r,
                Controls: i("VU/8")(C, A, !1, null, null, null).exports
            },
            data: function() {
                return {
                    hasLoaded: !1,
                    background: {
                        r: "0",
                        g: "114",
                        b: "255",
                        a: "1"
                    },
                    width: 200,
                    height: 270,
                    depth: 29,
                    scale: 2,
                    cover: "/static/images/book-cover.jpg",
                    back: "/static/images/book-back.jpg",
                    spine: "/static/images/book-spine.jpg",
                    top: "/static/images/book-top.jpg",
                    side: "/static/images/book-side.jpg",
                    animation: {
                        duration: 10,
                        timing: "linear",
                        axis: "Y"
                    },
                    axis: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    mousedown: !1
                }
            },
            methods: {
                updateDimensions: function(t, e, i, n) {
                    this.width = t,
                    this.height = e,
                    this.depth = i,
                    this.scale = n
                },
                processFile: function(t, e) {
                    switch (e) {
                    case "cover":
                        this.cover = URL.createObjectURL(t.target.files[0]);
                        break;
                    case "back":
                        this.back = URL.createObjectURL(t.target.files[0]);
                        break;
                    default:
                        this.spine = URL.createObjectURL(t.target.files[0])
                    }
                },
                onBgChange: function(t) {
                    this.background = t.rgba
                },
                onAnimChange: function(t, e, i) {
                    this.animation.duration = t,
                    this.animation.timing = e,
                    this.animation.axis = i
                },
                onAxisChange: function(t, e, i) {
                    this.axis.x = t,
                    this.axis.y = e,
                    this.axis.z = i
                },
                onMousedownUp: function(t) {
                    this.mousedown = t
                }
            },
            created: function() {
                var t = this;
                window.addEventListener("DOMContentLoaded", function() {
                    setTimeout(function() {
                        t.hasLoaded = !0
                    }, 2e3)
                }, !0),
                s.a.$on("dimension-changed", this.updateDimensions),
                s.a.$on("texture-changed", this.processFile),
                s.a.$on("background-changed", this.onBgChange),
                s.a.$on("animation-changed", this.onAnimChange),
                s.a.$on("axis-changed", this.onAxisChange),
                s.a.$on("mousedown", this.onMousedownUp)
            }
        }
          , O = {
            render: function() {
                var t = this
                  , e = t.$createElement
                  , i = t._self._c || e;
                return i("div", {
                    class: {
                        mousedown: t.mousedown
                    },
                    style: {
                        "background-color": "rgba(" + t.background.r + ", " + t.background.g + ", " + t.background.b + ", " + t.background.a + " )"
                    },
                    attrs: {
                        id: "app"
                    }
                }, [i("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.hasLoaded ? t._e() : i("div", {
                    style: {
                        "background-color": "rgba(" + t.background.r + ", " + t.background.g + ", " + t.background.b + ", " + t.background.a + " )"
                    },
                    attrs: {
                        id: "preloader"
                    }
                }, [i("h1", [i("span", [t._v("·")]), i("span", [t._v("·")]), i("span", [t._v("·")])])])]), t._v(" "), t.hasLoaded ? i("Controls", {
                    attrs: {
                        width: t.width,
                        height: t.height,
                        depth: t.depth,
                        scale: t.scale,
                        cover: t.cover,
                        back: t.back,
                        spine: t.spine,
                        top: t.top,
                        side: t.side,
                        background: t.background,
                        animation: t.animation,
                        axis: t.axis
                    }
                }) : t._e(), t._v(" "), t.hasLoaded ? i("Book", {
                    attrs: {
                        width: t.width,
                        height: t.height,
                        depth: t.depth,
                        scale: t.scale,
                        cover: t.cover,
                        back: t.back,
                        spine: t.spine,
                        animation: t.animation,
                        axis: t.axis
                    }
                }) : t._e()], 1)
            },
            staticRenderFns: []
        };
        var W = i("VU/8")(H, O, !1, function(t) {
            i("cvKM")
        }, null, null).exports;
        n.a.config.productionTip = !1,
        n.a.config.devtools = !0,
        new n.a({
            el: "#app",
            components: {
                App: W
            },
            template: "<App/>"
        })
    },
    Usg1: function(t, e, i) {
        "use strict";
        i.d(e, "a", function() {
            return n
        });
        var n = new (i("7+uW").a)
    },
    b6iv: function(t, e, i) {
        "use strict";
        (function(t) {
            i("Usg1");
            var n = i("lDdF");
            i.n(n);
            e.a = {
                name: "Export",
                props: ["width", "height", "depth", "scale", "cover", "back", "spine", "top", "side", "background", "animation", "axis"],
                data: function() {
                    return {
                        html: '<!doctype html>\n\x3c!-- Created with http://boockup.marco.land --\x3e\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>Awesome book</title>\n  <meta name="description" content="Awesome book generated with boockup.marco.land">\n  <meta name="author" content="boockup.marco.land">\n  <link rel="stylesheet" href="css/boockup.css">\n</head>\n<body>\n  <div class="container">\n    <div class="boockup">\n      <div class="book-container">\n        <div class="book-front"></div>\n        <div class="book-side-left"></div>\n        <div class="book-side-right"></div>\n        <div class="book-top"></div>\n        <div class="book-bottom"></div>\n        <div class="book-back"></div>\n      </div>\n    </div>\n  </div>\n  <a href="http://boockup.marco.land"><div id="credit">Created with Boockup</div></a>\n</body>\n</html>'
                    }
                },
                computed: {
                    boxWidth: function() {
                        return this.width * this.scale
                    },
                    boxHeight: function() {
                        return this.height * this.scale
                    },
                    boxDepth: function() {
                        return this.depth * this.scale
                    },
                    axisStyleObject: function() {
                        return "rotateX(" + this.axis.x + "deg) rotateY(" + this.axis.y + "deg) rotateZ(" + this.axis.z + "deg)"
                    },
                    animationStyleObject: function() {
                        return this.animation.duration + "s rotatingAnimation" + this.animation.axis + " " + this.animation.timing + " infinite"
                    },
                    css: function() {
                        return "\n/* Created with http://boockup.marco.land */\n@-webkit-keyframes rotatingAnimationX {\n  0%{\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(360deg);\n            transform: rotateX(360deg);\n  }\n}\n@keyframes rotatingAnimationX {\n  0%{\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n  }\n  100% {\n    -webkit-transform: rotateX(360deg);\n            transform: rotateX(360deg);\n  }\n}\n@-webkit-keyframes rotatingAnimationY {\n  0%{\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n  }\n}\n@keyframes rotatingAnimationY {\n  0%{\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n  }\n  100% {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg);\n  }\n}\n@-webkit-keyframes rotatingAnimationZ {\n  0%{\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\n@keyframes rotatingAnimationZ {\n  0%{\n    -webkit-transform: rotateZ(0deg);\n            transform: rotateZ(0deg);\n  }\n  100% {\n    -webkit-transform: rotateZ(360deg);\n            transform: rotateZ(360deg);\n  }\n}\nhtml, body {\n  margin: 0;\n  padding: 0;\n  background-color: rgba(" + this.background.r + ", " + this.background.g + ", " + this.background.b + ", " + this.background.a + ");\n  font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n  color: #4a4a4a;\n  text-transform: uppercase;\n  font-size: 10px;\n  text-align: center;\n  letter-spacing: .1em;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\n.container {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  -webkit-perspective: 1200px;\n  perspective: 1200px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.container > div {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n}\n.boockup {\n  -webkit-transform: " + this.axisStyleObject + ";\n  transform: " + this.axisStyleObject + ";\n}\n.book-container {\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-animation: " + this.animationStyleObject + ";\n  animation: " + this.animationStyleObject + ";\n}\n.book-container > div {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-size: cover;\n  background-position: center center;\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n}\n.book-top, .book-bottom, .book-side-right {\n  background-size: auto auto;\n  background-repeat: repeat;\n  background-position: top left;\n}\n.book-front {\n  background-image: url('../images/book-cover.jpg');\n  width: " + this.boxWidth + "px;\n  height: " + this.boxHeight + "px;\n  -webkit-transform: translate3d(" + -.5 * this.boxWidth + "px ," + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(0,0,0) rotateY(0deg);\n  transform: translate3d(" + -.5 * this.boxWidth + "px ," + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(0,0,0) rotateY(0deg);\n}\n.book-side-left {\n  background-image: url('../images/book-spine.jpg');\n  width: " + this.boxDepth + "px;\n  height: " + this.boxHeight + "px;\n  -webkit-transform: translate3d(" + -.5 * this.boxWidth + "px ," + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(" + -.5 * this.boxDepth + "px, 0, " + -.5 * this.boxDepth + "px) rotateY(-90deg);\n  transform: translate3d(" + -.5 * this.boxWidth + "px ," + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(" + -.5 * this.boxDepth + "px, 0, " + -.5 * this.boxDepth + "px) rotateY(-90deg);\n}\n.book-side-right {\n  background-image: url('../images/book-side.jpg');\n  width: " + this.boxDepth + "px;\n  height: " + this.boxHeight + "px;\n  -webkit-transform: translate3d(" + -.5 * this.boxWidth + "px ," + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(" + (this.boxWidth - .5 * this.boxDepth) + "px, 0px," + -.5 * this.boxDepth + "px) rotateY(90deg);\n  transform: translate3d(" + -.5 * this.boxWidth + "px ," + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(" + (this.boxWidth - .5 * this.boxDepth) + "px, 0px," + -.5 * this.boxDepth + "px) rotateY(90deg);\n}\n.book-top {\n  background-image: url('../images/book-top.jpg');\n  background-position: bottom right;\n  width: " + this.boxWidth + "px;\n  height: " + this.boxDepth + "px;\n  -webkit-transform: translate3d(" + -.5 * this.boxWidth + "px, " + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(0px, " + -.5 * this.boxDepth + "px, " + .5 * -this.boxDepth + "px) rotateX(90deg);\n  transform: translate3d(" + -.5 * this.boxWidth + "px, " + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(0px, " + -.5 * this.boxDepth + "px, " + .5 * -this.boxDepth + "px) rotateX(90deg);\n}\n.book-bottom {\n  background-image: url('../images/book-top.jpg');\n  width: " + this.boxWidth + "px;\n  height: " + this.boxDepth + "px;\n  -webkit-transform: translate3d(" + -.5 * this.boxWidth + "px ," + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(0px, " + (this.boxHeight - .5 * this.boxDepth) + "px, " + -.5 * this.boxDepth + "px) rotateX(-90deg);\n  transform: translate3d(" + -.5 * this.boxWidth + "px ," + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(0px, " + (this.boxHeight - .5 * this.boxDepth) + "px, " + -.5 * this.boxDepth + "px) rotateX(-90deg);\n}\n.book-back {\n  background-image: url('../images/book-back.jpg');\n  width: " + this.boxWidth + "px;\n  height: " + this.boxHeight + "px;\n  -webkit-transform: translate3d(" + -.5 * this.boxWidth + "px ," + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(0,0, -" + this.boxDepth + "px) rotateY(180deg);\n  transform: translate3d(" + -.5 * this.boxWidth + "px ," + -.5 * this.boxHeight + "px ," + this.boxDepth / 2 + "px) translate3d(0,0, -" + this.boxDepth + "px) rotateY(180deg);\n}\n#credit {\n  position: fixed;\n  bottom: 1em;\n  right: 1em;\n  z-index: 99;\n  background-color: #fff;\n  border-radius: 8px;\n  box-sizing: border-box;\n  padding: .3rem 1rem;\n  width: 21rem;\n  height: 20px;\n  -webkit-transition: background .2s;\n  transition: background .2s;\n}\n#credit:hover {\n  background-color: #d8d8d8;\n}\n      "
                    }
                },
                methods: {
                    toDataUrl: function(e) {
                        return new t.external.Promise(function(t, i) {
                            var n = new XMLHttpRequest;
                            n.responseType = "blob",
                            n.onload = function() {
                                t(n.response)
                            }
                            ,
                            n.open("GET", e),
                            n.send()
                        }
                        )
                    },
                    exportHTML: function() {
                        var e = new t;
                        e.file("index.html", this.html),
                        e.file("css/boockup.css", this.css),
                        e.file("images/book-spine.jpg", this.toDataUrl(this.spine)),
                        e.file("images/book-cover.jpg", this.toDataUrl(this.cover)),
                        e.file("images/book-back.jpg", this.toDataUrl(this.back)),
                        e.file("images/book-top.jpg", this.toDataUrl(this.top)),
                        e.file("images/book-side.jpg", this.toDataUrl(this.side)),
                        e.generateAsync({
                            type: "blob"
                        }).then(function(t) {
                            Object(n.saveAs)(t, "Boockup.zip")
                        }, function(t) {
                            console.error("an error occurred", t)
                        })
                    }
                }
            }
        }
        ).call(e, i("WgY6"))
    },
    cvKM: function(t, e) {}
}, ["NHnr"]);
//# sourceMappingURL=app.509acb69906dc22f6f60.js.map
