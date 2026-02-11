import { IDataManagerService } from "@/types/services/data-manager-service.interface.js";

import { BaseService } from "./base-service.service.js";

export class DataManagerService
  extends BaseService
  implements IDataManagerService
{
  readonly serviceName = "DataManagerService";

  // Surchargez init() seulement si nécessaire
  async init(): Promise<void> {
    await super.init();
    // Logique d'initialisation spécifique
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
