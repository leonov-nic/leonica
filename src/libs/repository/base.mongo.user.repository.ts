import { Document, Model } from 'mongoose';
import { NotFoundException } from '@nestjs/common';

import { MongoRepository } from '../../types/mongo.repository.interface';
import { UserEntity } from 'src/modules/user-module/user.entity';
import mongoose from 'mongoose';


export abstract class BaseMongoUserRepository<T extends UserEntity, DocumentType extends Document>
  implements MongoRepository<UserEntity> {

  constructor(
    protected readonly model: Model<DocumentType>,
  ) {}

  protected createEntityFromDocument(document: Document): UserEntity | null {
    if (!document) { return null;}
    const plainObject = document.toObject({getters: true, versionKey: false, flattenObjectIds: true});
    return new UserEntity(plainObject);
  }

   public async findById(_id: string): Promise<UserEntity | null> {
    // @ts-ignore
    const document = await this.model.findById(_id).exec();
    if (!document) {throw new NotFoundException(`Document with id ${_id} not found`);}
    return this.createEntityFromDocument(document);
  }

  public async save(entity: T): Promise<void> {
    await new this.model(entity.toPOJO()).save();
  }

  public async update(entity: T): Promise<void> {
    if (!mongoose.Types.ObjectId.isValid(entity._id)) { throw new Error('Invalid _id');}

    const updatedDocument = await this.model.findByIdAndUpdate(
      entity._id,
      entity.toPOJO(),
      {new: true}
    );

    if (!updatedDocument) { throw new NotFoundException(`Document with id ${entity._id} not found`); }
  }

  public async deleteById(_id: string): Promise<void> {
    const deletedDocument = await this.model.findByIdAndDelete(_id).exec();
    if (!deletedDocument) {throw new NotFoundException(`Entity with id ${_id} not found.`);}
  }
}
