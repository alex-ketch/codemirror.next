export {EditorView, EditorConfig} from "./editorview"
export {Command, ViewPlugin, PluginValue, PluginField, ViewUpdate, logException} from "./extension"
export {Decoration, DecorationSet, WidgetType,
        MarkDecorationSpec, WidgetDecorationSpec, LineDecorationSpec, ReplaceDecorationSpec, BlockType} from "./decoration"
export {BlockInfo} from "./heightmap"
export {themeClass} from "./theme"
export {MouseSelectionStyle} from "./input"
export {Range} from "@codemirror/next/rangeset"

import {HeightMap, HeightOracle, MeasuredHeights, QueryType} from "./heightmap"
import {ChangedRange} from "./extension"
/// @internal
export const __test = {HeightMap, HeightOracle, MeasuredHeights, QueryType, ChangedRange}
