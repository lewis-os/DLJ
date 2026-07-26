# DLJ Editorial System

DLJ is designed as a growing journal, not a folder of unrelated Markdown files. This document is the operating contract for publishing one entry or one hundred entries without changing the journal's logic.

## The single source of truth

[`registry.json`](registry.json) controls the identity and state of every public or developing item. A new item receives its permanent `DLJ-YYYY-NNN` identifier before drafting begins. Titles may improve; identifiers never change.

## Publication stages

| Stage | Public meaning | Required before moving forward |
|---|---|---|
| `planned` | Accepted into the editorial queue | Brief, series, proposed type |
| `research` | Evidence and source record are being assembled | Source boundary, angle, open questions |
| `developing` | Drafting or structural editing is active | Working draft and evidence notes |
| `ready` | Complete but not yet public | Fact check, Danika review, cover, links |
| `published` | Available in the Journal and Archive | Final file, date, cover, revision record |
| `revisiting` | A published entry has new evidence | Dated addendum; original record preserved |
| `retired` | Removed from active navigation | Editorial note explaining why |

Only `published` entries belong in the public chronological archive. The Research Desk may show selected non-private pipeline items without exposing drafts or internal notes.

## Permanent content anatomy

Every published entry must include:

1. Stable ID and publication metadata
2. Cover
3. Plain-language opening
4. Source record and completeness note
5. Separation of source claims from verified facts
6. Danika's reflection
7. Human perspective
8. ELI21 explanation
9. Open questions
10. Related signals
11. Letter from the publication year
12. Revision record

## Cover system

Each item receives a generated SVG at `assets/covers/YYYY/DLJ-YYYY-NNN.svg`. Covers use a fixed DLJ frame, series-specific color, entry number, title, subtitle, and publication stage. Exact text remains editable and accessible because the source is vector, not a flattened bitmap.

Run:

```bash
node scripts/generate-covers.mjs
```

The script reads the registry and regenerates every cover deterministically. This is the preferred path for daily publishing.

## Daily publishing flow

1. Reserve the next ID in `registry.json`.
2. Set the item to `planned` or `research`.
3. Create the entry from `templates/ENTRY_TEMPLATE.md`.
4. Preserve source metadata before analysis.
5. Move the registry stage as work advances.
6. Generate covers.
7. Complete editorial and Danika review.
8. Set `published_at`, change stage to `published`, and add it to `TIMELINE.md`.
9. Publish the site and repository together.

## Privacy boundary

DLJ publishes professional analysis, public-source reflection, and explicitly approved co-created work. Private messages, personal relationship material, family matters, payments, contact logistics, and unpublished personal letters never enter the registry.

## Revisions

Never silently rewrite what an entry originally claimed or understood. Correct errors and add new evidence through a dated revision record. Major updates may also change the stage to `revisiting`.
