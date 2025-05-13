import { useEffect, useState } from 'react';
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
  const [refreshIsChecked, setRefreshIsChecked] = useState(false);

  const handleChangeEnabled = () => {
    setGetCatButtonDisabled(!getCatButtonDisabled);
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

  const handleGetCatButtonClick = () => {
    fetchCatImage();
  };

  const handleChangeRefresh = (isChecked: boolean) => {
    setRefreshIsChecked(isChecked);
  };

  useEffect(() => {
    if (refreshIsChecked) {
      const interval = setInterval(() => {
        console.log('test');
        fetchCatImage();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [refreshIsChecked]);

  return (
    <>
      <Wrapper>
        <Checkbox label="Enabled" onChange={handleChangeEnabled} />
        <Checkbox
          label="Auto-refresh every 5 seconds"
          onChange={handleChangeRefresh}
        />

        <Button
          disabled={getCatButtonDisabled}
          onClick={handleGetCatButtonClick}
        >
          <span>Get cat</span>
        </Button>
        {loading ? (
          <Loader />
        ) : catUrl ? (
          <Image src={catUrl} alt="Random cat" />
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
