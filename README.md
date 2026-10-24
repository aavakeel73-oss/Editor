# FrameFlow — Browser Video Editor

A browser-based video-editing starter built with React 18, Vite, TypeScript, and Tailwind CSS. This iteration provides a working editor interface for importing media, arranging clips on a multi-track timeline, selecting clips, moving and trimming timeline clips, splitting, undo/redo, editing transform/audio/color properties, project settings, and a browser recording export path for the active source video.

## Requirements

- Node.js 20 or newer recommended
- npm 10 or newer
- A modern browser with HTML media support

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:3000`).

## Validation

```bash
npm test
npm run build
npm run preview
```

## Current implementation status

Implemented in this starter:
- Import video, audio, and image files into the media library using object URLs.
- Read browser-provided media metadata when available.
- Add assets to V1, V2, A1, A2, and S1 lanes.
- Move clips by dragging; trim clip ends by dragging the right handle.
- Select, duplicate, delete, and split clips at the playhead.
- Undo/redo for the main clip editing operations.
- Basic video/image preview and transform/color properties for the active visual clip.
- Project canvas presets and frame-rate setting.
- Save a small project metadata snapshot to browser localStorage.
- Browser MediaRecorder export of the active source video where `captureStream` and MediaRecorder are supported.

Known limitations (not represented as completed):
- Export currently records the active source video only; it is not a frame-accurate render of all timeline tracks.
- Audio tracks are represented in the timeline but full multi-track Web Audio mixing and fade automation are not implemented yet.
- Media files are not yet persisted as IndexedDB Blobs; after a reload, source media must be imported again.
- Project text tracks, stickers, transitions, and effect processing are not yet fully implemented.
- The current timeline drag/trim interactions are a first functional pass and need additional browser-level integration testing.
- Cross-origin isolation headers are configured for future FFmpeg.wasm/WebCodecs work; this project does not yet ship a full FFmpeg export pipeline.

Do not treat a successful UI load as proof of full professional editor parity. Run the tests and production build in an environment with dependencies installed, and verify export support in the target browser.
