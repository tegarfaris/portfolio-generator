import React from "react";
import { FieldValues, UseFormReset, useFormContext } from "react-hook-form";

const useGetPortfolio = (reset: UseFormReset<FieldValues>) => {
  React.useEffect(() => {
    const storageItem = localStorage.getItem("portfolio");

    if (storageItem) {
      reset(JSON.parse(storageItem));
    }
  }, [reset]);
};

export default useGetPortfolio;
