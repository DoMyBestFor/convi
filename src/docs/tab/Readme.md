## Tab
Tab

### Function
* Select Tab ✅
* Draggable Tab ✅
* Editable Tab ✅
* Tab remove ✅
* Add Tab ✅
* Uncontrolled / Controlled Tab ✅
* Scroll Button ✅

### Sample Code & Demo
준비중

### Controlled Tab Props
| `name` | `type` | `desc` |
| --- | --- | --- |
|selected|<div style='color: green'>number</div>|선택된 Tab의 index 값
|ableChangeTitle?|<div style='color: blue'>boolean</div>|true이면 tab의 title을 수정. (trigger => doubleClick) **기본값 false**
|forceRender?|<div style='color: blue'>boolean</div>|true이면 tab이 변경 될 때마다 매번 새로운 tab element DOM을 DOM Tree에 가져옴. **기본값 false**
|draggableTab?|<div style='color: blue'>boolean</div>|true이면 draggable tab header로 변경. **기본값 false**|
|children|<div style='font-weight: bold'>React.ReactElement\<ConviTabElementProps>[]</div>|tab elements, 개별 element들은 반드시 ConviTabElement 컴포넌트로 감싸져야 한다.
|onClose|<div style='color: purple'>(index: number) => void</div>|Tab remove event handler|
|onTabPositionChange|<div style='color: purple'>(currentTabs: React.ReactElement\<ConviTabElementProps>[]) => void</div>|Drag 시 변경된 tab element들을 재정렬 시켜줄 이벤트 핸들러
|onSelected|<div style='color: purple'>(index: number) => void</div>|선택된 tab의 상태를 변경시켜줄 이벤트 핸들러
|onAdd?|<div style='color: purple'>() => boolean</div>|Add button click handler

### Uncontrolled Tab Props
| `name` | `type` | `desc` |
| --- | --- | --- |
|defaultIndex|<div style='color: green'>number</div>|initial selected index value
|forceRender?|<div style='color: blue'>boolean</div>|true이면 tab이 변경 될 때마다 매번 새로운 tab element DOM을 DOM Tree에 가져옴. **기본값 false**
|children|<div style='font-weight: bold'>React.ReactElement\<ConviTabElementProps>[]</div>|tab elements, 개별 element들은 반드시 ConviTabElement 컴포넌트로 감싸져야 한다.
