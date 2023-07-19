export interface InputInterface {
  placeholder?: string;
  onChangeText: any;
  value: any;
  type?: 'decimal'| 'email'| 'none'| 'numeric'| 'search'| 'tel'| 'text'| 'url';
}
