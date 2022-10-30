## SplitPanel
SplitPanel

### Function
* Split Multiple Components ✅
* Resizing ✅
* Set Initial size ✅
* Set Intitial Ratio ❌
* Set MIN/MAX size ✅
* Maximize / Minimize ❌
* Set resizer thickness ✅

### Sample Code & Demo
Soon

### Props for SplitPanel
| `name` | `type` | `desc` |
| --- | --- | --- |
|dir?|<div style='color: blue'>'col' \| 'row'</div>| Split Direction, default: 'col'
|children|<div style='color: green'>ReactNode[]</div>|Splited Children Components
|resizerThickness?|<div style='color: red'>number</div>|resizer thickness (px), default: 2

### Props for SplitPanelItem
| `name` | `type` | `desc` |
| --- | --- | --- |
|children|<div style='color: green'>ReactNode[]</div>|Splited Children Component
|maxSize?|<div style='color: red'>number</div>|item's max size (px)
|minSize?|<div style='color: red'>number</div>|item's min size (px)
|initialSize?|<div style='color: red'>number</div>|item's initial size (px) 