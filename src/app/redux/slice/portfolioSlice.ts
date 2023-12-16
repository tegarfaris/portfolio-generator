import { createSlice } from "@reduxjs/toolkit";

interface IPortfolio {
  portfolioName: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  descriptionPortfolio: string;
}
export type IPortfolioType = {
  backgroundImage: string;
  profileImage: string;
  fullName: string;
  title: string;
  descriptionProfile: string;
  portfolios?: IPortfolio[];
};

const initialState: IPortfolioType = {
  backgroundImage: "",
  profileImage: "",
  fullName: "",
  title: "",
  descriptionProfile: "",
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addLocalStorage: (state, { payload }) => {
      localStorage.setItem("portfolio", JSON.stringify(payload));
    },
  },
});

export const { addLocalStorage } = portfolioSlice.actions;

export default portfolioSlice;
