import { State } from '@ngxs/store';

@State<string[]>({
  name: 'books',
  defaults: []
})
export class BookState {}
