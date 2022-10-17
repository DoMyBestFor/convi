## Tab

### 기능
ConviTab에서 제공하는 대표적인 기능은 다음과 같다.

* Select Tab
* Draggable Tab
* Editable Tab
* Tab remove
* Add Tab
* Uncontrolled / Controlled Tab

### Sample Code & Demo
준비중

### Controlled Tab Props
| `name` | `type` | `desc` |
| --- | --- | --- |
|selected|<div style='color: green'>number</div>|선택된 Tab의 index 값
|ableChangeTitle?|<div style='color: blue'>boolean</div>|true이면 tab의 title을 수정 가능함. (trigger => doubleClick) **기본값 false**
|forceRender?|<div style='color: blue'>boolean</div>|true이면 tab이 변경 될 때마다 매번 새로운 tab element DOM을 DOM Tree에 가져옴. 결과적으로 tab elements의 상태 유지가 필요없을 때 사용. **기본값 true**
|draggableTab?|<div style='color: blue'>boolean</div>|true이면 tab header를 drag 이벤트로 이동 시킬 수 있음. **기본값 true**|
|children|<div style='font-weight: bold'>React.ReactElement\<ConviTabElementProps>[]</div>|tab elements를 children 형태로 넘겨준다. 개별 element들은 반드시 ConviTabElement 컴포넌트로 감싸져야 한다.
|onClose|<div style='color: purple'>(index: number) => void</div>|Tab을 삭제하기 위해 실행될 이벤트 핸들러|
|onTabPositionChange|<div style='color: purple'>(currentTabs: React.ReactElement\<ConviTabElementProps>[]) => void</div>|Drag 시 변경된 tab element들을 재정렬 시켜줄 이벤트 핸들러
|onSelected|<div style='color: purple'>(index: number) => void</div>|선택된 tab의 상태를 변경시켜줄 이벤트 핸들러
|onAdd|<div style='color: purple'>() => boolean</div>|해당 props 전달 시 + 버튼이 나타나고 + 버튼을 클릭 했을 때 tab을 추가하는 로직이 담긴 이벤트 핸들러, Add 기능을 활용하기 위해서는 true를 리턴해야 함.

### Uncontrolled Tab Props
| `name` | `type` | `desc` |
| --- | --- | --- |
|defaultIndex|<div style='color: green'>number</div>|선택된 Tab의 초기 index 값, 해당 props 지정 시 UnControlled Tab으로 동작하여 제어가 Tab 내부에서 이루어짐.
|forceRender?|<div style='color: blue'>boolean</div>|true이면 tab이 변경 될 때마다 매번 새로운 tab element DOM을 DOM Tree에 가져옴. 결과적으로 tab elements의 상태 유지가 필요없을 때 사용. **기본값 true**
|children|<div style='font-weight: bold'>React.ReactElement\<ConviTabElementProps>[]</div>|tab elements를 children 형태로 넘겨준다. 개별 element들은 반드시 ConviTabElement 컴포넌트로 감싸져야 한다.