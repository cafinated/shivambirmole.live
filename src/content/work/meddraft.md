---
title: MedDraft
lede: Spoken clinical notes, turned into hospital documents that a doctor reviews and approves.
description: MedDraft turns a doctor's dictation in Marathi, Hindi and English into structured hospital documents, with a doctor's review before anything is final.
order: 1
kind: product
years: "2026"
stage: Built and documented. Usage not yet measured.
facts:
  - label: For
    value: Gurukrupa Hospital
  - label: My part
    value: I built it
  - label: Stage
    value: Built and documented
  - label: See it
    value: drbirmolehospital.com/meddraft
    href: https://drbirmolehospital.com/meddraft
flow:
  noticed: A doctor's notes are spoken long before they are typed, often in Marathi, Hindi and English inside one sentence. The hospital's forms want fixed fields.
  thought: Software can fill the form, but a doctor has to own it. So every value points back to the words it came from, and nothing is final until a doctor approves it.
  built: A documentation tool for Gurukrupa Hospital. Dictate, get a structured draft, check the gaps it flags, approve, then export to Word or PDF in the hospital's own formats.
  now: Built and documented.
  open: Not measured yet. Time saved, accuracy, and how widely it is used.
evidence:
  did:
    - Built the application.
    - Shaped the workflow of dictate, draft, review and approve.
  supports:
    - Dictation in Marathi, Hindi, English, or a mix.
    - Transcription into structured hospital forms.
    - Transcript evidence beside each extracted value.
    - Flags for incomplete fields, with suggestions.
    - Doctor review and approval, with approved versions kept.
    - Word and PDF export in hospital formats.
    - Access controls, document history, reusable patient details.
  measured:
    - Nothing yet.
  open:
    - How long a document takes with and without it.
    - How often a doctor corrects a draft.
    - How many documents and doctors use it day to day.
demo: meddraft
---

## What I noticed

Gurukrupa Hospital runs on documents: patient records, forms, summaries. The people who know what belongs in them are doctors, and doctors talk faster than they type.

They also do not talk in one language. A single instruction can start in Marathi, borrow a Hindi phrase and end on an English drug name. The forms have no room for that. Someone has to turn the spoken version into the typed one, field by field.

## How I thought it through

Three decisions shaped the product.

**Show where every value came from.** A filled field with no source asks for blind trust. Each extracted value sits beside the part of the transcript that supports it, so checking takes a glance.

**Leave a gap instead of guessing.** If something was not dictated, the field stays empty and gets flagged. An honest blank is easier to fix than a confident mistake.

**The software drafts and the doctor approves.** Nothing counts as a hospital document until a doctor has reviewed and approved it. Approved versions are kept, so there is a record of what was signed off.

MedDraft does not diagnose and does not decide anything. It drafts paperwork.

## What I built

1. A doctor opens a patient record and picks a hospital form.
2. They dictate in Marathi, Hindi, English, or a mixture.
3. MedDraft transcribes the speech and fills the form's fields.
4. Each value shows the transcript text behind it. Missing fields are flagged, with suggestions.
5. The doctor edits, then approves. The approved version is preserved.
6. The document exports to Word or PDF in the hospital's format.

Around that sit access controls, document history, and patient details that carry over between forms.

## Where it stands

The product is built and its workflow is documented. I have not measured its effect, so this page makes no claim about time saved, accuracy or adoption.

## What I'd explore next

First, a plain before and after: how long one document takes by hand, and how long with a draft to review. Then how often doctors change what the draft proposed, and in which fields.
