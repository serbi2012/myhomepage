import { createSlice } from "@reduxjs/toolkit";

const ItemList = createSlice({
  name: "ItemList",
  initialState: [
    {
      id: 1,
      name: "햄버거 세트",
      contents: "맛있고 푸짐한 햄버거 세트 (콜라없음 주의)",
      price: 12000,
      quantity: 0,
    },
    {
      id: 2,
      name: "딸기파이",
      contents: "내가 생각하는 그 비주얼은 아님",
      price: 16000,
      quantity: 0,
    },
    {
      id: 3,
      name: "딸기 스무디",
      contents: "스무디킹보다 맛있어보임",
      price: 6000,
      quantity: 0,
    },
    {
      id: 4,
      name: "볶음밥",
      contents: "메이드 인 코리아는 아닌거같음",
      price: 14000,
      quantity: 0,
    },
    {
      id: 5,
      name: "소세지 야채볶음",
      contents: "군대에서 먹던 그맛은 아님",
      price: 8000,
      quantity: 0,
    },
    {
      id: 6,
      name: "딸기 아이스바",
      contents: "상큼한 딸기 반쪽이 박혀있음.",
      price: 4000,
      quantity: 0,
    },
    {
      id: 7,
      name: "햄버거 단품",
      contents:
        "세트는 너무 많아서 단품을 시키려한거라면, 당신은 잘못된 선택을 한거다.",
      price: 12000,
      quantity: 0,
    },
    {
      id: 8,
      name: "크림 파스타",
      contents: "건강한 맛이 날것같다.",
      price: 10000,
      quantity: 0,
    },
    {
      id: 9,
      name: "과일우유",
      contents: "비주얼부터 맛있는 과일우유세트",
      price: 9000,
      quantity: 0,
    },
    {
      id: 10,
      name: "레몬에이드",
      contents: "세상 상큼한 레몬에이드",
      price: 5000,
      quantity: 0,
    },
    {
      id: 11,
      name: "파인애플 칵테일",
      contents: "칵테일에 파인애플을 넣었으니 하와이안 칵테일?",
      price: 3000,
      quantity: 0,
    },
    {
      id: 12,
      name: "연어 카나페",
      contents: "라고 부르기에는 크기가 좀 크다.",
      price: 7000,
      quantity: 0,
    },
  ],
  reducers: {},
});

export { ItemList };
