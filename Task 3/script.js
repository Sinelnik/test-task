function parseParamsUrlToObject(urlRequest) {
  let indexStartUrlParams = urlRequest.search(/\?/);
  let UrlParams = urlRequest.substring(indexStartUrlParams+1, urlRequest.length);
  const reg1 = /\&/g;
  const reg2 = /\=/g;
  UrlParams = UrlParams.replace(reg1,' ').replace(reg2,' ');
  let arr = UrlParams.split(' ');
  let obj = {};
  for (let i = 0; i < arr.length; i= i+2) {
    obj[arr[i]] = arr[i+1];
  }
  
  console.log(obj);

}

parseParamsUrlToObject('http://localhost:63342/test/index.html?em=world&ew=book');