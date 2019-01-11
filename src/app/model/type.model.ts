import {EtatPersonnelModel} from "./etatPersonnel.model";

/**
 * Type
 */
export class TypeModel {
  /** Identifiant **/
  public id: string;
  /** List of Private Status **/
  public etatList: EtatPersonnelModel[];
  /** Name **/
  public typeName: string;
}
