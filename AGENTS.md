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
