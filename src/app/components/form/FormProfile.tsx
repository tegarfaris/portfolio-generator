import { Flex, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";

const FormProfile = () => {
  const { register, watch } = useFormContext();
  return (
    <Flex flexDir="column" gap={3} p={5}>
      <Input
        {...register("profileName")}
        placeholder="Nama"
        value={watch("profileName")}
        maxLength={20}
      />
      <Input
        {...register("title")}
        value={watch("title")}
        placeholder="Title/Posisi"
        maxLength={20}
      />
      <Textarea
        {...register("descriptionProfile")}
        value={watch("descriptionProfile")}
        placeholder="Deskripsi"
        maxLength={250}
      />
    </Flex>
  );
};

export default FormProfile;
