# GTL Result Viewer

This is a demo app showing results produced by GTL.
it's rudimentary as it is and hard o digest.

Please make it more consumable for the viewer.

## How to run

Install dependencies:
```bash
npm install
```

run the dev app:
```bash
npm run dev
```

## Design Language

We're interested in well communicated information with a modern look and feel.
How you approach is up to you, we use https://ui.shadcn.com/ as a design language inspiration and would be happy for you to do the same.

## Codebase

The repo contains a lot of the boilerplate used for a React Typescript project, we expect for this task you'll only need to edit App.tsx and App.css. You're welcome to add files. You're welcome to use any libraries you like, however, you do not need to be considerate of the scaling this project up.

Writing tests for this project are not a requirement, but if you feel like it, go ahead.

## Task

This task is largely focussed on understanding appropriate layout for the information provided, here is some further information to guide your approach.

The data is a list of Result[] as defined in the Results.tsx file, comments for each field are provided in the file.

The user will expect to see all results on one scrollable page. Their primary use case for this page is to, at a glance, see the difference in a patient's score between each event to understand how the patient is progressing.

They would then likely seek to understand the date (not time) for each event in that patient's journey to contextualise the scores.

Requirements
- The patient Id is unique to each patient and will need to be displayed but is not the first piece of information the user is interested in.
- The date of birth is private and should not be displayed.
- Event DateTime will never be the same day for the same patient.
- The user is only interested in the date part of the event DateTime.
- Each event should include an indicator of the sample quality. 
- The Results component should be responsive between a width of 500px and 800px, you can consider vertical scroll is always available.

Assumptions
- The user understands the concept of a patient's journey and what each event means
- The user understands the concept of a score and what the score means
- The user might be colour blind