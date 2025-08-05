import { DtoType } from "../../constant/nestjs-constants.constant";

/**
 * Retourne le suffixe approprié pour le nom de classe DTO.
 */
export function nestjsGetDtoSuffix(dtoType: DtoType): string {
  switch (dtoType) {
    case DtoType.CREATE:
      return "Create";
    case DtoType.UPDATE:
      return "Update";
    case DtoType.RESPONSE:
      return "Response";
    default:
      return "";
  }
}
