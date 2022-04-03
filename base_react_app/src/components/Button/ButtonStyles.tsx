import styled from "styled-components/macro";
import { appColors } from "../../utils/appColors";

export const StyledButton = styled.button`
  background: ${appColors.red.main};
  color: ${appColors.white};
  font-weight: 700;
  font-size: 20px;
  border-radius: 4px;
  border: none;
  width: 200px;
  height: 75px;
  cursor: pointer;
`;
