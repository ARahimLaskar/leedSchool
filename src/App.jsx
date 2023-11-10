import "./App.css";
import { InputZip } from "./components/InputZip";
import { ZipData } from "./components/ZipData";
import { NoResult } from "./components/NoResult";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { InitialMsg } from "./components/InitialMsg";

const override = {
  margin: "0 auto",
  marginTop: "15%",
};
function App() {
  const { isLoading, zipData, isError, isReset } = useSelector((state) => {
    return state;
  });

  const storedData = localStorage.getItem("persist:persist-key");
  const parsedData = JSON.parse(storedData);

  let parsedData1;
  if (storedData) {
    parsedData1 = JSON.parse(parsedData.zipData);
  }

  if (isLoading) {
    return (
      <ClipLoader
        color="rgb(0, 149, 255)"
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  if (isError) {
    return (
      <>
        <InputZip />
        <NoResult />
      </>
    );
  }

  if (isReset) {
    return (
      <>
        <InputZip />
        <InitialMsg />
      </>
    );
  }

  if (!parsedData1 || storedData == null) {
    return (
      <>
        <InputZip />
        <InitialMsg />
      </>
    );
  }

  if (zipData) {
    return (
      <>
        <InputZip />
        <ZipData />
      </>
    );
  }
}

export default App;
