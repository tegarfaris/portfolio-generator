import { createSlice } from "@reduxjs/toolkit";

interface IPortfolio {
  portfolioName: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}
export type IPortfolioType = {
  backgroundImage: string;
  profileImage: string;
  fullName: string;
  title: string;
  description: string;
  portfolios?: IPortfolio[];
};

const initialState: IPortfolioType = {
  backgroundImage: "",
  profileImage: "",
  fullName: "",
  title: "",
  description: "",
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addLocalStorage: (state, { payload }) => {
      console.log("payload", payload);
    },
  },
});

export const { addLocalStorage } = portfolioSlice.actions;

export default portfolioSlice;

// selector
// export const getPortfolio
