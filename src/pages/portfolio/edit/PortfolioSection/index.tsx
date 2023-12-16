import { Button, Flex, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { FaTrash } from "react-icons/fa6";

const PortfolioSection = () => {
  const { watch, register } = useFormContext();
  const [portfolios, setPortfolios] = React.useState([
    {
      portfolioName: "",
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleAddPortfolio = () => {
    setPortfolios([
      ...portfolios,
      {
        portfolioName: "",
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleRemovePortfolio = (index: number) => {
    const updatedPortfolios = [...portfolios];
    updatedPortfolios.splice(index, 1);
    setPortfolios(updatedPortfolios);
  };

  return (
    <>
      {portfolios.map((portfolio, index) => (
        <Flex key={index} flexDir="column" gap={3} p={5}>
          <Input
            {...register(`portfolios[${index}].portfolioName`)}
            value={watch(`portfolios[${index}].portfolioName`)}
            placeholder="Nama"
          />
          <Input
            {...register(`portfolios[${index}].position`)}
            value={watch(`portfolios[${index}].position`)}
            placeholder="Posisi"
          />
          <Input
            {...register(`portfolios[${index}].company`)}
            value={watch(`portfolios[${index}].company`)}
            placeholder="Perusahaan"
          />
          <Flex gap={3}>
            <Input
              {...register(`portfolios[${index}].startDate`)}
              value={watch(`portfolios[${index}].startDate`)}
              placeholder="Tanggal Mulai"
              type="date"
            />
            <Input
              {...register(`portfolios[${index}].endDate`)}
              value={watch(`portfolios[${index}].endDate`)}
              placeholder="Tanggal Berakhir"
              type="date"
            />
          </Flex>
          <Textarea
            {...register(`portfolios[${index}].description`)}
            value={watch(`portfolios[${index}].description`)}
            placeholder="Description"
            maxLength={300}
          />
          <Button
            size="sm"
            variant="solid"
            bg="#2A9EF4"
            color="white"
            w="fit-content"
            rightIcon={<FaTrash />}
            onClick={() => handleRemovePortfolio(index)}
          >
            Remove Portfolio
          </Button>
        </Flex>
      ))}
      <Button
        variant="ghost"
        color="#2A9EF4"
        onClick={handleAddPortfolio}
        _hover={{ bg: "transparent" }}
      >
        Add More Portfolio
      </Button>
    </>
  );
};

export default PortfolioSection;
