import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import Wrapper from './components/Wrapper/Wrapper';
import Image from './components/Image/Image';
import Loader from './components/Loader/Loader';
import useCat from './hooks/useCat';

function App() {
  const [isRequestDisabled, setRequestDisabled] = useState<boolean>(true);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const { catUrl, isCatLoading, fetchCat } = useCat();

  const handleGetCatButtonClick = () => {
    fetchCat();
  };

  const handleChangeEnabled = (isChecked: boolean) => {
    setRequestDisabled(!isChecked);
  };

  const handleChangeRefresh = (isChecked: boolean) => {
    setShouldRefresh(isChecked);
  };

  useEffect(() => {
    if (shouldRefresh) {
      const interval = setInterval(fetchCat, 5000);

      return () => clearInterval(interval);
    }
  }, [shouldRefresh, fetchCat]);

  return (
    <>
      <Wrapper>
        <Checkbox label="Enabled" onChange={handleChangeEnabled} />
        <Checkbox
          label="Auto-refresh every 5 seconds"
          onChange={handleChangeRefresh}
        />

        <Button disabled={isRequestDisabled} onClick={handleGetCatButtonClick}>
          <span>Get cat</span>
        </Button>
        {isCatLoading ? (
          <Loader />
        ) : catUrl ? (
          <Image src={catUrl} alt="Random cat" />
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
