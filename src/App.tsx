import { useEffect, useState } from "react";
import "./App.css";

import { Stage, Sprite, useApp, useTick } from "@pixi/react";

const App = () => {
  const [frames, setFrames] = useState([]);
  const [rot, setRot] = useState(0);
  const app = useApp();

  useTick((delta) => setRot((r) => r + 0.01 * delta));

  // load
  useEffect(() => {
    app.loader
      .add(
        "https://pixijs.io/examples/examples/assets/spritesheet/fighter.json",
      )
      .load((_, resource) => {
        setFrames(
          Object.keys(resource[spritesheet].data.frames).map((frame) =>
            PIXI.Texture.from(frame),
          ),
        );
      });
  }, []);

  if (frames.length === 0) {
    return null;
  }

  return (
    <Stage>
      <Container rotation={rot} x={width / 2} y={height / 2}>
        <AnimatedSprite
          animationSpeed={0.5}
          isPlaying={true}
          textures={frames}
          anchor={0.5}
        />
      </Container>
    </Stage>
  );
};

export default App;
