import styled from "styled-components";

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => (prop as string) !== "done",
})<{ done: boolean }>`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  opacity: ${( props: { done: boolean }) => (props.done ? 0.6 : 1)};

  & + div {
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background-color: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
