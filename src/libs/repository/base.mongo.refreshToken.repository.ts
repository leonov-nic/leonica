import { Document, Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

import { MongoRepository } from '../../types/mongo.repository.interface';
import { RefreshTokenEntity } from 'src/modules/authentication/refresh-module/refresh-token.entity';
import { EntityFactory } from 'src/types/entity-factory-interface';
import { StorableEntity } from 'src/types/storable-entity.interface';
import mongoose from 'mongoose';

export abstract class BaseMongoRefreshTokenRepository<T extends RefreshTokenEntity & StorableEntity<ReturnType<T['toPOJO']>>, DocumentType extends Document>
  implements MongoRepository<T> {

  constructor(
    protected entityFactory: EntityFactory<T>,
    protected readonly model: Model<DocumentType>,
  ) {}

  protected createEntityFromDocument(document: Document): T | null {
    if (!document) { return null;}
    const plainObject = document.toObject({getters: false, versionKey: false, flattenObjectIds: true}) as ReturnType<T['toPOJO']>;
    return this.entityFactory.create(plainObject);
  }


   public async findById(_id: string): Promise<T | null> {
    // @ts-ignore
    const document = await this.model.findById(_id).exec();
    if (!document) {throw new NotFoundException(`Document with id ${_id} not found`);}
    return this.createEntityFromDocument(document);
  }

  public async save(entity: T): Promise<void> {
    await new this.model(entity.toPOJO()).save();
  }

  public async update(entity: T): Promise<void> {
    if (entity.id && !mongoose.Types.ObjectId.isValid(entity.id)) { throw new Error('Invalid _id');}

    const updatedDocument = await this.model.findByIdAndUpdate(
      entity.id,
      entity.toPOJO(),
      {new: true}
    );

    if (!updatedDocument) { throw new NotFoundException(`Document with id ${entity.id} not found`); }
  }

  public async deleteById(_id: string): Promise<void> {
    const deletedDocument = await this.model.findByIdAndDelete(_id).exec();
    if (!deletedDocument) {throw new NotFoundException(`Entity with id ${_id} not found.`);}
  }
}
