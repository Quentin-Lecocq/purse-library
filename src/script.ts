interface Url {
  url: string;
}

interface SuccessResult {
  status: 'success';
  imageUrl: string;
}

interface ErrorResult {
  status: 'error';
  error: string;
}

type PhotoResult = SuccessResult | ErrorResult;

type PhotoPromiseResult =
  | string
  | {
      error: string;
      url: string;
    };

const getPhotos = async (urls: Url[]): Promise<PhotoResult[]> => {
  try {
    const promises: Promise<PhotoPromiseResult>[] = urls.map((url) =>
      fetch(url.url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.url;
        })
        .catch((error) => ({
          error: error.message,
          url: url.url,
        }))
    );

    const results = await Promise.allSettled(promises);

    return results.map((result): PhotoResult => {
      if (result.status === 'fulfilled') {
        if (typeof result.value === 'string') {
          return {
            status: 'success',
            imageUrl: result.value,
          };
        } else {
          return {
            status: 'error',
            error: result.value.error,
          };
        }
      } else {
        return {
          status: 'error',
          error: result.reason,
        };
      }
    });
  } catch (error) {
    console.error(
      'Something wrong happens',
      error instanceof Error ? error.message : String(error)
    );
    throw error;
  }
};

export { getPhotos };
