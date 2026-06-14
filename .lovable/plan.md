## Problem

On the homepage, "Early life and Introduction to Design" renders far below the intro paragraphs, leaving a large empty gap to the left of the Infobox (the area you circled).

Cause: the Infobox is floated to the right, and `Section` is declared with `clear-both`, which forces every section to start below the float instead of wrapping next to it.

## Change

In `src/components/wiki/Section.tsx`, remove `clear-both` from the `<section>` wrapper so section content (heading + paragraphs + thumbs) flows next to the floated Infobox and fills the gap.

The existing `<div className="clear-both" />` at the bottom of `PageShell` still ensures the page footer/main container clears the float properly, so layout below remains intact. Notable Projects page has no Infobox, so it's unaffected.

## Result

"Early life and Introduction to Design" heading and text begin immediately under the two intro paragraphs, wrapping around the Infobox on the right — matching the layout you had before.