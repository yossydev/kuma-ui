import { styled } from "zero-styled/styled";
import {
  typography,
  compose,
  color,
  all,
  TypographyProps,
  ColorProps,
  StyledProps,
} from "zero-styled/system";

function App() {
  return (
    <VStack p={[4, 8]} m="2px" _hover={{ flexDir: "row" }}>
      <Text fontSize="40px" color="orange">
        hello world
      </Text>
    </VStack>
  );
}

export const VStack = styled("div")<StyledProps>`
  ${all}
  display: flex;
  flex-direction: column;
`;

const Text = styled("p")<TypographyProps & ColorProps>`
  ${compose(color, typography)}
`;

export default App;
