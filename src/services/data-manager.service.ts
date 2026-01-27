import { BaseService } from "./base-service.service.js";
import { IDataManagerService } from "@/types/data-manager-service.interface.js";

export class DataManagerService
  extends BaseService
  implements IDataManagerService
{
  readonly serviceName = "DataManagerService";
  public override async init(): Promise<void> {
    // Logique spécifique : connexion à la base de données
    await this.connect();
  }
  private async connect() {
    // ... code de connexion
  }
  //   constructor(sqliteInstance, mysqlInstance) {
  //     this.local = sqliteInstance;
  //     this.backup = mysqlInstance;
  //   }

  // Méthode standardisée que tous les plugins utiliseront
  async query(sql: string, params = []) {
    // 1. Exécution locale (Priorité vitesse)
    //     const result = await this.local.all(sql, params);
    //     // 2. Réplication de sécurité (Non-bloquante)
    //     if (this.isWriteQuery(sql)) {
    //       this.backup
    //         .execute(sql, params)
    //         .catch((err) => console.error("Backup Sync Failed:", err.message));
    //     }
    //     return result;
  }

  isWriteQuery(sql: string): boolean {
    return /UPDATE|INSERT|DELETE|CREATE/i.test(sql);
  }
}
