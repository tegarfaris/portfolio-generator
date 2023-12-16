import * as Yup from "yup";

export const ValidatePortfolio = Yup.object().shape({
  //   userId: Yup.string(),
  backgroundImage: Yup.string().required("select your background image"),
  profileImage: Yup.string().required("select your profile image"),
  profileName: Yup.string().max(10).required("fullname is required"),
  title: Yup.string().required("title is required"),
  descriptionProfile: Yup.string().required("description is required"),

  portfolios: Yup.array().of(
    Yup.object().shape({
      portfolioName: Yup.string().required("Portfolio name is required"),
      position: Yup.string().required("Position is required"),
      company: Yup.string().required("Company is required"),
      startDate: Yup.date().required("Start date is required"),
      endDate: Yup.date().required("End date is required"),
      descriptionPortfolio: Yup.string().required("description is required"),
    })
  ),
});
