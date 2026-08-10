/* FPT DatePicker — faithful browser adaptation of DS DatePicker.jsx
   Extends window.ZENKaizenDesignSystem_4069b4 with: Calendar, DatePicker, DateRangePicker
   Load AFTER _ds_bundle.js */
(function init(retry) {
  var React = window.React;
  if (!React) { if (retry < 20) setTimeout(function(){ init(retry+1); }, 30); return; }
  var h = React.createElement;
  var DS = window.ZENKaizenDesignSystem_4069b4 || {};
  var Icon = DS.Icon;

  /* ── helpers ───────────────────────────────────────────────────────────── */
  function daysInMonth(y, m) { return new Date(y, m + 1, 0).getDate(); }
  function firstDow(y, m) { return (new Date(y, m, 1).getDay() + 6) % 7; } // Mon=0
  function same(a, b) {
    return !!(a && b && a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() && a.getDate() === b.getDate());
  }
  function fmtD(d, fmt) {
    if (!d) return "";
    return (fmt || "dd/MM/yyyy")
      .replace("dd", String(d.getDate()).padStart(2, "0"))
      .replace("MM", String(d.getMonth() + 1).padStart(2, "0"))
      .replace("yyyy", String(d.getFullYear()));
  }
  function inBound(d, mn, mx) { return !(mn && d < mn) && !(mx && d > mx); }

  var DOW = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  var MOS = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
    "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
  var SZ = {
    sm: { h: 40, fs: 14, px: 12, ic: 18 },
    md: { h: 48, fs: 15, px: 14, ic: 20 },
    lg: { h: 56, fs: 16, px: 16, ic: 22 }
  };

  /* ── NavBtn ─────────────────────────────────────────────────────────────── */
  function NavBtn(props) {
    var hs = React.useState(false); var hov = hs[0], setH = hs[1];
    return h("button", {
      type: "button", "aria-label": props.label, onClick: props.onClick,
      onMouseEnter: function () { setH(true); }, onMouseLeave: function () { setH(false); },
      style: {
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: 32, height: 32, border: "1px solid var(--color-border)",
        borderRadius: "50%", padding: 0,
        background: hov ? "var(--color-surface-sunken)" : "var(--color-surface)",
        color: "var(--color-text)", cursor: "pointer", outline: "none", flexShrink: 0,
        transition: "background var(--dur-fast)"
      }
    }, h(Icon, { name: props.icon, size: 14 }));
  }

  /* ── DayCell ────────────────────────────────────────────────────────────── */
  function DayCell(props) {
    var hs = React.useState(false); var hov = hs[0], setH = hs[1];
    var isSelected = props.isSelected, inRange = props.inRange, disabled = props.disabled;
    var isToday = props.isToday, isRangeStart = props.isRangeStart, isRangeEnd = props.isRangeEnd;

    var circleBg = "transparent";
    var cc = disabled ? "var(--color-text-disabled)" : "var(--color-text)";
    if (isSelected) { circleBg = "var(--color-accent)"; cc = "#ffffff"; }
    else if (hov && !disabled) { circleBg = "var(--color-surface-sunken)"; }

    var wrapBg = "transparent";
    if (inRange) {
      wrapBg = "var(--color-accent-bg)";
    } else if (isRangeStart && !isRangeEnd) {
      wrapBg = "linear-gradient(90deg, transparent 50%, var(--color-accent-bg) 50%)";
    } else if (isRangeEnd && !isRangeStart) {
      wrapBg = "linear-gradient(90deg, var(--color-accent-bg) 50%, transparent 50%)";
    }

    return h("div", { style: { background: wrapBg, display: "flex", alignItems: "center", justifyContent: "center" } },
      h("button", {
        type: "button", onClick: props.onClick, disabled: disabled,
        onMouseEnter: function () { setH(true); }, onMouseLeave: function () { setH(false); },
        style: {
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          width: 34, height: 34, border: "none", borderRadius: "50%",
          background: circleBg, color: cc,
          fontSize: 13, fontFamily: "var(--font-sans)", fontWeight: isSelected ? 700 : 400,
          cursor: disabled ? "not-allowed" : "pointer", outline: "none", position: "relative",
          transition: "background var(--dur-fast),color var(--dur-fast)"
        }
      },
        props.label,
        isToday && !isSelected && h("div", {
          style: {
            width: 4, height: 4, borderRadius: "50%", background: "var(--color-accent)",
            position: "absolute", bottom: 3, left: "50%", transform: "translateX(-50%)"
          }
        })
      )
    );
  }

  /* ── CalendarGrid ───────────────────────────────────────────────────────── */
  function CalendarGrid(props) {
    var view = props.view, value = props.value, mode = props.mode;
    var rangeStart = props.rangeStart, rangeEnd = props.rangeEnd;
    var onDayClick = props.onDayClick, minDate = props.minDate, maxDate = props.maxDate;
    var today = new Date();
    var offset = firstDow(view.year, view.month);
    var total = daysInMonth(view.year, view.month);
    var cells = [];
    for (var i = 0; i < offset; i++) cells.push(null);
    for (var d = 1; d <= total; d++) cells.push(new Date(view.year, view.month, d));

    function isSel(date) {
      if (!date) return false;
      return mode === "single" ? same(date, value) : same(date, rangeStart) || same(date, rangeEnd);
    }
    function inRng(date) {
      return !(!date || mode !== "range" || !rangeStart || !rangeEnd) && date > rangeStart && date < rangeEnd;
    }

    return h("div", null,
      h("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)", marginBottom: 4 } },
        DOW.map(function (d, i) {
          return h("div", {
            key: i,
            style: { textAlign: "center", fontSize: 12, fontWeight: 500, color: "var(--color-text-subtle)", padding: "2px 0 8px", fontFamily: "var(--font-sans)" }
          }, d);
        })
      ),
      h("div", { style: { display: "grid", gridTemplateColumns: "repeat(7,1fr)" } },
        cells.map(function (date, idx) {
          if (!date) return h("div", { key: "e" + idx, style: { height: 34 } });
          var sel = isSel(date), inR = inRng(date), tod = same(date, today);
          var dis = !inBound(date, minDate, maxDate);
          var isRS = same(date, rangeStart), isRE = same(date, rangeEnd);
          return h(DayCell, {
            key: idx, label: date.getDate(),
            isToday: tod, isSelected: sel, inRange: inR,
            isRangeStart: isRS, isRangeEnd: isRE, disabled: dis,
            onClick: function () { if (!dis && onDayClick) onDayClick(date); }
          });
        })
      )
    );
  }

  /* ── MonthYearPicker ────────────────────────────────────────────────────── */
  function MonthYearPicker(props) {
    var Y0 = 2000, Y1 = 2050;
    var years = [];
    for (var y = Y0; y <= Y1; y++) years.push(String(y));

    var mIs = React.useState(props.month); var mI = mIs[0], sMI = mIs[1];
    var yIs = React.useState(props.year - Y0); var yI = yIs[0], sYI = yIs[1];

    function Col(cp) {
      var items = cp.items, selIdx = cp.selIdx, onCh = cp.onChange, align = cp.align || "left";
      var alphas = [0.18, 0.45, 1, 0.45, 0.18], sizes = [13, 14, 17, 14, 13];
      return h("div", { style: { flex: 1, display: "flex", flexDirection: "column" } },
        [-2, -1, 0, 1, 2].map(function (off, ri) {
          var idx = selIdx + off;
          var item = (idx >= 0 && idx < items.length) ? items[idx] : "";
          var isSel = off === 0;
          return h("div", {
            key: ri,
            onClick: function () { if (item && !isSel) onCh(idx); },
            style: {
              padding: "9px 16px", fontSize: sizes[ri], fontWeight: isSel ? 700 : 400,
              fontFamily: "var(--font-sans)", opacity: item ? alphas[ri] : 0,
              color: "var(--color-text)", cursor: item && !isSel ? "pointer" : "default",
              textAlign: align, userSelect: "none"
            }
          }, item);
        })
      );
    }

    return h("div", { style: { background: "var(--color-surface)" } },
      h("div", { style: { display: "flex", background: "var(--color-surface-sunken)", padding: "10px 16px", borderBottom: "1px solid var(--color-border-pale)" } },
        h("span", { style: { flex: 1, fontSize: 15, fontWeight: 600, color: "var(--color-text)", fontFamily: "var(--font-sans)" } }, MOS[mI]),
        h("span", { style: { fontSize: 15, fontWeight: 600, color: "var(--color-text)", fontFamily: "var(--font-sans)" } }, years[yI])
      ),
      h("div", { style: { display: "flex" } },
        Col({ items: MOS, selIdx: mI, onChange: sMI, align: "left" }),
        Col({ items: years, selIdx: yI, onChange: sYI, align: "right" })
      ),
      h("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, padding: "12px 16px", borderTop: "1px solid var(--color-border-pale)" } },
        h("button", {
          type: "button", onClick: props.onCancel,
          style: { padding: "8px 20px", borderRadius: "var(--radius-full)", border: "1px solid var(--color-border)", background: "transparent", fontFamily: "var(--font-sans)", fontSize: 14, cursor: "pointer", color: "var(--color-text)" }
        }, "Hủy"),
        h("button", {
          type: "button", onClick: function () { if (props.onSubmit) props.onSubmit(mI, Y0 + yI); },
          style: { padding: "8px 20px", borderRadius: "var(--radius-full)", border: "none", background: "var(--color-accent)", fontFamily: "var(--font-sans)", fontSize: 14, cursor: "pointer", color: "#fff", fontWeight: 600 }
        }, "Áp dụng")
      )
    );
  }

  /* ── Calendar ───────────────────────────────────────────────────────────── */
  function Calendar(props) {
    var value = props.value, onChange = props.onChange;
    var rangeStart = props.rangeStart, rangeEnd = props.rangeEnd, onDayClick = props.onDayClick;
    var mode = props.mode || "single", minDate = props.minDate, maxDate = props.maxDate, style = props.style;
    var today = new Date();
    var seed = value || rangeStart || today;
    var vs = React.useState({ year: seed.getFullYear(), month: seed.getMonth() });
    var view = vs[0], setView = vs[1];
    var ps = React.useState(false); var picker = ps[0], setPicker = ps[1];

    React.useEffect(function () {
      if (value) setView({ year: value.getFullYear(), month: value.getMonth() });
    }, [value]);

    function prev() { setView(function (v) { var d = new Date(v.year, v.month - 1); return { year: d.getFullYear(), month: d.getMonth() }; }); }
    function next() { setView(function (v) { var d = new Date(v.year, v.month + 1); return { year: d.getFullYear(), month: d.getMonth() }; }); }
    function handleDay(date) {
      if (mode === "single") { if (onChange) onChange(date); }
      else { if (onDayClick) onDayClick(date); }
    }

    return h("div", {
      style: Object.assign({
        background: "var(--color-surface)", border: "1px solid var(--color-border-pale)",
        borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-overlay)",
        padding: 16, width: 296, boxSizing: "border-box",
        userSelect: "none", fontFamily: "var(--font-sans)", overflow: "hidden"
      }, style)
    },
      picker
        ? h(MonthYearPicker, {
          month: view.month, year: view.year,
          onCancel: function () { setPicker(false); },
          onSubmit: function (m, y) { setView({ year: y, month: m }); setPicker(false); }
        })
        : h("div", null,
          h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 } },
            h(NavBtn, { icon: "chevron-left-01-line", label: "Prev month", onClick: prev }),
            h("button", {
              type: "button", onClick: function () { setPicker(true); },
              style: { fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--color-text)", background: "transparent", border: "none", cursor: "pointer", outline: "none" }
            }, MOS[view.month] + " " + view.year),
            h(NavBtn, { icon: "chevron-right-01-line", label: "Next month", onClick: next })
          ),
          h(CalendarGrid, { view: view, value: value, mode: mode, rangeStart: rangeStart, rangeEnd: rangeEnd, onDayClick: handleDay, minDate: minDate, maxDate: maxDate })
        )
    );
  }

  /* ── DatePicker ─────────────────────────────────────────────────────────── */
  function DatePicker(props) {
    var label = props.label, hint = props.hint, error = props.error;
    var required = props.required || false, size = props.size || "md";
    var valueProp = props.value, defaultValue = props.defaultValue, onChange = props.onChange;
    var placeholder = props.placeholder || "dd/mm/yyyy";
    var disabled = props.disabled || false;
    var format = props.format || "dd/MM/yyyy";
    var minDate = props.minDate, maxDate = props.maxDate, containerStyle = props.containerStyle;

    var os = React.useState(false); var open = os[0], setOpen = os[1];
    var is = React.useState(defaultValue || null); var inner = is[0], setInner = is[1];
    var fs = React.useState(false); var focus = fs[0], setFocus = fs[1];
    var controlled = valueProp !== undefined;
    var date = controlled ? valueProp : inner;
    var ref = React.useRef(null);
    var s = SZ[size] || SZ.md, invalid = !!error;

    React.useEffect(function () {
      if (!open) return;
      function fn(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
      document.addEventListener("mousedown", fn);
      return function () { document.removeEventListener("mousedown", fn); };
    }, [open]);

    function pick(d) { if (!controlled) setInner(d); if (onChange) onChange(d); setOpen(false); }
    function clear(e) { e.stopPropagation(); pick(null); }

    var bc = invalid ? "var(--color-danger)" : (open || focus) ? "var(--color-accent)" : "var(--color-border)";
    var bs = (open || focus) ? (invalid ? "0 0 0 3px var(--color-danger-bg)" : "var(--shadow-focus)") : "none";

    return h("div", { ref: ref, style: Object.assign({ display: "inline-flex", flexDirection: "column", gap: 6, position: "relative" }, containerStyle) },
      label && h("label", { style: { fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--color-text)" } },
        label, required && h("span", { style: { color: "var(--color-danger)", marginLeft: 2 } }, "*")),
      h("button", {
        type: "button", disabled: disabled,
        onFocus: function () { setFocus(true); }, onBlur: function () { setFocus(false); },
        onClick: function () { if (!disabled) setOpen(function (o) { return !o; }); },
        style: {
          display: "flex", alignItems: "center", gap: 8,
          height: s.h, padding: "0 " + s.px + "px", boxSizing: "border-box", width: 248,
          background: disabled ? "var(--color-surface-sunken)" : "var(--color-surface)",
          border: "1px solid " + bc, borderRadius: "var(--radius-base)",
          boxShadow: bs, opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "not-allowed" : "pointer", outline: "none",
          transition: "border-color var(--dur-fast),box-shadow var(--dur-fast)"
        }
      },
        h(Icon, { name: "calendar-line", size: s.ic, color: date ? "var(--color-accent)" : "var(--color-text-subtle)" }),
        h("span", { style: { flex: 1, textAlign: "left", fontFamily: "var(--font-sans)", fontSize: s.fs, color: date ? "var(--color-text)" : "var(--color-text-subtle)" } },
          date ? fmtD(date, format) : placeholder),
        date && !disabled
          ? h("span", {
            role: "button", tabIndex: 0, onClick: clear,
            onKeyDown: function (e) { if (e.key === "Enter" || e.key === " ") clear(e); },
            style: { display: "inline-flex", padding: 0, cursor: "pointer", color: "var(--color-text-subtle)", flexShrink: 0 }
          }, h(Icon, { name: "x-circle-line", size: 16 }))
          : h(Icon, { name: "chevron-down-line", size: 16, color: "var(--color-text-subtle)" })
      ),
      (error || hint) && h("span", { style: { fontFamily: "var(--font-sans)", fontSize: 13, color: invalid ? "var(--color-danger-text)" : "var(--color-text-subtle)" } }, error || hint),
      open && h("div", { style: { position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 9999 } },
        h(Calendar, { mode: "single", value: date, onChange: pick, minDate: minDate, maxDate: maxDate })
      )
    );
  }

  /* ── DateRangePicker ────────────────────────────────────────────────────── */
  function DateRangePicker(props) {
    var label = props.label, hint = props.hint, error = props.error;
    var required = props.required || false, size = props.size || "md";
    var startDateProp = props.startDate, endDateProp = props.endDate;
    var defaultStart = props.defaultStart, defaultEnd = props.defaultEnd;
    var onChange = props.onChange;
    var placeholderStart = props.placeholderStart || "Start date";
    var placeholderEnd = props.placeholderEnd || "End date";
    var disabled = props.disabled || false;
    var format = props.format || "dd/MM/yyyy";
    var minDate = props.minDate, maxDate = props.maxDate;
    var showTime = props.showTime !== false;
    var containerStyle = props.containerStyle;

    var today = new Date();
    var os = React.useState(false);   var open = os[0], setOpen = os[1];
    var iSs = React.useState(defaultStart || null); var iS = iSs[0], setIS = iSs[1];
    var iEs = React.useState(defaultEnd || null);   var iE = iEs[0], setIE = iEs[1];
    var pks = React.useState(null);   var picking = pks[0], setPicking = pks[1];
    var fcs = React.useState(false);  var focus = fcs[0], setFocus = fcs[1];
    var lvs = React.useState({ year: today.getFullYear(), month: today.getMonth() });
    var leftView = lvs[0], setLeftView = lvs[1];
    var fTs = React.useState({ value: "", period: "AM" }); var fromTime = fTs[0], setFromTime = fTs[1];
    var tTs = React.useState({ value: "", period: "AM" }); var toTime = tTs[0], setToTime = tTs[1];
    var fADs = React.useState(false); var fromAllDay = fADs[0], setFromAllDay = fADs[1];
    var tADs = React.useState(false); var toAllDay = tADs[0], setToAllDay = tADs[1];

    var ctrl = (startDateProp !== undefined) || (endDateProp !== undefined);
    var rs = ctrl ? startDateProp : iS, re = ctrl ? endDateProp : iE;
    var ref = React.useRef(null);
    var s = SZ[size] || SZ.md, invalid = !!error, hasValue = rs || re;

    var rvD = new Date(leftView.year, leftView.month + 1);
    var rightView = { year: rvD.getFullYear(), month: rvD.getMonth() };

    React.useEffect(function () {
      if (!open) return;
      function fn(e) { if (ref.current && !ref.current.contains(e.target)) { setOpen(false); setPicking(null); } }
      document.addEventListener("mousedown", fn);
      return function () { document.removeEventListener("mousedown", fn); };
    }, [open]);

    function dayClick(d) {
      if (picking === "start" || !rs) {
        if (!ctrl) { setIS(d); setIE(null); }
        setPicking("end");
        if (onChange) onChange({ start: d, end: null });
      } else {
        var s2 = rs, e2 = d;
        if (d < rs) { s2 = d; e2 = rs; }
        if (!ctrl) { setIS(s2); setIE(e2); }
        setPicking(null);
        if (onChange) onChange({ start: s2, end: e2 });
      }
    }
    function clearRange(e) {
      e.stopPropagation();
      if (!ctrl) { setIS(null); setIE(null); }
      setPicking(null); setOpen(false);
      if (onChange) onChange({ start: null, end: null });
    }
    function prevMonth() { setLeftView(function (v) { var d = new Date(v.year, v.month - 1); return { year: d.getFullYear(), month: d.getMonth() }; }); }
    function nextMonth() { setLeftView(function (v) { var d = new Date(v.year, v.month + 1); return { year: d.getFullYear(), month: d.getMonth() }; }); }

    var bc = invalid ? "var(--color-danger)" : (open || focus) ? "var(--color-accent)" : "var(--color-border)";
    var bs = (open || focus) ? (invalid ? "0 0 0 3px var(--color-danger-bg)" : "var(--shadow-focus)") : "none";

    function TimeField(tf) {
      return h("div", { style: { display: "flex", flexDirection: "column", gap: 6, flex: 1, minWidth: 0 } },
        h("span", { style: { fontSize: 12, fontWeight: 600, color: "var(--color-text-subtle)", fontFamily: "var(--font-sans)" } }, tf.label),
        h("div", { style: { display: "flex", alignItems: "center", gap: 8 } },
          h("input", {
            type: "text", placeholder: "hh:mm", value: tf.time.value || "",
            onChange: function (e) { if (tf.onTC) tf.onTC(Object.assign({}, tf.time, { value: e.target.value })); },
            style: { flex: 1, minWidth: 0, height: 40, boxSizing: "border-box", border: "1px solid var(--color-border)", borderRadius: "var(--radius-base)", outline: "none", padding: "0 10px", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text)", background: "var(--color-surface)" }
          }),
          // Reuse the shared DS.Select (viewport-anchored menu) instead of a native <select> —
          // a raw <select> here rendered wider than its box on some platforms and bled past
          // the popup's rounded edge; DS.Select can't overflow its trigger.
          h(DS.Select, {
            options: [{ value: "AM", label: "SA" }, { value: "PM", label: "CH" }],
            value: tf.time.period || "AM",
            onChange: function (v) { if (tf.onTC) tf.onTC(Object.assign({}, tf.time, { period: v })); },
            size: "sm",
            containerStyle: { width: 88, flexShrink: 0 }
          })
        ),
        h("label", { style: { display: "flex", alignItems: "center", gap: 6, cursor: "pointer", userSelect: "none", fontSize: 13, fontFamily: "var(--font-sans)", color: "var(--color-text)" } },
          h("input", { type: "checkbox", checked: tf.allDay || false, onChange: function (e) { if (tf.onAD) tf.onAD(e.target.checked); }, style: { width: 14, height: 14, accentColor: "var(--color-accent)", cursor: "pointer" } }),
          "Cả ngày"
        )
      );
    }

    function dtLabel(d, placeholder, time, allDay) {
      if (!d) return h("span", { style: { fontFamily: "var(--font-sans)", fontSize: s.fs, color: "var(--color-text-subtle)", whiteSpace: "nowrap" } }, placeholder);
      return h("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, minWidth: 0 } },
        h("span", { style: { fontFamily: "var(--font-sans)", fontSize: s.fs, fontWeight: 600, color: "var(--color-text)", whiteSpace: "nowrap" } }, fmtD(d, format)),
        allDay && h("span", {
          style: { fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, color: "var(--color-accent-text)", background: "var(--color-accent-bg)", borderRadius: "var(--radius-full)", padding: "1px 8px", whiteSpace: "nowrap", flexShrink: 0 }
        }, "Cả ngày"),
        (!allDay && time && time.value) && h("span", {
          style: { display: "inline-flex", alignItems: "center", gap: 3, fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 500, color: "var(--color-text-subtle)", background: "var(--color-surface-alt)", borderRadius: "var(--radius-full)", padding: "1px 8px 1px 6px", whiteSpace: "nowrap", flexShrink: 0 }
        },
          h(Icon, { name: "clock-line", size: 12, color: "var(--color-text-subtle)" }),
          time.value + " " + (time.period === "PM" ? "CH" : "SA")
        )
      );
    }

    var panel = open && h("div", {
      style: {
        position: "absolute", top: "calc(100% + 6px)", left: 0, zIndex: 9999,
        background: "var(--color-surface)", border: "1px solid var(--color-border-pale)",
        borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-overlay)",
        padding: 20, boxSizing: "border-box", userSelect: "none", width: 580
      }
    },
      h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 } },
        h(NavBtn, { icon: "chevron-left-01-line", label: "Prev", onClick: prevMonth }),
        h("div", { style: { display: "flex", flex: 1, justifyContent: "space-around", padding: "0 8px" } },
          h("span", { style: { fontSize: 15, fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-sans)" } }, MOS[leftView.month] + " " + leftView.year),
          h("span", { style: { fontSize: 15, fontWeight: 700, color: "var(--color-text)", fontFamily: "var(--font-sans)" } }, MOS[rightView.month] + " " + rightView.year)
        ),
        h(NavBtn, { icon: "chevron-right-01-line", label: "Next", onClick: nextMonth })
      ),
      h("div", { style: { display: "flex", gap: 8 } },
        h("div", { style: { flex: 1 } }, h(CalendarGrid, { view: leftView, mode: "range", rangeStart: rs, rangeEnd: re, onDayClick: dayClick, minDate: minDate, maxDate: maxDate })),
        h("div", { style: { width: 1, background: "var(--color-border-pale)", alignSelf: "stretch" } }),
        h("div", { style: { flex: 1 } }, h(CalendarGrid, { view: rightView, mode: "range", rangeStart: rs, rangeEnd: re, onDayClick: dayClick, minDate: minDate, maxDate: maxDate }))
      ),
      showTime && h("div", { style: { marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--color-border-pale)" } },
        h("div", { style: { display: "flex", gap: 16 } },
          TimeField({ label: "Từ", time: fromTime, allDay: fromAllDay, onTC: setFromTime, onAD: setFromAllDay }),
          TimeField({ label: "Đến", time: toTime, allDay: toAllDay, onTC: setToTime, onAD: setToAllDay })
        )
      ),
      h("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 } },
        h("button", {
          type: "button", onClick: function () { setOpen(false); setPicking(null); },
          style: { padding: "8px 20px", borderRadius: "var(--radius-full)", border: "1px solid var(--color-border)", background: "transparent", fontFamily: "var(--font-sans)", fontSize: 14, cursor: "pointer", color: "var(--color-text)" }
        }, "Hủy"),
        h("button", {
          type: "button", onClick: function () { setOpen(false); setPicking(null); },
          style: { padding: "8px 20px", borderRadius: "var(--radius-full)", border: "none", background: "var(--color-accent)", fontFamily: "var(--font-sans)", fontSize: 14, cursor: "pointer", color: "#fff", fontWeight: 600 }
        }, "Xong")
      )
    );

    return h("div", { ref: ref, style: Object.assign({ display: "inline-flex", flexDirection: "column", gap: 6, position: "relative" }, containerStyle) },
      label && h("label", { style: { fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600, color: "var(--color-text)" } },
        label, required && h("span", { style: { color: "var(--color-danger)", marginLeft: 2 } }, "*")),
      h("div", {
        style: {
          display: "flex", alignItems: "stretch", height: s.h,
          background: disabled ? "var(--color-surface-sunken)" : "var(--color-surface)",
          border: "1px solid " + bc, borderRadius: "var(--radius-base)",
          boxShadow: bs, opacity: disabled ? 0.6 : 1, overflow: "hidden", width: containerStyle && containerStyle.width ? containerStyle.width : 340, boxSizing: "border-box",
          transition: "border-color var(--dur-fast),box-shadow var(--dur-fast)"
        }
      },
        h("button", {
          type: "button", disabled: disabled,
          onClick: function () { if (!disabled) { setOpen(true); setPicking("start"); } },
          onFocus: function () { setFocus(true); }, onBlur: function () { setFocus(false); },
          style: { display: "flex", alignItems: "center", gap: 6, flex: 1, padding: "0 " + s.px + "px", border: "none", outline: "none", cursor: "pointer", background: picking === "start" ? "var(--color-accent-bg)" : "transparent", transition: "background var(--dur-fast)" }
        },
          h(Icon, { name: "calendar-line", size: s.ic, color: rs ? "var(--color-accent)" : "var(--color-text-subtle)" }),
          dtLabel(rs, placeholderStart, fromTime, fromAllDay)
        ),
        h("div", { style: { width: 1, alignSelf: "stretch", background: "var(--color-border)", margin: "8px 0" } }),
        h("button", {
          type: "button", disabled: disabled,
          onClick: function () { if (!disabled) { setOpen(true); setPicking("end"); } },
          onFocus: function () { setFocus(true); }, onBlur: function () { setFocus(false); },
          style: { display: "flex", alignItems: "center", gap: 6, flex: 1, padding: "0 " + s.px + "px", border: "none", outline: "none", cursor: "pointer", background: picking === "end" ? "var(--color-accent-bg)" : "transparent", transition: "background var(--dur-fast)" }
        },
          h(Icon, { name: "calendar-line", size: s.ic, color: re ? "var(--color-accent)" : "var(--color-text-subtle)" }),
          dtLabel(re, placeholderEnd, toTime, toAllDay)
        ),
        h("div", { style: { display: "flex", alignItems: "center", paddingRight: 10, gap: 2 } },
          hasValue && !disabled && h("button", {
            type: "button", onClick: clearRange,
            style: { display: "inline-flex", border: "none", background: "transparent", padding: "0 2px", cursor: "pointer", color: "var(--color-text-subtle)" }
          }, h(Icon, { name: "x-circle-line", size: 16 })),
          h(Icon, { name: "chevron-down-line", size: 16, color: "var(--color-text-subtle)" })
        )
      ),
      (error || hint) && h("span", { style: { fontFamily: "var(--font-sans)", fontSize: 13, color: invalid ? "var(--color-danger-text)" : "var(--color-text-subtle)" } }, error || hint),
      panel
    );
  }

  /* ── Register ───────────────────────────────────────────────────────────── */
  window.ZENKaizenDesignSystem_4069b4 = Object.assign(DS, {
    Calendar: Calendar,
    DatePicker: DatePicker,
    DateRangePicker: DateRangePicker
  });
  // legacy alias
  window.FPTDatePicker = { Calendar: Calendar, DatePicker: DatePicker, DateRangePicker: DateRangePicker };
})(0);
