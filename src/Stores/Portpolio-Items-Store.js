import { createSlice } from "@reduxjs/toolkit";

const PortpolioItems = createSlice({
  name: "PortpolioItems",
  initialState: [
    {
      id: 1,
      name: "Tic Tac Toe",
      contents: "간단한 Tic Tac Toe게임. 하지만 색다른 룰을 적용함.",
      link: "https://serbi2012.github.io/Tic_Tac_Toe/",
    },
    {
      id: 2,
      name: "2048 Game",
      contents: "간단한 규칙의 2048 게임. ",
      link: "https://serbi2012.github.io/2048_Game/",
    },
    {
      id: 3,
      name: "Typing Test",
      contents: "간편하게 타건을 테스트할 수 있는 애플리케이션.",
      link: "https://serbi2012.github.io/Typing_Test/",
    },
    {
      id: 4,
      name: "Typing Test React.ver",
      contents:
        "간편하게 타건을 테스트할 수 있는 애플리케이션의 React버전입니다.",
      link: "https://serbi2012.github.io/Typing_Test_React/",
    },
  ],
  reducers: {},
});

export { PortpolioItems };
