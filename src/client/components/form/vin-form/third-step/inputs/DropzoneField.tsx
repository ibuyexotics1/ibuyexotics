import { FileWithPath, useDropzone } from "react-dropzone";
import {
  DropzoneBox,
  DropzoneBoxLabel,
  DropzoneContainer,
  FileDetails,
  FileDetailsWrapper,
  FileName,
  FileSize,
  RemoveFile,
} from "../../../../../utils/styles/form/inputs/DropzoneFieldStyled";
import { useState } from "react";
import { DropzoneFieldProps } from "../../../../../utils/types";

export const DropzoneField: React.FC<DropzoneFieldProps> = ({ setValue }) => {
  const totalMax = 5;
  const [images, setImages] = useState<File[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: totalMax - images.length,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "text/html": [".html", ".htm", ".webp"],
    },
    onDrop: (files) => {
      const newArr: FileWithPath[] = images;
      files.map((file: FileWithPath) => newArr.push(file))
      setImages(newArr);
      setValue("Car Images", newArr);
    },
  });

  const removeImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setValue("Car Images", updatedImages);
  };

  return (
    <DropzoneContainer>
      <DropzoneBox
        {...getRootProps({
          onClick: (e: React.MouseEvent<HTMLDivElement>) => e.preventDefault(),
        })}
      >
        <input type="file" name="file" {...getInputProps()} />
        <DropzoneBoxLabel>
          Drag & drop up to 3 images here, or click to select images
        </DropzoneBoxLabel>
      </DropzoneBox>
      <FileDetailsWrapper>
        {images &&
          images.map((file, index: number) => (
            <FileDetails key={index}>
              <FileName>{file.name}</FileName>
              <FileSize>{(file.size / 1024).toFixed(2)} KB</FileSize>
              <RemoveFile type="button" onClick={() => removeImage(index)} />
            </FileDetails>
          ))}
      </FileDetailsWrapper>
    </DropzoneContainer>
  );
};
