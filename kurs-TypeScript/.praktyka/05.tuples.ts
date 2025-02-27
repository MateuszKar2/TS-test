//jest to tablica o określonej długości oraz określonych typach na określonym indexie


const color: [number, string, boolean] = [23, "sda", true]







type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "OK"];
// goodRes[0] = "200" -false
goodRes.push(234); //-true

const responses: HTTPResponse[] = [[404, "Not Found"]]