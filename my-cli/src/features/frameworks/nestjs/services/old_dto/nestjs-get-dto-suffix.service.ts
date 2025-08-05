import { DtoType } from "../../constant/nestjs-constants.constant";

/**
 * Retourne le suffixe approprié pour le nom de classe DTO.
 */
export function nestjsGetDtoSuffix(dtoType: DtoType): string {
  switch (dtoType) {
    case DtoType.CREATE:
      return "CreateDto";
    case DtoType.UPDATE:
      return "UpdateDto";
    case DtoType.RESPONSE:
      return "ResponseDto";
    default:
      return "Dto";
  }
}
