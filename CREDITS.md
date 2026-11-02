# Credits

Exercise demonstration images in `ex/` are derived from the free-exercise-db dataset
(https://github.com/yuhonas/free-exercise-db) by yuhonas, released under **The Unlicense** (public domain dedication).
Original 2-frame photos were resized and cross-faded into looping animated WebP files (and small JPEG thumbnails).

| File | Source exercise id |
|---|---|
| ex/goblet-squat.* | Goblet_Squat |
| ex/floor-press.* | Dumbbell_Floor_Press |
| ex/bent-over-row.* | Bent_Over_Two-Dumbbell_Row |
| ex/lateral-raise.* | Side_Lateral_Raise |
| ex/romanian-deadlift.* | Stiff-Legged_Dumbbell_Deadlift (closest available dumbbell hip-hinge; RDL keeps knees slightly bent) |
| ex/shoulder-press.* | Standing_Dumbbell_Press |

Form-guide text was written for this dashboard. External "完整教學" links point to trainaiapp.com pages already
referenced in the user's sheet; their media is not copied or hotlinked.

## v5 smooth demos
The default 「動態示範」 in each exercise sheet is an original skeletal animation drawn in SVG by this dashboard's code
(`AN` / `figSVG` in app.js): joint angles are tweened with a cosine ease-in-out, looping start → end → start
(0 → 100 → 0) with short holds. No third-party media. The free-exercise-db photos remain available under 「實拍照片」.
Optical-flow interpolation of the 2-frame photos (ffmpeg minterpolate) was tried and rejected: it produced ghosting.
