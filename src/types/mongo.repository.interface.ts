export interface MongoRepository<T> {
  findById(_id: string): Promise<T | null>;
  save(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  deleteById(_id: string): Promise<void>;
}
