import { useDrag, DragSourceMonitor, DragObjectFactory } from "react-dnd";

import { Container, Label } from "./styles";

export default function index(props: dataCards) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>{props.content}</p>
      {props.user && (
        <img
          src="https://avatars.githubusercontent.com/u/54457696?s=48&v=4"
          alt=""
        />
      )}
    </Container>
  );
}
