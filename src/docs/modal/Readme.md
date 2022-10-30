## Modal
Convi의 Modal 컴포넌트

### Function
* prevent backdrop click ✅
* title ✅
* set modal size ✅

### Sample Code & Demo
준비중

### Props
| `name` | `type` | `desc` |
| --- | --- | --- |
|open|<div style='color: blue'>boolean</div>|Modal open state
|onClose|<div style='color: purple'>() => void</div>|Modal onClose handler|
|preventBackdropClick?|<div style='color: blue'>boolean</div>|true일 경우 backdrop 클릭 시 Modal 창이 닫히는 것을 방지. **기본값 false**
|children|<div style='color: green'>ReactNode</div>|Modal 창에 표현될 Content
|title|<div style='color: green'>ReactNode</div>|Modal 창의 Title
|width?|<div style='color: red'>string</div>|Modal width, default: 'auto'
|height?|<div style='color: red'>string</div>|Modal height, default: 'auto'