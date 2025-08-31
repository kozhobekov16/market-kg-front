declare type PrimitiveValue = boolean | number | string | bigint | symbol | null | undefined
declare type AnyValue = PrimitiveValue | Date | AnyValue[]
declare type AnyShape = Record<string, AnyValue | AnyShape>

declare type ResponseModel<T extends object> = {
  success: boolean;
  data: T
  error: string | null
}

declare type ImagesModel = {
  Id: number
  Url: string
  Name: string
  PhotoBase64: string
  ContentType: string
}[]

declare type ProductMagazineModel = {
  MagazineId: number
  MagazineName: string
  MagazinePhotoUrl: string
}