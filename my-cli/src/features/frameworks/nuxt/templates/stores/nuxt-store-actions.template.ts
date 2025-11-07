import { I } from "@faker-js/faker/dist/airline-CHFQMWko";
import { IEntityJson } from "@features/parsersMdj/models/entity-json.model";

export function nuxtStoreActionsFindAllTemplate(
  entity: IEntityJson
): string {
  return `
    async findAll() {
      const result = await $fetch<ApiResponse<${entity.namePascalCase}[]>>(\`\${this.apiUrl}\`, {
        method: 'GET',
      })
      if (result.data) {
        this.${entity.nameCamelCase}s = result.data
      }
      return this.${entity.nameCamelCase}s
    },    
`;
}
export function nuxtStoreActionsFindByIdTemplate(
  entity: IEntityJson
): string {
  return `
    async findById(id: number) {
      try {
        const result = await $fetch<ApiResponse<${entity.namePascalCase}>>(\`\${this.apiUrl}/\${id}\`, {
          method: 'GET',
        })
        if (result.success && result.data) {
        /*
          const index = this.${entity.nameCamelCase}s.findIndex(t => t.id === id)
          if (index !== -1) {
            this.${entity.nameCamelCase}s[index] = result.data
          } else {
            this.${entity.nameCamelCase}s.push(result.data)
          }
            */
        }
        return result.data
      } catch (error) {
        console.error('Error finding ${entity.tableName}:', error)
        throw error
      }
    },`;
}
export function nuxtStoreActionsCreateTemplate(
  entity: IEntityJson
): string {
  return `
    async create(body:${entity.namePascalCase}Insert) {
      try {
        const result = await $fetch<ApiResponse<${entity.namePascalCase}>>('/api/${entity.nameKebabCase}s', {
          method: 'POST',
          body,
        })
        if (result.success && result.data) {
          this.${entity.nameCamelCase}s.push(result.data)
        }
        return result.data
      } catch (error) {
        console.error('Error creating ${entity.tableName}:', error)
        throw error
      }
    },`;
}
export function nuxtStoreActionsCreateManyTemplate(
  entity: IEntityJson
): string {
  return `
    async createMany(transactions: BankTransaction[]) {
      // const created: Transaction[] = []
      for (const body of transactions) {
        const newTrans = toNewTransaction(body)
        logInfo('Creating transaction:', newTrans)
        // await this.create(newTrans)
        // try {
        //   const result = await $fetch<ApiResponse<Transaction>>('/api/${entity.nameKebabCase}s', {
        //     method: 'POST',
        //     body,
        //   })
        //   if (result.success && result.data) {
        //     this.transactions.push(result.data)
        //     created.push(result.data)
        //   }
        // } catch (error) {
        //   console.error('Error creating transaction:', error)
        //   // ici tu peux décider si tu continues ou tu throw
        // }
      }

      // return created
    },
`;
}
export function nuxtStoreActionsUpdateTemplate(
  entity: IEntityJson
): string {
  return `
    async update(body: Partial<${entity.namePascalCase}>): Promise<${entity.namePascalCase}> {
      if (!body.id) {
        throw new Error('ID is required')
      }      
      try {
        const result = await $fetch<ApiResponse<${entity.namePascalCase}>>(\`\${this.apiUrl}/\${body.id}\`, {
          method: 'PATCH',
          body,
        })
        if (result.success && result.data) {
        /*
          const index = this.transactions.findIndex(t => t.id === body.id)
          if (index !== -1) {
            this.transactions[index] = { ...this.transactions[index], ...result.data }
          }
        */
        }
        return result.data
      } catch (error) {
        console.error('Error updating ${entity.tableName}', error)
        throw error
      }
    },
`;
}
export function nuxtStoreActionsDeleteTemplate(
  entity: IEntityJson
): string {
  return `
    async delete(id: number) {
      try {
        const result = await $fetch<ApiResponse<any>>(\`\${this.apiUrl}/\${id}\`, {
          method: 'DELETE',
        })
        if (result.success) {
          this.${entity.nameCamelCase}s = this.${entity.nameCamelCase}s.filter(t => t.id !== id)
        }
        return result.message
      } catch (error) {
        console.error('Error deleting ${entity.tableName}:', error)
        throw error
      }
    },
  },
`;
}


export function nuxtStoreActionsFindAllCacheTemplate(
  entity: IEntityJson
): string {
  const listProp = `${entity.nameCamelCase}s`

  return `
    /**
     * Load all ${entity.namePascalCase}.
     * @param opts Optional fetch options:
     *  - force: boolean to bypass cache (default: false)
     *  - query: Record<string, any> to add as search params
     *  - headers: Request headers
     */
    async findAll(opts?: {
      force?: boolean
      query?: Record<string, any>
      headers?: Record<string, string>
    }) {
      const { force = false, query, headers } = opts || {}
      // Optional loading flag & error slot (declare them in state if you use them)
      if (!force && Array.isArray(this.${listProp}) && this.${listProp}.length > 0) {
        return this.${listProp}
      }

      this.loading = true
      this.error = null

      try {
        // Ensure base URL has no trailing slash
        const base = this.apiUrl?.replace(/\\/$/, '') || \`/api/${listProp}\`

        const result = await $fetch<ApiResponse<${entity.namePascalCase}[]>>(\`\${base}\`, {
          method: 'GET',
          params: query,
          headers,
        })

        const data = (result && result.data) ? result.data : []

        if (!Array.isArray(data)) {
          throw new Error('Invalid API response: data is not an array')
        }

        this.${listProp} = data
        // Optional: keep a count flag if your store uses it
        if (typeof this.${entity.nameCamelCase}Count !== 'undefined') {
          this.${entity.nameCamelCase}Count = data.length
        }
        // Optional: mark as loaded
        if (typeof this.${entity.nameCamelCase}IsLoaded !== 'undefined') {
          this.${entity.nameCamelCase}IsLoaded = true
        }

        return this.${listProp}
      } catch (error) {
        console.error('Error fetching ${listProp}:', error)
        this.error = (error as Error)?.message || 'Unknown error'
        throw error
      } finally {
        this.loading = false
      }
    },
`
}


