/* @ds-bundle: {"format":3,"namespace":"ZENKaizenDesignSystem_4069b4","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Accordion","sourcePath":"components/data/Accordion.jsx"},{"name":"ListItem","sourcePath":"components/data/ListItem.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Table","sourcePath":"components/data/Table.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/icon-registry.js"},{"name":"ICONS","sourcePath":"components/icons/icon-registry.js"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Segmented","sourcePath":"components/navigation/Segmented.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Modal","sourcePath":"components/overlay/Modal.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"56a9fd0b4b1c","components/core/Badge.jsx":"3769e6aeda2e","components/core/Button.jsx":"cf692aa8fea5","components/core/Card.jsx":"e5e3c3f42e79","components/core/Divider.jsx":"6fb1bd490a42","components/core/IconButton.jsx":"746d29cfc082","components/core/Tag.jsx":"0398e25dd549","components/data/Accordion.jsx":"8af340630574","components/data/ListItem.jsx":"6f42e8fbacff","components/data/Stat.jsx":"e2a1604a2912","components/data/Table.jsx":"ddc52a77f82a","components/feedback/Alert.jsx":"b66f728aa5b1","components/feedback/Progress.jsx":"04315423db2f","components/feedback/Skeleton.jsx":"59d5cb63bc3b","components/feedback/Spinner.jsx":"f9d4d924aae6","components/feedback/Toast.jsx":"4dc50db326b4","components/feedback/Tooltip.jsx":"2341b47cd7fc","components/forms/Checkbox.jsx":"3faaf6693c22","components/forms/Input.jsx":"23a307c76547","components/forms/Radio.jsx":"e94df2ad8b02","components/forms/Select.jsx":"7634c8a0172b","components/forms/Slider.jsx":"e0bc161d9fcb","components/forms/Switch.jsx":"0802aa53bb8d","components/forms/Textarea.jsx":"33b7d290ddc4","components/icons/Icon.jsx":"e0c0ef7a3f42","components/icons/icon-registry.js":"737757033657","components/navigation/Breadcrumbs.jsx":"187a2b8eb0b0","components/navigation/Pagination.jsx":"be5d037d2c5d","components/navigation/Segmented.jsx":"9814ddf3741f","components/navigation/Tabs.jsx":"1f84695322c0","components/overlay/Modal.jsx":"a468e9bbee37","ui_kits/ai-chat/Chat.jsx":"58b83ef88124","ui_kits/console/Chrome.jsx":"dd8e71e9554e","ui_kits/console/Dashboard.jsx":"f7390cb1a1bf","ui_kits/console/Members.jsx":"91a61987645d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZENKaizenDesignSystem_4069b4 = window.ZENKaizenDesignSystem_4069b4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 48,
  xl: 64,
  "2xl": 96
};
const FS = {
  xs: 9,
  sm: 11,
  md: 14,
  lg: 18,
  xl: 24,
  "2xl": 36
};
const STATUS = {
  online: "var(--color-success)",
  away: "var(--color-warning)",
  busy: "var(--color-danger)",
  offline: "var(--gray-8)"
};
const PALETTE = ["var(--fpt-9)", "var(--blue-9)", "var(--green-9)", "var(--orange-9)", "var(--fpt-11)", "var(--gray-11)"];
function initials(name = "") {
  const p = name.trim().split(/\s+/);
  return ((p[0]?.[0] || "") + (p[1]?.[0] || "")).toUpperCase() || "?";
}
function hashColor(name = "") {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}

/** Avatar — user image with initials fallback, optional status dot. */
function Avatar({
  src,
  name = "",
  size = "md",
  shape = "circle",
  status,
  color,
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const radius = shape === "circle" ? "50%" : "calc(" + px + "px * 0.28)";
  const bg = color || hashColor(name);
  const dot = status ? Math.max(8, Math.round(px * 0.28)) : 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      width: px,
      height: px,
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: px,
      height: px,
      borderRadius: radius,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: src ? "var(--color-surface-sunken)" : bg,
      color: "var(--white)",
      fontFamily: "var(--font-sans)",
      fontSize: FS[size] || 14,
      fontWeight: 600,
      letterSpacing: "-0.02em",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials(name)), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -1,
      bottom: -1,
      width: dot,
      height: dot,
      borderRadius: "50%",
      background: STATUS[status] || STATUS.offline,
      border: "2px solid var(--color-surface)"
    }
  }));
}

/** AvatarGroup — overlapping stack with optional +N overflow. */
function AvatarGroup({
  items = [],
  size = "md",
  max = 4,
  style,
  ...rest
}) {
  const px = SIZES[size] || SIZES.md;
  const shown = items.slice(0, max);
  const extra = items.length - shown.length;
  const overlap = Math.round(px * 0.3);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, rest), shown.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -overlap,
      borderRadius: "50%",
      boxShadow: "0 0 0 2px var(--color-surface)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, _extends({}, it, {
    size: size
  })))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -overlap,
      width: px,
      height: px,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-surface-sunken)",
      color: "var(--color-text-muted)",
      fontFamily: "var(--font-sans)",
      fontSize: (FS[size] || 14) - 1,
      fontWeight: 600,
      boxShadow: "0 0 0 2px var(--color-surface)"
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: 16,
  md: 20,
  lg: 24
};

/** Card — surface container with optional hover-lift and selected state. */
function Card({
  children,
  padding = "md",
  interactive = false,
  selected = false,
  elevation = "sm",
  as = "div",
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const shadows = {
    none: "none",
    xs: "var(--shadow-xs)",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  const base = shadows[elevation] ?? shadows.sm;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--color-surface)",
      border: `1px solid ${selected ? "var(--color-accent)" : "var(--color-border-pale)"}`,
      borderRadius: "var(--radius-lg)",
      padding: typeof padding === "number" ? padding : PAD[padding] ?? PAD.md,
      boxShadow: selected ? "0 0 0 3px var(--color-accent-bg), var(--shadow-md)" : interactive && hover ? "var(--shadow-lg)" : base,
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base)",
      cursor: interactive ? "pointer" : "default",
      boxSizing: "border-box",
      color: "var(--color-text)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Divider — hairline rule, horizontal or vertical, with optional centered label. */
function Divider({
  orientation = "horizontal",
  label,
  inset = 0,
  style,
  ...rest
}) {
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", _extends({
      role: "separator",
      "aria-orientation": "vertical",
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: "var(--color-border)",
        margin: `${inset}px 0`,
        ...style
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "separator",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: `${inset}px 0`,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--color-border)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 600,
        color: "var(--color-text-subtle)",
        letterSpacing: "0.02em",
        textTransform: "uppercase"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--color-border)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    role: "separator",
    style: {
      border: "none",
      height: 1,
      background: "var(--color-border)",
      margin: `${inset}px 0`,
      width: "100%",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/data/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Table — lightweight data table. columns: [{key,header,align?,width?,render?}]. */
function Table({
  columns = [],
  data = [],
  rowKey,
  onRowClick,
  dense = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(-1);
  const pad = dense ? "8px 12px" : "13px 16px";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-base)",
      overflow: "hidden",
      background: "var(--color-surface)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--color-surface-alt)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: pad,
      width: c.width,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      color: "var(--color-text-subtle)",
      borderBottom: "1px solid var(--color-border)",
      whiteSpace: "nowrap"
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, data.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: rowKey ? row[rowKey] : i,
    onClick: onRowClick ? () => onRowClick(row, i) : undefined,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(-1),
    style: {
      background: hover === i && onRowClick ? "var(--color-surface-alt)" : "transparent",
      cursor: onRowClick ? "pointer" : "default"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: pad,
      fontSize: 14,
      color: "var(--color-text)",
      borderBottom: i === data.length - 1 ? "none" : "1px solid var(--color-border-pale)",
      verticalAlign: "middle"
    }
  }, c.render ? c.render(row[c.key], row, i) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Table.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Progress — linear or circular determinate/indeterminate progress. */
function Progress({
  value = 0,
  max = 100,
  variant = "linear",
  size = 48,
  thickness = 5,
  theme = "brand",
  showValue = false,
  indeterminate = false,
  style,
  ...rest
}) {
  const color = theme === "brand" ? "var(--color-accent)" : theme === "success" ? "var(--color-success)" : theme === "danger" ? "var(--color-danger)" : "var(--gray-12)";
  const pct = Math.max(0, Math.min(100, value / max * 100));
  if (variant === "circular") {
    const r = (size - thickness) / 2;
    const c = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        position: "relative",
        width: size,
        height: size,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      style: {
        transform: "rotate(-90deg)"
      }
    }, /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--color-surface-sunken)",
      strokeWidth: thickness
    }), /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: color,
      strokeWidth: thickness,
      strokeLinecap: "round",
      strokeDasharray: c,
      strokeDashoffset: indeterminate ? c * 0.7 : c * (1 - pct / 100),
      style: {
        transition: "stroke-dashoffset var(--dur-slow) var(--ease-standard)",
        animation: indeterminate ? "zen-rotate 1s linear infinite" : "none",
        transformOrigin: "center"
      }
    })), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontSize: size * 0.26,
        fontWeight: 600,
        color: "var(--color-text)"
      }
    }, Math.round(pct), "%"), /*#__PURE__*/React.createElement("style", null, "@keyframes zen-rotate{to{transform:rotate(360deg)}}"));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: thickness + 1,
      borderRadius: "var(--radius-full)",
      background: "var(--color-surface-sunken)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: indeterminate ? "40%" : `${pct}%`,
      borderRadius: "var(--radius-full)",
      background: color,
      transition: "width var(--dur-slow) var(--ease-standard)",
      animation: indeterminate ? "zen-indeterminate 1.2s var(--ease-standard) infinite" : "none"
    }
  })), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--color-text-muted)",
      alignSelf: "flex-end"
    }
  }, Math.round(pct), "%"), /*#__PURE__*/React.createElement("style", null, "@keyframes zen-indeterminate{0%{left:-40%}100%{left:100%}}"));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Skeleton — shimmering placeholder. shape: text | rect | circle. */
function Skeleton({
  shape = "rect",
  width,
  height,
  radius,
  lines = 1,
  style,
  ...rest
}) {
  const base = {
    background: "linear-gradient(90deg, var(--color-surface-sunken) 25%, var(--color-surface-alt) 37%, var(--color-surface-sunken) 63%)",
    backgroundSize: "400% 100%",
    animation: "zen-shimmer 1.4s ease infinite"
  };
  const css = /*#__PURE__*/React.createElement("style", null, "@keyframes zen-shimmer{0%{background-position:100% 0}100%{background-position:0 0}}");
  if (shape === "circle") {
    const d = width || height || 40;
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-block",
        width: d,
        height: d,
        borderRadius: "50%",
        ...base,
        ...style
      }
    }, rest), css);
  }
  if (shape === "text") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        ...style
      }
    }, rest), Array.from({
      length: lines
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        height: height || 12,
        width: i === lines - 1 && lines > 1 ? "60%" : "100%",
        borderRadius: "var(--radius-xs)",
        ...base
      }
    })), css);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "block",
      width: width || "100%",
      height: height || 80,
      borderRadius: radius || "var(--radius-base)",
      ...base,
      ...style
    }
  }, rest), css);
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Spinner — indeterminate circular loader. */
function Spinner({
  size = 24,
  thickness = 2.5,
  color = "currentColor",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-label": "Loading",
    style: {
      display: "inline-flex",
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      animation: "zen-spin 0.7s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: thickness,
    strokeOpacity: "0.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 0 1 9 9",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: thickness,
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("style", null, "@keyframes zen-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tooltip — hover/focus label on a wrapped trigger. */
function Tooltip({
  label,
  children,
  placement = "top",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement] || {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && label && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 50,
      ...pos,
      whiteSpace: "nowrap",
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      background: "var(--gray-12)",
      color: "var(--gray-1)",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.3,
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio — single radio control with optional label & description. */
function Radio({
  checked,
  defaultChecked,
  onChange,
  label,
  description,
  disabled = false,
  name,
  value,
  id,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const select = () => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(value ?? true);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      gap: 10,
      alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: on,
    onChange: select,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      flexShrink: 0,
      width: 20,
      height: 20,
      marginTop: description ? 1 : 0,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-surface)",
      border: `1.5px solid ${on ? "var(--color-accent)" : "var(--color-border-strong)"}`,
      transition: "border-color var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--color-accent)",
      transform: on ? "scale(1)" : "scale(0)",
      transition: "transform var(--dur-fast) var(--ease-emphasized)"
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--color-text)",
      lineHeight: 1.3
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--color-text-subtle)",
      lineHeight: 1.4
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Slider — single-value range with brand-filled track. */
function Slider({
  value,
  defaultValue = 0,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = false,
  format,
  disabled = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const v = isControlled ? value : internal;
  const pct = (v - min) / (max - min) * 100;
  const set = nv => {
    if (!isControlled) setInternal(nv);
    onChange && onChange(nv);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-sans)",
      fontSize: 14
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--color-text)"
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-text-muted)",
      fontVariantNumeric: "tabular-nums"
    }
  }, format ? format(v) : v)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: "var(--color-surface-sunken)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      width: `${pct}%`,
      height: 6,
      borderRadius: "var(--radius-full)",
      background: "var(--color-accent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: `calc(${pct}% - 9px)`,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "var(--white)",
      border: "2px solid var(--color-accent)",
      boxShadow: "var(--shadow-sm)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: "range",
    min: min,
    max: max,
    step: step,
    value: v,
    disabled: disabled,
    onChange: e => set(Number(e.target.value)),
    style: {
      width: "100%",
      margin: 0,
      opacity: 0,
      cursor: disabled ? "not-allowed" : "pointer",
      height: 20
    }
  }, rest))));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    w: 36,
    h: 20,
    knob: 14
  },
  md: {
    w: 44,
    h: 24,
    knob: 18
  }
};

/** Switch — on/off toggle with optional label. */
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  size = "md",
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const s = SIZES[size] || SIZES.md;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(v => !v);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      gap: 10,
      alignItems: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    role: "switch",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "relative",
      flexShrink: 0,
      width: s.w,
      height: s.h,
      borderRadius: "var(--radius-full)",
      background: on ? "var(--color-accent)" : "var(--color-border-strong)",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: (s.h - s.knob) / 2,
      left: on ? s.w - s.knob - (s.h - s.knob) / 2 : (s.h - s.knob) / 2,
      width: s.knob,
      height: s.knob,
      borderRadius: "50%",
      background: "var(--white)",
      boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
      transition: "left var(--dur-base) var(--ease-emphasized)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--color-text)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line text field with label, helper / error text. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  disabled = false,
  required = false,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  const invalid = !!error;
  const borderColor = invalid ? "var(--color-danger)" : focus ? "var(--color-accent)" : "var(--color-border)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--color-text)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    disabled: disabled,
    "aria-invalid": invalid,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      resize: "vertical",
      padding: "12px 14px",
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.5,
      color: "var(--color-text)",
      background: disabled ? "var(--color-surface-sunken)" : "var(--color-surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-base)",
      outline: "none",
      boxShadow: focus ? invalid ? "0 0 0 3px var(--color-danger-bg)" : "var(--shadow-focus)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: invalid ? "var(--color-danger-text)" : "var(--color-text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/icons/icon-registry.js
try { (() => {
// ZEN Kaizen icon path registry — extracted from the Figma icon set.
// Each entry is the inner SVG content for a 20x20 viewBox, painting with currentColor.
const ICONS = {
  "alert-circle-line": '<g transform="translate(0.833 0.833)"><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 9.167 1.667 C 5.025 1.667 1.667 5.025 1.667 9.167 C 1.667 13.309 5.025 16.667 9.167 16.667 C 13.309 16.667 16.667 13.309 16.667 9.167 C 16.667 5.025 13.309 1.667 9.167 1.667 Z M 9.167 11.25 C 9.857 11.25 10.417 11.81 10.417 12.5 C 10.417 13.19 9.857 13.75 9.167 13.75 C 8.476 13.75 7.917 13.19 7.917 12.5 C 7.917 11.81 8.476 11.25 9.167 11.25 Z M 10 10 L 8.333 10 L 8.333 4.583 L 10 4.583 L 10 10 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "alert-circle-solid": '<g transform="translate(0.833 0.833)"><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 9.167 11.25 C 8.476 11.25 7.917 11.81 7.917 12.5 C 7.917 13.19 8.476 13.75 9.167 13.75 C 9.857 13.75 10.417 13.19 10.417 12.5 C 10.417 11.81 9.857 11.25 9.167 11.25 Z M 8.333 10 L 10 10 L 10 4.583 L 8.333 4.583 L 8.333 10 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "alert-triangle-line": '<g transform="translate(0.64 1.25)"><path d="M 7.195 1.25 C 8.157 -0.417 10.562 -0.417 11.524 1.25 L 18.381 13.125 C 19.343 14.791 18.14 16.875 16.216 16.875 L 2.503 16.875 C 0.579 16.875 -0.623 14.791 0.339 13.125 L 7.195 1.25 Z M 10.081 2.083 C 9.761 1.528 8.959 1.528 8.638 2.083 L 1.781 13.958 C 1.461 14.514 1.862 15.208 2.503 15.208 L 16.216 15.208 C 16.857 15.208 17.258 14.514 16.938 13.958 L 10.081 2.083 Z M 9.36 10.833 C 10.05 10.833 10.61 11.393 10.61 12.083 C 10.61 12.773 10.05 13.333 9.36 13.333 C 8.669 13.333 8.11 12.773 8.11 12.083 C 8.11 11.393 8.669 10.833 9.36 10.833 Z M 10.193 9.583 L 8.526 9.583 L 8.526 5 L 10.193 5 L 10.193 9.583 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "arrow-down-line": '<g transform="translate(1.667 1.667)"><path d="M 9.167 13.822 L 15.488 7.5 L 16.667 8.678 L 8.923 16.423 C 8.597 16.748 8.07 16.748 7.744 16.423 L 0 8.678 L 1.178 7.5 L 7.5 13.822 L 7.5 0 L 9.167 0 L 9.167 13.822 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "arrow-left-line": '<g transform="translate(1.667 1.667)"><path d="M 9.167 1.178 L 2.845 7.5 L 16.667 7.5 L 16.667 9.167 L 2.845 9.167 L 9.167 15.488 L 7.988 16.667 L 0.244 8.923 C -0.081 8.597 -0.081 8.07 0.244 7.744 L 7.988 0 L 9.167 1.178 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "arrow-narrow-left-line": '<g transform="translate(1.667 3.333)"><path d="M 7.515 1.18 L 2.849 5.833 L 16.667 5.833 L 16.667 7.5 L 2.849 7.5 L 7.515 12.153 L 6.338 13.333 L 0.245 7.257 C 0.088 7.1 0 6.888 0 6.667 C 0 6.445 0.088 6.233 0.245 6.077 L 6.338 0 L 7.515 1.18 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "arrow-narrow-right-line": '<g transform="translate(1.667 3.333)"><path d="M 16.422 6.077 C 16.578 6.233 16.667 6.445 16.667 6.667 C 16.667 6.888 16.578 7.1 16.422 7.257 L 10.329 13.333 L 9.152 12.153 L 13.818 7.5 L 0 7.5 L 0 5.833 L 13.818 5.833 L 9.152 1.18 L 10.329 0 L 16.422 6.077 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "arrow-right-line": '<g transform="translate(1.667 1.667)"><path d="M 16.423 7.744 C 16.748 8.07 16.748 8.597 16.423 8.923 L 8.678 16.667 L 7.5 15.488 L 13.822 9.167 L 0 9.167 L 0 7.5 L 13.822 7.5 L 7.5 1.178 L 8.678 0 L 16.423 7.744 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "arrow-up-line": '<g transform="translate(1.667 1.667)"><path d="M 7.744 0.244 C 8.07 -0.081 8.597 -0.081 8.923 0.244 L 16.667 7.988 L 15.488 9.167 L 9.167 2.845 L 9.167 16.667 L 7.5 16.667 L 7.5 2.845 L 1.178 9.167 L 0 7.988 L 7.744 0.244 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "bar-chart-square-02-line": '<g transform="translate(1.667 1.667)"><path d="M 13.333 0 C 15.174 0 16.667 1.492 16.667 3.333 L 16.667 13.333 C 16.667 15.174 15.174 16.667 13.333 16.667 L 3.333 16.667 C 1.492 16.667 0 15.174 0 13.333 L 0 3.333 C 0 1.492 1.492 0 3.333 0 L 13.333 0 Z M 3.333 1.667 C 2.413 1.667 1.667 2.413 1.667 3.333 L 1.667 13.333 C 1.667 14.254 2.413 15 3.333 15 L 13.333 15 C 14.254 15 15 14.254 15 13.333 L 15 3.333 C 15 2.413 14.254 1.667 13.333 1.667 L 3.333 1.667 Z M 5.833 12.5 L 4.167 12.5 L 4.167 9.167 L 5.833 9.167 L 5.833 12.5 Z M 9.167 12.5 L 7.5 12.5 L 7.5 6.667 L 9.167 6.667 L 9.167 12.5 Z M 12.5 12.5 L 10.833 12.5 L 10.833 4.167 L 12.5 4.167 L 12.5 12.5 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "bell-01-line": '<g transform="translate(1.554 0.833)"><path d="M 8.446 0 C 12.128 0 15.112 2.985 15.112 6.667 L 15.112 10.164 L 16.609 12.409 C 17.347 13.516 16.553 15 15.222 15 L 11.779 15 C 11.779 16.841 10.287 18.333 8.446 18.333 C 6.605 18.333 5.112 16.841 5.112 15 L 1.669 15 C 0.338 15 -0.456 13.516 0.283 12.409 L 1.779 10.164 L 1.779 6.667 C 1.779 2.985 4.764 0 8.446 0 Z M 6.779 15 C 6.779 15.92 7.525 16.667 8.446 16.667 C 9.366 16.667 10.112 15.92 10.112 15 L 6.779 15 Z M 8.446 1.667 C 5.684 1.667 3.446 3.905 3.446 6.667 L 3.446 10.417 C 3.446 10.581 3.397 10.742 3.306 10.879 L 1.669 13.333 L 15.222 13.333 L 13.586 10.879 C 13.495 10.742 13.446 10.581 13.446 10.417 L 13.446 6.667 C 13.446 3.905 11.207 1.667 8.446 1.667 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "bell-01-solid": '<g transform="translate(1.554 0.833)"><path d="M 8.446 0 C 12.128 0 15.112 2.985 15.112 6.667 L 15.112 10.164 L 16.609 12.409 C 17.347 13.516 16.553 15 15.222 15 L 11.779 15 C 11.779 16.841 10.287 18.333 8.446 18.333 C 6.605 18.333 5.112 16.841 5.112 15 L 1.669 15 C 0.338 15 -0.456 13.516 0.283 12.409 L 1.779 10.164 L 1.779 6.667 C 1.779 2.985 4.764 0 8.446 0 Z M 6.779 15 C 6.779 15.92 7.525 16.667 8.446 16.667 C 9.366 16.667 10.112 15.92 10.112 15 L 6.779 15 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "building-02-line": '<g transform="translate(0.833 0.833)"><path d="M 12.083 6.667 L 6.25 6.667 L 6.25 5 L 12.083 5 L 12.083 6.667 Z" fill="currentColor" fill-rule="nonzero"/><path d="M 13.333 0 C 15.174 0 16.667 1.492 16.667 3.333 L 16.667 16.667 L 18.333 16.667 L 18.333 18.333 L 0 18.333 L 0 16.667 L 1.667 16.667 L 1.667 3.333 C 1.667 1.492 3.159 0 5 0 L 13.333 0 Z M 5 1.667 C 4.08 1.667 3.333 2.413 3.333 3.333 L 3.333 16.667 L 5.833 16.667 L 5.833 12.5 C 5.833 11.119 6.953 10 8.333 10 L 10 10 C 11.381 10 12.5 11.119 12.5 12.5 L 12.5 16.667 L 15 16.667 L 15 3.333 C 15 2.413 14.254 1.667 13.333 1.667 L 5 1.667 Z M 8.333 11.667 C 7.873 11.667 7.5 12.04 7.5 12.5 L 7.5 16.667 L 10.833 16.667 L 10.833 12.5 C 10.833 12.04 10.46 11.667 10 11.667 L 8.333 11.667 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "calendar-line": '<g transform="translate(1.667 0.833)"><path d="M 5.833 1.667 L 10.833 1.667 L 10.833 0 L 12.5 0 L 12.5 1.667 L 13.333 1.667 C 15.174 1.667 16.667 3.159 16.667 5 L 16.667 14.167 C 16.667 16.008 15.174 17.5 13.333 17.5 L 3.333 17.5 C 1.492 17.5 0 16.008 0 14.167 L 0 5 C 0 3.159 1.492 1.667 3.333 1.667 L 4.167 1.667 L 4.167 0 L 5.833 0 L 5.833 1.667 Z M 1.667 14.167 C 1.667 15.087 2.413 15.833 3.333 15.833 L 13.333 15.833 C 14.254 15.833 15 15.087 15 14.167 L 15 7.5 L 1.667 7.5 L 1.667 14.167 Z M 3.333 3.333 C 2.413 3.333 1.667 4.08 1.667 5 L 1.667 5.833 L 15 5.833 L 15 5 C 15 4.08 14.254 3.333 13.333 3.333 L 3.333 3.333 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "check-circle-line": '<g transform="translate(0.833 0.833)"><path d="M 14.268 7.399 L 8.923 12.744 C 8.597 13.069 8.07 13.07 7.744 12.744 L 4.583 9.583 L 5.762 8.405 L 8.333 10.977 L 13.089 6.221 L 14.268 7.399 Z" fill="currentColor" fill-rule="nonzero"/><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 9.167 1.667 C 5.025 1.667 1.667 5.025 1.667 9.167 C 1.667 13.309 5.025 16.667 9.167 16.667 C 13.309 16.667 16.667 13.309 16.667 9.167 C 16.667 5.025 13.309 1.667 9.167 1.667 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "check-circle-solid": '<g transform="translate(0.833 0.833)"><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 8.333 10.977 L 5.762 8.405 L 4.583 9.583 L 7.744 12.744 C 8.07 13.07 8.597 13.069 8.923 12.744 L 14.268 7.399 L 13.089 6.221 L 8.333 10.977 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "check-line": '<g transform="translate(2.5 5)"><path d="M 15 1.183 L 6.357 9.762 C 6.032 10.085 5.507 10.085 5.182 9.762 L 0 4.62 L 1.174 3.437 L 5.769 7.996 L 13.826 0 L 15 1.183 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "chevron-down-line": '<g transform="translate(5 7.5)"><path d="M 10 1.179 L 5.589 5.589 C 5.264 5.915 4.736 5.915 4.411 5.589 L 0 1.179 L 1.179 0 L 5 3.822 L 8.822 0 L 10 1.179 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "chevron-left-01-line": '<g transform="translate(6.667 5.833)"><path d="M 4.084 0.143 C 4.422 -0.162 5 0.054 5 0.486 L 5 7.847 C 5 8.279 4.422 8.495 4.084 8.19 L 0.262 4.738 C -0.087 4.422 -0.087 3.91 0.262 3.594 L 4.084 0.143 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "chevron-right-01-line": '<g transform="translate(8.333 5.833)"><path d="M 0 0.486 C 0 0.054 0.579 -0.162 0.917 0.143 L 4.738 3.595 C 5.088 3.91 5.087 4.422 4.738 4.738 L 0.917 8.19 C 0.579 8.496 0 8.279 0 7.847 L 0 0.486 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "chevron-selector-vertical-line": '<g transform="translate(0 0)"><path d="M 5.833 1.178 L 2.012 5 L 5.833 8.822 L 4.655 10 L 0.244 5.589 C -0.081 5.264 -0.081 4.736 0.244 4.411 L 4.655 0 L 5.833 1.178 Z M 14.756 4.411 C 15.081 4.736 15.081 5.264 14.756 5.589 L 10.345 10 L 9.167 8.822 L 12.988 5 L 9.167 1.178 L 10.345 0 L 14.756 4.411 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "chevron-up-line": '<g transform="translate(5 6.667)"><path d="M 4.411 0.244 C 4.736 -0.081 5.264 -0.081 5.589 0.244 L 10 4.655 L 8.822 5.833 L 5 2.012 L 1.178 5.833 L 0 4.655 L 4.411 0.244 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "clock-line": '<g transform="translate(0.833 0.833)"><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 9.167 1.667 C 5.025 1.667 1.667 5.025 1.667 9.167 C 1.667 13.309 5.025 16.667 9.167 16.667 C 13.309 16.667 16.667 13.309 16.667 9.167 C 16.667 5.025 13.309 1.667 9.167 1.667 Z M 9.583 9.238 L 12.083 11.738 L 10.905 12.917 L 8.161 10.173 C 8.005 10.016 7.917 9.804 7.917 9.583 L 7.917 5 L 9.583 5 L 9.583 9.238 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "dots-grid-line": '<g transform="translate(2.5 2.5)"><path d="M 0 1.667 C 0 0.746 0.746 0 1.667 0 C 2.587 0 3.333 0.746 3.333 1.667 C 3.333 2.587 2.587 3.333 1.667 3.333 C 0.746 3.333 0 2.587 0 1.667 Z M 5.833 1.667 C 5.833 0.746 6.58 0 7.5 0 C 8.42 0 9.167 0.746 9.167 1.667 C 9.167 2.587 8.42 3.333 7.5 3.333 C 6.58 3.333 5.833 2.587 5.833 1.667 Z M 11.667 1.667 C 11.667 0.746 12.413 0 13.333 0 C 14.254 0 15 0.746 15 1.667 C 15 2.587 14.254 3.333 13.333 3.333 C 12.413 3.333 11.667 2.587 11.667 1.667 Z M 0 7.5 C 0 6.58 0.746 5.833 1.667 5.833 C 2.587 5.833 3.333 6.58 3.333 7.5 C 3.333 8.42 2.587 9.167 1.667 9.167 C 0.746 9.167 0 8.42 0 7.5 Z M 5.833 7.5 C 5.833 6.58 6.58 5.833 7.5 5.833 C 8.42 5.833 9.167 6.58 9.167 7.5 C 9.167 8.42 8.42 9.167 7.5 9.167 C 6.58 9.167 5.833 8.42 5.833 7.5 Z M 11.667 7.5 C 11.667 6.58 12.413 5.833 13.333 5.833 C 14.254 5.833 15 6.58 15 7.5 C 15 8.42 14.254 9.167 13.333 9.167 C 12.413 9.167 11.667 8.42 11.667 7.5 Z M 0 13.333 C 0 12.413 0.746 11.667 1.667 11.667 C 2.587 11.667 3.333 12.413 3.333 13.333 C 3.333 14.254 2.587 15 1.667 15 C 0.746 15 0 14.254 0 13.333 Z M 5.833 13.333 C 5.833 12.413 6.58 11.667 7.5 11.667 C 8.42 11.667 9.167 12.413 9.167 13.333 C 9.167 14.254 8.42 15 7.5 15 C 6.58 15 5.833 14.254 5.833 13.333 Z M 11.667 13.333 C 11.667 12.413 12.413 11.667 13.333 11.667 C 14.254 11.667 15 12.413 15 13.333 C 15 14.254 14.254 15 13.333 15 C 12.413 15 11.667 14.254 11.667 13.333 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "dots-horizontal-line": '<g transform="translate(2.5 8.333)"><path d="M 0 1.667 C 0 0.746 0.746 0 1.667 0 C 2.587 0 3.333 0.746 3.333 1.667 C 3.333 2.587 2.587 3.333 1.667 3.333 C 0.746 3.333 0 2.587 0 1.667 Z M 5.833 1.667 C 5.833 0.746 6.58 0 7.5 0 C 8.42 0 9.167 0.746 9.167 1.667 C 9.167 2.587 8.42 3.333 7.5 3.333 C 6.58 3.333 5.833 2.587 5.833 1.667 Z M 11.667 1.667 C 11.667 0.746 12.413 0 13.333 0 C 14.254 0 15 0.746 15 1.667 C 15 2.587 14.254 3.333 13.333 3.333 C 12.413 3.333 11.667 2.587 11.667 1.667 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "dots-vertical-line": '<g transform="translate(8.333 2.5)"><path d="M 0 1.667 C 0 0.746 0.746 0 1.667 0 C 2.587 0 3.333 0.746 3.333 1.667 C 3.333 2.587 2.587 3.333 1.667 3.333 C 0.746 3.333 0 2.587 0 1.667 Z M 0 7.5 C 0 6.58 0.746 5.833 1.667 5.833 C 2.587 5.833 3.333 6.58 3.333 7.5 C 3.333 8.42 2.587 9.167 1.667 9.167 C 0.746 9.167 0 8.42 0 7.5 Z M 0 13.333 C 0 12.413 0.746 11.667 1.667 11.667 C 2.587 11.667 3.333 12.413 3.333 13.333 C 3.333 14.254 2.587 15 1.667 15 C 0.746 15 0 14.254 0 13.333 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "download-01-line": '<g transform="translate(1.667 2.5)"><path d="M 1.667 11.667 C 1.667 12.587 2.413 13.333 3.333 13.333 L 13.333 13.333 C 14.254 13.333 15 12.587 15 11.667 L 15 9.167 L 16.667 9.167 L 16.667 11.667 C 16.667 13.508 15.174 15 13.333 15 L 3.333 15 C 1.492 15 0 13.508 0 11.667 L 0 9.167 L 1.667 9.167 L 1.667 11.667 Z" fill="currentColor" fill-rule="nonzero"/><path d="M 9.167 7.988 L 12.5 4.655 L 13.678 5.833 L 8.923 10.589 C 8.597 10.915 8.07 10.915 7.744 10.589 L 2.988 5.833 L 4.167 4.655 L 7.5 7.988 L 7.5 0 L 9.167 0 L 9.167 7.988 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "edit-01-line": '<g transform="translate(1.667 1.667)"><path d="M 9.167 0 L 9.167 1.667 L 3.333 1.667 C 2.413 1.667 1.667 2.413 1.667 3.333 L 1.667 13.333 C 1.667 14.254 2.413 15 3.333 15 L 13.333 15 C 14.254 15 15 14.254 15 13.333 L 15 7.5 L 16.667 7.5 L 16.667 13.333 C 16.667 15.174 15.174 16.667 13.333 16.667 L 3.333 16.667 C 1.492 16.667 0 15.174 0 13.333 L 0 3.333 C 0 1.492 1.492 0 3.333 0 L 9.167 0 Z" fill="currentColor" fill-rule="nonzero"/><path d="M 12.677 0.684 C 13.59 -0.228 15.07 -0.228 15.982 0.684 C 16.895 1.597 16.895 3.077 15.982 3.989 L 9.006 10.966 C 8.913 11.058 8.8 11.127 8.677 11.169 L 5.503 12.227 C 5.201 12.327 4.868 12.249 4.643 12.024 C 4.418 11.799 4.339 11.466 4.44 11.164 L 5.498 7.989 C 5.539 7.866 5.609 7.753 5.701 7.661 L 12.677 0.684 Z M 14.794 1.873 C 14.538 1.617 14.123 1.617 13.866 1.873 L 7.03 8.709 L 6.566 10.101 L 7.957 9.637 L 14.794 2.8 C 15.05 2.544 15.05 2.129 14.794 1.873 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "edit-01-solid": '<g transform="translate(1.667 1.667)"><path d="M 9.167 0 L 9.167 1.667 L 3.333 1.667 C 2.413 1.667 1.667 2.413 1.667 3.333 L 1.667 13.333 C 1.667 14.254 2.413 15 3.333 15 L 13.333 15 C 14.254 15 15 14.254 15 13.333 L 15 7.5 L 16.667 7.5 L 16.667 13.333 C 16.667 15.174 15.174 16.667 13.333 16.667 L 3.333 16.667 C 1.492 16.667 0 15.174 0 13.333 L 0 3.333 C 0 1.492 1.492 0 3.333 0 L 9.167 0 Z" fill="currentColor" fill-rule="nonzero"/><path d="M 12.677 0.684 C 13.59 -0.228 15.07 -0.228 15.982 0.684 C 16.895 1.597 16.895 3.077 15.982 3.989 L 9.006 10.966 C 8.913 11.058 8.8 11.127 8.677 11.169 L 5.503 12.227 C 5.201 12.327 4.868 12.249 4.643 12.024 C 4.418 11.799 4.339 11.466 4.44 11.164 L 5.498 7.989 C 5.539 7.866 5.609 7.753 5.701 7.661 L 12.677 0.684 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "eye-line": '<g transform="translate(0.833 2.917)"><path d="M 9.166 3.75 C 11.007 3.75 12.5 5.242 12.5 7.083 C 12.5 8.924 11.007 10.417 9.166 10.417 C 7.326 10.417 5.833 8.924 5.833 7.083 C 5.833 5.242 7.326 3.75 9.166 3.75 Z M 9.166 5.417 C 8.246 5.417 7.5 6.163 7.5 7.083 C 7.5 8.004 8.246 8.75 9.166 8.75 C 10.087 8.75 10.833 8.004 10.833 7.083 C 10.833 6.163 10.087 5.417 9.166 5.417 Z" fill="currentColor" fill-rule="evenodd"/><path d="M 0.06 6.774 C -0.019 6.972 -0.019 7.195 0.059 7.393 C -0.02 7.194 -0.02 6.973 0.06 6.774 Z" fill="currentColor" fill-rule="evenodd"/><path d="M 0.059 7.393 C -0.02 7.194 -0.02 6.973 0.06 6.774 C -0.019 6.972 -0.019 7.195 0.059 7.393 Z" fill="currentColor" fill-rule="evenodd"/><path d="M 0.06 6.774 C -0.019 6.972 -0.019 7.195 0.059 7.393 L 0.063 7.402 C 0.065 7.406 0.069 7.417 0.071 7.421 C 0.076 7.433 0.082 7.449 0.091 7.468 L 0.097 7.484 C 0.12 7.537 0.153 7.611 0.197 7.704 C 0.284 7.891 0.413 8.152 0.587 8.464 C 0.932 9.087 1.458 9.919 2.182 10.754 C 3.626 12.421 5.92 14.167 9.166 14.167 C 12.412 14.167 14.706 12.421 16.15 10.754 C 16.874 9.919 17.401 9.087 17.746 8.464 C 17.92 8.152 18.049 7.891 18.136 7.704 C 18.18 7.611 18.213 7.537 18.235 7.484 L 18.242 7.468 L 18.256 7.435 L 18.262 7.421 C 18.264 7.417 18.268 7.406 18.27 7.402 L 18.274 7.393 C 18.353 7.194 18.352 6.971 18.273 6.772 L 18.27 6.764 C 18.268 6.76 18.265 6.753 18.262 6.746 C 18.257 6.734 18.251 6.718 18.243 6.699 L 18.235 6.683 C 18.213 6.63 18.18 6.556 18.136 6.462 C 18.049 6.276 17.92 6.014 17.746 5.702 C 17.401 5.08 16.874 4.248 16.15 3.412 C 14.706 1.746 12.412 0 9.166 0 C 5.92 0 3.626 1.746 2.182 3.412 C 1.458 4.248 0.932 5.08 0.587 5.702 C 0.413 6.014 0.284 6.276 0.197 6.462 C 0.153 6.556 0.12 6.63 0.097 6.683 L 0.09 6.699 C 0.082 6.718 0.076 6.734 0.071 6.746 C 0.069 6.75 0.065 6.761 0.063 6.764 L 0.06 6.774 Z M 3.442 4.504 C 4.706 3.046 6.579 1.667 9.166 1.667 C 11.754 1.667 13.626 3.046 14.891 4.504 C 15.521 5.231 15.984 5.962 16.29 6.511 C 16.416 6.739 16.513 6.935 16.584 7.083 C 16.513 7.232 16.416 7.428 16.29 7.655 C 15.984 8.205 15.521 8.935 14.891 9.662 C 13.626 11.121 11.754 12.5 9.166 12.5 C 6.579 12.5 4.706 11.121 3.442 9.662 C 2.812 8.935 2.349 8.205 2.043 7.655 C 1.917 7.428 1.819 7.232 1.748 7.083 C 1.819 6.935 1.917 6.739 2.043 6.511 C 2.349 5.962 2.812 5.231 3.442 4.504 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "eye-off-line": '<g transform="translate(0.835 2.218)"><path d="M 0.09 8.167 C 0.087 8.16 0.084 8.153 0.081 8.147 Z M 0.065 8.108 C 0.064 8.106 0.066 8.11 0.065 8.108 Z" fill="currentColor" fill-rule="evenodd"/><path d="M 18.273 8.091 C 18.351 7.894 18.351 7.671 18.273 7.473 C 18.352 7.672 18.352 7.893 18.273 8.091 Z" fill="currentColor" fill-rule="evenodd"/><path d="M 16.15 4.111 C 14.706 2.445 12.412 0.699 9.166 0.699 C 8.075 0.699 7.091 0.896 6.212 1.222 L 7.546 2.556 C 8.052 2.434 8.591 2.366 9.166 2.366 C 11.753 2.366 13.626 3.745 14.89 5.203 C 15.52 5.93 15.984 6.661 16.289 7.21 C 16.416 7.438 16.512 7.634 16.584 7.782 C 16.512 7.931 16.416 8.127 16.289 8.354 C 16.019 8.841 15.624 9.468 15.1 10.11 L 16.283 11.293 C 16.938 10.512 17.422 9.746 17.746 9.163 C 17.919 8.852 18.049 8.59 18.136 8.403 C 18.179 8.31 18.212 8.236 18.235 8.183 L 18.242 8.167 C 18.25 8.148 18.257 8.132 18.262 8.12 C 18.264 8.115 18.266 8.111 18.267 8.107 C 18.268 8.105 18.266 8.108 18.267 8.107 C 18.268 8.105 18.273 8.091 18.273 8.091 C 18.352 7.893 18.352 7.672 18.273 7.473 L 18.269 7.463 C 18.268 7.461 18.27 7.466 18.269 7.463 C 18.268 7.46 18.264 7.449 18.262 7.445 C 18.255 7.429 18.246 7.408 18.235 7.382 C 18.212 7.329 18.179 7.254 18.136 7.161 C 18.049 6.975 17.919 6.713 17.746 6.401 C 17.4 5.779 16.874 4.947 16.15 4.111 Z" fill="currentColor" fill-rule="nonzero"/><path d="M 16.186 15.91 L 17.364 14.731 L 2.633 0 L 1.454 1.178 L 3.278 3.002 C 2.869 3.362 2.505 3.739 2.182 4.111 C 1.458 4.947 0.932 5.779 0.586 6.401 C 0.413 6.713 0.283 6.975 0.196 7.161 C 0.153 7.254 0.12 7.329 0.097 7.382 L 0.09 7.398 C 0.082 7.417 0.075 7.433 0.07 7.445 C 0.068 7.449 0.067 7.453 0.065 7.457 C 0.064 7.459 0.059 7.472 0.059 7.472 C -0.02 7.671 -0.02 7.895 0.059 8.093 L 0.065 8.108 C 0.067 8.112 0.068 8.116 0.07 8.12 C 0.075 8.132 0.082 8.148 0.09 8.167 L 0.097 8.183 C 0.12 8.236 0.153 8.31 0.196 8.403 C 0.283 8.59 0.413 8.852 0.586 9.163 C 0.932 9.786 1.458 10.618 2.182 11.453 C 3.626 13.12 5.92 14.866 9.166 14.866 C 11.007 14.866 12.539 14.301 13.786 13.51 L 16.186 15.91 Z M 3.442 5.203 C 3.745 4.853 4.085 4.508 4.461 4.185 L 6.321 6.045 C 6.011 6.551 5.833 7.146 5.833 7.782 C 5.833 9.623 7.325 11.116 9.166 11.116 C 9.802 11.116 10.396 10.936 10.902 10.626 L 12.571 12.295 C 11.611 12.838 10.482 13.199 9.166 13.199 C 6.579 13.199 4.706 11.82 3.442 10.361 C 2.812 9.634 2.348 8.904 2.043 8.354 C 1.916 8.127 1.819 7.931 1.747 7.782 C 1.819 7.634 1.916 7.438 2.043 7.21 C 2.348 6.661 2.812 5.93 3.442 5.203 Z M 7.499 7.782 C 7.499 7.613 7.525 7.45 7.572 7.296 L 9.651 9.375 C 9.497 9.422 9.335 9.449 9.166 9.449 C 8.245 9.449 7.499 8.703 7.499 7.782 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "file-check-line": '<g transform="translate(2.5 0.833)"><path d="M 8.132 0 C 9.015 0 9.863 0.352 10.488 0.977 L 14.023 4.512 C 14.648 5.137 15 5.985 15 6.868 L 15 10.833 L 13.333 10.833 L 13.333 6.868 C 13.333 6.801 13.328 6.733 13.319 6.667 L 11.667 6.667 C 9.826 6.667 8.333 5.174 8.333 3.333 L 8.333 1.68 C 8.267 1.672 8.199 1.667 8.132 1.667 L 3.333 1.667 C 2.413 1.667 1.667 2.413 1.667 3.333 L 1.667 15 C 1.667 15.92 2.413 16.667 3.333 16.667 L 5.833 16.667 L 5.833 18.333 L 3.333 18.333 C 1.492 18.333 0 16.841 0 15 L 0 3.333 C 0 1.492 1.492 0 3.333 0 L 8.132 0 Z M 16.667 13.678 L 12.256 18.089 C 11.93 18.415 11.403 18.415 11.077 18.089 L 8.333 15.345 L 9.512 14.167 L 11.667 16.322 L 15.488 12.5 L 16.667 13.678 Z M 10 3.333 C 10 4.254 10.746 5 11.667 5 L 12.155 5 L 10 2.845 L 10 3.333 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "file-doc-line": '<g transform="translate(2.5 0.833)"><path d="M 8.132 0 C 9.015 0 9.863 0.352 10.488 0.977 L 14.023 4.512 C 14.648 5.137 15 5.985 15 6.868 L 15 15 C 15 16.841 13.508 18.333 11.667 18.333 L 3.333 18.333 C 1.492 18.333 0 16.841 0 15 L 0 3.333 C 0 1.492 1.492 0 3.333 0 L 8.132 0 Z M 3.333 1.667 C 2.413 1.667 1.667 2.413 1.667 3.333 L 1.667 15 C 1.667 15.92 2.413 16.667 3.333 16.667 L 11.667 16.667 C 12.587 16.667 13.333 15.92 13.333 15 L 13.333 6.868 C 13.333 6.801 13.328 6.733 13.319 6.667 L 11.667 6.667 C 9.826 6.667 8.333 5.174 8.333 3.333 L 8.333 1.68 C 8.267 1.672 8.199 1.667 8.132 1.667 L 3.333 1.667 Z M 9.167 14.167 L 3.333 14.167 L 3.333 12.5 L 9.167 12.5 L 9.167 14.167 Z M 11.667 10.833 L 3.333 10.833 L 3.333 9.167 L 11.667 9.167 L 11.667 10.833 Z M 6.667 7.5 L 3.333 7.5 L 3.333 5.833 L 6.667 5.833 L 6.667 7.5 Z M 10 3.333 C 10 4.254 10.746 5 11.667 5 L 12.155 5 L 10 2.845 L 10 3.333 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "filter-funnel-line": '<g transform="translate(1.667 1.667)"><path d="M 15 0 C 15.92 0 16.667 0.746 16.667 1.667 L 16.667 3.072 C 16.667 4.002 16.278 4.891 15.594 5.522 L 11.25 9.531 L 11.25 13.666 C 11.25 14.282 10.91 14.848 10.367 15.138 L 7.867 16.47 C 6.757 17.061 5.417 16.257 5.417 14.999 L 5.417 9.531 L 1.073 5.522 C 0.389 4.891 0 4.002 0 3.072 L 0 1.667 C 0 0.746 0.746 0 1.667 0 L 15 0 Z M 1.667 3.072 C 1.667 3.537 1.861 3.981 2.203 4.297 L 6.816 8.555 C 6.986 8.712 7.083 8.934 7.083 9.167 L 7.083 14.999 L 9.583 13.666 L 9.583 9.167 C 9.583 8.934 9.68 8.712 9.851 8.555 L 14.464 4.297 C 14.806 3.981 15 3.537 15 3.072 L 15 1.667 L 1.667 1.667 L 1.667 3.072 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "filter-lines-line": '<g transform="translate(1.667 4.167)"><path d="M 16.667 0 L 0 0 L 0 1.667 L 16.667 1.667 L 16.667 0 Z M 13.333 5 L 3.333 5 L 3.333 6.667 L 13.333 6.667 L 13.333 5 Z M 10.833 10 L 5.833 10 L 5.833 11.667 L 10.833 11.667 L 10.833 10 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "folder-line": '<g transform="translate(0.833 1.667)"><path d="M 7.083 0 C 8.132 0 9.121 0.494 9.75 1.333 L 10.75 2.667 C 11.065 3.086 11.559 3.333 12.083 3.333 L 15 3.333 C 16.841 3.333 18.333 4.826 18.333 6.667 L 18.333 13.333 C 18.333 15.174 16.841 16.667 15 16.667 L 3.333 16.667 C 1.492 16.667 0 15.174 0 13.333 L 0 3.333 C 0 1.492 1.492 0 3.333 0 L 7.083 0 Z M 1.667 5 L 1.667 13.333 C 1.667 14.254 2.413 15 3.333 15 L 15 15 C 15.92 15 16.667 14.254 16.667 13.333 L 16.667 6.667 C 16.667 5.746 15.92 5 15 5 L 1.667 5 Z M 3.333 1.667 C 2.413 1.667 1.667 2.413 1.667 3.333 L 9.167 3.333 L 8.416 2.333 C 8.102 1.914 7.608 1.667 7.083 1.667 L 3.333 1.667 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "globe-01-line": '<g transform="translate(0.833 0.833)"><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 9.167 12.5 C 8.143 12.5 7.17 12.58 6.273 12.723 C 6.487 13.535 6.768 14.253 7.094 14.85 C 7.876 16.283 8.682 16.667 9.167 16.667 C 9.652 16.667 10.458 16.283 11.239 14.85 C 11.565 14.253 11.846 13.534 12.06 12.723 C 11.163 12.581 10.19 12.5 9.167 12.5 Z M 4.643 13.072 C 4.086 13.225 3.576 13.405 3.122 13.605 C 3.807 14.537 4.703 15.303 5.739 15.837 C 5.286 15.053 4.912 14.117 4.643 13.072 Z M 13.69 13.072 C 13.421 14.117 13.047 15.053 12.594 15.837 C 13.63 15.303 14.525 14.537 15.211 13.605 C 14.756 13.405 14.246 13.225 13.69 13.072 Z M 2.286 6.178 C 1.888 7.093 1.667 8.104 1.667 9.167 C 1.667 10.229 1.888 11.239 2.287 12.155 C 2.898 11.873 3.581 11.629 4.32 11.431 C 4.22 10.707 4.167 9.948 4.167 9.167 C 4.167 8.385 4.22 7.626 4.32 6.901 C 3.58 6.704 2.897 6.46 2.286 6.178 Z M 16.046 6.178 C 15.435 6.46 14.752 6.704 14.012 6.901 C 14.113 7.626 14.167 8.385 14.167 9.167 C 14.167 9.948 14.112 10.707 14.012 11.431 C 14.752 11.629 15.435 11.873 16.046 12.155 C 16.444 11.239 16.667 10.229 16.667 9.167 C 16.667 8.104 16.444 7.094 16.046 6.178 Z M 12.376 7.247 C 11.364 7.411 10.283 7.5 9.167 7.5 C 8.05 7.5 6.969 7.411 5.956 7.247 C 5.877 7.856 5.833 8.499 5.833 9.167 C 5.833 9.834 5.877 10.477 5.956 11.086 C 6.969 10.922 8.05 10.833 9.167 10.833 C 10.283 10.833 11.364 10.922 12.376 11.086 C 12.455 10.477 12.5 9.834 12.5 9.167 C 12.5 8.499 12.456 7.856 12.376 7.247 Z M 9.167 1.667 C 8.682 1.667 7.876 2.05 7.094 3.483 C 6.768 4.08 6.486 4.798 6.273 5.61 C 7.17 5.752 8.143 5.833 9.167 5.833 C 10.19 5.833 11.163 5.752 12.06 5.61 C 11.846 4.798 11.565 4.08 11.239 3.483 C 10.458 2.05 9.652 1.667 9.167 1.667 Z M 5.739 2.496 C 4.703 3.029 3.807 3.795 3.122 4.727 C 3.576 4.927 4.086 5.107 4.643 5.26 C 4.912 4.215 5.286 3.279 5.739 2.496 Z M 12.594 2.496 C 13.047 3.279 13.421 4.215 13.69 5.26 C 14.246 5.107 14.756 4.928 15.211 4.727 C 14.525 3.796 13.63 3.029 12.594 2.496 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "heart-line": '<g transform="translate(0.833 1.667)"><path d="M 9.579 1.571 C 11.513 -0.524 14.678 -0.524 16.611 1.571 C 19.114 4.284 18.597 7.685 16.918 10.461 C 15.245 13.228 12.31 15.616 9.443 16.619 C 9.264 16.682 9.07 16.682 8.892 16.619 C 6.025 15.616 3.089 13.228 1.416 10.461 C -0.263 7.685 -0.781 4.284 1.722 1.571 C 3.656 -0.524 6.82 -0.524 8.754 1.571 L 9.167 2.018 L 9.579 1.571 Z M 15.387 2.702 C 14.113 1.322 12.078 1.322 10.804 2.702 L 9.78 3.813 C 9.45 4.17 8.885 4.17 8.555 3.813 L 7.529 2.702 C 6.256 1.322 4.22 1.322 2.947 2.702 C 1.148 4.651 1.368 7.161 2.842 9.599 C 4.267 11.956 6.761 14.018 9.167 14.945 C 11.573 14.018 14.067 11.956 15.492 9.599 C 16.965 7.161 17.185 4.651 15.387 2.702 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "heart-solid": '<g transform="translate(0.833 1.667)"><path d="M 9.579 1.571 C 11.513 -0.524 14.678 -0.524 16.611 1.571 C 19.114 4.284 18.597 7.685 16.918 10.461 C 15.245 13.228 12.31 15.616 9.443 16.619 C 9.264 16.682 9.07 16.682 8.892 16.619 C 6.025 15.616 3.089 13.228 1.416 10.461 C -0.263 7.685 -0.781 4.284 1.722 1.571 C 3.656 -0.524 6.82 -0.524 8.754 1.571 L 9.167 2.018 L 9.579 1.571 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "home-01-line": '<g transform="translate(1.667 1.084)"><path d="M 6.287 0.702 C 7.49 -0.234 9.176 -0.234 10.38 0.702 L 15.38 4.591 C 16.192 5.222 16.667 6.193 16.667 7.222 L 16.667 13.916 C 16.667 15.757 15.174 17.249 13.333 17.249 L 3.333 17.249 C 1.492 17.249 0 15.757 0 13.916 L 0 7.222 C 0 6.193 0.475 5.222 1.287 4.591 L 6.287 0.702 Z M 9.356 2.017 C 8.755 1.549 7.912 1.549 7.31 2.017 L 2.31 5.906 C 1.905 6.222 1.667 6.707 1.667 7.222 L 1.667 13.916 C 1.667 14.836 2.413 15.583 3.333 15.583 L 13.333 15.583 C 14.254 15.583 15 14.836 15 13.916 L 15 7.222 C 15 6.707 14.762 6.222 14.356 5.906 L 9.356 2.017 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "home-01-solid": '<g transform="translate(1.667 1.084)"><path d="M 6.287 0.702 C 7.49 -0.234 9.176 -0.234 10.38 0.702 L 15.38 4.591 C 16.192 5.222 16.667 6.193 16.667 7.222 L 16.667 13.916 C 16.667 15.757 15.174 17.249 13.333 17.249 L 3.333 17.249 C 1.492 17.249 0 15.757 0 13.916 L 0 7.222 C 0 6.193 0.475 5.222 1.287 4.591 L 6.287 0.702 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "home-03-solid": '<g transform="translate(0.324 1.077)"><path d="M 7.638 0.695 C 8.839 -0.232 10.514 -0.232 11.714 0.695 L 19.352 6.598 L 18.333 7.916 L 18.009 7.666 L 18.009 13.924 C 18.009 15.764 16.517 17.257 14.676 17.257 L 4.676 17.257 C 2.835 17.257 1.343 15.764 1.343 13.924 L 1.343 7.666 L 1.019 7.916 L 0 6.598 L 7.638 0.695 Z M 9.676 9.549 C 8.18 9.549 6.968 10.761 6.968 12.257 L 6.968 15.59 L 12.384 15.59 L 12.384 12.257 C 12.384 10.761 11.172 9.549 9.676 9.549 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "image-line": '<g transform="translate(1.667 1.667)"><path d="M 13.333 0 C 15.174 0 16.667 1.492 16.667 3.333 L 16.667 13.333 C 16.667 15.174 15.174 16.667 13.333 16.667 L 3.333 16.667 C 1.492 16.667 0 15.174 0 13.333 L 0 3.333 C 0 1.492 1.492 0 3.333 0 L 13.333 0 Z M 6.104 15 L 13.333 15 C 14.254 15 15 14.254 15 13.333 L 15 11.267 L 11.777 9.011 L 6.104 15 Z M 3.333 1.667 C 2.413 1.667 1.667 2.413 1.667 3.333 L 1.667 13.333 C 1.667 14.254 2.413 15 3.333 15 L 3.809 15 L 10.567 7.865 C 11.135 7.266 12.057 7.172 12.734 7.646 L 15 9.233 L 15 3.333 C 15 2.413 14.254 1.667 13.333 1.667 L 3.333 1.667 Z M 5.833 3.333 C 7.214 3.333 8.333 4.453 8.333 5.833 C 8.333 7.214 7.214 8.333 5.833 8.333 C 4.453 8.333 3.333 7.214 3.333 5.833 C 3.333 4.453 4.453 3.333 5.833 3.333 Z M 5.833 5 C 5.373 5 5 5.373 5 5.833 C 5 6.294 5.373 6.667 5.833 6.667 C 6.294 6.667 6.667 6.294 6.667 5.833 C 6.667 5.373 6.294 5 5.833 5 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "info-circle-line": '<g transform="translate(0.833 0.833)"><path d="M 10 13.75 L 8.333 13.75 L 8.333 8.333 L 10 8.333 L 10 13.75 Z" fill="currentColor" fill-rule="nonzero"/><path d="M 9.167 4.583 C 9.857 4.583 10.417 5.143 10.417 5.833 C 10.417 6.524 9.857 7.083 9.167 7.083 C 8.476 7.083 7.917 6.524 7.917 5.833 C 7.917 5.143 8.476 4.583 9.167 4.583 Z" fill="currentColor" fill-rule="nonzero"/><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 9.167 1.667 C 5.025 1.667 1.667 5.025 1.667 9.167 C 1.667 13.309 5.025 16.667 9.167 16.667 C 13.309 16.667 16.667 13.309 16.667 9.167 C 16.667 5.025 13.309 1.667 9.167 1.667 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "info-circle-solid": '<g transform="translate(0.833 0.833)"><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 8.333 13.75 L 10 13.75 L 10 8.333 L 8.333 8.333 L 8.333 13.75 Z M 9.167 4.583 C 8.476 4.583 7.917 5.143 7.917 5.833 C 7.917 6.524 8.476 7.083 9.167 7.083 C 9.857 7.083 10.417 6.524 10.417 5.833 C 10.417 5.143 9.857 4.583 9.167 4.583 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "lock-01-line": '<g transform="translate(1.667 0.833)"><path d="M 8.333 0 C 11.095 0 13.333 2.239 13.333 5 L 13.333 5.833 C 15.174 5.833 16.667 7.326 16.667 9.167 L 16.667 15 C 16.667 16.841 15.174 18.333 13.333 18.333 L 3.333 18.333 C 1.492 18.333 0 16.841 0 15 L 0 9.167 C 0 7.326 1.492 5.833 3.333 5.833 L 3.333 5 C 3.333 2.239 5.572 0 8.333 0 Z M 3.333 7.5 C 2.413 7.5 1.667 8.246 1.667 9.167 L 1.667 15 C 1.667 15.92 2.413 16.667 3.333 16.667 L 13.333 16.667 C 14.254 16.667 15 15.92 15 15 L 15 9.167 C 15 8.246 14.254 7.5 13.333 7.5 L 3.333 7.5 Z M 8.333 10.833 C 9.254 10.833 10 11.58 10 12.5 C 10 13.42 9.254 14.167 8.333 14.167 C 7.413 14.167 6.667 13.42 6.667 12.5 C 6.667 11.58 7.413 10.833 8.333 10.833 Z M 8.333 1.667 C 6.492 1.667 5 3.159 5 5 L 5 5.833 L 11.667 5.833 L 11.667 5 C 11.667 3.159 10.174 1.667 8.333 1.667 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "lock-unlocked-01-line": '<g transform="translate(1.667 0.112)"><path d="M 6.517 0.176 C 9.182 -0.548 11.929 1.025 12.653 3.69 L 11.044 4.127 C 10.561 2.351 8.73 1.302 6.954 1.784 C 5.177 2.267 4.128 4.099 4.611 5.875 L 4.796 6.554 L 13.333 6.554 C 15.174 6.554 16.666 8.046 16.667 9.887 L 16.667 15.721 C 16.667 17.562 15.174 19.054 13.333 19.054 L 3.333 19.054 C 1.492 19.054 0 17.562 0 15.721 L 0 9.887 C 0 8.135 1.353 6.699 3.071 6.565 L 3.003 6.311 C 2.279 3.647 3.852 0.9 6.517 0.176 Z M 3.333 8.221 C 2.413 8.221 1.667 8.967 1.667 9.887 L 1.667 15.721 C 1.667 16.641 2.413 17.387 3.333 17.387 L 13.333 17.387 C 14.254 17.387 15 16.641 15 15.721 L 15 9.887 C 15 8.967 14.254 8.221 13.333 8.221 L 3.333 8.221 Z M 8.333 11.554 C 9.254 11.554 10 12.3 10 13.221 C 10 14.141 9.254 14.887 8.333 14.887 C 7.413 14.887 6.667 14.141 6.667 13.221 C 6.667 12.3 7.413 11.554 8.333 11.554 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "log-out-01-line": '<g transform="translate(1.667 1.667)"><path d="M 5.833 1.667 L 3.333 1.667 C 2.413 1.667 1.667 2.413 1.667 3.333 L 1.667 13.333 C 1.667 14.254 2.413 15 3.333 15 L 5.833 15 L 5.833 16.667 L 3.333 16.667 C 1.492 16.667 0 15.174 0 13.333 L 0 3.333 C 0 1.492 1.492 0 3.333 0 L 5.833 0 L 5.833 1.667 Z M 16.423 7.744 C 16.748 8.07 16.748 8.597 16.423 8.923 L 11.839 13.506 L 10.661 12.327 L 13.822 9.167 L 4.167 9.167 L 4.167 7.5 L 13.822 7.5 L 10.661 4.339 L 11.839 3.161 L 16.423 7.744 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "mail-01-line": '<g transform="translate(0.833 0.899)"><path d="M 7.35 0.539 C 8.455 -0.179 9.878 -0.18 10.983 0.539 L 16.816 4.33 C 17.762 4.945 18.333 5.996 18.333 7.125 L 18.333 14.935 C 18.333 16.775 16.841 18.268 15 18.268 L 3.333 18.268 C 1.492 18.268 0 16.775 0 14.935 L 0 7.125 C 0 5.996 0.571 4.945 1.517 4.33 L 7.35 0.539 Z M 11.232 11.866 C 10.021 12.822 8.312 12.822 7.101 11.866 L 1.667 7.575 L 1.667 14.935 C 1.667 15.855 2.413 16.601 3.333 16.601 L 15 16.601 C 15.92 16.601 16.667 15.855 16.667 14.935 L 16.667 7.575 L 11.232 11.866 Z M 10.075 1.936 C 9.523 1.577 8.811 1.577 8.258 1.936 L 2.425 5.727 C 2.351 5.775 2.282 5.829 2.218 5.887 L 8.134 10.557 C 8.739 11.035 9.594 11.035 10.199 10.557 L 16.115 5.887 C 16.051 5.829 15.982 5.775 15.908 5.727 L 10.075 1.936 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "marker-pin-01-line": '<g transform="translate(2.5 0.833)"><path d="M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 12.001 11.004 15.174 8.089 18.089 C 7.764 18.415 7.236 18.415 6.911 18.089 C 3.996 15.174 0 12.001 0 7.5 C 0 3.358 3.358 0 7.5 0 Z M 7.5 1.667 C 4.278 1.667 1.667 4.278 1.667 7.5 C 1.667 11.23 5.091 13.933 7.5 16.324 C 9.909 13.933 13.333 11.23 13.333 7.5 C 13.333 4.278 10.722 1.667 7.5 1.667 Z M 7.5 4.167 C 9.341 4.167 10.833 5.659 10.833 7.5 C 10.833 9.341 9.341 10.833 7.5 10.833 C 5.659 10.833 4.167 9.341 4.167 7.5 C 4.167 5.659 5.659 4.167 7.5 4.167 Z M 7.5 5.833 C 6.58 5.833 5.833 6.58 5.833 7.5 C 5.833 8.42 6.58 9.167 7.5 9.167 C 8.42 9.167 9.167 8.42 9.167 7.5 C 9.167 6.58 8.42 5.833 7.5 5.833 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "marker-pin-01-solid": '<g transform="translate(2.5 0.833)"><path d="M 7.5 0 C 11.642 0 15 3.358 15 7.5 C 15 12.001 11.004 15.174 8.089 18.089 C 7.764 18.415 7.236 18.415 6.911 18.089 C 3.996 15.174 0 12.001 0 7.5 C 0 3.358 3.358 0 7.5 0 Z M 7.5 5 C 6.119 5 5 6.119 5 7.5 C 5 8.881 6.119 10 7.5 10 C 8.881 10 10 8.881 10 7.5 C 10 6.119 8.881 5 7.5 5 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "menu-01-line": '<g transform="translate(2.5 4.167)"><path d="M 15 11.667 L 0 11.667 L 0 10 L 15 10 L 15 11.667 Z M 15 6.667 L 0 6.667 L 0 5 L 15 5 L 15 6.667 Z M 15 1.667 L 0 1.667 L 0 0 L 15 0 L 15 1.667 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "message-chat-circle-line": '<g transform="translate(0.833 0.833)"><path d="M 2.549 7.982 C 2.544 7.985 2.539 7.988 2.534 7.992 C 2.513 7.771 2.5 7.547 2.5 7.32 C 2.5 3.21 6.115 0 10.417 0 C 14.718 0 18.333 3.21 18.333 7.32 C 18.333 8.536 18.011 9.681 17.447 10.687 L 17.889 12.369 C 18.236 13.687 16.939 14.842 15.67 14.345 L 14.179 13.761 C 13.548 14.076 12.867 14.313 12.15 14.461 C 11.286 16.716 8.92 18.271 6.25 18.271 C 5.237 18.271 4.277 18.051 3.425 17.657 L 2.687 18.056 C 1.352 18.776 -0.173 17.483 0.319 16.048 L 0.645 15.097 C 0.234 14.339 0 13.482 0 12.573 C 0 10.655 1.017 9.005 2.549 7.982 Z M 6.25 8.542 C 3.632 8.542 1.667 10.429 1.667 12.573 C 1.667 13.29 1.879 13.965 2.258 14.554 C 2.396 14.768 2.429 15.035 2.346 15.276 L 1.896 16.589 L 3.018 15.985 L 3.113 15.941 C 3.341 15.853 3.599 15.869 3.816 15.989 C 4.518 16.377 5.351 16.605 6.25 16.605 C 8.868 16.605 10.833 14.718 10.833 12.573 C 10.833 10.429 8.868 8.542 6.25 8.542 Z M 4.17 7.201 C 4.825 6.989 5.526 6.875 6.25 6.875 C 9.615 6.875 12.5 9.344 12.5 12.573 C 12.5 12.599 12.498 12.624 12.498 12.65 C 12.928 12.512 13.337 12.335 13.717 12.121 C 13.908 12.013 14.133 11.985 14.342 12.041 L 14.431 12.07 L 16.277 12.793 L 15.746 10.775 C 15.688 10.551 15.725 10.313 15.848 10.118 C 16.371 9.29 16.667 8.336 16.667 7.32 C 16.667 4.266 13.939 1.667 10.417 1.667 C 6.94 1.667 4.24 4.198 4.17 7.201 Z M 2.995 7.71 C 2.94 7.74 2.886 7.772 2.832 7.804 C 2.886 7.772 2.94 7.74 2.995 7.71 Z M 3.251 7.576 C 3.197 7.602 3.144 7.63 3.092 7.658 C 3.144 7.63 3.198 7.602 3.251 7.576 Z M 3.551 7.435 C 3.475 7.468 3.4 7.502 3.325 7.538 C 3.399 7.502 3.475 7.468 3.551 7.435 Z M 3.778 7.341 C 3.737 7.357 3.696 7.374 3.656 7.391 C 3.696 7.374 3.737 7.357 3.778 7.341 Z M 4.019 7.253 C 3.988 7.263 3.957 7.274 3.927 7.285 C 3.957 7.274 3.988 7.263 4.019 7.253 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "message-circle-line": '<g transform="translate(0.833 1.25)"><path d="M 16.667 8.75 C 16.667 4.878 13.35 1.667 9.167 1.667 C 4.984 1.667 1.667 4.878 1.667 8.75 C 1.667 10.11 2.072 11.38 2.778 12.461 C 2.898 12.645 2.94 12.87 2.896 13.086 L 2.338 15.775 L 5.233 15.027 L 5.304 15.011 C 5.471 14.983 5.645 15.007 5.799 15.081 C 6.81 15.561 7.953 15.833 9.167 15.833 C 13.35 15.833 16.667 12.622 16.667 8.75 Z M 18.333 8.75 C 18.333 13.622 14.188 17.5 9.167 17.5 C 7.812 17.5 6.524 17.219 5.364 16.713 L 2.107 17.556 C 1.211 17.788 0.382 16.999 0.57 16.092 L 1.195 13.073 C 0.436 11.799 0 10.323 0 8.75 C 0 3.878 4.145 0 9.167 0 C 14.188 0 18.333 3.878 18.333 8.75 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "minus-line": '<g transform="translate(4.167 9.167)"><path d="M 11.667 0 L 0 0 L 0 1.667 L 11.667 1.667 L 11.667 0 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "paperclip-line": '<g transform="translate(1.667 2.5)"><path d="M 9.722 1.244 C 11.311 -0.415 13.887 -0.415 15.476 1.244 C 17.064 2.903 17.064 5.593 15.476 7.252 L 9.722 13.258 C 7.498 15.581 3.892 15.581 1.668 13.258 C -0.556 10.936 -0.556 7.171 1.668 4.848 L 5.957 0.371 L 7.107 1.572 L 2.819 6.05 C 1.23 7.709 1.23 10.398 2.819 12.057 C 4.407 13.716 6.984 13.716 8.572 12.057 L 14.325 6.05 C 15.278 5.055 15.278 3.441 14.325 2.446 C 13.372 1.451 11.826 1.451 10.873 2.446 L 5.407 8.152 C 5.09 8.484 5.09 9.023 5.407 9.354 C 5.725 9.686 6.24 9.686 6.558 9.354 L 12.024 3.647 L 13.174 4.848 L 7.709 10.556 C 6.756 11.551 5.211 11.551 4.257 10.556 C 3.304 9.56 3.304 7.947 4.257 6.951 L 9.722 1.244 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "phone-call-line": '<g transform="translate(0.833 1.667)"><path d="M 4.853 0.833 C 5.534 0.833 6.147 1.248 6.4 1.881 L 7.653 5.014 C 7.901 5.633 7.756 6.34 7.284 6.812 L 6.462 7.632 C 7.325 9.01 8.489 10.174 9.867 11.037 L 10.688 10.216 C 11.16 9.744 11.867 9.599 12.486 9.847 L 15.619 11.1 C 16.252 11.353 16.667 11.966 16.667 12.647 L 16.667 15 C 16.667 16.381 15.547 17.5 14.167 17.5 C 6.343 17.5 0 11.157 0 3.333 C 0 1.953 1.119 0.833 2.5 0.833 L 4.853 0.833 Z M 2.5 2.5 C 2.04 2.5 1.667 2.873 1.667 3.333 C 1.667 10.237 7.263 15.833 14.167 15.833 C 14.627 15.833 15 15.46 15 15 L 15 12.647 L 11.868 11.395 L 10.732 12.53 C 10.382 12.88 9.841 12.953 9.412 12.708 C 7.487 11.608 5.892 10.013 4.792 8.088 C 4.547 7.659 4.62 7.118 4.97 6.768 L 6.105 5.632 L 4.853 2.5 L 2.5 2.5 Z M 10 3.333 C 12.301 3.333 14.167 5.199 14.167 7.5 L 12.5 7.5 C 12.5 6.119 11.381 5 10 5 L 10 3.333 Z M 10 0 C 14.142 0 17.5 3.358 17.5 7.5 L 15.833 7.5 C 15.833 4.278 13.222 1.667 10 1.667 L 10 0 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "phone-line": '<g transform="translate(1.667 1.667)"><path d="M 4.853 0 C 5.534 0 6.147 0.415 6.4 1.047 L 7.653 4.181 C 7.901 4.799 7.756 5.507 7.284 5.978 L 6.462 6.799 C 7.325 8.177 8.489 9.341 9.867 10.203 L 10.688 9.382 C 11.16 8.911 11.867 8.766 12.486 9.014 L 15.619 10.267 C 16.252 10.52 16.667 11.133 16.667 11.814 L 16.667 14.167 C 16.667 15.547 15.547 16.667 14.167 16.667 C 6.343 16.667 0 10.324 0 2.5 C 0 1.119 1.119 0 2.5 0 L 4.853 0 Z M 2.5 1.667 C 2.04 1.667 1.667 2.04 1.667 2.5 C 1.667 9.404 7.263 15 14.167 15 C 14.627 15 15 14.627 15 14.167 L 15 11.814 L 11.868 10.562 L 10.732 11.697 C 10.382 12.046 9.841 12.12 9.412 11.874 C 7.487 10.775 5.892 9.179 4.792 7.255 C 4.547 6.826 4.62 6.285 4.97 5.935 L 6.105 4.799 L 4.853 1.667 L 2.5 1.667 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "plus-circle-line": '<g transform="translate(0.833 0.833)"><path d="M 9.167 1.667 C 5.025 1.667 1.667 5.025 1.667 9.167 C 1.667 13.309 5.025 16.667 9.167 16.667 C 13.309 16.667 16.667 13.309 16.667 9.167 C 16.667 5.025 13.309 1.667 9.167 1.667 Z M 0 9.167 C 0 4.104 4.104 0 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 Z" fill="currentColor" fill-rule="evenodd"/><path d="M 10 10 L 10 13.333 L 8.333 13.333 L 8.333 10 L 5 10 L 5 8.333 L 8.333 8.333 L 8.333 5 L 10 5 L 10 8.333 L 13.333 8.333 L 13.333 10 L 10 10 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "plus-line": '<g transform="translate(3.333 3.333)"><path d="M 5.833 5.833 L 5.833 0 L 7.5 0 L 7.5 5.833 L 13.333 5.833 L 13.333 7.5 L 7.5 7.5 L 7.5 13.333 L 5.833 13.333 L 5.833 7.5 L 0 7.5 L 0 5.833 L 5.833 5.833 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "search-medium-line": '<g transform="translate(1.25 1.25)"><path d="M 7.654 0 C 11.881 0 15.308 3.427 15.308 7.654 C 15.308 9.455 14.686 11.111 13.645 12.418 L 17.5 16.273 L 16.273 17.5 L 12.418 13.645 C 11.111 14.686 9.455 15.308 7.654 15.308 C 3.427 15.308 0 11.881 0 7.654 C 0 3.427 3.427 0 7.654 0 Z M 7.654 1.736 C 4.386 1.736 1.736 4.386 1.736 7.654 C 1.736 10.922 4.385 13.572 7.654 13.572 C 10.922 13.572 13.572 10.922 13.572 7.654 C 13.572 4.385 10.922 1.736 7.654 1.736 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "send-01-line": '<g transform="translate(1.093 1.374)"><path d="M 15.157 0.088 C 16.459 -0.346 17.699 0.894 17.265 2.197 L 12.592 16.214 C 12.108 17.668 10.083 17.752 9.479 16.343 L 6.939 10.415 L 1.01 7.874 C -0.398 7.27 -0.314 5.246 1.14 4.761 L 15.157 0.088 Z M 8.562 9.97 L 11.011 15.687 L 15.093 3.439 L 8.562 9.97 Z M 1.666 6.342 L 7.382 8.791 L 13.915 2.259 L 1.666 6.342 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "settings-01-line": '<g transform="translate(0.576 0)"><path d="M 9.424 0 C 9.884 0 10.336 0.032 10.779 0.093 C 11.698 0.219 12.409 0.896 12.642 1.751 C 12.783 2.27 12.909 2.829 13.021 3.42 C 13.123 3.476 13.223 3.534 13.321 3.594 C 13.889 3.395 14.435 3.225 14.955 3.088 C 15.811 2.861 16.752 3.137 17.321 3.869 C 17.875 4.582 18.336 5.372 18.683 6.221 C 19.034 7.079 18.802 8.033 18.178 8.661 C 17.799 9.044 17.377 9.433 16.919 9.827 C 16.921 9.884 16.924 9.942 16.924 10 C 16.924 10.058 16.921 10.115 16.919 10.172 C 17.377 10.565 17.798 10.954 18.177 11.336 C 18.802 11.965 19.033 12.918 18.683 13.777 C 18.336 14.626 17.876 15.416 17.322 16.129 C 16.753 16.861 15.812 17.136 14.956 16.91 C 14.436 16.773 13.89 16.603 13.322 16.404 C 13.223 16.464 13.123 16.522 13.021 16.578 C 12.909 17.17 12.783 17.729 12.642 18.248 C 12.409 19.103 11.698 19.78 10.78 19.906 C 10.337 19.967 9.884 20 9.424 20 C 8.963 20 8.509 19.968 8.065 19.906 C 7.147 19.78 6.436 19.104 6.204 18.248 C 6.063 17.729 5.937 17.17 5.825 16.578 C 5.723 16.522 5.623 16.464 5.524 16.404 C 4.956 16.603 4.41 16.773 3.89 16.91 C 3.034 17.136 2.093 16.86 1.524 16.128 C 0.97 15.415 0.51 14.626 0.164 13.777 C -0.187 12.918 0.045 11.965 0.668 11.337 C 1.048 10.955 1.47 10.564 1.927 10.171 C 1.926 10.114 1.924 10.057 1.924 10 C 1.924 9.942 1.926 9.885 1.927 9.827 C 1.47 9.434 1.049 9.045 0.669 8.663 C 0.045 8.035 -0.187 7.081 0.164 6.222 C 0.511 5.373 0.97 4.583 1.525 3.87 C 2.093 3.138 3.035 2.861 3.891 3.088 C 4.41 3.225 4.957 3.395 5.524 3.594 C 5.623 3.534 5.723 3.476 5.824 3.42 C 5.936 2.829 6.062 2.27 6.203 1.751 C 6.436 0.896 7.146 0.219 8.065 0.093 C 8.509 0.032 8.963 0 9.424 0 Z M 9.424 1.667 C 9.04 1.667 8.662 1.693 8.291 1.744 C 8.075 1.774 7.879 1.938 7.811 2.188 C 7.654 2.769 7.512 3.415 7.391 4.115 C 7.345 4.382 7.172 4.61 6.927 4.727 C 6.64 4.863 6.365 5.022 6.106 5.202 C 5.883 5.356 5.599 5.392 5.344 5.299 C 4.677 5.053 4.046 4.853 3.465 4.699 C 3.214 4.633 2.974 4.72 2.841 4.893 C 2.378 5.487 1.995 6.146 1.707 6.852 C 1.625 7.053 1.669 7.305 1.852 7.489 C 2.277 7.916 2.766 8.362 3.313 8.818 C 3.521 8.992 3.632 9.256 3.61 9.526 C 3.598 9.686 3.591 9.843 3.591 10 C 3.591 10.156 3.598 10.314 3.61 10.474 C 3.632 10.744 3.521 11.007 3.313 11.181 C 2.766 11.637 2.277 12.084 1.852 12.511 C 1.669 12.695 1.625 12.946 1.707 13.147 C 1.995 13.853 2.378 14.511 2.84 15.106 C 2.974 15.278 3.214 15.365 3.465 15.299 C 4.046 15.145 4.676 14.945 5.343 14.7 L 5.44 14.67 C 5.668 14.617 5.91 14.661 6.105 14.797 C 6.3 14.931 6.503 15.055 6.714 15.166 L 6.927 15.273 L 7.016 15.321 C 7.214 15.447 7.352 15.65 7.392 15.884 C 7.513 16.584 7.654 17.23 7.812 17.811 C 7.88 18.061 8.076 18.225 8.293 18.255 C 8.663 18.306 9.041 18.333 9.424 18.333 C 9.806 18.333 10.183 18.306 10.552 18.255 C 10.769 18.225 10.965 18.061 11.033 17.81 C 11.191 17.229 11.334 16.584 11.455 15.884 L 11.477 15.785 C 11.545 15.561 11.704 15.374 11.918 15.273 C 12.206 15.136 12.481 14.976 12.74 14.797 C 12.964 14.642 13.248 14.606 13.503 14.7 C 14.17 14.945 14.8 15.145 15.381 15.299 C 15.632 15.365 15.872 15.278 16.006 15.106 C 16.468 14.511 16.851 13.853 17.14 13.147 C 17.222 12.946 17.178 12.695 16.995 12.511 C 16.57 12.084 16.08 11.637 15.533 11.181 C 15.324 11.007 15.214 10.744 15.236 10.474 C 15.249 10.308 15.257 10.152 15.257 10 C 15.257 9.848 15.249 9.691 15.236 9.526 C 15.214 9.256 15.324 8.992 15.533 8.818 C 16.08 8.362 16.57 7.915 16.995 7.487 C 17.178 7.303 17.222 7.052 17.14 6.851 C 16.851 6.144 16.468 5.486 16.005 4.892 C 15.872 4.72 15.632 4.632 15.382 4.698 C 14.8 4.852 14.169 5.053 13.502 5.299 C 13.248 5.392 12.963 5.356 12.74 5.202 C 12.481 5.022 12.206 4.863 11.918 4.727 C 11.674 4.61 11.501 4.382 11.455 4.115 C 11.334 3.415 11.191 2.77 11.033 2.189 C 10.965 1.939 10.769 1.774 10.552 1.744 C 10.183 1.693 9.807 1.667 9.424 1.667 Z M 11.507 10 C 11.507 8.85 10.575 7.917 9.424 7.917 C 8.274 7.917 7.341 8.849 7.341 10 C 7.341 11.151 8.274 12.083 9.424 12.083 C 10.575 12.083 11.507 11.15 11.507 10 Z M 13.174 10 C 13.174 12.071 11.495 13.75 9.424 13.75 C 7.353 13.75 5.674 12.071 5.674 10 C 5.674 7.929 7.353 6.25 9.424 6.25 C 11.495 6.25 13.174 7.929 13.174 10 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "settings-01-solid": '<g transform="translate(0.689 0)"><path d="M 9.311 0 C 9.7 0 10.083 0.023 10.459 0.066 C 11.104 0.141 11.616 0.595 11.8 1.187 L 11.833 1.307 L 11.944 1.828 C 12.024 2.219 12.095 2.633 12.162 3.065 C 12.784 3.321 13.364 3.658 13.888 4.063 C 14.484 3.831 15.051 3.632 15.579 3.469 L 15.699 3.437 C 16.262 3.309 16.864 3.49 17.257 3.938 L 17.338 4.037 L 17.506 4.27 C 17.889 4.816 18.219 5.403 18.488 6.023 C 18.764 6.66 18.59 7.38 18.103 7.833 C 17.697 8.209 17.241 8.6 16.742 9.001 C 16.786 9.328 16.811 9.662 16.811 10 C 16.811 10.338 16.786 10.67 16.742 10.997 C 17.241 11.398 17.698 11.788 18.104 12.165 C 18.591 12.618 18.764 13.338 18.488 13.975 C 18.18 14.684 17.793 15.35 17.338 15.962 C 16.925 16.517 16.215 16.726 15.579 16.53 C 15.051 16.367 14.484 16.167 13.888 15.936 C 13.364 16.34 12.784 16.677 12.162 16.933 C 12.065 17.564 11.956 18.154 11.833 18.692 C 11.685 19.342 11.146 19.852 10.459 19.933 C 10.083 19.977 9.7 20 9.311 20 C 8.92 20 8.536 19.976 8.16 19.932 C 7.474 19.851 6.936 19.341 6.788 18.691 C 6.665 18.153 6.554 17.564 6.457 16.933 C 5.835 16.677 5.257 16.34 4.733 15.936 C 4.136 16.167 3.569 16.368 3.041 16.53 C 2.406 16.726 1.696 16.516 1.282 15.961 C 0.827 15.349 0.439 14.683 0.131 13.974 C -0.145 13.338 0.029 12.618 0.517 12.165 L 0.914 11.806 C 1.214 11.541 1.536 11.272 1.878 10.997 C 1.835 10.67 1.811 10.337 1.811 10 C 1.811 9.663 1.834 9.329 1.877 9.002 C 1.378 8.601 0.922 8.21 0.517 7.834 C 0.029 7.381 -0.144 6.66 0.132 6.024 L 0.251 5.76 C 0.538 5.149 0.884 4.572 1.282 4.037 C 1.696 3.482 2.406 3.273 3.041 3.469 C 3.57 3.632 4.136 3.831 4.733 4.063 C 5.257 3.658 5.836 3.321 6.457 3.065 C 6.554 2.435 6.665 1.846 6.788 1.308 L 6.819 1.188 C 7.003 0.596 7.516 0.143 8.16 0.067 L 8.444 0.038 C 8.729 0.013 9.018 0 9.311 0 Z M 9.311 5.667 C 6.918 5.667 4.978 7.607 4.978 10 C 4.978 12.393 6.918 14.334 9.311 14.334 C 11.704 14.334 13.644 12.393 13.645 10 C 13.644 7.607 11.704 5.667 9.311 5.667 Z M 9.311 7.667 C 10.599 7.667 11.644 8.712 11.645 10 C 11.644 11.288 10.599 12.334 9.311 12.334 C 8.022 12.334 6.978 11.288 6.978 10 C 6.978 8.712 8.022 7.667 9.311 7.667 Z" fill="currentColor" fill-rule="evenodd"/></g>',
  "share-01-line": '<g transform="translate(2.5 0.833)"><path d="M 4.907 7.5 L 3.333 7.5 C 2.413 7.5 1.667 8.246 1.667 9.167 L 1.667 15 C 1.667 15.92 2.413 16.667 3.333 16.667 L 11.667 16.667 C 12.587 16.667 13.333 15.92 13.333 15 L 13.333 9.167 C 13.333 8.246 12.587 7.5 11.667 7.5 L 10.093 7.5 L 10.093 5.833 L 11.667 5.833 C 13.508 5.833 15 7.326 15 9.167 L 15 15 C 15 16.841 13.508 18.333 11.667 18.333 L 3.333 18.333 C 1.492 18.333 0 16.841 0 15 L 0 9.167 C 0 7.326 1.492 5.833 3.333 5.833 L 4.907 5.833 L 4.907 7.5 Z M 7.5 0 C 7.721 0 7.933 0.088 8.089 0.244 L 11.006 3.161 L 9.827 4.339 L 8.333 2.845 L 8.333 10 L 6.667 10 L 6.667 2.845 L 5.173 4.339 L 3.994 3.161 L 6.911 0.244 L 6.972 0.189 C 7.12 0.067 7.307 0 7.5 0 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "star-01-line": '<g transform="translate(0.951 1.472)"><path d="M 7.553 0.931 C 8.164 -0.31 9.934 -0.31 10.544 0.931 L 12.435 4.776 L 16.67 5.395 C 18.035 5.594 18.58 7.27 17.595 8.235 L 14.526 11.236 L 15.251 15.471 C 15.484 16.834 14.053 17.871 12.83 17.226 L 9.049 15.231 L 5.267 17.226 C 4.045 17.871 2.614 16.834 2.847 15.471 L 3.57 11.236 L 0.503 8.235 C -0.483 7.27 0.063 5.594 1.427 5.395 L 5.662 4.776 L 7.553 0.931 Z M 6.964 5.907 C 6.843 6.153 6.608 6.324 6.336 6.363 L 1.668 7.044 L 5.048 10.351 C 5.243 10.542 5.332 10.817 5.286 11.087 L 4.49 15.752 L 8.66 13.552 C 8.903 13.423 9.194 13.423 9.438 13.552 L 13.608 15.752 L 12.811 11.087 C 12.765 10.817 12.854 10.542 13.049 10.351 L 16.429 7.044 L 11.761 6.363 C 11.49 6.324 11.255 6.153 11.134 5.907 L 9.049 1.667 L 6.964 5.907 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "star-01-solid": '<g transform="translate(0.951 1.472)"><path d="M 7.553 0.931 C 8.164 -0.31 9.934 -0.31 10.544 0.931 L 12.435 4.776 L 16.67 5.395 C 18.035 5.594 18.58 7.27 17.595 8.235 L 14.526 11.236 L 15.251 15.471 C 15.484 16.834 14.053 17.871 12.83 17.226 L 9.049 15.231 L 5.267 17.226 C 4.045 17.871 2.614 16.834 2.847 15.471 L 3.57 11.236 L 0.503 8.235 C -0.483 7.27 0.063 5.594 1.427 5.395 L 5.662 4.776 L 7.553 0.931 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "stars-01-line": '<g transform="translate(0.833 0.833)"><path d="M 4.583 9.167 C 4.966 9.167 5.299 9.427 5.391 9.798 L 5.657 10.858 C 5.881 11.753 6.58 12.453 7.476 12.677 L 8.535 12.942 C 8.906 13.035 9.167 13.368 9.167 13.75 C 9.167 14.132 8.906 14.465 8.535 14.558 L 7.476 14.823 C 6.58 15.047 5.881 15.747 5.657 16.642 L 5.391 17.702 C 5.299 18.073 4.966 18.333 4.583 18.333 C 4.201 18.333 3.868 18.073 3.775 17.702 L 3.51 16.642 C 3.286 15.747 2.587 15.047 1.691 14.823 L 0.632 14.558 C 0.261 14.465 0 14.132 0 13.75 C 0 13.368 0.261 13.035 0.632 12.942 L 1.691 12.677 C 2.587 12.453 3.286 11.753 3.51 10.858 L 3.775 9.798 C 3.868 9.427 4.201 9.167 4.583 9.167 Z M 10.833 0 C 11.216 0 11.549 0.261 11.641 0.632 L 12.49 4.024 C 12.714 4.92 13.413 5.619 14.309 5.843 L 17.702 6.692 C 18.073 6.785 18.333 7.118 18.333 7.5 C 18.333 7.882 18.073 8.215 17.702 8.308 L 14.309 9.157 C 13.413 9.381 12.714 10.08 12.49 10.976 L 11.641 14.368 C 11.549 14.739 11.216 15 10.833 15 C 10.451 15 10.118 14.739 10.025 14.368 L 9.176 10.976 C 8.952 10.08 8.253 9.381 7.358 9.157 L 3.965 8.308 C 3.594 8.215 3.333 7.882 3.333 7.5 C 3.333 7.118 3.594 6.785 3.965 6.692 L 7.358 5.843 C 8.253 5.619 8.952 4.92 9.176 4.024 L 10.025 0.632 C 10.118 0.261 10.451 0 10.833 0 Z M 4.583 12.514 C 4.263 13.008 3.842 13.43 3.347 13.75 C 3.842 14.07 4.263 14.492 4.583 14.986 C 4.903 14.492 5.325 14.07 5.819 13.75 C 5.325 13.43 4.903 13.008 4.583 12.514 Z M 10.793 4.429 C 10.42 5.921 9.255 7.087 7.762 7.46 L 7.603 7.5 L 7.762 7.54 C 9.255 7.913 10.42 9.079 10.793 10.571 L 10.833 10.731 L 10.873 10.571 C 11.246 9.079 12.412 7.913 13.905 7.54 L 14.064 7.5 L 13.905 7.46 C 12.412 7.087 11.246 5.921 10.873 4.429 L 10.833 4.269 L 10.793 4.429 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "trash-line": '<g transform="translate(1.25 0.833)"><path d="M 10.417 0 C 11.797 0 12.917 1.119 12.917 2.5 L 12.917 3.333 L 17.5 3.333 L 17.5 5 L 16.2 5 L 15.562 15.208 C 15.452 16.965 13.995 18.333 12.235 18.333 L 5.265 18.333 C 3.505 18.333 2.048 16.965 1.938 15.208 L 1.3 5 L 0 5 L 0 3.333 L 4.583 3.333 L 4.583 2.5 C 4.583 1.119 5.703 0 7.083 0 L 10.417 0 Z M 3.602 15.104 C 3.657 15.982 4.385 16.667 5.265 16.667 L 12.235 16.667 C 13.115 16.667 13.843 15.982 13.898 15.104 L 14.53 5 L 2.97 5 L 3.602 15.104 Z M 7.917 14.167 L 6.25 14.167 L 6.25 7.5 L 7.917 7.5 L 7.917 14.167 Z M 11.25 14.167 L 9.583 14.167 L 9.583 7.5 L 11.25 7.5 L 11.25 14.167 Z M 7.083 1.667 C 6.623 1.667 6.25 2.04 6.25 2.5 L 6.25 3.333 L 11.25 3.333 L 11.25 2.5 C 11.25 2.04 10.877 1.667 10.417 1.667 L 7.083 1.667 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "truck-line": '<g transform="translate(0.833 2.5)"><path d="M 8.333 0 C 9.887 0 11.192 1.062 11.562 2.5 L 13.75 2.5 C 14.799 2.5 15.787 2.994 16.417 3.834 L 17.5 5.278 C 18.041 5.999 18.333 6.876 18.333 7.778 L 18.333 11.25 C 18.333 12.17 17.587 12.917 16.667 12.917 L 16.545 12.917 C 16.187 14.121 15.071 15 13.75 15 C 12.429 15 11.313 14.121 10.955 12.917 L 8.212 12.917 C 7.853 14.121 6.738 15 5.417 15 C 4.095 15 2.98 14.121 2.621 12.917 L 1.458 12.917 C 0.653 12.917 0 12.264 0 11.458 L 0 3.333 C 0 1.492 1.492 0 3.333 0 L 8.333 0 Z M 5.417 10.833 C 4.726 10.833 4.167 11.393 4.167 12.083 C 4.167 12.774 4.726 13.333 5.417 13.333 C 6.107 13.333 6.667 12.774 6.667 12.083 C 6.667 11.393 6.107 10.833 5.417 10.833 Z M 13.75 10.833 C 13.06 10.833 12.5 11.393 12.5 12.083 C 12.5 12.774 13.06 13.333 13.75 13.333 C 14.44 13.333 15 12.774 15 12.083 C 15 11.393 14.44 10.833 13.75 10.833 Z M 3.333 1.667 C 2.413 1.667 1.667 2.413 1.667 3.333 L 1.667 11.25 L 2.611 11.25 C 2.944 10.087 3.99 9.229 5.246 9.172 C 5.267 9.171 5.289 9.17 5.31 9.169 C 5.332 9.169 5.354 9.167 5.377 9.167 L 5.457 9.167 L 5.566 9.171 C 5.573 9.171 5.581 9.172 5.588 9.172 C 6.843 9.229 7.889 10.087 8.222 11.25 L 10 11.25 L 10 3.333 C 10 2.413 9.254 1.667 8.333 1.667 L 3.333 1.667 Z M 11.667 10.043 C 11.851 9.855 12.061 9.692 12.29 9.559 C 12.348 9.525 12.407 9.492 12.467 9.462 C 12.499 9.447 12.531 9.432 12.563 9.418 C 12.579 9.411 12.594 9.404 12.61 9.398 C 12.766 9.331 12.93 9.278 13.099 9.24 C 13.119 9.235 13.139 9.23 13.159 9.226 C 13.177 9.222 13.194 9.22 13.212 9.216 C 13.242 9.211 13.273 9.205 13.303 9.2 C 13.311 9.199 13.32 9.198 13.328 9.197 C 13.466 9.177 13.607 9.167 13.75 9.167 C 13.818 9.167 13.885 9.169 13.951 9.174 C 13.977 9.176 14.003 9.178 14.028 9.181 C 14.092 9.187 14.156 9.194 14.219 9.204 C 14.235 9.207 14.251 9.21 14.267 9.213 C 14.324 9.223 14.38 9.235 14.436 9.248 C 14.45 9.251 14.463 9.254 14.477 9.258 C 14.545 9.275 14.612 9.296 14.679 9.318 C 14.687 9.321 14.696 9.324 14.705 9.327 C 14.773 9.351 14.84 9.377 14.906 9.406 C 14.91 9.408 14.914 9.408 14.918 9.41 C 14.983 9.438 15.046 9.47 15.108 9.503 C 15.114 9.506 15.121 9.508 15.127 9.512 C 15.186 9.544 15.244 9.578 15.301 9.613 C 15.313 9.621 15.325 9.628 15.336 9.635 C 15.516 9.753 15.683 9.889 15.833 10.042 C 15.845 10.055 15.858 10.069 15.871 10.082 C 15.964 10.18 16.049 10.285 16.128 10.396 C 16.135 10.406 16.143 10.417 16.151 10.427 C 16.19 10.485 16.228 10.544 16.263 10.604 C 16.266 10.609 16.269 10.615 16.272 10.62 C 16.344 10.744 16.407 10.874 16.461 11.009 C 16.465 11.02 16.47 11.03 16.474 11.04 C 16.5 11.109 16.524 11.179 16.545 11.25 L 16.667 11.25 L 16.667 7.778 C 16.667 7.684 16.66 7.592 16.65 7.5 L 11.667 7.5 L 11.667 10.043 Z M 11.667 5.833 L 15.834 5.833 L 15.084 4.833 C 14.769 4.414 14.275 4.167 13.75 4.167 L 11.667 4.167 L 11.667 5.833 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "upload-01-line": '<g transform="translate(2.083 1.667)"><path d="M 1.667 13.333 C 1.667 14.254 2.413 15 3.333 15 L 13.333 15 C 14.254 15 15 14.254 15 13.333 L 15 10.833 L 16.667 10.833 L 16.667 13.333 C 16.667 15.174 15.174 16.667 13.333 16.667 L 3.333 16.667 C 1.492 16.667 0 15.174 0 13.333 L 0 10.833 L 1.667 10.833 L 1.667 13.333 Z M 7.744 0.244 C 8.07 -0.081 8.597 -0.081 8.923 0.244 L 13.506 4.827 L 12.327 6.006 L 9.167 2.845 L 9.167 12.5 L 7.5 12.5 L 7.5 2.845 L 4.339 6.006 L 3.161 4.827 L 7.744 0.244 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "upload-cloud-line": '<g transform="translate(0.833 0.833)"><path d="M 8.577 9.411 C 8.903 9.085 9.43 9.085 9.756 9.411 L 12.673 12.327 L 11.494 13.506 L 10 12.012 L 10 17.5 L 8.333 17.5 L 8.333 12.012 L 6.839 13.506 L 5.661 12.327 L 8.577 9.411 Z M 9.167 0 C 11.398 0 13.324 1.272 14.351 3.127 C 16.623 3.401 18.333 5.422 18.333 7.798 C 18.333 10.355 16.352 12.5 13.822 12.5 L 13.822 10.833 C 15.354 10.833 16.667 9.514 16.667 7.798 C 16.667 6.081 15.354 4.762 13.822 4.762 C 13.494 4.762 13.196 4.57 13.062 4.272 C 12.357 2.712 10.864 1.667 9.167 1.667 C 7.469 1.667 5.976 2.712 5.272 4.272 C 5.137 4.57 4.839 4.762 4.512 4.762 C 2.98 4.762 1.667 6.081 1.667 7.798 C 1.667 9.514 2.98 10.833 4.512 10.833 L 4.512 12.5 C 1.981 12.5 0 10.355 0 7.798 C 0 5.422 1.71 3.401 3.983 3.127 C 5.009 1.272 6.935 0 9.167 0 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "user-circle-line": '<g transform="translate(0.833 0.833)"><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 6.667 13.333 C 5.613 13.333 4.712 13.986 4.344 14.91 C 5.648 16.006 7.33 16.667 9.167 16.667 C 11.003 16.667 12.685 16.005 13.988 14.909 C 13.621 13.986 12.72 13.333 11.667 13.333 L 6.667 13.333 Z M 9.167 1.667 C 5.025 1.667 1.667 5.025 1.667 9.167 C 1.667 10.835 2.212 12.376 3.134 13.622 C 3.871 12.448 5.177 11.667 6.667 11.667 L 11.667 11.667 C 13.156 11.667 14.462 12.448 15.199 13.622 C 16.12 12.376 16.667 10.836 16.667 9.167 C 16.667 5.025 13.309 1.667 9.167 1.667 Z M 9.167 3.333 C 11.008 3.333 12.5 4.826 12.5 6.667 C 12.5 8.508 11.008 10 9.167 10 C 7.326 10 5.833 8.508 5.833 6.667 C 5.833 4.826 7.326 3.333 9.167 3.333 Z M 9.167 5 C 8.246 5 7.5 5.746 7.5 6.667 C 7.5 7.587 8.246 8.333 9.167 8.333 C 10.087 8.333 10.833 7.587 10.833 6.667 C 10.833 5.746 10.087 5 9.167 5 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "x-circle-line": '<g transform="translate(0.833 0.833)"><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 9.167 1.667 C 5.025 1.667 1.667 5.025 1.667 9.167 C 1.667 13.309 5.025 16.667 9.167 16.667 C 13.309 16.667 16.667 13.309 16.667 9.167 C 16.667 5.025 13.309 1.667 9.167 1.667 Z M 13.089 6.423 L 10.345 9.167 L 13.089 11.911 L 11.911 13.089 L 9.167 10.345 L 6.423 13.089 L 5.244 11.911 L 7.988 9.167 L 5.244 6.423 L 6.423 5.244 L 9.167 7.988 L 11.911 5.244 L 13.089 6.423 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "x-circle-solid": '<g transform="translate(0.833 0.833)"><path d="M 9.167 0 C 14.229 0 18.333 4.104 18.333 9.167 C 18.333 14.229 14.229 18.333 9.167 18.333 C 4.104 18.333 0 14.229 0 9.167 C 0 4.104 4.104 0 9.167 0 Z M 9.167 7.988 L 6.423 5.244 L 5.244 6.423 L 7.988 9.167 L 5.244 11.911 L 6.423 13.089 L 9.167 10.345 L 11.911 13.089 L 13.089 11.911 L 10.345 9.167 L 13.089 6.423 L 11.911 5.244 L 9.167 7.988 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "zap-line": '<g transform="translate(2.488 0.809)"><path d="M 8.646 0.319 C 9.449 -0.448 10.814 0.268 10.587 1.4 L 9.362 7.528 L 13.821 7.544 C 14.846 7.548 15.369 8.779 14.658 9.519 L 6.438 18.078 C 5.621 18.928 4.201 18.168 4.457 17.016 L 5.64 11.692 L 1.169 11.692 C 0.164 11.691 -0.371 10.504 0.295 9.752 L 8.57 0.398 L 8.646 0.319 Z M 2.278 10.025 L 6.679 10.025 C 6.932 10.025 7.172 10.14 7.33 10.337 C 7.488 10.534 7.548 10.792 7.493 11.039 L 6.471 15.636 L 12.646 9.206 L 8.344 9.192 C 8.095 9.191 7.858 9.078 7.701 8.886 C 7.543 8.693 7.48 8.439 7.529 8.195 L 8.589 2.891 L 2.278 10.025 Z" fill="currentColor" fill-rule="nonzero"/></g>',
  "zap-solid": '<g transform="translate(2.488 0.809)"><path d="M 8.646 0.319 C 9.449 -0.448 10.814 0.268 10.587 1.4 L 9.362 7.528 L 13.821 7.544 C 14.846 7.548 15.369 8.779 14.658 9.519 L 6.438 18.078 C 5.621 18.928 4.201 18.168 4.457 17.016 L 5.64 11.692 L 1.169 11.692 C 0.164 11.691 -0.371 10.504 0.295 9.752 L 8.57 0.398 L 8.646 0.319 Z" fill="currentColor" fill-rule="nonzero"/></g>'
};
const ICON_NAMES = ["alert-circle-line", "alert-circle-solid", "alert-triangle-line", "arrow-down-line", "arrow-left-line", "arrow-narrow-left-line", "arrow-narrow-right-line", "arrow-right-line", "arrow-up-line", "bar-chart-square-02-line", "bell-01-line", "bell-01-solid", "building-02-line", "calendar-line", "check-circle-line", "check-circle-solid", "check-line", "chevron-down-line", "chevron-left-01-line", "chevron-right-01-line", "chevron-selector-vertical-line", "chevron-up-line", "clock-line", "dots-grid-line", "dots-horizontal-line", "dots-vertical-line", "download-01-line", "edit-01-line", "edit-01-solid", "eye-line", "eye-off-line", "file-check-line", "file-doc-line", "filter-funnel-line", "filter-lines-line", "folder-line", "globe-01-line", "heart-line", "heart-solid", "home-01-line", "home-01-solid", "home-03-solid", "image-line", "info-circle-line", "info-circle-solid", "lock-01-line", "lock-unlocked-01-line", "log-out-01-line", "mail-01-line", "marker-pin-01-line", "marker-pin-01-solid", "menu-01-line", "message-chat-circle-line", "message-circle-line", "minus-line", "paperclip-line", "phone-call-line", "phone-line", "plus-circle-line", "plus-line", "search-medium-line", "send-01-line", "settings-01-line", "settings-01-solid", "share-01-line", "star-01-line", "star-01-solid", "stars-01-line", "trash-line", "truck-line", "upload-01-line", "upload-cloud-line", "user-circle-line", "x-circle-line", "x-circle-solid", "zap-line", "zap-solid"];
Object.assign(__ds_scope, { ICONS, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/icon-registry.js", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — renders a glyph from the ZEN Kaizen icon set.
 * The set is an Untitled-UI-style line/solid family (~2153 glyphs in Figma);
 * this build ships a curated working subset. Names are kebab-case, e.g.
 * "search-medium-line", "bell-01-solid". Paints with currentColor.
 */
function Icon({
  name,
  size = 20,
  color,
  strokeWidth,
  className,
  style,
  ...rest
}) {
  const inner = __ds_scope.ICONS[name];
  if (!inner) {
    if (typeof console !== "undefined") console.warn(`[ZenIcon] unknown icon "${name}"`);
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    role: "img",
    "aria-hidden": rest["aria-label"] ? undefined : true,
    style: {
      display: "inline-block",
      flexShrink: 0,
      color,
      verticalAlign: "middle",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon, ICON_NAMES: __ds_scope.ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const THEMES = {
  neutral: {
    bg: "var(--color-surface-sunken)",
    fg: "var(--color-text-muted)",
    solidBg: "var(--gray-12)"
  },
  brand: {
    bg: "var(--color-accent-bg)",
    fg: "var(--color-accent-text)",
    solidBg: "var(--color-accent)"
  },
  success: {
    bg: "var(--color-success-bg)",
    fg: "var(--color-success-text)",
    solidBg: "var(--color-success)"
  },
  danger: {
    bg: "var(--color-danger-bg)",
    fg: "var(--color-danger-text)",
    solidBg: "var(--color-danger)"
  },
  warning: {
    bg: "var(--color-warning-bg)",
    fg: "var(--color-warning-text)",
    solidBg: "var(--color-warning)"
  },
  info: {
    bg: "var(--color-info-bg)",
    fg: "var(--color-info-text)",
    solidBg: "var(--color-info)"
  }
};
const SIZES = {
  sm: {
    h: 20,
    fs: 11,
    px: 6,
    icon: 12
  },
  md: {
    h: 24,
    fs: 12,
    px: 8,
    icon: 14
  },
  lg: {
    h: 28,
    fs: 13,
    px: 10,
    icon: 16
  }
};

/** Badge — compact status / count label. */
function Badge({
  children,
  theme = "neutral",
  variant = "subtle",
  size = "md",
  leadingIcon,
  dot = false,
  style,
  ...rest
}) {
  const t = THEMES[theme] || THEMES.neutral;
  const s = SIZES[size] || SIZES.md;
  const solid = variant === "solid";
  const outline = variant === "outline";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: s.h,
      padding: `0 ${s.px}px`,
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.01em",
      color: solid ? "var(--white)" : t.fg,
      background: solid ? t.solidBg : outline ? "transparent" : t.bg,
      border: outline ? `1px solid ${t.fg}` : "1px solid transparent",
      borderRadius: "var(--radius-full)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: solid ? "var(--white)" : t.solidBg
    }
  }), leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: s.icon
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: {
    h: "var(--control-h-xs)",
    px: 12,
    fs: 13,
    icon: 16,
    gap: 6
  },
  sm: {
    h: "var(--control-h-sm)",
    px: 16,
    fs: 14,
    icon: 18,
    gap: 6
  },
  md: {
    h: "var(--control-h-md)",
    px: 20,
    fs: 15,
    icon: 20,
    gap: 8
  },
  lg: {
    h: "var(--control-h-lg)",
    px: 24,
    fs: 16,
    icon: 20,
    gap: 8
  },
  xl: {
    h: "var(--control-h-xl)",
    px: 28,
    fs: 18,
    icon: 24,
    gap: 10
  }
};
const LEVELS = {
  primary: {
    bg: "var(--color-accent)",
    bgHover: "var(--color-accent-hover)",
    bgActive: "var(--color-accent-pressed)",
    fg: "var(--color-text-on-accent)",
    bd: "transparent"
  },
  neutral: {
    bg: "var(--gray-12)",
    bgHover: "var(--gray-11)",
    bgActive: "var(--gray-10)",
    fg: "var(--white)",
    bd: "transparent"
  },
  secondary: {
    bg: "var(--color-surface)",
    bgHover: "var(--color-surface-alt)",
    bgActive: "var(--color-surface-sunken)",
    fg: "var(--color-text)",
    bd: "var(--color-border)"
  },
  tertiary: {
    bg: "transparent",
    bgHover: "var(--color-surface-alt)",
    bgActive: "var(--color-surface-sunken)",
    fg: "var(--color-text)",
    bd: "transparent"
  },
  danger: {
    bg: "var(--color-danger)",
    bgHover: "var(--red-11)",
    bgActive: "var(--red-11)",
    fg: "var(--white)",
    bd: "transparent"
  },
  success: {
    bg: "var(--color-success)",
    bgHover: "var(--green-11)",
    bgActive: "var(--green-11)",
    fg: "var(--white)",
    bd: "transparent"
  }
};

/** Button — primary action control. Pill-shaped by default (ZEN signature). */
function Button({
  children,
  level = "primary",
  size = "md",
  shape = "pill",
  leadingIcon,
  trailingIcon,
  fullWidth = false,
  disabled = false,
  loading = false,
  type = "button",
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const lv = LEVELS[level] || LEVELS.primary;
  const off = disabled || loading;
  const bg = active ? lv.bgActive : hover ? lv.bgHover : lv.bg;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: off,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}px`,
      boxSizing: "border-box",
      fontFamily: "var(--font-button)",
      fontSize: s.fs,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: "-0.01em",
      whiteSpace: "nowrap",
      color: lv.fg,
      background: bg,
      border: `1px solid ${lv.bd === "transparent" ? "transparent" : active || hover ? "var(--color-border-strong)" : lv.bd}`,
      borderRadius: shape === "pill" ? "var(--radius-full)" : "var(--radius-base)",
      boxShadow: focus ? "var(--shadow-focus)" : level === "secondary" ? "var(--shadow-xs)" : "none",
      cursor: off ? "not-allowed" : "pointer",
      opacity: off ? 0.45 : 1,
      outline: "none",
      transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      userSelect: "none",
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, {
    size: s.icon
  }), !loading && leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: s.icon
  }), children != null && /*#__PURE__*/React.createElement("span", null, children), !loading && trailingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: s.icon
  }));
}
function Spinner({
  size = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      animation: "zen-spin 0.7s linear infinite"
    },
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeOpacity: "0.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3a9 9 0 0 1 9 9",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes zen-spin{to{transform:rotate(360deg)}}"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: {
    box: 32,
    icon: 18
  },
  sm: {
    box: 40,
    icon: 20
  },
  md: {
    box: 48,
    icon: 22
  },
  lg: {
    box: 56,
    icon: 24
  }
};
const LEVELS = {
  primary: {
    bg: "var(--color-accent)",
    bgHover: "var(--color-accent-hover)",
    fg: "var(--color-text-on-accent)",
    bd: "transparent"
  },
  neutral: {
    bg: "var(--gray-12)",
    bgHover: "var(--gray-11)",
    fg: "var(--white)",
    bd: "transparent"
  },
  secondary: {
    bg: "var(--color-surface)",
    bgHover: "var(--color-surface-alt)",
    fg: "var(--color-text)",
    bd: "var(--color-border)"
  },
  tertiary: {
    bg: "transparent",
    bgHover: "var(--color-surface-alt)",
    fg: "var(--color-text-muted)",
    bd: "transparent"
  },
  danger: {
    bg: "var(--color-danger)",
    bgHover: "var(--red-11)",
    fg: "var(--white)",
    bd: "transparent"
  }
};

/** IconButton — square/pill icon-only action. */
function IconButton({
  icon,
  label,
  level = "tertiary",
  size = "md",
  shape = "pill",
  disabled = false,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const lv = LEVELS[level] || LEVELS.tertiary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      padding: 0,
      boxSizing: "border-box",
      color: lv.fg,
      background: hover ? lv.bgHover : lv.bg,
      border: `1px solid ${lv.bd}`,
      borderRadius: shape === "pill" ? "var(--radius-full)" : "var(--radius-base)",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      outline: "none",
      transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 28,
    fs: 13,
    px: 10,
    icon: 14
  },
  md: {
    h: 36,
    fs: 14,
    px: 12,
    icon: 16
  }
};

/** Tag — selectable / dismissable chip with optional avatar dot, icon, close. */
function Tag({
  children,
  size = "md",
  selected = false,
  leadingIcon,
  color,
  onClose,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: s.h,
      padding: `0 ${onClose ? s.px - 2 : s.px}px 0 ${s.px}px`,
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      fontWeight: 500,
      lineHeight: 1,
      color: selected ? "var(--color-text-on-accent)" : "var(--color-text)",
      background: selected ? "var(--color-accent)" : hover && interactive ? "var(--color-surface-alt)" : "var(--color-surface)",
      border: `1px solid ${selected ? "transparent" : "var(--color-border)"}`,
      borderRadius: "var(--radius-full)",
      whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : interactive ? "pointer" : "default",
      opacity: disabled ? 0.45 : 1,
      userSelect: "none",
      ...style
    }
  }, rest), color && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: color
    }
  }), leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: s.icon
  }), children, onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onClose(e);
    },
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.icon + 4,
      height: s.icon + 4,
      marginLeft: 2,
      padding: 0,
      border: "none",
      background: "transparent",
      borderRadius: "50%",
      color: "inherit",
      cursor: "pointer",
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-circle-line",
    size: s.icon
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Accordion — collapsible sections. items: [{title, content}]. */
function Accordion({
  items = [],
  multiple = false,
  defaultOpen = [],
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => setOpen(prev => {
    const next = new Set(multiple ? prev : []);
    if (prev.has(i)) next.delete(i);else next.add(i);
    return next;
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-base)",
      overflow: "hidden",
      background: "var(--color-surface)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderTop: i === 0 ? "none" : "1px solid var(--color-border)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 16px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600,
        color: "var(--color-text)"
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 20,
      color: "var(--color-text-muted)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down-line",
      size: 20,
      color: "var(--color-text-subtle)",
      style: {
        transform: isOpen ? "rotate(180deg)" : "none",
        transition: "transform var(--dur-base) var(--ease-standard)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows var(--dur-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px 16px",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.55,
        color: "var(--color-text-muted)"
      }
    }, it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/data/ListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ListItem — row with leading visual, title/subtitle, trailing slot. */
function ListItem({
  title,
  subtitle,
  leadingIcon,
  leading,
  trailing,
  selected = false,
  onClick,
  showChevron = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 12px",
      boxSizing: "border-box",
      borderRadius: "var(--radius-base)",
      cursor: interactive ? "pointer" : "default",
      background: selected ? "var(--color-accent-bg)" : interactive && hover ? "var(--color-surface-alt)" : "transparent",
      transition: "background var(--dur-fast)",
      ...style
    }
  }, rest), leading ? leading : leadingIcon ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-sm)",
      background: "var(--color-surface-sunken)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color: "var(--color-text-muted)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: 20
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--color-text)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--color-text-subtle)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, subtitle)), trailing, showChevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right-01-line",
    size: 18,
    color: "var(--color-text-disabled)"
  }));
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Stat — KPI metric with optional delta trend. */
function Stat({
  label,
  value,
  unit,
  delta,
  deltaDirection,
  icon,
  style,
  ...rest
}) {
  const dir = deltaDirection || (delta != null && String(delta).trim().startsWith("-") ? "down" : "up");
  const positive = dir === "up";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--color-text-subtle)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--color-text-subtle)",
      letterSpacing: "0.01em"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: "-0.02em",
      color: "var(--color-text)",
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--color-text-subtle)"
    }
  }, unit)), delta != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: positive ? "var(--color-success-text)" : "var(--color-danger-text)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: positive ? "arrow-up-line" : "arrow-down-line",
    size: 14
  }), delta));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const THEMES = {
  info: {
    fg: "var(--color-info-text)",
    bg: "var(--color-info-bg)",
    solid: "var(--color-info)",
    icon: "info-circle-line"
  },
  success: {
    fg: "var(--color-success-text)",
    bg: "var(--color-success-bg)",
    solid: "var(--color-success)",
    icon: "check-circle-line"
  },
  warning: {
    fg: "var(--color-warning-text)",
    bg: "var(--color-warning-bg)",
    solid: "var(--color-warning)",
    icon: "alert-triangle-line"
  },
  danger: {
    fg: "var(--color-danger-text)",
    bg: "var(--color-danger-bg)",
    solid: "var(--color-danger)",
    icon: "alert-circle-line"
  },
  neutral: {
    fg: "var(--color-text)",
    bg: "var(--color-surface-sunken)",
    solid: "var(--gray-12)",
    icon: "info-circle-line"
  },
  brand: {
    fg: "var(--color-accent-text)",
    bg: "var(--color-accent-bg)",
    solid: "var(--color-accent)",
    icon: "zap-line"
  }
};

/** Alert — inline message / banner with theme, title, and optional dismiss. */
function Alert({
  theme = "info",
  title,
  children,
  icon,
  variant = "subtle",
  onClose,
  action,
  style,
  ...rest
}) {
  const t = THEMES[theme] || THEMES.info;
  const solid = variant === "solid";
  const iconName = icon ?? t.icon;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    style: {
      display: "flex",
      gap: 12,
      padding: 14,
      boxSizing: "border-box",
      background: solid ? t.solid : t.bg,
      border: variant === "outline" ? `1px solid ${t.solid}` : "1px solid transparent",
      borderRadius: "var(--radius-base)",
      color: solid ? "var(--white)" : "var(--color-text)",
      ...style
    }
  }, rest), iconName && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 20,
    color: solid ? "var(--white)" : t.solid,
    style: {
      marginTop: 1,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 600,
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.5,
      color: solid ? "rgba(255,255,255,0.9)" : "var(--color-text-muted)"
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      color: solid ? "var(--white)" : "var(--color-text-subtle)",
      display: "inline-flex",
      flexShrink: 0,
      opacity: 0.8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-circle-line",
    size: 20
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const THEMES = {
  neutral: {
    solid: "var(--gray-12)",
    icon: null
  },
  success: {
    solid: "var(--color-success)",
    icon: "check-circle-solid"
  },
  danger: {
    solid: "var(--color-danger)",
    icon: "alert-circle-solid"
  },
  warning: {
    solid: "var(--color-warning)",
    icon: "alert-triangle-line"
  },
  info: {
    solid: "var(--color-info)",
    icon: "info-circle-solid"
  },
  brand: {
    solid: "var(--color-accent)",
    icon: "zap-solid"
  }
};

/** Toast — transient notification card (presentational; position handled by app). */
function Toast({
  theme = "neutral",
  title,
  children,
  icon,
  onClose,
  action,
  style,
  ...rest
}) {
  const t = THEMES[theme] || THEMES.neutral;
  const iconName = icon ?? t.icon;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      width: 360,
      maxWidth: "90vw",
      padding: 14,
      boxSizing: "border-box",
      background: "var(--color-surface)",
      border: "1px solid var(--color-border-pale)",
      borderRadius: "var(--radius-base)",
      boxShadow: "var(--shadow-overlay)",
      ...style
    }
  }, rest), iconName && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconName,
    size: 20,
    color: t.solid
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--color-text)",
      marginBottom: children ? 2 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.45,
      color: "var(--color-text-muted)"
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      color: "var(--color-text-subtle)",
      display: "inline-flex",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-circle-line",
    size: 20
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — controlled or uncontrolled, with optional label & description. */
function Checkbox({
  checked,
  defaultChecked,
  indeterminate = false,
  onChange,
  label,
  description,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(v => !v);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      gap: 10,
      alignItems: description ? "flex-start" : "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      flexShrink: 0,
      width: 20,
      height: 20,
      marginTop: description ? 1 : 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 6,
      transition: "background var(--dur-fast), border-color var(--dur-fast)",
      background: on || indeterminate ? "var(--color-accent)" : "var(--color-surface)",
      border: `1.5px solid ${on || indeterminate ? "var(--color-accent)" : "var(--color-border-strong)"}`,
      color: "var(--white)"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus-line",
    size: 16
  }) : on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check-line",
    size: 16
  }) : null), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 500,
      color: "var(--color-text)",
      lineHeight: 1.3
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--color-text-subtle)",
      lineHeight: 1.4
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 40,
    fs: 14,
    px: 12,
    icon: 18
  },
  md: {
    h: 48,
    fs: 15,
    px: 14,
    icon: 20
  },
  lg: {
    h: 56,
    fs: 16,
    px: 16,
    icon: 22
  }
};

/** Input — text field with label, helper / error text and optional icons. */
function Input({
  label,
  hint,
  error,
  size = "md",
  leadingIcon,
  trailingIcon,
  onTrailingClick,
  disabled = false,
  required = false,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const invalid = !!error;
  const borderColor = invalid ? "var(--color-danger)" : focus ? "var(--color-accent)" : "var(--color-border)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--color-text)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-danger)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      boxSizing: "border-box",
      background: disabled ? "var(--color-surface-sunken)" : "var(--color-surface)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-base)",
      boxShadow: focus ? invalid ? "0 0 0 3px var(--color-danger-bg)" : "var(--shadow-focus)" : "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      opacity: disabled ? 0.6 : 1
    }
  }, leadingIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: leadingIcon,
    size: s.icon,
    color: "var(--color-text-subtle)"
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    disabled: disabled,
    "aria-invalid": invalid,
    required: required,
    onFocus: (e) => { setFocus(true); rest.onFocus && rest.onFocus(e); },
    onBlur: (e) => { setFocus(false); rest.onBlur && rest.onBlur(e); },
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      color: "var(--color-text)",
      ...style
    }
  }, (({ onFocus: _f, onBlur: _b, ...r }) => r)(rest))), trailingIcon && (onTrailingClick ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onTrailingClick,
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      color: "var(--color-text-subtle)",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: s.icon
  })) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: s.icon,
    color: "var(--color-text-subtle)"
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: invalid ? "var(--color-danger-text)" : "var(--color-text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 40,
    fs: 14,
    px: 12
  },
  md: {
    h: 48,
    fs: 15,
    px: 14
  },
  lg: {
    h: 56,
    fs: 16,
    px: 16
  }
};

/** Select — custom dropdown. options: [{value,label}] or string[]. */
function Select({
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder = "Select…",
  label,
  hint,
  error,
  size = "md",
  disabled = false,
  searchable = false,
  searchPlaceholder = "Tìm kiếm…",
  style,
  containerStyle,
  ...rest
}) {
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const [open, setOpen] = React.useState(false);
  const [menuPos, setMenuPos] = React.useState(null);
  const [query, setQuery] = React.useState("");
  const ref = React.useRef(null);
  const searchRef = React.useRef(null);
  const s = SIZES[size] || SIZES.md;
  const invalid = !!error;
  const selected = norm.find(o => o.value === current);
  const visible = searchable && query ? norm.filter(o => o.label.toLowerCase().includes(query.toLowerCase())) : norm;
  React.useEffect(() => {
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  React.useEffect(() => {
    if (open) {
      setQuery("");
      if (searchable) setTimeout(() => searchRef.current && searchRef.current.focus(), 0);
    }
  }, [open]);
  // Menu is measured from the trigger and rendered fixed-to-viewport instead of
  // being confined to the relatively-positioned wrapper, so an ancestor's
  // overflow:hidden/auto (e.g. a table card) can never clip it; flips upward
  // when there isn't enough room below.
  React.useLayoutEffect(() => {
    if (!open) return;
    const MARGIN = 8, MAX_H = 280;
    const reposition = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom - MARGIN;
      const spaceAbove = rect.top - MARGIN;
      const dir = spaceBelow < 160 && spaceAbove > spaceBelow ? "up" : "down";
      setMenuPos({
        left: rect.left,
        width: rect.width,
        top: dir === "down" ? rect.bottom + 6 : undefined,
        bottom: dir === "up" ? window.innerHeight - rect.top + 6 : undefined,
        maxHeight: Math.max(120, Math.min(MAX_H, (dir === "down" ? spaceBelow : spaceAbove) - 6)),
        dir
      });
    };
    reposition();
    window.addEventListener("scroll", reposition, true);
    window.addEventListener("resize", reposition);
    return () => {
      window.removeEventListener("scroll", reposition, true);
      window.removeEventListener("resize", reposition);
    };
  }, [open]);
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--color-text)"
    }
  }, label), /*#__PURE__*/React.createElement("div", _extends({
    ref: ref,
    style: {
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      color: selected ? "var(--color-text)" : "var(--color-text-subtle)",
      background: disabled ? "var(--color-surface-sunken)" : "var(--color-surface)",
      border: `1px solid ${invalid ? "var(--color-danger)" : open ? "var(--color-accent)" : "var(--color-border)"}`,
      borderRadius: "var(--radius-base)",
      cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: open ? "var(--shadow-focus)" : "none",
      outline: "none",
      textAlign: "left",
      opacity: disabled ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down-line",
    size: 20,
    color: "var(--color-text-subtle)",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-fast)"
    }
  })), open && menuPos && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: menuPos.top,
      bottom: menuPos.bottom,
      left: menuPos.left,
      width: menuPos.width,
      zIndex: 1200,
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-base)",
      boxShadow: "var(--shadow-overlay)",
      padding: 6,
      maxHeight: menuPos.maxHeight,
      overflowY: "auto",
      animation: (menuPos.dir === "up" ? "zen-select-up" : "zen-select-down") + " .16s cubic-bezier(.2,0,0,1)"
    }
  }, searchable && /*#__PURE__*/React.createElement("input", {
    ref: searchRef,
    type: "text",
    value: query,
    onChange: e => setQuery(e.target.value),
    onClick: e => e.stopPropagation(),
    placeholder: searchPlaceholder,
    style: {
      width: "100%",
      boxSizing: "border-box",
      marginBottom: 6,
      padding: "7px 9px",
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      color: "var(--color-text)",
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-sm)",
      outline: "none"
    }
  }), searchable && visible.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 8px",
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--color-text-subtle)"
    }
  }, "Không tìm thấy kết quả"), visible.map(o => {
    const active = o.value === current;
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      onClick: () => pick(o.value),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: "9px 10px",
        borderRadius: "var(--radius-sm)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: s.fs,
        color: "var(--color-text)",
        background: active ? "var(--color-accent-bg)" : "transparent"
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.background = "var(--color-surface-alt)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement("span", null, o.label), active && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check-line",
      size: 18,
      color: "var(--color-accent-text)"
    }));
  }), /*#__PURE__*/React.createElement("style", null, "@keyframes zen-select-down{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}@keyframes zen-select-up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}"))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: invalid ? "var(--color-danger-text)" : "var(--color-text-subtle)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Breadcrumbs — hierarchical path. items: [{label,href?,icon?}]. */
function Breadcrumbs({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 4,
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || undefined,
      "aria-current": last ? "page" : undefined,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "4px 8px",
        borderRadius: "var(--radius-sm)",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: last ? 600 : 500,
        color: last ? "var(--color-text)" : "var(--color-text-muted)",
        textDecoration: "none",
        cursor: last ? "default" : "pointer"
      },
      onMouseEnter: e => {
        if (!last) e.currentTarget.style.background = "var(--color-surface-alt)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = "transparent";
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16
    }), it.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right-01-line",
      size: 16,
      color: "var(--color-text-disabled)"
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function range(start, end) {
  const a = [];
  for (let i = start; i <= end; i++) a.push(i);
  return a;
}

/** Pagination — page navigator with truncation. */
function Pagination({
  page,
  defaultPage = 1,
  total = 1,
  onChange,
  siblingCount = 1,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultPage);
  const isControlled = page !== undefined;
  const current = isControlled ? page : internal;
  const go = p => {
    const np = Math.max(1, Math.min(total, p));
    if (!isControlled) setInternal(np);
    onChange && onChange(np);
  };
  const pages = [];
  const left = Math.max(2, current - siblingCount);
  const right = Math.min(total - 1, current + siblingCount);
  pages.push(1);
  if (left > 2) pages.push("…l");
  pages.push(...range(left, right));
  if (right < total - 1) pages.push("…r");
  if (total > 1) pages.push(total);
  const Item = ({
    children,
    active,
    disabled,
    onClick,
    label
  }) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    "aria-current": active ? "page" : undefined,
    disabled: disabled,
    onClick: onClick,
    style: {
      minWidth: 36,
      height: 36,
      padding: "0 8px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active ? 600 : 500,
      color: active ? "var(--color-text-on-accent)" : disabled ? "var(--color-text-disabled)" : "var(--color-text)",
      background: active ? "var(--color-accent)" : "transparent",
      border: `1px solid ${active ? "transparent" : "var(--color-border)"}`,
      borderRadius: "var(--radius-sm)",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, children);
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Pagination",
    style: {
      display: "inline-flex",
      gap: 6,
      alignItems: "center",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Item, {
    label: "Previous",
    disabled: current === 1,
    onClick: () => go(current - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left-01-line",
    size: 18
  })), pages.map((p, i) => typeof p === "string" ? /*#__PURE__*/React.createElement("span", {
    key: p + i,
    style: {
      minWidth: 24,
      textAlign: "center",
      color: "var(--color-text-subtle)"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement(Item, {
    key: p,
    active: p === current,
    onClick: () => go(p),
    label: "Page " + p
  }, p)), /*#__PURE__*/React.createElement(Item, {
    label: "Next",
    disabled: current === total,
    onClick: () => go(current + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right-01-line",
    size: 18
  })));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Segmented.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Segmented — compact toggle group for 2–4 mutually-exclusive options. */
function Segmented({
  items = [],
  value,
  defaultValue,
  onChange,
  size = "md",
  fullWidth = false,
  style,
  ...rest
}) {
  const norm = items.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.value);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  const h = size === "sm" ? 32 : 40;
  const fs = size === "sm" ? 13 : 14;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "inline-flex",
      padding: 3,
      gap: 2,
      background: "var(--color-surface-sunken)",
      borderRadius: "var(--radius-full)",
      width: fullWidth ? "100%" : "auto",
      ...style
    }
  }, rest), norm.map(o => {
    const active = o.value === current;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      onClick: () => pick(o.value),
      style: {
        flex: fullWidth ? 1 : "0 0 auto",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        height: h,
        padding: "0 16px",
        fontFamily: "var(--font-sans)",
        fontSize: fs,
        fontWeight: active ? 600 : 500,
        color: active ? "var(--color-text)" : "var(--color-text-muted)",
        background: active ? "var(--color-surface)" : "transparent",
        border: "none",
        borderRadius: "var(--radius-full)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        boxShadow: active ? "var(--shadow-sm)" : "none",
        transition: "background var(--dur-fast), color var(--dur-fast)"
      }
    }, o.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: o.icon,
      size: size === "sm" ? 16 : 18
    }), o.label);
  }));
}
Object.assign(__ds_scope, { Segmented });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Segmented.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tabs — underline or pill tab bar. items: [{value,label,icon?,badge?}]. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  fullWidth = false,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  const pill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: pill ? 4 : 4,
      alignItems: "stretch",
      padding: pill ? 4 : 0,
      background: pill ? "var(--color-surface-sunken)" : "transparent",
      borderRadius: pill ? "var(--radius-full)" : 0,
      borderBottom: pill ? "none" : "1px solid var(--color-border)",
      ...style
    }
  }, rest), items.map(it => {
    const active = it.value === current;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => pick(it.value),
      style: {
        flex: fullWidth ? 1 : "0 0 auto",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 7,
        padding: pill ? "8px 16px" : "10px 14px",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: active ? 600 : 500,
        color: active ? pill ? "var(--color-text)" : "var(--color-accent-text)" : "var(--color-text-muted)",
        background: pill ? active ? "var(--color-surface)" : "transparent" : "transparent",
        border: "none",
        borderRadius: pill ? "var(--radius-full)" : 0,
        boxShadow: pill && active ? "var(--shadow-sm)" : "none",
        borderBottom: pill ? "none" : `2px solid ${active ? "var(--color-accent)" : "transparent"}`,
        marginBottom: pill ? 0 : -1,
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "color var(--dur-fast), background var(--dur-fast)"
      }
    }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 18
    }), it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 18,
        height: 18,
        padding: "0 5px",
        borderRadius: "var(--radius-full)",
        background: active ? "var(--color-accent)" : "var(--color-surface-sunken)",
        color: active ? "var(--white)" : "var(--color-text-muted)",
        fontSize: 11,
        fontWeight: 700,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, it.badge));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Modal — centered dialog with scrim. Renders nothing when closed. */
function Modal({
  open,
  onClose,
  title,
  description,
  children,
  footer,
  size = "md",
  showClose = true,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  const widths = {
    sm: 400,
    md: 520,
    lg: 680
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    },
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      background: "var(--color-overlay)",
      backdropFilter: "blur(2px)",
      animation: "zen-fade var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      maxWidth: widths[size] || widths.md,
      maxHeight: "90vh",
      display: "flex",
      flexDirection: "column",
      background: "var(--color-surface)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-overlay)",
      border: "1px solid var(--color-border-pale)",
      overflow: "hidden",
      animation: "zen-pop var(--dur-base) var(--ease-emphasized)",
      ...style
    }
  }, rest), (title || showClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "20px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--color-text-muted)",
      marginTop: 4,
      lineHeight: 1.5
    }
  }, description)), showClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      padding: 6,
      margin: -6,
      cursor: "pointer",
      color: "var(--color-text-subtle)",
      display: "inline-flex",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x-circle-line",
    size: 22
  }))), children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      overflowY: "auto",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--color-text)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      padding: "0 20px 20px"
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, "@keyframes zen-fade{from{opacity:0}to{opacity:1}}@keyframes zen-pop{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}"));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Modal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ai-chat/Chat.jsx
try { (() => {
// AI Chat — message thread + composer, built from ZEN primitives.
const ChatNS = window.ZENKaizenDesignSystem_4069b4;
function TypingDots() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 4,
      alignItems: "center",
      padding: "4px 2px"
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--color-text-subtle)",
      animation: `zen-bounce 1s ${i * 0.15}s infinite`
    }
  })), /*#__PURE__*/React.createElement("style", null, "@keyframes zen-bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-4px);opacity:1}}"));
}
function Bubble({
  role,
  children
}) {
  const me = role === "user";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: me ? "flex-end" : "flex-start",
      gap: 10
    }
  }, !me && /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(ChatNS.Icon, {
    name: "zap-solid",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "76%",
      padding: "11px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 14.5,
      lineHeight: 1.55,
      background: me ? "var(--color-accent)" : "var(--color-surface)",
      color: me ? "#fff" : "var(--color-text)",
      border: me ? "none" : "1px solid var(--color-border-pale)",
      borderRadius: 18,
      borderBottomRightRadius: me ? 5 : 18,
      borderBottomLeftRadius: me ? 18 : 5,
      boxShadow: me ? "none" : "var(--shadow-xs)"
    }
  }, children));
}
function AIChat() {
  const {
    Icon,
    IconButton,
    Button,
    Tag,
    Avatar
  } = ChatNS;
  const [msgs, setMsgs] = React.useState([{
    role: "ai",
    text: "Hi Mai — I'm Kaiz, your design assistant. What can I help you build today?"
  }, {
    role: "user",
    text: "Generate a pricing page hero using the ZEN tokens."
  }, {
    role: "ai",
    text: "On it. I'll use the brand pink for the primary CTA, Inter for type, and pill buttons. Want one plan highlighted?"
  }]);
  const [draft, setDraft] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const scroller = React.useRef(null);
  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = scroller.current.scrollHeight;
  }, [msgs, typing]);
  const send = () => {
    const t = draft.trim();
    if (!t) return;
    setMsgs(m => [...m, {
      role: "user",
      text: t
    }]);
    setDraft("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, {
        role: "ai",
        text: "Done — I've drafted that layout with a highlighted middle plan and a pill CTA. Want me to add a comparison table below?"
      }]);
    }, 1400);
  };
  const suggestions = ["Add a feature comparison", "Make it dark mode", "Export to HTML"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "var(--color-bg)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 20px",
      borderBottom: "1px solid var(--color-border)",
      background: "var(--color-surface)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap-solid",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--color-text)"
    }
  }, "Kaiz Assistant"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--color-success-text)",
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--color-success)"
    }
  }), "Online")), /*#__PURE__*/React.createElement(IconButton, {
    icon: "dots-horizontal-line",
    label: "More",
    level: "tertiary"
  })), /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(Bubble, {
    key: i,
    role: m.role
  }, m.text)), typing && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "var(--color-accent)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zap-solid",
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border-pale)",
      borderRadius: 18,
      borderBottomLeftRadius: 5,
      padding: "8px 14px"
    }
  }, /*#__PURE__*/React.createElement(TypingDots, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px 18px",
      borderTop: "1px solid var(--color-border)",
      background: "var(--color-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 10,
      flexWrap: "wrap"
    }
  }, suggestions.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    size: "sm",
    onClick: () => setDraft(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 10,
      background: "var(--color-bg)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-xl)",
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "paperclip-line",
    label: "Attach",
    level: "tertiary"
  }), /*#__PURE__*/React.createElement("textarea", {
    value: draft,
    onChange: e => setDraft(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    rows: 1,
    placeholder: "Message Kaiz\u2026",
    style: {
      flex: 1,
      resize: "none",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--color-text)",
      padding: "9px 4px",
      maxHeight: 120
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "send-01-line",
    label: "Send",
    level: "primary",
    onClick: send
  }))));
}
window.AIChatScreen = AIChat;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ai-chat/Chat.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Chrome.jsx
try { (() => {
// Console — shared chrome: Sidebar + Topbar. Uses the ZEN bundle on window.
const NS = window.ZENKaizenDesignSystem_4069b4;
const {
  Icon,
  Avatar,
  Badge,
  IconButton
} = NS;
const NAV = [{
  id: "home",
  label: "Dashboard",
  icon: "home-01-line"
}, {
  id: "members",
  label: "Members",
  icon: "user-circle-line",
  badge: 24
}, {
  id: "billing",
  label: "Billing",
  icon: "bar-chart-square-02-line"
}, {
  id: "messages",
  label: "Messages",
  icon: "message-chat-circle-line",
  badge: 3
}, {
  id: "files",
  label: "Files",
  icon: "folder-line"
}];
const NAV2 = [{
  id: "settings",
  label: "Settings",
  icon: "settings-01-line"
}, {
  id: "help",
  label: "Help & docs",
  icon: "info-circle-line"
}];
function NavRow({
  item,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      width: "100%",
      padding: "9px 11px",
      border: "none",
      borderRadius: "var(--radius-base)",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active ? 600 : 500,
      color: active ? "var(--color-accent-text)" : "var(--color-text-muted)",
      background: active ? "var(--color-accent-bg)" : hover ? "var(--color-surface-alt)" : "transparent",
      transition: "background var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: item.icon,
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: "var(--radius-full)",
      background: active ? "var(--color-accent)" : "var(--color-surface-sunken)",
      color: active ? "#fff" : "var(--color-text-muted)",
      fontSize: 11,
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, item.badge));
}
function Sidebar({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flexShrink: 0,
      height: "100%",
      boxSizing: "border-box",
      background: "var(--color-surface)",
      borderRight: "1px solid var(--color-border)",
      display: "flex",
      flexDirection: "column",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "6px 8px 18px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: (window.__resources && window.__resources.logoFpt) || "../../assets/logo-fpt.webp",
    alt: "FPT",
    style: {
      height: 26,
      width: "auto"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement(NavRow, {
    key: n.id,
    item: n,
    active: active === n.id,
    onClick: () => onNavigate && onNavigate(n.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      marginBottom: 12
    }
  }, NAV2.map(n => /*#__PURE__*/React.createElement(NavRow, {
    key: n.id,
    item: n,
    active: active === n.id,
    onClick: () => onNavigate && onNavigate(n.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: 8,
      borderRadius: "var(--radius-base)",
      border: "1px solid var(--color-border-pale)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mai Lan",
    size: "sm",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--color-text)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "Mai Lan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      color: "var(--color-text-subtle)"
    }
  }, "Admin")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-selector-vertical-line",
    size: 16,
    color: "var(--color-text-subtle)"
  })));
}
function Topbar({
  title,
  subtitle,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "18px 28px",
      borderBottom: "1px solid var(--color-border)",
      background: "var(--color-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "var(--color-text)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--color-text-subtle)",
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "search-medium-line",
    label: "Search",
    level: "secondary"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell-01-line",
    label: "Notifications",
    level: "secondary"
  }), actions));
}
Object.assign(window, {
  ConsoleSidebar: Sidebar,
  ConsoleTopbar: Topbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Dashboard.jsx
try { (() => {
// Console — Dashboard screen body. Composes ZEN components + Chrome.
const DashNS = window.ZENKaizenDesignSystem_4069b4;
function MiniBars({
  data,
  color
}) {
  const max = Math.max(...data);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 4,
      height: 48
    }
  }, data.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: `${v / max * 100}%`,
      minHeight: 4,
      background: color,
      borderRadius: 3,
      opacity: i === data.length - 1 ? 1 : 0.45
    }
  })));
}
function Dashboard() {
  const {
    Card,
    Stat,
    Table,
    Badge,
    Avatar,
    Button,
    Tabs,
    Tag,
    Divider
  } = DashNS;
  const [range, setRange] = React.useState("week");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: range,
    onChange: setRange,
    items: [{
      value: "day",
      label: "Day"
    }, {
      value: "week",
      label: "Week"
    }, {
      value: "month",
      label: "Month"
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    level: "primary",
    leadingIcon: "plus-line"
  }, "New invoice")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, [{
    label: "Revenue",
    value: "₫48.2M",
    delta: "+12.4%",
    icon: "bar-chart-square-02-line",
    data: [4, 6, 5, 8, 7, 9, 12],
    color: "var(--color-accent)"
  }, {
    label: "Active members",
    value: "1,284",
    delta: "+3.1%",
    icon: "user-circle-line",
    data: [8, 7, 9, 8, 10, 11, 12],
    color: "var(--blue-9)"
  }, {
    label: "Open tickets",
    value: "37",
    delta: "-8.0%",
    deltaDirection: "down",
    icon: "message-chat-circle-line",
    data: [12, 10, 11, 8, 7, 6, 5],
    color: "var(--green-9)"
  }, {
    label: "Conversion",
    value: "5.9",
    unit: "%",
    delta: "+0.6%",
    icon: "zap-line",
    data: [3, 4, 4, 5, 5, 6, 6],
    color: "var(--orange-9)"
  }].map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    padding: "md"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: s.label,
    value: s.value,
    unit: s.unit,
    delta: s.delta,
    deltaDirection: s.deltaDirection,
    icon: s.icon
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(MiniBars, {
    data: s.data,
    color: s.color
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--color-text)"
    }
  }, "Recent invoices"), /*#__PURE__*/React.createElement(Button, {
    level: "tertiary",
    size: "sm",
    trailingIcon: "arrow-right-line"
  }, "View all")), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "id",
      header: "Invoice",
      render: v => /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-dev)",
          fontSize: 13
        }
      }, v)
    }, {
      key: "client",
      header: "Client",
      render: v => /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: v,
        size: "xs"
      }), /*#__PURE__*/React.createElement("span", null, v))
    }, {
      key: "amount",
      header: "Amount",
      align: "right",
      render: v => /*#__PURE__*/React.createElement("span", {
        style: {
          fontVariantNumeric: "tabular-nums",
          fontWeight: 600
        }
      }, v)
    }, {
      key: "status",
      header: "Status",
      render: v => /*#__PURE__*/React.createElement(Badge, {
        dot: true,
        theme: v === "Paid" ? "success" : v === "Overdue" ? "danger" : "warning"
      }, v)
    }],
    data: [{
      id: "INV-2043",
      client: "Tran Vu",
      amount: "₫4.20M",
      status: "Paid"
    }, {
      id: "INV-2042",
      client: "Le Hoa",
      amount: "₫1.85M",
      status: "Pending"
    }, {
      id: "INV-2041",
      client: "Pham An",
      amount: "₫9.10M",
      status: "Overdue"
    }, {
      id: "INV-2040",
      client: "Nguyen Bao",
      amount: "₫2.40M",
      status: "Paid"
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 17,
      fontWeight: 600,
      color: "var(--color-text)",
      marginBottom: 14
    }
  }, "Activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, [{
    who: "Le Hoa",
    what: "approved invoice INV-2042",
    when: "2m",
    icon: "check-circle-solid",
    color: "var(--color-success)"
  }, {
    who: "Tran Vu",
    what: "uploaded 4 brand files",
    when: "1h",
    icon: "upload-cloud-line",
    color: "var(--blue-9)"
  }, {
    who: "Pham An",
    what: "left a comment on Q3 report",
    when: "3h",
    icon: "message-circle-line",
    color: "var(--color-accent)"
  }, {
    who: "System",
    what: "monthly billing run completed",
    when: "1d",
    icon: "zap-solid",
    color: "var(--orange-9)"
  }].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 32,
      height: 32,
      borderRadius: "50%",
      background: "var(--color-surface-sunken)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: a.color
    }
  }, /*#__PURE__*/React.createElement(DashNS.Icon, {
    name: a.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: "var(--font-sans)",
      fontSize: 13.5,
      lineHeight: 1.4,
      color: "var(--color-text-muted)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--color-text)",
      fontWeight: 600
    }
  }, a.who), " ", a.what, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--color-text-subtle)",
      marginTop: 1
    }
  }, a.when, " ago"))))))));
}
window.ConsoleDashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Members.jsx
try { (() => {
// Console — Members screen + a settings Modal demo.
const MemNS = window.ZENKaizenDesignSystem_4069b4;
function Members() {
  const {
    Card,
    Table,
    Avatar,
    Badge,
    Tag,
    Button,
    Input,
    Segmented,
    Switch,
    Modal,
    Select,
    IconButton
  } = MemNS;
  const [q, setQ] = React.useState("");
  const [view, setView] = React.useState("all");
  const [invite, setInvite] = React.useState(false);
  const all = [{
    name: "Mai Lan",
    email: "mai.lan@fpt.com",
    role: "Admin",
    team: "Design",
    status: "Active"
  }, {
    name: "Tran Vu",
    email: "tran.vu@fpt.com",
    role: "Editor",
    team: "Engineering",
    status: "Active"
  }, {
    name: "Le Hoa",
    email: "le.hoa@fpt.com",
    role: "Editor",
    team: "Design",
    status: "Active"
  }, {
    name: "Pham An",
    email: "pham.an@fpt.com",
    role: "Viewer",
    team: "Finance",
    status: "Invited"
  }, {
    name: "Nguyen Bao",
    email: "bao.n@fpt.com",
    role: "Viewer",
    team: "Operations",
    status: "Active"
  }];
  const rows = all.filter(r => (view === "all" || view === "invited" === (r.status === "Invited")) && (r.name.toLowerCase().includes(q.toLowerCase()) || r.email.toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Search members",
    leadingIcon: "search-medium-line",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Segmented, {
    size: "sm",
    value: view,
    onChange: setView,
    items: [{
      value: "all",
      label: "All"
    }, {
      value: "active",
      label: "Active"
    }, {
      value: "invited",
      label: "Invited"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    level: "secondary",
    size: "sm",
    leadingIcon: "filter-lines-line"
  }, "Filter"), /*#__PURE__*/React.createElement(Button, {
    level: "primary",
    size: "sm",
    leadingIcon: "plus-line",
    onClick: () => setInvite(true)
  }, "Invite")), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "name",
      header: "Member",
      render: (v, r) => /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: v,
        size: "sm",
        status: r.status === "Active" ? "online" : "offline"
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600
        }
      }, v), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          color: "var(--color-text-subtle)"
        }
      }, r.email)))
    }, {
      key: "team",
      header: "Team",
      render: v => /*#__PURE__*/React.createElement(Tag, {
        size: "sm"
      }, v)
    }, {
      key: "role",
      header: "Role",
      render: v => /*#__PURE__*/React.createElement(Badge, {
        theme: v === "Admin" ? "brand" : "neutral"
      }, v)
    }, {
      key: "status",
      header: "Status",
      render: v => /*#__PURE__*/React.createElement(Badge, {
        dot: true,
        theme: v === "Active" ? "success" : "warning"
      }, v)
    }, {
      key: "x",
      header: "",
      align: "right",
      width: 48,
      render: () => /*#__PURE__*/React.createElement(IconButton, {
        icon: "dots-horizontal-line",
        label: "More",
        level: "tertiary",
        size: "xs"
      })
    }],
    data: rows
  })), /*#__PURE__*/React.createElement(Modal, {
    open: invite,
    onClose: () => setInvite(false),
    title: "Invite a member",
    description: "They'll receive an email invitation to join your workspace.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      level: "tertiary",
      onClick: () => setInvite(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      level: "primary",
      onClick: () => setInvite(false)
    }, "Send invite"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email address",
    placeholder: "name@fpt.com",
    leadingIcon: "mail-01-line"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Role",
    options: ["Admin", "Editor", "Viewer"],
    defaultValue: "Editor"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Send a welcome message",
    defaultChecked: true
  }))));
}
window.ConsoleMembers = Members;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Members.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Segmented = __ds_scope.Segmented;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Modal = __ds_scope.Modal;

})();
