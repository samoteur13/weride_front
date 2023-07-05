export interface UseFetchDataInterface {
  url: string;
  method: string;
  token?: string | null | undefined;
  dataSend?: any;
  send?: boolean;
}
