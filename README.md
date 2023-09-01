# 원티드 프리온보딩 12th 2팀 2주 차 과제

## 🤝 과제 소개 및 목적

팀원 모두가 하나의 주제의 과제를 수행한 뒤, 가장 효율적이라고 판단되는 코드(또는 기능)를 Best Practice로 선정하여 최종 결과물에 반영합니다.
Best Practice를 선정하기 위해 작성한 코드를 동료에게 이해하기 쉽게 설명하고, 타인의 코드를 이해할 수 있어야 합니다.

💡 좋은 코드를 만들 위해 고민하고, 그 과정에서 팀으로 일하는 법에 익숙해집니다.

🗓️ 진행 기간: 23년 8월 29일 ~ 23년 8월 31일

※ 본 과제는 [원티드 프리온보딩 인턴십 8월](https://www.wanted.co.kr/events/pre_ob_fe_12)를 바탕으로 진행되었습니다.

## 👨‍👩‍👧‍👦 팀 정보

[Team Notion](https://www.notion.so/Wanted-Pre-onboarding-FE-2-71038c8adfd74fffb28a3cf2d182e025?pvs=21)

<table>
<tr>
    <td align="center">
        <a href="https://github.com/wanted-internship-team/pre-onboarding-12th-1-2/">
        <img src="https://avatars.githubusercontent.com/u/142898636?s=200&v=4" width="100px;" alt=""/>
        <br />
        <sub><b>Github</b></sub>
        <br />
        <sub><b>Team2</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/JJineu">
        <img src="https://media.discordapp.net/attachments/1144505552005775440/1144506291209912371/KakaoTalk_20220901_060732626.jpg?width=814&height=814" width="100px;" alt=""/>
        <br />
        <sub><b>@JJineu</b></sub>
        <br />
        <sub><b>김현진</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/devsomda">
        <img src="https://avatars.githubusercontent.com/u/109324517?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@devsomda</b></sub>
        <br />
        <sub><b>박다솜(팀장)</b></sub>
        </a>
    </td>
</tr>
<tr>
    <td align="center">
        <a href="https://github.com/mihyunLee">
        <img src="https://avatars.githubusercontent.com/u/51310674?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@mihyunLee</b></sub>
        <br />
        <sub><b>이미현</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/devseop">
        <img src="https://avatars.githubusercontent.com/u/102455161?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@devseop</b></sub>
        <br />
        <sub><b>이윤섭</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/sjuhan123">
        <img src="https://avatars.githubusercontent.com/u/81420856?v=4" width="100px;" alt=""/>
        <br />
        <sub><b>@sjuhan123</b></sub>
        <br />
        <sub><b>한승주</b></sub>
        </a>
    </td>
</tr>
</table>

## 🧑🏻‍💻 프로젝트 정보

### 실행 방법

- 배포 링크: [Github Issue App (https://2team-github-issue-page.netlify.app/)](https://2team-github-issue-page.netlify.app/)
- 링크가 실행되지 않는 경우 아래 명령어를 차례대로 입력하여 실행해주세요.

```jsx
git clone https://github.com/wanted-internship-team/pre-onboarding-12th-2-2.git
npm install
npm start
```

### 프로젝트 구조

```markdown
📦
└─ src
  ├─ 📂 apis
  │   ├─ instance.ts
  │   └─ requests.ts
  ├─ 📂 assets
  │   └─ ic_error.svg
  ├─ 📂 components
  │   ├─ IssueCard.tsx
  │   └─ common
  │      ├─ AdCard.tsx
  │      ├─ Header.tsx
  │      └─ Spinner.tsx
  ├─ 📂 constants
  │   └─ index.ts
  ├─ 📂 contexts
  │   └─ repoContext.tsx
  ├─ 📂 hooks
  │   ├─ useFetch.tsx
  │   └─ useObserver.tsx
  ├─ 📂 pages
  │   ├─ Error.tsx
  │   ├─ IssueDetail.tsx
  │   ├─ IssueList.tsx
  │   └─ Main.tsx
  ├─ 📂 router
  │   └─ Routers.tsx
  ├─ 📂 types
  │   └─ issue.ts
  ├─ App.tsx
  ├─ index.tsx
  ├─ custom.d.ts
  └─ style.css
```

### 폴더 구조 선정 이유

```markdown
코드 리팩토링과 확장성을 고려하여 최소한의 기능 단위로 컴포넌트를 분리했습니다.

- api, hooks, contexts, pages, componets 등 기능별로 폴더를 관리했습니다.
- constants : 과제 요구 사항 관련 오타 방지 및 중복 제거와 중요한 상수 관리
- types : 공통적으로 사용되는 interface 별도 관리, 한 파일에서만 쓰이는 인터페이스만(e.g. props) 해당 파일에서 관리
```

### 사용 라이브러리 및 기술

- JavaScript / TypeScript / React
- 상태 관리: Context API
- HTTP Client: OctoKit
- 라우팅: react-router-dom
- 스타일: styled-components, react-icon, react-markdown

```jsx
"dependencies": {
	"octokit": "^3.1.0",
	"react": "^18.2.0",
	"react-dom": "^18.2.0",
	"react-icons": "^4.10.1",
	"react-markdown": "^8.0.7",
	"react-router-dom": "^6.15.0",
	"react-scripts": "5.0.1",
	"styled-components": "^6.0.7",
	"typescript": "^4.9.5",
  },

"devDependencies": {
	"@babel/plugin-proposal-private-property-in-object": "^7.21.11",
	"@typescript-eslint/parser": "^5.62.0",
	"eslint-config-prettier": "^9.0.0",
	"eslint-plugin-prettier": "^5.0.0",
	"husky": "^8.0.3",
	"lint-staged": "^14.0.1",
	"prettier": "^3.0.2"
},
```

## 💬 프로젝트 진행 과정

### Best Practice 선정 과정

```
1주차 피드백을 반영하여 불필요한 상태를 선언하거나, 중복된 코드와 값을 사용하지 않는 것을 기준으로 Best Practice를 선정했습니다.
또한 파일들이 명확하게 분리되었는지, 코드는 재사용성을 고려했는지, 다른 사람들이 쉽게 이해할 수 있는지 등을 고려했습니다.
```

### 협업 도구

```
팀 커뮤니케이션 툴로 팀 노션 페이지와 디스코드를 사용했습니다.
실시간으로 만나 서로의 의견을 정리, 간단한 아카이빙 하기 위해 디스코드를 이용하였으며,
해당 내용들을 다시 팀 노션 페이지에 상세히 기록하는 방식으로 커뮤니케이션을 진행했습니다.
또한, 팀 프로젝트 시 기본 환경 셋팅/프로젝트 진행 시 필요한 타입 설정 등
브레인스토밍, 협업 진행을 위해 FigJam을 적극적으로 활용하였습니다.

- Discord:
  실시간으로 만나 코드를 리뷰하고 Best-Practice를 선정하고 팀 프로젝트 진행을 위한 컨벤션, 브랜치 전략, 네이밍 등을 논의하기 위한 용도로 사용했습니다.

- Notion:
  디스코드와 FigJam에서 공유된 프로젝트 진행 과정 및 팀 운영 일정을 기록하고 공유하는 용도로 사용했습니다.

- Live Share(VS Code):
  페어 프로그래밍 및 디스코드의 화면공유와 같이 사용하여 실시간으로 작업을 진행하는 용도로 사용했습니다.
```

## 📝 구현 내용

## 1. 이슈 목록 화면
- Github API를 활용하여, 이슈 목록을 가져옵니다.
    - 데이터 요청 중 로딩 표시
    - 에러 화면 구현
- 이슈 목록을 정렬합니다.
    - open 상태의 이슈 중 코멘트가 많은 순
- 각 행에는 ‘이슈 번호, 이슈 제목, 작성자, 작성일, 코멘트 수’를 표시합니다.
- 다섯 번째 셀마다 광고 이미지를 출력합니다.
    - 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동합니다.
- 화면을 아래로 스크롤 할 시 이슈 목록을 추가합니다.(인피니티 스크롤)

![issue_list](https://github.com/wanted-internship-team/pre-onboarding-12th-2-2/assets/102455161/c865b932-37f7-4672-bfa2-446b563ee8e9)


### ✅ Assignment 1
- 이슈 목록 정렬 및 api 요청

### ⭐️ **Best Practice**

```
axios와 비교하여, octokit 라이브러리가 github API 사용에 특화되어 있어 매개변수를 전달할 때 코드 직관성이 좋아 사용을 결정했습니다.

api 요청 시 코드의 중복을 제거하기 위해 공통 인스턴스를 분리하고, 라이브러리 옵션을 설정하여 정렬된 데이터를 받아오는 방식을 Best Practice로 선정하였습니다.

api 요청 횟수 제한을 해결하기 위해 발급한 github 토큰은 유출 시 즉시 폐기되므로 환경변수로 관리하였습니다.
```

### ✅ Assignment 2
- 비동기 로직 및 로딩, 에러 처리

### ⭐️ **Best Practice**

```
메인, 이슈 목록, 이슈 상세 세 페이지 모두 데이터 요청 시 로딩을 표시하고, 에러 상태에 따라 화면을 렌더링하는 공통된 로직이 있었습니다.
따라서 api를 호출하며, loading, error, success(data), idle status를 통해 데이터 페칭이 순서대로 실행될 수 있도록 useFetch() 커스텀 훅을 구현하는 방식을 Best Practice로 선정하였습니다.
이는 사용하는 컴포넌트에서 각 상태를 구현하지 않아도 되는 장점이 있었습니다.

비동기 로직의 상태는 status 상태를 두어, 데이터 fetching 시 비동기 로직 핸들링을 하였습니다. 
또한, api 응답에 따른 에러 핸들링은 useFetch() 훅 내에서 선언한 에러 메시지 상수로 처리됩니다.

```
### ✅ Assignment 3
- 다섯 번째 셀마다 광고 이미지 삽입

### ⭐️ **Best Practice**

```jsx
이슈 목록을 리스트로 관리하며, map 함수의 index 값에 따라 이슈 목록의 5번째 셀마다 광고를 삽입하였습니다.
삼항 연산자를 사용하는 것보다 논리 AND 연산자(&&)를 사용함으로써 더욱 간결한 코드를 만들 수 있었습니다.

{issues &&
  issues.map((issue: IIssue, index: number) => (
    <React.Fragment key={issue.issueId}>
      <IssueCard issue={issue} />
      {(index + 1) % 4 === 0 && <AdCard />}
    </React.Fragment>
  ))}

```

### ✅ Assignment 4
- 인피니티 스크롤

### ⭐️ **Best Practice**

```
scroll 이벤트는 호출이 잦아 성능에 문제가 생길 수 있어, intersection observer 메서드를 채택했습니다.
useObserver 커스텀 훅을 사용하여, 이슈 리스트의 마지막 요소의 ref를 구독하도록 구현했습니다.
ref 요소가 뷰포트에 겹치게 되면, 다음 페이지의 데이터를 요청하는 api를 호출합니다. 받아온 데이터는 기존의 이슈리스트와 합쳐 관리됩니다.

api가 무한 요청되는 문제가 있었습니다.
이슈 리스트의 마지막 요소를 구독하기 때문에, 이슈가 없거나 적은 경우 무한 요청이 발생했습니다.
- 데이터 페치와 관련된 status를 이용하여 useObserver 에서 콜백함수를 실행하지 않도록 조건을 추가했습니다.
- 데이터가 없는 경우, 해당 요소를 표현하지 않도록 조건을 추가했습니다.

```

## 2. 이슈 상세 화면

### ✅ Assignment 5

- 이슈의 상세 내용 표시
- ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

![issue_detail](https://github.com/wanted-internship-team/pre-onboarding-12th-2-2/assets/102455161/fe41f11e-5e09-447e-a195-109c898b16ac)

### ⭐️ **Best Practice**

```
선택한 이슈의 상세 내용을 서버에 요청하기 위해 useParams()를 이용하여 url의 id 값으로 전달된 이슈 번호를 가져와 api 요청 함수의 매개변수로 사용하였습니다.

또한, 이슈의 내용이 마크다운 형식의 문자열로 되어있어 렌더링 시 내용 파악이 어렵다는 문제가 발생하여 ReactMarkdown 라이브러리를 사용해서 렌더링하였습니다.

```

## 3. 공통 헤더

### ✅ Assignment 6

- 두 페이지는 공통 헤더를 공유합니다.
- 헤더에는 Organization Name / Repository Name이 표시됩니다.


## 4. 메인 화면 - 추가 구현 사항
- 레포 정보를 받아, 해당 이슈 페이지를 조회합니다.

### ⭐️ **Best Practice**

```
다양한 레포에 대한 이슈 정보를 확인해볼 수 있다는 점에서 메인 화면을 추가 구현하였습니다.

공통 Header 컴포넌트에서 레포 정보를 사용하기 위해 메인 화면에서 Organization Name과 Repository Name을 입력받아 RepoContext에 저장하고, 현재 입력받은 레포 정보가 올바른지 검사하기 위해 validateRepo()로 api를 요청하여 예외 상황을 처리하였습니다.

또한, Header 컴포넌트는 공통 컴포넌트이기 때문에 라우터에서 Header 컴포넌트가 필요한 부분을 감싸 렌더링했습니다. 이는, 한 곳에서 Header 컴포넌트를 관리할 수 있어 Best Practice로 선정하였습니다.

```


## 5. Lint, Prettier, Husky, Lint-Staged

### ⭐️ **Best Practice**

```
코드 작성 방법이 팀원들마다 상이하여 코드를 읽고 이해하는 시간이 길어져 협업 간에 효율성이 떨어진다고 판단하였습니다.
따라서 Lint와 Prettier를 이용하여 같은 스타일로 작성될 수 있도록 설정했습니다. 
또한, Husky와 Lint-Staged를 이용, stage 된 내용을 미리 검사하여 commit 전에 코드를 수정할 수 있도록 했습니다.
```

## 🫱🏻‍🫲🏿 Commit Convention & Branch Strategy

### Commit Convention

```
코드 작성 방법이 팀원들마다 상이하여 코드를 읽고 이해하는 시간이 길어져 협업 간에 효율성이 떨어진다고 판단하였습니다.
따라서 Lint와 Prettier를 이용하여 같은 스타일로 작성될 수 있도록 설정했습니다.
또한, Husky와 Lint-Staged를 이용, stage 된 내용을 미리 검사하여 commit 전에 코드를 수정할 수 있도록 했습니다.
```

e.g. FEAT: 로그인 유효성 검증 기능 구현

| 태그      | 설명 (한국어로만 작성하기)                                     |
| --------- | -------------------------------------------------------------- |
| FEAT:     | 새로운 기능 추가 (변수명 변경 포함)                            |
| FIX:      | 버그 해결                                                      |
| DESIGN:   | CSS 등 사용자 UI 디자인 변경                                   |
| STYLE:    | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우          |
| REFACTOR: | 프로덕션 코드 리팩토링                                         |
| COMMENT:  | 필요한 주석 추가 및 변경                                       |
| DOCS:     | 문서를 수정한 경우                                             |
| CHORE:    | 빌드 테스크 업데이트, 패키지 매니저 설정(프로덕션 코드 변경 X) |
| RENAME:   | 파일 혹은 폴더명을 수정하거나 옮기는 작업                      |
| REMOVE:   | 파일을 삭제하는 작업만 수행한 경우                             |
| INIT:     | 초기 커밋을 진행한 경우                                        |

### Branch Strategy

브랜치는 아래의 브랜치만 사용하도록 협의했습니다.

| 브랜치    | 설명                               |
| --------- | ---------------------------------- |
| main      | 배포 및 최종본, 출시 버전의 브랜치 |
| develop   | 개발용 버전의 기준이 되는 브랜치   |
| feature/~ | 세부 기능 개발을 위한 브랜치       |
| refactor  | 리팩토링을 위한 브랜치             |

