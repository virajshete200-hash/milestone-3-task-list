# Milestone 3 — Test note

**Project:** A small task list  
**Student:** Viraj Shete

## What the app does
- Displays example tasks when opened for the first time.
- Adds a task when nonblank text is submitted.
- Rejects blank or whitespace-only input.
- Gives every task its own Delete button.
- Saves additions and deletions in browser `localStorage`.
- Restores saved tasks when the page is refreshed.
- Uses `textContent` to display task text safely.

## Test procedure
Run `index.html` in a modern browser and perform these checks:

1. **Initial display:** On a first visit, confirm the ten example tasks appear.
2. **Add:** Enter `Revise JavaScript arrays` and click **Add task**. Confirm it appears and the count increases.
3. **Blank-input boundary case:** Submit an empty field or spaces. Confirm no blank task is added and a message is shown.
4. **Delete:** Delete one task. Confirm it disappears and the count decreases.
5. **Persistence:** Refresh the page. Confirm the added task remains and the deleted task stays deleted.

## One implementation decision
I used `localStorage` because the assignment asks tasks to remain after a page refresh without requiring a server. `JSON.stringify()` converts the task array to a string for storage, and `JSON.parse()` converts it back when the page loads.

**Before submission:** Run the checks yourself and record the actual results below. Do not claim a browser test passed unless you have performed it.

### Actual browser test results
- Initial display: Pending your browser test
- Add task: Pending your browser test
- Blank-input test: Pending your browser test
- Delete task: Pending your browser test
- Refresh/persistence: Pending your browser test
