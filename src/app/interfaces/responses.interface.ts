export interface SigninResponseModel {
  status: boolean;
  token: string;
}

export interface SigninTokenResponseModel {
  id : string;
  iat: string;
  exp: string;
}
