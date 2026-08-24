# FPT CMS Admin — Project Instructions

## Design System
Always load the FPT Design System bundle from `_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/`. Never invent colors, type, spacing, or components not grounded in the design system.

---

# Global UX Rules – CRUD Interaction Pattern

These rules are **mandatory** and apply across the entire project. Do not deviate unless explicitly instructed.

## 1. Editing Pattern

### Always use Inline Full-Page Editor

* Every **Create** and **Edit** action must open as an **Inline Full-Page Editor**.
* The editor replaces the current content area instead of opening a modal or drawer.
* The page should preserve navigation context (breadcrumb, page title, back button).
* Users remain within the same workflow without context switching.
* The editor should support long forms, sticky action bars, validation, autosave (if applicable), and responsive layouts.

### Never use Drawer for Editing

Do NOT use:

* Right Drawer
* Left Drawer
* Modal Dialog
* Popup Form

for Create or Edit operations.

The default editing experience is always the Inline Full-Page Editor.

---

## 2. View Pattern

### Use Right Drawer for Read-Only Detail View

When a user clicks a row inside any table:

* Open a **Right Side Drawer**
* Drawer slides in from the right.
* Display all information of the selected record.
* Content is **read-only**.
* No editable fields.
* No inline editing inside the drawer.

The drawer is only used for:

* Quick inspection
* Detail preview
* Information lookup

Editing must require clicking an **Edit** button, which navigates to the Inline Full-Page Editor.

---

## 3. Table Interaction

Apply these behaviors to **every table** across the system.

### Hover State

Every table row must have:

* Light gray hover background
* Smooth transition (150–200ms)
* Pointer cursor
* Entire row is clickable

Hover should clearly communicate that the row can be opened.

---

### Row Click

Clicking anywhere on a row should:

* Open the Detail Drawer
* Preserve table scroll position
* Keep current filters
* Keep sorting state
* Keep pagination state

Closing the drawer returns the user to the exact previous table state.

---

## 4. Editing Flow

The interaction flow must always follow this sequence:

Table → Click Row → Read-Only Detail Drawer → Click "Edit" → Navigate to Inline Full-Page Editor → Save / Cancel → Return to Previous Table State

---

## 5. Visual Consistency

Maintain consistent interaction patterns across all modules.

Never introduce alternative CRUD patterns such as:

* Drawer editing
* Modal editing
* Inline row editing
* Popover forms

unless explicitly requested.

Consistency is more important than local optimization.

---

## 6. Design Principle

* Read first, edit intentionally.
* Editing deserves dedicated space.
* Viewing should be fast and lightweight.
* Large forms require full-page focus.
* Tables are navigation surfaces, not editing surfaces.
* Every module should behave identically to reduce cognitive load.

---

## 7. Rule Priority

These interaction rules are global project standards.

Whenever generating:

* new pages
* new CRUD modules
* new table components
* admin interfaces
* dashboards
* management screens

always follow these rules by default unless the user explicitly overrides them.

---

## 8. Dropdown / Select Menu Overflow

Any floating option menu (Select, combobox, autocomplete, tag picker, filter dropdown) **must never be visually clipped** by an ancestor's `overflow: hidden` / `overflow: auto` — this is a recurring bug in tables, grouped-row editors and cards (e.g. the "Tag line" column of the shared cycles table in Thông tin checkout, where the menu got sliced off by the table Card's rounded-corner `overflow: hidden`).

Mandatory behavior for every dropdown/popover menu:

* Render the open menu positioned relative to the **viewport** (`position: fixed`, coordinates measured live from the trigger's `getBoundingClientRect()`) — never `position: absolute` confined to a parent that might clip it.
* Recompute the menu's position when it opens, and keep it anchored on `scroll`/`resize` while open (a nested scroll container's `scroll` event doesn't bubble — listen on `window` with `capture: true`).
* Flip the menu **upward** when there isn't enough room below the trigger; clamp `maxHeight` to whatever space is actually available in that direction.
* Don't reinvent this per-module: `DS.Select` (`_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/_ds_bundle.js`) already implements this centrally — reuse `DS.Select` for every new dropdown instead of hand-rolling a new absolute-positioned menu that will inherit the same clipping bug.

---

## 9. Sticky "Thao tác" (Action) Column

Every table's action column ("Thao tác" / "Thao tác nhanh" — the column holding row-level icon buttons like Sửa/Xóa/Kích hoạt) **must stay pinned to the right edge** while the table scrolls horizontally, so it stays reachable even when other columns' content is long enough to force a horizontal scroll. Pin with a light drop shadow on its left edge (only while actually scrolled) so it visually floats above the scrolled content, matching the reference screenshot the user provided (Danh sách mã SKU → "Thao tác nhanh" column).

This is implemented centrally, not per-module:

* `DS.Table` (`_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/_ds_bundle.js`) supports a `sticky: true` flag on a column definition (`columns: [{ key, header, ..., sticky: true }]`), which pins that `<th>`/`<td>` with `position: sticky; right: 0` and an opaque background matching the row's hover state.
* The shared `tbl(columns, data, rowKey, onRowClick)` helper (defined once on the app's root component) auto-marks any column with `key === 'act'` as `sticky` — so any module using `this.tbl(...)` gets this for free, no per-call-site change needed. This is why the action column convention (`key: 'act'`, last in the array, `align: 'right'`) must be kept consistent across every module.
* The shadow is a `linear-gradient` overlay on a `.fpt-table-sticky-col::before` pseudo-element (purely horizontal fade, `top:0;bottom:0`, no vertical falloff), toggled to `opacity:1` by an ancestor `fpt-table-scrolled` class — itself toggled by an `onScroll` listener on the table's horizontal-scroll wrapper (`scrollLeft > 2`) via cheap `classList.toggle`, no re-render. Any hand-rolled table that bypasses `tbl()` (e.g. a custom `DS.Table` usage) must wire up the same `onScroll` handler and pass `sticky: true` on its action column, and must pass `overflow: 'visible'` in `DS.Table`'s `style` prop — the wrapper's default `overflow: 'hidden'` (used for rounded-corner clipping) would otherwise become the sticky positioning's containing block instead of the real scroll container, breaking the pin.
* **Gotcha — do NOT implement this shadow with `box-shadow`, it was tried twice and failed both times:** (1) `box-shadow` on a `<td>`/`<th>` is silently **not painted at all** when the parent `<table>` has `border-collapse: collapse` — `getComputedStyle` still reports the shadow correctly, so this is invisible without pixel-sampling a real screenshot. (2) Even after forcing `border-collapse: separate`, `box-shadow`'s blur radius fades out vertically at *each cell's own* top/bottom edge (every `<td>` is a separate box), so instead of one continuous shadow down the column you get a visibly seamed "shadow per row" — exactly the artifact this row exists to warn about. The `linear-gradient` pseudo-element sidesteps both problems: it isn't `box-shadow` (unaffected by border-collapse) and has zero vertical variation (no vertical component in the gradient), so adjacent cells' overlays are pixel-identical at the seam.
* Don't hand-roll a separate "frozen column" implementation per module — reuse this `sticky` column flag the same way `DS.Select` is reused for dropdowns (see §8).

---

## 10. Full-Page Editor: Field Hierarchy & Visual Grouping

Every Inline Full-Page Editor (§1) must organize its fields into clearly separated, logically ordered groups — never one long unbroken column of inputs. This is a standard already established by the more mature editors in the codebase (`renderBannerEditor`, `renderPopupEditor`); apply it to every editor going forward, not just the ones it happened to be built into first.

### Preferred structure: numbered `DS.Card` sections

For any editor with 3+ logical field groups, wrap each group in its own `DS.Card` with a numbered, icon-labeled header, using the local `section()` helper pattern already used by Banner/Popup/Section editors:

```js
const section = (num, icon, title, ...content) => h(DS.Card, { key: 'sec' + num },
  h('div', { style: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 } },
    h(DS.Icon, { name: icon, size: 18, color: 'var(--color-accent)' }),
    h('span', { style: { fontWeight: 700, fontSize: 14.5, color: 'var(--color-accent-text)' } }, num + '. ' + title)
  ),
  h('div', { style: { display: 'flex', flexDirection: 'column', gap: 14 } }, ...content)
);
```

Re-declare this helper locally in each `renderXEditor` (it's cheap and keeps each editor self-contained) rather than trying to share one instance across modules. For a small editor (1-2 field groups, e.g. simple name+slug forms), plain `DS.Divider({label:'…'})` group separators inside a single flowing column (no cards) is still acceptable — don't force the card treatment where it adds no clarity.

### Standing toggle placement

If the record has one primary on/off state (`Trạng thái hoạt động` / active-inactive), pull it out of any card and render it as a standalone highlighted bar at the very top of the form, above section 1 — not buried inside a "Cấu hình hiển thị" card with the other secondary toggles:

```js
h('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 12, background: 'var(--color-surface-alt)', borderRadius: 10 } },
  h('span', { style: { fontWeight: 600, fontSize: 13.5 } }, 'Trạng thái hoạt động'),
  h(DS.Switch, { defaultChecked: /* … */ })
)
```

Secondary/less-critical switches (nổi bật, filter, breadcrumb, v.v.) stay grouped together inside their own later card — never scattered across other groups.

### Group ordering (top → bottom)

Order groups by how central and how often-touched the field is, not alphabetically or by data-model order:

1. **Standing status toggle** (if any) — see above, outside any card.
2. **Thông tin cơ bản** — identity/classification fields: name (admin-facing), display title (public-facing), code/slug, type/category select, parent/page relation, order. These are what the list table and filters key off of, so they come first. Pair tightly related fields in a 2-column grid row (e.g. admin name + display title; code + type); give a short field its own narrow column (e.g. `gridTemplateColumns: '1fr 100px'` for an order number next to a page select) instead of stretching it full width.
3. **Content-adjacent groups** — CTA text/link, SEO meta, or similar "what does this say / where does it point" fields. Own card/divider if the group is thematically distinct from group 1.
4. **Hình ảnh & tài nguyên** — always its own card. Image/icon/file fields always use `this.uploadBox(label, hint, required)` — never a raw `DS.Input` for an asset URL (keeps the drag-drop upload UX consistent app-wide; `uploadBox` now supports a `required` 3rd arg for the red-asterisk marker).
5. **Cấu hình hiển thị** — remaining behavior toggles, grouped together in one card.
6. **Quan hệ / liên kết** — relations to other entities (e.g. gắn Blocks, tag pickers, multi-select pickers). Optional/advanced, so it goes last.

Not every editor needs all six groups — skip what doesn't apply, but keep the relative order when multiple groups are present.

### Required-field marking

Use the existing `this.field(label, control, required)` red-asterisk convention for every required text/select/textarea field, and the mirrored `required` arg on `this.uploadBox(label, hint, required)` for required media fields. Never invent a different required-marker style. `DS.Switch` toggles are never marked required — a boolean always has a value, so "required" doesn't apply to them.

Never wrap an editor's fields in an explanatory `DS.Alert` implying the record is shared/global (e.g. "cập nhật sẽ ảnh hưởng mọi trang đang gán…") unless the underlying data model actually supports that many-to-many relationship — check the field itself (a single-select "thuộc trang" means the record belongs to exactly one parent, not many) before writing copy that claims otherwise.

---

## 11. Searchable Dropdown Threshold

Any `DS.Select` whose resolved `options` list has **5 or more entries** (count the actual rendered list — including any leading "— Tất cả —" / "— Chọn —" placeholder option — not just the data array) must be built with the search box shown in the reference screenshot for "Nhóm câu hỏi" (Danh mục FAQ) on the Page editor: a search input pinned to the top of the open menu, filtering options as you type.

This is not a new component — `DS.Select` (`_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/_ds_bundle.js`) already implements it centrally via two props:

```js
h(DS.Select, {
  options: myOptions,
  value: current,
  searchable: true,
  searchPlaceholder: 'Tìm …',   // short, specific to the field (e.g. 'Tìm nhóm câu hỏi…', 'Tìm trang…')
  onChange: v => …
})
```

Mandatory behavior going forward, for both new selects and edits to existing ones:

* **Count at build time, not just today's data.** For a select fed by a static/hardcoded array, count the literal entries. For a select fed by `this.SOME_DATA().map(...)` or similar, use the current data size — but if the list is a growing catalog (SKUs, pages, menu items, categories, badges/tags, templates…) rather than a fixed enum (Vai trò with 4 roles, Ngôn ngữ with 2, Trạng thái with 2–3 states), default to `searchable: true` even if today's count sits just under 5 — these lists only grow, and retrofitting every call site later is exactly the churn this rule exists to avoid.
* Never hand-roll a text-filter input next to a plain `DS.Select` — pass `searchable`/`searchPlaceholder` instead, the same way dropdown-clipping is fixed by reusing `DS.Select` per §8, not by hand-rolling positioning.
* This applies uniformly to filter-bar selects (list toolbars) and to form-field selects inside Inline Full-Page Editors (§1) — a select doesn't get an exemption for being "just a filter."
* When the same option list is duplicated across a live editor and older drawer/modal code for the same entity (e.g. a `render*Editor` full-page version and an older `open*Drawer`/`open*Modal` version left over from before §1 was adopted), apply `searchable` to both — don't fix only the reachable one and leave a stale duplicate inconsistent.

---

## 12. Image Upload Size Limits

Every `this.uploadBox(label, hint, required)` for a raster image (JPG/PNG/WebP — not applicable to SVG icons where file weight isn't a concern) must cap file size at:

* **Desktop-facing image (or a single, non-split upload):** `≤200KB`
* **Mobile-facing image, when the editor has a separate Desktop/Mobile pair for the same visual:** `≤150KB`

This was already the dominant pattern before being written down here — see the paired calls in package cards, checkout icons, banners, and popups (`this.uploadBox('… - Desktop (ratio)', '≤200KB')` / `this.uploadBox('… - Mobile (ratio)', '≤150KB')`). Section 3 "Hình ảnh đại diện" of the News/Article editor was the one outlier still hinting `≤2MB` — fixed to `≤200KB` to match.

Mandatory going forward:

* Any **new** `uploadBox` call for a raster image defaults to this rule — `≤200KB` if it's a single upload, or the `Desktop ≤200KB` / `Mobile ≤150KB` pair if the editor needs distinct crops per breakpoint.
* Don't invent other caps (`≤1MB`, `≤2MB`, `≤10MB`, or no cap at all) for new raster-image fields — those looser limits predate this rule and are legacy, not a pattern to copy.
* This rule documents forward-looking behavior for new/edited fields; it does not itself mandate a repo-wide sweep of every pre-existing `uploadBox` call outside the one being touched — fix an outlier when you're already working in that editor, the same way §8/§9 outliers get fixed opportunistically rather than all at once.

---

## 13. Character-Limit Fields Must Hard-Cap Input and Show a Clear "At Limit" State

Any text/textarea field whose hint/note advertises a character limit (e.g. "tối đa 255 ký tự", "tối đa 1000 ký tự") must physically stop the user from typing past that limit — never let the field silently accept unlimited input while merely warning about it after the fact.

Mandatory behavior for every character-limited field, new or edited:

* Pass `maxLength: MAX` to the `DS.Input`/`DS.Textarea` call — this is the native, browser-enforced hard stop and costs nothing even on an otherwise-uncontrolled (`defaultValue`-only) field.
* For a field that's already controlled (`value` + `onChange`, needed elsewhere in that editor), also clamp defensively inside the `onChange` handler — `value: (v || '').slice(0, MAX)` — so the state itself can never exceed `MAX` regardless of paste/IME edge cases that `maxLength` alone doesn't always catch on a controlled input.
* Still show a live, unmistakable "at limit" signal once the user reaches the cap — don't rely on the static hint/note alone, since silently refusing further keystrokes with no visual change reads as a broken keyboard, not a deliberate limit. The established pattern (see "Mô tả card gói" in the package content editor, `renderSkuEditorContent`): turn the note itself into a live counter — `Tối đa ${MAX} ký tự (${value.length}/${MAX})`, switching its color to `var(--color-danger-text)` once `value.length >= MAX` (and appending a short "— đã đạt giới hạn" suffix). This reuses the note slot that's already there per this section's own note-adding convention, rather than introducing a second counter element.
* This applies whether the field is a `DS.Input`/`DS.Textarea` hint, a §12-style static note (e.g. a table `colHead` note like "Tối đa 255 ký tự"), or a placeholder-only field with the limit mentioned inline (e.g. "Mô tả SEO ngắn (150–160 ký tự)…") — every one of these gets the matching `maxLength`. A field only needs the live color-changing counter treatment when it's realistically long/prose-like (multi-line descriptions); a short single-line SEO/meta field with `maxLength` alone (no live counter) is acceptable since hitting the native cap while typing a short field is self-evident.
* Does not apply to a *minimum*-length note (e.g. "Tối thiểu 6 ký tự" on a password field) — there's nothing to cap; a minimum is validated on submit, not by blocking keystrokes.
