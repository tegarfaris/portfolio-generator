import { Flex, Input, Text } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

const BackgroundSection = () => {
  const { watch, setValue } = useFormContext();

  const onDropBg = React.useCallback(
    (bgImage: any[]) => {
      if (bgImage[0]) {
        const reader = new FileReader();

        reader.onloadend = () => {
          // The result property contains the base64-encoded string
          setValue("backgroundImage", reader.result);
        };

        // Read the file as a data URL, which will result in a base64 string
        reader.readAsDataURL(bgImage[0]);
      }
    },
    [setValue]
  );

  const sizeValidatator = (file: any) => {
    if (file.size > 2097152) {
      return {
        code: "size-too-big",
        message: `Size is larger than 2mb`,
      };
    }

    return null;
  };

  const {
    acceptedFiles: bgImage,
    fileRejections: bgImageRejections,
    getRootProps: getBgImageRootProps,
    getInputProps: getBgImageInputProps,
  } = useDropzone({
    onDrop: onDropBg,
    accept: { "Image/png": [".png", ".jpg", ".jpeg"] },
    validator: sizeValidatator,
  });

  const BackgroundRejectionItems = bgImageRejections.map(
    ({ file, errors }: any) => (
      <Flex key={file.path}>
        {errors.map((e: any) => (
          <Text key={e.code} color="red">
            Warning: {e.message} !
          </Text>
        ))}
      </Flex>
    )
  );

  const filesBg = bgImage.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      gap={3}
      bg="#E3E3E3"
      border="1px dashed #B1B2B3"
      borderRadius="10px"
      p={5}
      {...getBgImageRootProps({ className: "dropzone" })}
    >
      <input
        type="file"
        defaultValue={
          watch("backgroundImage") && watch("backgroundImage")[0]
            ? watch("backgroundImage")[0].preview
            : ""
        }
        // onChange={(e) => handleFileChange(e)}
        {...getBgImageInputProps()}
      />

      <Text
        color="#B1B2B3"
        p={3}
        h="fit-content"
        borderRadius="10px"
        fontSize="sm"
        fontWeight={600}
        textAlign="center"
      >
        Drag &lsquo;n drop some files here,
        <br /> or click to select files
      </Text>
      <Text color="#B1B2B3">max size 2mb</Text>
      <Text>{filesBg && filesBg}</Text>
      <Text>{BackgroundRejectionItems && BackgroundRejectionItems}</Text>
    </Flex>
  );
};

export default BackgroundSection;
