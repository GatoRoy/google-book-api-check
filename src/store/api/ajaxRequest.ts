import { API_HOST } from '../constants';

export async function ajaxGet(
  url: string,
  options?: RequestInit,
): Promise<any> {
  return ajaxRequest(url, {
    headers: {
      type: 'GET',
      'Content-Type': 'application/json',
      crossorigin: 'anonymous',
      ...options?.headers,
    },
    ...options,
  });
}

export async function ajaxPost(
  url: string,
  data: any,
  options?: RequestInit,
): Promise<any> {
  return ajaxRequest(url, {
    headers: {
      type: 'POST',
      'Content-Type': 'application/json',
      crossorigin: 'anonymous',
      ...options?.headers,
    },
    body: JSON.stringify(data),
    ...options,
  });
}

function ajaxRequest(url: string, options?: RequestInit): Promise<any> {
  console.log('ajaxRequest -> url=', url, ',  options=', options);

  return new Promise<any>((resolve, reject) => {
    const promiseResponse: Promise<Response> = fetch(`${API_HOST}${url}`, {
      ...options,
      headers: {
        ...options?.headers,
      },
    });

    promiseResponse
      .then(response => {
        console.log('ajaxRequest -> response=', response);

        if (
          response.status === 204 ||
          response.status === 205 ||
          response.status === 202
        ) {
          resolve(null);
        }

        let responseData;
        try {
          responseData = response.json();
        } catch (errorJson) {
          console.error(errorJson);

          try {
            responseData = readResponseStream(response.body);
          } catch (errorReader) {
            console.error(errorReader);

            reject(errorReader);
          }
        }

        resolve(responseData);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function readResponseStream(readableStream) {
  const reader = readableStream.getReader();
  let charsReceived = 0;
  let result = '';

  // read() returns a promise that resolves
  // when a value has been received
  return reader.read().then(function processText({ done, value }) {
    // Result objects contain two properties:
    // done  - true if the stream has already given you all its data.
    // value - some data. Always undefined when done is true.
    if (done) {
      console.log('readResponseStream -> Stream complete');
      // para.textContent = result;
      return result;
    }

    charsReceived += value.length;
    const chunk = value;
    // const listItem = document.createElement('li');
    // listItem.textContent = `Read ${charsReceived} characters so far. Current chunk = ${chunk}`;
    // list2.appendChild(listItem);

    result += chunk;

    // Read some more, and call this function again
    return reader.read().then(processText);
  });
}
