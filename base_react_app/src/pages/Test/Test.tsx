import { Button } from "../../components/Button/Button";

export const Test = () => {
  return (
    <>
      <h1>This is a test page</h1>
      <Button
        onClick={() => {
          alert("Click !");
        }}
      >
        Test !
      </Button>
    </>
  );
};
