<div align="center">
<h1>🚙 현대자동차그룹 신차 출시 이벤트 🚙</h1>
</div>

<img width="1710" alt="image" src="https://github.com/user-attachments/assets/47a1bdbf-b7c4-49b6-931f-47aa7af4d1ef">

### 🎯 **목표** 
: 현대자동차그룹의 신차 출시를 가정한 **대고객 이벤트 페이지** 설계 및 구현.<br>고객이 신차에 흥미를 느끼고, 지속적인 관심을 가질 수 있도록 다양한 **참여형 이벤트**를 제공.

### ✨ **필수 포함 기능**
- `선착순 + 추첨` 이벤트
  - 트래픽 폭주 상황을 가정하여, **다수의 사용자 요청을 안정적으로 처리**할 수 있도록 구현

- `어드민 기능`
  - 이벤트 오픈/종료 시간 설정
  - 선착순 당첨 인원 수 설정
  - 당첨자 추첨 및 당첨자 목록 조회

- `한줄 기대평 댓글 작성`, `공유하기(단축 URL)` 기능 등

🔗[이벤트 주제 및 필수 기능](https://www.notion.so/bside/19949efcabbf4ce59a8819eb381d4699?pvs=4)

<div align="center">
<h2>[4조] 실시간 웹소켓 기반 캐스퍼 레이싱 이벤트</h2>
</div>

> _**트래픽에 효과적으로 대응**하기 위해 **web-app**과 **socket-app**으로 분리하여 개발하였습니다._  
아래 내용은 **socket-app**을 중심으로 작성되었습니다.<br>🔗[web-app 프로젝트](https://github.com/softeerbootcamp4th/Team4-newCar-web-app-BE)

<!--
<img width="891" alt="캐스퍼레이싱" src="https://github.com/user-attachments/assets/fbcd0314-ec81-4211-b8e2-e878ec2d974a">
<img width="647" alt="실시간 기대평" src="https://github.com/user-attachments/assets/3d38f41a-2839-49c4-92fe-6033be142206">
-->

|![레이싱 게임 이미지](https://github.com/user-attachments/assets/fbcd0314-ec81-4211-b8e2-e878ec2d974a)|![실시간 채팅 이미지](https://github.com/user-attachments/assets/3d38f41a-2839-49c4-92fe-6033be142206)|
|:---:|:---:|
|캐스퍼 레이싱|실시간 기대평|

### ✨ **이벤트 개요**
- **캐스퍼 레이싱 게임 🏁**
  - 간단한 유형 검사를 통해 팀을 배정받고, **충전 버튼을 클릭**하여 자신이 응원하는 팀의 자동차를 움직이는 **실시간 경쟁형 이벤트**입니다.

- **실시간 기대평 💬**
  - 사용자가 자신이 응원하는 팀을 위해 응원 메시지를 주고받을 수 있도록 설계된 **채팅 시스템**입니다.

<br>

### ✨ **이벤트 특징**
1. **실시간 상호작용**
    - 모든 유저의 클릭 및 채팅이 **즉시 화면에 반영됨.** 게임 진행 상황, 순위 변화, 채팅을 실시간으로 확인 가능.
    - 새로고침 없이도 화면이 계속 업데이트 됨.

2. **기대평 필터링**
    - 관리자는 어드민 페이지를 통해 욕설 및 부적절한 표현 **실시간 필터링** 가능.

<br>

<div align="center">
<h2>[Socket App] 프로젝트</h2>
</div>

### 🎯 **주요 목표**
1. **웹소켓을 통한 실시간 이벤트 기능 구현**
    - **캐스퍼 레이싱 게임** 및 **기대평 채팅 시스템**을 웹소켓 연결을 통해 구현한다.

2. **고가용성 아키텍처 설계 및 구현**
    - **대규모 트래픽**에도 안정적인 서비스를 제공할 수 있는 고가용성 아키텍처를 설계하고 구현한다.

<br>

### ⛭ **기술 스택**
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white"> 
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=&logoColor=white"> <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white">

<img src = "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"> <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white"> 

<img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white"> <img src = "https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white">

### 🛠️ **백엔드 아키텍처**  
<div align="center">
  <img src="https://github.com/user-attachments/assets/bdd54eb5-da96-4838-938c-7c82fb0d820b" alt="아키텍처" width="60%">
</div>
<!-- <img width="614" alt="아키텍처이미지" src="https://github.com/user-attachments/assets/bdd54eb5-da96-4838-938c-7c82fb0d820b"> -->

---

## 멤버
| 직책 | 담당 | 이름 |
|--|--|--|--|--|--|
| 팀장 | FE | 김보민 | 
| 팀원 | BE | 김영민 | 
| 팀원 | BE | 고건영 | 
| 팀원 | AI | 신혜원 |
| 팀원 | AI | 최가빈 | 

### 시연 영상 
