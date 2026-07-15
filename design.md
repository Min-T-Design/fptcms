# FPT CMS Admin — Design Documentation

> **Prototype file:** `FPT CMS Admin.dc.html`  
> **Design system:** `_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/`  
> **Last updated:** 29/06/2026

---

## 1. Project Overview

Redesign toàn bộ giao diện **CMS Admin FPT** từ dark glassmorphic sang **FPT Design System** (light mode). Prototype là single-file HTML, bao gồm 18 module / 3 phân hệ, hoàn toàn tương tác trong trình duyệt.

**Phân hệ:**
- **Quản lý Sản phẩm** — SKUs, Checkout, Phương thức Thanh toán
- **Quản lý Nội dung (CMS)** — Pages, Sections, Blocks, LDP, Menu, Banner, Popup, Tin tức, FAQ
- **Quản lý Hệ thống** — Vai trò, Người dùng, RBAC, Profile

---

## 2. Design System

### Loading

Mỗi DC phải load bundle trong `<helmet>`:

```html
<link rel="stylesheet" href="_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/tokens/fonts.css">
<link rel="stylesheet" href="_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/tokens/colors.css">
<link rel="stylesheet" href="_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/tokens/typography.css">
<link rel="stylesheet" href="_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/tokens/scale.css">
<link rel="stylesheet" href="_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/styles.css">
<script src="_ds/fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/_ds_bundle.js"></script>
```

Mount component qua namespace `window.ZENKaizenDesignSystem_4069b4`:

```js
const DS = window.ZENKaizenDesignSystem_4069b4;
const h = React.createElement;
h(DS.Button, { level: 'primary' }, 'Lưu')
```

### Component inventory (dùng trong dự án này)

| Nhóm | Components |
|------|-----------|
| Core | `Button`, `IconButton`, `Badge`, `Tag`, `Avatar`, `Card`, `Divider` |
| Forms | `Input`, `Textarea`, `Checkbox`, `Radio`, `Switch`, `Select`, `DatePicker` |
| Feedback | `Alert`, `Toast`, `Tooltip`, `Spinner` |
| Navigation | `Tabs`, `Pagination` |
| Overlay | `Modal` |
| Data | `Table` (dense), `Stat`, `Accordion` |
| Icons | `Icon` (77 glyph subset, line/solid) |

---

## 3. Visual Tokens

### Color

| Token | Value | Dùng cho |
|-------|-------|---------|
| `--color-bg` | gray-2 | Canvas nền app |
| `--color-surface` | white | Card, sidebar, topbar, drawer |
| `--color-surface-alt` | gray-3 | Table header, hover subtle |
| `--color-surface-sunken` | gray-2 | Code bg, input sunken |
| `--color-border` | gray-5 | Hairline border 1px |
| `--color-border-pale` | gray-4 | Table row divider |
| `--color-text` | gray-12 | Body text primary |
| `--color-text-muted` | gray-11 | Secondary text |
| `--color-text-subtle` | gray-9 | Label, placeholder |
| `--color-accent` | fpt-9 = `#f36523` | Primary action, active nav |
| `--color-accent-bg` | fpt-3 | Active nav fill, chip bg |
| `--color-accent-text` | fpt-11 | Text trên accent-bg |
| `--color-success` / `--color-success-text` / `--color-success-bg` | green-9/11/3 | Badge active, toast success |
| `--color-warning-*` | yellow-9/11/3 | Badge draft, alert |
| `--color-danger-*` | red-9/11/3 | Badge locked, destructive |
| `--color-info-*` | blue-9/11/3 | Badge global, scheduled |

### Typography

| Vai trò | Font | Weight | Size |
|---------|------|--------|------|
| Display/Heading | Inter | 700–800 | 20–30px |
| Section heading | Inter | 700 | 17–19px |
| Body | Inter | 400 | 13.5–14px |
| Label/Caption | Inter | 600 | 11–13px |
| Code/Mono | JetBrains Mono | 400–600 | 11.5–13px |
| Table header | Inter | 700 | 11px, UPPERCASE, +.04em tracking |

### Spacing

Base grid: **4px**. Semantic gaps: `--gap-sm` 8px · `--gap-md` 12px · `--gap-lg` 16px · `--gap-xl` 20px.

### Radii

| Token | Value | Dùng cho |
|-------|-------|---------|
| `--radius-sm` | 8px | Input, badge, dropdown item |
| `--radius-md` | 12px | Card, modal |
| `--radius-lg` | 16px | Card lớn, drawer |
| `--radius-full` | 9999px | Button, Tag, Switch, Badge |

### Elevation (shadows)

| Token | Dùng cho |
|-------|---------|
| `--shadow-sm` | Card, table container |
| `--shadow-overlay` | Drawer, modal, dropdown |

### Animation

| Token | Value | Dùng cho |
|-------|-------|---------|
| `--ease-standard` | `cubic-bezier(.2,0,0,1)` | Mọi transition |
| Duration fast | 120ms | Hover fill |
| Duration base | 180–220ms | Nav open, drawer slide |
| Duration slow | 260ms | Modal appear |

Custom keyframes:
- `fptNavGroup` — nav group expand (opacity + translateY -4px)
- `fptContentIn` — content area switch (opacity + translateY 8px)
- `fptToast` — toast appear (opacity + translateY 10px + scale .96)
- `fptDropdownUp` — dropdown appear (opacity + translateY 8px + scale .97)

---

## 4. App Shell Layout

```
┌─────────────────────────────────────────────┐
│  TOPBAR  56px  (fixed, z:100)               │
├──────────┬──────────────────────────────────┤
│          │                                  │
│ SIDEBAR  │  CONTENT AREA                    │
│ 240px    │  (scrollable)                    │
│ (fixed)  │  padding: 24px                   │
│          │                                  │
└──────────┴──────────────────────────────────┘
         RIGHT DRAWER (slide from right, overlay)
```

**Sidebar:**
- Width 240px expanded / 64px collapsed
- Transition: `width 220ms ease-standard`
- Collapsed: icon-only; hover mở rộng tạm thời
- Nav groups: expand/collapse với chevron + animation `fptNavGroup`
- Active item: `background: var(--color-accent-bg)`, `color: var(--color-accent)`, bo 10px

**Topbar:**
- Height 56px; `background: var(--color-surface)`; `border-bottom: 1px solid var(--color-border)`
- Logo FPT (assets/logo-fpt.webp) + channel pill + breadcrumb + Avatar user
- Channel dropdown: 3 kênh FPT Telecom / FPT Play / FPT Camera

**Right Drawer:**
- Trượt từ phải: `transform: translateX(100%)` → `translateX(0)`, 260ms
- Overlay scrim: `rgba(0,0,0,0.3)` (click để đóng)
- Width: 440–620px (config per drawer call)
- Sticky header (title + close button) + sticky footer (actions)
- Chỉ dùng cho read-only detail view

---

## 5. CRUD Interaction Patterns (Global — Bắt buộc)

### Quy tắc cứng

1. **Create / Edit** → Inline Full-Page Editor (thay content area)
2. **Detail view** → Right Detail Drawer (read-only)
3. **Delete confirm** → Modal
4. **Không dùng** Drawer/Modal cho form edit

### Flow chuẩn

```
Table → (click row) → Detail Drawer (read-only)
                            ↓ click "Chỉnh sửa"
                       Inline Full-Page Editor
                            ↓ Lưu / Hủy
                       Quay về Table (giữ state)
```

### Row action buttons

```js
// rowActions helper — stopPropagation bắt buộc
rowActions(items) {
  return h('div', { style: { display: 'flex', gap: 2 } },
    items.map((it, i) =>
      h(DS.IconButton, {
        key: i,
        icon: it.icon,
        label: it.label,
        level: 'tertiary',
        size: 'sm',
        onClick: (e) => { e.stopPropagation(); it.onClick && it.onClick(e); }
      })
    )
  );
}
```

**Quan trọng:** `e.stopPropagation()` ngăn event bubble lên `onRowClick` của Table. Thiếu dòng này → click Sửa sẽ đồng thời mở Drawer + Editor.

### Table configuration

```js
tbl(columns, data, rowKey, onRowClick) {
  return h(DS.Table, {
    dense: true,
    columns,
    data,
    rowKey,
    onRowClick   // mở Detail Drawer
  });
}
```

Mỗi Table có cột action cuối:

```js
{ key: 'act', header: '', width: 80, align: 'right',
  render: (_, r) => this.rowActions([
    { icon: 'edit-01-line', label: 'Sửa', onClick: () => this.openXxxEditor(r) },
    { icon: 'trash-line',   label: 'Xóa', onClick: () => this.confirm('...', '...', cb) },
  ])
}
```

### Inline Full-Page Editor pattern

```js
// State: { xxxEditor: null | record }
// null = tạo mới, record = sửa

if (this.state.xxxEditor !== undefined) {
  return this.renderXxxEditor(this.state.xxxEditor);
}
```

Editor luôn có:
- Breadcrumb: `Module > Tên bản ghi hoặc "Tạo mới"`
- Back button (quay về list)
- Sticky action bar (Hủy + Lưu)
- Validation inline trước khi submit

---

## 6. Navigation Structure

```
dashboards          Dashboards

── QUẢN LÝ SẢN PHẨM ──
pdh-sku             Thông tin sản phẩm
cms-display         Thông tin checkout (+ tab Quy tắc)
cms-payment         Phương thức Thanh toán

── QUẢN LÝ NỘI DUNG (CMS) ──
g-structure ▾
  pages             Quản lý Trang
  sections          Quản lý Sections
  blocks            Quản lý Blocks
  ldp               Landing Page
  cms-menu          Quản lý Menu

g-media ▾
  banner            Quản lý Banner
  cms-popup         Quản lý Popup

g-content ▾
  news              Quản lý Tin tức
  faq               Quản lý FAQ

── QUẢN LÝ HỆ THỐNG ──
g-sys ▾
  sys-roles         Vai trò
  sys-users         Người dùng
  sys-rbac          Phân quyền (RBAC)

profile             Thông tin tài khoản (từ user menu)
```

---

## 7. Module Details

### 7.1 Thông tin sản phẩm (`pdh-sku`)

- Bảng SKU: search, filter (type/group/status), toggle kích hoạt (Switch per row)
- Click row → SKU Detail full-page (không phải Drawer)
- SKU Detail có 5 tab: Chung / Thông tin thêm / Tính năng / FAQ / Giá & Điều kiện
- Quick preview modal (xem nhanh không cần vào detail)
- Bulk select + export Excel + Sync button

### 7.2 Thông tin checkout (`cms-display`)

- Tabs theo kênh (tongdaiwifi / App HiFPT / Website fpt.vn)
- Mỗi kênh: badge "Dùng Global" hoặc "Tùy chỉnh riêng"
- Accordion per SKU: mở rộng để edit inline
- Tab phụ "Quy tắc Banner & Popup": bảng quy tắc có Detail Drawer + Edit Drawer
- Kế thừa logic: kênh tùy chỉnh ghi đè kênh Global

### 7.3 Blocks (`blocks`)

- Inline Editor 2 cột:
  - Cột trái: form fields (tên, mô tả, loại, mapping SKU)
  - Cột phải: Card preview realtime
- Loại block: Hero Banner / Product List / Features / Accordion / HTML Article / Question / Row VAT

### 7.4 Landing Page (`ldp`)

- 5 template (FPT Play, FPT Telecom, Camera, v.v.)
- Mỗi template có danh sách sections (drag-drop order)
- Edit từng section → mở inline editor per section type

### 7.5 Menu (`cms-menu`)

- Cây menu đa cấp (3 level: category > page/link > sub-link)
- Inline Editor có drag-drop tree (demo level)
- Loại: category / page / link; vị trí: Header / Footer

### 7.6 Tin tức (`news`)

- 4 tab: Bài viết / Chuyên mục / Tác giả / Tags
- Tab Tags có sub-table Tag Mapping (liên kết tag → SKU)
- Inline Editor bài viết: rich text (demo toolbar) + SEO meta + thumbnail + trạng thái + featured toggle

### 7.7 RBAC (`sys-rbac`)

- Ma trận: 3 nhóm module × 4 vai trò × 2 quyền (Xem / Thay đổi)
- Super Admin: toàn bộ checked + disabled (không thể sửa)
- Không có Detail Drawer hay Inline Editor — edit trực tiếp trên matrix

---

## 8. Status Badge System

| Status value | DS theme | Hex |
|---|---|---|
| active / Hoạt động / Published | `success` | `#16a34a` |
| draft / Nháp | `warning` | `#ca8a04` |
| inactive / Ngừng / Hidden | `neutral` | gray |
| locked / Tạm khóa | `danger` | `#dc2626` |
| global / Dùng Global / Scheduled | `info` | `#1d4ed8` |
| custom / Tùy chỉnh riêng | `brand` | `#f36523` |

Usage:
```js
statusBadge(status) {
  const map = {
    active: 'success', inactive: 'neutral',
    draft: 'warning',  locked: 'danger',
    global: 'info',    custom: 'brand',
  };
  return h(DS.Badge, { theme: map[status] || 'neutral' }, labelMap[status] || status);
}
```

---

## 9. Key Utility Helpers (trong Component class)

```js
// Confirm modal (xóa, cảnh báo)
this.confirm(title, message, onConfirm)

// Toast notification
this.toast('success' | 'danger' | 'warning' | 'info', title, message)

// Open right drawer
this.openDrawer({ title, subtitle, width, render, footer })
this.closeDrawer()

// Table với onRowClick
this.tbl(columns, data, rowKey, onRowClick?)

// Action buttons (có stopPropagation)
this.rowActions([{ icon, label, onClick }])

// Search input
this.search(placeholder, stateKey)

// Toolbar (search + button)
this.toolbar(leftContent, rightButton)

// Filter chips bar
this.filterChipsBar([chip1, chip2, ...])

// Pagination bar
this.renderPagBar(total, stateKey, itemLabel)

// Slice data for current page
this.sliceData(data, stateKey)

// Status badge
this.statusBadge(status)

// Detail row (label + value)
this.detailRow(label, value)

// Empty state
this.empty(message)
```

---

## 10. File Structure

```
FPT CMS Admin.dc.html          Main prototype (single file)
FPT CMS Admin.html             Static export
FPT CMS Admin - Standalone.html  Self-contained bundle
Tài liệu bàn giao Redesign.dc.html  Handover document
design.md                      This file
CLAUDE.md                      Project instructions (AI agent rules)
DatePicker.js                  DatePicker helper
support.js                     DC runtime
_ds/
  fpt-design-system-4069b42b-a7c3-46ff-acb7-dddf8f633b9e/
    _ds_bundle.js              Design system React bundle
    tokens/                    CSS custom properties
    components/                Source components + .d.ts + .prompt.md
    styles.css                 Global entry point
    readme.md                  Design system guide
assets/
  logo-fpt.webp               FPT brand logo
uploads/                       User-uploaded assets
screenshots/                   Reference screenshots
```

---

## 11. Dev Handoff Notes

### Tech stack (production)
Prototype dùng React (qua Design System bundle) render bằng vanilla JS. Production nên dùng React + TypeScript.

### Component mapping
Tất cả `DS.*` component trong prototype → import từ FPT Design System package. Không cần rebuild component.

### State management
Prototype dùng React class component state đơn (1 class, toàn bộ state). Production nên tách theo module (Zustand / Redux Toolkit).

### API integration
- Mọi `this.toast('info', 'Tính năng đang phát triển')` → thay bằng API call thực
- Data arrays (SKUS(), MENU(), v.v.) → replace bằng API fetch + React Query
- Upload vùng demo → nối CDN/storage thực

### Drag-and-drop
Các vùng kéo thả (Sections, Blocks trong LDP; phân cấp Menu; reorder section) hiện là UI placeholder. Dev cần implement bằng `@dnd-kit/core` hoặc tương đương.

### Rich text editor
FAQ + Tin tức hiện có toolbar mô phỏng. Dev integrate `TipTap` hoặc `Quill`.

### Key business rules (giữ nguyên)
1. SKU từ Product Hub là read-only trong CMS
2. Kênh Global là fallback; kênh tùy chỉnh ghi đè
3. Rule priority: số cao ưu tiên hơn; fallback về Global nếu không khớp
4. Super Admin không thể bị edit trong RBAC matrix
5. Không xóa trang system (home, 404) và vai trò mặc định

### Interaction rules (xem §5)
- Row click → Detail Drawer
- Edit button → Inline Editor (stopPropagation)
- Delete button → Confirm Modal (stopPropagation)
- Drawer chỉ read-only, không edit trong drawer

---

## 12. Known Issues / Cần làm tiếp

| # | Issue | Priority |
|---|-------|----------|
| 1 | Dashboard: nội dung placeholder — cần BA xác nhận KPI thực tế | High |
| 2 | Dark mode: token có sẵn nhưng chưa bật — cần xác nhận với BA | Medium |
| 3 | Upload ảnh: chưa nối storage — cần CDN config | High |
| 4 | Drag-and-drop: UI placeholder — cần implement thực | High |
| 5 | Rich text: toolbar mô phỏng — cần tích hợp WYSIWYG | High |
| 6 | Vai trò "Người duyệt": chưa có trong RBAC matrix | Medium |
| 7 | Quan hệ kênh Topbar ↔ kênh Checkout: cần BA clarify | Medium |
| 8 | Audit Log PTTT: hiện là table tĩnh — cần API log thực | Low |
