import { useState } from 'react';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import Wrapper from './components/Wrapper/Wrapper';
import Image from './components/Image/Image';
import Loader from './components/Loader/Loader';

function App() {
  const [getCatButtonDisabled, setGetCatButtonDisabled] =
    useState<boolean>(true);
  const [catUrl, setCatUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetCatButtonClick = () => {
    fetchCatImage();
  };

  const handleChangeEnabled = () => {
    setGetCatButtonDisabled(!getCatButtonDisabled);
  };

  const handleChangeRefresh = () => {
    console.log('Refresh');
  };

  const fetchCatImage = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search'
      );
      const data = await response.json();

      if (!response.ok || !data.length) {
        throw new Error('Failed to fetch cat image');
      }

      setCatUrl(data[0].url);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Checkbox label="Enabled" onChange={handleChangeEnabled}></Checkbox>
        <Checkbox
          label="Auto-refresh every 5 seconds"
          onChange={handleChangeRefresh}
        ></Checkbox>

        <Button
          disabled={getCatButtonDisabled}
          onClick={handleGetCatButtonClick}
        >
          <span>Get cat</span>
        </Button>
        {loading ? (
          <Loader></Loader>
        ) : catUrl ? (
          <Image src={catUrl} alt="Random cat" />
        ) : (
          ''
        )}
      </Wrapper>
    </>
  );
}

export default App;
