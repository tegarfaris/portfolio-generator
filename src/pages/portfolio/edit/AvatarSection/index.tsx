import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

const AvatarSection = () => {
  const { watch, setValue } = useFormContext();

  const onDropAvatar = React.useCallback(
    (avatar: any[]) => {
      if (avatar[0]) {
        const reader = new FileReader();

        reader.onloadend = () => {
          // The result property contains the base64-encoded string
          setValue("profileImage", reader.result);
        };

        // Read the file as a data URL, which will result in a base64 string
        reader.readAsDataURL(avatar[0]);
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
    acceptedFiles: avatar,
    fileRejections: avatarRejections,
    getRootProps: getAvatarRootProps,
    getInputProps: getAvatarInputProps,
  } = useDropzone({
    onDrop: onDropAvatar,
    accept: { "Image/png": [".png", ".jpg", ".jpeg"] },
    validator: sizeValidatator,
  });

  const AvatarRejectionItems = avatarRejections.map(({ file, errors }: any) => (
    <Flex key={file.path}>
      {errors.map((e: any) => (
        <Text key={e.code} color="red">
          Warning: {e.message} !
        </Text>
      ))}
    </Flex>
  ));

  const filesAvatar = avatar.map((file: any) => (
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
      {...getAvatarRootProps({ className: "dropzone" })}
    >
      <input
        type="file"
        defaultValue={
          watch("profileImage") && watch("profileImage")[0]
            ? watch("profileImage")[0].preview
            : ""
        }
        {...getAvatarInputProps()}
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
      <Text>{filesAvatar}</Text>
      <Text>{AvatarRejectionItems && AvatarRejectionItems}</Text>
    </Flex>
  );
};

export default AvatarSection;
