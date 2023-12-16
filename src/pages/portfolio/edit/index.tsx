import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa6";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { FiMaximize2 } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

const EditPage = () => {
  const { register, watch, setValue } = useFormContext();
  const onDropBg = React.useCallback(
    (bgImage: any[]) => {
      setValue(
        "backgroundImage",
        bgImage.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setValue]
  );
  const onDropAvatar = React.useCallback(
    (avatar: any[]) => {
      setValue(
        "profileImage",
        avatar.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
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
  const AvatarRejectionItems = avatarRejections.map(({ file, errors }: any) => (
    <Flex key={file.path}>
      {errors.map((e: any) => (
        <Text key={e.code} color="red">
          Warning: {e.message} !
        </Text>
      ))}
    </Flex>
  ));

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
  const filesBg = bgImage.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const filesAvatar = avatar.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Flex flexDir="column" gap={5} w="fit-content">
      <Button
        variant="solid"
        bg="#2A9EF4"
        borderRadius="10px"
        h="min-content"
        px={5}
        color="white"
        w="fit-content"
      >
        Simpan Perubahan
      </Button>

      <Flex w="full" bg="white" borderRadius="10px" p={5}>
        <Accordion allowMultiple w="lg">
          <AccordionItem
            borderTop="none"
            border="1px solid #E3E3E3"
            borderRadius="10px"
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: "#EAF5FE",
                      color: "#2A9EF4",
                      borderRadius: "10px 10px 0 0",
                    }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="#2A9EF4"
                      p={3}
                      fontWeight={600}
                    >
                      Background Image
                    </Box>
                    {isExpanded ? (
                      <TbArrowsDiagonalMinimize2 />
                    ) : (
                      <FiMaximize2 />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4}>
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
                    <Text>
                      {BackgroundRejectionItems && BackgroundRejectionItems}
                    </Text>
                  </Flex>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <Divider py={3} />
          <AccordionItem
            borderTop="none"
            border="1px solid #E3E3E3"
            borderRadius="10px"
            mt={3}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: "#EAF5FE",
                      color: "#2A9EF4",
                      borderRadius: "10px 10px 0 0",
                    }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="#2A9EF4"
                      p={3}
                      fontWeight={600}
                    >
                      Profile Image
                    </Box>
                    {isExpanded ? (
                      <TbArrowsDiagonalMinimize2 />
                    ) : (
                      <FiMaximize2 />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4}>
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
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <Divider py={3} />
          <AccordionItem
            borderTop="none"
            border="1px solid #E3E3E3"
            borderRadius="10px"
            mt={3}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: "#EAF5FE",
                      color: "#2A9EF4",
                      borderRadius: "10px 10px 0 0",
                    }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="#2A9EF4"
                      p={3}
                      fontWeight={600}
                    >
                      Profile
                    </Box>
                    {isExpanded ? (
                      <TbArrowsDiagonalMinimize2 />
                    ) : (
                      <FiMaximize2 />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4}>
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
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <Divider py={3} />
          <AccordionItem
            borderTop="none"
            border="1px solid #E3E3E3"
            borderRadius="10px"
            mt={3}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton
                    _expanded={{
                      bg: "#EAF5FE",
                      color: "#2A9EF4",
                      borderRadius: "10px 10px 0 0",
                    }}
                  >
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      color="#2A9EF4"
                      p={3}
                      fontWeight={600}
                    >
                      Portfolio
                    </Box>
                    {isExpanded ? (
                      <TbArrowsDiagonalMinimize2 />
                    ) : (
                      <FiMaximize2 />
                    )}
                  </AccordionButton>
                </h2>

                <AccordionPanel pb={4}>
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
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default EditPage;
