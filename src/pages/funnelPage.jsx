import { Children, cloneElement, useState } from "react";

const Step = ({ update, back, next, children }) => {
  return cloneElement(children, {
    ...children.props,
    update,
    back,
    next,
  });
};

const Funnel = (props) => {
  const { steps, children } = props;
  const [currentStep, setCurrentStep] = useState(steps[0]);

  const update = (step) => {
    setCurrentStep(step);
  };

  const back = () => {
    const currentIndex = steps.indexOf(currentStep);

    if (currentIndex === 0) return;
    setCurrentStep(steps[currentIndex - 1]);
  };

  const next = () => {
    const currentIndex = steps.indexOf(currentStep);

    if (currentIndex === steps.length - 1) return;
    setCurrentStep(steps[currentIndex + 1]);
  };

  return Children.map(children, (child) => {
    if (child.props.name === currentStep) {
      return cloneElement(child, {
        ...child.props,
        update,
        back,
        next,
      });
    }
  });
};

Funnel.Step = Step;

const Children1 = (props) => {
  const { back, next } = props;

  return (
    <div>
      <button onClick={next}>다음</button>
      <button onClick={back}>이전</button>
      자식1
    </div>
  );
};

const Children2 = (props) => {
  const { back, next } = props;

  return (
    <div>
      <button onClick={next}>다음</button>
      <button onClick={back}>이전</button>
      자식2
    </div>
  );
};

const Children3 = (props) => {
  const { back, next, update } = props;

  return (
    <div>
      <button onClick={next}>다음</button>
      <button onClick={back}>이전</button>
      <button onClick={() => update("children1")}>처음으로</button>
      자식3
    </div>
  );
};

const FunnelPage = () => {
  return (
    <Funnel steps={["children1", "children2", "children3"]}>
      <Funnel.Step name="children1">
        <Children1 />
      </Funnel.Step>
      <Funnel.Step name="children2">
        <Children2 />
      </Funnel.Step>
      <Funnel.Step name="children3">
        <Children3 />
      </Funnel.Step>
    </Funnel>
  );
};

export default FunnelPage;
