# next-auth login 기본 기능 구현

## 현재까지 추가한 기능

- 사용자 정보 DB 저장 ( bcryptjs 활용한 비밀번호 암호화 )
- next-auth 사용자 인증 ( 토큰생성, 쿠키 생성확인 )
- 로그아웃
- 비밀번호 변경 ( 사용자 토큰 검증 후 인증 통과시 비밀번호 변경 )
- serverSideProps를 이용하여 인증 사용자가 아니면 특정 페이지 접근 불가능하도록 설정

## 프로젝트 설치

```bash
npm install
```

## 프로젝트 실행

```bash
npm run dev
```

## 로컬 브라우저 실행 주소

[http://localhost:3000](http://localhost:3000)

## github page 주소

[https://picpal.github.io/nextjs-login](https://picpal.github.io/nextjs-login)
