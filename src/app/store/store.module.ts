import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { BookState } from './book.state';

@NgModule({
  imports: [
    NgxsModule.forRoot([BookState]),
    NgxsStoragePluginModule.forRoot({
      migrations: [
        {
          version: 1,
          key: 'zoo',
          versionKey: 'myVersion',
          migrate: state => {
            return {
              newAnimals: state.animals,
              version: 2 // Important to set this to the next version!
            };
          }
        }
      ]
    })
  ],
  exports: [NgxsModule]
})
export class StoreModule {}
