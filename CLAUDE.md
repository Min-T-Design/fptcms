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
* Display the selected record's information — only fields that exist in the table or the editor (see §16).
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

Every table's action column ("Thao tác" / "Thao tác nhanh" — the column holding row-level icon buttons like Sửa/Xóa/Kích hoạt) **must stay pinned to the right edge** while the table scrolls horizontally, so it stays reachable even when other columns' content is long enough to force a horizontal scroll. Pin with an **always-visible 1px stroke** (`var(--color-border)`) on the left edge of the pinned group — no drop shadow, shown whether or not the table is scrolled (user changed this from shadow to stroke on 2026-10-27).

This is implemented centrally, not per-module:

* `DS.Table` (`_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/_ds_bundle.js`) supports a `sticky: true` flag on a column definition (`columns: [{ key, header, ..., sticky: true }]`), which pins that `<th>`/`<td>` with `position: sticky; right: 0` and an opaque background matching the row's hover state.
* The shared `tbl(columns, data, rowKey, onRowClick)` helper (defined once on the app's root component) auto-marks any column with `key === 'act'` as `sticky` — so any module using `this.tbl(...)` gets this for free, no per-call-site change needed. This is why the action column convention (`key: 'act'`, last in the array; `stickyCols()` forces the standard width/alignment/header below, so a module's own `width`/`align`/`header` on `act` are ignored) must be kept consistent across every module.
* The stroke is a 1px-wide `.fpt-table-sticky-col::before` pseudo-element (`left:0;top:0;bottom:0;background:var(--color-border)`), always visible — it no longer depends on the `fpt-table-scrolled` class (the `onScroll` toggles still exist but are now harmless/unused by CSS). Any hand-rolled table that bypasses `tbl()` (e.g. a custom `DS.Table` usage) must wire up the same `onScroll` handler and pass `sticky: true` on its action column, and must pass `overflow: 'visible'` in `DS.Table`'s `style` prop — the wrapper's default `overflow: 'hidden'` (used for rounded-corner clipping) would otherwise become the sticky positioning's containing block instead of the real scroll container, breaking the pin.
* **Gotcha (historical, still valid) — do NOT bring back a shadow via `box-shadow`, it was tried twice and failed both times:** (1) `box-shadow` on a `<td>`/`<th>` is silently **not painted at all** when the parent `<table>` has `border-collapse: collapse` — `getComputedStyle` still reports the shadow correctly, so this is invisible without pixel-sampling a real screenshot. (2) Even after forcing `border-collapse: separate`, `box-shadow`'s blur radius fades out vertically at *each cell's own* top/bottom edge (every `<td>` is a separate box), so instead of one continuous shadow down the column you get a visibly seamed "shadow per row" — exactly the artifact this row exists to warn about. The `linear-gradient` pseudo-element sidesteps both problems: it isn't `box-shadow` (unaffected by border-collapse) and has zero vertical variation (no vertical component in the gradient), so adjacent cells' overlays are pixel-identical at the seam.
* **Chuẩn chung của cột "Thao tác" (2026-10-28) — mọi module giống hệt nhau, chỉ khác số thao tác:** một cột ghim phải duy nhất ở cuối bảng, **header "Thao tác" luôn hiện** (không còn bản ẩn sr-only), **căn PHẢI cả header lẫn nội dung** (padding 8px mọi phía; chữ "THAO TÁC" và nút cuối cùng cùng cách mép phải ô 8px, thẳng một mép — kể cả bảng chỉ có 1 icon, icon nằm sát phải; ban đầu user nói nhầm "căn trái" rồi sửa lại thành phải), và **độ rộng TỰ CO theo số thao tác** (không còn cố định 98px). Làm tập trung trong `this.stickyCols(columns)` (dùng bởi `this.tbl()`/`this.zoomableTbl()`) — **không sửa từng module**; mọi `width`/`align`/`header` khai báo riêng trên cột `act` bị ghi đè. `this.rowActions()` và các ô tự vẽ trong `act` (vd. icon khóa của Quản lý URL) dùng `justifyContent: 'flex-end'`; `DS.Table` ở chế độ `dense` dùng padding 8px cho cả cột căn phải.
  * **Tự co theo nội dung (cờ `fit` của `DS.Table`):** cột ghim nhận `width: "1%"` + `white-space: nowrap` nên chỉ rộng đúng bằng nội dung, và `<table>` (auto layout) **không chia thêm chỗ trống** cho nó — nhờ vậy bảng ít cột (Thanh toán…) không còn làm Thao tác phình ra như khi khai báo `width` cố định (`max-width` trên ô không chặn được kiểu phình đó; đã thử và bỏ). `width: 56` trong `stickyCols` chỉ là mức tối thiểu. Hậu quả — độ rộng chuẩn theo số icon `sm` (40px, gap 2) + padding 16px: **1 icon ≈ 81px** (bị chữ header "THAO TÁC" ~65px quyết định chứ không phải icon; nếu cần hẹp hơn 81px thì phải đổi/ẩn header), **2 icon = 98px**, **3 icon = 140px**. Nội dung rộng hơn (vd. nút chữ "Duyệt" của Duyệt LDP ≈ 113px) thì cột nở vừa đủ, không cắt.
  * **Toggle gộp vào Thao tác (thay cho cột "Bật/Tắt" ghim riêng của 10-02/10-21):** bảng có cột bật/tắt (`key: 'active'` hoặc `'visible'`, `DS.Switch`) **và** cột `act` → Switch **không còn là cột riêng**, nó nằm trong ô Thao tác, bên trái icon: `[Switch 36][gap 6][icon…]` (cả cụm căn phải; tham chiếu "Thao tác nhanh" của Danh sách mã SKU) → switch + 1 icon = 98px, switch + 2 icon = 140px. Module vẫn **khai báo** toggle như một cột riêng (render Switch như cũ, vị trí khai báo tuỳ ý) — `stickyCols` bỏ nó khỏi mảng rồi gọi nguyên vẹn render gốc của cả toggle lẫn `act` bên trong cột gộp, nên switch controlled/disabled/khóa quyền/tooltip, `stopPropagation`, icon Sửa/Xóa/Nhân bản… của từng module giữ nguyên chức năng. Ô switch có `minWidth: 36` cố định → hàng không có switch (render `null`/"—") vẫn giữ icon đúng vị trí dọc theo cột. Bảng không có `act` thì toggle vẫn là cột thường như trước.
  * **Kích thước so với trước (cột ghim):** switch + 1 icon: 136px (2 cột) → 98px (−28%); chỉ 1 icon: 60px → 81px (rộng hơn 21px vì header "Thao tác" giờ luôn hiện); 2 icon: 102–114px tuỳ bảng → đúng 98px. Cố ý dùng chữ "Thao tác" chứ không phải "Thao tác nhanh" (in hoa ~115px sẽ làm cột rộng hơn nội dung).
  * `DS.Table` vẫn hỗ trợ nhiều cột `sticky` xếp chồng (đo bề rộng `th` bằng ResizeObserver, cột ngoài cùng trái mang vạch `fpt-table-sticky-col`, còn lại `fpt-table-sticky-inner`) nhưng hiện chỉ `stickyCols` dùng. Bảng hand-roll (không qua `tbl()`) phải tự áp chuẩn trên: `sticky: true`, `fit: true`, `width: 56`, `align: 'right'`, header "Thao tác".
  * **Đã đo bằng headless Chrome (2026-10-28, viewport 1680):** Nội dung sản phẩm 81px (1 icon) · Thông tin checkout (7 tab chương trình), Thanh toán, Badge/Tag, Người dùng 98px (2 icon) · URL, Pages, Sections, Blocks, Menu, Landing Page, Popup, Quảng cáo (2 tab), Tin tức (3 tab có switch), FAQ (2 tab) 98px (switch + 1 icon) · Tin tức tab Tag mapping 81px. Header căn phải, nút cuối cách mép phải ô 8px ở mọi bảng. Ca 3 icon (140px) và switch + 2 icon (140px) kiểm bằng bản copy tạm có thêm icon giả — chưa module thật nào có. Bấm switch đổi trạng thái + toast, không mở drawer; bấm icon Sửa mở editor; bấm hàng mở drawer.
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
* **Bỏ chọn bằng nút "×":** một `DS.Select` `searchable` đang có giá trị tự hiện nút `x-circle-line` nằm cạnh mũi tên; bấm vào gọi `onChange('')` (không mở menu). `onChange` của mọi select form phải chịu được chuỗi rỗng — kiểm tra trước khi thêm select mới (ví dụ `selectCat` của FAQ có hộp xác nhận riêng khi bỏ chọn). Nút **không** hiện khi danh sách đã có mục "đặt lại" (value `''`/`'all'` hoặc nhãn bắt đầu "Tất cả…") — bộ lọc kiểu đó tự có đường quay về và giá trị rỗng sẽ làm hỏng logic lọc — và cũng không hiện khi `disabled`. Ép bật/tắt bằng prop `clearable={true|false}`. Cài tập trung trong `DS.Select`, không tự vẽ nút × riêng từng module.
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
* **Uploaded-state box (default for every `this.uploadBox`):** `FptUploadSlot` — a compact 64px horizontal row in every state: dashed drop zone (icon — hidden once uploaded; label or orange 11px S3 link; hint or label·size line) + 64px `contain` thumbnail on the right once an image exists (click = open original). Click/drag onto the drop zone replaces the image (no "Thay" button); copy-link icon sits next to the S3 link and a small round delete (×/trash) badge on the thumbnail corner; failed upload shows an inline "Thử lại" link. No ratio badge. `this.uploadBox(label, hint, required)` without `onPick`/`opts` renders `FptUploadSlotLocal` (keeps the image in local component state; `fptUploadSpec(hint)` reads accepted formats + `≤NNKB` from the hint, so keep the hint in the `'JPG, PNG, WEBP · ≤200KB'` form — it is the validation source). Caller-held state is available with `opts = { value, onChange, ratio, maxKB }` (Nội dung sản phẩm uses `this.pkgImgBox(slot, label, hint, ratio, maxKB)`, state in `pkgForm.images[slot]`). Single boxes sit in a half-width wrapper (`width: calc(50% - 6px); minWidth: 260`), Desktop/Mobile pairs in an `auto-fit minmax(260px, 1fr)` grid. Don't hand-roll a per-module uploaded preview. Quản lý Quảng cáo also uses it (caller-held state in `adDraft.iconImg` / `adDraft.bgImgFile`, seeded from the record's `img`/`bgImg`; saved as `img`/`imgLink`, `bgImg`/`bgImgLink`). Exception: the LDP section editor's URL fields + media picker (`mFld`/`openMediaPicker`) are a different control.

---

## 13. Character-Limit Fields Must Hard-Cap Input and Show a Clear "At Limit" State

Any text/textarea field whose hint/note advertises a character limit (e.g. "tối đa 255 ký tự", "tối đa 1000 ký tự") must physically stop the user from typing past that limit — never let the field silently accept unlimited input while merely warning about it after the fact.

Mandatory behavior for every character-limited field, new or edited:

* Pass `maxLength: MAX` to the `DS.Input`/`DS.Textarea` call — this is the native, browser-enforced hard stop and costs nothing even on an otherwise-uncontrolled (`defaultValue`-only) field.
* For a field that's already controlled (`value` + `onChange`, needed elsewhere in that editor), also clamp defensively inside the `onChange` handler — `value: (v || '').slice(0, MAX)` — so the state itself can never exceed `MAX` regardless of paste/IME edge cases that `maxLength` alone doesn't always catch on a controlled input.
* Still show a live, unmistakable "at limit" signal once the user reaches the cap — don't rely on the static hint/note alone, since silently refusing further keystrokes with no visual change reads as a broken keyboard, not a deliberate limit. The established pattern (see "Mô tả card gói" in the package content editor, `renderSkuEditorContent`): turn the note itself into a live counter — `Tối đa ${MAX} ký tự (${value.length}/${MAX})`, switching its color to `var(--color-danger-text)` once `value.length >= MAX` (and appending a short "— đã đạt giới hạn" suffix). This reuses the note slot that's already there per this section's own note-adding convention, rather than introducing a second counter element.
* This applies whether the field is a `DS.Input`/`DS.Textarea` hint, a §12-style static note (e.g. a table `colHead` note like "Tối đa 255 ký tự"), or a placeholder-only field with the limit mentioned inline (e.g. "Mô tả SEO ngắn (150–160 ký tự)…") — every one of these gets the matching `maxLength`.
* **No exemption for short single-line fields.** Every character-limited field — a one-line title/name `DS.Input` included, not just multi-line/prose `DS.Textarea` fields — gets the live color-changing counter treatment, not just the static note. A short field silently refusing further keystrokes still reads as a broken keyboard without the live "at limit" signal; length alone isn't a reason to skip it. This means the field must be **controlled** (`value` + `onChange`, not `defaultValue` + `onBlur`) so the counter can update on every keystroke — convert an existing uncontrolled field to controlled when adding its limit, the same way `promoTitle` in `renderSkuEditorContent` was converted (see history: it briefly shipped as `maxLength`-only with a static note before being corrected to the full live-counter pattern).
* Does not apply to a *minimum*-length note (e.g. "Tối thiểu 6 ký tự" on a password field) — there's nothing to cap; a minimum is validated on submit, not by blocking keystrokes.

---

## 14. Required Fields Must Actually Be Enforced, Not Just Marked

A red asterisk (§10's `req`/`this.field(..., required)` convention) is a promise to the user that the field is checked before they're allowed to proceed. This promise was broken app-wide — fields carried the `*` marker but nothing blocked Save/Next/Submit when left empty, and (where a field *was* checked in code) no visible error ever appeared on the field itself. This has been swept across every module (Pages, Sections, Blocks, Menu, Banner, Popup, FAQ, FAQ Categories, News/Tin tức, Tag Editor, Roles, Users, Profile, Checkout Rule Editor, Badge/Tag, Payment, LDP's approval-review reject flow, and the LDP wizard/section-editor). **Any new required field, in any module, must ship already enforced this way — never asterisk-only.**

### The button must never be `disabled` while required fields are empty

This is the most common way the rule gets broken: don't gate a Next/Save button with `disabled: someCondition` based on required-field emptiness. A disabled button gives the user no explanation of what's missing. Instead: **keep the button clickable at all times**, and validate *inside its `onClick`* — if something required is missing, `return` before the real action runs, show the error on the field(s), and toast a summary. (An exception like LDP's pre-existing `disabled: slugBlocked` — gating on a *business-rule conflict*, e.g. a clashing URL, not on an empty required field — is a different case and is not what this rule is about; but a plain empty-required-field check must never disable the button.)

### Default path: `this.field()` + `this.editorShell()` already do this for you

Every editor built the standard way — fields declared via `this.field(label, control, true)` (§10's convention) inside a form rendered through `this.editorShell(title, subtitle, onBack, content, onSave, saveLabel, ...)` — gets full enforcement **for free, with no extra code**:

* `this.field(label, control, true)` wraps the control via `this.reqFieldWrap(control)`, which tags it so it can be found and validated later, and wires an auto-clearing error state on blur.
* `this.editorShell(...)`'s Save button is pre-wrapped: on click it calls `this.validateReqFields(this._editorShellRoot)`, which reads every wrapped field's live DOM value (works fine on the mostly-uncontrolled `defaultValue`-only inputs in this codebase — no need to convert a field to controlled state just to validate it), then asks `FptRequiredField` to pass `error: "Trường bắt buộc — vui lòng nhập."` into the nested `DS.Input`/`DS.Textarea`, toasts a count, and only calls the real `onSave` once none are empty. Never style the native `<input>` descendant directly: `DS.Input` owns the visible border on its outer control shell, and bypassing its `error` prop produces the oversized/misaligned error outline previously seen in Quản lý Blocks.
* A raw `h(DS.Input, { required: true, ... })` used *outside* `this.field()` (bypassing its own label) still needs to be wrapped manually — `this.reqFieldWrap(h(DS.Input, {...}))` — to participate; see `renderRuleEditor`'s "Tên chương trình hiển thị" for the pattern.
* **This is why new editors should be built through `this.field()` + `this.editorShell()` rather than hand-rolling fields/save buttons** — doing so is what makes §14 compliance automatic instead of a manual chore.

### Composite controls (checkbox groups, pickers, tag selectors, date ranges)

`validateReqFields` only reads plain `<input>`/`<textarea>` — it silently **skips** any `.fpt-req-field` wrapper that doesn't contain one, rather than falsely flagging it. A composite control (a category checkbox group, a SKU/product picker, `DS.Select`, `DS.DateRangePicker`) needs its own explicit check, done the same way as the generic mechanism so it looks and behaves identically:

* Keep (or add) the manual `if (empty) { ...; return; }` check inside the real `onSave`/confirm handler, setting a small local error flag in state (e.g. `catErr`, `skuErr`) — reset that flag when the open editor/modal is entered or closed, and clear it live once the selection becomes non-empty (recompute it from current state each render rather than needing a separate "clear" call, the way `renderPayEditor`'s `skuErr` does).
* Render the composite wrapped in `className: 'fpt-req-box-err'` (already-defined app CSS: red border + tinted background) plus a `className: 'fpt-req-err-msg'` message div when that flag is true — this is the same visual language `.fpt-req-field.fpt-req-err` uses for plain inputs, just applied by hand. See `renderBadgeTagEditor`'s "Phân loại" checkboxes and `renderPayEditor`'s SKU picker for the reference implementation.
* `DS.Select`-based required fields are not yet auto-validated by the generic mechanism (it has no persistent native `<input>` to read) — treat a required `DS.Select` as a composite control per this section until/unless the shared `DS.Select` component is extended to expose a readable value for this purpose. Do not attempt that extension casually — it's shared, sensitive, sitewide UI.

### For anything that can't use `editorShell` (multi-step wizards, `DS.Modal` popups)

A few flows don't render through `editorShell` — a multi-step wizard like Landing Page's Bước 1/2/3 (`renderLdpForm`/`renderLdpStep2`), or a confirm/review `DS.Modal` like LDP's approval-reject dialog. These need the same *outcome* built by hand:

* **Wizard "Next" step:** validate the current step's required fields in the button's `onClick`; on failure, `setState` a small per-step error map (e.g. `ldpStep2Err`), toast a count, and do not advance `step`. Pass `error: stepErr.fieldName ? 'message' : undefined` into each field from that map. See `renderLdpStep2` (fields: Tên chiến dịch, Mục tiêu trang, Thời gian hiệu lực) for the reference.
* **Section/inline-editor with many dynamic fields not worth full state-wiring** (e.g. `renderLdpSectionEditor`, which has ~200 fields across many section templates): use the DOM-read-at-Save-time technique directly — a local `fld()` helper tags each required field with `data-*-field="<key>"`, the editor's root gets a stable `id`, and a `validate*Fields()` function queries `root.querySelectorAll('[data-*-field]')` at Save time exactly like `this.validateReqFields` does centrally. This is what `renderLdpSectionEditor`'s own `fld()`/`validateLdpSecFields()` do — a local, wizard-specific echo of the same central mechanism, kept separate because that editor predates/sits outside `editorShell`.
* **`DS.Modal` confirm dialogs** (e.g. reject-with-reason): same pattern as above — button stays enabled, `onClick` checks the field, `setState`s an error flag, passes `error: flag ? 'message' : undefined` to the `DS.Textarea`/`DS.Input`, and clears the flag in the field's `onChange` once non-empty. See `renderLdpApprovalReview`'s "Xác nhận từ chối" for the reference.

### Error message = plain red text, never a boxed banner

Every field error message (required, URL-invalid, upload-missing…) is **plain red text under the field** — `DS.Input`'s own `error` prop, or `className: 'fpt-req-err-msg'` for composite controls (13px, `var(--color-danger-text)`). No pink background, no border, no leading icon, no pill/badge around the message. `.fpt-req-box-err` no longer paints a frame (it is only a marker class). `FptUrlInput` is treated like `DS.Input` (passes `error`). The "N trường chưa điền" counters are red bold text, not pills.

### Clearing errors as the user fixes them

Whichever mechanism is in play, a field's error must disappear as soon as it's fixed — never require a second Save click just to confirm the fix landed. The centralized path does this via captured `onChange`/`onBlur` handlers in `FptRequiredField`; hand-rolled paths should clear the relevant flag inside that field's own `onChange`/`onBlur` once its value is non-empty (see the reference implementations above).

---

## 15. Target URL Fields Must Be Validated (Format + Anti-XSS)

Every field that holds a **destination/link URL** (CTA URL, Link banner, Link điều hướng, URL Link của menu, Redirect URL, App Store/Google Play URL, YouTube link…) must use `FptUrlInput` (module-scope component in `FPT CMS Admin.dc.html`, same props as `DS.Input`) instead of a bare `h(DS.Input, …)`.

* **Rule:** a value is valid only if it is empty, starts with `http://` / `https://` (with a real host), or is an internal relative path starting with a single `/` (e.g. `/shop/camera`; `//host` is rejected). Anything else — `javascript:`, `data:`, `<script>`, quotes/backticks/backslashes/whitespace — is rejected. Logic lives in `fptIsValidTargetUrl()`.
* **UX:** red border + message under the field (`FPT_URL_ERROR`: "Đường dẫn URL đích không hợp lệ. Vui lòng nhập URL bắt đầu bằng http://, https://...") on blur, then live while editing. Empty is valid here — "required" is still handled separately by §14 (`this.field(..., true)` works with `FptUrlInput`).
* **Save is blocked:** `this.editorShell()` Save calls `this.validateUrlFields(root)`; the LDP section editor's own `onSave` does the same via its form root; the LDP wizard Step 2 checks `redirect` in its Next handler. Never disable the button — validate in `onClick` (§14).
* **Not covered:** image/media asset URLs, URL Slug, and `tel:` phone fields — those are not destination URLs.

---

## 16. Detail Drawer Must Not Show Fields Missing From the Table or the Editor

The read-only Detail Drawer (§2) is a lightweight preview of what the user already sees in the list table and can change in the Inline Full-Page Editor — never a dump of the raw data object. A drawer row that has no counterpart in either place is dead weight: it usually renders as "—" and nobody can set or find the value (e.g. a "Thứ tự" row on Sections/Blocks after the order field was dropped from their editors).

**Rule:** every `this.detailRow(label, …)` in an `open*Detail` / `open*Drawer` must map to **at least one** of:

* a column of the module's list table (cell content counts — e.g. a slug under the name, a `└─` indent standing for "Cấp độ"), or
* a field of the module's editor (`this.field` / `uploadBox` / switch / picker) for the same record type.

A field that is in neither must not be in the drawer. This includes **audit metadata** (Ngày tạo / Người tạo / Cập nhật lần cuối): show it in the drawer only if the table has that column — editors never carry them, so the table is the only justification.

Mandatory behavior going forward:

* **Change the drawer in the same edit as the table/editor.** Dropping, renaming or type-gating a field in an editor or table column → update that module's drawer in the same change. Adding a new editor field does *not* oblige you to add it to the drawer (a drawer may show fewer fields than the editor), but never the other way round.
* **Mirror editor gating.** If the editor only shows a field for certain record types (e.g. SKU "Mô tả ngắn" only for Thiết bị/SA via `PKG_CONTENT_DEVICE_LAYOUT`; Popup behaviour block hidden for Checkout), gate the drawer row with the same predicate instead of printing "—" for the other types.
* **Read the same data source as the editor.** Don't render a legacy field the editor no longer writes (e.g. SKU `r.tags` bestseller/new/recommended — the editor now picks a Badge/Tag, so the drawer reads `r.tagText`).
* **New modules:** when writing `open*Detail`, build the row list by walking the table `columns` first, then the editor's fields; stop there. Don't pad with "Thứ tự", "Ngày tạo", phone/channel or other fields just because the demo data has them.
* A field that exists *only* as a search criterion (e.g. phone in the Users search box) is not a table column — it needs an editor field or a table column before it earns a drawer row.
* Report drawers (Báo cáo bán hàng / đăng ký Online) have no editor: their drawer rows must come from the same field-defs / columns array as the table (`salesReportOnline*FieldDefs`), never a separate hand-written list.

---

## 17. Warning / Confirm Modal: Button Order Depends on Severity

**Every modal footer is right-aligned** (`justifyContent: 'flex-end'`) — never pin the buttons to the left edge of the modal. What changes with severity is only the **order inside the button group**, i.e. whether the primary (confirm) button sits left or right of "Hủy".

### Serious actions → primary button FIRST (left of the pair), "Hủy" last

Use this when the action is **destructive, an important change, or has wide impact**, for example:

* deleting / irreversibly removing a record;
* changing something that live records depend on (đổi loại URL đang được dùng, đổi slug/nhánh của URL đang chạy);
* turning off something that is currently serving users (tắt URL đang có Landing Page chạy → người dùng gặp 404);
* overwriting existing content, or any change that touches many records at once.

Footer layout: `display: 'flex', gap: 10, justifyContent: 'flex-end'`, children in this order — **primary (confirm) button first, "Hủy" (`level: 'tertiary'`) second** (so the group reads `[Vẫn tắt URL] [Hủy]` at the right edge). The primary button is the danger-red variant (`background/borderColor: 'var(--color-danger)'`) with a specific action label ("Vẫn tắt URL", "Vẫn đổi loại"), so the dangerous action is never in the usual right-most "proceed" spot that people click on autopilot. (An earlier revision left-aligned the whole group with `flex-start`; the user rejected that — keep the group right-aligned.)

Reference implementations: `askChangeType` in `renderUrlEditor` (đổi loại URL đang dùng) and `urlConfirmDeactivate` (tắt URL có LDP đang chạy) in `FPT CMS Admin.dc.html`.

### Simple, low-severity confirmations → normal order, primary LAST (right-most)

Use the usual layout (`justifyContent: 'flex-end'`, **"Hủy" first, primary last**) for plain confirmations that are reversible and low impact — e.g. bật lại một mục, xác nhận thao tác thường, gửi/lưu có hỏi lại. No danger-red styling needed.

### How it is implemented

* **Shared confirm modal — `this.confirm(title, message, onYes, danger)`** (`renderModal`, `kind: 'confirm'`, and `openModal({ kind: 'confirm', danger: true, … })`): the 4th argument / `danger` flag **is** the severity switch. `danger: true` → footer `flex-end`, `[Xác nhận (red), Hủy]`; omitted → `flex-end`, `[Hủy, Xác nhận]`. So any new serious confirm must pass `true` — never leave the flag off on a delete / overwrite / turn-off-what's-live dialog.
* **Hand-built `DS.Modal` dialogs** (the `confirmIdx` delete dialogs in Section/Block editors, LDP reject footer `footerRowDanger`, URL modals): lay out the footer by hand exactly as above.
* Already on the primary-first layout: every `danger: true` confirm (xóa chương trình/Badge/vai trò/cấu hình/section/chu kỳ, đổi danh mục FAQ, đồng bộ/xóa cấu hình riêng về Global, tắt Landing Page, phát hành đè lên URL cũ), the "Xóa …?" `DS.Modal` dialogs in Section/Block editors, "Xác nhận từ chối" (LDP approval), the route-name "Nếu tiếp tục" dialog, and the two URL modals (đổi loại URL đang dùng, tắt URL đang có LDP chạy).
* Intentionally **primary-last** (simple / form / picker dialogs): bật Landing Page, gửi duyệt LDP, tạo tùy chỉnh riêng cho kênh, xác nhận route name, các modal chọn dữ liệu (chọn bài viết/FAQ/banner/gói/trang, thêm gói vào tab, chọn ảnh), form Thêm/Sửa vai trò & tài khoản, hộp thoại Thu phóng.

---

## 18. Bộ 4 cột kiểm toán: Người tạo / Ngày tạo / Người cập nhật / Ngày cập nhật

Mọi bảng danh sách bản ghi của CMS phải có đủ 4 cột **theo đúng thứ tự này**: **Người tạo → Ngày tạo → Người cập nhật → Ngày cập nhật** (đặt ở **cuối bảng**: sau cột Trạng thái và mọi cột nội dung, ngay trước cột Bật-Tắt / Thao tác), và drawer chi tiết của bảng đó hiện đủ 4 dòng tương ứng, cùng thứ tự (§16 cho phép vì bảng có cột).

* Dùng helper trung tâm trên root component — **không tự vẽ cột riêng**: `...this.auditCols(opts)` cho bảng, `...this.auditRows(r, opts)` cho drawer. Cả hai đọc qua `this.audit(r, opts)`.
* Bản ghi lưu thật từ editor phải ghi sẵn `createdBy`/`createdAt` (lúc tạo) và `updatedAt` + `updatedBy` (mỗi lần lưu) bằng `this.nowStr()`. Bản ghi demo thiếu trường thì `audit()` tự suy ra giá trị cố định theo id (không đổi giữa các lần render) để bảng và drawer luôn khớp.
* `opts`: `only` (chỉ lấy một số cột), `createdKey` (trường sẵn có mang nghĩa ngày tạo, vd. `date` của Menu/Vai trò), `postedKey` + `byKey` (Tin tức: ngày tạo suy ra trước "Ngày đăng", người tạo lấy từ `author`).
* Không áp dụng: bảng Vai trò + Người dùng (theo yêu cầu), bảng báo cáo (Báo cáo bán hàng / đăng ký Online), ma trận Phân quyền tính năng, bảng quy trình Duyệt LDP (đang ẩn khỏi menu), bảng nhỏ trong editor.
* Đã bổ sung (2026-10-26): Nội dung sản phẩm (+Người tạo, Ngày tạo) · Thông tin checkout – Chương trình · Quản lý Badge/Tag · Quản lý URL (tách Ngày tạo khỏi ô Người tạo) · Sections · Blocks · Menu · Landing Page (tách Ngày tạo; "Lần sửa cuối" đổi tên "Ngày cập nhật") · Banner · Popup · Tin tức (Bài viết, Chuyên mục, Tags, Cấu hình Thông tin hay) · (Vai trò, Người dùng: cố ý **không** áp dụng — giữ nguyên cột cũ.) Pages, Quảng cáo, Chiến dịch QC, FAQ, Danh mục FAQ, Phương thức thanh toán đã đủ từ trước.
* Cập nhật 2026-10-26: thêm **Người cập nhật** (`updatedBy`, đọc `updatedBy`/`lastEditBy`, thiếu thì suy ra) vào mọi bảng đã áp dụng và thống nhất thứ tự 4 cột; các bảng đã có sẵn (SKU, Thanh toán, Quảng cáo, Chiến dịch QC, FAQ, Danh mục FAQ) cũng được đổi sang `auditCols()` để cùng tên cột/thứ tự (Quản lý URL/Trang: "Ngày chỉnh sửa" → "Ngày cập nhật"; Landing Page: tên người sửa tách thành cột riêng). Vai trò + Người dùng vẫn không áp dụng.
* Cập nhật 2026-10-27: nhóm 4 cột được dời xuống **cuối bảng**, sau cả cột Trạng thái (Popup, Banner, Chương trình checkout, Badge/Tag, FAQ, Danh mục FAQ, Landing Page, Tin tức…) và sau cột Số câu hỏi; riêng Quảng cáo / Khung quảng cáo nhóm này nay nằm trước Bật/Tắt thay vì sau.

---

## 19. Ô bảng phải chịu được dữ liệu cực đoan (chữ dài / chuỗi liền / nhiều chip)

Mọi bảng đi qua `DS.Table` (qua `this.tbl()` / `this.zoomableTbl()` hoặc dùng trực tiếp) được bảo vệ **tập trung** bởi `__fptGuardTable` trong `_ds_bundle.js` + CSS `.fpt-cl` / `.fpt-chip-hidden` / `.fpt-chips-more` trong `FPT CMS Admin.dc.html` — **không tự xử lý riêng từng module**:

* **Chữ dài** → giới hạn **2 dòng** + "…" (slug/URL/monospace → **1 dòng**), `max-width` 340px, kèm `title` (tooltip) chứa nội dung đầy đủ. Bản đầy đủ xem ở drawer chi tiết (§2/§16).
* **Chuỗi liền không dấu cách** (URL, slug, mã, UTM…) → ngắt bằng `overflow-wrap:anywhere`, không làm bảng nở ngang.
* **Nhiều chip trong một ô** → hiện tối đa **3 chip + chip "+N"** (chỉ gom khi dư ≥ 2 chip; `title` liệt kê đủ). Chip có chữ > 28 ký tự → 1 dòng + "…".
* Ô đã có chip "+N" tự vẽ (`FptChipList` / `chipList` kèm tooltip) → guard **không gom thêm lần 2** (tránh hai chip "+N" cạnh nhau); chip tự vẽ nên giới hạn **3** chip trước "+N".
* Ghi đè theo cột trong `columns`: `lines` (số dòng), `maxWidth` (px), `chips` (số chip tối đa; `0` = không gom), `noClamp: true` (bỏ bảo vệ). Ô ghim phải (`sticky`) không bị tác động.
* Ô render ra chuỗi thuần được `DS.Table` tự bọc `<span>` để bảo vệ được; ô render phần tử thì bảo vệ áp dụng lên các lá văn bản/chip bên trong.
* Cơ chế chỉ đổi class/attribute (không đụng cây React) và chạy lại bằng `MutationObserver` khi nội dung bảng đổi (tìm kiếm, đổi trang…).

**Demo cực đoan luôn có sẵn:** mỗi seed bảng có **1 hàng cực đoan** (id 901 / `*-extreme` / `INT-QC-EXTREME-LONG-NAME`, tên ~150 ký tự, slug/URL liền, đủ chip, người tạo tên dài) đứng đầu danh sách. Module mới phải thêm hàng tương tự vào seed của mình; khi chỉnh bảng phải mắt thấy hàng này vẫn gọn (≤ ~3 dòng, bảng không nở ngang, chip thành "+N").
