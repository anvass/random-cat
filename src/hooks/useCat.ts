import { useCallback, useState } from 'react';

interface UseCatReturn {
  catUrl: string;
  isCatLoading: boolean;
  fetchCat: () => Promise<void>;
}

function useCat(): UseCatReturn {
  const [catUrl, setCatUrl] = useState<string>('');
  const [isCatLoading, setIsCatLoading] = useState<boolean>(true);

  const fetchCat = useCallback(async () => {
    try {
      setIsCatLoading(true);
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
      setIsCatLoading(false);
    }
  }, []);

  return {
    catUrl,
    isCatLoading,
    fetchCat,
  };
}

export default useCat;
