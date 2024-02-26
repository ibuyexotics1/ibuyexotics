import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

export const DropzoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  grid-column: span 2;
  gap: 20px;

  @media (max-width: 1024px) {
    grid-column: auto;
  }
`;

export const DropzoneBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  color: #ffffff;
  height: 120px;
  border: 2px dashed rgba(189, 189, 189, 0.15);
  cursor: pointer;
  padding: 20px;

  input {
    display: none;
  }
`;

export const DropzoneBoxLabel = styled.p`
  color: #ffffff;
  font-size: 15px;
  text-transform: capitalize;
`;

export const FileDetailsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const FileDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  background: #161616;
  border-radius: 5px;
  width: 100%;
  gap: 20px;
  height: 50px;
`;

export const FileName = styled.p`
  color: white;
  font-size: 15px;
  width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const FileSize = styled.p`
  color: rgb(255, 255, 255, 0.5);
  font-size: 14px;
`;

export const RemoveFile = styled(MdClose)`
  color: white;
  font-size: 22px;
  cursor: pointer;
  border: 1px solid gold;
  border-radius: 50%;
  padding: 2px;
`;
